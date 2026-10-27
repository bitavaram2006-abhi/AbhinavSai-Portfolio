import { useState, useEffect, useRef, useMemo } from "react";
import {
  motion, AnimatePresence, useScroll, useSpring, useInView, animate,
  useMotionValue, useTransform, useReducedMotion,
} from "framer-motion";
import {
  Menu, X, Mail, Phone, MapPin, Copy, Check, Send, ChevronDown, Award, Trophy,
  Smartphone, Globe, Cloud, Wrench, Sparkles, Briefcase, GraduationCap, Code2,
  ArrowRight, Layers, ShieldCheck, AlertCircle, Languages, FileText, ExternalLink, Download,
  Sun, Moon
} from "lucide-react";

/* ----------------------------- DATA ----------------------------- */
// Your photo: put it in /public (e.g. /public/profile.jpg) and set PROFILE_IMG = "/profile.jpg".
// While it is empty, the placeholder silhouette below is shown.
const PROFILE_IMG = "/profile.jpeg";
const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27272a"/><stop offset="1" stop-color="#09090b"/></linearGradient></defs><rect width="400" height="400" fill="url(#g)"/><circle cx="200" cy="155" r="68" fill="#52525b"/><path d="M60 400c0-84 62-140 140-140s140 56 140 140z" fill="#52525b"/></svg>`
);
const EMAIL = "bitavaram2006@gmail.com";
const PHONE = "+91 9640659007";
const NAV = ["home", "about", "skills", "experience", "projects", "certifications", "contact"];
const glass = "border border-zinc-800/80 bg-zinc-950/85";
const LINKEDIN = "https://www.linkedin.com/in/abhinavsaibitavaram09";
const WHATSAPP = "https://wa.me/919640659007?text=" + encodeURIComponent("Hi Abhinav, I saw your portfolio.");

const LinkedInIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsAppIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function SocialButtons() {
  const items = [
    { label: "LinkedIn", href: LINKEDIN, Icon: LinkedInIcon, hover: "hover:border-sky-500/70 hover:text-sky-400" },
    { label: "WhatsApp", href: WHATSAPP, Icon: WhatsAppIcon, hover: "hover:border-emerald-500/70 hover:text-emerald-400" },
  ];
  return (
    <>
      {items.map(({ label, href, Icon, hover }) => (
        <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
          className={`${glass} flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-zinc-100 ${hover}`}>
          <Icon className="h-5 w-5" /> {label}
        </motion.a>
      ))}
    </>
  );
}
const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
const STATS = [
  { to: 9.02, dec: 2, label: "B.Tech CGPA (out of 10)" },
  { to: 5, label: "Grade-O AICTE internships" },
  { to: 100, suffix: "%", label: "C++ Genius Grade" },
  { to: 30, suffix: "+", label: "Verifiable certifications" },
];

const TABS = [
  { id: "all", label: "All", icon: Layers },
  { id: "mobile", label: "Mobile/Languages", icon: Smartphone },
  { id: "web", label: "Web/AI", icon: Globe },
  { id: "cloud", label: "Cloud/Databases", icon: Cloud },
  { id: "tools", label: "Tools", icon: Wrench },
];
const s = (cat, list) => list.map(([n, note]) => ({ cat, n, note }));
const SKILLS = [
  ...s("mobile", [["Java"], ["Python"], ["C++", "100% Sanfoundry Genius Grade"], ["C", "88% Grade A"], ["JavaScript"], ["SQL"], ["HTML5"], ["CSS3"]]),
  ...s("web", [["Android SDK"], ["Django"], ["OpenAI API"], ["Hugging Face Transformers"], ["PyQt (GUI)"], ["Bootstrap"], ["jQuery"], ["TensorFlow"], ["OpenCV"]]),
  ...s("cloud", [["AWS Cloud Foundations", "AWS Academy"], ["AWS Machine Learning Foundations", "AWS Academy"], ["MongoDB Administration", "TechA, Infosys Certified"], ["MySQL"], ["SQLite"]]),
  ...s("tools", [["Git"], ["GitHub"], ["Microsoft Power BI"], ["Unity Engine"], ["Figma"], ["Visual Studio Code"]]),
];
const CAT_COLOR = { mobile: "#E8743B", web: "#F08A5D", cloud: "#D9622B", tools: "#A1A1AA" };

