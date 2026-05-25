/**
 * NEURALIS - Web Audio API Synthesis & Streaming Engine
 * Procedurally generates retro-synthwave ambient chords, pulses, and leads,
 * and handles direct high-fidelity streaming of CORS-safe real-world MP3 files
 * and local user blobs.
 */

class AudioEngine {
  constructor() {
    this.audioCtx = null;
    this.analyser = null;
    this.masterGain = null;
    this.delayNode = null;
    this.delayFeedback = null;
    this.filterNode = null;
    
    // HTML5 audio stream nodes
    this.audioElement = null;
    this.mediaSource = null;
    
    // Playback state
    this.isPlaying = false;
    this.currentTrack = null;
    this.activeNodes = [];
    this.schedulerTimer = null;
    this.currentTime = 0;
    
    // Option parameters
    this.isMuted = false;
    this.volume = 0.8;
    this.isLooping = false;
    this.isShuffling = false;
    
    // Synthesis timing state
    this.lastScheduledTime = 0;
    this.chordStep = 0;
    this.melodyStep = 0;
    
    // Event listener callbacks
    this.onPlayStateChange = null;
    this.onTimeUpdate = null;
  }

  /**
   * Initializes the Web Audio API context. Must be triggered via user interaction.
   */
  initContext() {
    if (this.audioCtx) return;

    // Create browser context
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContextClass();
    
    // Create master nodes
    this.analyser = this.audioCtx.createAnalyser();
    this.analyser.fftSize = 512;
    
    this.masterGain = this.audioCtx.createGain();
    this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);

    // Create advanced effects: Delay & Feedback for holographic space
    this.delayNode = this.audioCtx.createDelay(1.0);
    this.delayFeedback = this.audioCtx.createGain();
    this.delayNode.delayTime.value = 0.3; // 300ms default
    this.delayFeedback.gain.value = 0.4;  // 40% feedback echo

    // Create Sweeping Lowpass Filter
    this.filterNode = this.audioCtx.createBiquadFilter();
    this.filterNode.type = "lowpass";
    this.filterNode.frequency.value = 1200;
    this.filterNode.Q.value = 2.0;

    // Connect nodes: Synth Voices -> Filter -> Delay -> Master -> Analyser -> Output
    // Also feed Delay back into itself through feedback loop
    this.delayNode.connect(this.delayFeedback);
    this.delayFeedback.connect(this.delayNode);

    // Main routing pipeline
    this.filterNode.connect(this.analyser);
    this.delayNode.connect(this.analyser); // parallel delay stream
    this.analyser.connect(this.masterGain);
    this.masterGain.connect(this.audioCtx.destination);

    // Setup HTML5 Audio element for streaming MP3s / uploaded files
    this.audioElement = new Audio();
    this.audioElement.crossOrigin = "anonymous";
    
    // Create Media Element Source
    this.mediaSource = this.audioCtx.createMediaElementSource(this.audioElement);
    
