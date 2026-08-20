import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  Search, Cpu, MapPin, Key, FileText, Link as LinkIcon, Activity,
  Share2, Target, Megaphone,
  BookOpen, Mail, BarChart3, TrendingUp, Users, CheckCircle2,
  Workflow, ArrowRight, ExternalLink, ShieldCheck, Compass, Sparkles,
  Award, HeartHandshake, PhoneCall, Code, Layers, Zap, Check
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import TiltWrapper from "../TiltWrapper";
import { useRouter } from "../../context/RouterContext";

// --- ANIMATED COUNTER COMPONENT ---
function Counter({ value, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const numPart = parseInt(value.replace(/[^0-9]/g, ""), 10);
      const controls = animate(0, numPart, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setCount(Math.floor(latest));
        },
        onComplete: () => {
          setCount(numPart);
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  const suffix = value.replace(/[0-9]/g, "");
  return <span ref={ref}>{count}{suffix}</span>;
}

// --- DATA ---
const teamMembers = [
  {
    name: "Sivanika S",
    role: "Technical SEO & Web Lead",
    desc: "A Software Developer who builds responsive, lightning-fast web applications. Specializes in Technical SEO, site speed optimization, schema architecture, and technical audits to guarantee your site is perfectly structured for crawler visibility.",
    skills: ["Technical SEO", "React & Django", "Speed Optimization", "Schema & Metadata"],
    image: "/assets/sivanika_photo.jpg"
  },
  {
    name: "Madhan Babu S",
    role: "Lead Growth & Strategy Marketer",
    desc: "A digital strategist focused on scaling businesses online. Specializes in high-ROI PPC campaign execution, social media management, brand positioning, and advanced analytics tracking to convert traffic into revenue.",
    skills: ["Meta & Google Ads", "Social Media Strategy", "Content Marketing", "Analytics & ROI Tracking"],
    image: "/assets/madhan.jpg"
  }
];

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    category: "SEO & Search",
    desc: "Comprehensive strategy to improve your site's visibility and rank higher for high-value search terms.",
    icon: Search
  },
  {
    title: "Technical SEO",
    category: "SEO & Search",
    desc: "Optimizing website performance, crawlability, indexing, schema markup, and speed for search engines.",
    icon: Cpu
  },
  {
    title: "Local SEO",
    category: "SEO & Search",
    desc: "Enhancing local search presence to rank on map packs and attract nearby customers.",
    icon: MapPin
  },
  {
    title: "Keyword Research",
    category: "SEO & Search",
    desc: "Finding high-traffic, low-competition keywords aligned with user intent and buyer journeys.",
    icon: Key
  },
  {
    title: "On-Page SEO",
    category: "SEO & Search",
    desc: "Optimizing headers, meta tags, URL structure, images, and content relevance for better indexability.",
    icon: FileText
  },
  {
    title: "Off-Page SEO",
    category: "SEO & Search",
    desc: "Building authoritative backlinks and digital PR campaigns to increase domain trust and authority.",
    icon: LinkIcon
  },
  {
    title: "Website SEO Audit",
    category: "SEO & Search",
    desc: "Deep analysis of technical errors, content quality, and SEO opportunities with actionable fixes.",
    icon: Activity
  },
  {
    title: "Social Media Marketing",
    category: "Social & Ads",
    desc: "Organic growth and community-building strategies across major social channels.",
    icon: Share2
  },
  {
    title: "Facebook & Instagram Marketing",
    category: "Social & Ads",
    desc: "Engaging post designs, video strategy, and hyper-targeted organic outreach.",
    icon: FaFacebook
  },
  {
    title: "LinkedIn Marketing",
    category: "Social & Ads",
    desc: "B2B marketing, networking strategies, and thought leadership positioning for companies.",
    icon: FaLinkedin
  },
  {
    title: "Google Ads",
    category: "Social & Ads",
    desc: "Search, display, and shopping PPC campaigns structured to maximize conversion rates.",
    icon: Target
  },
  {
    title: "Meta Ads",
    category: "Social & Ads",
    desc: "Highly targeted paid advertising campaigns across Facebook and Instagram feeds and reels.",
    icon: Megaphone
  },
  {
    title: "Content Marketing",
    category: "Strategy & Outreach",
    desc: "Creating high-value blogs, copy, and resources that attract, engage, and convert readers.",
    icon: BookOpen
  },
  {
    title: "Email Marketing",
    category: "Strategy & Outreach",
    desc: "Automated nurture sequences, newsletter designs, and personalized promotions to retain leads.",
    icon: Mail
  },
  {
    title: "Analytics & Reporting",
    category: "Strategy & Outreach",
    desc: "Custom data dashboards showing ROI, conversion attribution, and clear traffic growth metrics.",
    icon: BarChart3
  }
];

