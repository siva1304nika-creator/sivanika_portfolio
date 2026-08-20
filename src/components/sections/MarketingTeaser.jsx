import { motion } from "framer-motion";
import { Sparkles, ArrowRight, TrendingUp, Search, Megaphone, Target, BarChart3 } from "lucide-react";
import { useRouter } from "../../context/RouterContext";
import TiltWrapper from "../TiltWrapper";

export default function MarketingTeaser() {
  const { navigate } = useRouter();

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <TiltWrapper maxRotation={5} zTranslate={15}>
          <div className="relative rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-14 bg-gradient-to-br from-zinc-900/90 via-zinc-950/80 to-black border border-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Ambient border highlight */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              {/* Left Details */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-6"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Collaborative Agency Services
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display"
                >
                  Looking to Scale Your Online Presence?{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400">
                    Explore Digital Marketing.
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-4 sm:mt-5 text-white/65 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
                >
                  Beyond software engineering, I partner with digital marketing specialists to deliver end-to-end Technical SEO, Google/Meta Ads campaigns, high-converting copy, and ROI analytics for growing businesses.
                </motion.p>

                {/* Feature Pills */}
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {[
                    { label: "Technical & Local SEO", icon: Search },
                    { label: "Meta & Google Ads", icon: Target },
                    { label: "Social Media Growth", icon: Megaphone },
                    { label: "ROI Analytics", icon: BarChart3 },
                  ].map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-white/80 text-xs font-medium"
                    >
                      <Icon className="w-3.5 h-3.5 text-orange-400" />
                      {label}
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <motion.button
                    whileHover={{ scale: 1.05, shadow: "0 0 30px rgba(249, 115, 22, 0.4)" }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => navigate("/marketing")}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold text-base shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:brightness-110 transition-all cursor-pointer"
                  >
                    <span>View Marketing Agency Page</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Right Visual Stats Card */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                      Client Growth Metrics
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <TrendingUp className="w-3 h-3" /> Live Results
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                      <p className="text-2xl font-black text-white">+140%</p>
                      <p className="text-xs text-white/50 mt-1">SEO Organic Traffic</p>
                    </div>
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                      <p className="text-2xl font-black text-orange-400">3.8x</p>
                      <p className="text-xs text-white/50 mt-1">Meta Ads Return (ROI)</p>
                    </div>
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                      <p className="text-2xl font-black text-white">92%</p>
                      <p className="text-xs text-white/50 mt-1">Audit Health Score</p>
                    </div>
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                      <p className="text-2xl font-black text-orange-400">100%</p>
                      <p className="text-xs text-white/50 mt-1">Dedicated Strategy</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 flex items-center justify-between text-xs text-white/60">
                    <span>Team of 2 Specialists</span>
                    <button
                      onClick={() => navigate("/marketing")}
                      className="text-orange-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      Case studies & services <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </TiltWrapper>
      </div>
    </section>
  );
}
