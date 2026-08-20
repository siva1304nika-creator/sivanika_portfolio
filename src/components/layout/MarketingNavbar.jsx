import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Sparkles, ArrowLeft, Menu, X } from "lucide-react";
import { useRouter } from "../../context/RouterContext";

const marketingNavItems = [
  { label: "Overview", id: "marketing-hero" },
  { label: "Team", id: "team" },
  { label: "Services", id: "services" },
  { label: "Workflow", id: "workflow" },
  { label: "Tools", id: "tools" },
  { label: "Case Studies", id: "case-studies" },
  { label: "Why Us", id: "why-us" },
  { label: "Contact", id: "marketing-contact" },
];

export default function MarketingNavbar() {
  const [active, setActive] = useState("marketing-hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const { navigate } = useRouter();

  const itemRefs = useRef({});
  const listRef = useRef(null);

  const handleScroll = (id) => {
    setActive(id);
    setMobileMenuOpen(false);
    if (id === "marketing-hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const updateIndicator = () => {
    const el = itemRefs.current[active];
    const list = listRef.current;

    if (el && list) {
      const left = el.offsetLeft;
      const width = el.offsetWidth;
      setIndicator({ left, width });

      const scrollLeft = el.offsetLeft - list.offsetWidth / 2 + el.offsetWidth / 2;
      list.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [active]);

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

    marketingNavItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 backdrop-blur-xl bg-black/60 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 group text-white/70 hover:text-white transition-colors cursor-pointer"
            title="Back to Developer Portfolio"
          >
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 text-orange-400 transition-all">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-white/50 group-hover:text-orange-400 transition-colors">
              Portfolio
            </span>
          </button>

          <div className="h-4 w-[1px] bg-white/15 hidden sm:block" />

          <div
            onClick={() => handleScroll("marketing-hero")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="font-bold text-sm md:text-base text-white tracking-tight">
              Siva & Madhan <span className="text-orange-400 font-normal">| Growth Agency</span>
            </span>
          </div>
        </div>

        {/* Center Desktop Navigation Pills */}
        <div className="hidden lg:block relative">
          <div className="backdrop-blur-2xl bg-zinc-950/70 border border-white/10 rounded-full px-2 py-1 shadow-lg">
            <ul
              ref={listRef}
              className="relative z-10 flex items-center gap-1 text-xs font-medium text-white/60 select-none"
            >
              {/* Active Pill Indicator */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 h-[75%] rounded-full bg-gradient-to-r from-orange-500 to-orange-700 shadow-md shadow-orange-500/20 pointer-events-none z-[-1]"
                animate={{ left: indicator.left, width: indicator.width }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />

              {marketingNavItems.map((item) => (
                <li
                  key={item.id}
                  ref={(el) => (itemRefs.current[item.id] = el)}
                  onClick={() => handleScroll(item.id)}
                  className={`
                    px-3.5 py-1.5 rounded-full cursor-pointer transition-all duration-300 uppercase tracking-wider text-[11px]
                    ${active === item.id ? "text-white font-semibold" : "hover:text-white hover:bg-white/5"}
                  `}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right CTA / Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScroll("marketing-contact")}
            className="px-4 md:px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold text-xs md:text-sm hover:shadow-[0_0_18px_rgba(249,115,22,0.4)] transition-all cursor-pointer"
          >
            Get Free Audit
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white"
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
          className="lg:hidden mt-4 p-4 rounded-2xl bg-zinc-950/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-2"
        >
          {marketingNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`
                w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors
                ${active === item.id ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" : "text-white/70 hover:bg-white/5 hover:text-white"}
              `}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/10 mt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate("/");
              }}
              className="w-full text-center px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold"
            >
              ← Return to Main Portfolio
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
