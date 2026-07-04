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
  FaNodeJs
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiVite,
  SiDjango,
  SiMongodb,
  SiN8N,
} from "react-icons/si";

const skills = [
  { name: "HTML5 / CSS3", level: 98, icon: <FaHtml5 /> },
  { name: "JavaScript", level: 88, icon: <FaJs /> },
  { name: "Tailwind / Bootstrap", level: 80, icon: <SiTailwindcss /> },
  { name: "React / MERN", level: 85, icon: <FaReact /> },
  { name: "Node.js / Express", level: 80, icon: <FaNodeJs /> },
  { name: "Python / Django", level: 75, icon: <SiDjango /> },
  { name: "MongoDB / MySQL", level: 75, icon: <SiMongodb /> },
  { name: "Git / VS Code", level: 75, icon: <FaGitAlt /> },
  { name: "UI / UX (Figma)", level: 50, icon: <SiFigma /> },
  { name: "Automation (n8n)", level: 45, icon: <SiN8N /> },
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
          className="mb-24 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">Skills</span>
          </h2>
          <p className="mt-6 max-w-2xl text-white/60 text-lg">
            Tools, technologies, and frameworks I use to craft modern,
            responsive, and high-performance digital experiences.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
              className="relative group w-full"
            >
              <TiltWrapper maxRotation={15} zTranslate={20}>
                <div className="relative p-6 flex flex-col items-center justify-center rounded-[24px] bg-white/[0.03] backdrop-blur-xl border border-white/10 transition-all duration-500 overflow-hidden group-hover:border-transparent group-hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.3)] min-h-[160px] h-full" style={{ transform: "translateZ(10px)" }}>
                  {/* Animated gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 rounded-[24px] border-2 border-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", padding: "2px" }} />
                  
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-500 shadow-[0_0_15px_rgba(249,115,22,0)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]" style={{ transform: "translateZ(30px)" }}>
                    <span className="text-3xl text-white/70 group-hover:text-orange-500 transition-colors duration-300">
                      {skill.icon}
                    </span>
                  </div>
                  
                  <h3 className="text-sm md:text-base font-semibold text-center text-white/90 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-500 transition-colors duration-300" style={{ transform: "translateZ(20px)" }}>
                    {skill.name}
                  </h3>
                  
                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transform: "translateZ(15px)" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 + 0.5 }}
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
