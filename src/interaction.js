/**
 * NEURALIS - Immersive User Interaction & Motion Effects Engine (GSAP & Starfield Expansion)
 * Houses 3D card tilt equations, scroll reveal triggers, 3D carousel positioning,
 * live-chat simulators, magnetic button controls, parallax perspective cockpit shifts,
 * and audio-reactive background starfield physics.
 */

import { tracks, chatComments } from "./mockData.js";

// Global pointer mapping for energy factors
let globalAudioEnergy = 0.2; // default idle energy
export function setGlobalAudioEnergy(val) {
  globalAudioEnergy = val; // value mapped [0.0, 1.0] from audioEngine analyser
}

/**
 * 1. GSAP Anti-Gravity Floating Loops & Cockpit Parallax
 */
export function initGSAPMotion() {
  const gsap = window.gsap;
  if (!gsap) {
    console.warn("GSAP Core: Motion engine script not loaded yet.");
    return;
  }

  // A. Weightless Floating Loop for Cards & Carousels
  // Set up random out-of-phase sinusoidal floating loops to simulate zero-gravity
  const floatingElements = document.querySelectorAll(".tilt-card, .mood-card, .recent-mini-card, .sub-card, .carousel-slide");
  floatingElements.forEach((el, idx) => {
    // Add random floating offset seeds
    const dy = 5 + Math.random() * 8;
    const dur = 4 + Math.random() * 3;
    const rot = 1 + Math.random() * 1.5;

    gsap.to(el, {
      y: `+=${dy}`,
      rotation: `+=${rot}`,
      x: `+=${(Math.random() - 0.5) * 6}`,
      duration: dur,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: idx * 0.15
    });
  });

  // B. Magnetic Button Hover Engine
  // Captures pointer vectors and pulls buttons toward the cursor smoothly
  const magneticSelectors = ".deck-btn, .util-panel-btn, .hero-btn, .play-btn-circle, .chat-send-btn, .sub-btn";
  
  document.addEventListener("mousemove", (e) => {
    const buttons = document.querySelectorAll(magneticSelectors);
    
    buttons.forEach(btn => {
      const rect = btn.getBoundingClientRect();
      const btnX = rect.left + rect.width / 2;
      const btnY = rect.top + rect.height / 2;
      
      const dx = e.clientX - btnX;
      const dy = e.clientY - btnY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const magneticRadius = 45; // range of attraction

      if (distance < magneticRadius) {
        // Pull button towards mouse relative to distance (nearer = stronger pull)
        const strength = 0.45;
        gsap.to(btn, {
          x: dx * strength,
          y: dy * strength,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto"
        });
        
        // Add dynamic glow intensity mapping on magnetic trigger
        btn.style.boxShadow = `0 0 ${12 + (magneticRadius - distance) * 0.4}px rgba(0, 240, 255, 0.6)`;
      } else {
        // Return smoothly to rest state
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "elastic.out(1, 0.4)",
          overwrite: "auto"
        });
        btn.style.boxShadow = ""; // restore default styling
      }
    });
  });

  // C. Interactive Layered Parallax Cockpit (3D Perspective Drift)
  const sidebar = document.getElementById("sidebar");
  const workspace = document.getElementById("workspace");
  const playerBar = document.getElementById("player-bar");

  document.addEventListener("mousemove", (e) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    // Normalized coordinates around screen center [-0.5, 0.5]
    const nx = (e.clientX / w) - 0.5;
    const ny = (e.clientY / h) - 0.5;

    // Translate panels in opposite directions to simulate layered spatial depth
    if (sidebar) {
      gsap.to(sidebar, {
        x: nx * -12,
        y: ny * -8,
        rotationY: nx * -4,
        rotationX: ny * 3,
        duration: 0.6,
        ease: "power1.out"
      });
    }

    if (workspace) {
      gsap.to(workspace, {
        x: nx * 10,
        y: ny * 8,
        rotationY: nx * 3,
        rotationX: ny * -2,
        duration: 0.6,
        ease: "power1.out"
      });
    }

    if (playerBar) {
      gsap.to(playerBar, {
        x: nx * -5,
        y: ny * -4,
        duration: 0.6,
        ease: "power1.out"
      });
    }
  });

  // D. 3D Tilt on Floating Vinyl Cover art
  const vinylRecord = document.getElementById("holographic-vinyl");
  if (vinylRecord) {
    document.addEventListener("mousemove", (e) => {
      const rect = vinylRecord.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 200) {
        const tiltX = (dy / 100) * -12;
        const tiltY = (dx / 100) * 12;
        gsap.to(vinylRecord, {
          transform: `perspective(400px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.08)`,
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        gsap.to(vinylRecord, {
          transform: `perspective(400px) rotateX(0deg) rotateY(0deg) scale(1)`,
          duration: 0.5,
          ease: "power1.out"
        });
      }
    });
  }
}

