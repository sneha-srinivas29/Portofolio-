// import { motion } from "framer-motion";
// import { ArrowDown, Github, Linkedin, FileText, ExternalLink } from "lucide-react";
// import ParticleBackground from "./ParticleBackground";

// const container = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
// };

// const item = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { type: "spring" as const, duration: 0.7, bounce: 0 } },
// };

// const float = {
//   animate: {
//     y: [0, -10, 0],
//     transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
//   },
// };

// const HeroSection = () => (
//   <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
//     <ParticleBackground />

//     {/* Gradient orbs */}
//     <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
//     <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate="visible"
//       className="max-w-6xl mx-auto px-6 md:px-8 w-full relative z-10"
//     >
//       <motion.div variants={item} className="mb-6">
//         <span className="ui-label text-primary inline-flex items-center gap-2">
//           <span className="w-2 h-2 rounded-full gradient-primary inline-block animate-pulse" />
//           Available for opportunities
//         </span>
//       </motion.div>

//       <motion.h1 variants={item} className="text-foreground mb-4">
//         Sneha Srinivas
//         <span className="text-primary">.</span>
//       </motion.h1>

//       <motion.p
//         variants={item}
//         className="text-xl md:text-2xl text-muted-foreground mb-3"
//         style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
//       >
//         Software Engineer | Full Stack Developer
//       </motion.p>

//       <motion.p variants={item} className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl">
//         Building scalable solutions with React, TypeScript, and AI-driven applications. 
//         1+ year of full-stack development experience.
//       </motion.p>

//       <motion.div variants={item} className="flex flex-wrap gap-3 mb-16">
//         <a
//           href="#projects"
//           className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow"
//         >
//           View Projects
//           <ArrowDown size={16} />
//         </a>
//         <a
//           href="https://sneha-srinivas-portololio.netlify.app/img/resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-medium text-sm hover:bg-card/80 transition-colors"
//         >
//           <FileText size={16} />
//           Resume
//         </a>
//         <a
//           href="https://github.com/sneha-srinivas29"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-medium text-sm hover:bg-card/80 transition-colors"
//         >
//           <Github size={16} />
//           GitHub
//         </a>
//         <a
//           href="https://www.linkedin.com/in/sneha-h-s-3848ba232"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-medium text-sm hover:bg-card/80 transition-colors"
//         >
//           <Linkedin size={16} />
//           LinkedIn
//         </a>
//       </motion.div>

//       {/* Floating elements */}
//       <motion.div
//         variants={float}
//         animate="animate"
//         className="absolute top-32 right-8 md:right-16 hidden lg:block"
//       >
//         <div className="glass rounded-2xl px-4 py-3 glow-sm">
//           <code className="text-xs text-primary" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//             {'<Developer />'}
//           </code>
//         </div>
//       </motion.div>

//       <motion.div
//         variants={float}
//         animate="animate"
//         className="absolute bottom-40 right-32 hidden lg:block"
//         style={{ animationDelay: "1s" }}
//       >
//         <div className="glass rounded-2xl px-4 py-3">
//           <code className="text-xs text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//             React • TypeScript • Node.js
//           </code>
//         </div>
//       </motion.div>
//     </motion.div>
//   </section>
// );

// export default HeroSection;

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, FileText } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import { useEffect, useRef, useState } from "react";

/* ─── Animation Variants ─────────────────────────────── */

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, duration: 0.9, bounce: 0.1 },
  },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, duration: 0.6, bounce: 0.1 },
  },
};

