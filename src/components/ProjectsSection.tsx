import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, duration: 0.5, bounce: 0 } },
};

const projects = [
  {
    title: "TradeNext B2B Trading Platform",
    description:
      "A full-stack B2B trading platform with real-time data exchange, trade workflows, and integrated finance modules built on Oracle NetSuite ERP.",
    tags: ["React", "TypeScript", "NetSuite", "REST APIs", "Node.js"],
    github: "https://github.com/sneha-srinivas29",
    gradient: "from-[hsl(250,90%,65%)] to-[hsl(280,80%,60%)]",
  },
  {
    title: "Bone Marrow Donation Portal",
    description:
      "A responsive donor registration and matching portal streamlining the bone marrow donation process with secure authentication and database management.",
    tags: ["React", "Node.js", "PostgreSQL", "JWT", "Tailwind CSS"],
    github: "https://github.com/sneha-srinivas29",
    gradient: "from-[hsl(280,80%,60%)] to-[hsl(320,70%,55%)]",
  },
  {
    title: "Plant Disease Detection AI",
    description:
      "Leveraging Zero-Shot Learning and GANs for accurate plant disease identification without predefined class labels, achieving high classification accuracy.",
    tags: ["Python", "Deep Learning", "GANs", "ZSL", "TensorFlow"],
    github: "https://github.com/Sneha-srinivas-nayak/Leveraging-Zero-Shot-Learning-and-Generative-Adversarial-Networks-for-Plant-Disease-Classification",
    gradient: "from-[hsl(320,70%,55%)] to-[hsl(350,80%,60%)]",
  },
  {
    title: "Web Office — Task Management",
    description:
      "A MERN-based time management application for efficient task tracking, scheduling, and team collaboration with real-time updates.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    github: "https://github.com/Sneha-srinivas-nayak/Web_Office",
    gradient: "from-[hsl(200,80%,55%)] to-[hsl(250,90%,65%)]",
  },
  {
    title: "Text Summarization NLP",
    description:
      "NLP project implementing abstractive methods using transformer models for condensing information and generating concise, coherent summaries.",
    tags: ["Python", "NLP", "Transformers", "BERT"],
    github: "https://github.com/Sneha-srinivas-nayak/TEXT_SUMMARAISATION",
    gradient: "from-[hsl(160,60%,45%)] to-[hsl(200,80%,55%)]",
  },
  {
    title: "3D Classroom Explorer",
    description:
      "An immersive 3D educational environment built with OpenGL for interactive virtual learning experiences with realistic rendering.",
    tags: ["OpenGL", "C++", "3D Graphics", "GLUT"],
    gradient: "from-[hsl(30,80%,55%)] to-[hsl(350,80%,60%)]",
  },
];

const ProjectsSection = () => (
  <motion.section
    id="projects"
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    className="py-28"
  >
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      
      <motion.h2 variants={item} className="text-foreground mb-12">
       Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={item}
            whileHover={{ y: -6 }}
            className="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:glow"
          >
            {/* Gradient header bar */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${p.gradient}`} />

            <div className="p-7">
              <h3
                className="text-lg font-semibold text-foreground mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={15} />
                    Source
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default ProjectsSection;
