import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import TiltWrapper from "../TiltWrapper";

const projects = [
  {
    title: "SRT Convertor",

    short: "SRT Converter Web Application",
    desc: "A AI based web application developed to share and manage moral stories. Features backend APIs integrated with a dynamic frontend for a seamless user experience.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Express.js", "Anthropic API"],
    image: "/projects/srt.png",
    github: "https://github.com/siva1304nika-creator",
    live: "https://srt-convertor.vercel.app/",
  },
  {
    title: "Moral Mitra",
    short: "Story Sharing Web Application",
    desc: "A full-stack web application developed to share and manage moral stories. Features backend APIs integrated with a dynamic frontend for a seamless user experience.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/virtueverse.png",
    github: "https://github.com/siva1304nika-creator",
    live: "https://moral-frontend.vercel.app/",
  },
  {
    title: "Student-Teacher Portal",
    short: "Academic Communication Platform",
    desc: "A web-based portal facilitating communication between students and teachers. Includes role-based access control, user authentication, and responsive data management.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/portal.png",
    github: "https://github.com/siva1304nika-creator",
    live: "#",
  },
  {
    title: "Restaurant Site",
    short: "Modern Culinary Showcase",
    desc: "A beautiful restaurant website featuring a dynamic menu, reservation system, and integrated WhatsApp contact for easy ordering and inquiries.",
    tech: ["React.js", "Tailwind CSS", "WhatsApp API"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/siva1304nika-creator",
    live: "https://sivanika.github.io/restaurant/",
  },
  {
    title: "Academy Website",
    short: "Responsive Institutional Site",
    desc: "A fully responsive institutional website built during an internship. Focused on clean UI design and ensuring cross-browser compatibility across all devices.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "/projects/academy.png",
    github: "https://github.com/siva1304nika-creator",
    live: "#",
  },
  {
    title: "Interior Designer Portfolio",
    short: "Modern Visual Showcase",
    desc: "A sleek, responsive portfolio for an interior designer. Implemented modern UI/UX patterns and performance optimizations using Tailwind CSS.",
    tech: ["Tailwind CSS", "JavaScript"],
    image: "/projects/interior.png",
    github: "https://github.com/siva1304nika-creator",
    live: "#",
  },
  {
    title: "Personal Portfolio (Django)",
    short: "Dynamic Backend Portfolio",
    desc: "A dynamic portfolio website featuring a backend-integrated contact form and database management for personal branding and project showcase.",
    tech: ["Django", "HTML", "CSS", "JavaScript"],
    image: "/projects/django.png",
    github: "https://github.com/siva1304nika-creator",
    live: "#",
  },
  {
    title: "Telegram AI Chatbot",
    short: "Automation via n8n",
    desc: "An AI-powered chatbot developed using n8n automation workflows. Handles real-time message processing and automated responses via the Telegram API.",
    tech: ["n8n", "Telegram API", "Automation"],
    image: "/projects/chatbot.png",
    github: "https://github.com/siva1304nika-creator",
    live: "#",
  },
  {
    title: "Todo List Application",
    short: "Classic CRUD Tool",
    desc: "A robust CRUD-based application built with a component-based architecture. Implements efficient state management for a smooth user experience.",
    tech: ["React.js", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/siva1304nika-creator",
    live: "#",
  },
  {
    title: "Billing Management System",
    short: "Billing Application",
    desc: "Built a billing application using Django and MySQL for managing invoices and transactions efficiently.",
    tech: ["Django", "MySQL"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/siva1304nika-creator",
    live: "#",
  },
  {
    title: "Webinar Registration Portal",
    short: "Event Management",
    desc: "Developed a webinar registration system using Django to manage user sign-ups and event details.",
    tech: ["Django"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/siva1304nika-creator",
    live: "#",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative w-full py-32 overflow-hidden scroll-mt-28"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90" />
      
      {/* Background blobs for depth */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-orange-600/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Projects</span>
          </h2>
          <p className="mt-6 max-w-2xl text-white/60 text-lg">
            Selected work showcasing my approach to design, interaction, and full-stack engineering.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0.3 }}
              className="relative group w-full cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              <TiltWrapper maxRotation={12} zTranslate={30}>
                <div className="relative rounded-[24px] bg-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:shadow-[0_15px_40px_-10px_rgba(249,115,22,0.3)] h-full">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 rounded-[24px] border-2 border-transparent bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none z-20" style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", padding: "2px" }} />
                  
                  {/* PROJECT IMAGE */}
                  <div className="relative h-56 overflow-hidden" style={{ transform: "translateZ(40px)" }}>
                    <div className="absolute inset-0 bg-orange-500/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                    />

                    {/* ICON OVERLAY */}
                    <div className="absolute inset-0 flex items-center justify-center gap-6 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 z-20">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-white/10 hover:bg-orange-500 hover:text-black hover:scale-110 transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="text-xl" />
                      </a>
                      {project.live && project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 rounded-full bg-white/10 hover:bg-orange-500 hover:text-black hover:scale-110 transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt className="text-lg" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 md:p-8 relative" style={{ transform: "translateZ(20px)" }}>
                    <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-white/60 text-sm md:text-base line-clamp-2">
                      {project.short}
                    </p>
                  </div>
                </div>
              </TiltWrapper>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-6"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-xl w-full p-8 md:p-10 rounded-[32px] bg-[#0f0f0f] border border-white/10 shadow-[0_0_50px_rgba(249,115,22,0.15)] relative overflow-hidden"
            >
              {/* Modal Background Glow */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />
              
              <h3 className="text-3xl font-bold text-white mb-2">
                {activeProject.title}
              </h3>
              
              <p className="text-orange-400 font-medium mb-6">
                {activeProject.short}
              </p>

              <p className="text-white/70 leading-relaxed text-base md:text-lg">
                {activeProject.desc}
              </p>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-xs md:text-sm font-medium rounded-full bg-white/5 border border-white/10 text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <button
                  onClick={() => setActiveProject(null)}
                  className="flex-1 py-3 md:py-4 rounded-full bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
                {activeProject.live && activeProject.live !== "#" && (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 md:py-4 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-black font-bold hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-shadow"
                  >
                    View Live
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
