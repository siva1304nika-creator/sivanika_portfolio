import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ArrowDown,
  Mail,
  Code2,
  MapPin,
  Cpu,
  Layers,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiMongodb,
  SiDjango,
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";
import profileImg from "../../assets/Sivanika_Black.png";
import TiltWrapper from "../TiltWrapper";
import { useRouter } from "../../context/RouterContext";

const techStack = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "AI", icon: SiOpenai, color: "#FF6B00" },
];

const roles = [
  "AI-ASSISTED SOFTWARE DEVELOPER",
  "VIBE CODER & FULL STACK ENGINEER",
  "MERN & REACT NATIVE DEVELOPER",
  "AI-INTEGRATED APP ARCHITECT",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const canvasRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { navigate } = useRouter();

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
    const PARTICLE_COUNT = isMobile ? 35 : 75;
    const CONNECT_DISTANCE = isMobile ? 90 : 135;
    const MOUSE_CONNECT_DIST = isMobile ? 100 : 160;

    const mouse = { x: null, y: null };

    // Initialize particles focused slightly more on the center/right
    const particles = Array.from({ length: PARTICLE_COUNT }).map(() => {
      const biasRight = Math.random() > 0.35;
      const xPos = biasRight
        ? width * 0.3 + Math.random() * (width * 0.7)
        : Math.random() * width;

      return {
        x: xPos,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
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

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interaction with mouse
        let proximityAlpha = 0;
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MOUSE_CONNECT_DIST) {
            proximityAlpha = (1 - dist / MOUSE_CONNECT_DIST) * 0.5;

            // Subtle attraction/reaction
            p.x += (dx / dist) * 0.35;
            p.y += (dy / dist) * 0.35;

            // Line from particle to cursor
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

        // Draw particle node
        const finalAlpha = Math.min(1, p.baseAlpha + proximityAlpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${finalAlpha})`;
        ctx.shadowColor = "rgba(249, 115, 22, 0.8)";
        ctx.shadowBlur = proximityAlpha > 0 ? 8 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby nodes
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
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black pt-32 pb-16 px-4 md:px-8 scroll-mt-24 selection:bg-orange-500 selection:text-black"
    >
      {/* 🌌 Interactive Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* 🔮 Deep Black to Dark Burgundy / Amber Radial Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-600/10 via-[#450a0a]/15 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-[#3b0764]/10 via-[#7c2d12]/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* 🖱️ Subtle Interactive Mouse Glow (Desktop Only) */}
      <motion.div
        className="hidden md:block pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(
            500px at ${mouseX.get()}px ${mouseY.get()}px,
            rgba(249, 115, 22, 0.08),
            transparent 70%
          )`,
        }}
      />

      {/* ================= HERO CONTENT (MAIN GRID) ================= */}
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ──── LEFT CONTENT ──── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-bold text-white/80 uppercase tracking-widest font-mono">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </motion.div>

            {/* Large Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05]"
            >
              SIVANIKA <span className="text-orange-500 drop-shadow-[0_0_25px_rgba(249,115,22,0.4)]">S</span>
            </motion.h1>

            {/* Dynamic Role Subtitle */}
            <div className="mt-4 h-8 md:h-9 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                  transition={{ duration: 0.5 }}
                  className="text-base sm:text-lg md:text-xl font-bold tracking-widest text-orange-400/90 font-mono uppercase"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-5 text-white/65 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl font-normal"
            >
              I build modern web applications, AI-integrated solutions and digital products that make an impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-4 items-center justify-center lg:justify-start"
            >
              {/* Primary Button */}
              <button
                onClick={() => handleScrollTo("projects")}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 text-black font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(249,115,22,0.35)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Button */}
              <a
                href="/resume/Sivanika-Resume.pdf"
                download="Sivanika-Resume.pdf"
                className="px-8 py-4 rounded-full bg-black/40 border border-orange-500/60 text-orange-400 font-bold text-sm uppercase tracking-wider hover:bg-orange-500/10 hover:border-orange-400 hover:text-orange-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 cursor-pointer backdrop-blur-sm"
              >
                <span>DOWNLOAD RESUME</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Sleek Technology Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 w-full max-w-xl"
            >
              <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-white/10 backdrop-blur-xl shadow-lg">
                <div className="flex items-center justify-between gap-2 overflow-x-auto scrollbar-hide py-1 px-2">
                  {techStack.map((tech) => {
                    const TechIcon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all group flex-shrink-0 cursor-default"
                      >
                        <TechIcon
                          className="w-4 h-4 transition-transform group-hover:scale-110"
                          style={{ color: tech.color }}
                        />
                        <span className="text-xs font-semibold text-white/70 group-hover:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ──── RIGHT PROFILE SECTION ──── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative group"
          >
            {/* Ambient Background Glow behind Portrait */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/20 via-amber-500/10 to-transparent rounded-[40px] blur-3xl group-hover:blur-[80px] transition-all duration-700 pointer-events-none" />

            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              <TiltWrapper maxRotation={8} zTranslate={25}>
                {/* Portrait Glass Container */}
                <div className="relative rounded-[32px] overflow-hidden border border-orange-500/30 bg-gradient-to-b from-zinc-900/80 via-zinc-950/90 to-black backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(249,115,22,0.15)] p-3">
                  {/* Subtle Orange Glow Border Overlay */}
                  <div className="absolute inset-0 rounded-[32px] border border-orange-400/20 pointer-events-none group-hover:border-orange-400/50 transition-colors duration-500" />

                  {/* Profile Image Container */}
                  <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-zinc-950">
                    <img
                      src={profileImg}
                      alt="Sivanika S - AI Software Developer"
                      className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-105 group-hover:scale-105 transition-all duration-700 ease-out"
                    />

                    {/* Subtle Orange Lighting Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-orange-500/10 pointer-events-none" />

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
                              className="w-8 h-8 rounded-full bg-black/60 border border-white/15 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-orange-400 hover:border-orange-500/50 hover:bg-orange-500/15 hover:scale-110 transition-all cursor-pointer shadow-lg"
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
                            className="w-8 h-8 rounded-full bg-black/60 border border-white/15 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-orange-400 hover:border-orange-500/50 hover:bg-orange-500/15 hover:scale-110 transition-all cursor-pointer shadow-lg"
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </TiltWrapper>

              {/* Floating Glass Card at the Bottom of Portrait */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] p-4 rounded-2xl bg-zinc-950/90 border border-orange-500/30 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-30 flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                      AVAILABLE FOR WORK
                    </span>
                  </div>
                  <p className="text-[11px] text-white/60 truncate italic mt-0.5">
                    Let's build something amazing together.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= STATISTICS SECTION ================= */}
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-16 pb-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Card 1: Years Experience */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-5 md:p-6 rounded-2xl bg-zinc-950/60 border border-white/10 backdrop-blur-xl hover:border-orange-500/30 hover:shadow-[0_0_25px_rgba(249,115,22,0.1)] transition-all duration-300 group"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-orange-500 tracking-tight block">
              01+
            </span>
            <span className="text-xs sm:text-sm font-bold text-white/80 uppercase tracking-wider block mt-2 font-mono">
              YEARS EXPERIENCE
            </span>
            <p className="text-[11px] text-white/45 mt-1">
              Production development & AI tools
            </p>
          </motion.div>

          {/* Card 2: Projects Built */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-5 md:p-6 rounded-2xl bg-zinc-950/60 border border-white/10 backdrop-blur-xl hover:border-orange-500/30 hover:shadow-[0_0_25px_rgba(249,115,22,0.1)] transition-all duration-300 group"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-orange-500 tracking-tight block">
              06+
            </span>
            <span className="text-xs sm:text-sm font-bold text-white/80 uppercase tracking-wider block mt-2 font-mono">
              PROJECTS BUILT
            </span>
            <p className="text-[11px] text-white/45 mt-1">
              Full stack web & mobile applications
            </p>
          </motion.div>

          {/* Card 3: Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-5 md:p-6 rounded-2xl bg-zinc-950/60 border border-white/10 backdrop-blur-xl hover:border-orange-500/30 hover:shadow-[0_0_25px_rgba(249,115,22,0.1)] transition-all duration-300 group"
          >
            <span className="text-xs sm:text-sm font-bold text-orange-400 uppercase tracking-widest block font-mono">
              TECHNOLOGIES
            </span>
            <span className="text-sm sm:text-base font-bold text-white block mt-2 leading-snug">
              React · Node · MongoDB
            </span>
            <span className="text-xs sm:text-sm text-white/60 block mt-1">
              Django · Tailwind · AI
            </span>
          </motion.div>

          {/* Card 4: Location */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-5 md:p-6 rounded-2xl bg-zinc-950/60 border border-white/10 backdrop-blur-xl hover:border-orange-500/30 hover:shadow-[0_0_25px_rgba(249,115,22,0.1)] transition-all duration-300 group"
          >
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-orange-400 uppercase tracking-widest font-mono">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              <span>LOCATION</span>
            </div>
            <span className="text-sm sm:text-base font-bold text-white block mt-2 leading-snug">
              India
            </span>
            <span className="text-xs text-white/60 block mt-1">
              Open to Remote Opportunities
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