    // Route it through the same filters and delays so it visualizes and gets echo effects!
    this.mediaSource.connect(this.filterNode);
    this.mediaSource.connect(this.delayNode);
  }

  /**
   * Play a specific track
   */
  play(track) {
    this.initContext();

    // Resume context if suspended (browser security)
    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }

    if (this.isPlaying) {
      this.stop();
    }

    this.currentTrack = track;
    this.isPlaying = true;
    this.currentTime = 0;

    // 1. YouTube Video Mode
    if (track.youtubeId) {
      // Pause any ongoing local audio
      if (this.audioElement) this.audioElement.pause();
      this.stopScheduler();
      
      // Triggers UI callbacks in main.js to update timers & play embedded iframe
      if (this.onPlayStateChange) this.onPlayStateChange(true);
      return;
    }

    // 2. Direct Audio Stream Mode (CORS URLs & Local Blobs)
    if (track.audioUrl) {
      this.stopScheduler();
      this.clearAllActiveNodes();
      
      // Direct source loading
      this.audioElement.src = track.audioUrl;
      this.audioElement.loop = this.isLooping;
      
      this.audioElement.play().catch(err => {
        console.warn("Audio Element play interrupted: ", err);
      });

      // Bind timing update events
      this.audioElement.ontimeupdate = () => {
        if (!this.isPlaying) return;
        this.currentTime = this.audioElement.currentTime;
        if (this.onTimeUpdate) this.onTimeUpdate(this.currentTime);
      };

      this.audioElement.onended = () => {
        if (!this.isPlaying) return;
        this.isPlaying = false;
        if (this.onPlayStateChange) this.onPlayStateChange(false);
        
        // Automatically trigger next song through global event listener in main.js
        const event = new CustomEvent("track-finished");
        window.dispatchEvent(event);
      };

      if (this.onPlayStateChange) this.onPlayStateChange(true);
      return;
    }

    // 3. Fallback Procedural Audio Synthesizer Mode
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.src = "";
    }
    
    const params = track.synthParams || { delayTime: 0.3, delayFeedback: 0.4, filterCutoff: 1200 };
    this.delayNode.delayTime.setValueAtTime(params.delayTime || 0.3, this.audioCtx.currentTime);
    this.delayFeedback.gain.setValueAtTime(params.delayFeedback || 0.4, this.audioCtx.currentTime);
    this.filterNode.frequency.setValueAtTime(params.filterCutoff || 1200, this.audioCtx.currentTime);

    // Reset synthesis timers
    this.chordStep = 0;
    this.melodyStep = 0;
    this.lastScheduledTime = this.audioCtx.currentTime;
    
    this.startScheduler();

    if (this.onPlayStateChange) this.onPlayStateChange(true);
  }

  /**
   * Pause current stream
   */
  pause() {
    if (!this.isPlaying) return;
    
    if (this.currentTrack && this.currentTrack.audioUrl) {
      if (this.audioElement) this.audioElement.pause();
    } else {
      this.stopScheduler();
      this.clearAllActiveNodes();
    }
    
    this.isPlaying = false;
    if (this.onPlayStateChange) this.onPlayStateChange(false);
  }

  /**
   * Stop synthesis and reset timers
   */
  stop() {
    this.stopScheduler();
    this.clearAllActiveNodes();
    
    if (this.audioElement) {
      this.audioElement.pause();
      try {
        this.audioElement.src = "";
      } catch (err) {
        // Safe reset
      }
    }
    
    this.isPlaying = false;
    this.currentTime = 0;
    if (this.onPlayStateChange) this.onPlayStateChange(false);
  }

  /**
   * Procedural Audio Scheduler Loop
   * Uses look-ahead scheduling for absolute timing accuracy.
   */
  startScheduler() {
    const lookAhead = 0.1; // 100ms
    const interval = 50;   // run check every 50ms

    this.schedulerTimer = setInterval(() => {
      if (!this.isPlaying || !this.currentTrack) return;

      const currentTime = this.audioCtx.currentTime;
      
      // Update our track's timer in seconds
      this.currentTime += 0.05;
      if (this.currentTime >= this.currentTrack.durationSeconds) {
        if (this.isLooping) {
          this.currentTime = 0;
          this.chordStep = 0;
          this.melodyStep = 0;
        } else {
          // Playback finished, trigger event
          this.stop();
          if (this.onTimeUpdate) this.onTimeUpdate(this.currentTrack.durationSeconds);
          const event = new CustomEvent("track-finished");
          window.dispatchEvent(event);
          return;
        }
      }

      if (this.onTimeUpdate) this.onTimeUpdate(this.currentTime);

      // Synthesis Event Scheduling
      const tempo = this.currentTrack.synthParams.tempo;
      const beatDuration = 60 / tempo; // duration of 1 beat
      
      // Schedule next notes if within lookahead window
      while (this.lastScheduledTime < currentTime + lookAhead) {
        // Schedule chord pad on every 4th beat (whole notes)
        if (this.melodyStep % 4 === 0) {
          this.scheduleChord(this.lastScheduledTime, beatDuration * 4);
        }

        // Schedule melody note on every 1/2 beat (eighth notes)
        if (this.melodyStep % 1 === 0) {
          this.scheduleMelodyNote(this.lastScheduledTime, beatDuration * 0.5);
        }

        // Schedule dynamic LFO sweep filter modulation
        this.modulateFilter(this.lastScheduledTime, beatDuration);

        this.lastScheduledTime += beatDuration * 0.5;
        this.melodyStep++;
      }
    }, interval);
  }

  stopScheduler() {
    if (this.schedulerTimer) {
      clearInterval(this.schedulerTimer);
      this.schedulerTimer = null;
    }
  }

  /**
   * Schedule a deep retro chord pad voice
   */
  scheduleChord(time, duration) {
    const params = this.currentTrack.synthParams;
    const chords = params.chords;
    const currentChordFreqs = chords[this.chordStep % chords.length];
    
    this.chordStep++;

    currentChordFreqs.forEach(freq => {
      const osc = this.audioCtx.createOscillator();
      osc.type = params.waveType;
      osc.frequency.setValueAtTime(freq, time);

      const gainNode = this.audioCtx.createGain();
      gainNode.gain.setValueAtTime(0, time);
      gainNode.gain.linearRampToValueAtTime(0.06, time + 0.5);
      gainNode.gain.setValueAtTime(0.06, time + duration - 0.5);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(gainNode);
      gainNode.connect(this.filterNode);
      gainNode.connect(this.delayNode);

      osc.start(time);
      osc.stop(time + duration);

      this.activeNodes.push({ osc, gainNode, stopTime: time + duration });
    });
  }

  /**
   * Schedule an echoing lead cyber melody note
   */
  scheduleMelodyNote(time, duration) {
    const params = this.currentTrack.synthParams;
    const scale = params.leadScale;
    
    const scaleIndex = Math.floor(Math.sin(this.melodyStep * 0.3) * (scale.length / 2) + (scale.length / 2));
    const freq = scale[scaleIndex % scale.length];

    if (this.melodyStep % 8 === 1 || this.melodyStep % 8 === 3 || this.melodyStep % 8 === 6) {
      const osc = this.audioCtx.createOscillator();
      osc.type = params.waveType === "sawtooth" ? "triangle" : "sine";
      osc.frequency.setValueAtTime(freq, time);

      if (Math.random() > 0.6) {
        osc.frequency.setValueAtTime(freq * 2, time);
      }

      const gainNode = this.audioCtx.createGain();
      gainNode.gain.setValueAtTime(0, time);
      gainNode.gain.linearRampToValueAtTime(0.08, time + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, time + duration * 3.0);

      osc.connect(gainNode);
      gainNode.connect(this.filterNode);
      gainNode.connect(this.delayNode);

      osc.start(time);
      osc.stop(time + duration * 3.0);

      this.activeNodes.push({ osc, gainNode, stopTime: time + duration * 3.0 });
    }
  }

  modulateFilter(time, beatDuration) {
    const params = this.currentTrack.synthParams;
    if (!params) return;
    
    const speed = params.lfoSpeed || 4;
    const baseCutoff = params.filterCutoff || 1200;
    
    const lfoSweepVal = Math.sin(time * speed) * 400 + baseCutoff;
    this.filterNode.frequency.setValueAtTime(Math.max(200, lfoSweepVal), time);
  }

  clearAllActiveNodes() {
    this.activeNodes.forEach(node => {
      try {
        node.osc.stop();
      } catch (e) {
        // already stopped
      }
    });
    this.activeNodes = [];
  }

  /**
   * Adjust master gain output level
   */
  setVolume(value) {
    this.volume = parseFloat(value);
    if (this.masterGain && !this.isMuted) {
      this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx ? this.audioCtx.currentTime : 0);
    }
  }

  /**
   * Mute / Unmute
   */
  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.audioCtx.currentTime);
    }
    return this.isMuted;
  }

  toggleShuffle() {
    this.isShuffling = !this.isShuffling;
    return this.isShuffling;
  }

  toggleLoop() {
    this.isLooping = !this.isLooping;
    if (this.audioElement) {
      this.audioElement.loop = this.isLooping;
    }
    return this.isLooping;
  }

  /**
   * Seek: Moves playhead by percentage of total track duration
   */
  seek(percentage) {
    if (!this.isPlaying || !this.currentTrack) return;
    
    const duration = this.currentTrack.durationSeconds;
    const newSeconds = duration * percentage;
    this.currentTime = newSeconds;
    
    if (this.currentTrack.audioUrl) {
      if (this.audioElement) {
        this.audioElement.currentTime = newSeconds;
      }
    } else {
      this.chordStep = Math.floor(newSeconds / 8);
      this.melodyStep = Math.floor(newSeconds / 2);
      if (this.audioCtx) {
        this.lastScheduledTime = this.audioCtx.currentTime;
        this.clearAllActiveNodes();
      }
    }
  }
}

export const audioEngine = new AudioEngine();
