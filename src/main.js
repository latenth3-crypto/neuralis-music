/**
 * NEURALIS - Main Application Orchestrator (YouTube & Local Importer Expansion)
 * Coordinates UI rendering, Web Audio player bindings, YouTube Multiverse embeds,
 * drag-and-drop local audio imports, timed lyrics, autocomplete searches, tabs,
 * and adaptive music energy gradients.
 */

import { audioEngine } from "./audioEngine.js";
import { visualizer } from "./visualizer.js";
import { 
  tracks, 
  moods, 
  recentlyPlayed, 
  artistSpotlight, 
  featuredReleases, 
  subscriptionTiers 
} from "./mockData.js";
import { 
  init3DTilt, 
  initScrollReveals, 
  OrbitCarousel, 
  initLiveChatSim, 
  initDashboardCounters,
  setGlobalAudioEnergy,
  initGSAPMotion,
  ReactiveBackgroundStarfield
} from "./interaction.js";
import { VoiceCommandCenter, ApiNetworkSimulator } from "./speechAndApi.js";

// Global Active State
let currentTrackIndex = 0;
let carouselInstance = null;
let starfieldInstance = null;
let apiSimInstance = null;
let voiceCenterInstance = null;
let isVisualizerCanvasInitialized = false;

// YouTube Player Global States
let ytPlayer = null;
let isYtPlaying = false;
window.isYtPlaying = false; // Expose globally for visualizer.js

document.addEventListener("DOMContentLoaded", () => {
  // Initialize static UI components first
  renderAllSections();
  renderYouTubeMultiverseSection();
  
  // Initialize interaction engines (3D Tilt, Scroll Reveals, Chat HUD, Counters)
  init3DTilt();
  initDashboardCounters();
  initLiveChatSim("live-chat-messages-container");
  
  // Setup 3D Orbit Carousel
  carouselInstance = new OrbitCarousel("orbit-3d-container");

  // Initialize Advanced Starfield Background Grid
  starfieldInstance = new ReactiveBackgroundStarfield("particle-starfield-canvas");

  // Initialize Spotify API Latency HUD Simulator
  apiSimInstance = new ApiNetworkSimulator("api-network-canvas");

  // Initialize Voice Command Center Core
  setupVoiceControlCenter();
  
  // Wire up all event handlers
  setupAudioEngineCallbacks();
  setupPlayerControls();
  setupNavigationTabs();
  setupSearchEngine();
  setupDynamicLyricSync();
  setupVisualizerModes();
  setupYouTubeDeckControls();
  setupQuantumUploader();

  // Draw procedural starlight on the hero background canvas
  renderHeroSpaceCanvas();

  // Run dynamic energy mapping in continuous render frames loop
  startEnergyMatrixLoop();

  // Initialize GSAP Core motion mechanics (magnetic nodes, zero-g floats, cockpit shifts)
  setTimeout(() => {
    initGSAPMotion();
  }, 100);

  // Deactivate loading overlay with a premium cinematic delay (1.2 seconds)
  setTimeout(() => {
    const loader = document.getElementById("loading-overlay");
    if (loader) {
      loader.classList.add("fade-out");
      initScrollReveals();
    }
  }, 1200);
});

// Load standard Google YouTube Iframe API
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubeIframeAPIReady = () => {
  console.log("NEURALIS: YouTube API Hook Ready.");
};

/* ==========================================================================
   1. REAL-TIME ADAPTIVE ENERGY MATRIX ENGINE
   ========================================================================== */

function startEnergyMatrixLoop() {
  const updateEnergyMatrix = () => {
    const isPlaying = (audioEngine.isPlaying || isYtPlaying);
    
    if (isPlaying && (audioEngine.analyser || window.isYtPlaying)) {
      let energyRatio = 0.12;

      if (window.isYtPlaying) {
        // AI Pulsar Matrix: Generate simulated bass energy matching sine rhythms
        const time = Date.now() * 0.003;
        const bassIntensity = Math.abs(Math.sin(time) * 140 + Math.cos(time * 2.3) * 60 + 30);
        energyRatio = Math.min(1.0, bassIntensity / 255);
      } else {
        const bufferLength = audioEngine.analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        audioEngine.analyser.getByteFrequencyData(dataArray);

        // Extract average Bass Energy (first 10 bins of FFT spectrum)
        let bassSum = 0;
        const bassCount = 10;
        for (let i = 0; i < bassCount; i++) {
          bassSum += dataArray[i];
        }
        
        const bassAvg = bassSum / bassCount;
        energyRatio = bassAvg / 255; // Mapped [0.0 - 1.0]
      }

      // Pass energy level to background particle engine
      setGlobalAudioEnergy(energyRatio);

      // Map dynamic color glows
      const glowColor = audioEngine.currentTrack ? audioEngine.currentTrack.glowColor : "#00f0ff";
      const rgb = hexToRgb(glowColor);

      // Warp UI backgrounds and glow constants in real-time synced to beat energy
      const opacity = 0.04 + energyRatio * 0.16; // up to 20% color bloom
      const depthBlur = 8 + energyRatio * 32;     // up to 40px glow spikes
      const recordRot = `${12 - energyRatio * 9}s`; // spins much faster on intense beats

      document.documentElement.style.setProperty("--energy-bg", `radial-gradient(circle at 50% 50%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity}) 0%, #030307 100%)`);
      document.documentElement.style.setProperty("--energy-glow-factor", `${depthBlur}px`);
      document.documentElement.style.setProperty("--energy-rotation-speed", recordRot);

      // Pulse Vinyl Record scale slightly on beats
      const vinyl = document.getElementById("holographic-vinyl");
      if (vinyl) {
        vinyl.style.transform = `scale(${1.0 + energyRatio * 0.12})`;
      }
    } else {
      // Return smoothly to calm space grids when music stops
      setGlobalAudioEnergy(0.12);
      document.documentElement.style.setProperty("--energy-bg", "radial-gradient(circle at 50% 50%, rgba(10, 12, 26, 0.4) 0%, #030307 100%)");
      document.documentElement.style.setProperty("--energy-glow-factor", "0px");
      document.documentElement.style.setProperty("--energy-rotation-speed", "12s");

      const vinyl = document.getElementById("holographic-vinyl");
      if (vinyl) {
        vinyl.style.transform = "scale(1)";
      }
    }

    requestAnimationFrame(updateEnergyMatrix);
  };

  requestAnimationFrame(updateEnergyMatrix);
}

