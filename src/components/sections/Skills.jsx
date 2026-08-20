import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiPostman,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiNetlify,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiOpenai,
  SiTypescript,
  SiBootstrap,
  SiRedux,
  SiN8N,
} from "react-icons/si";
import { TbBrandVscode, TbBrandReactNative } from "react-icons/tb";
import {
  Monitor,
  Server,
  Database,
  Wrench,
  Download,
  ArrowRight,
  Package,
  Code2,
  X,
  Search,
  CheckCircle2,
} from "lucide-react";

// Tab Categories Data
const categoriesData = {
  frontend: {
    id: "frontend",
    name: "FRONTEND",
    icon: Monitor,
    primarySkills: [
      {
        name: "React.js",
        level: 90,
        status: "Advanced",
        icon: FaReact,
        color: "#00D8FF",
      },
      {
        name: "HTML5",
        level: 95,
        status: "Advanced",
        icon: FaHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        level: 90,
        status: "Advanced",
        icon: FaCss3Alt,
        color: "#1572B6",
      },
      {
        name: "Tailwind CSS",
        level: 85,
        status: "Advanced",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
    ],
    otherSkills: [
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "Redux / Context API", level: 65 },
      { name: "TypeScript", level: 70 },
      { name: "RESTful APIs", level: 90 },
      { name: "Bootstrap", level: 80 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  backend: {
    id: "backend",
    name: "BACKEND",
    icon: Server,
    primarySkills: [
      {
        name: "Node.js",
        level: 85,
        status: "Advanced",
        icon: FaNodeJs,
        color: "#68A063",
      },
      {
        name: "Express.js",
        level: 82,
        status: "Advanced",
        icon: SiExpress,
        color: "#FFFFFF",
      },
      {
        name: "Python",
        level: 80,
        status: "Advanced",
        icon: FaPython,
        color: "#3776AB",
      },
      {
        name: "REST APIs",
        level: 90,
        status: "Advanced",
        icon: Code2,
        color: "#F97316",
      },
    ],
    otherSkills: [
      { name: "Django Framework", level: 78 },
      { name: "Authentication (JWT)", level: 85 },
      { name: "Server-Side Logic", level: 82 },
      { name: "API Rate Limiting", level: 75 },
      { name: "CRUD Microservices", level: 80 },
      { name: "Middleware & CORS", level: 88 },
    ],
  },
  database: {
    id: "database",
    name: "DATABASE",
    icon: Database,
    primarySkills: [
      {
        name: "MongoDB",
        level: 88,
        status: "Advanced",
        icon: SiMongodb,
        color: "#47A248",
      },
      {
        name: "MySQL",
        level: 80,
        status: "Advanced",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "PostgreSQL",
        level: 75,
        status: "Intermediate",
        icon: SiPostgresql,
        color: "#4169E1",
      },
      {
        name: "Firebase DB",
        level: 82,
        status: "Advanced",
        icon: SiFirebase,
        color: "#FFCA28",
      },
    ],
    otherSkills: [
      { name: "Database Schema Design", level: 85 },
      { name: "Mongoose ODM", level: 90 },
      { name: "Query Optimization", level: 78 },
      { name: "Data Aggregations", level: 80 },
      { name: "Firestore Realtime", level: 82 },
      { name: "Cloud Storage Integration", level: 85 },
    ],
  },
  tools: {
    id: "tools",
    name: "TOOLS & OTHERS",
    icon: Wrench,
    primarySkills: [
      {
        name: "Git & GitHub",
        level: 90,
        status: "Advanced",
        icon: FaGithub,
        color: "#FFFFFF",
      },
      {
        name: "VS Code",
        level: 95,
        status: "Expert",
        icon: TbBrandVscode,
        color: "#007ACC",
      },
      {
        name: "Figma (UI/UX)",
        level: 80,
        status: "Advanced",
        icon: SiFigma,
        color: "#F24E1E",
      },
      {
        name: "AI & Vibe Coding",
        level: 95,
        status: "Expert",
        icon: SiOpenai,
        color: "#10A37F",
      },
    ],
    otherSkills: [
      { name: "Postman Testing", level: 88 },
      { name: "Docker Basics", level: 70 },
      { name: "n8n Automation", level: 85 },
      { name: "Netlify / Vercel Deploy", level: 90 },
      { name: "Claude & Cursor Coding", level: 95 },
      { name: "Performance Auditing", level: 85 },
    ],
  },
};

// Bottom Tools & Platforms
const toolsAndPlatforms = [
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
  { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
];

// All comprehensive skills list for modal
const allSkillsList = [
  { category: "Frontend", name: "React.js", level: "90%", icon: FaReact, color: "#00D8FF" },
  { category: "Frontend", name: "HTML5", level: "95%", icon: FaHtml5, color: "#E34F26" },
  { category: "Frontend", name: "CSS3", level: "90%", icon: FaCss3Alt, color: "#1572B6" },
  { category: "Frontend", name: "Tailwind CSS", level: "85%", icon: SiTailwindcss, color: "#06B6D4" },
  { category: "Frontend", name: "JavaScript (ES6+)", level: "85%", icon: FaReact, color: "#F7DF1E" },
  { category: "Frontend", name: "TypeScript", level: "70%", icon: SiTypescript, color: "#3178C6" },
  { category: "Frontend", name: "Bootstrap", level: "80%", icon: SiBootstrap, color: "#7952B3" },
  { category: "Frontend", name: "Redux Toolkit", level: "65%", icon: SiRedux, color: "#764ABC" },
  { category: "Backend", name: "Node.js", level: "85%", icon: FaNodeJs, color: "#68A063" },
  { category: "Backend", name: "Express.js", level: "82%", icon: SiExpress, color: "#FFFFFF" },
  { category: "Backend", name: "Python", level: "80%", icon: FaPython, color: "#3776AB" },
  { category: "Database", name: "MongoDB", level: "88%", icon: SiMongodb, color: "#47A248" },
  { category: "Database", name: "MySQL", level: "80%", icon: SiMysql, color: "#4479A1" },
  { category: "Database", name: "PostgreSQL", level: "75%", icon: SiPostgresql, color: "#4169E1" },
  { category: "Database", name: "Firebase", level: "82%", icon: SiFirebase, color: "#FFCA28" },
  { category: "AI & Vibe Coding", name: "Claude / Claude Code", level: "95%", icon: SiOpenai, color: "#FF6B00" },
  { category: "AI & Vibe Coding", name: "Cursor / Lovable / Bolt", level: "95%", icon: SiOpenai, color: "#FF6B00" },
  { category: "AI & Vibe Coding", name: "n8n Workflow Automation", level: "85%", icon: SiN8N, color: "#EA4B71" },
  { category: "Tools & Platforms", name: "Git & GitHub", level: "90%", icon: FaGithub, color: "#FFFFFF" },
  { category: "Tools & Platforms", name: "VS Code", level: "95%", icon: TbBrandVscode, color: "#007ACC" },
  { category: "Tools & Platforms", name: "Figma", level: "80%", icon: SiFigma, color: "#F24E1E" },
  { category: "Tools & Platforms", name: "Postman", level: "88%", icon: SiPostman, color: "#FF6C37" },
  { category: "Tools & Platforms", name: "Docker", level: "70%", icon: SiDocker, color: "#2496ED" },
  { category: "Tools & Platforms", name: "Netlify / Vercel", level: "90%", icon: SiNetlify, color: "#00C7B7" },
];

// Circular Progress Meter Component
function CircularProgress({ percentage }) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-20 h-20 flex items-center justify-center my-2">
      <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 80 80">
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#27272a"
          strokeWidth="6"
          fill="transparent"
        />
        <motion.circle
          cx="40"
          cy="40"
          r={radius}
          stroke="url(#orange_meter_grad)"
          strokeWidth="6"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          strokeLinecap="round"
          fill="transparent"
          style={{
            filter: "drop-shadow(0 0 6px rgba(249, 115, 22, 0.7))",
          }}
        />
        <defs>
          <linearGradient id="orange_meter_grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-base tracking-tight">{percentage}%</span>
      </div>
    </div>
  );
}

// 3D Isometric Stack Graphic Component
function IsometricGraphic() {
  return (
    <div className="relative w-full aspect-square max-w-[260px] mx-auto my-2 flex items-center justify-center">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-orange-600/5 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Orbital dotted rings */}
      <div className="absolute inset-2 rounded-full border border-dashed border-orange-500/20 animate-[spin_40s_linear_infinite] pointer-events-none" />
      <div className="absolute inset-8 rounded-full border border-orange-500/10 pointer-events-none" />

      {/* Floating Orange Sparks */}
      <div className="absolute top-6 left-6 w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_#f97316] animate-ping" />
      <div className="absolute top-12 right-6 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]" />
      <div className="absolute bottom-10 left-10 w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_#f97316]" />
      <div className="absolute bottom-12 right-12 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]" />

      {/* Isometric SVG Illustration */}
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full relative z-10 filter drop-shadow-[0_15px_30px_rgba(249,115,22,0.35)]"
        initial={{ y: 0 }}
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="plateTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1f1f23" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>

          <linearGradient id="plateOrangeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff781f" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>

          <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7c2d12" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Outer Orbit Line */}
        <ellipse
          cx="100"
          cy="125"
          rx="80"
          ry="40"
          fill="none"
          stroke="#ea580c"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.3"
        />

        {/* Base Glowing Platform / Shadow */}
        <ellipse cx="100" cy="142" rx="55" ry="24" fill="#f97316" opacity="0.15" />

        {/* BOTTOM LAYER */}
        <g transform="translate(0, 32)">
          {/* Side edges */}
          <path
            d="M50 100 L100 125 L150 100 L150 108 L100 133 L50 108 Z"
            fill="url(#edgeGrad)"
          />
          {/* Top Face */}
          <path
            d="M100 75 L150 100 L100 125 L50 100 Z"
            fill="url(#plateTopGrad)"
            stroke="#f97316"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />
        </g>

        {/* MIDDLE LAYER */}
        <g transform="translate(0, 16)">
          {/* Side edges */}
          <path
            d="M50 100 L100 125 L150 100 L150 108 L100 133 L50 108 Z"
            fill="url(#edgeGrad)"
          />
          {/* Top Face */}
          <path
            d="M100 75 L150 100 L100 125 L50 100 Z"
            fill="url(#plateTopGrad)"
            stroke="#f97316"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
        </g>

        {/* TOP LAYER */}
        <g transform="translate(0, 0)">
          {/* Glow beneath top plate */}
          <ellipse cx="100" cy="100" rx="42" ry="20" fill="#ea580c" opacity="0.3" />

          {/* Side edges */}
          <path
            d="M50 100 L100 125 L150 100 L150 108 L100 133 L50 108 Z"
            fill="#f97316"
          />
          {/* Top Face */}
          <path
            d="M100 75 L150 100 L100 125 L50 100 Z"
            fill="#121318"
            stroke="#f97316"
            strokeWidth="2"
          />

          {/* Glowing </> Code Symbol */}
          <text
            x="100"
            y="105"
            fill="#ff7a18"
            fontSize="18"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="monospace"
            letterSpacing="2"
            style={{
              filter: "drop-shadow(0 0 6px #ff7a18)",
            }}
          >
            &lt;/&gt;
          </text>
        </g>
      </motion.svg>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [showAllModal, setShowAllModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const currentCategory = categoriesData[activeTab];

  const filteredSkills = allSkillsList.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="skills" className="relative w-full py-24 bg-black overflow-hidden scroll-mt-24">
      {/* Background Star Dots & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/12 w-2 h-2 rounded-full bg-orange-500/40 shadow-[0_0_12px_#f97316]" />
        <div className="absolute top-3/4 left-1/6 w-1.5 h-1.5 rounded-full bg-orange-400/30 shadow-[0_0_8px_#f97316]" />
        <div className="absolute top-1/3 right-1/12 w-2 h-2 rounded-full bg-orange-500/40 shadow-[0_0_10px_#f97316]" />
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-orange-400/30 shadow-[0_0_8px_#f97316]" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-orange-300/40" />

        {/* Large smooth background radial glows */}
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-orange-600/[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN 2-COLUMN SECTION (Left Card + Right Tech Matrix) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* ================= LEFT COLUMN: MY EXPERTISE CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col justify-between p-7 md:p-9 rounded-[28px] bg-[#0c0d12]/90 border border-zinc-800/80 shadow-[0_0_40px_-15px_rgba(249,115,22,0.15)] relative overflow-hidden backdrop-blur-xl group hover:border-orange-500/30 transition-all duration-500"
          >
            {/* Ambient inner card glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
                <span className="text-[11px] font-bold tracking-widest text-orange-400 uppercase">
                  MY EXPERTISE
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.2] mb-4">
                Turning ideas into{" "}
                <span className="text-orange-500 drop-shadow-[0_0_25px_rgba(249,115,22,0.4)]">
                  powerful
                </span>{" "}
                <span className="text-orange-500 drop-shadow-[0_0_25px_rgba(249,115,22,0.4)]">
                  digital solutions
                </span>
                .
              </h3>

              {/* Subtitle */}
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
                I blend creativity with code to build scalable, efficient and
                user-centered applications.
              </p>
            </div>

            {/* 3D Isometric Graphic */}
            <div className="my-auto py-2">
              <IsometricGraphic />
            </div>

            {/* Download Resume Button */}
            <div className="pt-4">
              <a
                href="/resume/Sivanika-Resume.pdf"
                download="Sivanika-Resume.pdf"
                className="w-full py-3.5 px-6 rounded-xl border border-orange-500/30 bg-zinc-950/80 hover:bg-orange-500/15 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_0_25px_-5px_rgba(249,115,22,0.25)] hover:border-orange-500/70 hover:shadow-[0_0_35px_rgba(249,115,22,0.4)] group"
              >
                <Download className="w-4 h-4 text-orange-400 group-hover:translate-y-0.5 transition-transform duration-300" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: TECHNOLOGIES MATRIX ================= */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            {/* Header + VIEW ALL SKILLS Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-orange-500 text-xs font-bold uppercase tracking-wider mb-1.5">
                  <span className="text-orange-400">&lt;/&gt;</span>
                  <span>MY SKILLS</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Technologies I work with
                </h2>
              </div>

              <button
                onClick={() => setShowAllModal(true)}
                className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-orange-500/10 hover:border-orange-500/50 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group"
              >
                <span>VIEW ALL SKILLS</span>
                <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Category Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80">
              {Object.values(categoriesData).map((cat) => {
                const Icon = cat.icon;
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex-1 min-w-[130px] flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-orange-500/20 via-orange-600/20 to-orange-500/10 text-orange-400 border border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.25)]"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900/60 border border-transparent"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-orange-400" : "text-zinc-400"}`} />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* 4 Primary Skill Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4"
              >
                {currentCategory.primarySkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="p-5 sm:p-6 rounded-2xl bg-[#0c0d12]/90 border border-zinc-800/80 flex flex-col items-center justify-between text-center hover:border-orange-500/40 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.25)] transition-all duration-300 group"
                    >
                      {/* Skill Icon */}
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300">
                        <Icon
                          className="w-10 h-10"
                          style={{ color: skill.color }}
                        />
                      </div>

                      {/* Skill Name */}
                      <h4 className="text-white font-bold text-sm sm:text-base mt-2 mb-1 group-hover:text-orange-400 transition-colors">
                        {skill.name}
                      </h4>

                      {/* Circular Gauge */}
                      <CircularProgress percentage={skill.level} />

                      {/* Subtitle Badge */}
                      <span className="text-orange-400/90 text-xs font-semibold tracking-wide">
                        {skill.status}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* OTHER TECHNICAL SKILLS (2-column progress bars) */}
            <div className="p-6 md:p-7 rounded-2xl bg-[#0c0d12]/70 border border-zinc-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-5">
                OTHER TECHNICAL SKILLS
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                {currentCategory.otherSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-3"
                  >
                    {/* Bullet + Label */}
                    <div className="flex items-center gap-2 min-w-[150px] sm:min-w-[170px]">
                      <span className="text-orange-500 text-base leading-none">•</span>
                      <span className="text-zinc-300 text-xs sm:text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex-1 h-1.5 rounded-full bg-zinc-800 overflow-hidden mx-2">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.8)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: index * 0.08,
                        }}
                      />
                    </div>

                    {/* Percentage */}
                    <span className="text-zinc-400 text-xs font-bold w-9 text-right">
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ROW: TOOLS & PLATFORMS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 p-6 md:p-8 rounded-[24px] bg-[#0c0d12]/90 border border-zinc-800/80 shadow-[0_0_40px_-15px_rgba(249,115,22,0.15)] relative overflow-hidden backdrop-blur-xl group hover:border-orange-500/30 transition-all duration-500"
        >
          {/* Header */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 mb-6">
            <Package className="w-4 h-4 text-orange-400" />
            <span>TOOLS &amp; PLATFORMS</span>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4 items-center justify-items-center">
            {toolsAndPlatforms.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="flex flex-col items-center justify-center gap-3 w-full py-3 px-2 rounded-xl hover:bg-white/[0.03] transition-all duration-300 group/tool cursor-pointer"
                >
                  <div className="w-10 h-10 flex items-center justify-center group-hover/tool:scale-115 transition-transform duration-300">
                    <Icon
                      className="w-7 h-7 filter drop-shadow-[0_0_8px_rgba(249,115,22,0)] group-hover/tool:drop-shadow-[0_0_12px_rgba(249,115,22,0.6)] transition-all"
                      style={{ color: tool.color }}
                    />
                  </div>
                  <span className="text-xs text-zinc-300 font-medium group-hover/tool:text-white transition-colors text-center">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* ================= ALL SKILLS MODAL ================= */}
      <AnimatePresence>
        {showAllModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-[#0c0d12] border border-zinc-800 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>COMPLETE TECH STACK</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    All Skills &amp; Competencies
                  </h3>
                </div>
                <button
                  onClick={() => setShowAllModal(false)}
                  className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 hover:bg-orange-500/10 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="my-5 relative">
                <Search className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search any technology, framework or tool..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/50"
                />
              </div>

              {/* Skills Grid List */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {filteredSkills.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between hover:border-orange-500/40 hover:bg-zinc-900/40 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800">
                            <Icon className="w-5 h-5" style={{ color: item.color }} />
                          </div>
                          <div>
                            <p className="text-white text-sm font-semibold">{item.name}</p>
                            <span className="text-[11px] text-zinc-500">{item.category}</span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-lg">
                          {item.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-5 mt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-500">
                  Showing {filteredSkills.length} of {allSkillsList.length} total skills
                </span>
                <button
                  onClick={() => setShowAllModal(false)}
                  className="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs tracking-wider uppercase transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
