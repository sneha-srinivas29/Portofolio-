

import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { type: "spring" as const, duration: 0.7, bounce: 0.08 },
  },
};

const experiences = [
  {
    role: "Software Engineer & Tech Product Management",
    company: "Samunnati",
    location: "Chennai, Tamil Nadu",
    period: "Nov 2025 – Present",
    type: "Onsite",
    accentHue: 250,
    gradient: "from-[hsl(250,90%,65%)] to-[hsl(280,80%,60%)]",
    bullets: [
      "Worked extensively on Oracle NetSuite ERP (SuiteScript 2.x) development, implementing Client Scripts, User Event Scripts, and Restlets to automate trade, finance, and operations workflows.",
      "Designed and developed secure REST API integrations between NetSuite and external systems/frontends, enabling real-time data exchange across trade, lending, and reporting modules.",
      "Contributed to end-to-end software development by aligning ERP customizations with business logic, validation rules, and role-based access control (RBAC).",
      "Acted as a bridge between business, product, and engineering teams, translating functional requirements into technical solutions.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Ojas Innovative Technologies Pvt. Ltd.",
    location: "Hyderabad, Telangana",
    period: "Sep 2024 – Mar 2025",
    type: "Onsite",
    accentHue: 280,
    gradient: "from-[hsl(280,80%,60%)] to-[hsl(320,70%,55%)]",
    bullets: [
      "Engineered and deployed user-centric interfaces for IRCTC's e-catering, vendor, and admin platforms using React.js, TypeScript, Redux, ShadCN UI, and Tailwind CSS.",
      "Designed and integrated RESTful APIs using Java Spring Boot within an MVC architecture, implementing JWT-based authentication and RBAC.",
      "Improved backend and database performance through query optimization, pagination, and caching strategies with PostgreSQL/MySQL.",
      "Collaborated in Agile (Scrum) environment using JIRA and GitHub, contributing to sprint planning, code reviews, and CI/CD workflows.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-28 relative overflow-hidden">
    {/* Ambient blobs */}
    <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full blur-3xl pointer-events-none"
      style={{ background: "hsla(250, 80%, 60%, 0.04)" }} />
    <div className="absolute bottom-1/3 -right-32 w-80 h-80 rounded-full blur-3xl pointer-events-none"
      style={{ background: "hsla(280, 70%, 58%, 0.04)" }} />

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="max-w-6xl mx-auto px-6 md:px-8"
    >
      <motion.span variants={item} className="ui-label text-primary mb-4 block">
        // Experience
      </motion.span>
      <motion.h2 variants={item} className="text-foreground mb-14">
        Where I've Worked
      </motion.h2>

      <div className="relative">
        {/* Timeline spine */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="absolute left-5 md:left-9 top-0 bottom-0 w-px origin-top"
          style={{ background: "linear-gradient(to bottom, hsl(250,85%,60%), hsl(280,75%,58%), hsl(320,65%,55%), transparent)" }}
        />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div key={i} variants={item} className="relative pl-14 md:pl-24">
              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 + i * 0.15, bounce: 0.4 }}
                className="absolute left-3 md:left-7 top-5 w-4 h-4 rounded-full"
                style={{
                  background: `linear-gradient(135deg, hsl(${exp.accentHue},85%,60%), hsl(${exp.accentHue + 30},75%,58%))`,
                  boxShadow: `0 0 12px hsla(${exp.accentHue}, 80%, 60%, 0.4)`,
                }}
              />

              <motion.div
                whileHover={{
                  boxShadow: `0 12px 40px -8px hsla(${exp.accentHue}, 70%, 60%, 0.15)`,
                  borderColor: `hsla(${exp.accentHue}, 70%, 60%, 0.3)`,
                }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl overflow-hidden border border-border/60 bg-card transition-colors duration-300"
              >
                {/* Top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${exp.gradient}`} />

                {/* Ambient hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at top left, hsla(${exp.accentHue}, 70%, 60%, 0.04) 0%, transparent 60%)`,
                  }}
                />

                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase
                          size={13}
                          style={{ color: `hsl(${exp.accentHue}, 60%, 52%)` }}
                        />
                        <span
                          className="text-xs font-semibold"
                          style={{ color: `hsl(${exp.accentHue}, 60%, 52%)` }}
                        >
                          {exp.company}
                        </span>
                      </div>
                      <h3
                        className="text-base font-semibold text-foreground leading-snug"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
                      >
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar size={11} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin size={11} />
                        {exp.location}
                      </div>
                      <span
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full ui-label"
                        style={{
                          background: `hsla(${exp.accentHue}, 70%, 60%, 0.08)`,
                          color: `hsl(${exp.accentHue}, 55%, 48%)`,
                          border: `1px solid hsla(${exp.accentHue}, 70%, 60%, 0.18)`,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {exp.bullets.map((b, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * j, duration: 0.4 }}
                        className="text-sm text-muted-foreground leading-relaxed flex gap-3"
                      >
                        <span
                          className="mt-1.5 shrink-0 w-1 h-1 rounded-full"
                          style={{ background: `hsl(${exp.accentHue}, 70%, 60%)` }}
                        />
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Education */}
          <motion.div variants={item} className="relative pl-14 md:pl-24">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.5, bounce: 0.4 }}
              className="absolute left-3 md:left-7 top-5 w-4 h-4 rounded-full bg-card border-2"
              style={{ borderColor: "hsl(250, 85%, 60%)" }}
            />

            <motion.div
              whileHover={{
                boxShadow: "0 12px 40px -8px hsla(250, 70%, 60%, 0.12)",
                borderColor: "hsla(250, 70%, 60%, 0.25)",
              }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl overflow-hidden border border-border/60 bg-card"
            >
              <div className="h-1 w-full bg-gradient-to-r from-[hsl(160,60%,45%)] to-[hsl(250,85%,60%)]" />
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap size={13} className="text-primary" />
                      <span className="text-xs font-semibold text-primary">
                        Indian Institute of Information Technology, Sri City
                      </span>
                    </div>
                    <h3
                      className="text-base font-semibold text-foreground"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
                    >
                      BTech in Computer Science Engineering
                    </h3>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={11} />
                      Dec 2020 – Jul 2024
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin size={11} />
                      Chitoor, Andhra Pradesh
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default ExperienceSection;