const steps = [
  {
    title: "Business Analysis",
    desc: "We deep-dive into your business model, target audience, and current digital presence to understand the foundation.",
    icon: Search
  },
  {
    title: "Market Research",
    desc: "Analyzing competitors, search trends, and consumer behavior to identify untapped growth opportunities.",
    icon: Compass
  },
  {
    title: "Strategy Planning",
    desc: "Crafting a bespoke digital marketing plan with clear objectives, defined channels, and key KPIs.",
    icon: Workflow
  },
  {
    title: "Campaign Execution",
    desc: "Launching high-converting ad campaigns, optimization of on-page elements, and publishing engaging content.",
    icon: Target
  },
  {
    title: "Performance Tracking",
    desc: "Monitoring analytics dashboards, keyword positions, click rates, and conversions in real-time.",
    icon: Activity
  },
  {
    title: "Reporting & Continuous Optimization",
    desc: "Providing crystal-clear transparent reports and continuously refining ads and content for maximum ROI.",
    icon: TrendingUp
  }
];

const tools = [
  { name: "Google Analytics", category: "Analytics" },
  { name: "Google Search Console", category: "Analytics" },
  { name: "Google Trends", category: "Analytics" },
  { name: "Meta Business Suite", category: "Ads & Social" },
  { name: "Google Ads", category: "Ads & Social" },
  { name: "Google Keyword Planner", category: "SEO Tools" },
  { name: "Semrush", category: "SEO Tools" },
  { name: "Ahrefs", category: "SEO Tools" },
  { name: "Ubersuggest", category: "SEO Tools" },
  { name: "Yoast SEO", category: "SEO Tools" },
  { name: "Rank Math", category: "SEO Tools" },
  { name: "WordPress", category: "Creative & AI" },
  { name: "Canva", category: "Creative & AI" },
  { name: "Figma", category: "Creative & AI" },
  { name: "ChatGPT", category: "Creative & AI" }
];

const projects = [
  {
    title: "AI Tools Website SEO",
    short: "Organic Traffic Growth & Keyword Optimization",
    desc: "Optimized a major directory of AI tools to rank for highly competitive terms. We implemented a complete programmatic SEO structure, cleared crawl errors, conducted in-depth keyword analysis, and launched content strategies that increased search visibility.",
    image: "/projects/ai_tools_seo.png",
    services: ["Technical SEO", "Keyword Research", "On-Page SEO", "Off-Page SEO"],
    tech: ["Semrush", "Google Search Console", "Rank Math", "Ahrefs", "WordPress"],
    results: ["140% Increase in Organic Traffic", "Top 3 rankings for 45+ target keywords", "Page speed score increased from 42 to 92"]
  },
  {
    title: "Social Media Management",
    short: "Brand Scaling & Meta Ad Funnel Integration",
    desc: "Managed end-to-end social media channels for direct-to-consumer brands. We combined highly interactive visual content calendars, community building, and customized high-conversion Meta ads to drive direct product sales and audience acquisition.",
    image: "/projects/social_media_mgmt.png",
    services: ["Social Media Marketing", "Meta Ads", "Facebook & Instagram Marketing", "Content Marketing"],
    tech: ["Meta Business Suite", "Canva", "Figma", "ChatGPT", "Google Analytics"],
    results: ["3.8x ROI on Facebook/Instagram Ads", "25k+ New followers in 4 months", "Engagement rate increased by 280%"]
  },
  {
    title: "Google Business Profile Optimization",
    short: "Local Pack Domination & Lead Generation",
    desc: "Helped multiple local service companies boost their inquiries by capturing high-intent local search queries. Optimized Google Business Profiles, managed citation building, improved review acquisition workflows, and conducted technical local audits.",
    image: "/projects/gbp_optimization.png",
    services: ["Local SEO", "Technical SEO", "Analytics & Reporting", "Website SEO Audit"],
    tech: ["Google Search Console", "Ubersuggest", "Google Trends", "Google Keyword Planner", "Yoast SEO"],
    results: ["220% More Phone Calls & Directions", "Ranked #1-3 in Map Pack locally", "Organic local impressions doubled"]
  }
];