const EXP = [
  { role: "Python Full Stack Development Intern", org: "AICTE – EduSkills", when: "Aug–Oct 2026 & Jan–Mar 2026", badge: "Grade-O",
    pts: ["Engineered dynamic full-stack Django web platforms with responsive Bootstrap interfaces.", "Optimized MySQL database queries and API endpoints, reducing latency by 20%."] },
  { role: "Prompt Engineering for AI Virtual Intern", org: "AICTE – EduSkills", when: "Apr–Jun 2026", badge: "Grade-O",
    pts: ["Architected an AI-Powered Content Generation & Analysis platform capstone using OpenAI API and Hugging Face."] },
  { role: "AR/VR Development with Unity Intern", org: "AICTE – EduSkills", when: "Jun–Aug 2026", badge: "Grade-O",
    pts: ["Developed 3D spatial interactive environments and object manipulation mechanics using Unity Engine & C#."] },
  { role: "Android Developer Virtual Intern", org: "Google & AICTE EduSkills", when: "Oct–Dec 2025", badge: "Grade-O",
    pts: ["Built mobile application modules using Java and Android SDK lifecycle architecture principles."] },
  { role: "Graphic Design Intern", org: "Inamigos Foundation", when: "Sep-Oct 2025", badge: "Completed",
  pts: ["Worked as a graphic design intern at Inamigos Foundation and Regoniized as Top Performer."],
  docs: [
  { label: "Recommendation Letter", file: "/docs/inamigos-recommendation.pdf" },
  { label: "Certificates of Appreciation & Participation", file: "/docs/inamigos-certificates.pdf" },
],
  work: { label: "View my design work", href: "https://drive.google.com/drive/folders/1hQQ_8g8q8M7I7IxU12GjpUMR5u1zq46V?usp=drive_link" } },
  { role: "Python Software Development Trainee", org: "Internshala", when: "May 2025", badge: "90% Top Performer",
  pts: ["Built desktop GUI tools with PyQt and SQLite database integration."] },
];

// Edit the `stack` tags and `points` to match what you actually built.
const PROJECTS = [
  { t: "Re-Medic", sub: "Automated Medicine Reminder System", event: "Cyberthon 2K26 (CBIT)", color: "#E8743B",
    live: "https://re-medic.vercel.app/",
    desc: "An automated health tracking application with dosage schedule storage and notification triggers.",
    stack: ["Scheduling", "Notifications", "Health tracking", "Prototype"],
    points: ["Stores dosage schedules per medicine", "Notification triggers remind users at dose time", "Built for Cyberthon 2K26 at CBIT"] },
  { t: "Attendance Calculator & Predictor", sub: "Personal project", event: "Personal project", color: "#D9622B",
  live: "/projects/attendance/attendance.html",
  desc: "A web tool I built after struggling to track my own attendance. It calculates the current percentage and predicts how many classes I can still miss while staying above the required limit.",
  stack: ["HTML", "Web app"],
  points: ["Built to solve a problem I faced as a student", "Calculates attendance percentage", "Predicts how many days can still be missed"] },
  { t: "Hospitality Sentiment Repair Agent", sub: "Prototype by Team ClearVision", team: "ClearVision",
  event: "HackWithAI, 24-hour offline hackathon at KLH University", color: "#F08A5D",
  logo: "/projects/clearvision/logo.png",
  desc: "A prototype AI agent built to repair guest sentiment in the hospitality industry.",
  stack: ["Prototype", "AI agent", "Sentiment analysis"],
  points: ["Built by Team ClearVision as a working HTML prototype", "Problem statement and system architecture shown below", "Try the prototype live from this page"],
  images: [
    { label: "Problem statement", src: "/projects/clearvision/problem-statement.jpeg" },
    { label: "System architecture", src: "/projects/clearvision/architecture.png" },
  ],
  prototype: "/projects/clearvision/prototype/index.html" },
];

const CERTS = [
{ t: "AWS Academy Graduate", d: "Machine Learning Foundations & Cloud Foundations", icon: Cloud,
  files: [
    { label: "Cloud Foundations", file: "/certs/aws-cloud-certificate.pdf" },
    { label: "Machine Learning Foundations", file: "/certs/aws-ai-ml-cert.pdf" },
  ] },
  { t: "HackerRank Java (Basic)", d: "Skill certification", icon: Code2, file: "/certs/hackerrank-java.png" },
  { t: "MongoDB Administration", d: "TechA, Infosys Springboard", icon: ShieldCheck, file: "/certs/mongodb-infosys.pdf" },
  { t: "C++ & C", d: "C++ 100% Genius Grade, C 88% Grade A (Sanfoundry)", icon: Award },
  { t: "EF SET C1 Advanced English", d: "Score 68/100", icon: Languages },
  { t: "MoE Innovation Ambassador", d: "Foundation, Reskilling & Advanced", icon: Sparkles },
];

/* ----------------------------- HELPERS ----------------------------- */
function useActive(ids) {
  const [a, setA] = useState(ids[0]);
  useEffect(() => {
    const o = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setA(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((i) => { const el = document.getElementById(i); el && o.observe(el); });
    return () => o.disconnect();
  }, []);
  return a;
}

function Counter({ to, dec = 0, suffix = "" }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const c = animate(0, to, { duration: 2, ease: "easeOut", onUpdate: setN });
    return () => c.stop();
  }, [seen, to]);
  return <span ref={ref}>{n.toFixed(dec)}{suffix}</span>;
}

