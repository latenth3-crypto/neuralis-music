/**
 * NEURALIS - Canvas Visualizer Rendering Engine
 * Translates Web Audio API frequencies and time-domain waveforms into stunning,
 * hardware-accelerated 2D/3D-perspective canvas graphics.
 */

import { audioEngine } from "./audioEngine.js";

class Visualizer {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.animationFrameId = null;
    
    // Rendering config
    this.activeMode = 1; // 1: Nebula, 2: Laser Rain, 3: Cyber Grid
    this.glowPower = 15;
    this.rotationAngle = 0;
    this.gridOffset = 0;

    // Data buffers for Web Audio Analyser
    this.dataArrayFreq = null;
    this.dataArrayTime = null;
    this.bufferLength = 0;
  }

  /**
   * Bind canvas and begin animation loops
   */
  init(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext("2d");
    
    this.resize();
    window.addEventListener("resize", () => this.resize());

    // Initialize buffers
    if (audioEngine.analyser) {
      this.bufferLength = audioEngine.analyser.frequencyBinCount;
      this.dataArrayFreq = new Uint8Array(this.bufferLength);
      this.dataArrayTime = new Uint8Array(this.bufferLength);
    } else {
      // Fallback sizing
      this.bufferLength = 256;
      this.dataArrayFreq = new Uint8Array(this.bufferLength);
      this.dataArrayTime = new Uint8Array(this.bufferLength);
    }

    this.startLoop();
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    
    // Account for high-DPI displays (retina screens) to keep lines ultra-crisp
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    
    if (this.ctx) {
      this.ctx.scale(dpr, dpr);
    }
  }

  setMode(mode) {
    this.activeMode = parseInt(mode);
  }

  startLoop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    
    const render = () => {
      this.drawFrame();
      this.animationFrameId = requestAnimationFrame(render);
    };
    
    render();
  }

  stopLoop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  /**
   * Main Orchestrator: Selects and executes active rendering routine
   */
  drawFrame() {
    if (!this.canvas || !this.ctx) return;
    const w = this.canvas.width / (window.devicePixelRatio || 1);
    const h = this.canvas.height / (window.devicePixelRatio || 1);

    // Refresh data buffers from Web Audio API if active
    let hasAudio = false;
    if (audioEngine.isPlaying && audioEngine.analyser && !window.isYtPlaying) {
      audioEngine.analyser.getByteFrequencyData(this.dataArrayFreq);
      audioEngine.analyser.getByteTimeDomainData(this.dataArrayTime);
      hasAudio = true;
    } else if (window.isYtPlaying) {
      // YouTube simulated spectrum active!
      const time = Date.now() * 0.003;
      const bassIntensity = Math.abs(Math.sin(time) * 140 + Math.cos(time * 2.3) * 60 + 30);
      const trebleIntensity = Math.abs(Math.cos(time * 1.5) * 90 + Math.sin(time * 3.7) * 30 + 20);
      
      for (let i = 0; i < this.bufferLength; i++) {
        const fraction = i / this.bufferLength;
        const rawVal = (i < 20) 
          ? (bassIntensity * (1 - fraction * 3) + Math.random() * 20)
          : (trebleIntensity * Math.max(0, 1 - fraction) * (Math.sin(i * 0.2 + time * 4) * 0.3 + 0.7) + Math.random() * 10);
        
        this.dataArrayFreq[i] = Math.max(0, Math.min(255, rawVal));
        this.dataArrayTime[i] = 128 + Math.sin(i * 0.15 + time * 8) * (20 + (i < 30 ? bassIntensity * 0.2 : 5));
      }
      hasAudio = true;
    } else {
      // Run synthetic idle data wave generator so visualizer stays active and dynamic
      const time = Date.now() * 0.002;
      for (let i = 0; i < this.bufferLength; i++) {
        // Create slow undulating noise curves for idle display
        this.dataArrayFreq[i] = Math.max(0, Math.sin(i * 0.05 + time) * 40 + 30 + Math.cos(i * 0.1 - time * 0.5) * 15);
        this.dataArrayTime[i] = 128 + Math.sin(i * 0.03 + time) * 10;
      }
    }

    // Set canvas compositing and draw dark spatial background
    this.ctx.fillStyle = "rgba(4, 4, 8, 0.25)"; // slight transparency trails for ghosting motion
    this.ctx.fillRect(0, 0, w, h);

    // Render active visualization
    switch (this.activeMode) {
      case 1:
        this.drawNebulaMode(w, h, hasAudio);
        break;
      case 2:
        this.drawLaserRainMode(w, h, hasAudio);
        break;
      case 3:
        this.drawCyberGridMode(w, h, hasAudio);
        break;
    }
  }

  /**
   * VISUALIZATION MODE 1: Circular Nebula Particles
   */
  drawNebulaMode(w, h, hasAudio) {
    const cx = w / 2;
    const cy = h / 2;
    const maxRadius = Math.min(cx, cy) * 0.8;
    
    // Slow rotational spinning
    this.rotationAngle += 0.003;
    this.ctx.save();
    this.ctx.translate(cx, cy);
    this.ctx.rotate(this.rotationAngle);

    // Calculate energy levels
    let bassEnergy = 0;
    let trebleEnergy = 0;
    
    for (let i = 0; i < 30; i++) bassEnergy += this.dataArrayFreq[i];
    for (let i = 100; i < 150; i++) trebleEnergy += this.dataArrayFreq[i];
    
    bassEnergy = bassEnergy / 30 / 255; // Normalized 0 to 1
    trebleEnergy = trebleEnergy / 50 / 255;

    // Draw central glowing core
    const coreRad = 40 + bassEnergy * 40;
    const gradient = this.ctx.createRadialGradient(0, 0, 5, 0, 0, coreRad);
    
    const activeColor = audioEngine.currentTrack ? audioEngine.currentTrack.glowColor : "#00f0ff";
    gradient.addColorStop(0, "rgba(255, 255, 255, 0.9)");
    gradient.addColorStop(0.3, activeColor + "66"); // semi-transparent glow
    gradient.addColorStop(1, "rgba(4, 4, 8, 0)");
    
    this.ctx.fillStyle = gradient;
    this.ctx.beginPath();
    this.ctx.arc(0, 0, coreRad, 0, Math.PI * 2);
    this.ctx.fill();

    // Render 4 concentric orbiting particle rings
    const ringCount = 3;
    for (let r = 0; r < ringCount; r++) {
      const ringRadius = maxRadius * ((r + 1) / (ringCount + 0.5)) + trebleEnergy * 30;
      const particleCount = 48 + r * 16;
      
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = activeColor + "15"; // ultra thin faint ring guide
      this.ctx.beginPath();
      this.ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
      this.ctx.stroke();

      for (let p = 0; p < particleCount; p++) {
        const angle = (p / particleCount) * Math.PI * 2;
        
        // Map particle positions with FFT frequency offsets
        const freqIndex = Math.floor((p / particleCount) * (this.bufferLength / 2)) % (this.bufferLength / 2);
        const amplitude = this.dataArrayFreq[freqIndex] / 255;
        
        const offsetRadius = ringRadius + amplitude * (40 + r * 20);
        const px = Math.cos(angle) * offsetRadius;
        const py = Math.sin(angle) * offsetRadius;

        const particleSize = 1.5 + amplitude * 3 + (r === 0 ? bassEnergy * 3 : 0);
        
        this.ctx.fillStyle = amplitude > 0.5 ? "#ffffff" : activeColor;
        this.ctx.shadowBlur = amplitude > 0.5 ? this.glowPower : 0;
        this.ctx.shadowColor = activeColor;
        
        this.ctx.beginPath();
        this.ctx.arc(px, py, particleSize, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Connect small spiderweb filaments if amplitude is high
        if (amplitude > 0.7 && p % 4 === 0) {
          this.ctx.shadowBlur = 0;
          this.ctx.strokeStyle = activeColor + "3a";
          this.ctx.beginPath();
          this.ctx.moveTo(px, py);
          this.ctx.lineTo(0, 0);
          this.ctx.stroke();
        }
      }
    }

    this.ctx.restore();
    this.ctx.shadowBlur = 0; // reset shadow effects
  }

  /**
   * VISUALIZATION MODE 2: Falling Laser Rain Columns
   */
  drawLaserRainMode(w, h, hasAudio) {
    const activeColor = audioEngine.currentTrack ? audioEngine.currentTrack.glowColor : "#ff007f";
    const barWidth = 6;
    const gap = 10;
    const totalBars = Math.floor(w / (barWidth + gap));
    const startX = (w - (totalBars * (barWidth + gap) - gap)) / 2;

    this.ctx.shadowBlur = this.glowPower;
    this.ctx.shadowColor = activeColor;

    for (let i = 0; i < totalBars; i++) {
      // Map bar index to frequency buffer
      const freqIndex = Math.floor((i / totalBars) * (this.bufferLength * 0.75));
      const amplitude = this.dataArrayFreq[freqIndex] / 255;
      
      const barHeight = amplitude * h * 0.75;
      const x = startX + i * (barWidth + gap);
      const y = h - barHeight;

      // Draw futuristic glass capsule background
      this.ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
      this.ctx.fillRect(x, 20, barWidth, h - 40);

      // Create glowing gradient capsule representing music volume height
      const grad = this.ctx.createLinearGradient(x, y, x, h);
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(0.3, activeColor);
      grad.addColorStop(1, activeColor + "22");

      this.ctx.fillStyle = grad;
      // Rounded neon line
      this.ctx.beginPath();
      this.ctx.roundRect(x, y, barWidth, barHeight - 10, 4);
      this.ctx.fill();

      // Top floating particle spark reflecting high frequencies
      if (amplitude > 0.4) {
        this.ctx.fillStyle = "#ffffff";
        this.ctx.beginPath();
        this.ctx.arc(x + barWidth / 2, y - 8, 2.5 + amplitude * 2, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }
    
    this.ctx.shadowBlur = 0;
  }

  /**
   * VISUALIZATION MODE 3: Retro-Futuristic wireframe grid warped by sound
   */
  drawCyberGridMode(w, h, hasAudio) {
    const activeColor = audioEngine.currentTrack ? audioEngine.currentTrack.glowColor : "#39ff14";
    const horizon = h * 0.45;
    
    // Draw neon Synthwave Sun sinking behind the horizon
    let bassEnergy = 0;
    for (let i = 0; i < 15; i++) bassEnergy += this.dataArrayFreq[i];
    bassEnergy = bassEnergy / 15 / 255;

    const sunRadius = 60 + bassEnergy * 25;
    const sunGrad = this.ctx.createLinearGradient(w / 2, horizon - sunRadius, w / 2, horizon);
    sunGrad.addColorStop(0, "#ffffff");
    sunGrad.addColorStop(0.4, activeColor);
    sunGrad.addColorStop(1, "transparent");

    this.ctx.fillStyle = sunGrad;
    this.ctx.beginPath();
    this.ctx.arc(w / 2, horizon, sunRadius, Math.PI, 0); // half circle sun
    this.ctx.fill();

    // Render horizontal grid lines moving towards screen (simulation of running forward)
    this.gridOffset += 1.5 + bassEnergy * 4;
    if (this.gridOffset >= 40) this.gridOffset = 0;

    const horizonY = horizon;
    this.ctx.strokeStyle = activeColor + "33";
    this.ctx.lineWidth = 1;

    // Draw horizontal perspective lines
    for (let y = this.gridOffset; y < h - horizonY; y += 30) {
      // Perspective compression factor (lines closer to horizon are closer together)
      const py = horizonY + Math.pow(y / (h - horizonY), 1.6) * (h - horizonY);
      
      this.ctx.beginPath();
      this.ctx.moveTo(0, py);
      this.ctx.lineTo(w, py);
      this.ctx.stroke();
    }

    // Draw vertical lines warping based on Waveform/Time Domain Data
    const verticalLines = 36;
    const gridPoints = 64; // data resolution across lines
    
    for (let l = 0; l <= verticalLines; l++) {
      const lineFraction = l / verticalLines;
      
      this.ctx.beginPath();
      
      for (let p = 0; p < gridPoints; p++) {
        const pointFraction = p / gridPoints;
        const py = horizonY + pointFraction * (h - horizonY);
        
        // Vanishing point perspective math
        const startX = w / 2;
        const targetX = lineFraction * w;
        
        // Dynamic horizontal compression
        let px = startX + (targetX - startX) * pointFraction;

        // Waveform warping: warp perspective coordinates based on time-domain buffers
        const timeIndex = Math.floor(pointFraction * this.bufferLength);
        const waveValue = (this.dataArrayTime[timeIndex] - 128) / 128; // value [-1.0, 1.0]

        // Only warp lines further down the screen (closer to user view) for cleaner visual depth
        const warpIntensity = pointFraction * 40 * (0.3 + bassEnergy * 1.5);
        px += waveValue * warpIntensity;

        if (p === 0) {
          this.ctx.moveTo(px, py);
        } else {
          this.ctx.lineTo(px, py);
        }
      }

      this.ctx.strokeStyle = l === verticalLines / 2 ? activeColor + "88" : activeColor + "35";
      this.ctx.stroke();
    }

    // Draw solid separation border representing the horizon line
    this.ctx.strokeStyle = activeColor + "88";
    this.ctx.lineWidth = 2;
    this.ctx.shadowBlur = 10;
    this.ctx.shadowColor = activeColor;
    this.ctx.beginPath();
    this.ctx.moveTo(0, horizonY);
    this.ctx.lineTo(w, horizonY);
    this.ctx.stroke();
    this.ctx.shadowBlur = 0;
  }
}

export const visualizer = new Visualizer();