/* ─── Magnetic Button ─────────────────────────────────── */
const MagneticButton = ({
  children,
  className,
  href,
  target,
  rel,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

/* ─── Animated Name Letters ───────────────────────────── */
const AnimatedName = ({ name }: { name: string }) => {
  return (
    <span className="inline-block">
      {name.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 60, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            type: "spring",
            duration: 0.8,
            bounce: 0.25,
            delay: 0.4 + i * 0.04,
          }}
          whileHover={{
            y: -6,
            color: "hsl(250 85% 60%)",
            transition: { duration: 0.2 },
          }}
          style={{ transformOrigin: "bottom", display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

/* ─── Floating Card Component ────────────────────────── */
const FloatingCard = ({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6, type: "spring", bounce: 0.2 }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Typewriter Role ─────────────────────────────────── */
const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "React Developer",
  "AI/ML Enthusiast",
];

const TypewriterRole = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="relative">
      <span
        style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
        className="text-foreground/80"
      >
        {displayed}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1 align-middle"
      />
    </span>
  );
};

/* ─── Stat Item ──────────────────────────────────────── */
const StatItem = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div
    variants={fadeIn}
    transition={{ delay: 0.6 + delay * 0.1 }}
    className="flex flex-col"
  >
    <span className="text-2xl md:text-3xl font-bold text-primary">{value}</span>
    <span className="text-xs text-muted-foreground ui-label uppercase tracking-wider">{label}</span>
  </motion.div>
);

/* ─── Main Component ──────────────────────────────────── */
const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orbX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), { stiffness: 50, damping: 30 });
  const orbY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), { stiffness: 50, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth);
    mouseY.set(e.clientY / window.innerHeight);
  };

  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <ParticleBackground />

      {/* Parallax gradient orbs */}
      <motion.div
        style={{ x: orbX, y: orbY, background: "hsl(250 85% 60%)" }}
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        animate={{ opacity: [0.08, 0.16, 0.08], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ background: "hsl(280 75% 58%)" }}
      />
      <motion.div
        className="absolute top-3/4 left-1/3 w-[300px] h-[300px] rounded-full blur-3xl pointer-events-none"
        animate={{ opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ background: "hsl(320 65% 55%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 md:px-8 w-full relative z-10"
      >
        {/* Badge */}
        <motion.div variants={fadeIn} className="mb-6">
          <motion.span
            className="ui-label text-primary inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5"
            whileHover={{ scale: 1.03, backgroundColor: "hsl(250 85% 60% / 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-primary inline-block"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            Available for opportunities
          </motion.span>
        </motion.div>

        {/* Name */}
        <h1 className="text-foreground mb-4 perspective-1000">
          <AnimatedName name="Sneha Srinivas" />
          <motion.span
            className="text-primary"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", delay: 1.2, bounce: 0.6, duration: 0.6 }}
          >
            .
          </motion.span>
        </h1>

        {/* Typewriter role */}
        <motion.div variants={fadeUp} className="text-xl md:text-2xl mb-3 h-9 md:h-10">
          <TypewriterRole />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl"
        >
          Building scalable solutions with React, TypeScript, and AI-driven
          applications. 1+ year of full-stack development experience.
        </motion.p>

        {/* Stats row */}
        <motion.div
          variants={container}
          className="flex gap-8 mb-10 pb-10 border-b border-border/50"
        >
          <StatItem value="10+" label="Projects" delay={0} />
          <StatItem value="1+" label="Years exp." delay={1} />
          <StatItem value="5+" label="Technologies" delay={2} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-16">
          <MagneticButton
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-primary text-primary-foreground font-medium text-sm glow cursor-pointer"
          >
            <span>View Projects</span>
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={15} />
            </motion.span>
          </MagneticButton>

          <MagneticButton
            href="https://sneha-srinivas-portololio.netlify.app/img/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-medium text-sm hover:border-primary/30 transition-colors cursor-pointer"
          >
            <FileText size={15} />
            Resume
          </MagneticButton>

          <MagneticButton
            href="https://github.com/sneha-srinivas29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-medium text-sm hover:border-primary/30 transition-colors cursor-pointer"
          >
            <Github size={15} />
            GitHub
          </MagneticButton>

          <MagneticButton
            href="https://www.linkedin.com/in/sneha-h-s-3848ba232"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-medium text-sm hover:border-primary/30 transition-colors cursor-pointer"
          >
            <Linkedin size={15} />
            LinkedIn
          </MagneticButton>
        </motion.div>

        {/* Floating code cards */}
        <FloatingCard
          delay={1.2}
          className="absolute top-28 right-8 md:right-16 hidden lg:block"
        >
          <div className="glass-strong rounded-2xl px-4 py-3 glow-sm shadow-soft">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            </div>
            <code
              className="text-xs text-primary"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="text-muted-foreground">const </span>
              <span className="text-foreground">dev</span>
              <span className="text-muted-foreground"> = </span>
              {'{'}<br />
              &nbsp;&nbsp;<span className="text-accent-foreground">name</span>
              <span className="text-muted-foreground">: </span>
              <span className="text-green-500/80">"Sneha"</span>,<br />
              &nbsp;&nbsp;<span className="text-accent-foreground">open</span>
              <span className="text-muted-foreground">: </span>
              <span className="text-orange-400/80">true</span><br />
              {'}'}
            </code>
          </div>
        </FloatingCard>

        <FloatingCard
          delay={1.5}
          className="absolute bottom-36 right-24 hidden lg:block"
        >
          <div className="glass-strong rounded-2xl px-4 py-3 shadow-soft">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span
                className="text-xs text-muted-foreground"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                stack
              </span>
            </div>
            <code
              className="text-xs text-foreground/70"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              React · TypeScript · Node.js
            </code>
          </div>
        </FloatingCard>

        <FloatingCard
          delay={1.8}
          className="absolute top-1/2 right-4 md:right-8 hidden xl:block"
        >
          <div className="glass rounded-xl px-3 py-2 shadow-soft">
            <div className="flex items-center gap-1.5">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span
                className="text-xs text-muted-foreground"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                AI/ML · Python
              </span>
            </div>
          </div>
        </FloatingCard>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="ui-label text-muted-foreground/50 text-[10px]">scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-primary/40 to-transparent"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;