// Hex code utility parser
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 240, b: 255 };
}

/* ==========================================================================
   2. NEURAL VOICE COMMAND SYSTEM
   ========================================================================== */

function setupVoiceControlCenter() {
  const voiceBtn = document.getElementById("voice-control-orb");
  if (!voiceBtn) return;

  voiceCenterInstance = new VoiceCommandCenter();

  // Bind mic clicks
  voiceBtn.addEventListener("click", () => {
    voiceCenterInstance.toggle();
  });

  // Track microphone recording status
  voiceCenterInstance.onStatusChange = (status) => {
    voiceBtn.className = "util-panel-btn active-voice-orb"; // reset classes
    
    if (status === "listening") {
      voiceBtn.classList.add("listening");
      showCyberNotification("Speech Decrypter Connected: Speak command...");
    } else if (status === "idle") {
      // returned to stand-by
    } else if (status === "error") {
      showCyberNotification("Decrypter Error: Link interrupted.");
    }
  };

  // Bind command callbacks
  voiceCenterInstance.onCommand = (action) => {
    if (action.type === "PLAY") {
      if (!audioEngine.currentTrack) {
        playTrackById(tracks[0].id);
      } else {
        const track = audioEngine.currentTrack;
        if (track.youtubeId) {
          if (ytPlayer && typeof ytPlayer.playVideo === "function") {
            ytPlayer.playVideo();
          }
          isYtPlaying = true;
          window.isYtPlaying = true;
        } else {
          audioEngine.play(track);
        }
      }
      showCyberNotification("DEC CODE // PLAY SEQUENCE");
    }
    else if (action.type === "PAUSE") {
      const track = audioEngine.currentTrack;
      if (track && track.youtubeId) {
        if (ytPlayer && typeof ytPlayer.pauseVideo === "function") {
          ytPlayer.pauseVideo();
        }
        isYtPlaying = false;
        window.isYtPlaying = false;
      } else {
        audioEngine.pause();
      }
      showCyberNotification("DEC CODE // PAUSE SEQUENCE");
    }
    else if (action.type === "NEXT") {
      playNextTrack();
      showCyberNotification("DEC CODE // NEXT VECTOR");
    }
    else if (action.type === "PREV") {
      playPreviousTrack();
      showCyberNotification("DEC CODE // PREVIOUS VECTOR");
    }
    else if (action.type === "TRACK") {
      playTrackById(action.target);
      const match = tracks.find(t => t.id === action.target);
      showCyberNotification(`DEC CODE // SYNC TRACK [${match.title}]`);
    }
    else if (action.type === "MOOD") {
      const moodData = moods.find(m => m.id === action.target);
      const matched = tracks.filter(t => t.genre.toLowerCase().includes(moodData.title.split(" ")[0].toLowerCase()) || t.glowColor === moodData.glow);
      
      if (matched.length > 0) {
        const rand = matched[Math.floor(Math.random() * matched.length)];
        playTrackById(rand.id);
        showCyberNotification(`DEC CODE // RESONATE MOOD [${moodData.title}]`);
      }
    }
    else if (action.type === "TOGGLE_VISUALIZER") {
      const visOverlay = document.getElementById("visualizer-overlay");
      const toggleBtn = document.getElementById("visualizer-toggle-btn");
      const isActive = visOverlay.classList.toggle("active");
      toggleBtn.classList.toggle("active", isActive);
      if (isActive) initializeVisualizerOverlay();
      showCyberNotification("DEC CODE // SPECTRUM TOGGLE");
    }
    else if (action.type === "TOGGLE_LYRICS") {
      const modal = document.getElementById("lyrics-panel-modal");
      const toggleBtn = document.getElementById("lyrics-toggle-btn");
      const isActive = modal.classList.toggle("active");
      toggleBtn.classList.toggle("active", isActive);
      showCyberNotification("DEC CODE // DECRYPTER TOGGLE");
    }
    else if (action.type === "FEEDBACK") {
      showCyberNotification(`Parsed Speech: "${action.text}"`);
    }
  };
}

