export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Multiplayer" | "Optimization" | "Mobile / Live-Ops" | "Computer Vision" | "Platform" | "Gameplay Architecture" | "Word Puzzle / Systems";
  techStack: string[];
  metrics?: { label: string; value: string }[];
  problem: string;
  architecture: string;
  impact: string;
  videoSrc?: string;
  fullVideoUrl?: string;
  playStoreUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Prototype {
  id: string;
  name: string;
  type: string;
  tech: string[];
  description: string;
  keyFeature: string;
  itchUrl?: string;
  githubUrl: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type: "work" | "internship" | "management" | "education";
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Dhawal Jhaveri",
  roleTitle: "Unity Game Developer • C# • Multiplayer & Systems",
  shortRole: "Unity Game Developer",
  statusBadge: "Immediate Joiner • Open to Relocation & Remote (Ahmedabad, India)",
  location: "Ahmedabad, Gujarat, India",
  email: "dhawal_jhaveri@yahoo.com",
  phone: "+91-8007883310",
  github: "https://github.com/DRGSTR",
  linkedin: "https://www.linkedin.com/in/dhawal-jhaveri-534b75139",
  itchio: "https://drgstr.itch.io",
  resumeUrl: "/Dhawal_Jhaveri_Resume.pdf",
  gameplayDriveUrl: "https://drive.google.com/drive/folders/1tOU7B0j0posTf24T6YxBZW9aXYCorcix",
  summary:
    "Unity Developer with 2 years of professional experience engineering 2D, mobile, WebGL, and real-time multiplayer games in C#. Specialized in server-authoritative netcode (Socket.IO, WebSockets), client-side state recovery, REST API architectures, and performance profiling that reduced loading times by ~80% and build sizes from 900+ MB down to 100–170 MB via remote Addressables.",
  metrics: [
    { label: "Load Time Reduction", value: "~80%", detail: "Optimized async asset bundles & scene transitions" },
    { label: "Build Size Optimization", value: "900MB → 100MB", detail: "~85% footprint reduction via remote assets" },
    { label: "Unity & C# Experience", value: "2+ Years", detail: "Shipped 2D, Mobile, WebGL & Multiplayer games" },
    { label: "Educational Mini-Games", value: "10 Titles", detail: "Directed multi-game progression & tablet UI" },
  ],
};

