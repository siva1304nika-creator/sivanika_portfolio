import {
  motion,
  AnimatePresence,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import profileImg from "../../assets/Sivanika_Black.png";
import TiltWrapper from "../TiltWrapper";

const roles = [
  "Software Developer",
  "MERN Stack Developer",
  "Full Stack Engineer",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const canvasRef = useRef(null);

  /* ---------------- Role Rotation ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  /* ---------------- Spotlight ---------------- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /* ---------------- Particle System ---------------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = window.innerWidth < 768;

    const PARTICLE_COUNT = isMobile ? 25 : 60;
    const CONNECT_DISTANCE = isMobile ? 80 : 120;
    const SPEED = isMobile ? 0.3 : 0.6;

    const mouse = { x: null, y: null };

    const particles = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: isMobile ? 2.5 : 2,
    }));

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", resize);
    if (!isMobile) window.addEventListener("mousemove", onMouseMove);

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        /* Draw dot */
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,165,0,0.85)";
        ctx.fill();

        /* Connect nearby dots */
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255,165,0,${
              1 - dist / CONNECT_DISTANCE
            })`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        /* Mouse interaction (desktop only) */
        if (!isMobile && mouse.x && mouse.y) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            p.x += dx / dist;
            p.y += dy / dist;
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (!isMobile) window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 pb-20 px-4 scroll-mt-24"
    >
      {/* ... (dots/glow/spotlight code) ... */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* 🔮 Soft background glow */}
      <div
        className="
          absolute -top-40 left-1/2 -translate-x-1/2
          w-[600px] h-[600px]
          bg-gradient-to-r from-orange-400/20 to-pink-400/20
          blur-[140px]
          hidden md:block
        "
      />

      {/* 🖱️ Mouse spotlight (desktop only) */}
      <motion.div
        className="hidden md:block pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(
            400px at ${mouseX.get()}px ${mouseY.get()}px,
            rgba(255,165,0,0.15),
            transparent 70%
          )`,
        }}
      />

      <div className="container mx-auto px-4 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h1
            className="
              text-5xl md:text-7xl lg:text-8xl
              font-semibold tracking-tight
              bg-gradient-to-r from-white to-white/70
              bg-clip-text text-transparent
            "
          >
            Sivanika S
          </h1>

          {/* Role animation */}
          <div className="mt-6 h-8 md:h-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.6 }}
                className="relative inline-block text-lg md:text-xl text-white/70"
              >
                {roles[index]}
                <span
                  className="
                    absolute left-0 -bottom-1 w-full h-[2px]
                    bg-gradient-to-r from-orange-400 to-pink-400
                  "
                />
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="
              mt-12 px-10 py-3 rounded-full
              bg-white text-black font-medium transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
            "
          >
            View Work
          </motion.button>

          <div className="mt-8 md:hidden">
            <p className="text-white/30 text-[10px] tracking-widest uppercase">
              swipe for interaction
            </p>
          </div>
        </motion.div>

        {/* IMAGE CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex-1 relative group w-full max-w-[320px] md:max-w-[450px]"
        >
          {/* Decorative gradients behind image */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/10 to-pink-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
          <div className="absolute -inset-1 bg-gradient-to-tr from-orange-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <TiltWrapper maxRotation={10} zTranslate={20}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl h-full w-full">
              <img 
                src={profileImg} 
                alt="Sivanika S" 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100"
                style={{ transform: "translateZ(30px)" }}
              />
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/5 opacity-30 pointer-events-none" style={{ transform: "translateZ(40px)" }} />
            </div>
          </TiltWrapper>
          
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-4 md:-bottom-10 md:-right-8 bg-zinc-900/60 backdrop-blur-xl border border-white/10 px-5 py-4 rounded-2xl hidden sm:block"
          >
            <div className="flex flex-col items-center">
              <span className="text-orange-400 font-bold text-2xl leading-none">1+</span>
              <span className="text-white/50 text-[9px] uppercase tracking-wider mt-1">Years Projects</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase animate-pulse">
          move mouse to explore
        </p>
      </div>
    
    </section>
     
  );
}