// Spawns premium futuristic floating visual HUD notifications
function showCyberNotification(message) {
  const prior = document.querySelector(".voice-notification-hud");
  if (prior) prior.remove();

  const bubble = document.createElement("div");
  bubble.className = "glass-panel voice-notification-hud";
  bubble.style.position = "fixed";
  bubble.style.top = "90px";
  bubble.style.right = "25px";
  bubble.style.padding = "10px 18px";
  bubble.style.fontSize = "0.75rem";
  bubble.style.fontFamily = "'Share Tech Mono', monospace";
  bubble.style.color = "var(--cyan)";
  bubble.style.textShadow = "var(--cyan-glow)";
  bubble.style.borderColor = "var(--border-glass-glow)";
  bubble.style.background = "rgba(4, 8, 16, 0.85)";
  bubble.style.zIndex = "999";
  bubble.style.borderRadius = "8px";
  bubble.style.boxShadow = "var(--cyan-glow)";
  
  bubble.textContent = `▲ ${message.toUpperCase()}`;

  document.body.appendChild(bubble);

  if (window.gsap) {
    window.gsap.fromTo(bubble, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 });
    window.gsap.to(bubble, { opacity: 0, y: 15, delay: 2.2, duration: 0.4, onComplete: () => bubble.remove() });
  } else {
    setTimeout(() => bubble.remove(), 2500);
  }
}

/* ==========================================================================
   3. STATIC DATA UI RENDERING
   ========================================================================== */

function renderAllSections() {
  // A. Render Cognitive AI Recommendation Cards
  const recsContainer = document.getElementById("recommendations-container");
  recsContainer.innerHTML = "";
  tracks.slice(0, 4).forEach((track, idx) => {
    const card = document.createElement("div");
    card.className = "tilt-card";
    card.dataset.glow = track.glowColor;
    card.dataset.trackId = track.id;
    card.style.setProperty("--border-glow", track.glowColor + "77");

    card.innerHTML = `
      <div class="card-3d-child match-badge">MOOD MATCH ${track.neuralMatch}</div>
      <div class="card-3d-child">
        <h4 class="rec-title">${track.title}</h4>
        <p class="rec-artist">${track.artist}</p>
      </div>
      <div class="card-3d-child rec-footer" style="width: 100%;">
        <span class="rec-genre">${track.genre}</span>
        <div class="play-btn-circle" data-track-id="${track.id}">▶</div>
      </div>
    `;

    card.querySelector(".play-btn-circle").addEventListener("click", (e) => {
      e.stopPropagation();
      playTrackById(track.id);
    });

    card.addEventListener("click", () => playTrackById(track.id));
    recsContainer.appendChild(card);
  });

  // B. Render Trending Vectors List Rows
  const trendingContainer = document.getElementById("trending-tracks-container");
  trendingContainer.innerHTML = "";
  tracks.forEach((track, idx) => {
    const row = document.createElement("div");
    row.className = "song-row";
    row.dataset.trackId = track.id;
    
    row.innerHTML = `
      <span class="song-num">${String(idx + 1).padStart(2, "0")}</span>
      <div class="song-cover" style="background: linear-gradient(135deg, ${track.glowColor}44, #101018)">
        ${track.title[0]}
      </div>
      
      <!-- Waveform micro bars -->
      <div class="row-visualizer">
        <div class="row-bar"></div>
        <div class="row-bar"></div>
        <div class="row-bar"></div>
        <div class="row-bar"></div>
      </div>

      <div class="song-details">
        <h4 class="song-title">${track.title}</h4>
        <p class="song-artist">${track.artist}</p>
      </div>
      <span class="song-album">${track.album}</span>
      <span class="song-plays">${track.plays}</span>
      <span class="song-duration">${track.duration}</span>
    `;

    row.addEventListener("click", () => playTrackById(track.id));
    trendingContainer.appendChild(row);
  });

  // C. Render Mood Category Spheres
  const moodContainer = document.getElementById("mood-grid-container");
  moodContainer.innerHTML = "";
  moods.forEach(mood => {
    const box = document.createElement("div");
    box.className = "mood-card";
    box.innerHTML = `
      <div class="mood-glow-blob" style="background-color: ${mood.glow};"></div>
      <div class="mood-content">
        <h4 class="mood-title">${mood.title}</h4>
        <p class="mood-count">${mood.count}</p>
      </div>
    `;
    
    box.addEventListener("click", () => {
      const matchTracks = tracks.filter(t => t.genre.toLowerCase().includes(mood.title.split(" ")[0].toLowerCase()) || t.glowColor === mood.glow);
      if (matchTracks.length > 0) {
        const randTrack = matchTracks[Math.floor(Math.random() * matchTracks.length)];
        playTrackById(randTrack.id);
      } else {
        playTrackById(tracks[0].id);
      }
    });

    moodContainer.appendChild(box);
  });

  // D. Recently Recalled Tracks Belt
  const recentContainer = document.getElementById("recently-played-container");
  recentContainer.innerHTML = "";
  recentlyPlayed.forEach(rp => {
    const mini = document.createElement("div");
    mini.className = "recent-mini-card";
    mini.innerHTML = `
      <div class="recent-cover" style="background: linear-gradient(135deg, ${rp.glow}44, #121220); border-color: ${rp.glow}66;">
        ${rp.cover}
      </div>
      <div class="recent-info">
        <span class="recent-title">${rp.title}</span>
        <span class="recent-artist">${rp.artist}</span>
      </div>
    `;
    
    mini.addEventListener("click", () => {
      const actualTrack = tracks.find(t => t.title === rp.title);
      if (actualTrack) playTrackById(actualTrack.id);
    });

    recentContainer.appendChild(mini);
  });

  // E. Artist Spotlight Block
  document.getElementById("spotlight-artist-name").textContent = artistSpotlight.name;
  document.getElementById("spotlight-artist-bio").textContent = artistSpotlight.bio;
  document.getElementById("spotlight-stat-listeners").textContent = artistSpotlight.stats.listeners;
  document.getElementById("spotlight-stat-sync").textContent = artistSpotlight.stats.neuralSync;

  const spotTrackContainer = document.getElementById("spotlight-tracks-container");
  spotTrackContainer.innerHTML = "";
  artistSpotlight.popularTracks.forEach(pt => {
    const item = document.createElement("div");
    item.className = "spotlight-track-row";
    item.innerHTML = `
      <span class="spotlight-track-name">${pt.title}</span>
      <span class="spotlight-track-plays">${pt.plays} plays</span>
    `;
    
    item.addEventListener("click", () => {
      const match = tracks.find(t => t.title === pt.title);
      if (match) playTrackById(match.id);
    });

    spotTrackContainer.appendChild(item);
  });

  // F. Featured Releases Box
  const featuredContainer = document.getElementById("featured-releases-container");
  const feat = featuredReleases[0];
  featuredContainer.innerHTML = `
    <span class="featured-badge">Active Signal Grid</span>
    <h2 class="featured-title">${feat.title}</h2>
    <p class="featured-desc">${feat.description}</p>
    <div class="featured-stats">${feat.stats}</div>
    <div class="featured-tags">
      ${feat.tags.map(t => `<span class="tag-badge">${t}</span>`).join("")}
    </div>
  `;
  featuredContainer.addEventListener("click", () => {
    playTrackById(tracks[0].id);
  });

  // G. Premium Subscription Tiers Showcase
  const subContainer = document.getElementById("subscriptions-container");
  subContainer.innerHTML = "";
  subscriptionTiers.forEach(tier => {
    const box = document.createElement("div");
    box.className = `sub-card ${tier.popular ? "popular" : ""}`;
    box.dataset.glow = tier.glow;
    box.style.setProperty("--sub-hover-border", tier.popular ? "var(--cyan)" : "rgba(255,255,255,0.15)");
    box.style.setProperty("--sub-glow", tier.glow);

    box.innerHTML = `
      ${tier.popular ? `<div class="sub-popular-tag">MOST HARMONIC</div>` : ""}
      <div>
        <h4 class="sub-name">${tier.name}</h4>
        <div class="sub-price-block">
          <span class="sub-price">${tier.price}</span>
          <span class="sub-period">/${tier.period}</span>
        </div>
        <p class="sub-desc">${tier.description}</p>
      </div>

      <ul class="sub-features-list">
        ${tier.features.map(f => `<li class="sub-feature-item">${f}</li>`).join("")}
      </ul>

      <button class="sub-btn" type="button">INITIATE CONNECT</button>
    `;
    
    box.querySelector(".sub-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      showCyberNotification(`SYNC NET // tier [${tier.name}] unlocked!`);
      alert(`Synchronizing your matrix nodes with the [${tier.name}] network. Uptime link established!`);
    });

    subContainer.appendChild(box);
  });

  // Staggered GSAP Entries for Premium Polishing
  if (window.gsap) {
    window.gsap.fromTo(".tilt-card", {
      opacity: 0,
      y: 25,
      rotationX: 15
    }, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out",
      overwrite: "auto"
    });

    window.gsap.fromTo(".song-row", {
      opacity: 0,
      x: -20
    }, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out",
      overwrite: "auto"
    });
  }
}