const stats = [
  { value: "2", label: "Marketing Professionals", icon: Users },
  { value: "10+", label: "Websites Optimized", icon: Cpu },
  { value: "5+", label: "SEO Projects", icon: Search },
  { value: "20+", label: "Marketing Campaigns", icon: Target },
  { value: "15+", label: "Businesses Supported", icon: HeartHandshake },
  { value: "95%", label: "Client Satisfaction", icon: Award }
];

const highlights = [
  {
    title: "Collaborative Team Approach",
    desc: "We work as a tight-knit duo, combining web development and marketing strategy to cover all bases seamlessly.",
    icon: Users
  },
  {
    title: "Data-Driven Marketing",
    desc: "No guesswork. We rely on actual analytics, click-through data, and conversion rates to make decisions.",
    icon: BarChart3
  },
  {
    title: "SEO Expertise",
    desc: "Deep understanding of search engine algorithms, crawlers, semantic structures, and indexing optimization.",
    icon: Compass
  },
  {
    title: "Performance Marketing",
    desc: "High-ROI PPC and paid ad structures designed specifically to turn impressions into paying customers.",
    icon: Target
  },
  {
    title: "Web Development + Marketing",
    desc: "We don't just drive traffic; we optimize your website's performance, layout, speed, and UX to capture it.",
    icon: Code
  },
  {
    title: "Transparent Communication",
    desc: "Regular dashboard reports, direct slack/email access, and clear expectations without agency jargon.",
    icon: ShieldCheck
  },
  {
    title: "Customized Strategies",
    desc: "Bespoke marketing campaigns tailored specifically for your target demographic, industry, and scale.",
    icon: Sparkles
  },
  {
    title: "Long-Term Growth Focus",
    desc: "Building sustainable, compounding organic traffic channels that deliver customers month after month.",
    icon: TrendingUp
  }
];