export const FEATURED_PROJECTS: Project[] = [
  // 01 // Last Letter (Video-Backed)
  {
    id: "last-letter",
    title: "Last Letter",
    subtitle: "Real-Time Word Duel Client with Server-Authoritative Netcode",
    category: "Multiplayer",
    techStack: ["Unity", "C#", "Socket.IO", "WebSockets", "Multiplayer Netcode", "JSON"],
    metrics: [
      { label: "Turn Sync", value: "Sub-50ms" },
      { label: "Recovery", value: "Zero Match Drops" },
    ],
    problem:
      "High-tempo competitive turn-based gameplay suffered from desynchronization during brief mobile packet drops, network jitter, and mismatched local device clocks.",
    architecture:
      "Engineered a server-authoritative client layer using Socket.IO/WebSockets with custom packet serialization. Implemented clock-drift synchronization to calculate server-aligned turn timers, auto-reconnect state recovery queues, private room creation, matchmaking queues, rematches, and persistent leaderboard data sync.",
    impact:
      "Eliminated desync bugs across unstable mobile networks; players seamlessly resume ongoing matches within seconds of connection dropouts without losing turns or match state.",
    videoSrc: "/videos/last-letter.mp4",
    fullVideoUrl: "https://drive.google.com/file/d/1NzmtNgwzauHnYZm95Lx9NQKj248RQD_j/view?usp=drive_link",
    githubUrl: "https://github.com/DRGSTR",
    featured: true,
  },
  // 02 // Children's Financial Literacy Game (Video-Backed)
  {
    id: "financial-literacy",
    title: "Children's Financial Literacy Game",
    subtitle: "10-in-1 Educational Suite with Modular Remote Asset Pipeline",
    category: "Optimization",
    techStack: ["Unity", "C#", "REST APIs", "Addressables", "Localization", "OTP/JWT"],
    metrics: [
      { label: "Build Size", value: "900MB → 100-170MB" },
      { label: "Mini-Games", value: "10 Unified Modules" },
    ],
    problem:
      "Shipping 10 distinct, graphic-rich educational mini-games within a single client caused the build size to balloon past 900+ MB, exceeding store limits and bottlenecking low-spec student tablets.",
    architecture:
      "Directed development across 10 modular mini-game modules built around a shared global progression and reward engine. Implemented REST API networking with OTP and JWT authentication, English and Dominican Spanish localization tables, responsive tablet UI layouts, and decoupled heavy asset bundles into remote Addressables hosted on CDN.",
    impact:
      "Slashed client build payload from 900+ MB to 100–170 MB (~85% reduction), lowered initial device install friction, and enabled seamless live game downloads without requiring full APK updates.",
    videoSrc: "/videos/financial-literacy.mp4",
    fullVideoUrl: "https://drive.google.com/file/d/1pxqVnznNnO1i6uxAOhQ-7j3NwKkpzXKV/view?usp=drive_link",
    featured: true,
  },
  // 03 // AI_Fight (Video-Backed)
  {
    id: "ai-fight",
    title: "AI_Fight: Tactical Hero RPG",
    subtitle: "Turn-Based 6v6 Combat Engine with ScriptableObject Synergies",
    category: "Gameplay Architecture",
    techStack: ["Unity", "C#", "ScriptableObjects", "2D Combat", "Procedural Loot"],
    metrics: [
      { label: "Combat Scale", value: "6v6 Turn-Based" },
      { label: "Logic", value: "100% Data-Driven" },
    ],
    problem:
      "Complex turn-based combat systems often turn into messy monolithic state machines that break whenever designers tweak elemental affinities, hero initiative, or gear stats.",
    architecture:
      "Contributed to a modular 2D tactical hero-collector RPG featuring speed-based action-order queues, multi-hero grid formations, and an elemental synergy calculation matrix. Leveraged ScriptableObjects for character stat templates, ability behaviors, procedural gear affixes, and multi-phase boss encounter AI.",
    impact:
      "Decoupled combat math completely from visual rendering, enabling designers to balance characters and test raid encounters dynamically in the Unity Inspector without writing new code.",
    videoSrc: "/videos/ai-fight.mp4",
    fullVideoUrl: "https://drive.google.com/file/d/1s-C0Kx_NEU7LUssHiUvul_n-cbMFdF4D/view?usp=drive_link",
    githubUrl: "https://github.com/DRGSTR",
    featured: true,
  },
  // 04 // Word Game (WordZip) (Video-Backed)
  {
    id: "word-game",
    title: "Word Game (WordZip)",
    subtitle: "Interlocking Crossword Validation Engine & Cloud Player Profile",
    category: "Word Puzzle / Systems",
    techStack: ["Unity", "C#", "Firebase", "Crossword Grid", "UI Toolkit", "REST APIs"],
    metrics: [
      { label: "Grid Validation", value: "Real-Time Matrix" },
      { label: "Cloud Sync", value: "Firebase Realtime" },
    ],
    problem:
      "Crossword and anagram mechanics require instant letter-intersection validation, live solve countdown timers, and persistent user profile customization without frame drops or sync lag on mobile devices.",
    architecture:
      "Engineered an interlocking crossword grid validation engine in Unity and C#, mapping letter intersections across dynamic horizontal and vertical word slots with animated tile drop states. Integrated Firebase backend sync for player authentication, solve times, coin economy, and an in-game profile customization modal with custom avatars.",
    impact:
      "Delivered a fluid word-puzzle client with zero-latency letter placement feedback, real-time grid solve verification, and seamless cloud progression synchronization across play sessions.",
    videoSrc: "/videos/word-game.mp4",
    fullVideoUrl: "https://drive.google.com/file/d/1KXa3gvSAYeklYM5Cq31-o9gUrvMAsfP8/view?usp=drive_link",
    githubUrl: "https://github.com/DRGSTR",
    featured: true,
  },
  // 05 // My Gamer's Life (Architectural Showcase)
  {
    id: "my-gamers-life",
    title: "My Gamer's Life",
    subtitle: "Narrative Life Simulator with Live-Ops & Cloud Persistence",
    category: "Mobile / Live-Ops",
    techStack: ["Unity", "C#", "Firebase Auth", "Remote Config", "Google Sign-In", "ScriptableObjects"],
    metrics: [
      { label: "Platform", value: "Google Play Live" },
      { label: "Live-Ops", value: "100% Cloud Configured" },
    ],
    problem:
      "Needed an agile system to deliver non-linear branching narrative dialogue, character customizer states, and dynamic daily rewards without recompiling game builds for every story patch.",
    architecture:
      "Integrated Firebase Authentication with Google Sign-In and Remote Config for dynamic parameter balancing. Built a custom, lightweight CSV-driven narrative interpreter parsing branching dialogue trees, choices, and state flags. Designed a modular avatar wardrobe customizer backed by ScriptableObjects and persistent cloud saves.",
    impact:
      "Live on Google Play Store with zero-downtime story adjustments and real-time live-ops event configurations managed directly through Firebase Remote Config.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.game.MyGamerLife",
    featured: true,
  },
  // 06 // Touchless Motion Tracking Interface (Architectural Showcase)
  {
    id: "motion-tracking",
    title: "Touchless Motion Tracking Interface",
    subtitle: "Low-Latency Computer Vision Pointer via UDP Socket Pipeline",
    category: "Computer Vision",
    techStack: ["Unity 6", "C#", "Python", "MediaPipe", "OpenCV", "UDP Sockets"],
    metrics: [
      { label: "Input Latency", value: "< 20ms" },
      { label: "Hardware", value: "Standard Webcam" },
    ],
    problem:
      "Touchless interaction in Unity typically requires bulky VR hardware or specialized depth sensors (like Kinect/Leap Motion), limiting accessibility on standard PC workstations.",
    architecture:
      "Created an asynchronous Python worker utilizing Google MediaPipe and OpenCV to extract 21-point hand landmark coordinates at 60 FPS from standard consumer webcams. Serialized spatial gestures into low-overhead UDP packets streamed over localhost to a custom Unity 6 receiver, mapped to virtual cursors and injected into Unity UI EventSystem pointer events.",
    impact:
      "Delivered silky-smooth gesture-driven navigation and video playback controls without specialized hardware sensors, demonstrating clean cross-process IPC and real-time input pipeline design.",
    githubUrl: "https://github.com/DRGSTR",
    featured: true,
  },
  // 07 // Bikkie Games Platform (Architectural Showcase)
  {
    id: "bikkie-games",
    title: "Bikkie Games Platform",
    subtitle: "Shared Multiplayer Framework & OTA Asset Engine for WebGL",
    category: "Platform",
    techStack: ["Unity", "C#", "Socket.IO", "WebGL", "Addressables", "OTA Updates"],
    metrics: [
      { label: "Target", value: "HTML5 / WebGL" },
      { label: "Asset Delivery", value: "Instant OTA Sync" },
    ],
    problem:
      "Operating multiple web and mobile games (card, physics, slot titles) individually led to duplicate networking code, fragmented auth states, and lengthy WebGL load times.",
    architecture:
      "Architected a centralized, reusable Unity networking layer integrating Socket.IO, JWT session authentication, auto-reconnection, and remote Addressables catalogs. Built an OTA (over-the-air) update pipeline enabling dynamic content streaming directly inside modern web browsers without full page reloads.",
    impact:
      "Standardized multiplayer netcode across card and physics game modules, reduced WebGL initial download bundle size, and enabled hot-pushing asset updates across live environments.",
    githubUrl: "https://github.com/DRGSTR",
    featured: true,
  },
];

