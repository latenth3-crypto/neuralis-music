/**
 * NEURALIS - Futuristic Music Platform Mock Database
 * Rich metadata, timed lyrics, and synthesis parameters for procedural Web Audio generation.
 * Expanded to support high-fidelity real-time streaming audio URLs and global YouTube track definitions.
 */

export const tracks = [
  {
    id: "track-1",
    title: "Quantum Drift",
    artist: "Aethera",
    album: "Nebula Core",
    duration: "0:45",
    durationSeconds: 45,
    plays: "4.8M",
    neuralMatch: "99.4%",
    genre: "Dark Synthwave",
    glowColor: "#00f0ff",
    backdrop: "linear-gradient(135deg, rgba(0, 240, 255, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    // Real CORS-safe background streaming audio
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    synthParams: {
      tempo: 120,
      baseFreq: 110, // A2 (Bass)
      chords: [
        [110, 165, 220, 275], // Am-ish
        [130.8, 196, 261.6, 329.6], // C
        [146.8, 220, 293.7, 349.2], // Dm
        [116.5, 174.6, 233.1, 293.7] // Bb
      ],
      leadScale: [220, 246.9, 261.6, 293.7, 329.6, 349.2, 392.0, 440], // A Minor
      waveType: "sawtooth",
      filterCutoff: 1200,
      lfoSpeed: 4,
      delayTime: 0.35,
      delayFeedback: 0.4
    },
    lyrics: [
      { time: 0, text: "[ SYSTEM CALIBRATION COMPLETE ]" },
      { time: 3, text: "Drifting out through the static space..." },
      { time: 7, text: "Nebula particles glowing on my face." },
      { time: 11, text: "Do you hear the rhythm of the cyber core?" },
      { time: 15, text: "Synthesized emotions, seeking something more." },
      { time: 20, text: "[ INSTRUMENTAL RESONANCE OVERLOAD ]" },
      { time: 24, text: "Floating inside a holographic dream..." },
      { time: 28, text: "We are data rivers flowing in the stream." },
      { time: 32, text: "Locked into the wavelength, riding on the drift..." },
      { time: 36, text: "Feel the gravity bend... feel the dimensions shift." },
      { time: 40, text: "[ SIGNAL FADE OUT - QUANTUM RESET ]" }
    ]
  },
  {
    id: "track-2",
    title: "Neon Horizon",
    artist: "Kaelen-X",
    album: "Retrofutura",
    duration: "0:40",
    durationSeconds: 40,
    plays: "3.2M",
    neuralMatch: "97.2%",
    genre: "Outrun Synthwave",
    glowColor: "#ff007f",
    backdrop: "linear-gradient(135deg, rgba(255, 0, 127, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    synthParams: {
      tempo: 140,
      baseFreq: 82.4, // E2 (Low bass)
      chords: [
        [82.4, 123.5, 164.8, 207.7], // E Major
        [98.0, 146.8, 196.0, 246.9], // G Major
        [87.3, 130.8, 174.6, 220.0], // F Major
        [73.4, 110.0, 146.8, 174.6]  // D Minor
      ],
      leadScale: [164.8, 185.0, 207.7, 220.0, 246.9, 277.2, 293.7, 329.6], // E Mixolydian
      waveType: "triangle",
      filterCutoff: 1800,
      lfoSpeed: 6,
      delayTime: 0.25,
      delayFeedback: 0.3
    },
    lyrics: [
      { time: 0, text: "[ INITIATING RUN SEQUENCE: 140BPM ]" },
      { time: 4, text: "Speeding past the gridlines of the night..." },
      { time: 8, text: "Neon skyscrapers bleeding out of sight." },
      { time: 12, text: "Analog frequencies firing in my head..." },
      { time: 16, text: "Living in the shadows, glowing in the red." },
      { time: 21, text: "[ OUTRUN LEAD OSCILLATOR PITCH SHIFT ]" },
      { time: 26, text: "Run forever, catch the digital sun..." },
      { time: 30, text: "Before the processing cycles are done." },
      { time: 34, text: "Accelerating beyond the human sight..." },
      { time: 38, text: "[ GRID HORIZON TERMINATED ]" }
    ]
  },
  {
    id: "track-3",
    title: "Sub-Zero Strobe",
    artist: "L U C I D",
    album: "Cryostasis",
    duration: "0:50",
    durationSeconds: 50,
    plays: "1.9M",
    neuralMatch: "94.5%",
    genre: "Glitch Ambient",
    glowColor: "#39ff14",
    backdrop: "linear-gradient(135deg, rgba(57, 255, 20, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    synthParams: {
      tempo: 90,
      baseFreq: 73.4, // D2
      chords: [
        [73.4, 110.0, 146.8, 185.0], // D Maj7
        [65.4, 98.0, 130.8, 164.8],  // C Maj7
        [73.4, 110.0, 146.8, 185.0],
        [58.2, 87.3, 116.5, 138.6]   // Bb Maj7
      ],
      leadScale: [146.8, 164.8, 185.0, 220.0, 246.9, 277.2, 293.7, 329.6], // D Major
      waveType: "sine",
      filterCutoff: 600,
      lfoSpeed: 2,
      delayTime: 0.5,
      delayFeedback: 0.6
    },
    lyrics: [
      { time: 0, text: "[ CRYO-STASIS HYPER SLEEP ON ]" },
      { time: 4, text: "Cold waves... falling through the cyber frost..." },
      { time: 9, text: "Every digital memory we ever lost." },
      { time: 14, text: "Ice crystals whispering in the glitching air..." },
      { time: 19, text: "I search the machine, but there is no one there." },
      { time: 25, text: "[ SUB-AMBIENT DECOMPRESSION ACTIVE ]" },
      { time: 30, text: "Strobe lights bouncing off the frozen dome..." },
      { time: 35, text: "In this crystal network, we have found our home." },
      { time: 40, text: "Slow pulse... keep the brain activity low..." },
      { time: 45, text: "Surrender yourself to the sub-zero glow..." }
    ]
  },
  {
    id: "track-4",
    title: "Chrono Shift",
    artist: "Aethera",
    album: "Nebula Core",
    duration: "0:35",
    durationSeconds: 35,
    plays: "5.1M",
    neuralMatch: "98.1%",
    genre: "Space Synthwave",
    glowColor: "#00f0ff",
    backdrop: "linear-gradient(135deg, rgba(0, 240, 255, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    synthParams: {
      tempo: 130,
      baseFreq: 98.0, // G2
      chords: [
        [98.0, 146.8, 196.0, 233.1], // Gm
        [77.8, 116.5, 155.6, 196.0], // Eb
        [87.3, 130.8, 174.6, 220.0], // F
        [98.0, 146.8, 196.0, 233.1]
      ],
      leadScale: [196.0, 220.0, 233.1, 261.6, 293.7, 311.1, 349.2, 392.0], // G Minor
      waveType: "sawtooth",
      filterCutoff: 1500,
      lfoSpeed: 5,
      delayTime: 0.3,
      delayFeedback: 0.45
    },
    lyrics: [
      { time: 0, text: "[ TEMPORAL CALIBRATION INITIATED ]" },
      { time: 3, text: "Time is just an axis on a screen..." },
      { time: 7, text: "Shifting through the spaces in between." },
      { time: 11, text: "I can see tomorrow like a history file..." },
      { time: 15, text: "Stretched across the light years, mile by mile." },
      { time: 19, text: "[ MATRIX LOOP OVERRIDE ]" },
      { time: 23, text: "Rewriting the pathways that we once ran..." },
      { time: 27, text: "Creating a future because we can." },
      { time: 31, text: "Chrono Shift completed... now we emerge..." },
      { time: 34, text: "[ CONVERGENCE REACHED ]" }
    ]
  },
  {
    id: "track-5",
    title: "Plasma Rain",
    artist: "V E S P E R",
    album: "Solar Wind",
    duration: "0:42",
    durationSeconds: 42,
    plays: "2.4M",
    neuralMatch: "91.8%",
    genre: "Cyberpunk Industrial",
    glowColor: "#ffaa00",
    backdrop: "linear-gradient(135deg, rgba(255, 170, 0, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    synthParams: {
      tempo: 125,
      baseFreq: 65.4, // C2 (Heavy)
      chords: [
        [65.4, 98.0, 130.8, 155.6], // Cm
        [58.2, 87.3, 116.5, 138.6], // Bbm
        [65.4, 98.0, 130.8, 155.6],
        [77.8, 116.5, 155.6, 196.0]  // Eb
      ],
      leadScale: [130.8, 146.8, 155.6, 174.6, 196.0, 207.7, 233.1, 261.6], // C Minor
      waveType: "square",
      filterCutoff: 1000,
      lfoSpeed: 8,
      delayTime: 0.2,
      delayFeedback: 0.35
    },
    lyrics: [
      { time: 0, text: "[ PLASMA SHIELD DEPLOYED ]" },
      { time: 4, text: "Heavy rain... falling in the neon street..." },
      { time: 8, text: "Electrified puddle droplets under my feet." },
      { time: 12, text: "High-voltage circuits hum in the dark..." },
      { time: 16, text: "Unleashing a violent, electric spark." },
      { time: 20, text: "[ CURRENT BREAKOUT EXCEEDED ]" },
      { time: 24, text: "Plasma rain, washing clean the steel..." },
      { time: 28, text: "Making me remember what it is to feel." },
      { time: 32, text: "Burning like liquid fire from the sky..." },
      { time: 36, text: "Watch the storm cloud networks rolling by." },
      { time: 40, text: "[ DISCHARGE COMPLETE ]" }
    ]
  },
  
  /* ==========================================================================
     GLOBAL MULTI-LANGUAGE HITS (YOUTUBE INTEGRATION CORES)
     ========================================================================== */
  {
    id: "track-6",
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    duration: "3:53",
    durationSeconds: 233,
    plays: "6.4B",
    neuralMatch: "99.8%",
    genre: "Pop / English",
    glowColor: "#00f0ff",
    backdrop: "linear-gradient(135deg, rgba(0, 240, 255, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    youtubeId: "JGwWNGJdvx8",
    lyrics: [
      { time: 0, text: "[ NEURAL LINK SYNCHRONIZED - SHAPE OF YOU ]" },
      { time: 4, text: "The club isn't the best place to find a lover..." },
      { time: 8, text: "So the bar is where I go." },
      { time: 11, text: "Me and my friends at the table doing shots..." },
      { time: 14, text: "Drinking fast and then we talk slow." },
      { time: 17, text: "I'm in love with the shape of you..." },
      { time: 21, text: "We push and pull like a magnet do." },
      { time: 25, text: "[ DETECTING ED SHEERAN POP MATRIX ]" }
    ]
  },
  {
    id: "track-7",
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    durationSeconds: 200,
    plays: "4.2B",
    neuralMatch: "98.7%",
    genre: "Synthpop / English",
    glowColor: "#ff007f",
    backdrop: "linear-gradient(135deg, rgba(255, 0, 127, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    youtubeId: "4NRXx6U8ABQ",
    lyrics: [
      { time: 0, text: "[ RETRO SYNTHPULSE ACTIVE - BLINDING LIGHTS ]" },
      { time: 6, text: "I've been on my own for long enough..." },
      { time: 12, text: "Maybe you can show me how to love, maybe..." },
      { time: 18, text: "I look around and Sin City's cold and empty..." },
      { time: 24, text: "No one's around to judge me..." },
      { time: 29, text: "I said, ooh, I'm blinded by the lights!" },
      { time: 35, text: "No, I can't sleep until I feel your touch..." },
      { time: 40, text: "[ DYNAMIC RETRO SYNTH WAVE OVERFLOW ]" }
    ]
  },
  {
    id: "track-8",
    title: "Despacito",
    artist: "Luis Fonsi ft. Daddy Yankee",
    album: "Vida",
    duration: "4:41",
    durationSeconds: 281,
    plays: "8.5B",
    neuralMatch: "96.4%",
    genre: "Reggaeton / Spanish",
    glowColor: "#ffaa00",
    backdrop: "linear-gradient(135deg, rgba(255, 170, 0, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    youtubeId: "kJQP7kiw5Fk",
    lyrics: [
      { time: 0, text: "[ REGGAETON SYNC ACTIVE - DESPACITO ]" },
      { time: 5, text: "¡Sí, sabes que ya llevo un rato mirándote!" },
      { time: 11, text: "Tengo que bailar contigo hoy..." },
      { time: 17, text: "Vi que tu mirada ya estaba llamándome..." },
      { time: 23, text: "Muéstrame el camino que yo voy..." },
      { time: 28, text: "Despacito... quiero respirar tu cuello despacito..." },
      { time: 34, text: "Deja que te diga cosas al oído..." },
      { time: 40, text: "[ LATIN DANCE MATRIX RESONATING ]" }
    ]
  },
  {
    id: "track-9",
    title: "Kesariya",
    artist: "Arijit Singh",
    album: "Brahmāstra",
    duration: "4:28",
    durationSeconds: 268,
    plays: "480M",
    neuralMatch: "97.5%",
    genre: "Bollywood / Hindi",
    glowColor: "#ff5500",
    backdrop: "linear-gradient(135deg, rgba(255, 85, 0, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    youtubeId: "BddP6PYo2Gs",
    lyrics: [
      { time: 0, text: "[ INJECTING BOLLYWOOD RESONANCE CORE - KESARIYA ]" },
      { time: 4, text: "Mujhko itna bataaye koi..." },
      { time: 8, text: "Kaise tujhse dil na lagaaye koi..." },
      { time: 13, text: "Rabba ne tujhko banaane mein..." },
      { time: 17, text: "Kardi hai husn ki khaali tijoriyaan..." },
      { time: 23, text: "Kesariya tera ishq hai piya..." },
      { time: 28, text: "Rang jaaun jo main haath lagaaun..." },
      { time: 33, text: "Fikr mein teri din beete, rang saari teri fikriyaan..." }
    ]
  },
  {
    id: "track-10",
    title: "Dynamite",
    artist: "BTS",
    album: "Be",
    duration: "3:43",
    durationSeconds: 223,
    plays: "1.9B",
    neuralMatch: "99.1%",
    genre: "K-Pop / Korean",
    glowColor: "#39ff14",
    backdrop: "linear-gradient(135deg, rgba(57, 255, 20, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    youtubeId: "gdZLi9oWNZg",
    lyrics: [
      { time: 0, text: "[ K-POP ENERGY STREAM SYNTAX - DYNAMITE ]" },
      { time: 4, text: "'Cause I, I'm in the stars tonight..." },
      { time: 8, text: "So watch me bring the fire and set the night alight..." },
      { time: 12, text: "Shoes on, get up in the morn'..." },
      { time: 16, text: "Cup of milk, let's rock and roll..." },
      { time: 20, text: "Shining through the city with a little funk and soul..." },
      { time: 24, text: "So I'ma light it up like dynamite, whoa!" },
      { time: 30, text: "[ DYNAMITE DISCHARGE AT MAXIMUM POWER ]" }
    ]
  },
  {
    id: "track-11",
    title: "Idol",
    artist: "YOASOBI",
    album: "Idol EP",
    duration: "3:40",
    durationSeconds: 220,
    plays: "610M",
    neuralMatch: "98.3%",
    genre: "J-Pop / Anime",
    glowColor: "#ff007f",
    backdrop: "linear-gradient(135deg, rgba(255, 0, 127, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    youtubeId: "ZRtdQ81jPUQ",
    lyrics: [
      { time: 0, text: "[ ANIME RESONANCE CORE OVERDRIVE - IDOL ]" },
      { time: 4, text: "Mutedom... daremo ga me o ubawareteiku..." },
      { time: 8, text: "Kimi wa kanpeki de kyuukyoku no idol!" },
      { time: 12, text: "Konban wa, nani tabeta? Suki na hon wa?..." },
      { time: 16, text: "Asobi ni iku nara doko ni ikuno?..." },
      { time: 20, text: "Nani mo kiitenai, nani mo shinjitenai..." },
      { time: 24, text: "Kimi no kotoba ni wa uso ga chiribamerareteiru..." },
      { time: 28, text: "Kore wa... ai na no ka na?" }
    ]
  },
  {
    id: "track-12",
    title: "Samajavaragamana",
    artist: "Sid Sriram",
    album: "Ala Vaikunthapurramuloo",
    duration: "3:40",
    durationSeconds: 220,
    plays: "580M",
    neuralMatch: "99.2%",
    genre: "Tollywood / Telugu",
    glowColor: "#00f0ff",
    backdrop: "linear-gradient(135deg, rgba(0, 240, 255, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    youtubeId: "ocHN_6v2Y8w",
    lyrics: [
      { time: 0, text: "[ RESONATING TOLLYW00D HARMONICS - SAMAJAVARAGAMANA ]" },
      { time: 4, text: "Samajavaragamana... Ninu choosi aaga galana?..." },
      { time: 10, text: "Manasa vaacha karmana... Neevele naaku praana..." },
      { time: 16, text: "Mallela vaana... Nee navvu chirujallu kaana..." },
      { time: 22, text: "[ CONNECTING SID SRIRAM HIGH FREQUENCY CORE ]" }
    ]
  },
  {
    id: "track-13",
    title: "Arabic Kuthu",
    artist: "Anirudh Ravichander",
    album: "Beast",
    duration: "4:40",
    durationSeconds: 260,
    plays: "620M",
    neuralMatch: "98.9%",
    genre: "Kollywood / Tamil",
    glowColor: "#ff007f",
    backdrop: "linear-gradient(135deg, rgba(255, 0, 127, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    youtubeId: "KUN5Uf9mObQ",
    lyrics: [
      { time: 0, text: "[ INJECTING KOLLYWOOD DANCE SYNAPSE - ARABIC KUTHU ]" },
      { time: 4, text: "Halamithi habibo... Halamithi habibo..." },
      { time: 8, text: "Malama pitha pithadhe... Malama pitha pithadhe..." },
      { time: 12, text: "Yenna vazhiye vazhiye vaa... Unnai vizhiye vizhiye paar..." },
      { time: 18, text: "[ ANIRUDH BEAT SYNC INTENSITY AT 120% ]" }
    ]
  },
  {
    id: "track-14",
    title: "Darshana",
    artist: "Hesham Abdul Wahab",
    album: "Hridayam",
    duration: "3:50",
    durationSeconds: 230,
    plays: "240M",
    neuralMatch: "96.8%",
    genre: "Mollywood / Malayalam",
    glowColor: "#39ff14",
    backdrop: "linear-gradient(135deg, rgba(57, 255, 20, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    youtubeId: "9A608-TCSk8",
    lyrics: [
      { time: 0, text: "[ MOLLYWOOD MELODY MATRIX ENGAGED - DARSHANA ]" },
      { time: 5, text: "Darshana... Ninnai njaan kandatho... Orthatho..." },
      { time: 11, text: "Nenjile... Ee thudippum paattum aayatho..." },
      { time: 17, text: "Kavilile... Ee chuvappum chundum nalkiyo..." },
      { time: 23, text: "[ ACOUSTIC RESONANCE CALIBRATION COMPLETED ]" }
    ]
  },
  {
    id: "track-15",
    title: "Jai Ho",
    artist: "A.R. Rahman",
    album: "Slumdog Millionaire",
    duration: "5:12",
    durationSeconds: 312,
    plays: "350M",
    neuralMatch: "97.9%",
    genre: "Bollywood / Hindi",
    glowColor: "#ffaa00",
    backdrop: "linear-gradient(135deg, rgba(255, 170, 0, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    youtubeId: "xwwAVRyNip0",
    lyrics: [
      { time: 0, text: "[ AR RAHMAN RESONANCE MASTERWORK - JAI HO ]" },
      { time: 3, text: "Jai Ho... Jai Ho..." },
      { time: 7, text: "Aaja aaja jind shamiyane ke tale..." },
      { time: 12, text: "Aaja jarra jarra chand chabaane ke chale..." },
      { time: 17, text: "Jai Ho... Jai Ho..." },
      { time: 21, text: "[ ACADEMY AWARD WINNING WAVE ACTIVE ]" }
    ]
  }
];

