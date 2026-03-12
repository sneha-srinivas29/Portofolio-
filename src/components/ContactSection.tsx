import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Youtube, ExternalLink, ArrowUpRight, Sparkles } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { type: "spring" as const, duration: 0.7, bounce: 0.08 },
  },
};

const socials = [
  { icon: Github,       href: "https://github.com/sneha-srinivas29",                 label: "GitHub",   hue: 250 },
  { icon: Linkedin,     href: "https://www.linkedin.com/in/sneha-h-s-3848ba232",      label: "LinkedIn", hue: 210 },
  { icon: Youtube,      href: "https://www.youtube.com/@Snehatalks_12",               label: "YouTube",  hue: 0   },
  { icon: ExternalLink, href: "https://leetcode.com/Snehasrinivas_12",                label: "LeetCode", hue: 280 },
];

const ContactSection = () => (
  <section id="contact" className="py-28 relative overflow-hidden">
    {/* Ambient blobs */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full blur-3xl pointer-events-none"
      style={{ background: "hsla(250, 80%, 60%, 0.06)" }} />
    <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full blur-3xl pointer-events-none"
      style={{ background: "hsla(320, 70%, 55%, 0.05)" }} />

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="max-w-3xl mx-auto px-6 md:px-8 text-center"
    >
      {/* Eyebrow badge */}
      <motion.div variants={item} className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 ui-label text-primary text-[10px]">
          <motion.span
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary inline-block"
          />
          Open to opportunities
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2 variants={item} className="text-foreground mb-5 mx-auto">
        Let's Build Something{" "}
        <span className="gradient-text">Together</span>
      </motion.h2>

      <motion.p variants={item} className="text-muted-foreground mb-10 max-w-md mx-auto">
        Have a project in mind, want to discuss an opportunity, or just want to connect?
        I'd love to hear from you.
      </motion.p>

      {/* CTA buttons */}
      <motion.div variants={item} className="flex flex-wrap justify-center gap-3 mb-14">
        <motion.a
          href="mailto:snehasrinivashs@gmail.com"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-primary text-primary-foreground font-medium text-sm glow"
        >
          <Mail size={15} />
          snehasrinivashs@gmail.com
          <ArrowUpRight size={13} />
        </motion.a>
        <motion.a
          href="https://sneha-srinivas-portololio.netlify.app/img/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03, borderColor: "hsl(250 85% 60% / 0.35)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/60 bg-card text-foreground font-medium text-sm hover:shadow-soft transition-all"
        >
          Download CV
          <ArrowUpRight size={13} />
        </motion.a>
      </motion.div>

      {/* Divider */}
      <motion.div variants={item} className="flex items-center gap-4 mb-10 max-w-xs mx-auto">
        <div className="flex-1 h-px bg-border/60" />
        <Sparkles size={13} className="text-muted-foreground/40" />
        <div className="flex-1 h-px bg-border/60" />
      </motion.div>

      {/* Social pills */}
      <motion.div variants={item} className="flex flex-wrap justify-center gap-3">
        {socials.map((s) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            whileHover={{
              scale: 1.06,
              boxShadow: `0 4px 20px -4px hsla(${s.hue}, 70%, 60%, 0.25)`,
              borderColor: `hsla(${s.hue || 250}, 70%, 60%, 0.35)`,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/60 bg-card text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            <s.icon size={15} />
            {s.label}
          </motion.a>
        ))}
      </motion.div>

      {/* Footer note */}
      <motion.p
        variants={item}
        className="mt-16 text-xs text-muted-foreground/50 ui-label"
      >
        Designed & built by Sneha Srinivas · {new Date().getFullYear()}
      </motion.p>
    </motion.div>
  </section>
);

export default ContactSection;