/**
 * 2. 3D Parallax Tilt Calc for holographic panels
 */
export function init3DTilt() {
  document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".tilt-card, .sub-card");
    
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const tiltX = ((cy - y) / cy) * 10;
      const tiltY = ((x - cx) / cx) * 10;

      if (!window.gsap) {
        if (card.classList.contains("sub-card")) {
          card.style.transform = `translateY(-8px) rotateX(${tiltX * 0.6}deg) rotateY(${tiltY * 0.6}deg)`;
        } else {
          card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        }
      }
    });
  });
}

/**
 * 3. Intersection Observer Scroll Reveals
 */
export function initScrollReveals() {
  const options = {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, options);

  const revealElements = document.querySelectorAll(".scroll-reveal");
  revealElements.forEach(el => observer.observe(el));
}

/**
 * 4. 3D Album Carousel (Orbit 3D)
 */
export class OrbitCarousel {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentIndex = 0;
    this.slides = [];
    this.trackList = tracks;
    
    this.init();
  }

  init() {
    if (!this.container) return;
    this.container.innerHTML = "";

    this.trackList.forEach((track, idx) => {
      const slide = document.createElement("div");
      slide.className = "carousel-slide";
      slide.dataset.index = idx;
      slide.dataset.trackId = track.id;

      slide.innerHTML = `
        <div class="carousel-art" style="background: linear-gradient(135deg, ${track.glowColor}, #0a0a12)">
          ${track.title[0]}
        </div>
        <h4 class="carousel-title">${track.title}</h4>
        <p class="carousel-artist">${track.artist}</p>
      `;

      slide.addEventListener("click", () => {
        if (this.currentIndex === idx) {
          const playEvent = new CustomEvent("request-play-track", { detail: track });
          window.dispatchEvent(playEvent);
        } else {
          this.goTo(idx);
        }
      });

      this.container.appendChild(slide);
      this.slides.push(slide);
    });

    this.update();
  }

  goTo(index) {
    this.currentIndex = index;
    this.update();
  }

  update() {
    const total = this.slides.length;
    
    this.slides.forEach((slide, idx) => {
      let offset = idx - this.currentIndex;
      
      if (offset < -total / 2) offset += total;
      if (offset > total / 2) offset -= total;

      const absOffset = Math.abs(offset);
      
      const zTranslate = -120 * absOffset;
      const xTranslate = 140 * offset;
      const rotateY = -35 * offset;
      const scale = Math.max(0.7, 1 - 0.15 * absOffset);
      const opacity = Math.max(0.2, 1 - 0.35 * absOffset);
      const zIndex = 100 - absOffset;

      slide.style.transform = `translateX(${xTranslate}px) translateZ(${zTranslate}px) rotateY(${rotateY}deg) scale(${scale})`;
      slide.style.opacity = opacity;
      slide.style.zIndex = zIndex;
      
      if (offset === 0) {
        slide.classList.add("active");
        slide.style.borderColor = this.trackList[idx].glowColor;
      } else {
        slide.classList.remove("active");
        slide.style.borderColor = "rgba(255, 255, 255, 0.08)";
      }
    });
  }
}

/**
 * 5. Simulated Live Cyber-Sphere Chat Room
 */
export function initLiveChatSim(chatContainerId) {
  const container = document.getElementById(chatContainerId);
  if (!container) return;

  container.innerHTML = "";
  let commentIndex = 0;

  for (let i = 0; i < 3; i++) {
    addComment(chatComments[i]);
    commentIndex++;
  }

  function scheduleNext() {
    const nextDelay = 6000 + Math.random() * 3000;
    setTimeout(() => {
      const commentData = chatComments[commentIndex % chatComments.length];
      const formattedComment = {
        user: `Listener_${Math.floor(Math.random() * 9000 + 1000)}`,
        avatar: `A${Math.floor(Math.random() * 6 + 1)}`,
        text: commentData.text,
        time: "Just now"
      };

      addComment(formattedComment);
      commentIndex++;
      scheduleNext();
    }, nextDelay);
  }

  function addComment(data) {
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";
    bubble.innerHTML = `
      <div class="chat-avatar">${data.avatar}</div>
      <div class="chat-details">
        <div class="chat-meta">
          <span class="chat-username">${data.user}</span>
          <span class="chat-time">${data.time}</span>
        </div>
        <p class="chat-text">${data.text}</p>
      </div>
    `;

    container.appendChild(bubble);
    
    if (container.children.length > 12) {
      container.removeChild(container.firstChild);
    }
    
    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth"
    });
  }

  scheduleNext();
}

