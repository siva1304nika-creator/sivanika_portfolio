import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const itemRefs = useRef({});
  const listRef = useRef(null);

  const handleScroll = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // ✅ Update indicator (robust version using offsetLeft)
  const updateIndicator = () => {
    const el = itemRefs.current[active];
    const list = listRef.current;

    if (el && list) {
      const left = el.offsetLeft;
      const width = el.offsetWidth;

      setIndicator({ left, width });

      // ✅ Center active item in the scrollable list
      const scrollLeft = el.offsetLeft - list.offsetWidth / 2 + el.offsetWidth / 2;
      list.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [active]);

  // ✅ Auto-highlight on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" } // Balanced margins
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        fixed z-50
        top-6
        left-1/2 -translate-x-1/2
        w-fit max-w-[95vw]
      "
    >
      <div
        className="
          relative
          backdrop-blur-2xl bg-zinc-950/40
          border border-white/10
          rounded-full
          shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]
          overflow-hidden
        "
      >
        <ul
          ref={listRef}
          className="
            relative z-10
            flex items-center
            gap-1 md:gap-4
            p-1.5 md:p-2
            text-xs md:text-sm font-medium text-white/50
            overflow-x-auto scrollbar-hide
            whitespace-nowrap
            select-none
          "
        >
          {/* 🔥 ACTIVE PILL INDICATOR (Moved inside the scrollable UL) */}
          <motion.div
            className="
              absolute top-1/2 -translate-y-1/2
              h-[75%]
              rounded-full
              bg-gradient-to-r from-orange-500 to-orange-700
              shadow-lg shadow-orange-500/20
              pointer-events-none z-[-1]
            "
            animate={{ left: indicator.left, width: indicator.width }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />

          {navItems.map((item) => (
            <li
              key={item.id}
              ref={(el) => (itemRefs.current[item.id] = el)}
              onClick={() => handleScroll(item.id)}
              className={`
                px-4 py-2 md:px-6 md:py-2.5
                rounded-full
                cursor-pointer transition-all duration-300 uppercase tracking-tighter
                ${active === item.id ? "text-white" : "hover:text-white/80 hover:bg-white/5"}
              `}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