export const moods = [
  { id: "mood-1", title: "Cyberpunk Focus", glow: "#00f0ff", count: "124 Tracks", bgBlob: "rgba(0, 240, 255, 0.15)" },
  { id: "mood-2", title: "Quantum Chill", glow: "#39ff14", count: "89 Tracks", bgBlob: "rgba(57, 255, 20, 0.15)" },
  { id: "mood-3", title: "Nebula Hype", glow: "#ff007f", count: "150 Tracks", bgBlob: "rgba(255, 0, 127, 0.15)" },
  { id: "mood-4", title: "Solar Plexus", glow: "#ffaa00", count: "76 Tracks", bgBlob: "rgba(255, 170, 0, 0.15)" }
];

export const recentlyPlayed = [
  { id: "rp-1", title: "Quantum Drift", artist: "Aethera", cover: "QD", glow: "#00f0ff", playTime: "2 mins ago" },
  { id: "rp-2", title: "Sub-Zero Strobe", artist: "L U C I D", cover: "SZS", glow: "#39ff14", playTime: "1 hour ago" },
  { id: "rp-3", title: "Neon Horizon", artist: "Kaelen-X", cover: "NH", glow: "#ff007f", playTime: "4 hours ago" }
];

export const chatComments = [
  { user: "Listener_7782", avatar: "A1", text: "That quantum synth glide is hitting peak resonance!", time: "12s ago" },
  { user: "Nebula_Rider", avatar: "A2", text: "Sub-Zero Strobe always triggers my cryo-sleep vibes.", time: "45s ago" },
  { user: "Cyber_Scribe", avatar: "A3", text: "Aethera's algorithmic chords are extremely well tuned.", time: "1m ago" },
  { user: "Synth_Lord_9", avatar: "A4", text: "Plasma rain filter sweep is industrial genius.", time: "2m ago" }
];

