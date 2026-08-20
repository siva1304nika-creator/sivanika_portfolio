import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Voc in Software Development",
    school: "Holy Cross College, Trichy",
    period: "April 2025 | CGPA: 7.99",
    type: "Degree",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Government Girls Higher Secondary School, Koothanallur",
    period: "March 2022 | Grade: 60%",
    type: "HSC",
  },
];

const certifications = [
  {
    name: "Full Stack Development",
    issuer: "Nxt Wave Academy",
  },
  {
    name: "Python for Data Science",
    issuer: "NPTEL (2025)",
  },
  {
    name: "Cyber Security",
    issuer: "SkillHacc",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative w-full py-20 md:py-32 overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90" />
      
      {/* Background blobs for depth */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* EDUCATION */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8 md:mb-12 text-center md:text-left"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
                Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Education</span>
              </h2>
              <p className="mt-3 text-white/60 text-sm sm:text-base">My formal academic background and qualifications.</p>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, x: -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="p-6 md:p-8 rounded-[24px] bg-white/[0.03] backdrop-blur-xl border border-white/10 transition-all duration-500 overflow-hidden group-hover:border-transparent group-hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.2)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    <div className="absolute inset-0 rounded-[24px] border-2 border-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", padding: "2px" }} />
                    
                    <span className="inline-block px-3 py-1 text-xs uppercase tracking-widest text-orange-500 bg-orange-500/10 rounded-full font-bold mb-3">
                      {edu.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mt-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-500 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base mt-2 font-medium">{edu.school}</p>
                    <p className="text-orange-400/80 text-xs md:text-sm mt-4 font-semibold">{edu.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center md:text-left"
            >
              <h2 className="text-4xl font-bold text-white tracking-tight">
                Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Certifications</span>
              </h2>
              <p className="mt-4 text-white/60">Specialized training and industry certifications.</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-5">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="relative group"
                >
                  <div className="flex items-center justify-between p-5 md:p-6 rounded-[20px] bg-white/[0.03] backdrop-blur-xl border border-white/10 transition-all duration-500 overflow-hidden group-hover:border-transparent group-hover:shadow-[0_5px_30px_-5px_rgba(249,115,22,0.2)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    <div className="absolute inset-0 rounded-[20px] border-2 border-transparent bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", padding: "2px" }} />
                    
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                        {cert.name}
                      </h3>
                      <p className="text-white/50 text-sm mt-1 font-medium">{cert.issuer}</p>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)] group-hover:scale-150 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
