import { motion } from "framer-motion";
import TiltWrapper from "../TiltWrapper";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaBootstrap,
  FaGitAlt,
  FaNodeJs,
  FaRobot,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiDjango,
  SiMongodb,
  SiN8N,
  SiOpenai,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Sparkles, Cpu, Code2, Smartphone, Terminal, Layers } from "lucide-react";

// Categorized skill groups
const skillCategories = [
  {
    category: "AI-Assisted Development Tools",
    icon: <Sparkles className="w-5 h-5 text-orange-400" />,
    badge: "Featured / Vibe Coding",
    highlight: true,
    skills: [
      "Claude",
      "Claude Code",
      "ChatGPT",
      "Cursor",
      "Lovable",
      "Bolt",
      "Antigravity",
      "AI 3D website builders",
      "n8n Automation",
      "OpenAI API",
    ],
  },
  {
    category: "Frontend Technologies",
    icon: <Smartphone className="w-5 h-5 text-orange-400" />,
    skills: [
      "React Native",
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
    ],
  },
  {
    category: "Backend & Database Technologies",
    icon: <Terminal className="w-5 h-5 text-orange-400" />,
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Django",
      "MongoDB",
      "MySQL",
      "RESTful APIs",
    ],
  },
  {
    category: "Core Competencies & Tools",
    icon: <Layers className="w-5 h-5 text-orange-400" />,
    skills: [
      "AI-Assisted / Vibe Coding",
      "Full-Stack Architecture",
      "Git & GitHub",
      "VS Code",
      "UI / UX (Figma)",
      "Cross-Browser Compatibility",
      "Performance Optimization",
    ],
  },
];

// Interactive Visual Grid
const visualSkills = [
  { name: "AI Tools & Vibe Coding", level: 95, icon: <FaRobot />, category: "AI" },
  { name: "React.js / MERN", level: 90, icon: <FaReact />, category: "Frontend" },
  { name: "React Native", level: 85, icon: <TbBrandReactNative />, category: "Mobile" },
  { name: "JavaScript", level: 88, icon: <FaJs />, category: "Frontend" },
  { name: "HTML5 / CSS3", level: 98, icon: <FaHtml5 />, category: "Frontend" },
  { name: "Tailwind / Bootstrap", level: 90, icon: <SiTailwindcss />, category: "Frontend" },
  { name: "Node.js / Express", level: 82, icon: <FaNodeJs />, category: "Backend" },
  { name: "Python / Django", level: 80, icon: <SiDjango />, category: "Backend" },
  { name: "MongoDB / MySQL", level: 78, icon: <SiMongodb />, category: "Database" },
  { name: "Automation (n8n & AI)", level: 88, icon: <SiN8N />, category: "Automation" },
  { name: "Git / VS Code", level: 85, icon: <FaGitAlt />, category: "Tools" },
  { name: "UI / UX (Figma)", level: 65, icon: <SiFigma />, category: "Design" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-32 overflow-hidden scroll-mt-28"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90" />

      {/* Background blobs for depth */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">Skills</span>
          </h2>
          <p className="mt-6 max-w-2xl text-white/60 text-lg">
            A comprehensive suite of AI development tools, modern frontend & mobile frameworks, backend systems, and core competencies.
          </p>
        </motion.div>

        {/* CATEGORIZED SKILL ROWS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {skillCategories.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div
                className={`relative p-6 md:p-8 rounded-[28px] backdrop-blur-xl border transition-all duration-500 h-full flex flex-col justify-between ${
                  group.highlight
                    ? "bg-orange-500/[0.04] border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.12)] group-hover:border-orange-500/60"
                    : "bg-white/[0.02] border-white/10 group-hover:border-white/20"
                }`}
              >
                {/* Glow & Border mask */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px] -z-10" />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20">
                        {group.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                        {group.category}
                      </h3>
                    </div>
                    {group.badge && (
                      <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/40 animate-pulse">
                        {group.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2.5 mt-4">
                    {group.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
                          group.highlight
                            ? "bg-orange-500/10 text-orange-200 border border-orange-500/30 hover:bg-orange-500/20 hover:border-orange-500/50 hover:text-white"
                            : "bg-white/5 text-white/80 border border-white/10 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-white"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION SUBTITLE */}
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs uppercase tracking-widest text-white/40 font-semibold">
            Interactive Proficiency Grid
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {visualSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, type: "spring", bounce: 0.4 }}
              className="relative group w-full"
            >
              <TiltWrapper maxRotation={15} zTranslate={20}>
                <div
                  className="relative p-5 flex flex-col items-center justify-center rounded-[22px] bg-white/[0.03] backdrop-blur-xl border border-white/10 transition-all duration-500 overflow-hidden group-hover:border-transparent group-hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.3)] min-h-[160px] h-full"
                  style={{ transform: "translateZ(10px)" }}
                >
                  {/* Animated gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  {/* Animated gradient border */}
                  <div
                    className="absolute inset-0 rounded-[22px] border-2 border-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                    style={{
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      padding: "2px",
                    }}
                  />

                  {/* Icon Container */}
                  <div
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-500 shadow-[0_0_15px_rgba(249,115,22,0)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <span className="text-2xl text-white/70 group-hover:text-orange-500 transition-colors duration-300">
                      {skill.icon}
                    </span>
                  </div>

                  <h3
                    className="text-xs md:text-sm font-semibold text-center text-white/90 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-500 transition-colors duration-300"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {skill.name}
                  </h3>

                  {/* Progress Bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transform: "translateZ(15px)" }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: i * 0.05 + 0.3,
                      }}
                      className="h-full bg-gradient-to-r from-orange-400 to-orange-600"
                    />
                  </div>
                </div>
              </TiltWrapper>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
