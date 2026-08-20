import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Home,
  User,
  Cpu,
  Briefcase,
  FolderGit2,
  Mail,
  FileDown,
  TrendingUp,
  ExternalLink,
  Command,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useRouter } from "../../context/RouterContext";

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const { navigate } = useRouter();

  const commands = [
    {
      category: "Navigation",
      items: [
        {
          id: "home",
          label: "Home",
          description: "Jump to introduction and hero section",
          icon: Home,
          action: () => {
            navigate("/", "home");
            onClose();
          },
        },
        {
          id: "about",
          label: "About Me",
          description: "Read background, developer philosophy & tech journey",
          icon: User,
          action: () => {
            navigate("/", "about");
            onClose();
          },
        },
        {
          id: "skills",
          label: "Skills & AI Tools",
          description: "Explore tech stack, AI workflows & vibe coding tools",
          icon: Cpu,
          action: () => {
            navigate("/", "skills");
            onClose();
          },
        },
        {
          id: "experience",
          label: "Experience",
          description: "Professional timeline and work history",
          icon: Briefcase,
          action: () => {
            navigate("/", "experience");
            onClose();
          },
        },
        {
          id: "projects",
          label: "Featured Projects",
          description: "Browse full stack, web applications and AI projects",
          icon: FolderGit2,
          action: () => {
            navigate("/", "projects");
            onClose();
          },
        },
        {
          id: "marketing",
          label: "Digital Marketing Agency Page",
          description: "View SEO, Meta/Google Ads & Growth Marketing services",
          icon: TrendingUp,
          badge: "New",
          action: () => {
            navigate("/marketing");
            onClose();
          },
        },
        {
          id: "contact",
          label: "Contact",
          description: "Get in touch for freelance, full-time or collaborations",
          icon: Mail,
          action: () => {
            navigate("/", "contact");
            onClose();
          },
        },
      ],
    },
    {
      category: "Actions & Socials",
      items: [
        {
          id: "resume",
          label: "Download Resume",
          description: "Get the latest official PDF resume of Sivanika S",
          icon: FileDown,
          action: () => {
            const link = document.createElement("a");
            link.href = "/resume/Sivanika-Resume.pdf";
            link.download = "Sivanika-Resume.pdf";
            link.click();
            onClose();
          },
        },
        {
          id: "github",
          label: "GitHub Profile",
          description: "github.com/siva1304nika-creator",
          icon: FaGithub,
          action: () => {
            window.open("https://github.com/siva1304nika-creator", "_blank");
            onClose();
          },
        },
        {
          id: "linkedin",
          label: "LinkedIn Profile",
          description: "linkedin.com/in/sivanika",
          icon: FaLinkedin,
          action: () => {
            window.open("https://www.linkedin.com/in/sivanika", "_blank");
            onClose();
          },
        },
        {
          id: "whatsapp",
          label: "WhatsApp Chat",
          description: "Direct message on +91 99404 40767",
          icon: FaWhatsapp,
          action: () => {
            window.open("https://wa.me/919940440767", "_blank");
            onClose();
          },
        },
      ],
    },
  ];

  // Flatten filtered list
  const filteredList = commands.reduce((acc, section) => {
    const matched = section.items.filter(
      (item) =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    if (matched.length > 0) {
      acc.push({ category: section.category, items: matched });
    }
    return acc;
  }, []);

  const allItems = filteredList.flatMap((s) => s.items);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (allItems.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev === 0 ? allItems.length - 1 : prev - 1
        );
      } else if (e.key === "Enter" && allItems[selectedIndex]) {
        e.preventDefault();
        allItems[selectedIndex].action();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, allItems, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 md:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Palette Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative w-full max-w-2xl rounded-2xl bg-zinc-950/90 border border-orange-500/30 shadow-[0_0_50px_rgba(249,115,22,0.15)] backdrop-blur-2xl overflow-hidden z-10"
          >
            {/* Top Glow Ambient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />

            {/* Input Header */}
            <div className="relative flex items-center px-5 py-4 border-b border-white/10">
              <Search className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command or search sections..."
                className="w-full bg-transparent text-white placeholder-white/40 text-sm md:text-base outline-none font-medium"
              />
              <div className="flex items-center gap-1.5 ml-2">
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/50">
                  ESC
                </span>
              </div>
            </div>

            {/* Results List */}
            <div className="max-h-[60vh] overflow-y-auto p-3 scrollbar-hide space-y-4">
              {allItems.length === 0 ? (
                <div className="py-12 text-center text-white/40 text-sm">
                  No commands found matching "{query}"
                </div>
              ) : (
                filteredList.map((group) => (
                  <div key={group.category} className="space-y-1">
                    <div className="px-3 py-1 text-[11px] font-semibold text-orange-400/70 uppercase tracking-wider font-mono">
                      {group.category}
                    </div>

                    {group.items.map((item) => {
                      const globalIdx = allItems.findIndex(
                        (i) => i.id === item.id
                      );
                      const isSelected = globalIdx === selectedIndex;
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.id}
                          onClick={item.action}
                          onMouseEnter={() => setSelectedIndex(globalIdx)}
                          className={`flex items-center justify-between px-3.5 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? "bg-gradient-to-r from-orange-500/15 to-orange-500/5 border border-orange-500/30 text-white"
                              : "hover:bg-white/[0.03] text-white/70 border border-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            <div
                              className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                                isSelected
                                  ? "bg-orange-500/20 text-orange-400"
                                  : "bg-white/5 text-white/50"
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm text-white">
                                  {item.label}
                                </span>
                                {item.badge && (
                                  <span className="px-2 py-0.2 rounded-full text-[9px] font-bold bg-orange-500/20 border border-orange-500/40 text-orange-400 uppercase tracking-wider">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-white/40 truncate">
                                {item.description}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 pl-2">
                            {isSelected && (
                              <ArrowRight className="w-4 h-4 text-orange-400 animate-pulse" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))
              )}
            </div>

            {/* Footer Help */}
            <div className="px-4 py-2.5 bg-black/60 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40 font-mono">
              <div className="flex items-center gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>ESC Close</span>
              </div>
              <div className="flex items-center gap-1 text-orange-400/80 font-sans text-xs">
                <Sparkles className="w-3 h-3" />
                <span>AI-Assisted Portfolio</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
