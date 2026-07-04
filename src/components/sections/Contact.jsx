import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full py-32 overflow-hidden scroll-mt-28"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#050505]" />

      {/* Background blobs for depth */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-orange-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-[150px] pointer-events-none" />

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
            Let’s Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Together</span>
          </h2>
          <p className="mt-6 max-w-2xl text-white/60 text-lg">
            Have a project or opportunity in mind? Send a message and I’ll get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="flex flex-col"
          >
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-lg">
              I’m always open to discussing freelance work, exciting collaborations, and full-time opportunities.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-5 p-4 rounded-[20px] bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-colors w-fit pr-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500/10 text-orange-500 text-xl">
                  📍
                </div>
                <div>
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white/90 text-sm font-medium">Koothanallur, Tamil Nadu</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5 p-4 rounded-[20px] bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-colors w-fit pr-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500/10 text-orange-500 text-xl">
                  📞
                </div>
                <div>
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-white/90 text-sm font-medium">+91 99404 40767</p>
                </div>
              </div>
            </div>

            <div className="mt-14 flex gap-4">
              {[
                { icon: FaEnvelope, link: "mailto:sivanika2025@gmail.com" },
                { icon: FaGithub, link: "https://github.com/siva1304nika-creator" },
                { icon: FaLinkedin, link: "https://www.linkedin.com/in/sivanika" },
                { icon: FaWhatsapp, link: "https://wa.me/919940440767" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-black hover:scale-110 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300 text-xl text-white/70"
                >
                  <social.icon />
                </a>
              ))}
            </div>

            <a
              href="resume/Sivanika-Resume.pdf"
              download="Sivanika-Resume.pdf"
              className="mt-12 inline-flex items-center justify-center w-fit gap-3 px-8 py-4 rounded-full bg-transparent border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-500 hover:text-black hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-600/20 blur-[60px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="relative p-8 md:p-10 rounded-[32px] bg-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Form Gradient Border */}
              <div className="absolute inset-0 rounded-[32px] border-2 border-transparent bg-gradient-to-br from-orange-400/50 to-orange-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", padding: "1px" }} />
              
              <div className="grid gap-8">
                <div className="relative group/input">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-transparent border-b border-white/20 focus:border-orange-500 outline-none py-3 text-white placeholder-white/40 transition-colors peer"
                  />
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-orange-400 to-orange-600 peer-focus:w-full transition-all duration-300" />
                </div>

                <div className="relative group/input">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-transparent border-b border-white/20 focus:border-orange-500 outline-none py-3 text-white placeholder-white/40 transition-colors peer"
                  />
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-orange-400 to-orange-600 peer-focus:w-full transition-all duration-300" />
                </div>

                <div className="relative group/input">
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                    className="w-full bg-transparent border-b border-white/20 focus:border-orange-500 outline-none py-3 text-white placeholder-white/40 resize-none transition-colors peer"
                  />
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-orange-400 to-orange-600 peer-focus:w-full transition-all duration-300" />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-4 w-full py-4 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-black font-bold text-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 transition-all duration-300"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {/* STATUS MESSAGES */}
                {status === "success" && (
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-400 text-sm font-medium text-center">
                    Message sent successfully! ✅ I will get back to you soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm font-medium text-center">
                    Failed to send message. Please try again. ❌
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