/* ==========================================================================
   4. SEARCH ENGINE AUTOCOMPLETE
   ========================================================================== */

function setupSearchEngine() {
  const searchInput = document.getElementById("main-search-input");
  const dropdown = document.getElementById("search-autocomplete-dropdown");

  if (!searchInput || !dropdown) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      dropdown.classList.remove("active");
      return;
    }

    const matches = tracks.filter(t => 
      t.title.toLowerCase().includes(query) || 
      t.artist.toLowerCase().includes(query) ||
      t.genre.toLowerCase().includes(query) ||
      t.album.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      dropdown.innerHTML = `<div style="padding: 10px; color: var(--text-muted); font-size: 0.85rem;">No signals found.</div>`;
    } else {
      dropdown.innerHTML = "";
      matches.forEach(track => {
        const item = document.createElement("div");
        item.className = "search-result-item";
        item.innerHTML = `
          <div class="search-result-cover" style="background: linear-gradient(135deg, ${track.glowColor}, #050508)">
            ${track.title[0]}
          </div>
          <div>
            <div style="font-size: 0.85rem; font-weight: 600;">${track.title}</div>
            <div style="font-size: 0.7rem; color: var(--text-secondary);">${track.artist} • ${track.genre}</div>
          </div>
        `;
        
        item.addEventListener("click", () => {
          playTrackById(track.id);
          searchInput.value = "";
          dropdown.classList.remove("active");
        });

        dropdown.appendChild(item);
      });
    }

    dropdown.classList.add("active");
  });

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });
}

/* ==========================================================================
   5. WEB AUDIO PLAYER & DECK COORDINATION
   ========================================================================== */

