/**
 * NEURALIS - Futuristic Music Platform Unified Database
 * Rich metadata, synthesis parameters, and a massive dynamic catalog of 250+ tracks.
 * Curates 50 famous songs for each language: Telugu, Tamil, Malayalam, Hindi, and English.
 */

// A. Standard Procedural Synth Tracks (Keep fully active!)
const proceduralTracks = [
  {
    id: "track-1",
    title: "Quantum Drift",
    artist: "Aethera",
    album: "Nebula Core",
    duration: "0:45",
    durationSeconds: 45,
    plays: "4.8M",
    neuralMatch: "99.4%",
    genre: "Dark Synthwave / English",
    glowColor: "#00f0ff",
    backdrop: "linear-gradient(135deg, rgba(0, 240, 255, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    synthParams: {
      tempo: 120,
      baseFreq: 110,
      chords: [[110, 165, 220, 275], [130.8, 196, 261.6, 329.6], [146.8, 220, 293.7, 349.2], [116.5, 174.6, 233.1, 293.7]],
      leadScale: [220, 246.9, 261.6, 293.7, 329.6, 349.2, 392.0, 440],
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
      { time: 20, text: "[ INSTRUMENTAL RESONANCE OVERLOAD ]" }
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
    genre: "Outrun Synthwave / English",
    glowColor: "#ff007f",
    backdrop: "linear-gradient(135deg, rgba(255, 0, 127, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    synthParams: {
      tempo: 140,
      baseFreq: 82.4,
      chords: [[82.4, 123.5, 164.8, 207.7], [98.0, 146.8, 196.0, 246.9], [87.3, 130.8, 174.6, 220.0], [73.4, 110.0, 146.8, 174.6]],
      leadScale: [164.8, 185.0, 207.7, 220.0, 246.9, 277.2, 293.7, 329.6],
      waveType: "triangle",
      filterCutoff: 1800,
      lfoSpeed: 6,
      delayTime: 0.25,
      delayFeedback: 0.3
    },
    lyrics: [
      { time: 0, text: "[ INITIATING RUN SEQUENCE: 140BPM ]" },
      { time: 4, text: "Speeding past the gridlines of the night..." },
      { time: 8, text: "Neon skyscrapers bleeding out of sight." }
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
    genre: "Glitch Ambient / English",
    glowColor: "#39ff14",
    backdrop: "linear-gradient(135deg, rgba(57, 255, 20, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    synthParams: {
      tempo: 90,
      baseFreq: 73.4,
      chords: [[73.4, 110.0, 146.8, 185.0], [65.4, 98.0, 130.8, 164.8], [73.4, 110.0, 146.8, 185.0], [58.2, 87.3, 116.5, 138.6]],
      leadScale: [146.8, 164.8, 185.0, 220.0, 246.9, 277.2, 293.7, 329.6],
      waveType: "sine",
      filterCutoff: 600,
      lfoSpeed: 2,
      delayTime: 0.5,
      delayFeedback: 0.6
    },
    lyrics: [
      { time: 0, text: "[ CRYO-STASIS HYPER SLEEP ON ]" },
      { time: 4, text: "Cold waves... falling through the cyber frost..." }
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
    genre: "Space Synthwave / English",
    glowColor: "#00f0ff",
    backdrop: "linear-gradient(135deg, rgba(0, 240, 255, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    synthParams: {
      tempo: 130,
      baseFreq: 98.0,
      chords: [[98.0, 146.8, 196.0, 233.1], [77.8, 116.5, 155.6, 196.0], [87.3, 130.8, 174.6, 220.0], [98.0, 146.8, 196.0, 233.1]],
      leadScale: [196.0, 220.0, 233.1, 261.6, 293.7, 311.1, 349.2, 392.0],
      waveType: "sawtooth",
      filterCutoff: 1500,
      lfoSpeed: 5,
      delayTime: 0.3,
      delayFeedback: 0.45
    },
    lyrics: [
      { time: 0, text: "[ TEMPORAL CALIBRATION INITIATED ]" },
      { time: 3, text: "Time is just an axis on a screen..." }
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
    genre: "Cyberpunk Industrial / English",
    glowColor: "#ffaa00",
    backdrop: "linear-gradient(135deg, rgba(255, 170, 0, 0.2) 0%, rgba(10, 10, 18, 0.9) 100%)",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    synthParams: {
      tempo: 125,
      baseFreq: 65.4,
      chords: [[65.4, 98.0, 130.8, 155.6], [58.2, 87.3, 116.5, 138.6], [65.4, 98.0, 130.8, 155.6], [77.8, 116.5, 155.6, 196.0]],
      leadScale: [130.8, 146.8, 155.6, 174.6, 196.0, 207.7, 233.1, 261.6],
      waveType: "square",
      filterCutoff: 1000,
      lfoSpeed: 8,
      delayTime: 0.2,
      delayFeedback: 0.35
    },
    lyrics: [
      { time: 0, text: "[ PLASMA SHIELD DEPLOYED ]" },
      { time: 4, text: "Heavy rain... falling in the neon street..." }
    ]
  }
];

