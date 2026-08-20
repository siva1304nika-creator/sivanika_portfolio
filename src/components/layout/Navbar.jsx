import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Command, Menu, X } from "lucide-react";
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
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 md:px-10 py-3 sm:py-4 transition-all duration-300 pointer-events-none"
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-2xl transition-all duration-500 pointer-events-auto ${
            isScrolled
              ? "bg-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.9)]"
              : "bg-black/40 backdrop-blur-xl border border-white/[0.08]"
          }`}
        >
          {/* Brand Logo */}
          <div
            onClick={() => handleScroll("home")}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none flex-shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-orange-500/40 bg-zinc-950/80 flex items-center justify-center text-orange-500 font-extrabold text-sm sm:text-base shadow-[0_0_15px_rgba(249,115,22,0.3)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] group-hover:scale-105 transition-all">
              S
            </div>
            <div
              className="text-xs xs:text-sm sm:text-base text-white font-normal whitespace-nowrap tracking-wide"
              style={{
                fontFamily: "'Michroma', sans-serif",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              SIVANIKA <span className="text-white">S</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`relative py-1.5 text-xs font-bold tracking-widest uppercase transition-colors duration-300 cursor-pointer ${
                    isActive
                      ? "text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}

                  {/* Active Orange Underline with Center Glowing Dot */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavDotIndicator"
                      className="absolute -bottom-1 left-0 right-0 flex items-center justify-center"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    >
                      <div className="relative w-full flex items-center justify-center">
                        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_8px_#f97316]" />
                        <div className="absolute w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]" />
                      </div>
                    </motion.div>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: ⌘ K Command Palette & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setPaletteOpen(true)}
              className="relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all text-zinc-300 hover:text-white text-xs font-mono group cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              title="Command Palette (⌘K)"
            >
              {/* Notification orange dot */}
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
              <Command className="w-3.5 h-3.5 text-orange-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-[11px] font-medium text-zinc-400 group-hover:text-white tracking-wide">
                Command Palette
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
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
            className="lg:hidden mt-3 p-4 rounded-2xl bg-black/95 border border-zinc-800 backdrop-blur-2xl shadow-2xl flex flex-col gap-2 max-w-7xl mx-auto pointer-events-auto"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                  active === item.id
                    ? "bg-orange-500/15 text-orange-400 border border-orange-500/30"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-2 border-t border-zinc-800 mt-1 flex flex-col gap-2">
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