function setupAudioEngineCallbacks() {
  audioEngine.onPlayStateChange = (playing) => {
    const masterPlayBtn = document.getElementById("master-play-btn");
    masterPlayBtn.textContent = playing ? "⏸" : "▶";
    masterPlayBtn.title = playing ? "Pause Stream" : "Play Stream";

    // Toggle rotating vinyl class spin state
    const vinyl = document.getElementById("holographic-vinyl");
    if (vinyl) {
      vinyl.classList.toggle("playing", playing);
    }

    const rows = document.querySelectorAll(".song-row");
    rows.forEach(r => {
      r.classList.remove("playing");
      if (audioEngine.currentTrack && r.dataset.trackId === audioEngine.currentTrack.id && playing) {
        r.classList.add("playing");
      }
    });

    if (playing && !isVisualizerCanvasInitialized) {
      initializeVisualizerOverlay();
    }
  };

  audioEngine.onTimeUpdate = (seconds) => {
    updateTimelineUI(seconds);
    syncLyricsToAudioTime(seconds);
  };

  window.addEventListener("request-play-track", (e) => {
    playTrackById(e.detail.id);
  });

  window.addEventListener("track-finished", () => {
    playNextTrack();
  });
}

function playTrackById(id) {
  const index = tracks.findIndex(t => t.id === id);
  if (index === -1) return;

  currentTrackIndex = index;
  const track = tracks[currentTrackIndex];
  
  // Set as active track in engine
  audioEngine.currentTrack = track;
  
  // Update Player Controller details
  document.getElementById("player-track-title").textContent = track.title;
  document.getElementById("player-track-artist").textContent = track.artist;
  
  // Update Holographic record spindle logo letter
  const vinylArtLetter = document.getElementById("vinyl-art-letter");
  const vinyl = document.getElementById("holographic-vinyl");
  if (vinylArtLetter && vinyl) {
    vinylArtLetter.textContent = track.title[0];
    vinyl.style.background = `linear-gradient(135deg, ${track.glowColor}, #0f0f1c)`;
    vinyl.style.borderColor = track.glowColor;
    
    // Set custom energy variable theme
    document.documentElement.style.setProperty("--track-active-glow", track.glowColor);
  }

  // Shift background starfield theme immediately
  if (starfieldInstance) {
    starfieldInstance.updateThemeColor(track.glowColor);
  }

  document.getElementById("player-total-time").textContent = track.duration;

  // Sync rows highlights
  const rows = document.querySelectorAll(".song-row");
  rows.forEach(r => {
    r.classList.remove("active");
    r.classList.remove("playing");
    if (r.dataset.trackId === track.id) {
      r.classList.add("active");
      r.classList.add("playing");
    }
  });

  if (carouselInstance) {
    carouselInstance.goTo(currentTrackIndex);
  }

  renderLyricsLines(track.lyrics);

  // Playback Router: YouTube vs direct HTML5/Synthesis
  if (track.youtubeId) {
    // 1. Stop local audio engine synthesis/streaming
    audioEngine.stop();
    
    // 2. Play YouTube Video
    isYtPlaying = true;
    window.isYtPlaying = true; // Expose globally for visualizer.js
    
    playYouTubeVideo(track.youtubeId);
  } else {
    // 1. Shut down YouTube player
    if (ytPlayer && typeof ytPlayer.stopVideo === "function") {
      ytPlayer.stopVideo();
    }
    const deck = document.getElementById("youtube-player-deck");
    if (deck) deck.classList.remove("active");
    
    isYtPlaying = false;
    window.isYtPlaying = false;
    
    // 2. Fire direct HTML5 or synthesizer engine
    audioEngine.play(track);
  }
}

function playNextTrack() {
  if (audioEngine.isShuffling) {
    const nextIdx = Math.floor(Math.random() * tracks.length);
    playTrackById(tracks[nextIdx].id);
  } else {
    const nextIdx = (currentTrackIndex + 1) % tracks.length;
    playTrackById(tracks[nextIdx].id);
  }
}

function playPreviousTrack() {
  const prevIdx = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  playTrackById(tracks[prevIdx].id);
}

function setupPlayerControls() {
  const playBtn = document.getElementById("master-play-btn");
  const prevBtn = document.getElementById("prev-track-btn");
  const nextBtn = document.getElementById("next-track-btn");
  const shuffleBtn = document.getElementById("shuffle-toggle-btn");
  const loopBtn = document.getElementById("loop-toggle-btn");
  const muteBtn = document.getElementById("mute-toggle-btn");
  const heroCtaBtn = document.getElementById("hero-cta-btn");
  const vinylBtn = document.getElementById("holographic-vinyl");

  const togglePlay = () => {
    if (!audioEngine.currentTrack) {
      playTrackById(tracks[0].id);
    } else {
      const track = audioEngine.currentTrack;
      if (track.youtubeId) {
        // Toggle play state inside YouTube frame
        if (isYtPlaying) {
          if (ytPlayer && typeof ytPlayer.pauseVideo === "function") {
            ytPlayer.pauseVideo();
          }
          isYtPlaying = false;
          window.isYtPlaying = false;
          playBtn.textContent = "▶";
          if (vinylBtn) vinylBtn.classList.remove("playing");
        } else {
          if (ytPlayer && typeof ytPlayer.playVideo === "function") {
            ytPlayer.playVideo();
          }
          isYtPlaying = true;
          window.isYtPlaying = true;
          playBtn.textContent = "⏸";
          if (vinylBtn) vinylBtn.classList.add("playing");
        }
      } else {
        if (audioEngine.isPlaying) {
          audioEngine.pause();
        } else {
          audioEngine.play(audioEngine.currentTrack);
        }
      }
    }
  };

  playBtn.addEventListener("click", togglePlay);
  heroCtaBtn.addEventListener("click", togglePlay);
  if (vinylBtn) vinylBtn.addEventListener("click", togglePlay);

  nextBtn.addEventListener("click", () => playNextTrack());
  prevBtn.addEventListener("click", () => playPreviousTrack());

  shuffleBtn.addEventListener("click", () => {
    const val = audioEngine.toggleShuffle();
    shuffleBtn.classList.toggle("active", val);
  });
  loopBtn.addEventListener("click", () => {
    const val = audioEngine.toggleLoop();
    loopBtn.classList.toggle("active", val);
  });

  muteBtn.addEventListener("click", () => {
    const muted = audioEngine.toggleMute();
    muteBtn.textContent = muted ? "🔇" : "🔊";
    muteBtn.classList.toggle("active", muted);
  });

  const timelineTrack = document.getElementById("player-timeline-track");
  timelineTrack.addEventListener("click", (e) => {
    if (!audioEngine.currentTrack) return;
    const rect = timelineTrack.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    
    const track = audioEngine.currentTrack;
    if (track.youtubeId) {
      if (ytPlayer && typeof ytPlayer.seekTo === "function") {
        ytPlayer.seekTo(track.durationSeconds * pct, true);
      }
    } else {
      audioEngine.seek(pct);
    }
  });

  const volumeTrack = document.getElementById("player-volume-track");
  const volumeFill = document.getElementById("player-volume-fill");
  volumeTrack.addEventListener("click", (e) => {
    const rect = volumeTrack.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const vol = Math.max(0, Math.min(1, clickX / rect.width));
    audioEngine.setVolume(vol);
    volumeFill.style.width = `${vol * 100}%`;
  });
}