export const artistSpotlight = {
  name: "Aethera",
  subtitle: "Quantum AI Sound Architect",
  bio: "Aethera is a next-generation neural entity designed to translate cosmological radio-wave frequencies and solar wind vectors into immersive synthwave environments. Powered by the Antigravity Engine, Aethera crafts modular, evolving digital soundscapes optimized for cognitive synchronization and cybernetic flow.",
  stats: {
    listeners: "5.8M Monthly",
    neuralSync: "99.2% Average Sync",
    albums: "12 Cosmic EP's"
  },
  popularTracks: [
    { title: "Quantum Drift", plays: "4.8M" },
    { title: "Chrono Shift", plays: "5.1M" },
    { title: "Nebula Pulse", plays: "2.3M" }
  ]
};

export const featuredReleases = [
  {
    id: "feat-1",
    title: "Chronos Gateways",
    artist: "Aethera x Kaelen-X",
    description: "An experimental neural sync album generated at the intersection of temporal distortion theories and heavy outrun rhythms. Experience layered depth effects inside these sonic gateways.",
    stats: "Released: 2026.05 | Tracks: 12 | Format: Quantum WAV",
    tags: ["Time Dilation", "Outrun Synth", "AI Synced"]
  }
];

export const subscriptionTiers = [
  {
    id: "sub-1",
    name: "Neural Streamer",
    price: "8 Qubits",
    period: "month",
    description: "Synchronize your audio nodes with standard high-fidelity compression networks.",
    features: [
      "Lossless Synthesizer Output",
      "Full access to 16 platform modules",
      "Active real-time audio visualizer"
    ],
    popular: false,
    glow: "rgba(255, 255, 255, 0.1)"
  },
  {
    id: "sub-2",
    name: "Infinity Pass",
    price: "24 Qubits",
    period: "month",
    description: "The premium absolute pass. Direct holographic grid connection with spatial LFO modulations.",
    features: [
      "Procedural Ambient Synth Control",
      "Custom Visualizer Engine presets",
      "Priority Live Cyber-Sphere seating",
      "Exclusive Alpha tracks by Aethera",
      "100% Ad-Free Neural Streaming"
    ],
    popular: true,
    glow: "rgba(0, 240, 255, 0.4)"
  },
  {
    id: "sub-3",
    name: "Nebula Omnipotent",
    price: "64 Qubits",
    period: "annual",
    description: "Ultimate cybernetic resonance. Permanently link your avatar to the sound core matrix.",
    features: [
      "All Infinity Pass features",
      "Personalized synth parameters generator",
      "Holographic golden custom avatar",
      "Developer API Access to Web Audio API nodes"
    ],
    popular: false,
    glow: "rgba(255, 0, 127, 0.4)"
  }
];
