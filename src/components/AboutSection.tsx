import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, duration: 0.5, bounce: 0 } },
};

const techStack = [
  "React", "TypeScript", "Next.js", "Node.js", "Python", "Java",
  "PostgreSQL", "MongoDB", "Tailwind CSS", "Docker", "Git", "Oracle NetSuite",
];

const AboutSection = () => (
  <motion.section
    id="about"
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    className="py-28"
  >
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      
      <motion.h2 variants={item} className="text-foreground mb-10">
        Background
      </motion.h2>

      <div className="grid md:grid-cols-5 gap-12">
        <motion.div variants={item} className="md:col-span-3 space-y-5">
          <p className="text-muted-foreground">
            Passionate Software Development Engineer with 1 year of experience in full-stack development and AI-driven applications. 
            IIIT Sri City graduate (BTech CSE, 2024) with strong foundations in modern web technologies.
          </p>
          <p className="text-muted-foreground">
            Currently working as a Software Engineer at Samunnati, focusing on Oracle NetSuite ERP development, REST API integrations, 
            and bridging business requirements with technical solutions. Previously engineered UI components for IRCTC platforms at Ojas Innovative Technologies.
          </p>
          <p className="text-muted-foreground">
            I specialize in building scalable, production-grade applications using React, TypeScript, Node.js, and cloud-based infrastructure, 
            with a strong eye for clean architecture and user experience.
          </p>
        </motion.div>

        <motion.div variants={item} className="md:col-span-2">
          <p className="ui-label text-muted-foreground mb-4">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 rounded-lg glass text-sm text-foreground font-medium cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default AboutSection;