export const ADDITIONAL_CONTRIBUTIONS = [
  {
    title: "Space Marshal",
    domain: "Gameplay & Camera Systems",
    description: "Designed responsive top-down character movement, tactical aim mechanics, and smooth virtual camera tracking behaviors in Unity.",
  },
  {
    title: "Pooking Pool",
    domain: "Physics Debugging & Trajectories",
    description: "Investigated and resolved 2D rigid-body collision glitches, continuous collision detection, and predictive cue ball trajectory guides.",
  },
  {
    title: "World War & Hitman Sniper",
    domain: "FPS UI & Weapon Progression",
    description: "Built modular weapon upgrade trees, ergonomic touch HUD layouts, scope zoom interpolations, and dynamic recoil animations.",
  },
  {
    title: "Dead Target",
    domain: "Animation & VFX Systems",
    description: "Engineered high-performance particle VFX for muzzle flashes, hit sparks, ragdoll transition events, and optimized shader draws.",
  },
];

export const PLAYABLE_PROTOTYPES: Prototype[] = [
  {
    id: "zomgod",
    name: "ZOMGOD",
    type: "Top-Down Zombie Survival",
    tech: ["Unity 2D", "C#", "Wave Spawner", "Weapon Systems"],
    description: "Intense wave-based survival prototype featuring procedural horde scaling, directional twin-stick aiming, and upgrade trees.",
    keyFeature: "Dynamic wave director & object-pooled enemy spawners",
    itchUrl: "https://drgstr.itch.io",
    githubUrl: "https://github.com/DRGSTR",
  },
  {
    id: "zombie-crusher",
    name: "Zombie Crusher",
    type: "Physics Ragdoll Action",
    tech: ["Unity Physics 2D", "C#", "Impulse Calculations"],
    description: "Physics-driven arcade game centered around impulse velocity, bone hinge joints, and impact deformation mechanics.",
    keyFeature: "Joint constraints & physics impulse multiplier system",
    itchUrl: "https://drgstr.itch.io",
    githubUrl: "https://github.com/DRGSTR",
  },
  {
    id: "dodger",
    name: "Dodger",
    type: "Reflex Arcade Runner",
    tech: ["Unity", "C#", "Hitbox Precision", "Input System"],
    description: "High-speed avoidance arcade prototype testing frame-accurate collisions, input responsiveness, and progressive game speed.",
    keyFeature: "Sub-pixel hitbox accuracy & exponential obstacle curves",
    itchUrl: "https://drgstr.itch.io",
    githubUrl: "https://github.com/DRGSTR",
  },
  {
    id: "mario-clone",
    name: "Mario Clone",
    type: "2D Platformer Mechanics",
    tech: ["Unity 2D", "C#", "Tilemap Physics", "Custom Controller"],
    description: "Recreation of classic side-scrolling platformer physics, variable jump heights, momentum preservation, and tilemap collisions.",
    keyFeature: "Custom raycast motor with momentum preservation & stomp logic",
    itchUrl: "https://drgstr.itch.io",
    githubUrl: "https://github.com/DRGSTR",
  },
  {
    id: "brick-breaker",
    name: "Brick Breaker",
    type: "Arcade Ball Physics",
    tech: ["Unity 2D", "C#", "Vector Reflection", "Power-Up FSM"],
    description: "Retro brick destroyer exploring paddle angle reflection calculations, multi-ball physics, and modular drop abilities.",
    keyFeature: "Vector reflection angle modifiers & modular power-up states",
    itchUrl: "https://drgstr.itch.io",
    githubUrl: "https://github.com/DRGSTR",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    icon: "code",
    skills: ["C#", "Python", "Object-Oriented Programming (OOP)", "JSON", "Data Structures", "Design Patterns"],
  },
  {
    title: "Unity & Gameplay",
    icon: "gamepad",
    skills: [
      "Unity",
      "Unity 6",
      "URP (Universal Render Pipeline)",
      "2D Game Development",
      "Gameplay Systems",
      "UI Development",
      "Animation & Animator",
      "Physics Debugging",
      "ScriptableObjects",
      "Addressables",
      "Input System",
      "Localization",
      "TextMesh Pro",
    ],
  },
  {
    title: "Client-Server & Multiplayer",
    icon: "network",
    skills: [
      "REST API Integration",
      "Socket.IO",
      "WebSockets",
      "JWT Authentication",
      "OTP Authentication",
      "Matchmaking",
      "Private Rooms",
      "Reconnection & State Recovery",
      "Turn Synchronization",
      "Clock-Drift Correction",
      "Leaderboards",
    ],
  },
  {
    title: "Platforms & Services",
    icon: "platform",
    skills: [
      "Android",
      "iOS",
      "WebGL",
      "Firebase Authentication",
      "Realtime Database",
      "Remote Config",
      "Cloud Functions",
      "Google Sign-In",
      "Apple Sign-In",
      "AdMob",
      "Unity IAP",
      "OTA Updates",
    ],
  },
  {
    title: "Computer Vision & Sockets",
    icon: "vision",
    skills: ["MediaPipe", "OpenCV", "UDP Communication", "Landmark Tracking", "Gesture-to-UI Mapping"],
  },
  {
    title: "Tools & AI-Assisted Workflow",
    icon: "terminal",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Jira",
      "Trello",
      "Visual Studio",
      "Cursor",
      "Antigravity",
      "Claude Code",
      "ChatGPT",
      "Agentic Feature Planning",
      "MCP Integrations",
      "AGENTS.md Project Instructions",
      "AI-Assisted Debugging",
      "Code Review with Human Approval",
    ],
  },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: "gamecrio-developer",
    role: "Game Developer",
    company: "Gamecrio Studios Pvt. Ltd.",
    period: "Apr 2025 – Sep 2026",
    location: "Ahmedabad, India",
    type: "work",
    highlights: [
      "Developed reusable Unity client-side REST API and Socket.IO/WebSocket communication layers with JWT authentication, auto-reconnect, and multiplayer state recovery.",
      "Implemented client features for server-authoritative multiplayer games, including matchmaking, private rooms, rematches, leaderboards, and clock-drift-corrected turn timers.",
      "Integrated Firebase Authentication, Google and Apple Sign-In, AdMob, and Unity IAP for authentication, live-ops, server-controlled content, and monetization.",
      "Optimized loading and scene transitions, improving loading times by approximately 80% and transitions by 60%; reduced a project build from 900+ MB to 100–170 MB using remote asset hosting.",
      "Built and shipped Android, iOS, and WebGL builds; worked with Addressables and OTA updates, and debugged gameplay, networking, physics, and platform-specific issues.",
    ],
  },
  {
    id: "gamecrio-intern",
    role: "Game Developer Intern",
    company: "Gamecrio Studios Pvt. Ltd.",
    period: "Oct 2024 – Mar 2025",
    location: "Ahmedabad, India",
    type: "internship",
    highlights: [
      "Developed gameplay, UI, animation, and multiplayer features across multiple Unity projects.",
      "Supported debugging, mobile performance optimization, and client-feedback iterations.",
      "Converted to full-time game developer following consistent engineering delivery and technical autonomy.",
    ],
  },
  {
    id: "family-business",
    role: "Operations & Management",
    company: "Family Business",
    period: "2020 – 2024",
    type: "management",
    highlights: [
      "Managed day-to-day business operations, vendor logistics, and operational scheduling.",
      "Built strong leadership, client communication, and problem-solving fundamentals before pivoting fully into professional game engineering.",
    ],
  },
  {
    id: "education",
    role: "B.E. Computer Science",
    company: "Sinhgad Institute of Technology, Lonavala",
    period: "Class of 2020",
    type: "education",
    highlights: [
      "Core coursework in Object-Oriented Programming (OOP), Data Structures, Algorithms, Computer Networks, and Software Engineering.",
      "Formed strong algorithmic foundation applied directly to multiplayer game netcode, state machines, and physics simulation.",
    ],
  },
];