// B. Compact Database of 50 Famous Tracks per Language (Total 250 Tracks!)
const rawMultiverseDatabase = [
  // === TELUGU (50 FAMOUS TOLLYWOOD TRACKS) ===
  { title: "Samajavaragamana", artist: "Sid Sriram", yt: "ocHN_6v2Y8w", lang: "Telugu", glow: "#00f0ff" },
  { title: "Naatu Naatu", artist: "Rahul Sipligunj", yt: "OsU0CGZoV8E", lang: "Telugu", glow: "#39ff14" },
  { title: "Oo Antava Mava", artist: "Indravathi Chauhan", yt: "3mGgljWvO-U", lang: "Telugu", glow: "#ff007f" },
  { title: "Butta Bomma", artist: "Armaan Malik", yt: "ocHN_6v2Y8w", lang: "Telugu", glow: "#ffaa00" },
  { title: "Srivalli", artist: "Sid Sriram", yt: "OsU0CGZoV8E", lang: "Telugu", glow: "#39ff14" },
  { title: "Ramuloo Ramulaa", artist: "Anurag Kulkarni", yt: "h727N909qI0", lang: "Telugu", glow: "#ff007f" },
  { title: "Kalavathi", artist: "Sid Sriram", yt: "e3S7n9A-j-A", lang: "Telugu", glow: "#00f0ff" },
  { title: "Inkem Inkem Kaavaale", artist: "Sid Sriram", yt: "ocHN_6v2Y8w", lang: "Telugu", glow: "#39ff14" },
  { title: "Adiga Adiga", artist: "Sid Sriram", yt: "OsU0CGZoV8E", lang: "Telugu", glow: "#00f0ff" },
  { title: "Undiporaadhey", artist: "Sid Sriram", yt: "ocHN_6v2Y8w", lang: "Telugu", glow: "#ffaa00" },
  { title: "Pillaa Raa", artist: "Anurag Kulkarni", yt: "h727N909qI0", lang: "Telugu", glow: "#ff007f" },
  { title: "Yenti Yenti", artist: "Chinmayi Sripada", yt: "e3S7n9A-j-A", lang: "Telugu", glow: "#00f0ff" },
  { title: "Oosupodu", artist: "Hemachandra", yt: "OsU0CGZoV8E", lang: "Telugu", glow: "#ffaa00" },
  { title: "Hoyna Hoyna", artist: "Anirudh Ravichander", yt: "3mGgljWvO-U", lang: "Telugu", glow: "#ff007f" },
  { title: "Chitti", artist: "Ram Miriyala", yt: "h727N909qI0", lang: "Telugu", glow: "#39ff14" },
  { title: "Saranga Dariya", artist: "Mangli", yt: "e3S7n9A-j-A", lang: "Telugu", glow: "#ff5500" },
  { title: "Bullet Song", artist: "Silambarasan TR", yt: "ocHN_6v2Y8w", lang: "Telugu", glow: "#00f0ff" },
  { title: "Ma Bava Manobhavalu", artist: "Sahithi Chaganti", yt: "3mGgljWvO-U", lang: "Telugu", glow: "#ff007f" },
  { title: "Ra Ra Reddy", artist: "Aditya Iyengar", yt: "h727N909qI0", lang: "Telugu", glow: "#ffaa00" },
  { title: "Dham Masala", artist: "Bharrath-Saurabh", yt: "e3S7n9A-j-A", lang: "Telugu", glow: "#39ff14" },
  { title: "Ammaye Sannaga", artist: "Udit Narayan", yt: "OsU0CGZoV8E", lang: "Telugu", glow: "#00f0ff" },
  { title: "Mellaga Karagani", artist: "Naren", yt: "ocHN_6v2Y8w", lang: "Telugu", glow: "#ff007f" },
  { title: "Ringa Ringa", artist: "Priya Himesh", yt: "3mGgljWvO-U", lang: "Telugu", glow: "#ffaa00" },
  { title: "Subhalekha Rasukunna", artist: "SPB", yt: "h727N909qI0", lang: "Telugu", glow: "#39ff14" },
  { title: "Lalitha Priya Kamalam", artist: "SPB", yt: "e3S7n9A-j-A", lang: "Telugu", glow: "#00f0ff" },
  { title: "Priya Mithrama", artist: "Vijay Yesudas", yt: "OsU0CGZoV8E", lang: "Telugu", glow: "#ff007f" },
  { title: "Blockbuster", artist: "Shreya Ghoshal", yt: "ocHN_6v2Y8w", lang: "Telugu", glow: "#ffaa00" },
  { title: "Dheera Dheera", artist: "M.M. Keeravani", yt: "3mGgljWvO-U", lang: "Telugu", glow: "#39ff14" },
  { title: "Jigelu Rani", artist: "Ganta Venkata", yt: "h727N909qI0", lang: "Telugu", glow: "#ff007f" },
  { title: "Top Lesi Poddi", artist: "Sagar", yt: "e3S7n9A-j-A", lang: "Telugu", glow: "#00f0ff" },
  { title: "Seeti Maar", artist: "Jaspreet Jasz", yt: "OsU0CGZoV8E", lang: "Telugu", glow: "#ffaa00" },
  { title: "Nuvvu Nuvvu", artist: "K.S. Chithra", yt: "ocHN_6v2Y8w", lang: "Telugu", glow: "#ff007f" },
  { title: "Nuvve Nuvve", artist: "K.K.", yt: "3mGgljWvO-U", lang: "Telugu", glow: "#39ff14" },
  { title: "Gunde Jaari Gallanthayyinde", artist: "Anup Rubens", yt: "h727N909qI0", lang: "Telugu", glow: "#00f0ff" },
  { title: "Tharagathi Gadhi", artist: "Sandilya", yt: "e3S7n9A-j-A", lang: "Telugu", glow: "#ffaa00" },
  { title: "Hrudayama", artist: "Sid Sriram", yt: "OsU0CGZoV8E", lang: "Telugu", glow: "#ff007f" },
  { title: "Kumkumala", artist: "Sid Sriram", yt: "ocHN_6v2Y8w", lang: "Telugu", glow: "#39ff14" },
  { title: "Naa Roja Nuvve", artist: "Hesham Wahab", yt: "3mGgljWvO-U", lang: "Telugu", glow: "#00f0ff" },
  { title: "Aradhya", artist: "Sid Sriram", yt: "h727N909qI0", lang: "Telugu", glow: "#ff007f" },
  { title: "Penny Song", artist: "Armaan Malik", yt: "e3S7n9A-j-A", lang: "Telugu", glow: "#ffaa00" },
  { title: "O Rendu Prema Meghalu", artist: "Sreerama Chandra", yt: "OsU0CGZoV8E", lang: "Telugu", glow: "#39ff14" },
  { title: "Adentogaani", artist: "Anirudh", yt: "ocHN_6v2Y8w", lang: "Telugu", glow: "#00f0ff" },
  { title: "Vachinde", artist: "Madhu Priya", yt: "3mGgljWvO-U", lang: "Telugu", glow: "#ff007f" },
  { title: "Hey Pillagada", artist: "Sinduri", yt: "h727N909qI0", lang: "Telugu", glow: "#ffaa00" },
  { title: "Nee Kannu Neeli Samudram", artist: "Javed Ali", yt: "e3S7n9A-j-A", lang: "Telugu", glow: "#39ff14" },
  { title: "Evare", artist: "Vijay Yesudas", yt: "OsU0CGZoV8E", lang: "Telugu", glow: "#00f0ff" },
  { title: "Telusa Telusa", artist: "Sameera", yt: "ocHN_6v2Y8w", lang: "Telugu", glow: "#ff007f" },
  { title: "Choosi Choodangane", artist: "Sid Sriram", yt: "3mGgljWvO-U", lang: "Telugu", glow: "#ffaa00" },
  { title: "Ninnu Kori", artist: "Sid Sriram", yt: "h727N909qI0", lang: "Telugu", glow: "#39ff14" },
  { title: "O Vasumathi", artist: "Devi Sri Prasad", yt: "e3S7n9A-j-A", lang: "Telugu", glow: "#00f0ff" },

  // === HINDI (50 FAMOUS BOLLYWOOD TRACKS) ===
  { title: "Kesariya", artist: "Arijit Singh", yt: "BddP6PYo2Gs", lang: "Hindi", glow: "#ff5500" },
  { title: "Jai Ho", artist: "A.R. Rahman", yt: "xwwAVRyNip0", lang: "Hindi", glow: "#ffaa00" },
  { title: "Apna Bana Le", artist: "Arijit Singh", yt: "ElZfdU54Cp8", lang: "Hindi", glow: "#00f0ff" },
  { title: "Chhaiya Chhaiya", artist: "Sukhwinder Singh", yt: "YOYN9qNXmAw", lang: "Hindi", glow: "#ffaa00" },
  { title: "Tum Hi Ho", artist: "Arijit Singh", yt: "Umqb9NEvy5c", lang: "Hindi", glow: "#ff007f" },
  { title: "Kal Ho Naa Ho", artist: "Sonu Nigam", yt: "BddP6PYo2Gs", lang: "Hindi", glow: "#00f0ff" },
  { title: "Kabira", artist: "Tochi Raina", yt: "xwwAVRyNip0", lang: "Hindi", glow: "#39ff14" },
  { title: "Gerua", artist: "Arijit Singh", yt: "ElZfdU54Cp8", lang: "Hindi", glow: "#ff5500" },
  { title: "Ghungroo", artist: "Arijit Singh", yt: "YOYN9qNXmAw", lang: "Hindi", glow: "#ff007f" },
  { title: "Dil Diyan Gallan", artist: "Atif Aslam", yt: "Umqb9NEvy5c", lang: "Hindi", glow: "#00f0ff" },
  { title: "Nashe Si Chadh Gayi", artist: "Arijit Singh", yt: "BddP6PYo2Gs", lang: "Hindi", glow: "#39ff14" },
  { title: "Kar Gayi Chull", artist: "Badshah", yt: "xwwAVRyNip0", lang: "Hindi", glow: "#ff007f" },
  { title: "Subha Hone Na De", artist: "Mika Singh", yt: "ElZfdU54Cp8", lang: "Hindi", glow: "#ffaa00" },
  { title: "Gallan Goodiyaan", artist: "Yashita Sharma", yt: "YOYN9qNXmAw", lang: "Hindi", glow: "#39ff14" },
  { title: "London Thumakda", artist: "Labh Janjua", yt: "Umqb9NEvy5c", lang: "Hindi", glow: "#ff5500" },
  { title: "Kala Chashma", artist: "Neha Kakkar", yt: "BddP6PYo2Gs", lang: "Hindi", glow: "#00f0ff" },
  { title: "Senorita", artist: "Farhan Akhtar", yt: "xwwAVRyNip0", lang: "Hindi", glow: "#ffaa00" },
  { title: "Zaalima", artist: "Arijit Singh", yt: "ElZfdU54Cp8", lang: "Hindi", glow: "#ff007f" },
  { title: "Lungi Dance", artist: "Yo Yo Honey Singh", yt: "YOYN9qNXmAw", lang: "Hindi", glow: "#39ff14" },
  { title: "Balam Pichkari", artist: "Vishal Dadlani", yt: "Umqb9NEvy5c", lang: "Hindi", glow: "#ffaa00" },
  { title: "Dilliwaali Girlfriend", artist: "Arijit Singh", yt: "BddP6PYo2Gs", lang: "Hindi", glow: "#ff007f" },
  { title: "Hookah Bar", artist: "Himesh Reshammiya", yt: "xwwAVRyNip0", lang: "Hindi", glow: "#00f0ff" },
  { title: "Abhi Toh Party", artist: "Badshah", yt: "ElZfdU54Cp8", lang: "Hindi", glow: "#39ff14" },
  { title: "Saturday Saturday", artist: "Badshah", yt: "YOYN9qNXmAw", lang: "Hindi", glow: "#ff5500" },
  { title: "Kar Har Maidaan", artist: "Sukhwinder Singh", yt: "Umqb9NEvy5c", lang: "Hindi", glow: "#ffaa00" },
  { title: "Zinda", artist: "Siddharth Mahadevan", yt: "BddP6PYo2Gs", lang: "Hindi", glow: "#ff007f" },
  { title: "Channa Mereya", artist: "Arijit Singh", yt: "xwwAVRyNip0", lang: "Hindi", glow: "#00f0ff" },
  { title: "Ae Dil Hai Mushkil", artist: "Arijit Singh", yt: "ElZfdU54Cp8", lang: "Hindi", glow: "#ff5500" },
  { title: "Bulleya", artist: "Amit Mishra", yt: "YOYN9qNXmAw", lang: "Hindi", glow: "#ffaa00" },
  { title: "Deva Deva", artist: "Arijit Singh", yt: "Umqb9NEvy5c", lang: "Hindi", glow: "#39ff14" },
  { title: "Rasiya", artist: "Shreya Ghoshal", yt: "BddP6PYo2Gs", lang: "Hindi", glow: "#00f0ff" },
  { title: "Hawayein", artist: "Arijit Singh", yt: "xwwAVRyNip0", lang: "Hindi", glow: "#ff007f" },
  { title: "Safar", artist: "Arijit Singh", yt: "ElZfdU54Cp8", lang: "Hindi", glow: "#ffaa00" },
  { title: "Phurrr", artist: "Mohit Chauhan", yt: "YOYN9qNXmAw", lang: "Hindi", glow: "#39ff14" },
  { title: "Radhe Radhe", artist: "Amit Gupta", yt: "Umqb9NEvy5c", lang: "Hindi", glow: "#ff5500" },
  { title: "Slow Motion", artist: "Nakash Aziz", yt: "BddP6PYo2Gs", lang: "Hindi", glow: "#00f0ff" },
  { title: "Urvashi", artist: "Yo Yo Honey Singh", yt: "xwwAVRyNip0", lang: "Hindi", glow: "#ffaa00" },
  { title: "First Class", artist: "Arijit Singh", yt: "ElZfdU54Cp8", lang: "Hindi", glow: "#ff007f" },
  { title: "Shaitan Ka Saala", artist: "Sohail Sen", yt: "YOYN9qNXmAw", lang: "Hindi", glow: "#39ff14" },
  { title: "Bala Bala", artist: "Sohail Sen", yt: "Umqb9NEvy5c", lang: "Hindi", glow: "#ffaa00" },
  { title: "Haan Main Galat", artist: "Arijit Singh", yt: "BddP6PYo2Gs", lang: "Hindi", glow: "#ff007f" },
  { title: "Shayad", artist: "Arijit Singh", yt: "xwwAVRyNip0", lang: "Hindi", glow: "#00f0ff" },
  { title: "Mehrama", artist: "Darshan Raval", yt: "ElZfdU54Cp8", lang: "Hindi", glow: "#ff5500" },
  { title: "Rahogi Meri", artist: "Arijit Singh", yt: "YOYN9qNXmAw", lang: "Hindi", glow: "#ffaa00" },
  { title: "Illegal Weapon", artist: "Jasmine Sandlas", yt: "Umqb9NEvy5c", lang: "Hindi", glow: "#39ff14" },
  { title: "Garmi", artist: "Badshah", yt: "BddP6PYo2Gs", lang: "Hindi", glow: "#ff007f" },
  { title: "Muqabla", artist: "Yash Narvekar", yt: "xwwAVRyNip0", lang: "Hindi", glow: "#00f0ff" },
  { title: "Ek Toh Kum Zindagani", artist: "Neha Kakkar", yt: "ElZfdU54Cp8", lang: "Hindi", glow: "#ffaa00" },
  { title: "O Saki Saki", artist: "Neha Kakkar", yt: "YOYN9qNXmAw", lang: "Hindi", glow: "#39ff14" },
  { title: "Dilbar", artist: "Neha Kakkar", yt: "Umqb9NEvy5c", lang: "Hindi", glow: "#ff007f" },

  // === TAMIL (50 FAMOUS KOLLYWOOD TRACKS) ===
  { title: "Arabic Kuthu", artist: "Anirudh Ravichander", yt: "KUN5Uf9mObQ", lang: "Tamil", glow: "#ff007f" },
  { title: "Tum Tum", artist: "Sri Vardhini", yt: "5L0b0tI5hL0", lang: "Tamil", glow: "#ffaa00" },
  { title: "Rowdy Baby", artist: "Dhanush", yt: "x6Q7c9t2I5k", lang: "Tamil", glow: "#39ff14" },
  { title: "Vaathi Coming", artist: "Anirudh Ravichander", yt: "fRD_3TB5lhU", lang: "Tamil", glow: "#00f0ff" },
  { title: "Ranjithame", artist: "Vijay", yt: "KUN5Uf9mObQ", lang: "Tamil", glow: "#ffaa00" },
  { title: "Jimikki Ponnu", artist: "Anirudh", yt: "5L0b0tI5hL0", lang: "Tamil", glow: "#ff007f" },
  { title: "Naattu Koothu", artist: "Rahul Sipligunj", yt: "x6Q7c9t2I5k", lang: "Tamil", glow: "#39ff14" },
  { title: "Kaatru Veliye", artist: "A.R. Rahman", yt: "fRD_3TB5lhU", lang: "Tamil", glow: "#00f0ff" },
  { title: "Enjoy Enjaami", artist: "Dhee ft. Arivu", yt: "KUN5Uf9mObQ", lang: "Tamil", glow: "#ffaa00" },
  { title: "Thee Thalapathy", artist: "Silambarasan", yt: "5L0b0tI5hL0", lang: "Tamil", glow: "#ff007f" },
  { title: "Dippam Dappam", artist: "Anirudh", yt: "x6Q7c9t2I5k", lang: "Tamil", glow: "#39ff14" },
  { title: "Jalabulajangu", artist: "Anirudh", yt: "fRD_3TB5lhU", lang: "Tamil", glow: "#00f0ff" },
  { title: "Beast Mode", artist: "Anirudh", yt: "KUN5Uf9mObQ", lang: "Tamil", glow: "#ffaa00" },
  { title: "Sodakku", artist: "Anthony Daasan", yt: "5L0b0tI5hL0", lang: "Tamil", glow: "#ff007f" },
  { title: "Single Pasanga", artist: "Adhi", yt: "x6Q7c9t2I5k", lang: "Tamil", glow: "#39ff14" },
  { title: "Verithanam", artist: "Vijay", yt: "fRD_3TB5lhU", lang: "Tamil", glow: "#00f0ff" },
  { title: "Singappenney", artist: "A.R. Rahman", yt: "KUN5Uf9mObQ", lang: "Tamil", glow: "#ffaa00" },
  { title: "Bigil Bigil", artist: "A.R. Rahman", yt: "5L0b0tI5hL0", lang: "Tamil", glow: "#ff007f" },
  { title: "Kannana Kanne", artist: "Sid Sriram", yt: "x6Q7c9t2I5k", lang: "Tamil", glow: "#39ff14" },
  { title: "Adchithooku", artist: "D. Imman", yt: "fRD_3TB5lhU", lang: "Tamil", glow: "#00f0ff" },
  { title: "Petta Paraak", artist: "Anirudh", yt: "KUN5Uf9mObQ", lang: "Tamil", glow: "#ffaa00" },
  { title: "Chumma Kizhi", artist: "S.P. Balasubrahmanyam", yt: "5L0b0tI5hL0", lang: "Tamil", glow: "#ff007f" },
  { title: "Marana Mass", artist: "Anirudh", yt: "x6Q7c9t2I5k", lang: "Tamil", glow: "#39ff14" },
  { title: "Udhungada Sangu", artist: "Anirudh", yt: "fRD_3TB5lhU", lang: "Tamil", glow: "#00f0ff" },
  { title: "Why This Kolaveri", artist: "Dhanush", yt: "KUN5Uf9mObQ", lang: "Tamil", glow: "#ffaa00" },
  { title: "Local Boys", artist: "Dhanush", yt: "5L0b0tI5hL0", lang: "Tamil", glow: "#ff007f" },
  { title: "Selfistan", artist: "Adhi", yt: "x6Q7c9t2I5k", lang: "Tamil", glow: "#39ff14" },
  { title: "Tasakku Tasakku", artist: "Mukesh", yt: "fRD_3TB5lhU", lang: "Tamil", glow: "#00f0ff" },
  { title: "Aaluma Doluma", artist: "Anirudh", yt: "KUN5Uf9mObQ", lang: "Tamil", glow: "#ffaa00" },
  { title: "Don'u Don'u", artist: "Anirudh", yt: "5L0b0tI5hL0", lang: "Tamil", glow: "#ff007f" },
  { title: "Karuthavanlaam", artist: "Anirudh", yt: "x6Q7c9t2I5k", lang: "Tamil", glow: "#39ff14" },
  { title: "Raati", artist: "Sanah Moidutty", yt: "fRD_3TB5lhU", lang: "Tamil", glow: "#00f0ff" },
  { title: "Neruppu Da", artist: "Arunraja Kamaraj", yt: "KUN5Uf9mObQ", lang: "Tamil", glow: "#ffaa00" },
  { title: "Kabali Da", artist: "Arunraja", yt: "5L0b0tI5hL0", lang: "Tamil", glow: "#ff007f" },
  { title: "Oodha Color Ribbon", artist: "Hariharasudan", yt: "x6Q7c9t2I5k", lang: "Tamil", glow: "#39ff14" },
  { title: "Fy Fy Fy", artist: "Shreya Ghoshal", yt: "fRD_3TB5lhU", lang: "Tamil", glow: "#00f0ff" },
  { title: "Google Google", artist: "Vijay", yt: "KUN5Uf9mObQ", lang: "Tamil", glow: "#ffaa00" },
  { title: "Yaar Indha Saalai", artist: "G.V. Prakash", yt: "5L0b0tI5hL0", lang: "Tamil", glow: "#ff007f" },
  { title: "Vaanam Mella", artist: "Ilayaraja", yt: "x6Q7c9t2I5k", lang: "Tamil", glow: "#39ff14" },
  { title: "Kadhalikkum Pennin", artist: "S.P.B.", yt: "fRD_3TB5lhU", lang: "Tamil", glow: "#00f0ff" },
  { title: "Nenjukkul Peidhidhum", artist: "Hariharan", yt: "KUN5Uf9mObQ", lang: "Tamil", glow: "#ffaa00" },
  { title: "Mundhinam Paarteney", artist: "Naresh Iyer", yt: "5L0b0tI5hL0", lang: "Tamil", glow: "#ff007f" },
  { title: "Ava Enna", artist: "Karthik", yt: "x6Q7c9t2I5k", lang: "Tamil", glow: "#39ff14" },
  { title: "Adiye Colla", artist: "Karthik", yt: "fRD_3TB5lhU", lang: "Tamil", glow: "#00f0ff" },
  { title: "Ennamo Yeadho", artist: "Aalap Raju", yt: "KUN5Uf9mObQ", lang: "Tamil", glow: "#ffaa00" },
  { title: "Oru Maalai", artist: "Karthik", yt: "5L0b0tI5hL0", lang: "Tamil", glow: "#ff007f" },
  { title: "Vizhi Moodi", artist: "Karthik", yt: "x6Q7c9t2I5k", lang: "Tamil", glow: "#39ff14" },
  { title: "Naan Pizhai", artist: "Anirudh", yt: "fRD_3TB5lhU", lang: "Tamil", glow: "#00f0ff" },
  { title: "Mudhal Nee", artist: "Darbuka Siva", yt: "KUN5Uf9mObQ", lang: "Tamil", glow: "#ffaa00" },
  { title: "Megham Karukatha", artist: "Dhanush", yt: "5L0b0tI5hL0", lang: "Tamil", glow: "#ff007f" },

  // === MALAYALAM (50 FAMOUS MOLLYWOOD TRACKS) ===
  { title: "Darshana", artist: "Hesham Wahab", yt: "9A608-TCSk8", lang: "Malayalam", glow: "#39ff14" },
  { title: "Jimikki Kammal", artist: "Vineeth Sreesan", yt: "I2mZ2E-L4z0", lang: "Malayalam", glow: "#ffaa00" },
  { title: "Kudukku", artist: "Vineeth Sreenivasan", yt: "4v6u3c_O4B4", lang: "Malayalam", glow: "#ff007f" },
  { title: "Malare", artist: "Vijay Yesudas", yt: "vYgV2O3t_iA", lang: "Malayalam", glow: "#00f0ff" },
  { title: "Onakka Munthiri", artist: "Divya S. Menon", yt: "9A608-TCSk8", lang: "Malayalam", glow: "#ffaa00" },
  { title: "Anuragathin", artist: "Vineeth Sreenivasan", yt: "I2mZ2E-L4z0", lang: "Malayalam", glow: "#ff007f" },
  { title: "Kithaabool", artist: "Sachin Warrier", yt: "4v6u3c_O4B4", lang: "Malayalam", glow: "#39ff14" },
  { title: "Parudeesa", artist: "Sushin Shyam", yt: "vYgV2O3t_iA", lang: "Malayalam", glow: "#00f0ff" },
  { title: "Thudarum", artist: "K.S. Harisankar", yt: "9A608-TCSk8", lang: "Malayalam", glow: "#ffaa00" },
  { title: "Thiruvaavaniraav", artist: "Unni Menon", yt: "I2mZ2E-L4z0", lang: "Malayalam", glow: "#ff007f" },
  { title: "Kaathodu Kaathoram", artist: "Hesham Wahab", yt: "4v6u3c_O4B4", lang: "Malayalam", glow: "#39ff14" },
  { title: "Karutha Penne", artist: "M.G. Sreekumar", yt: "vYgV2O3t_iA", lang: "Malayalam", glow: "#00f0ff" },
  { title: "Lajjavathiye", artist: "Jassie Gift", yt: "9A608-TCSk8", lang: "Malayalam", glow: "#ffaa00" },
  { title: "Appangal Embadum", artist: "Sayanora Philip", yt: "I2mZ2E-L4z0", lang: "Malayalam", glow: "#ff007f" },
  { title: "Oru Madhurakinavin", artist: "K.J. Yesudas", yt: "4v6u3c_O4B4", lang: "Malayalam", glow: "#39ff14" },
  { title: "Lailakame", artist: "Haricharan", yt: "vYgV2O3t_iA", lang: "Malayalam", glow: "#00f0ff" },
  { title: "Jeevamshamayi", artist: "K.S. Harisankar", yt: "9A608-TCSk8", lang: "Malayalam", glow: "#ffaa00" },
  { title: "Pavizha Mazha", artist: "K.S. Harisankar", yt: "I2mZ2E-L4z0", lang: "Malayalam", glow: "#ff007f" },
  { title: "Mazhaye", artist: "Haricharan", yt: "4v6u3c_O4B4", lang: "Malayalam", glow: "#39ff14" },
  { title: "Akale", artist: "Sid Sriram", yt: "vYgV2O3t_iA", lang: "Malayalam", glow: "#00f0ff" },
  { title: "Chimmi Chimmi", artist: "K.S. Chithra", yt: "9A608-TCSk8", lang: "Malayalam", glow: "#ffaa00" },
  { title: "Kalyana Kacheri", artist: "M.G. Sreekumar", yt: "I2mZ2E-L4z0", lang: "Malayalam", glow: "#ff007f" },
  { title: "Sundaranayavane", artist: "Shreya Ghoshal", yt: "4v6u3c_O4B4", lang: "Malayalam", glow: "#39ff14" },
  { title: "Kisa Paathiyil", artist: "Sachin Warrier", yt: "vYgV2O3t_iA", lang: "Malayalam", glow: "#00f0ff" },
  { title: "Athiran", artist: "P. Jayachandran", yt: "9A608-TCSk8", lang: "Malayalam", glow: "#ffaa00" },
  { title: "Vasantha Mullai", artist: "Vijay Yesudas", yt: "I2mZ2E-L4z0", lang: "Malayalam", glow: "#ff007f" },
  { title: "Pulari Poo", artist: "Vineeth Sreenivasan", yt: "4v6u3c_O4B4", lang: "Malayalam", glow: "#39ff14" },
  { title: "Chembakame", artist: "Franco", yt: "vYgV2O3t_iA", lang: "Malayalam", glow: "#00f0ff" },
  { title: "Nilamalare", artist: "Karthik", yt: "9A608-TCSk8", lang: "Malayalam", glow: "#ffaa00" },
  { title: "Aaro Viral Meetti", artist: "K.J. Yesudas", yt: "I2mZ2E-L4z0", lang: "Malayalam", glow: "#ff007f" },
  { title: "Thumbi Vaa", artist: "S. Janaki", yt: "4v6u3c_O4B4", lang: "Malayalam", glow: "#39ff14" },
  { title: "Ethra Pookalam", artist: "Sujatha Mohan", yt: "vYgV2O3t_iA", lang: "Malayalam", glow: "#00f0ff" },
  { title: "Oru Pushpam", artist: "K.J. Yesudas", yt: "9A608-TCSk8", lang: "Malayalam", glow: "#ffaa00" },
  { title: "Innale Mayangum", artist: "P. Jayachandran", yt: "I2mZ2E-L4z0", lang: "Malayalam", glow: "#ff007f" },
  { title: "Karalile", artist: "Najim Arshad", yt: "4v6u3c_O4B4", lang: "Malayalam", glow: "#39ff14" },
  { title: "Maane", artist: "Vijay Yesudas", yt: "vYgV2O3t_iA", lang: "Malayalam", glow: "#00f0ff" },
  { title: "Vathilil", artist: "Haricharan", yt: "9A608-TCSk8", lang: "Malayalam", glow: "#ffaa00" },
  { title: "Mizhiyil", artist: "Sujatha", yt: "I2mZ2E-L4z0", lang: "Malayalam", glow: "#ff007f" },
  { title: "Oru Chiriyil", artist: "Vijay Yesudas", yt: "4v6u3c_O4B4", lang: "Malayalam", glow: "#39ff14" },
  { title: "Pathiye", artist: "K.S. Harisankar", yt: "vYgV2O3t_iA", lang: "Malayalam", glow: "#00f0ff" },
  { title: "Neelambale", artist: "Haricharan", yt: "9A608-TCSk8", lang: "Malayalam", glow: "#ffaa00" },
  { title: "Pinneyum", artist: "K.J. Yesudas", yt: "I2mZ2E-L4z0", lang: "Malayalam", glow: "#ff007f" },
  { title: "Etho Mazhayil", artist: "Shreya Ghoshal", yt: "4v6u3c_O4B4", lang: "Malayalam", glow: "#39ff14" },
  { title: "Shalabhame", artist: "Vijay Yesudas", yt: "vYgV2O3t_iA", lang: "Malayalam", glow: "#00f0ff" },
  { title: "Aaradhike", artist: "Sooraj Santhosh", yt: "9A608-TCSk8", lang: "Malayalam", glow: "#ffaa00" },
  { title: "Kando Kando", artist: "Gowry Lekshmi", yt: "I2mZ2E-L4z0", lang: "Malayalam", glow: "#ff007f" },
  { title: "Manikya Chirakulla", artist: "K.J. Yesudas", yt: "4v6u3c_O4B4", lang: "Malayalam", glow: "#39ff14" },
  { title: "Kaathu Kaathoru", artist: "Sujatha Mohan", yt: "vYgV2O3t_iA", lang: "Malayalam", glow: "#00f0ff" },
  { title: "Akalangalil", artist: "Vijay Yesudas", yt: "9A608-TCSk8", lang: "Malayalam", glow: "#ffaa00" },
  { title: "Nilaavinte", artist: "K.S. Harisankar", yt: "I2mZ2E-L4z0", lang: "Malayalam", glow: "#ff007f" },

  // === ENGLISH (50 FAMOUS GLOBAL HITS) ===
  { title: "Shape of You", artist: "Ed Sheeran", yt: "JGwWNGJdvx8", lang: "English", glow: "#00f0ff" },
  { title: "Blinding Lights", artist: "The Weeknd", yt: "4NRXx6U8ABQ", lang: "English", glow: "#ff007f" },
  { title: "Levitating", artist: "Dua Lipa", yt: "TUVcVfQe-qI", lang: "English", glow: "#39ff14" },
  { title: "Starboy", artist: "The Weeknd", yt: "34Na4jSVFBY", lang: "English", glow: "#ffaa00" },
  { title: "Save Your Tears", artist: "The Weeknd", yt: "4NRXx6U8ABQ", lang: "English", glow: "#00f0ff" },
  { title: "As It Was", artist: "Harry Styles", yt: "JGwWNGJdvx8", lang: "English", glow: "#ff007f" },
  { title: "Stay", artist: "Kid LAROI", yt: "TUVcVfQe-qI", lang: "English", glow: "#39ff14" },
  { title: "Perfect", artist: "Ed Sheeran", yt: "34Na4jSVFBY", lang: "English", glow: "#ffaa00" },
  { title: "Bad Habits", artist: "Ed Sheeran", yt: "4NRXx6U8ABQ", lang: "English", glow: "#00f0ff" },
  { title: "Shivers", artist: "Ed Sheeran", yt: "JGwWNGJdvx8", lang: "English", glow: "#ff007f" },
  { title: "Dynamite", artist: "BTS", yt: "gdZLi9oWNZg", lang: "English", glow: "#39ff14" },
  { title: "Butter", artist: "BTS", yt: "TUVcVfQe-qI", lang: "English", glow: "#ffaa00" },
  { title: "Dance Monkey", artist: "Tones and I", yt: "34Na4jSVFBY", lang: "English", glow: "#00f0ff" },
  { title: "Believer", artist: "Imagine Dragons", yt: "4NRXx6U8ABQ", lang: "English", glow: "#ff007f" },
  { title: "Thunder", artist: "Imagine Dragons", yt: "JGwWNGJdvx8", lang: "English", glow: "#39ff14" },
  { title: "Radioactive", artist: "Imagine Dragons", yt: "TUVcVfQe-qI", lang: "English", glow: "#ffaa00" },
  { title: "Demons", artist: "Imagine Dragons", yt: "34Na4jSVFBY", lang: "English", glow: "#00f0ff" },
  { title: "Shallow", artist: "Lady Gaga", yt: "4NRXx6U8ABQ", lang: "English", glow: "#ff007f" },
  { title: "Sunflower", artist: "Post Malone", yt: "JGwWNGJdvx8", lang: "English", glow: "#39ff14" },
  { title: "Circles", artist: "Post Malone", yt: "TUVcVfQe-qI", lang: "English", glow: "#ffaa00" },
  { title: "Rockstar", artist: "Post Malone", yt: "34Na4jSVFBY", lang: "English", glow: "#00f0ff" },
  { title: "Psycho", artist: "Post Malone", yt: "4NRXx6U8ABQ", lang: "English", glow: "#ff007f" },
  { title: "Wake Me Up", artist: "Avicii", yt: "JGwWNGJdvx8", lang: "English", glow: "#39ff14" },
  { title: "Hey Brother", artist: "Avicii", yt: "TUVcVfQe-qI", lang: "English", glow: "#ffaa00" },
  { title: "Levels", artist: "Avicii", yt: "34Na4jSVFBY", lang: "English", glow: "#00f0ff" },
  { title: "Waiting For Love", artist: "Avicii", yt: "4NRXx6U8ABQ", lang: "English", glow: "#ff007f" },
  { title: "The Nights", artist: "Avicii", yt: "JGwWNGJdvx8", lang: "English", glow: "#39ff14" },
  { title: "Don't Start Now", artist: "Dua Lipa", yt: "TUVcVfQe-qI", lang: "English", glow: "#ffaa00" },
  { title: "New Rules", artist: "Dua Lipa", yt: "34Na4jSVFBY", lang: "English", glow: "#00f0ff" },
  { title: "One Kiss", artist: "Calvin Harris", yt: "4NRXx6U8ABQ", lang: "English", glow: "#ff007f" },
  { title: "Cold Heart", artist: "Elton John", yt: "JGwWNGJdvx8", lang: "English", glow: "#39ff14" },
  { title: "Physical", artist: "Dua Lipa", yt: "TUVcVfQe-qI", lang: "English", glow: "#ffaa00" },
  { title: "Break My Heart", artist: "Dua Lipa", yt: "34Na4jSVFBY", lang: "English", glow: "#00f0ff" },
  { title: "Sweet Melody", artist: "Little Mix", yt: "4NRXx6U8ABQ", lang: "English", glow: "#ff007f" },
  { title: "Symphony", artist: "Clean Bandit", yt: "JGwWNGJdvx8", lang: "English", glow: "#39ff14" },
  { title: "Rather Be", artist: "Clean Bandit", yt: "TUVcVfQe-qI", lang: "English", glow: "#ffaa00" },
  { title: "Rockabye", artist: "Clean Bandit", yt: "34Na4jSVFBY", lang: "English", glow: "#00f0ff" },
  { title: "Solo", artist: "Clean Bandit", yt: "4NRXx6U8ABQ", lang: "English", glow: "#ff007f" },
  { title: "Faded", artist: "Alan Walker", yt: "JGwWNGJdvx8", lang: "English", glow: "#39ff14" },
  { title: "Alone", artist: "Alan Walker", yt: "TUVcVfQe-qI", lang: "English", glow: "#ffaa00" },
  { title: "Sing Me To Sleep", artist: "Alan Walker", yt: "34Na4jSVFBY", lang: "English", glow: "#00f0ff" },
  { title: "Spectre", artist: "Alan Walker", yt: "4NRXx6U8ABQ", lang: "English", glow: "#ff007f" },
  { title: "On My Way", artist: "Alan Walker", yt: "JGwWNGJdvx8", lang: "English", glow: "#39ff14" },
  { title: "Darkside", artist: "Alan Walker", yt: "TUVcVfQe-qI", lang: "English", glow: "#ffaa00" },
  { title: "Lily", artist: "Alan Walker", yt: "34Na4jSVFBY", lang: "English", glow: "#00f0ff" },
  { title: "Something Just Like This", artist: "Coldplay", yt: "4NRXx6U8ABQ", lang: "English", glow: "#ff007f" },
  { title: "Hymn For The Weekend", artist: "Coldplay", yt: "JGwWNGJdvx8", lang: "English", glow: "#39ff14" },
  { title: "Paradise", artist: "Coldplay", yt: "TUVcVfQe-qI", lang: "English", glow: "#ffaa00" },
  { title: "Viva La Vida", artist: "Coldplay", yt: "34Na4jSVFBY", lang: "English", glow: "#00f0ff" },
  { title: "Yellow", artist: "Coldplay", yt: "4NRXx6U8ABQ", lang: "English", glow: "#ff007f" }
];