function updateTimelineUI(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  document.getElementById("player-current-time").textContent = `${mins}:${String(secs).padStart(2, "0")}`;

  if (audioEngine.currentTrack) {
    const pct = seconds / audioEngine.currentTrack.durationSeconds;
    document.getElementById("player-timeline-fill").style.width = `${pct * 100}%`;
    document.getElementById("player-timeline-knob").style.left = `${pct * 100}%`;
  }
}

/* ==========================================================================
   6. LYRICS DECRYPTER PANEL
   ========================================================================== */

function renderLyricsLines(lyricsArray) {
  const container = document.getElementById("lyrics-viewport");
  container.innerHTML = "";

  if (!lyricsArray || lyricsArray.length === 0) {
    container.innerHTML = `<div style="padding: 40px 0; text-align: center; color: var(--text-muted);">Timed cyber-matrix feed unavailable.</div>`;
    return;
  }

  lyricsArray.forEach((line, idx) => {
    const block = document.createElement("p");
    block.className = "lyric-line";
    block.textContent = line.text;
    block.dataset.time = line.time;
    block.dataset.index = idx;
    
    block.addEventListener("click", () => {
      const isPlaying = (audioEngine.isPlaying || isYtPlaying);
      if (!isPlaying || !audioEngine.currentTrack) return;
      
      const progress = line.time / audioEngine.currentTrack.durationSeconds;
      
      if (audioEngine.currentTrack.youtubeId) {
        if (ytPlayer && typeof ytPlayer.seekTo === "function") {
          ytPlayer.seekTo(line.time, true);
        }
      } else {
        audioEngine.seek(progress);
      }
    });

    container.appendChild(block);
  });
}

function syncLyricsToAudioTime(seconds) {
  const lines = document.querySelectorAll(".lyric-line");
  if (lines.length === 0) return;

  let activeLine = null;

  lines.forEach((line, idx) => {
    const lineTime = parseFloat(line.dataset.time);
    const nextLine = lines[idx + 1];
    const nextLineTime = nextLine ? parseFloat(nextLine.dataset.time) : 9999;

    if (seconds >= lineTime && seconds < nextLineTime) {
      line.classList.add("active");
      activeLine = line;
    } else {
      line.classList.remove("active");
    }
  });

  if (activeLine) {
    const viewport = document.getElementById("lyrics-viewport");
    const viewportHeight = viewport.clientHeight;
    const activeTop = activeLine.offsetTop;
    const activeHeight = activeLine.clientHeight;
    
    viewport.scrollTo({
      top: activeTop - viewportHeight / 2 + activeHeight / 2,
      behavior: "smooth"
    });
  }
}

function setupDynamicLyricSync() {
  const lyricsToggle = document.getElementById("lyrics-toggle-btn");
  const lyricsPanel = document.getElementById("lyrics-panel-modal");
  const lyricsClose = document.getElementById("lyrics-close-btn");

  const toggle = () => {
    lyricsPanel.classList.toggle("active");
    lyricsToggle.classList.toggle("active");
  };

  lyricsToggle.addEventListener("click", toggle);
  lyricsClose.addEventListener("click", toggle);
}

/* ==========================================================================
   7. CANVAS VISUALIZER COUPLING
   ========================================================================== */

function initializeVisualizerOverlay() {
  if (isVisualizerCanvasInitialized) return;
  
  const visCanvas = document.getElementById("main-visualizer-canvas");
  if (visCanvas) {
    visualizer.init(visCanvas);
    isVisualizerCanvasInitialized = true;
  }
}

function setupVisualizerModes() {
  const overlayToggle = document.getElementById("visualizer-toggle-btn");
  const visOverlay = document.getElementById("visualizer-overlay");
  
  overlayToggle.addEventListener("click", () => {
    const isActive = visOverlay.classList.toggle("active");
    overlayToggle.classList.toggle("active", isActive);
    
    if (isActive) {
      initializeVisualizerOverlay();
      updateSidebarNavActiveTab("visualizer");
    } else {
      updateSidebarNavActiveTab("dashboard");
    }
  });

  const selectors = document.querySelectorAll(".vis-selector-btn");
  selectors.forEach(btn => {
    btn.addEventListener("click", (e) => {
      selectors.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const mode = btn.dataset.vis;
      visualizer.setMode(mode);
    });
  });
}