/**
 * 6. Cyber Dashboard Ticker
 */
export function initDashboardCounters() {
  const timeCounter = document.getElementById("stats-time");
  const syncCounter = document.getElementById("stats-sync");

  if (!timeCounter || !syncCounter) return;

  let currentHours = 24.5;
  let currentSync = 97.4;

  setInterval(() => {
    currentHours += 0.001;
    timeCounter.textContent = `${currentHours.toFixed(3)} hrs`;

    const drift = (Math.random() - 0.5) * 0.15;
    currentSync = Math.min(100, Math.max(90, currentSync + drift));
    syncCounter.textContent = `${currentSync.toFixed(1)}%`;
  }, 1000);
}

/* ==========================================================================
   7. AUDIO-REACTIVE BACKGROUND PARTICLE STARFIELD GRID
   ========================================================================== */

export class ReactiveBackgroundStarfield {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    this.particles = [];
    this.maxParticles = 160;
    this.animationFrameId = null;
    this.beatScale = 1.0;
    this.activeColor = "#00f0ff";
    
    this.init();
  }

  init() {
    if (!this.canvas || !this.ctx) return;

    this.resize();
    window.addEventListener("resize", () => this.resize());

    // Generate random space dust particles
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: 0.5 + Math.random() * 2,
        baseVx: (Math.random() - 0.5) * 0.18,
        baseVy: (Math.random() - 0.5) * 0.18,
        vx: 0,
        vy: 0,
        alpha: Math.random() * 0.4 + 0.1,
        // Particle energy phase
        phase: Math.random() * Math.PI * 2
      });
    }

    this.startLoop();
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  startLoop() {
    const loop = () => {
      this.draw();
      this.animationFrameId = requestAnimationFrame(loop);
    };
    loop();
  }

  stop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  /**
   * Set primary theme color based on track
   */
  updateThemeColor(hexColor) {
    this.activeColor = hexColor || "#00f0ff";
  }

  /**
   * Render rolling particle network warped by music amplitude
   */
  draw() {
    if (!this.canvas || !this.ctx) return;
    const w = this.canvas.width;
    const h = this.canvas.height;
    
    // Clear canvas
    this.ctx.fillStyle = "rgba(3, 3, 7, 0.35)"; // ghosting tracks
    this.ctx.fillRect(0, 0, w, h);

    const energy = globalAudioEnergy; // mapped [0.0 - 1.0] from main analyser
    const activeColor = this.activeColor;
    
    // Smooth beat drops scaling factor
    this.beatScale = this.beatScale * 0.95 + energy * 0.05;

    // Draw grid nodes & web filaments
    const connectDistance = 80 + this.beatScale * 50;

    for (let i = 0; i < this.maxParticles; i++) {
      const p = this.particles[i];

      // Ambient orbit + dynamic music speed surge
      const energyMultiplier = 1.0 + energy * 12.0;
      p.vx = p.baseVx * energyMultiplier;
      p.vy = p.baseVy * energyMultiplier;

      p.x += p.vx;
      p.y += p.vy;

      // Wrapping boundary math
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      // Pulse particle radii synced to beat
      const pulseRadius = p.radius * (1.0 + energy * 1.5);
      
      this.ctx.fillStyle = energy > 0.65 ? "#ffffff" : activeColor;
      this.ctx.globalAlpha = p.alpha * (1.0 + energy * 0.8);
      
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, pulseRadius, 0, Math.PI * 2);
      this.ctx.fill();

      // Filament calculations (connect close particles with glowing strings)
      if (i % 3 === 0) { // connect a subset for performance budget
        for (let j = i + 1; j < this.maxParticles; j += 4) {
          const p2 = this.particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectDistance) {
            const filamentAlpha = (1 - dist / connectDistance) * 0.12 * (0.3 + energy * 1.2);
            this.ctx.strokeStyle = activeColor;
            this.ctx.globalAlpha = filamentAlpha;
            this.ctx.lineWidth = 0.5 + energy * 0.8;
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.stroke();
          }
        }
      }
    }

    this.ctx.globalAlpha = 1.0; // reset transparency
  }
}
