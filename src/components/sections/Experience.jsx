import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaLaptopCode,
  FaCode,
  FaArrowRight,
  FaArrowLeft,
  FaTimes,
} from "react-icons/fa";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Mail,
  Layers,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

// Structured Experience Data
const experiences = [
  {
    id: "software-developer",
    yearLabel: "2025 – Present",
    role: "Software Developer",
    company: "Media Wave Technologies",
    location: "Trichy, Tamil Nadu",
    period: "Nov 2025 – Present",
    isCurrent: true,
    icon: FaBriefcase,
    align: "left",
    summary: [
      "Building responsive web applications and internal tools.",
      "Working with modern technologies to deliver clean and efficient solutions.",
      "Collaborating with the team on product development.",
    ],
    about:
      "As a full-time Software Developer at Media Wave Technologies, I am responsible for designing, developing, and deploying robust full-stack web applications. I focus on creating scalable architecture, highly responsive user interfaces, and seamless API integrations.",
    responsibilities: [
      "Architect and build responsive, accessible web applications using React.js and modern JavaScript standards.",
      "Collaborate in cross-functional agile teams to analyze product requirements and translate them into high-performance features.",
      "Develop and maintain secure backend RESTful APIs using Django and Python.",
      "Conduct regular code reviews, debugging sessions, and performance profiling to ensure optimal code quality.",
      "Optimize frontend asset loading, state management, and core web vitals for seamless user experiences.",
    ],
    achievements: [
      "Successfully launched core enterprise modules, improving operational workflow efficiency by 35%.",
      "Created a reusable UI component library that accelerated frontend development cycles across multiple projects.",
      "Implemented automated error tracking and optimized database query execution times.",
    ],
    tech: ["React", "Node.js", "MongoDB", "Django", "Tailwind", "JavaScript", "REST APIs"],
  },
  {
    id: "freelance-developer",
    yearLabel: "2026",
    role: "Freelance Web Developer",
    company: "Magtan Global (IT)",
    location: "Madurai, India",
    period: "Feb 2026 – Apr 2026",
    isCurrent: false,
    icon: FaLaptopCode,
    align: "right",
    summary: [
      "Successfully developed and delivered 20+ responsive client websites.",
      "Built websites across different business domains.",
      "Focused on clean UI, performance, and mobile responsiveness.",
    ],
    about:
      "Worked as an independent freelance web consultant delivering tailored digital web solutions for Magtan Global (IT) and international clients. Delivered fast, modern, and SEO-optimized web portals that strengthened client brand presence.",
    responsibilities: [
      "Designed and developed custom web portals tailored to diverse client specifications across multiple industries.",
      "Implemented clean, modular CSS architectures using Tailwind CSS, Bootstrap, and vanilla modern styling.",
      "Engineered full-stack features and integrated dynamic contact systems and content management flows.",
      "Ensured full cross-browser compatibility, mobile responsiveness, and high PageSpeed metrics.",
      "Delivered end-to-end client handovers, documentation, and continuous post-launch support.",
    ],
    achievements: [
      "Delivered over 20 client projects with a 100% on-time milestone delivery record and positive client reviews.",
      "Achieved average Google Lighthouse performance scores exceeding 90+ across all delivered client sites.",
      "Built long-term client relationships resulting in repeat development contracts.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React", "Tailwind CSS"],
  },
  {
    id: "web-intern",
    yearLabel: "2025",
    role: "Web Developer Intern",
    company: "Media Wave Technologies",
    location: "Trichy, Tamil Nadu",
    period: "Jun 2025 – Oct 2025",
    isCurrent: false,
    icon: FaCode,
    align: "left",
    summary: [
      "Developed and maintained websites and web applications.",
      "Implemented responsive interfaces using HTML, CSS, and JavaScript.",
      "Learned real-world development workflows and team collaboration.",
    ],
    about:
      "Completed an intensive web development internship at Media Wave Technologies where I strengthened core frontend engineering skills and gained valuable experience working in real-world production codebases.",
    responsibilities: [
      "Assisted senior engineers in implementing responsive layout components and dynamic landing pages.",
      "Wrote modular HTML5, CSS3, and JavaScript code adhering to company design guidelines and clean-code standards.",
      "Fixed UI bugs, identified visual regressions, and improved cross-device responsiveness.",
      "Participated in daily standup meetings, sprint planning, and version control collaboration via Git and GitHub.",
    ],
    achievements: [
      "Refactored legacy UI components, boosting page responsiveness and reducing stylesheet redundancy.",
      "Received recognition for proactive problem-solving, clean code formatting, and quick turnaround times.",
      "Transitioned successfully into a full-time software developer role following performance evaluations.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Django", "Git", "Responsive UI"],
  },
  {
    id: "android-intern",
    yearLabel: "2024",
    role: "Android App Development Intern",
    company: "DSI Solution",
    location: "Trichy, Tamil Nadu",
    period: "Feb 2024",
    isCurrent: false,
    icon: FaLaptopCode,
    align: "right",
    summary: [
      "Worked on developing and testing Android applications with UI & functional integration.",
      "Learned core mobile application architecture, lifecycle methods, and UI patterns.",
      "Tested and debugged applications to ensure smooth mobile performance.",
    ],
    about:
      "Gained hands-on mobile development experience at DSI Solution, contributing to native Android mobile app interfaces and testing app functionality across different screen densities.",
    responsibilities: [
      "Designed and implemented clean XML layouts and responsive Android mobile UI views.",
      "Assisted in Java-based event handling, activity lifecycles, and intent integrations.",
      "Performed unit testing, bug isolation, and performance optimizations on physical and virtual test devices.",
      "Collaborated with senior mobile engineers to adhere to Material Design standards.",
    ],
    achievements: [
      "Successfully built and deployed functional test modules on target Android devices.",
      "Enhanced user experience through clean navigation flows and Material UI components.",
    ],
    tech: ["Java", "Android Studio", "XML", "Mobile UI", "Material Design"],
  },
  {
    id: "uiux-intern",
    yearLabel: "2023",
    role: "UI/UX Design Intern",
    company: "Hitakey Infosys",
    location: "Trichy, Tamil Nadu",
    period: "Sep 2023",
    isCurrent: false,
    icon: FaBriefcase,
    align: "left",
    summary: [
      "Designed user-friendly interfaces using wireframes, user journeys, and prototypes.",
      "Applied design thinking principles to create visually appealing, accessible layouts.",
      "Collaborated with developers to convert high-fidelity Figma designs into UI code.",
    ],
    about:
      "Explored the fundamentals of human-centered design and UI/UX engineering at Hitakey Infosys, crafting intuitive wireframes, component design systems, and interactive clickable prototypes.",
    responsibilities: [
      "Conducted user research, prepared empathy maps, and structured intuitive user flows.",
      "Created wireframes, high-fidelity mockups, and interactive design prototypes in Figma.",
      "Designed comprehensive design style guides including typography, color palettes, and component states.",
      "Collaborated closely with frontend developers to ensure design fidelity during implementation.",
    ],
    achievements: [
      "Designed 3 complete web and mobile prototype flows approved for client development.",
      "Established a consistent design token library that reduced handoff ambiguities.",
    ],
    tech: ["Figma", "Wireframing", "Prototyping", "UI/UX", "User Research", "Design Systems"],
  },
];