function Section({ id, title, sub, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 max-w-xl text-zinc-400">{sub}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}

function useCopy() {
  const [done, setDone] = useState("");
  const copy = async (text, key) => {
    try { await navigator.clipboard.writeText(text); setDone(key); setTimeout(() => setDone(""), 1800); } catch {}
  };
  return [done, copy];
}

/* ----------------------------- NAVBAR ----------------------------- */
function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("theme") || "dark"; } catch { return "dark"; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);
  return [theme, setTheme];
}

function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  const dark = theme === "dark";
  return (
    <button onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light mode" : "Switch to night mode"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-red-400 hover:border-red-500/60">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={dark ? "moon" : "sun"} className="flex"
          initial={{ rotate: -90, scale: 0, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
          {dark ? <Moon size={18} /> : <Sun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

function Navbar() {
  const active = useActive(NAV);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const jump = (id) => { setOpen(false); go(id); };
  return (
    <header className={`fixed inset-x-0 top-0 z-40 ${glass} border-x-0 border-t-0`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <button onClick={() => jump("home")} className="font-bold text-zinc-100">
          Abhinav<span className="text-red-500">.dev</span>
        </button>
        <ul className="hidden gap-1 md:flex">
          {NAV.map((id) => (
            <li key={id}>
              <button onClick={() => jump(id)} className="relative rounded-full px-3 py-1.5 text-sm capitalize text-zinc-300 hover:text-white">
                {active === id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-red-500/20 ring-1 ring-red-500/40"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                )}
                <span className="relative">{id}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
            <button aria-label="Toggle menu" className="text-zinc-200 md:hidden" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-zinc-800/80 px-5 md:hidden">
            {NAV.map((id) => (
              <li key={id}>
                <button onClick={() => jump(id)} className={`w-full py-3 text-left capitalize ${active === id ? "text-red-400" : "text-zinc-300"}`}>{id}</button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <motion.div style={{ scaleX: bar }} className="h-0.5 origin-left bg-gradient-to-r from-red-500 via-rose-500 to-orange-500" />
    </header>
  );
}

/* ----------------------------- HERO ----------------------------- */
function HeroName() {
  const reduce = useReducedMotion();
  const [full, setFull] = useState(false);
  const k = reduce ? 0 : 1;

  // collapses/expands a piece of text smoothly, with its own duration and delay
  const slot = (open, dur, delay) => ({
    display: "inline-grid",
    verticalAlign: "bottom",
    gridTemplateColumns: open ? "1fr" : "0fr",
    transition: `grid-template-columns ${dur * k}s ease ${delay * k}s`,
  });
  const clip = { overflow: "hidden", whiteSpace: "nowrap", minWidth: 0 };

  return (
    <span
      tabIndex={0}
      className="inline-grid cursor-pointer outline-none"
      onMouseEnter={() => setFull(true)}
      onMouseLeave={() => setFull(false)}
      onFocus={() => setFull(true)}
      onBlur={() => setFull(false)}
      onClick={() => { if (window.matchMedia("(hover: none)").matches) setFull((v) => !v); }}
    >
      <span className="sr-only">Bitavaram Abhinav Sai</span>

      {/* invisible copy reserves the full width so the hover area never moves */}
      <span aria-hidden="true" className="invisible col-start-1 row-start-1 hidden whitespace-nowrap sm:inline">
        Bitavaram Abhinav Sai
      </span>

      <span aria-hidden="true" className="col-start-1 row-start-1">
        B
        <span style={slot(full, 0.45, full ? 0.15 : 0)}><span style={clip}>itavaram</span></span>
        <span style={slot(!full, 0.2, full ? 0 : 0.35)}><span style={clip}>.</span></span>
        {" "}Abhinav Sai
      </span>
    </span>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const dots = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
    x: (i * 37) % 100, y: (i * 53) % 100, size: 2 + (i % 4), dur: 6 + (i % 7),
    c: ["#E8743B", "#D9622B", "#F08A5D"][i % 3],
  })), []);
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div aria-hidden className="absolute inset-0">
        {[["-top-20 -left-20", "#E8743B", 0], ["top-1/3 -right-24", "#F08A5D", 2], ["-bottom-24 left-1/3", "#D9622B", 4]].map(([pos, c, d], i) => (
          <motion.div key={i} className={`absolute h-96 w-96 rounded-full ${pos}`} style={{ background: `radial-gradient(circle, ${c}, transparent 70%)`, opacity: 0.5 }}
            animate={reduce ? {} : { scale: [1, 1.25, 1], x: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity, delay: d }} />
        ))}
        {!reduce && dots.map((d, i) => (
          <motion.span key={i} className="absolute rounded-full" style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.size, height: d.size, background: d.c }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 0.9, 0.2] }} transition={{ duration: d.dur, repeat: Infinity, delay: i * 0.2 }} />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:justify-between">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 flex flex-wrap gap-2">
            {["5x AICTE Virtual Intern (Grade-O)", "SIH 2025 Grand Finale Coordinator", "Dual AWS Certified"].map((b, i) => (
              <motion.span key={b} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.12 }}
                className={`${glass} rounded-full px-3 py-1 text-xs text-zinc-200`}>{b}</motion.span>
            ))}
          </div>
          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">
            <motion.span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,var(--name-a),var(--name-b),var(--name-c),var(--name-a))", backgroundSize: "300% 100%" }}
              animate={reduce ? {} : { backgroundPosition: ["0% 0%", "300% 0%"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <HeroName />
            </motion.span>
          </h1>
          <p className="mt-3 text-xl text-zinc-300 sm:text-2xl">Computer Science & Software Engineer</p>
          <p className="mt-5 max-w-2xl text-zinc-400">
            Engineered for Innovation: Android Software Development, Full-Stack Python/Django Systems, AI Architectures & Cloud Engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.button whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(232,116,59,.55)" }} whileTap={{ scale: 0.97 }} onClick={() => go("projects")}
              className="flex items-center gap-2 rounded-xl bg-red-600 text-black! px-6 py-3 font-semibold text-white">
              View projects <ArrowRight size={18} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={() => go("contact")}
              className={`${glass} rounded-xl px-6 py-3 font-semibold text-zinc-100 hover:border-orange-500/60`}>
              Contact me
            </motion.button>
            <SocialButtons /> 
          </div>
        </motion.div>
        <Avatar />
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}
          className={`${glass} mt-14 grid grid-cols-2 gap-6 rounded-2xl p-6 md:grid-cols-4`}>
          {STATS.map((m) => (
            <div key={m.label}>
              <div className="text-3xl font-bold text-zinc-100 sm:text-4xl"><Counter {...m} /></div>
              <div className="mt-1 text-sm text-zinc-400">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.button aria-label="Scroll to about" onClick={() => go("about")} className="absolute bottom-6 left-1/2 -tranzinc-x-1/2 text-zinc-500"
        animate={reduce ? {} : { y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}><ChevronDown /></motion.button>
    </section>
  );
}

function Avatar() {
  const reduce = useReducedMotion();
  return (
    <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="relative mx-auto shrink-0 lg:mx-0">
      <motion.div animate={reduce ? {} : { y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative h-56 w-56 sm:h-72 sm:w-72">
        <div aria-hidden className="absolute -inset-6 rounded-full" style={{ background: "radial-gradient(circle, rgba(232,116,59,.45), transparent 70%)" }} />
        <motion.div aria-hidden className="absolute -inset-1 rounded-full" style={{ background: "conic-gradient(from 0deg, #E8743B, #09090b, #D9622B, #09090b, #E8743B)" }}
          animate={reduce ? {} : { rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
        <img src={PROFILE_IMG || PLACEHOLDER} alt="B. Abhinav Sai" className="relative h-full w-full rounded-full border-4 object-cover" style={{ borderColor: "var(--bg)" }} />
      </motion.div>
    </motion.div>
  );
}

/* ----------------------------- ABOUT ----------------------------- */
function About() {
  const items = [
    { icon: GraduationCap, t: "B.Tech Computer Science & Engineering", d: "MLRITM, third year, expected 2028", c: "#E8743B" },
    { icon: Languages, t: "C1 Advanced English", d: "EF SET, score 68/100", c: "#D9622B" },
    { icon: Briefcase, t: "113 hours of employability skills", d: "JobReady, Wadhwani Foundation", c: "#F08A5D" },
  ];
  return (
    <Section id="about" title="About me">
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="text-lg leading-relaxed text-zinc-300 lg:col-span-3">
          I'm a third-year Computer Science & Engineering student at Marri Laxman Reddy Institute of Technology and Management (MLRITM, 2028).
          I'm passionate about building scalable Android mobile apps supported by Google for Developers, full-stack web platforms, and LLM prompt engineering pipelines.
        </motion.p>
        <div className="space-y-3 lg:col-span-2">
          {items.map(({ icon: I, t, d, c }, i) => (
            <motion.div key={t} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ x: 6 }} className={`${glass} flex items-start gap-4 rounded-xl p-4`}>
              <I size={22} style={{ color: c }} className="mt-0.5 shrink-0" />
              <div><div className="font-semibold text-zinc-100">{t}</div><div className="text-sm text-zinc-400">{d}</div></div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------- SKILLS ----------------------------- */
function Skills() {
  const [tab, setTab] = useState("all");
  const list = tab === "all" ? SKILLS : SKILLS.filter((x) => x.cat === tab);
  return (
    <Section id="skills" title="Technical skills" sub="Filter by category to see what I use for each kind of work.">
      <div role="tablist" className="mb-8 flex flex-wrap gap-2">
        {TABS.map(({ id, label, icon: I }) => (
          <button key={id} role="tab" aria-selected={tab === id} onClick={() => setTab(id)}
            className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm ${tab === id ? "text-white" : "text-zinc-400 hover:text-zinc-200"}`}>
            {tab === id && <motion.span layoutId="skill-tab" className="absolute inset-0 rounded-full bg-red-500/25 ring-1 ring-red-500/50" />}
            <I size={15} className="relative" /><span className="relative">{label}</span>
          </button>
        ))}
      </div>
      <motion.div layout className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {list.map((k) => (
            <motion.div layout key={k.n} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.85 }}
              whileHover={{ scale: 1.06, borderColor: CAT_COLOR[k.cat] }} className={`${glass} rounded-xl p-4`}>
              <span className="mb-2 block h-1.5 w-6 rounded-full" style={{ background: CAT_COLOR[k.cat] }} />
              <div className="font-medium text-zinc-100">{k.n}</div>
              {k.note && <div className="mt-1 text-xs text-zinc-400">{k.note}</div>}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

/* ----------------------------- EXPERIENCE ----------------------------- */
function DocViewer({ doc, onClose }) {
  const [idx, setIdx] = useState(0);
  const list = doc.files || null;
  const cur = list ? list[idx] : doc;
  useEffect(() => {
    const k = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", k);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", k); };
  }, []);
  const isPdf = cur.file.toLowerCase().split("#")[0].endsWith(".pdf");
  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div role="dialog" aria-modal="true" aria-label={doc.label} onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.92, y: 30, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.92, y: 30, opacity: 0 }}
        className={`${glass} flex w-full max-w-3xl flex-col rounded-2xl`} style={{ height: "85vh" }}>
        <div className="flex items-center justify-between gap-3 border-b border-zinc-800 px-5 py-3">
          <h3 className="font-semibold text-zinc-100">{doc.label}</h3>
          <div className="flex items-center gap-1">
            <a href={cur.file} target="_blank" rel="noopener noreferrer" aria-label="Open in new tab" className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"><ExternalLink size={18} /></a>
            <a href={cur.file} download aria-label="Download" className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"><Download size={18} /></a>
            <button onClick={onClose} aria-label="Close" className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"><X size={18} /></button>
          </div>
        </div>
        {list && (
          <div role="tablist" className="flex flex-wrap gap-2 border-b border-zinc-800 px-5 py-3">
            {list.map((f, i) => (
              <button key={f.file} role="tab" aria-selected={i === idx} onClick={() => setIdx(i)}
                className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${i === idx ? "border-red-500/60 bg-red-500/15 text-red-400" : "border-zinc-700 text-zinc-300 hover:border-red-500/40"}`}>
                {f.label}
              </button>
            ))}
          </div>
        )}
        <div className="min-h-0 flex-1 overflow-auto p-2">
          {isPdf
            ? <iframe key={cur.file} src={cur.file} title={cur.label || doc.label} className="h-full w-full rounded-lg bg-[#ffffff]" />
            : <img key={cur.file} src={cur.file} alt={cur.label || doc.label} className="mx-auto max-h-full max-w-full object-contain" />}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Experience() {
  const [open, setOpen] = useState(0);
  const [doc, setDoc] = useState(null);
  return (
    <Section id="experience" title="Internships & experience" sub="Select a role to expand its achievements.">
      <div className="relative border-l border-zinc-800 pl-8">
        {EXP.map((e, i) => {
          const isOpen = open === i;
          return (
            <motion.div key={e.role} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} className="relative mb-6">
              <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", delay: 0.15 }}
                style={{ left: -41, boxShadow: "0 0 16px #D9622B" }} className="absolute top-6 h-4 w-4 rounded-full bg-orange-500" />
              <div className={`${glass} rounded-2xl transition-colors hover:border-red-500/50`}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="w-full p-5 text-left">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-zinc-100">{e.role}</h3>
                      <p className="text-sm text-zinc-400">{e.org} · {e.when}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span style={{ background: "rgba(217,98,43,.15)", boxShadow: "0 0 14px rgba(217,98,43,.35)" }} className="rounded-full px-2.5 py-1 text-xs text-orange-300">
                        <Trophy size={12} className="mr-1 inline" />{e.badge}
                      </span>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }}><ChevronDown size={18} className="text-zinc-400" /></motion.span>
                    </div>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-5 pb-5">
                        <ul>
                          {e.pts.map((p) => (
                            <li key={p} className="mt-2 flex gap-2 text-sm text-zinc-300"><Check size={16} className="mt-0.5 shrink-0 text-orange-400" />{p}</li>
                          ))}
                        </ul>
                        {e.docs && (
                          <div className="mt-5">
                            <p className="mb-2 text-xs text-zinc-500">Documents</p>
                            <div className="flex flex-wrap gap-2">
                              {e.docs.map((d) => (
                                <button key={d.label} onClick={() => setDoc(d)}
                                  className="flex items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-200 hover:border-red-500/60 hover:text-red-400">
                                  <FileText size={15} />{d.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                        {e.work && (
                          <a href={e.work.href} target="_blank" rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-red-600 text-black! px-4 py-2 text-sm font-semibold text-white hover:bg-red-500">
                            {e.work.label} <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
      <AnimatePresence>{doc && <DocViewer doc={doc} onClose={() => setDoc(null)} />}</AnimatePresence>
    </Section>
  );
}

/* ----------------------------- PROJECTS ----------------------------- */
function Tilt({ children, onClick, color }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [9, -9]), { stiffness: 220, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-9, 9]), { stiffness: 220, damping: 20 });
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5); y.set((e.clientY - r.top) / r.height - 0.5);
  };
  return (
    <motion.button onClick={onClick} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900, borderColor: color + "55" }} whileHover={{ scale: 1.03 }}
      className={`${glass} flex h-full flex-col rounded-2xl p-6 text-left`}>
      {children}
    </motion.button>
  );
}

function ProjectDetails({ p, onClose }) {
  const [preview, setPreview] = useState(false);
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          {p.logo && <img src={p.logo} alt={`${p.team} logo`} className="h-16 w-16 shrink-0 rounded-xl object-contain" />}
          <div>
            <h3 className="text-2xl font-bold text-zinc-100">{p.t}</h3>
            <p className="text-zinc-400">{p.sub}</p>
            {p.team && <p className="mt-1 text-sm font-semibold" style={{ color: p.color }}>Team {p.team}</p>}
          </div>
        </div>
        <button aria-label="Close" onClick={onClose} className="shrink-0 text-zinc-400 hover:text-white"><X /></button>
      </div>

      <p className="mt-3 text-sm" style={{ color: p.color }}>{p.event}</p>
      <p className="mt-4 text-zinc-300">{p.desc}</p>
      <ul className="mt-4 space-y-2">
        {p.points.map((pt) => (
          <li key={pt} className="flex gap-2 text-sm text-zinc-300"><Check size={16} className="mt-0.5 shrink-0" style={{ color: p.color }} />{pt}</li>
        ))}
      </ul>

      {p.live && (
        <a href={p.live} target="_blank" rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red-600 text-black! px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-500">
          Open live app <ExternalLink size={15} />
        </a>
      )}

      {p.images?.map((img) => (
        <figure key={img.label} className="mt-6">
          <figcaption className="mb-2 text-sm font-semibold text-zinc-200">{img.label}</figcaption>
          <a href={img.src} target="_blank" rel="noopener noreferrer" title="Open full size">
            <img src={img.src} alt={img.label} loading="lazy" className="w-full rounded-xl border border-zinc-800 bg-zinc-900 object-contain" />
          </a>
        </figure>
      ))}

      {p.prototype && (
        <div className="mt-6">
          <p className="mb-2 text-sm font-semibold text-zinc-200">Prototype</p>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setPreview(!preview)} className="rounded-lg bg-red-600 text-black! px-4 py-2 text-sm font-semibold text-white hover:bg-red-500">
              {preview ? "Hide live preview" : "Show live preview"}
            </button>
            <a href={p.prototype} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-200 hover:border-red-500/60 hover:text-red-400">
              Open in new tab <ExternalLink size={15} />
            </a>
          </div>
          {preview && <iframe src={p.prototype} title={`${p.t} prototype`} className="mt-3 w-full rounded-xl border border-zinc-800 bg-[#ffffff]" style={{ height: 480 }} />}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-1.5">
        {p.stack.map((t) => <span key={t} className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs text-zinc-300">{t}</span>)}
      </div>
    </div>
  );
}

function Projects() {
  const [sel, setSel] = useState(null);
  useEffect(() => {
    if (!sel) return;
    const k = (e) => e.key === "Escape" && setSel(null);
    document.body.style.overflow = "hidden"; window.addEventListener("keydown", k);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", k); };
  }, [sel]);
  return (
    <Section id="projects" title="Projects & hackathons" sub="Open a card for the deep dive.">
      <div className="grid gap-6 md:grid-cols-3">
        {PROJECTS.map((p) => (
          <Tilt key={p.t} color={p.color} onClick={() => setSel(p)}>
            {p.logo
              ? <img src={p.logo} alt={`${p.team} logo`} className="h-12 w-12 rounded-lg object-contain" />
              : <Trophy style={{ color: p.color }} />}
            <h3 className="mt-4 text-xl font-bold text-zinc-100">{p.t}</h3>
            <p className="text-sm text-zinc-400">{p.sub}</p>
            <p className="mt-2 text-sm" style={{ color: p.color }}>{p.event}</p>
            <p className="mt-3 flex-1 text-sm text-zinc-300">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((t) => <span key={t} className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs text-zinc-300">{t}</span>)}
            </div>
            <span className="mt-5 flex items-center gap-1 text-sm font-medium text-zinc-100">View details <ArrowRight size={16} /></span>
          </Tilt>
        ))}
      </div>
      <AnimatePresence>
        {sel && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
            <motion.div role="dialog" aria-modal="true" aria-label={sel.t} onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 30, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className={`${glass} relative w-full max-w-3xl rounded-2xl p-7`}
              style={{ boxShadow: `0 0 60px ${sel.color}33`, maxHeight: "88vh", overflowY: "auto" }}>
              <ProjectDetails p={sel} onClose={() => setSel(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

/* ----------------------------- CERTIFICATIONS ----------------------------- */
function Cert({ c, onOpen }) {
  const Icon = c.icon || Award;
  const clickable = c.file || c.files || c.link;
  const act = () => (c.file || c.files ? onOpen(c) : c.link && window.open(c.link, "_blank", "noopener,noreferrer"));
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <motion.div onMouseMove={move} whileHover={{ y: -4 }}
      role={clickable ? "button" : undefined} tabIndex={clickable ? 0 : undefined}
      onClick={clickable ? act : undefined}
      onKeyDown={clickable ? (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), act()) : undefined}
      className={`${glass} group relative overflow-hidden rounded-2xl p-5 ${clickable ? "cursor-pointer" : ""}`}>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(220px circle at var(--x) var(--y), rgba(232,116,59,.28), transparent 70%)" }} />
      <Icon className="relative text-orange-400" />
      <h3 className="relative mt-3 font-semibold text-zinc-100">{c.t}</h3>
      <p className="relative mt-1 text-sm text-zinc-400">{c.d}</p>
      {clickable && (
        <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-red-400">
          <FileText size={15} /> {c.files ? "View certificates" : c.file ? "View certificate" : "Open link"}
        </span>
      )}
    </motion.div>
  );
}

function Certs() {
  const [doc, setDoc] = useState(null);
  return (
    <Section id="certifications" title="Certifications & accreditations" sub="Click a card to view the certificate.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c, i) => <Cert key={c.t + i} c={c} onOpen={(x) => setDoc({ label: x.t, file: x.file, files: x.files })} />)}
      </div>
      <AnimatePresence>{doc && <DocViewer doc={doc} onClose={() => setDoc(null)} />}</AnimatePresence>
    </Section>
  );
}
/* ----------------------------- CONTACT ----------------------------- */
const RULES = {
  name: (v) => (v.trim().length >= 2 ? "" : "Enter your name (2+ characters)."),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address."),
  message: (v) => (v.trim().length >= 10 ? "" : "Write at least 10 characters."),
};

function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [done, copy] = useCopy();
  const err = Object.fromEntries(Object.keys(RULES).map((k) => [k, RULES[k](f[k])]));
  const valid = !Object.values(err).some(Boolean);

  const submit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!valid) return;
    setStatus("sending");
    // TODO: replace with a real request (Formspree, EmailJS, your API...)
    const res = await fetch("https://formspree.io/f/xrpeqrvv", {
  method: "POST",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  body: JSON.stringify(f),
});
if (!res.ok) { setStatus("idle"); return; }
    setStatus("sent"); setF({ name: "", email: "", message: "" }); setTouched({});
    setTimeout(() => setStatus("idle"), 4500);
  };

  const field = (k, label, props = {}) => {
    const bad = touched[k] && err[k], good = touched[k] && !err[k];
    return (
      <div>
        <label htmlFor={k} className="mb-1 block text-sm text-zinc-300">{label}</label>
        <div className="relative">
          {props.rows ? (
            <textarea id={k} {...props} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} onBlur={() => setTouched({ ...touched, [k]: true })}
              className={`w-full rounded-xl border bg-zinc-950/60 px-4 py-3 text-zinc-100 outline-none transition-colors ${bad ? "border-[#ef4444]" : good ? "border-emerald-500" : "border-zinc-800 focus:border-zinc-500"}`} />
          ) : (
            <input id={k} {...props} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} onBlur={() => setTouched({ ...touched, [k]: true })}
              className={`w-full rounded-xl border bg-zinc-950/60 px-4 py-3 pr-10 text-zinc-100 outline-none transition-colors ${bad ? "border-[#ef4444]" : good ? "border-emerald-500" : "border-zinc-800 focus:border-zinc-500"}`} />
          )}
          {!props.rows && good && <Check size={18} className="absolute right-3 top-3.5 text-emerald-400" />}
          {!props.rows && bad && <AlertCircle size={18} className="absolute right-3 top-3.5 text-[#ef4444]" />}
        </div>
        <AnimatePresence>
          {bad && <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-1 text-xs text-[#ef4444]">{err[k]}</motion.p>}
        </AnimatePresence>
      </div>
    );
  };

  const rows = [
    { k: "email", icon: Mail, v: EMAIL, copy: true }, { k: "phone", icon: Phone, v: PHONE, copy: true },
    { k: "loc", icon: MapPin, v: "Dundigal, Hyderabad, Telangana, India" },
  ];
  return (
    <Section id="contact" title="Get in touch" sub="Open to internships, hackathon teams and collaborations.">
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-2">
          {rows.map(({ k, icon: I, v, copy: c }) => (
            <div key={k} className={`${glass} flex items-center gap-3 rounded-xl p-4`}>
              <I size={20} className="shrink-0 text-red-400" />
              <span className="min-w-0 flex-1 break-words text-sm text-zinc-200">{v}</span>
              {c && (
                <button aria-label={`Copy ${k}`} onClick={() => copy(v, k)} className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span key={done === k ? "ok" : "cp"} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} className="block">
                      {done === k ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                    </motion.span>
                  </AnimatePresence>
                </button>
              )}
            </div>
          ))}
          <div className="flex flex-wrap gap-3 pt-2">    {/* add from here */}
            <SocialButtons />
          </div> 
        </div>

        <form onSubmit={submit} noValidate className={`${glass} relative space-y-4 overflow-hidden rounded-2xl p-6 lg:col-span-3`}>
          {field("name", "Name", { type: "text", autoComplete: "name" })}
          {field("email", "Email", { type: "email", autoComplete: "email" })}
          {field("message", "Message", { rows: 4 })}
          <motion.button type="submit" disabled={status === "sending"} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 text-black! px-6 py-3 font-semibold text-white disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message"} <Send size={16} />
          </motion.button>
          <AnimatePresence>
            {status === "sent" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-zinc-900/95">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 220, damping: 12 }}
                  style={{ background: "rgba(16,185,129,.2)", boxShadow: "0 0 40px rgba(16,185,129,.5)" }} className="rounded-full p-4"><Check size={36} className="text-emerald-400" /></motion.div>
                <p className="text-lg font-semibold text-zinc-100">Message sent</p>
                <p className="text-sm text-zinc-400">Thanks for reaching out. I'll reply soon.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </Section>
  );
}

function Blooms() {
  const reduce = useReducedMotion();
  const b = [
    { pos: "-top-40 left-1/4", c: "var(--bloom-1)", s: 640, d: 0 },
    { pos: "top-1/2 -right-40", c: "var(--bloom-2)", s: 560, d: 3 },
    { pos: "-bottom-48 -left-32", c: "var(--bloom-3)", s: 600, d: 6 },
  ];
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(90deg, var(--lines) 0 1px, transparent 1px 4px)" }} />
      {b.map((x, i) => (
        <motion.div key={i} className={`absolute rounded-full ${x.pos}`}
          style={{ width: x.s, height: x.s, background: `radial-gradient(circle, ${x.c}, transparent 65%)` }}
          animate={reduce ? {} : { opacity: [0.5, 1, 0.5]}} transition={{ duration: 9, repeat: Infinity, delay: x.d }} />
      ))}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, var(--vignette))" }} />
    </div>
  );
}

/* ----------------------------- APP ----------------------------- */
export default function Portfolio() {
  useEffect(() => {
    const prev = [document.documentElement.style.background, document.body.style.background];
    document.documentElement.style.background = document.body.style.background = "var(--bg)";
    document.documentElement.style.colorScheme = "dark";
    return () => { [document.documentElement.style.background, document.body.style.background] = prev; };
  }, []);
  return (
    <div style={{ background: "var(--bg)", color: "var(--fg)" }} className="relative min-h-screen scroll-smooth font-sans antialiased">
      <Blooms />
      <Navbar />
      <main className="relative z-10">
        <Hero /><About /><Skills /><Experience /><Projects /><Certs /><Contact />
      </main>
      <footer className="relative z-10 border-t border-zinc-800/80 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} B. Abhinav Sai
      </footer>
    </div>
  );
}