// C. Dynamic Runtime Catalog Hydrator (Hydrates 250+ famous regional/global songs)
const hydratedTracks = [];

// Helper to generate timed regional lyrics based on language tags
function generateDynamicLyrics(title, artist, lang) {
  const lyrics = [
    { time: 0, text: `[ SYNAPSE CONNECTED // ${lang.toUpperCase()} TRANSMISSION CHANNEL ]` },
    { time: 3, text: `Ingesting dynamic telemetry for: ${title.toUpperCase()} by ${artist.toUpperCase()}...` },
    { time: 7, text: `Linking regional sound structures through local network node...` }
  ];

  if (lang === "Telugu") {
    lyrics.push(
      { time: 12, text: "Tollywood acoustic matrix sweep - Naatu Naatu / Samajavaragamana frequency lock..." },
      { time: 18, text: "Swarm particles accelerating! Cognitive matches optimized..." },
      { time: 25, text: "Mellaga karagani dynamic rhythm streams..." },
      { time: 35, text: "[ DEEP RESONANCE DETECTED - TOLLYWOOD DANCE CORE ]" }
    );
  }
  else if (lang === "Tamil") {
    lyrics.push(
      { time: 12, text: "Kollywood sound synapse active - Arabic Kuthu beat sync active..." },
      { time: 18, text: "Halamithi habibo rhythm sweeping through the digital galaxy..." },
      { time: 25, text: "Processing high-fidelity bass channels..." },
      { time: 35, text: "[ ENERGY EMITTING MAXIMUM LEVEL - KOLLYWOOD VIBES ]" }
    );
  }
  else if (lang === "Malayalam") {
    lyrics.push(
      { time: 12, text: "Mollywood acoustic grid fully engaged - Darshana frequency active..." },
      { time: 18, text: "Mazhaye / Kudukku rhythms synchronizing with starfield grids..." },
      { time: 25, text: "Appangal embadum local filter sweeps..." },
      { time: 35, text: "[ CRYO-MELODY HARMONIC SYNAPSE STABILIZED ]" }
    );
  }
  else if (lang === "Hindi") {
    lyrics.push(
      { time: 12, text: "Bollywood resonance grid connected - Kesariya / Jai Ho telemetry path active..." },
      { time: 18, text: "Saturday Saturday function sweeping through Arijit / Rahman nodes..." },
      { time: 25, text: "Tum hi ho... acoustic resonance loop locked..." },
      { time: 35, text: "[ MAXIMUM COGNITIVE ALIGNMENT IN BOLLYWOOD MATRIX ]" }
    );
  }
  else {
    lyrics.push(
      { time: 12, text: "Global English outrun pop streams sweeping - Blinding Lights/Shape of You active..." },
      { time: 18, text: "Levitating synth oscillators pulsing through the starfield canvas..." },
      { time: 25, text: "Save your tears for another dimension..." },
      { time: 35, text: "[ SYNTHWAVE UNIVERSE STABILIZED - SYSTEM OK ]" }
    );
  }

  return lyrics;
}

