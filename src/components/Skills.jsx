"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Wrench,
  Bug,
  Workflow,
  Terminal,
  Cpu,
} from "lucide-react";
import { useState } from "react";

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      icon: <Code2 className="w-7 h-7 text-blue-500" />,
      items: [
        "C++",
        "C#",
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Node.js",
        "React.js",
      ],
      gradient: "from-blue-500/10 to-blue-600/5",
    },
    {
      category: "Databases",
      icon: <Database className="w-7 h-7 text-green-500" />,
      items: ["MySQL", "MongoDB"],
      gradient: "from-green-500/10 to-green-600/5",
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-7 h-7 text-yellow-500" />,
      items: [
        "AWS (API Gateway, Cognito, Lambda, Amplify, S3)",
        "CI/CD with AWS Amplify",
        "Azure DevOps",
      ],
      gradient: "from-yellow-400/10 to-yellow-500/5",
    },
    {
      category: "Tools",
      icon: <Wrench className="w-7 h-7 text-purple-500" />,
      items: [
        "SourceTree",
        "GitHub",
        "Jira",
        "Confluence",
        "Figma",
        "Visual Studio",
        "VS Code",
      ],
      gradient: "from-purple-500/10 to-purple-600/5",
    },
    {
      category: "Testing",
      icon: <Bug className="w-7 h-7 text-red-500" />,
      items: ["Jest"],
      gradient: "from-red-500/10 to-red-600/5",
    },
    {
      category: "Methodologies",
      icon: <Workflow className="w-7 h-7 text-orange-500" />,
      items: ["Agile"],
      gradient: "from-orange-500/10 to-orange-600/5",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-28 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Floating Background Icons */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] opacity-10"
      >
        <Cpu className="w-20 h-20 text-blue-400" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-20 right-[8%] opacity-10"
      >
        <Terminal className="w-20 h-20 text-purple-400" />
      </motion.div>

      {/* Section Heading */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight"
        >
          Technical Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 mb-16 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          A balanced stack of modern tools and technologies that power high-performance, scalable, and elegant applications.
        </motion.p>

        {/* Skill Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, i) => (
            <ParallaxCard key={i} skill={skill} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Card Component with Parallax ---------------------- */
function ParallaxCard({ skill, delay }) {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className={`group relative rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-md bg-gradient-to-br ${skill.gradient} 
                  backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400/40`}
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl blur-xl" />

      <div className="flex items-center justify-center gap-3 mb-6">
        <motion.div
          animate={hovered ? { scale: [1, 1.15, 1], opacity: [1, 0.9, 1] } : {}}
          transition={{ duration: 1.2, repeat: hovered ? Infinity : 0 }}
        >
          {skill.icon}
        </motion.div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {skill.category}
        </h3>
      </div>

      <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2 text-left mx-auto max-w-xs">
        {skill.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 leading-relaxed group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
          >
            <span className="text-blue-500 dark:text-blue-400 mt-0.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
