/**
 * NEURALIS - Voice Command Decrypter & Real-Time API Simulator HUD
 * Leverages native browser SpeechRecognition API for hands-free audio controls,
 * and simulates active sockets connecting with Spotify, Last.fm, and Genius APIs.
 */

/* ==========================================================================
   1. VOICE COMMAND DECRYPTER SYSTEM (WEB SPEECH API)
   ========================================================================== */

export class VoiceCommandCenter {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.onCommand = null;       // callback for recognized triggers
    this.onStatusChange = null;  // callback for UI updating
    this.init();
  }

  init() {
    const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognitionClass) {
      console.warn("System Speech: Speech recognition not supported in this browser node.");
      return;
    }

    this.recognition = new SpeechRecognitionClass();
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.lang = "en-US";

    // Bind event states
    this.recognition.onstart = () => {
      this.isListening = true;
      if (this.onStatusChange) this.onStatusChange("listening");
    };

    this.recognition.onend = () => {
      this.isListening = false;
      if (this.onStatusChange) this.onStatusChange("idle");
    };

    this.recognition.onerror = (e) => {
      console.error("Speech decrypt error: ", e.error);
      this.isListening = false;
      if (this.onStatusChange) this.onStatusChange("error");
    };

    this.recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript.toLowerCase().trim();
      console.log(`Speech Decrypted: "${transcript}"`);
      this.parseCommand(transcript);
    };
  }

  toggle() {
    if (!this.recognition) {
      alert("Voice Core: Speech recognition is unavailable in your browser version. Please try Google Chrome or MS Edge.");
      return;
    }

    if (this.isListening) {
      this.recognition.stop();
    } else {
      try {
        this.recognition.start();
      } catch (err) {
        console.warn("Speech start conflict: ", err);
      }
    }
  }

  /**
   * Decrypt triggers and execute system operations
   */
  parseCommand(text) {
    if (!this.onCommand) return;

    // A. Playback Actions
    if (text.includes("play") || text.includes("start") || text.includes("resume")) {
      this.onCommand({ type: "PLAY" });
    }
    else if (text.includes("pause") || text.includes("stop") || text.includes("freeze")) {
      this.onCommand({ type: "PAUSE" });
    }
    else if (text.includes("next") || text.includes("skip") || text.includes("forward")) {
      this.onCommand({ type: "NEXT" });
    }
    else if (text.includes("previous") || text.includes("back") || text.includes("recall")) {
      this.onCommand({ type: "PREV" });
    }
    
    // B. Mood triggers
    else if (text.includes("chill") || text.includes("relax") || text.includes("calm")) {
      this.onCommand({ type: "MOOD", target: "mood-2" }); // Quantum Chill
    }
    else if (text.includes("hype") || text.includes("energize") || text.includes("matrix")) {
      this.onCommand({ type: "MOOD", target: "mood-3" }); // Nebula Hype
    }
    else if (text.includes("cyberpunk") || text.includes("focus") || text.includes("dark")) {
      this.onCommand({ type: "MOOD", target: "mood-1" }); // Cyberpunk Focus
    }
    
    // C. Exact Track triggers
    else if (text.includes("drift") || text.includes("quantum")) {
      this.onCommand({ type: "TRACK", target: "track-1" }); // Quantum Drift
    }
    else if (text.includes("horizon") || text.includes("neon")) {
      this.onCommand({ type: "TRACK", target: "track-2" }); // Neon Horizon
    }
    else if (text.includes("strobe") || text.includes("sub zero") || text.includes("sub-zero")) {
      this.onCommand({ type: "TRACK", target: "track-3" }); // Sub-Zero Strobe
    }
    else if (text.includes("chrono")) {
      this.onCommand({ type: "TRACK", target: "track-4" }); // Chrono Shift
    }
    else if (text.includes("rain") || text.includes("plasma")) {
      this.onCommand({ type: "TRACK", target: "track-5" }); // Plasma Rain
    }
    
    // D. Visualizer overlays triggers
    else if (text.includes("visualizer") || text.includes("screen") || text.includes("spectrum")) {
      this.onCommand({ type: "TOGGLE_VISUALIZER" });
    }
    else if (text.includes("lyrics") || text.includes("word") || text.includes("decrypter")) {
      this.onCommand({ type: "TOGGLE_LYRICS" });
    }
    
    // Send feedback text back to main callback to announce decryptions
    this.onCommand({ type: "FEEDBACK", text: text });
  }
}

/* ==========================================================================
   2. HOLOGRAPHIC SPOTIFY / LAST.FM / GENIUS API SIMULATOR HUD
   ========================================================================== */

export class ApiNetworkSimulator {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    this.pingHistory = [];
    this.packetCount = 1420;
    this.activeSubscribers = 5824900;
    this.animationFrameId = null;
    
    this.init();
  }

  init() {
    if (!this.canvas || !this.ctx) return;
    
    this.canvas.width = 120;
    this.canvas.height = 40;

    // Fill seed data
    for (let i = 0; i < 20; i++) {
      this.pingHistory.push(20 + Math.random() * 8);
    }

    this.startLoop();
  }

  startLoop() {
    const tick = () => {
      // Periodic ping fluctuations
      if (Math.random() > 0.8) {
        const drift = (Math.random() - 0.5) * 4;
        const lastPing = this.pingHistory[this.pingHistory.length - 1];
        const newPing = Math.max(10, Math.min(50, lastPing + drift));
        
        this.pingHistory.push(newPing);
        this.pingHistory.shift();
        
        // Update DOM displays if available
        const latencyLabel = document.getElementById("api-latency-label");
        if (latencyLabel) {
          latencyLabel.textContent = `${newPing.toFixed(0)} ms`;
        }

        // Ticker packets & subscribers
        this.packetCount += Math.floor(Math.random() * 5 + 1);
        const pkLabel = document.getElementById("api-packets-label");
        if (pkLabel) pkLabel.textContent = this.packetCount;

        this.activeSubscribers += Math.floor(Math.random() * 3 - 1);
        const subLabel = document.getElementById("api-listeners-label");
        if (subLabel) subLabel.textContent = this.activeSubscribers.toLocaleString();
      }

      this.draw();
      this.animationFrameId = requestAnimationFrame(tick);
    };

    tick();
  }

  stop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  /**
   * Draw miniature rolling neon latency wave
   */
  draw() {
    if (!this.canvas || !this.ctx) return;
    const w = this.canvas.width;
    const h = this.canvas.height;

    this.ctx.clearRect(0, 0, w, h);
    
    // Grid back lines
    this.ctx.strokeStyle = "rgba(0, 240, 255, 0.05)";
    this.ctx.lineWidth = 0.5;
    this.ctx.beginPath();
    this.ctx.moveTo(0, h/2); this.ctx.lineTo(w, h/2);
    this.ctx.moveTo(w/2, 0); this.ctx.lineTo(w/2, h);
    this.ctx.stroke();

    // Latency Line
    this.ctx.strokeStyle = "#00f0ff";
    this.ctx.shadowBlur = 5;
    this.ctx.shadowColor = "#00f0ff";
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();

    const dx = w / (this.pingHistory.length - 1);
    this.pingHistory.forEach((ping, idx) => {
      const x = idx * dx;
      // map [10ms, 50ms] to [h - 5px, 5px]
      const y = h - ((ping - 10) / 40) * (h - 10) - 5;
      
      if (idx === 0) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }
    });

    this.ctx.stroke();
    this.ctx.shadowBlur = 0; // reset
  }
}