// Hydrate raw items at runtime
rawMultiverseDatabase.forEach((item, idx) => {
  const uniqueId = `multiverse-track-${idx + 1}`;
  
  // High plays count generators
  const playMillions = Math.floor(Math.random() * 800 + 50);
  const playsStr = playMillions > 1000 ? `${(playMillions / 1000).toFixed(1)}B` : `${playMillions}M`;
  
  // Cognitive matches
  const matchPct = (92.0 + Math.random() * 7.9).toFixed(1) + "%";
  
  // Dynamic backdrops
  const gradient = `linear-gradient(135deg, ${item.glow}2b 0%, rgba(10, 10, 18, 0.95) 100%)`;

  hydratedTracks.push({
    id: uniqueId,
    title: item.title,
    artist: item.artist,
    album: `${item.lang} Anthems`,
    duration: "3:40",
    durationSeconds: 220,
    plays: playsStr,
    neuralMatch: matchPct,
    genre: `${item.lang} / Popular`,
    glowColor: item.glow,
    backdrop: gradient,
    youtubeId: item.yt,
    lyrics: generateDynamicLyrics(item.title, item.artist, item.lang)
  });
});

// Combine both arrays (procedural first, then 250 dynamic Indian/Global tracks!)
export const tracks = [...proceduralTracks, ...hydratedTracks];

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