// ── Dashboard Card helper ──────────────────────────────────────────────────
function DashCard({ children, delay = 0, glowColor = "rgba(249,115,22,0.1)", orange = false, className = "", floatDuration = 4 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className={`relative rounded-[18px] overflow-hidden ${className}`}
    >
      {/* Float + hover layer */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 }}
        whileHover={{ y: -10, scale: 1.025 }}
        className={`relative p-4 rounded-[18px] backdrop-blur-xl border
                    transition-all duration-300 cursor-default h-full
                    ${orange
                      ? "bg-gradient-to-br from-orange-600/20 via-orange-500/10 to-transparent border-orange-500/30 hover:shadow-[0_0_28px_rgba(249,115,22,0.3)]"
                      : "bg-white/[0.04] border-white/10 hover:border-white/20 hover:shadow-[0_0_22px_rgba(249,115,22,0.14)]"}`}
        style={{ boxShadow: `0 4px 24px ${glowColor}` }}
      >
        {/* inner glow spot */}
        <div
          className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl pointer-events-none opacity-50"
          style={{ background: glowColor }}
        />
        <div className="relative z-10">{children}</div>
      </motion.div>
    </motion.div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────


export default function DigitalMarketing() {
  const { navigate } = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const [inquiryStatus, setInquiryStatus] = useState("");
  const formRef = useRef(null);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquiryStatus("sending");
    setTimeout(() => {
      setInquiryStatus("success");
      if (formRef.current) formRef.current.reset();
    }, 800);
  };

  // Filter services based on category selection
  const filteredServices = activeCategory === "All" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section
      id="marketing-hero"
      className="relative w-full overflow-hidden bg-black text-white pt-24 pb-20 scroll-mt-24"
    >
      {/* Background blobs for depth */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[30%] right-10 w-[450px] h-[450px] bg-orange-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-20 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />

      {/* ================= HERO SECTION ================= */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col items-start text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-widest mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Growth Partners
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
            >
              Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400">
                Marketing
              </span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 text-xl md:text-2xl font-semibold text-white/75"
            >
              Growing Businesses Together
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-5 text-white/55 text-base md:text-lg leading-relaxed max-w-lg"
            >
              We are a team of two digital marketing professionals dedicated to
              helping businesses build a strong online presence. By combining our
              expertise in SEO, paid advertising, content strategy, and
              analytics, we create data-driven solutions that drive sustainable
              business growth.
            </motion.p>

            {/* Service Badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {[
                { label: "SEO",          icon: Search   },
                { label: "Google Ads",   icon: Target   },
                { label: "Meta Ads",     icon: Megaphone },
                { label: "Social Media", icon: Share2   },
                { label: "Analytics",   icon: BarChart3 },
                { label: "Local SEO",   icon: MapPin    },
              ].map(({ label, icon: Icon }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full
                             bg-white/[0.03] backdrop-blur-sm
                             border border-orange-500/30
                             text-orange-300 text-xs font-semibold
                             hover:bg-orange-500/10 hover:border-orange-400/60
                             hover:shadow-[0_0_12px_rgba(249,115,22,0.25)]
                             transition-all duration-300 cursor-default"
                >
                  <Check className="w-3 h-3 text-orange-400" />
                  <Icon className="w-3 h-3" />
                  {label}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                href="#marketing-contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600
                           text-black font-bold text-sm
                           hover:shadow-[0_0_22px_rgba(249,115,22,0.45)]
                           transition-all duration-300"
              >
                Partner With Us
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 rounded-full bg-white/5 border border-white/15
                           hover:bg-white/10 hover:border-white/25
                           transition-all duration-300 font-semibold text-sm text-white"
              >
                Explore Services
              </motion.a>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — Dashboard Mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="relative w-full hidden lg:flex items-center justify-center"
          >
            {/* Radial orange glow behind dashboard */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[420px] h-[420px] rounded-full bg-orange-500/8 blur-[80px]" />
            </div>

            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: "linear-gradient(rgba(249,115,22,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,0.5) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* ── Dashboard Shell ── */}
            <div className="relative w-full max-w-[480px] flex flex-col gap-3 z-10">

              {/* Row 1 — top two cards */}
              <div className="grid grid-cols-2 gap-3">
                {/* Card 1 — SEO Score */}
                <DashCard delay={0.2} glowColor="rgba(34,197,94,0.15)">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">SEO Score</span>
                    <div className="flex items-center gap-1 text-emerald-400 text-[10px] font-bold">
                      <TrendingUp className="w-3 h-3" /> +6
                    </div>
                  </div>
                  {/* Circular progress */}
                  <div className="relative flex items-center justify-center w-20 h-20 mx-auto">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                      <circle
                        cx="18" cy="18" r="14" fill="none"
                        stroke="url(#seoGrad)" strokeWidth="3"
                        strokeDasharray="87.96 12.04"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="seoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#34d399" />
                          <stop offset="100%" stopColor="#10b981" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="absolute text-lg font-extrabold text-white">92<span className="text-xs">%</span></span>
                  </div>
                  <p className="text-center text-[11px] text-white/40 mt-2">Excellent Score</p>
                </DashCard>

                {/* Card 2 — Conversion Rate */}
                <DashCard delay={0.3} glowColor="rgba(249,115,22,0.15)">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">Conv. Rate</span>
                    <div className="flex items-center gap-1 text-orange-400 text-[10px] font-bold">
                      <TrendingUp className="w-3 h-3" /> +0.3%
                    </div>
                  </div>
                  {/* Donut */}
                  <div className="relative flex items-center justify-center w-20 h-20 mx-auto">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                      <circle
                        cx="18" cy="18" r="14" fill="none"
                        stroke="url(#convGrad)" strokeWidth="3"
                        strokeDasharray="30.16 57.8"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="convGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#fb923c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="absolute text-lg font-extrabold text-white">4.8<span className="text-xs">%</span></span>
                  </div>
                  <p className="text-center text-[11px] text-white/40 mt-2">Industry avg 2.1%</p>
                </DashCard>
              </div>

              {/* Card 3 — Organic Traffic (wide) */}
              <DashCard delay={0.35} glowColor="rgba(99,102,241,0.1)" className="col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">Organic Traffic</span>
                    <p className="text-2xl font-extrabold text-white mt-0.5">12.5K <span className="text-sm font-semibold text-white/40">/ mo</span></p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +18%
                  </span>
                </div>
                {/* Mini line chart bars */}
                <div className="flex items-end gap-1 h-12">
                  {[30,42,38,56,50,68,62,80,75,92,88,100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm transition-all duration-300"
                      style={{
                        height: `${h}%`,
                        background: i >= 9
                          ? "linear-gradient(to top, #f97316, #fb923c)"
                          : "rgba(249,115,22,0.25)",
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[9px] text-white/25 font-medium">
                  <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
                </div>
              </DashCard>

              {/* Row 3 — Google Rankings + Social Growth */}
              <div className="grid grid-cols-2 gap-3">
                {/* Card 4 — Google Rankings */}
                <DashCard delay={0.45} glowColor="rgba(59,130,246,0.1)">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">Rankings</span>
                    <Compass className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <p className="text-lg font-extrabold text-white mb-3">Top 10 <span className="text-white/30 font-normal text-xs">keywords</span></p>
                  <div className="space-y-2">
                    {[
                      { kw: "SEO Agency", pos: 88 },
                      { kw: "Google Ads", pos: 76 },
                      { kw: "Local SEO",  pos: 92 },
                    ].map(({ kw, pos }) => (
                      <div key={kw}>
                        <div className="flex justify-between text-[10px] text-white/40 mb-0.5">
                          <span>{kw}</span><span>#{Math.round((100 - pos) / 10) + 1}</span>
                        </div>
                        <div className="h-1 rounded-full bg-white/5">
                          <div
                            className="h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
                            style={{ width: `${pos}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </DashCard>

                {/* Card 5 — Social Growth */}
                <DashCard delay={0.5} glowColor="rgba(168,85,247,0.1)">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">Social</span>
                    <Share2 className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-xl font-extrabold text-white">+320</span>
                    <span className="text-xs text-white/40">followers</span>
                  </div>
                  {/* Bar chart */}
                  <div className="flex items-end gap-1 h-10">
                    {[40,65,50,80,70,90,85].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                          height: `${h}%`,
                          background: i === 6
                            ? "linear-gradient(to top,#a855f7,#c084fc)"
                            : "rgba(168,85,247,0.25)",
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-[10px] text-purple-400/70 mt-2 font-semibold">+22% vs last month</p>
                </DashCard>
              </div>

              {/* Card 6 — Lead Generation (full width orange) */}
              <DashCard delay={0.55} glowColor="rgba(249,115,22,0.2)" orange>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-orange-300/70 uppercase tracking-wider">Lead Generation</span>
                    <p className="text-3xl font-extrabold text-white mt-1">128 <span className="text-base font-semibold text-orange-200/60">Qualified Leads</span></p>
                    <p className="text-[11px] text-orange-300/50 mt-1">This Month • 67% from Organic</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-orange-400/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-300" />
                  </div>
                </div>
              </DashCard>

            </div>{/* end dashboard shell */}
          </motion.div>
        </div>
      </div>

      {/* ================= TEAM SECTION ================= */}
      <div id="team" className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A Team of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 font-extrabold">2 Professionals</span>
            </h2>
            <ul className="space-y-6 text-white/70">
              <li className="flex gap-3 items-start">
                <div className="mt-1 p-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Full Collaboration</h4>
                  <p className="text-sm mt-1">We collaborate on every project to deliver unified, high-quality digital marketing solutions.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="mt-1 p-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Values We Believe In</h4>
                  <p className="text-sm mt-1">Transparency, creativity, and measurable results guide all of our client work and campaign builds.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="mt-1 p-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Client-Centric Mindset</h4>
                  <p className="text-sm mt-1">We work closely with clients to understand their business goals and create customized marketing strategies.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                whileHover={{ y: -6 }}
                className="relative p-6 rounded-[24px] bg-white/[0.02] backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-orange-500/30 hover:shadow-[0_15px_30px_rgba(249,115,22,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-sm font-semibold text-orange-400 mt-1">{member.role}</p>
                  <p className="text-sm text-white/60 mt-4 leading-relaxed">{member.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-white/5 border border-white/15 rounded-md text-[10px] text-white/80 font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= STATISTICS SECTION ================= */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 my-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-[20px] bg-white/[0.02] backdrop-blur-xl border border-white/5 text-center flex flex-col items-center justify-center group hover:border-orange-500/20 hover:shadow-[0_10px_20px_rgba(249,115,22,0.05)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight">
                  <Counter value={stat.value} />
                </span>
                <span className="text-xs text-white/50 mt-2 font-medium leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ================= SERVICES SECTION ================= */}
      <div id="services" className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 scroll-mt-24">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Services</span>
            </h2>
            <p className="mt-4 max-w-2xl text-white/60 text-lg">
              We offer dynamic, custom digital marketing operations designed to expand your customer acquisition channels.
            </p>
          </motion.div>

          {/* Categories Tab */}
          <div className="flex flex-wrap gap-2 justify-center mt-10 p-1.5 rounded-full bg-zinc-950/80 border border-white/10 w-fit">
            {["All", "SEO & Search", "Social & Ads", "Strategy & Outreach"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                  activeCategory === category 
                    ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white shadow-md shadow-orange-500/10" 
                    : "text-white/50 hover:text-white/80 hover:bg-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  layout
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative"
                >
                  <TiltWrapper maxRotation={10} zTranslate={20}>
                    <div className="relative p-8 rounded-[24px] bg-white/[0.02] backdrop-blur-xl border border-white/10 h-full flex flex-col justify-between transition-all duration-500 group-hover:border-transparent group-hover:shadow-[0_15px_40px_-10px_rgba(249,115,22,0.2)] overflow-hidden">
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                      <div className="absolute inset-0 rounded-[24px] border-2 border-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", padding: "2px" }} />

                      <div>
                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-500 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-sm md:text-base text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                          {service.desc}
                        </p>
                      </div>

                      <div className="mt-8 flex items-center gap-1.5 text-xs text-orange-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </TiltWrapper>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ================= HOW WE WORK SECTION ================= */}
      <div id="workflow" className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 scroll-mt-24">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              How We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Work
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-white/60 text-lg">
              Our systematic approach ensures efficiency, collaboration, and high-ROI campaign growth.
            </p>
          </motion.div>
        </div>

        {/* ── Timeline Container ── */}
        <div className="relative">

          {/* ── Vertical centre line — desktop ── */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 pointer-events-none"
               style={{ background: "linear-gradient(to bottom, rgba(249,115,22,0.55) 0%, rgba(249,115,22,0.25) 60%, transparent 100%)" }}
          />

          {/* ── Vertical left line — mobile only ── */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-[2px] pointer-events-none"
               style={{ background: "linear-gradient(to bottom, rgba(249,115,22,0.55) 0%, rgba(249,115,22,0.25) 60%, transparent 100%)" }}
          />

          {/* ── Steps ── */}
          <div className="flex flex-col gap-24 md:gap-28">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isLeft = idx % 2 === 0; // even → card on LEFT desktop

              return (
                <div key={step.title} className="relative">

                  {/* ── Number circle (always on centre line desktop / left line mobile) ── */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
                    className={`
                      absolute z-20 flex items-center justify-center
                      w-11 h-11 rounded-full
                      bg-[#0f0f0f] border-2 border-orange-500/60
                      text-orange-400 font-extrabold text-sm
                      shadow-[0_0_18px_rgba(249,115,22,0.35)]
                      /* mobile: sit on left line */
                      left-0 top-1/2 -translate-y-1/2 -translate-x-[calc(50%-1.25rem)]
                      /* desktop: sit on centre line */
                      md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2
                    `}
                  >
                    {idx + 1}
                  </motion.div>

                  {/* ── Two-column grid (desktop) / single column offset (mobile) ── */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

                    {/* ──── LEFT SLOT ──── */}
                    <div className="flex justify-end items-center pr-0 md:pr-10">
                      {isLeft ? (
                        /* LEFT card — slides in from left */
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
                          className="
                            relative group
                            /* mobile: push right of left timeline */
                            ml-14 w-full
                            /* desktop: full card width */
                            md:ml-0 md:w-full md:max-w-[460px]
                          "
                        >
                          {/* Connector line: card right edge → centre dot (desktop only) */}
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            style={{ originX: 1 }}
                            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-10 h-[2px] bg-gradient-to-r from-orange-500/0 to-orange-500/50"
                          />

                          {/* Card */}
                          <div className="
                            relative p-7 rounded-[20px] backdrop-blur-xl
                            bg-white/[0.03] border border-white/10
                            transition-all duration-400 group
                            hover:border-orange-500/35
                            hover:shadow-[0_0_32px_rgba(249,115,22,0.18),0_8px_32px_rgba(0,0,0,0.4)]
                            hover:-translate-y-1
                          ">
                            {/* Hover glow overlay */}
                            <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                            {/* Icon */}
                            <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-5 group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(249,115,22,0.3)] transition-all duration-300">
                              <StepIcon className="w-5 h-5" />
                            </div>

                            {/* Step number badge */}
                            <span className="inline-block mb-2 text-[10px] font-bold uppercase tracking-widest text-orange-500/70">
                              Step 0{idx + 1}
                            </span>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-sm text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                              {step.desc}
                            </p>
                          </div>
                        </motion.div>
                      ) : (
                        /* Spacer when card is on RIGHT */
                        <div className="hidden md:block" />
                      )}
                    </div>

                    {/* ──── RIGHT SLOT ──── */}
                    <div className="flex justify-start items-center pl-0 md:pl-10">
                      {!isLeft ? (
                        /* RIGHT card — slides in from right */
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
                          className="
                            relative group
                            ml-14 w-full
                            md:ml-0 md:w-full md:max-w-[460px]
                          "
                        >
                          {/* Connector line: centre dot → card left edge (desktop only) */}
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            style={{ originX: 0 }}
                            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-10 h-[2px] bg-gradient-to-r from-orange-500/50 to-orange-500/0"
                          />

                          {/* Card */}
                          <div className="
                            relative p-7 rounded-[20px] backdrop-blur-xl
                            bg-white/[0.03] border border-white/10
                            transition-all duration-400 group
                            hover:border-orange-500/35
                            hover:shadow-[0_0_32px_rgba(249,115,22,0.18),0_8px_32px_rgba(0,0,0,0.4)]
                            hover:-translate-y-1
                          ">
                            <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                            <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-5 group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(249,115,22,0.3)] transition-all duration-300">
                              <StepIcon className="w-5 h-5" />
                            </div>

                            <span className="inline-block mb-2 text-[10px] font-bold uppercase tracking-widest text-orange-500/70">
                              Step 0{idx + 1}
                            </span>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-sm text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                              {step.desc}
                            </p>
                          </div>
                        </motion.div>
                      ) : (
                        /* Spacer when card is on LEFT */
                        <div className="hidden md:block" />
                      )}
                    </div>

                  </div>{/* end grid */}
                </div>
              );
            })}
          </div>{/* end steps */}
        </div>{/* end timeline container */}
      </div>


      {/* ================= TOOLS & PLATFORMS ================= */}
      <div id="tools" className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 scroll-mt-24">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Tools & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Platforms</span>
          </motion.h2>
          <p className="mt-4 max-w-xl text-white/60 text-base md:text-lg">
            We leverage industry-leading software and marketing tools to research, build, and audit campaigns.
          </p>
        </div>

        {/* Tools Display */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 max-w-5xl mx-auto">
          {["Analytics", "SEO Tools", "Ads & Social", "Creative & AI"].map((groupName, i) => {
            const groupTools = tools.filter(tool => tool.category === groupName || (groupName === "Ads & Social" && tool.category === "Ads & Social"));
            return (
              <motion.div
                key={groupName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 rounded-[24px] bg-white/[0.01] border border-white/5 hover:border-orange-500/10 transition-colors duration-300"
              >
                <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-4">{groupName}</h4>
                <ul className="space-y-2.5">
                  {groupTools.map(tool => (
                    <li key={tool.name} className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500/60" />
                      {tool.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ================= FEATURED PROJECTS ================= */}
      <div id="case-studies" className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 scroll-mt-24">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Case Studies</span>
            </h2>
            <p className="mt-4 max-w-2xl text-white/60 text-lg">
              Take a look at how we optimized search traffic and scaled lead generation for our clients.
            </p>
          </motion.div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveProject(project)}
              className="relative group rounded-[24px] bg-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-orange-500/20 hover:shadow-[0_15px_30px_rgba(249,115,22,0.15)] flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="h-52 w-full overflow-hidden relative border-b border-white/5 bg-zinc-950">
                  <div className="absolute inset-0 bg-orange-500/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6 md:p-8">
                  <span className="text-xs text-orange-400 font-semibold uppercase tracking-wider">{project.short}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-2 group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/60 mt-4 leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0 mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProject(project);
                  }}
                  className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-orange-500 group-hover:text-black group-hover:border-transparent transition-all duration-300 font-semibold text-sm flex items-center justify-center gap-2"
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= WHY CHOOSE OUR TEAM ================= */}
      <div id="why-us" className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 scroll-mt-24">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Our Team</span>
            </h2>
            <p className="mt-4 max-w-2xl text-white/60 text-lg">
              We leverage dynamic cross-skill integration to guarantee high-performance campaign optimization.
            </p>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((feat, idx) => {
            const FeatIcon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="p-6 rounded-[20px] bg-white/[0.02] border border-white/5 hover:border-orange-500/20 transition-all duration-300 group hover:shadow-[0_10px_20px_rgba(249,115,22,0.05)]"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <FeatIcon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base md:text-lg mb-2">{feat.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ================= CALL TO ACTION & CONTACT ================= */}
      <div id="marketing-contact" className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left CTA Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Let's Connect
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Accelerate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400">
                Digital Growth?
              </span>
            </h2>

            <p className="mt-5 text-white/65 text-base md:text-lg leading-relaxed">
              Whether you need a full SEO audit, a high-converting PPC campaign, or a custom digital growth blueprint, our team is ready to deliver measurable ROI.
            </p>

            <div className="mt-8 space-y-4 w-full">
              <a
                href="https://wa.me/919940440767"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl group-hover:scale-110 transition-transform">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider">Quick WhatsApp Chat</p>
                  <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">+91 99404 40767</p>
                </div>
              </a>

              <a
                href="mailto:sivanika2025@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-xl group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider">Direct Email</p>
                  <p className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">sivanika2025@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="https://www.linkedin.com/in/sivanika"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-orange-500/20 hover:border-orange-500/40 transition-all text-lg"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-orange-500/20 hover:border-orange-500/40 transition-all text-lg"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-orange-500/20 hover:border-orange-500/40 transition-all text-lg"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* Right Marketing Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative p-8 md:p-10 rounded-[32px] bg-zinc-950/80 border border-white/10 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-2xl font-bold text-white mb-2">Request Free Marketing Audit & Proposal</h3>
              <p className="text-white/50 text-sm mb-8">Fill in your details and we will analyze your website & marketing strategy within 24 hours.</p>

              <form ref={formRef} onSubmit={handleInquirySubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 focus:border-orange-500 outline-none transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">Business Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 focus:border-orange-500 outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">Website / Social URL</label>
                    <input
                      type="text"
                      placeholder="https://yourwebsite.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 focus:border-orange-500 outline-none transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">Service Needed</label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white focus:border-orange-500 outline-none transition-colors text-sm"
                      defaultValue="SEO & Search"
                    >
                      <option value="SEO & Search">Technical & Local SEO</option>
                      <option value="Paid Ads">Google & Meta Ads</option>
                      <option value="Social Media">Social Media Growth</option>
                      <option value="Full Strategy">Complete Digital Marketing Growth</option>
                      <option value="Web & SEO">Web Development + SEO</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">Project Goals & Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your current traffic, target audience, and business growth goals..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 focus:border-orange-500 outline-none transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={inquiryStatus === "sending"}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold text-base hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 transition-all cursor-pointer"
                >
                  {inquiryStatus === "sending" ? "Submitting Inquiry..." : "Claim Free Audit & Strategy Call"}
                </button>

                {inquiryStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium text-center"
                  >
                    Thank you! Your inquiry has been received. Our marketing lead will reach out to you within 24 hours. ✅
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= AGENCY FOOTER ================= */}
      <footer className="relative mt-20 pt-12 pb-16 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 font-bold text-lg text-white">
              <span className="w-3 h-3 rounded-full bg-orange-500" />
              Siva & Madhan <span className="text-orange-400 font-normal">| Growth Partners</span>
            </div>
            <p className="text-xs text-white/40 mt-1">
              Data-driven Technical SEO, Meta/Google Ads & Growth Marketing Agency
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <a href="#services" className="hover:text-orange-400 transition-colors">Services</a>
            <a href="#workflow" className="hover:text-orange-400 transition-colors">Workflow</a>
            <a href="#tools" className="hover:text-orange-400 transition-colors">Tools</a>
            <a href="#case-studies" className="hover:text-orange-400 transition-colors">Case Studies</a>
            <button
              onClick={() => navigate("/")}
              className="text-orange-400 font-bold hover:underline cursor-pointer"
            >
              ← Back to Developer Portfolio
            </button>
          </div>

          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>

      {/* ================= CASE STUDY MODAL ================= */}
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
              className="max-w-2xl w-full p-8 md:p-10 rounded-[32px] bg-[#0f0f0f] border border-white/10 shadow-[0_0_50px_rgba(249,115,22,0.15)] relative overflow-y-auto max-h-[90vh] scrollbar-hide"
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

              {/* Services Rendered */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-3">Services Provided</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.services.map((srv) => (
                    <span
                      key={srv}
                      className="px-3 py-1.5 text-xs font-semibold rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-3">Tools & Tech Used</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Results */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-4">Measurable Results</h4>
                <ul className="space-y-2.5">
                  {activeProject.results.map((res, i) => (
                    <li key={i} className="flex gap-2 items-center text-sm md:text-base text-white/95 font-medium">
                      <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      {res}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Buttons */}
              <div className="mt-10 flex gap-4">
                <button
                  onClick={() => setActiveProject(null)}
                  className="flex-1 py-3 md:py-4 rounded-full bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors border border-white/10 cursor-pointer"
                >
                  Close Case Study
                </button>
                <a
                  href="#marketing-contact"
                  onClick={() => setActiveProject(null)}
                  className="flex-1 text-center py-3 md:py-4 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-black font-bold hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-shadow cursor-pointer"
                >
                  Discuss Project
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
