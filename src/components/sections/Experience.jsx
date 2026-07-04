import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Software Developer",
    company: "Media Wave Technologies",
    location: "Trichy, India",
    period: "Nov 2025 – Present",
    desc: [
      "Develop responsive and scalable web applications using React.js, JavaScript, HTML5, CSS3, Django, and Python.",
      "Collaborate with cross-functional teams to analyze business requirements and deliver technical solutions.",
      "Build reusable UI components and optimize application performance.",
      "Integrate REST APIs and maintain secure, responsive applications.",
      "Participate in code reviews, debugging, testing, and deployment.",
    ],
    tech: ["React.js", "Django", "Python", "JavaScript", "HTML5", "CSS3"],
  },
  {
    role: "Freelance Web Developer",
    company: "Magtan Global (IT)",
    location: "Madurai, India",
    period: "Feb 2026 – April 2026",
    desc: [
      "Successfully developed and delivered 20+ responsive client websites across different business domains.",
      "Built websites using HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS, React.js, and Django.",
      "Customized website designs according to client requirements.",
      "Improved website performance, responsiveness, and cross-browser compatibility.",
      "Fixed bugs and provided post-development support.",
    ],
    tech: ["Tailwind CSS", "React.js", "Bootstrap", "Django"],
  },
  {
    role: "Web Developer Intern",
    company: "Media Wave Technologies",
    location: "Trichy, India",
    period: "Feb 2025",
    desc: [
      "Assisted in developing interactive and responsive websites while working closely with senior developers.",
      "Understood real-time development workflows and improved frontend fundamentals.",
      "Debugged and refined UI components, strengthening problem-solving skills.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    role: "Android App Development Intern",
    company: "DSI Solution",
    location: "Trichy, India",
    period: "Feb 2024",
    desc: [
      "Worked on developing and testing Android applications with a focus on UI design and functional integration.",
      "Learned the basics of mobile app architecture and improved understanding of user interface design.",
      "Tested and debugged applications to ensure smooth performance.",
    ],
    tech: ["Java", "Android Studio", "XML"],
  },
  {
    role: "UI/UX Design Intern",
    company: "Hitakey Infosys",
    location: "Trichy, India",
    period: "Sep 2023",
    desc: [
      "Focused on designing user-friendly interfaces using wireframes and prototyping tools.",
      "Learned design thinking, user behavior, and how to create visually appealing layouts.",
      "Collaborated with developers to transform design ideas into functional user interfaces.",
    ],
    tech: ["Figma", "Wireframing", "Prototyping"],
  },
];

const Card = ({ exp, isLeft, isMobile }) => {
  const initialX = isMobile ? 0 : isLeft ? -50 : 50;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group w-full"
    >
      <div className="relative p-6 md:p-8 rounded-[24px] bg-white/[0.03] backdrop-blur-xl border border-white/10 transition-all duration-500 overflow-hidden group-hover:border-transparent group-hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.2)]">
        {/* Animated gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        {/* Animated gradient border (pseudo-element effect using div) */}
        <div className="absolute inset-0 rounded-[24px] border-2 border-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", padding: "2px" }} />
        
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-500 transition-colors duration-300">
          {exp.role}
        </h3>
        <h4 className="text-lg md:text-xl font-semibold text-orange-500 mb-5">{exp.company}</h4>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-white/60 mb-6 font-medium">
          <span className="flex items-center gap-2">
            <FaCalendarAlt className="text-orange-500" /> {exp.period}
          </span>
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-orange-500" /> {exp.location}
          </span>
        </div>

        <ul className="space-y-3 mb-6">
          {exp.desc.map((item, i) => (
            <li key={i} className="flex items-start text-white/75 text-sm md:text-base leading-relaxed">
              <span className="mr-3 text-orange-500 mt-[4px] text-xs">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
          {exp.tech.map((tech, i) => (
            <span key={i} className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/80 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative w-full py-32 overflow-hidden scroll-mt-28" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90" />

      {/* Background blobs for depth */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-orange-400/5 rounded-full blur-[150px] pointer-events-none" />

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
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">Experience</span>
          </h2>
          <p className="mt-6 max-w-2xl text-white/60 text-lg">
            A chronological journey of my technical contributions, roles, and the impact I've made in building software solutions.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative mt-20">
          {/* Vertical line (base) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full" />
          
          {/* Animated vertical line */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]" 
          />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={i} className="relative flex flex-col md:flex-row items-center justify-between w-full">
                  
                  {/* Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.5, delay: 0.2 }}
                    className="absolute left-8 md:left-1/2 w-12 h-12 -translate-x-1/2 flex items-center justify-center rounded-full bg-black border-2 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.4)] z-10"
                  >
                    {/* Pulsing inner dot */}
                    <div className="absolute inset-0 rounded-full border border-orange-500 animate-ping opacity-30" />
                    <FaBriefcase className="text-orange-500 text-lg" />
                  </motion.div>

                  {/* Desktop Left Side */}
                  <div className={`hidden md:flex w-5/12 justify-end ${isLeft ? "pr-12" : "opacity-0"}`}>
                    {isLeft && <Card exp={exp} isLeft={isLeft} isMobile={false} />}
                  </div>

                  {/* Desktop Right Side */}
                  <div className={`hidden md:flex w-5/12 justify-start ${!isLeft ? "pl-12" : "opacity-0"}`}>
                    {!isLeft && <Card exp={exp} isLeft={isLeft} isMobile={false} />}
                  </div>

                  {/* Mobile Card */}
                  <div className="flex md:hidden w-full pl-24 pr-2 pt-2">
                    <Card exp={exp} isLeft={false} isMobile={true} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
