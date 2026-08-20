import { motion } from "framer-motion";

const highlights = [
  {
    title: "Full Stack & Mobile Development",
    desc: "Building scalable web & cross-platform mobile solutions using MERN stack, React Native, and Django.",
  },
  {
    title: "AI-Assisted & Vibe Coding",
    desc: "Rapidly converting ideas and requirements into production-quality products using modern AI tools.",
  },
  {
    title: "Automation & Intelligent Workflows",
    desc: "Leveraging tools like n8n, OpenAI API, and smart AI-powered development workflows.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-20 md:py-32 overflow-hidden scroll-mt-24"
    >
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90" />
      
      {/* Background blobs for depth */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-14 md:mb-20 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">Me</span>
          </h2>
          <p className="mt-4 max-w-2xl text-white/60 text-sm sm:text-base md:text-lg leading-relaxed">
            A look into my journey as a developer, AI-assisted vibe coding workflow, and my commitment to
            building high-quality digital products.
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* LEFT — STORY */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, type: "spring", bounce: 0.3 }}
            className="relative p-5 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-white/[0.02] backdrop-blur-2xl border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >
            <p className="text-white/80 leading-relaxed text-base md:text-lg">
              I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-bold">Sivanika S</span>,
              a Software Developer with 1+ year of hands-on experience in designing and building 
              responsive, user-friendly, and <span className="text-white font-medium">AI-assisted web and mobile applications</span>.
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-orange-500/[0.07] border border-orange-500/20 text-white/85 leading-relaxed text-base md:text-lg">
              <span className="text-orange-400 font-semibold">&ldquo;Comfortable working as a &apos;vibe coder,&apos;</span> using AI development tools such as <span className="text-white font-medium">Claude, Claude Code, ChatGPT, Cursor, Lovable, Bolt, and Antigravity</span> to rapidly convert ideas and requirements into working, production-quality products.&rdquo;
            </div>

            <p className="mt-6 text-white/70 leading-relaxed text-base md:text-lg">
              With a strong foundation in <span className="text-white font-medium">MERN stack development</span>, <span className="text-white font-medium">React Native</span>, 
              automation workflows, and cross-browser compatibility, I am passionate about 
              developing scalable solutions that solve real-world problems.
            </p>

            <p className="mt-6 text-white/60 leading-relaxed text-base md:text-lg">
              My technical journey is driven by a desire to continuously improve my skills 
              and stay at the forefront of modern web and mobile technologies like React.js, React Native, Tailwind CSS, 
              Django, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 font-medium">AI-powered development workflows</span>.
            </p>
          </motion.div>

          {/* RIGHT — HIGHLIGHT CARDS */}
          <div className="grid gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative group w-full"
              >
                <div className="relative p-6 md:p-8 rounded-[24px] bg-white/[0.03] backdrop-blur-xl border border-white/10 transition-all duration-500 overflow-hidden group-hover:border-transparent group-hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.2)]">
                  {/* Animated gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 rounded-[24px] border-2 border-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", padding: "2px" }} />
                  
                  {/* Orange accent line */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-[4px] bg-gradient-to-b from-orange-400 to-orange-600 rounded-r-full shadow-[2px_0_10px_rgba(249,115,22,0.6)]" />

                  <h3 className="text-xl md:text-2xl font-bold text-white pl-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-3 pl-4 text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
