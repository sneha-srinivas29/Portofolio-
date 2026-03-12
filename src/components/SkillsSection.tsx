import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, duration: 0.5, bounce: 0 } },
};

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Material-UI", "Bootstrap", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Java Spring Boot", "SuiteScript 2.x", "REST APIs", "JWT Auth", "Python"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "FirebaseDB", "Drizzle ORM", "Oracle NetSuite"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "JIRA", "CI/CD", "VSCode", "IntelliJ IDEA", "Agile/Scrum"],
  },
];

const SkillsSection = () => (
  <motion.section
    id="skills"
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    className="py-28"
  >
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <motion.span variants={item} className="ui-label text-primary mb-4 block">
        // Skills
      </motion.span>
      <motion.h2 variants={item} className="text-foreground mb-12">
        What I Work With
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={item}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6 transition-all duration-300 hover:glow-sm"
          >
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center mb-4">
              <cat.icon size={20} className="text-primary-foreground" />
            </div>
            <h3
              className="text-foreground font-semibold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default SkillsSection;
