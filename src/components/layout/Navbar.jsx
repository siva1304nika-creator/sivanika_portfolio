import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Command, Menu, X, Sparkles } from "lucide-react";
import { useRouter } from "../../context/RouterContext";
import CommandPalette from "./CommandPalette";

const navItems = [
  { label: "HOME", id: "home" },
  { label: "ABOUT", id: "about" },
  { label: "SKILLS", id: "skills" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "PROJECTS", id: "projects" },
  { label: "CONTACT", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { navigate } = useRouter();

  // Scroll detection for navbar background opacity
  useEffect(() => {
    const handleScrollPos = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScrollPos);
    return () => window.removeEventListener("scroll", handleScrollPos);
  }, []);

  // Global shortcut for Command Palette (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleScroll = (id) => {
    setActive(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Auto-highlight section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -35% 0px" }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
      />

      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300"
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between px-5 md:px-7 py-3 rounded-2xl border transition-all duration-500 ${
            isScrolled
              ? "bg-zinc-950/80 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
              : "bg-zinc-950/40 backdrop-blur-xl border-white/[0.08]"
          }`}
        >
          {/* Brand / Logo */}
          <div
            onClick={() => handleScroll("home")}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 font-black text-sm group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] group-hover:scale-105 transition-all">
              S
            </div>
            <div className="font-extrabold tracking-wider text-sm md:text-base text-white">
              SIVANIKA <span className="text-orange-500">S</span>
            </div>
          </div>

          {/* Desktop Navigation Links with subtle orange glow/underline */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wider transition-colors duration-300 uppercase cursor-pointer ${
                    isActive ? "text-white" : "text-white/50 hover:text-white/90"
                  }`}
                >
                  {item.label}

                  {/* Subtle orange glow / underline active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400 shadow-[0_0_10px_rgba(249,115,22,0.8)] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}

            {/* Link to Marketing Agency Page */}
            <button
              onClick={() => navigate("/marketing")}
              className="ml-2 px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-lg bg-orange-500/10 border border-orange-500/25 text-orange-400 hover:bg-orange-500/20 hover:border-orange-500/50 transition-all cursor-pointer flex items-center gap-1"
            >
              <span>MARKETING</span>
            </button>
          </nav>

          {/* Right Action: ⌘ K Command Palette button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPaletteOpen(true)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all text-white/70 hover:text-white text-xs font-mono group cursor-pointer"
            >
              <Command className="w-3.5 h-3.5 text-orange-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-[11px] font-medium text-white/60 group-hover:text-white/90">
                Command Palette
              </span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-[10px] text-white/70 font-semibold shadow-inner">
                ⌘K
              </kbd>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-3 p-4 rounded-2xl bg-zinc-950/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-2 max-w-7xl mx-auto"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                  active === item.id
                    ? "bg-orange-500/15 text-orange-400 border border-orange-500/30"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-2 border-t border-white/10 mt-1 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/marketing");
                }}
                className="w-full text-left px-4 py-2.5 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider flex items-center justify-between"
              >
                <span>Digital Marketing Agency</span>
              </button>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