export default function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const containerRef = useRef(null);

  // Scroll Progress for Glowing Timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Keyboard navigation & Accessibility for Modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev < experiences.length - 1 ? prev + 1 : prev
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const selectedExp =
    selectedIndex !== null ? experiences[selectedIndex] : null;

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full py-28 md:py-36 bg-[#050505] overflow-hidden scroll-mt-24 selection:bg-orange-500 selection:text-black"
    >
      {/* ================= BACKGROUND DECORATIONS ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Decorative Corner Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/[0.03] rounded-full blur-[160px]" />

        {/* Decorative Dot Grids on Far Sides */}
        <div
          className="hidden xl:block absolute top-1/4 left-8 w-24 h-48 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#f97316 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div
          className="hidden xl:block absolute bottom-1/4 right-8 w-24 h-48 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#f97316 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= 1. SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 md:mb-24 flex flex-col items-center"
        >
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
            <span className="text-[11px] font-bold tracking-widest text-orange-400 uppercase font-mono">
              CAREER PATH
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 drop-shadow-[0_0_25px_rgba(249,115,22,0.4)]">
              Experience
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 max-w-xl text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
            A journey through my professional growth, building impactful digital
            solutions.
          </p>
        </motion.div>

        {/* ================= 2. MAIN TIMELINE LAYOUT ================= */}
        <div className="relative max-w-5xl mx-auto">
          {/* Base Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-[#25262D] -translate-x-1/2 rounded-full pointer-events-none" />

          {/* Animated Glowing Active Timeline Line */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(255,106,0,0.6)] pointer-events-none"
          />

          {/* Timeline Cards Container */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = exp.align === "left";

              return (
                <div
                  key={exp.id}
                  className="relative flex flex-col md:flex-row items-center justify-between w-full group"
                >
                  {/* LEFT SIDE (Desktop) */}
                  <div
                    className={`hidden md:flex w-1/2 ${
                      isLeft
                        ? "justify-end pr-10 lg:pr-12"
                        : "justify-end pr-10 lg:pr-12 items-center"
                    }`}
                  >
                    {isLeft ? (
                      <ExperienceCard
                        exp={exp}
                        onClick={() => setSelectedIndex(index)}
                        align="left"
                      />
                    ) : (
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-[#101116] border border-orange-500/30 text-xs font-mono font-bold text-zinc-300 shadow-[0_0_15px_rgba(0,0,0,0.6)]">
                          {exp.yearLabel}
                        </span>
                        <div className="w-8 h-[1px] bg-orange-500/40" />
                      </div>
                    )}
                  </div>

                  {/* CENTER TIMELINE NODE & CONNECTOR */}
                  <div
                    onClick={() => setSelectedIndex(index)}
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#101116] border-2 border-[#25262D] group-hover:border-orange-500 group-hover:bg-orange-500/10 flex items-center justify-center cursor-pointer transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_20px_rgba(255,106,0,0.6)] group-hover:scale-110"
                  >
                    {/* Glowing Core Dot */}
                    <div className="w-3 h-3 rounded-full bg-zinc-600 group-hover:bg-orange-500 transition-colors shadow-[0_0_8px_rgba(249,115,22,0)] group-hover:shadow-[0_0_10px_#ff6a00]" />
                  </div>

                  {/* RIGHT SIDE (Desktop) */}
                  <div
                    className={`hidden md:flex w-1/2 ${
                      !isLeft
                        ? "justify-start pl-10 lg:pl-12"
                        : "justify-start pl-10 lg:pl-12 items-center"
                    }`}
                  >
                    {!isLeft ? (
                      <ExperienceCard
                        exp={exp}
                        onClick={() => setSelectedIndex(index)}
                        align="right"
                      />
                    ) : (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-orange-500/40" />
                        <span className="px-3 py-1 rounded-full bg-[#101116] border border-orange-500/30 text-xs font-mono font-bold text-zinc-300 shadow-[0_0_15px_rgba(0,0,0,0.6)]">
                          {exp.yearLabel}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* MOBILE VIEW (Single Column Aligned Right of Left Timeline) */}
                  <div className="md:hidden w-full pl-14 pr-2">
                    <ExperienceCard
                      exp={exp}
                      onClick={() => setSelectedIndex(index)}
                      align="mobile"
                      isMobile={true}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= 9. BOTTOM CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 sm:mt-24 p-7 sm:p-9 rounded-[24px] bg-[#101116] border border-[#25262D] hover:border-orange-500/40 transition-all duration-500 shadow-[0_0_40px_-15px_rgba(255,106,0,0.15)] relative overflow-hidden backdrop-blur-xl group"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            {/* Left Info */}
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 flex-shrink-0 shadow-[0_0_15px_rgba(255,106,0,0.2)]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight font-display">
                  Continuously Learning. <span className="text-orange-500">Always Building.</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
                  Open to new opportunities and exciting projects.
                </p>
              </div>
            </div>

            {/* Right Button: Get In Touch */}
            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,106,0,0.35)] hover:shadow-[0_0_35px_rgba(255,106,0,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer group/btn flex-shrink-0 font-display"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
              <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* ================= 8. POPUP DETAILS MODAL ================= */}
      <AnimatePresence>
        {selectedExp && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-2xl bg-[#101116] border border-orange-500/40 rounded-[28px] p-6 sm:p-8 shadow-[0_0_60px_-10px_rgba(255,106,0,0.3)] overflow-hidden flex flex-col max-h-[88vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Ambient Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* Top Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#25262D]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                    <FaBriefcase className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-widest font-mono">
                    EXPERIENCE DETAILS
                  </span>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="w-8 h-8 rounded-xl bg-zinc-900 border border-[#25262D] hover:border-orange-500/50 hover:bg-orange-500/15 text-zinc-400 hover:text-white flex items-center justify-center transition-all cursor-pointer group"
                  title="Close (Esc)"
                >
                  <FaTimes className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Scrollable Modal Content (Scrollbar hidden, scrolling functional) */}
              <div
                className="flex-1 overflow-y-auto scrollbar-hide pr-1 sm:pr-2 py-5 space-y-6"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {/* Title & Organization */}
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                      {selectedExp.role}
                    </h3>
                    {selectedExp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-bold text-emerald-400 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-orange-500 mt-1 font-display">
                    {selectedExp.company}
                  </h4>

                  {/* Metadata Pills */}
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-400 font-medium mt-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-900/90 border border-[#25262D]">
                      <FaCalendarAlt className="text-orange-500 text-xs" />
                      {selectedExp.period}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-900/90 border border-[#25262D]">
                      <FaMapMarkerAlt className="text-orange-500 text-xs" />
                      {selectedExp.location}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-orange-500/40 via-[#25262D] to-transparent" />

                {/* ABOUT THE ROLE */}
                <div>
                  <h5 className="text-xs font-bold text-orange-400 uppercase tracking-widest font-mono mb-2">
                    ABOUT THE ROLE
                  </h5>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
                    {selectedExp.about}
                  </p>
                </div>

                {/* KEY RESPONSIBILITIES */}
                <div>
                  <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-mono mb-3">
                    KEY RESPONSIBILITIES
                  </h5>
                  <ul className="space-y-2.5">
                    {selectedExp.responsibilities.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-zinc-300 text-xs sm:text-sm leading-relaxed"
                      >
                        <span className="mr-2.5 text-orange-500 mt-1 text-xs flex-shrink-0">
                          ✦
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* KEY ACHIEVEMENTS */}
                <div>
                  <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>KEY ACHIEVEMENTS</span>
                  </h5>
                  <ul className="space-y-2.5">
                    {selectedExp.achievements.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-zinc-300 text-xs sm:text-sm leading-relaxed"
                      >
                        <span className="mr-2.5 text-emerald-400 mt-1 text-xs flex-shrink-0">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TECHNOLOGIES */}
                <div>
                  <h5 className="text-xs font-bold text-orange-400 uppercase tracking-widest font-mono mb-3">
                    TECHNOLOGIES
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.tech.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-orange-500/10 border border-orange-500/25 text-orange-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer with Previous / Next navigation */}
              <div className="pt-4 mt-2 border-t border-[#25262D] flex items-center justify-between">
                <button
                  disabled={selectedIndex === 0}
                  onClick={() => setSelectedIndex((prev) => prev - 1)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedIndex === 0
                      ? "opacity-30 cursor-not-allowed text-zinc-600 border border-transparent"
                      : "bg-zinc-900 border border-[#25262D] hover:border-orange-500/50 hover:bg-orange-500/10 text-white"
                  }`}
                >
                  <FaArrowLeft className="w-3 h-3" />
                  <span>Previous</span>
                </button>

                <span className="text-xs font-mono text-zinc-500">
                  {selectedIndex + 1} of {experiences.length}
                </span>

                <button
                  disabled={selectedIndex === experiences.length - 1}
                  onClick={() => setSelectedIndex((prev) => prev + 1)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedIndex === experiences.length - 1
                      ? "opacity-30 cursor-not-allowed text-zinc-600 border border-transparent"
                      : "bg-orange-500 hover:bg-orange-600 text-white shadow-[0_0_15px_rgba(255,106,0,0.4)]"
                  }`}
                >
                  <span>Next</span>
                  <FaArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ================= EXPERIENCE CARD COMPONENT =================
function ExperienceCard({ exp, onClick, align = "left", isMobile = false }) {
  const Icon = exp.icon;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full max-w-lg p-5 sm:p-6 rounded-[22px] bg-[#101116] border border-[#25262D] hover:border-orange-500/50 hover:shadow-[0_0_35px_-5px_rgba(255,106,0,0.25)] backdrop-blur-xl transition-all duration-300 cursor-pointer relative overflow-hidden group text-left"
    >
      {/* Subtle Gradient Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Card Header Row (Role Icon, Titles, Current Badge, Circular Arrow) */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-start gap-3.5">
          {/* Role Icon in rounded square */}
          <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 flex-shrink-0 group-hover:scale-105 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(255,106,0,0.1)]">
            <Icon className="w-5 h-5" />
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors font-display leading-tight">
                {exp.role}
              </h3>
              {exp.isCurrent && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-bold text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Current
                </span>
              )}
            </div>

            <p className="text-sm font-semibold text-orange-500 mt-0.5 font-display">
              {exp.company}
            </p>
          </div>
        </div>

        {/* Circular Arrow Action Button */}
        <div className="w-8 h-8 rounded-full bg-zinc-900/90 border border-[#25262D] group-hover:border-orange-500/60 group-hover:bg-orange-500 group-hover:text-black text-orange-400 flex items-center justify-center transition-all duration-300 shadow-sm flex-shrink-0">
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </div>
      </div>

      {/* Metadata Row (Duration & Location) */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#A1A1AA] font-medium mb-3.5 font-mono">
        <span className="inline-flex items-center gap-1.5">
          <FaCalendarAlt className="text-orange-500 text-[11px]" />
          {exp.period}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <FaMapMarkerAlt className="text-orange-500 text-[11px]" />
          {exp.location}
        </span>
      </div>

      {/* Preview Summary Bullet Points */}
      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
        {exp.summary.map((point, idx) => (
          <li key={idx} className="flex items-start">
            <span className="mr-2 text-orange-500 mt-1 text-[10px] flex-shrink-0">
              •
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Technology Chips Row */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#25262D]/80">
        <div className="flex flex-wrap gap-1.5">
          {exp.tech.slice(0, 5).map((skill, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-zinc-900/90 border border-[#25262D] text-zinc-300 group-hover:border-orange-500/30 group-hover:text-orange-200 transition-colors"
            >
              {skill}
            </span>
          ))}
          {exp.tech.length > 5 && (
            <span className="px-2 py-1 text-[11px] font-medium rounded-lg bg-zinc-900/60 border border-transparent text-zinc-500 font-mono">
              +{exp.tech.length - 5}
            </span>
          )}
        </div>

        {/* View Details Text Link */}
        <span className="text-xs font-semibold text-orange-400 group-hover:text-orange-300 transition-colors flex items-center gap-1 font-mono">
          View Details
          <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </motion.div>
  );
}