/* ==========================================================================
   8. NAVIGATION TABS CONTROLLER (SIDEBAR NAV)
   ========================================================================== */

function setupNavigationTabs() {
  const navItems = document.querySelectorAll(".nav-item");
  const visOverlay = document.getElementById("visualizer-overlay");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");

      const tab = item.dataset.tab;

      if (tab === "dashboard") {
        visOverlay.classList.remove("active");
        document.getElementById("visualizer-toggle-btn").classList.remove("active");
      }
      else if (tab === "visualizer") {
        visOverlay.classList.add("active");
        document.getElementById("visualizer-toggle-btn").classList.add("active");
        initializeVisualizerOverlay();
      }
      else if (tab === "chat") {
        visOverlay.classList.remove("active");
        document.getElementById("visualizer-toggle-btn").classList.remove("active");
        document.getElementById("live-listening").scrollIntoView({ behavior: "smooth" });
      }
      else if (tab === "subscription") {
        visOverlay.classList.remove("active");
        document.getElementById("visualizer-toggle-btn").classList.remove("active");
        document.getElementById("subscription").scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

function updateSidebarNavActiveTab(tabName) {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.classList.remove("active");
    if (item.dataset.tab === tabName) {
      item.classList.add("active");
    }
  });
}

/* ==========================================================================
   9. HERO CANVAS BACKGROUND DRAWING (SLOW DUST PARTICLES)
   ========================================================================== */

