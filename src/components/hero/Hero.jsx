import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Download,
  Mail,
  Code2,
  MapPin,
  Briefcase,
  FolderGit2,
  Layers,
  Play,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiMongodb,
  SiDjango,
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";
import profileImg from "../../assets/Sivanika_Black.png";
import { useRouter } from "../../context/RouterContext";

const techStack = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "AI", icon: SiOpenai, color: "#FF6B00" },
];

const roles = [
  "AI-ASSISTED SOFTWARE DEVELOPER",
  "VIBE CODER & FULL STACK ENGINEER",
  "MERN & REACT NATIVE DEVELOPER",
  "AI-INTEGRATED APP ARCHITECT",
];

// Neon Handwritten Signature Component
function NeonSignature() {
  return (
    <div className="select-none pointer-events-none -rotate-12">
      <span
        className="font-['Alex_Brush',cursive] text-4xl sm:text-5xl text-[#ff7a18] tracking-wider block font-normal"
        style={{
          filter: "drop-shadow(0 0 10px #ff6600) drop-shadow(0 0 20px #ff5500)",
          WebkitTextStroke: "0.5px #ff9933",
        }}
      >
        Sivanika S.
      </span>
    </div>
  );
}

// High-Density Dot Matrix World Map Canvas Component
function DottedWorldMap() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 2;
    const width = 220;
    const height = 110;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Geographic polygon definition for all world continents [lng, lat]
    const continents = [
      // North America (Mainland, Alaska, Canada, US, Mexico)
      [
        [-168, 65], [-160, 71], [-130, 70], [-80, 70], [-60, 60], [-55, 48],
        [-65, 44], [-75, 35], [-80, 25], [-97, 26], [-90, 19], [-80, 8],
        [-85, 14], [-105, 20], [-117, 32], [-124, 48], [-140, 60], [-165, 60]
      ],
      // Greenland
      [
        [-52, 60], [-42, 60], [-20, 70], [-30, 82], [-55, 82], [-55, 70]
      ],
      // South America
      [
        [-76, 8], [-60, 10], [-35, -5], [-35, -12], [-40, -22], [-50, -32],
        [-60, -40], [-65, -54], [-75, -52], [-72, -40], [-80, -5], [-80, 5]
      ],
      // Europe (Mainland)
      [
        [-9, 36], [0, 36], [15, 38], [28, 41], [35, 46], [40, 55], [30, 60],
        [15, 55], [5, 50], [-4, 48], [-9, 44]
      ],
      // Scandinavia
      [
        [5, 58], [15, 56], [30, 60], [32, 70], [20, 71], [10, 64], [5, 60]
      ],
      // British Isles
      [
        [-10, 50], [-2, 50], [0, 58], [-6, 58], [-10, 54]
      ],
      // Africa
      [
        [-17, 15], [-5, 36], [10, 37], [25, 32], [32, 31], [42, 12], [51, 12],
        [44, -5], [35, -25], [28, -34], [18, -34], [12, -15], [8, 4], [-15, 11]
      ],
      // Madagascar
      [
        [43, -12], [50, -14], [48, -25], [44, -25]
      ],
      // Asia (Russia, Siberia, Central Asia, China, Mongolia)
      [
        [30, 60], [60, 68], [100, 76], [140, 72], [170, 66], [170, 60],
        [140, 50], [130, 42], [122, 30], [108, 22], [100, 22], [80, 28],
        [68, 36], [50, 40], [35, 42], [35, 55]
      ],
      // Arabian Peninsula
      [
        [35, 30], [45, 30], [60, 24], [55, 15], [44, 12], [35, 22]
      ],
      // India Subcontinent
      [
        [68, 24], [72, 32], [80, 32], [88, 28], [92, 22], [85, 18], [80, 8],
        [76, 8], [72, 18], [68, 22]
      ],
      // Southeast Asia (Indochina, Malaysia)
      [
        [98, 22], [108, 22], [108, 10], [102, 2], [98, 10]
      ],
      // Japan
      [
        [130, 32], [142, 44], [144, 40], [132, 30]
      ],
      // Indonesia & Philippines
      [
        [95, -6], [115, -6], [115, -8], [95, -8]
      ],
      [
        [110, -2], [125, -2], [125, -8], [110, -8]
      ],
      [
        [120, 16], [126, 14], [124, 6], [120, 8]
      ],
      // Australia
      [
        [114, -22], [124, -14], [138, -12], [150, -22], [152, -34], [140, -38],
        [116, -34], [112, -26]
      ],
      // New Zealand
      [
        [166, -38], [178, -36], [176, -46], [168, -46]
      ]
    ];

    // Point in polygon test
    const isPointInPoly = (x, y, poly) => {
      let inside = false;
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const xi = poly[i][0], yi = poly[i][1];
        const xj = poly[j][0], yj = poly[j][1];
        const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
      }
      return inside;
    };

    // Convert (lng, lat) to canvas (x, y)
    const lngLatToXY = (lng, lat) => {
      const x = ((lng + 180) / 360) * width;
      const y = ((90 - lat) / 180) * height;
      return [x, y];
    };

    ctx.clearRect(0, 0, width, height);

    // Draw ultra-fine micro-dot matrix (matching high-res UI)
    const step = 2.5;
    for (let x = 0; x < width; x += step) {
      for (let y = 0; y < height; y += step) {
        const lng = (x / width) * 360 - 180;
        const lat = 90 - (y / height) * 180;

        let isLand = false;
        for (const poly of continents) {
          if (isPointInPoly(lng, lat, poly)) {
            isLand = true;
            break;
          }
        }

        if (isLand) {
          ctx.beginPath();
          ctx.arc(x, y, 0.75, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(212, 212, 216, 0.4)";
          ctx.fill();
        }
      }
    }

    // India Coordinates: Longitude 78.9629° E, Latitude 20.5937° N
    const [indiaX, indiaY] = lngLatToXY(78.96, 20.59);

    // Draw Glowing Orange Ambient Halo for India
    const grad = ctx.createRadialGradient(indiaX, indiaY, 0, indiaX, indiaY, 14);
    grad.addColorStop(0, "rgba(249, 115, 22, 0.8)");
    grad.addColorStop(0.4, "rgba(249, 115, 22, 0.35)");
    grad.addColorStop(1, "rgba(249, 115, 22, 0)");
    ctx.beginPath();
    ctx.arc(indiaX, indiaY, 14, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    // Solid Beacon Core
    ctx.beginPath();
    ctx.arc(indiaX, indiaY, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = "#ff7a18";
    ctx.shadowColor = "#ff5500";
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;
  }, []);

  return (
    <div className="relative w-44 sm:w-52 h-20 flex items-center justify-end select-none pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain"
        style={{ width: "220px", height: "110px" }}
      />
      {/* Animated Ping Ring Over India (Positioned at 78.96°E, 20.59°N => 71.9% X, 38.5% Y) */}
      <div
        className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ left: "71.9%", top: "38.5%" }}
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-60" />
      </div>
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const canvasRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Role Rotator
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Interactive Constellation / Particle Network Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 35 : 70;
    const CONNECT_DISTANCE = isMobile ? 85 : 130;
    const MOUSE_CONNECT_DIST = isMobile ? 90 : 150;

    const mouse = { x: null, y: null };

    const particles = Array.from({ length: PARTICLE_COUNT }).map(() => {
      const biasRight = Math.random() > 0.35;
      const xPos = biasRight
        ? width * 0.3 + Math.random() * (width * 0.7)
        : Math.random() * width;

      return {
        x: xPos,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.3,
      };
    });

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        let proximityAlpha = 0;
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MOUSE_CONNECT_DIST) {
            proximityAlpha = (1 - dist / MOUSE_CONNECT_DIST) * 0.5;
            p.x += (dx / dist) * 0.35;
            p.y += (dy / dist) * 0.35;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(249, 115, 22, ${
              (1 - dist / MOUSE_CONNECT_DIST) * 0.35
            })`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        const finalAlpha = Math.min(1, p.baseAlpha + proximityAlpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${finalAlpha})`;
        ctx.shadowColor = "rgba(249, 115, 22, 0.8)";
        ctx.shadowBlur = proximityAlpha > 0 ? 8 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DISTANCE) {
            const lineAlpha = (1 - dist / CONNECT_DISTANCE) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(249, 115, 22, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="home"
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      className="relative min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between overflow-hidden bg-black pt-20 pb-3 px-4 sm:px-6 lg:px-10 scroll-mt-24 selection:bg-orange-500 selection:text-black"
    >
      {/* Interactive Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* ================= HERO CONTENT (MAIN 2-COLUMN GRID) ================= */}
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto py-2 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ──── LEFT CONTENT ──── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Badge: • AVAILABLE FOR OPPORTUNITIES */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/80 border border-zinc-800 backdrop-blur-md mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
              <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-widest font-mono">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </motion.div>

            {/* Headline: SIVANIKA S (Michroma Font) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white leading-none whitespace-nowrap"
              style={{
                fontFamily: "'Michroma', sans-serif",
                fontWeight: 400,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              SIVANIKA <span className="text-orange-500 drop-shadow-[0_0_25px_rgba(249,115,22,0.45)]">S</span>
            </motion.h1>

            {/* Subtitle / Role */}
            <div className="mt-2.5 h-7 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] text-zinc-400 font-mono uppercase"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Description Text with Left Accent Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-3.5 max-w-lg border-l-2 border-orange-500/50 pl-3.5 text-left"
            >
              <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
                I build modern web applications, AI-integrated solutions and digital products that make an impact.
              </p>
            </motion.div>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 flex flex-wrap gap-3.5 items-center justify-center lg:justify-start font-display"
            >
              {/* Primary Button: ▶ VIEW PROJECTS */}
              <button
                onClick={() => handleScrollTo("projects")}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>VIEW PROJECTS</span>
              </button>

              {/* Secondary Button: ↓ DOWNLOAD RESUME */}
              <a
                href="/resume/Sivanika-Resume.pdf"
                download="Sivanika-Resume.pdf"
                className="px-6 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-orange-500/50 text-white font-bold text-xs uppercase tracking-wider hover:bg-orange-500/10 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-orange-400" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </motion.div>

            {/* Sleek Technology Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 w-full max-w-lg"
            >
              <div className="py-2.5 px-4 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 backdrop-blur-xl flex items-center justify-between gap-2 overflow-x-auto scrollbar-hide shadow-lg">
                {techStack.map((tech) => {
                  const TechIcon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:bg-white/[0.04] transition-all group flex-shrink-0 cursor-default"
                    >
                      <TechIcon
                        className="w-3.5 h-3.5 transition-transform group-hover:scale-110"
                        style={{ color: tech.color }}
                      />
                      <span className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors font-display">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* ──── RIGHT PROFILE SECTION (PORTRAIT CARD) ──── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Ambient Background Glow behind Portrait */}
            <div className="absolute -inset-4 bg-orange-500/10 rounded-[36px] blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px]">
              {/* Portrait Glass Container */}
              <div className="relative rounded-[32px] overflow-hidden border border-orange-500/30 bg-[#0c0d12]/90 backdrop-blur-2xl shadow-[0_0_45px_rgba(249,115,22,0.18)] p-2">
                {/* Profile Image Container */}
                <div className="relative aspect-[4/5] rounded-[26px] overflow-hidden bg-zinc-950">
                  <img
                    src={profileImg}
                    alt="Sivanika S - AI Software Developer"
                    className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 hover:brightness-105 transition-all duration-700 ease-out"
                  />

                  {/* Subtle Lighting Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Social Icon Bar Overlay at top-right */}
                  <div className="absolute top-3.5 right-3.5 flex flex-col gap-2 z-20">
                    {[
                      {
                        icon: FaGithub,
                        href: "https://github.com/siva1304nika-creator",
                        label: "GitHub",
                      },
                      {
                        icon: FaLinkedin,
                        href: "https://www.linkedin.com/in/sivanika",
                        label: "LinkedIn",
                      },
                      {
                        icon: Mail,
                        href: "mailto:sivanika2025@gmail.com",
                        label: "Email",
                      },
                      {
                        icon: Code2,
                        href: "#projects",
                        onClick: () => handleScrollTo("projects"),
                        label: "Code",
                      },
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      if (item.onClick) {
                        return (
                          <button
                            key={idx}
                            onClick={item.onClick}
                            title={item.label}
                            className="w-8 h-8 rounded-full bg-black/70 border border-white/15 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-orange-400 hover:border-orange-500/50 hover:bg-orange-500/15 hover:scale-110 transition-all cursor-pointer shadow-lg"
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </button>
                        );
                      }
                      return (
                        <a
                          key={idx}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={item.label}
                          className="w-8 h-8 rounded-full bg-black/70 border border-white/15 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-orange-400 hover:border-orange-500/50 hover:bg-orange-500/15 hover:scale-110 transition-all cursor-pointer shadow-lg"
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </a>
                      );
                    })}
                  </div>

                  {/* Sivanika S. Neon Handwritten Signature (Positioned cleanly above bottom badge) */}
                  <div className="absolute bottom-22 sm:bottom-24 right-2 sm:right-3 z-30 pointer-events-none">
                    <NeonSignature />
                  </div>

                  {/* Floating Glass Card at Bottom of Portrait */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-black/85 border border-zinc-800/90 backdrop-blur-xl z-20">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
                      <span className="text-[11px] font-bold text-white uppercase tracking-wider font-mono">
                        AVAILABLE FOR WORK
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 truncate font-sans">
                      Let's build something amazing together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTOM 4 STATISTICS & INFO CARDS ================= */}
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-2 pb-2">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {/* Card 1: EXPERIENCE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-4 rounded-2xl bg-[#0c0d12]/90 border border-zinc-800/80 backdrop-blur-xl hover:border-orange-500/30 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center gap-1.5 text-xs font-bold text-orange-400 tracking-wider uppercase font-mono mb-2">
              <Briefcase className="w-3.5 h-3.5 text-orange-500" />
              <span>EXPERIENCE</span>
            </div>
            <div>
              <span className="text-3xl lg:text-4xl font-black text-orange-500 tracking-tight block font-display">
                01+
              </span>
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mt-1 font-mono">
                YEARS EXPERIENCE
              </span>
            </div>
          </motion.div>

          {/* Card 2: PROJECTS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-4 rounded-2xl bg-[#0c0d12]/90 border border-zinc-800/80 backdrop-blur-xl hover:border-orange-500/30 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center gap-1.5 text-xs font-bold text-orange-400 tracking-wider uppercase font-mono mb-2">
              <FolderGit2 className="w-3.5 h-3.5 text-orange-500" />
              <span>PROJECTS</span>
            </div>
            <div>
              <span className="text-3xl lg:text-4xl font-black text-orange-500 tracking-tight block font-display">
                06+
              </span>
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mt-1 font-mono">
                PROJECTS BUILT
              </span>
            </div>
          </motion.div>

          {/* Card 3: TECHNOLOGIES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-4 rounded-2xl bg-[#0c0d12]/90 border border-zinc-800/80 backdrop-blur-xl hover:border-orange-500/30 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center gap-1.5 text-xs font-bold text-orange-400 tracking-wider uppercase font-mono mb-2">
              <Layers className="w-3.5 h-3.5 text-orange-500" />
              <span>TECHNOLOGIES</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 flex-wrap my-1">
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <FaReact className="w-3.5 h-3.5 text-[#61DAFB]" />
                </div>
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <FaNodeJs className="w-3.5 h-3.5 text-[#68A063]" />
                </div>
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <SiMongodb className="w-3.5 h-3.5 text-[#47A248]" />
                </div>
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white font-mono">dj</span>
                </div>
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <SiTailwindcss className="w-3.5 h-3.5 text-[#38BDF8]" />
                </div>
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <span className="text-xs text-zinc-400 font-bold font-mono">+</span>
                </div>
              </div>
              <span className="text-[11px] text-zinc-500 block mt-1 font-medium font-sans">
                and more...
              </span>
            </div>
          </motion.div>

          {/* Card 4: LOCATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-4 rounded-2xl bg-[#0c0d12]/90 border border-zinc-800/80 backdrop-blur-xl hover:border-orange-500/30 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] transition-all duration-300 flex items-center justify-between"
          >
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-orange-400 tracking-wider uppercase font-mono mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                <span>LOCATION</span>
              </div>
              <span className="text-base font-bold text-orange-400 block leading-tight font-display">
                India
              </span>
              <span className="text-[11px] text-zinc-400 block mt-0.5 font-sans">
                Open to Remote Opportunities
              </span>
            </div>

            {/* High-density Dotted World Map */}
            <DottedWorldMap />
          </motion.div>
        </div>
      </div>

      {/* ================= SCROLL TO EXPLORE INDICATOR ================= */}
      <div className="w-full flex items-center justify-center pt-1 pb-1 z-10">
        <button
          onClick={() => handleScrollTo("about")}
          className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-zinc-500 hover:text-orange-400 transition-colors cursor-pointer group"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="w-4 h-6 rounded-full border border-zinc-700 flex items-start justify-center p-1 group-hover:border-orange-500 transition-colors">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-orange-500"
            />
          </div>
        </button>
      </div>
    </section>
  );
}