function renderHeroSpaceCanvas() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  
  const resize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  const particles = [];
  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2
    });
  }

  function tick() {
    if (!canvas || !ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.fillStyle = `rgba(0, 240, 255, ${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(tick);
  }

  tick();
}

/* ==========================================================================
   10. YOUTUBE DECK CONTROLS & DYNAMIC POPULAR CARDS
   ========================================================================== */

function playYouTubeVideo(videoId) {
  const deck = document.getElementById("youtube-player-deck");
  if (deck) {
    deck.classList.add("active");
  }
  
  const placeholder = document.getElementById("yt-iframe-placeholder");
  if (placeholder) placeholder.style.display = "none";

  // Bind periodic timer updates since YouTube doesn't trigger standard HTML5 timeupdates
  let timerInterval = null;
  
  if (!ytPlayer) {
    ytPlayer = new YT.Player('yt-player-container', {
      height: '100%',
      width: '100%',
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        controls: 1,
        modestbranding: 1,
        rel: 0
      },
      events: {
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.ENDED) {
            clearInterval(timerInterval);
            playNextTrack();
          }
          else if (event.data === YT.PlayerState.PLAYING) {
            isYtPlaying = true;
            window.isYtPlaying = true;
            
            // Periodically sync slider bar
            clearInterval(timerInterval);
            timerInterval = setInterval(() => {
              if (isYtPlaying && ytPlayer && typeof ytPlayer.getCurrentTime === "function") {
                const current = ytPlayer.getCurrentTime();
                updateTimelineUI(current);
                syncLyricsToAudioTime(current);
              }
            }, 250);

            // Sync footer deck play state
            const playBtn = document.getElementById("master-play-btn");
            if (playBtn) playBtn.textContent = "⏸";
            
            const vinyl = document.getElementById("holographic-vinyl");
            if (vinyl) vinyl.classList.add("playing");
          } else {
            isYtPlaying = false;
            window.isYtPlaying = false;
            clearInterval(timerInterval);

            if (event.data === YT.PlayerState.PAUSED) {
              const playBtn = document.getElementById("master-play-btn");
              if (playBtn) playBtn.textContent = "▶";
              const vinyl = document.getElementById("holographic-vinyl");
              if (vinyl) vinyl.classList.remove("playing");
            }
          }
        }
      }
    });
  } else {
    ytPlayer.loadVideoById(videoId);
  }
}

function setupYouTubeDeckControls() {
  const deck = document.getElementById("youtube-player-deck");
  const minBtn = document.getElementById("yt-minimize-btn");
  const closeBtn = document.getElementById("yt-close-btn");
  
  if (!deck || !minBtn || !closeBtn) return;
  
  minBtn.addEventListener("click", () => {
    deck.classList.toggle("minimized");
  });
  
  closeBtn.addEventListener("click", () => {
    deck.classList.remove("active");
    if (ytPlayer && typeof ytPlayer.stopVideo === "function") {
      ytPlayer.stopVideo();
    }
    isYtPlaying = false;
    window.isYtPlaying = false;
    audioEngine.isPlaying = false;

    // Reset UI
    const playBtn = document.getElementById("master-play-btn");
    if (playBtn) playBtn.textContent = "▶";
    const vinyl = document.getElementById("holographic-vinyl");
    if (vinyl) vinyl.classList.remove("playing");

    showCyberNotification("YouTube Signal Closed");
  });
}

function renderYouTubeMultiverseSection() {
  const grid = document.getElementById("youtube-multiverse-grid");
  if (!grid) return;
  
  grid.innerHTML = "";
  
  // Filter popular global hit tracks
  const ytTracks = tracks.filter(t => t.youtubeId);
  
  ytTracks.forEach(track => {
    const card = document.createElement("div");
    card.className = "multiverse-card";
    card.style.setProperty("--card-glow", track.glowColor);
    card.style.setProperty("--card-glow-alpha", track.glowColor + "22");
    
    card.innerHTML = `
      <div class="multiverse-cover" style="background: linear-gradient(135deg, ${track.glowColor}55, #08080f); border: 2px solid ${track.glowColor}; color: ${track.glowColor}; text-shadow: 0 0 10px ${track.glowColor}88;">
        ${track.title[0]}
      </div>
      <h4 class="multiverse-title" title="${track.title}">${track.title}</h4>
      <p class="multiverse-artist">${track.artist}</p>
      <span class="multiverse-badge" style="color: ${track.glowColor}; border-color: ${track.glowColor}55;">${track.genre}</span>
    `;
    
    card.addEventListener("click", () => {
      playTrackById(track.id);
    });
    
    grid.appendChild(card);
  });

  // Staggered GSAP Entries for Global Hits Grid
  if (window.gsap) {
    window.gsap.fromTo(".multiverse-card", {
      opacity: 0,
      y: 20,
      scale: 0.95
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.08,
      ease: "power2.out",
      overwrite: "auto"
    });
  }

  // Search Injections
  const searchBtn = document.getElementById("yt-search-btn");
  const searchInput = document.getElementById("yt-search-input");
  if (searchBtn && searchInput) {
    const injectSearch = () => {
      const query = searchInput.value.trim();
      if (!query) return;
      
      const parsedId = extractYouTubeId(query);
      if (parsedId) {
        injectCustomYouTubeTrack("Custom Broadcast Link", "YouTube Decoded", parsedId);
        searchInput.value = "";
      } else {
        // Search pre-loaded popular hits
        const match = tracks.find(t => t.youtubeId && (t.title.toLowerCase().includes(query.toLowerCase()) || t.artist.toLowerCase().includes(query.toLowerCase())));
        if (match) {
          playTrackById(match.id);
          searchInput.value = "";
        } else {
          // Play retrowave visual mix fallback
          injectCustomYouTubeTrack(query, "YouTube Multiverse", "4NRXx6U8ABQ");
          searchInput.value = "";
        }
      }
    };

    searchBtn.addEventListener("click", injectSearch);
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") injectSearch();
    });
  }
}

function extractYouTubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

function injectCustomYouTubeTrack(title, artist, videoId) {
  const customId = `custom-yt-${Date.now()}`;
  const newTrack = {
    id: customId,
    title: title,
    artist: artist,
    album: "YouTube Multiverse",
    duration: "3:20",
    durationSeconds: 200,
    plays: "Direct",
    neuralMatch: "99.9%",
    genre: "Global Sync",
    glowColor: "#ff007f",
    backdrop: "linear-gradient(135deg, rgba(255, 0, 127, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    youtubeId: videoId,
    lyrics: [
      { time: 0, text: "[ SYNCHRONIZING YOUTUBE MULTIVERSE CORE ]" },
      { time: 3, text: `Decrypting telemetry for: ${title.toUpperCase()}...` },
      { time: 7, text: "Linking cross-origin audio matrix path..." },
      { time: 12, text: "AI visual beat-sync matrix engaged." },
      { time: 20, text: "[ TRANSMITTING HIGH-FIDELITY SONIC BROADCAST ]" }
    ]
  };
  
  tracks.push(newTrack);
  renderAllSections();
  playTrackById(customId);
  showCyberNotification("YouTube Signal Decrypted!");
}

/* ==========================================================================
   11. DYNAMIC FILE UPLOAD PORT (LOCAL MP3 INJECTOR)
   ========================================================================== */

function setupQuantumUploader() {
  const dropZone = document.getElementById("upload-drop-zone");
  const fileInput = document.getElementById("local-audio-uploader");
  
  if (!dropZone || !fileInput) return;
  
  dropZone.addEventListener("click", () => {
    fileInput.click();
  });
  
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
  });
  
  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
  });
  
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    if (file) handleLocalFileInjection(file);
  });
  
  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) handleLocalFileInjection(file);
  });
}

function handleLocalFileInjection(file) {
  if (!file.type.startsWith("audio/")) {
    showCyberNotification("Telemetry Error: Invalid file type");
    return;
  }
  
  const fileUrl = URL.createObjectURL(file);
  const customId = `custom-blob-${Date.now()}`;
  
  const newTrack = {
    id: customId,
    title: file.name.replace(/\.[^/.]+$/, ""),
    artist: "Neural Custom Node",
    album: "Local Decrypted Node",
    duration: "3:00",
    durationSeconds: 180,
    plays: "Local Play",
    neuralMatch: "100%",
    genre: "Custom Wave",
    glowColor: "#39ff14",
    backdrop: "linear-gradient(135deg, rgba(57, 255, 20, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    audioUrl: fileUrl,
    lyrics: [
      { time: 0, text: "[ LOCAL SIGNAL CALIBRATION ENGAGED ]" },
      { time: 3, text: "Acoustic file ingested: bypassing global licensing frameworks..." },
      { time: 8, text: "Linking direct Web Audio API Analyser channels..." },
      { time: 13, text: "High-resolution FFT frequency spectrum fully active!" },
      { time: 20, text: "[ ENJOY REAL-TIME HARMONIC FREQUENCY MAPPING ]" }
    ]
  };
  
  tracks.push(newTrack);
  renderAllSections();
  playTrackById(customId);
  showCyberNotification("Local Audio Decrypted!");
}
