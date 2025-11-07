"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Building2,
  Calendar,
  MonitorSmartphone,
  Cpu,
} from "lucide-react";

export default function Projects() {
  const { scrollYProgress } = useScroll();

  // Parallax motion for icons
  const icon1Y = useTransform(scrollYProgress, [0, 1], [80, -60]);
  const icon2Y = useTransform(scrollYProgress, [0, 1], [-60, 100]);

  // Dynamic rotation and blur for holographic effect
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const blur1 = useTransform(scrollYProgress, [0, 1], ["4px", "1px"]);
  const blur2 = useTransform(scrollYProgress, [0, 1], ["6px", "2px"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.35]);

  const smoothY1 = useSpring(icon1Y, { stiffness: 50, damping: 20 });
  const smoothY2 = useSpring(icon2Y, { stiffness: 50, damping: 20 });

  const projects = [
    {
      title: "Washmandu",
      role: "Full Stack React Developer",
      company: "Washmandu Nepal Pvt Ltd",
      period: "2023 - Present",
      desc: "Migrated Washmandu’s legacy static site into a dynamic, scalable React.js platform with AWS Lambda & Cognito authentication. Integrated Redux for efficient global state management.",
      tech: ["React.js", "Node.js", "AWS Lambda", "Redux", "Cognito"],
      link: "https://www.washmandu.com/",
    },
    {
      title: "SAMS Technologies",
      role: "Frontend Developer",
      company: "SAMS Technologies",
      period: "2022 - 2023",
      desc: "Designed and implemented responsive, accessible, and high-performance UIs using React Bootstrap and JavaScript, ensuring modern UX and SEO-friendly architecture.",
      tech: ["React.js", "Bootstrap", "HTML", "CSS", "JavaScript"],
      link: "https://smartacremediasolutions.com/",
    },
    {
      title: "Codeology Technologies",
      role: ".NET Developer",
      company: "Codeology Technologies",
      period: "2021 - 2022",
      desc: "Developed enterprise-level ASP.NET MVC apps and REST APIs using Swagger. Enhanced MySQL database performance through indexing & query optimization.",
      tech: ["C#", "ASP.NET MVC", "MySQL", "Swagger", "Azure DevOps"],
      link: "https://www.thecodeology.com/",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="projects"
      className="relative py-28 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Floating background holographic icons */}
      <motion.div
        style={{
          y: smoothY1,
          rotate: rotate1,
          filter: blur1,
          opacity: glowOpacity,
        }}
        className="absolute top-24 left-[12%] text-blue-400/80 pointer-events-none"
      >
        <MonitorSmartphone className="w-32 h-32 blur-sm drop-shadow-lg" />
      </motion.div>

      <motion.div
        style={{
          y: smoothY2,
          rotate: rotate2,
          filter: blur2,
          opacity: glowOpacity,
        }}
        className="absolute bottom-20 right-[10%] text-purple-400/80 pointer-events-none"
      >
        <Cpu className="w-32 h-32 blur-sm drop-shadow-lg" />
      </motion.div>

      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight"
        >
          Professional Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 mb-16 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Real-world projects where creativity meets engineering — combining
          modern UI design with scalable backend technologies.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 
                         rounded-2xl shadow-lg p-8 text-left transition-all duration-300 hover:-translate-y-2 
                         hover:shadow-2xl hover:border-blue-500/40"
            >
              {/* Glow Layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl blur-xl transition duration-500" />

              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 group-hover:underline underline-offset-4 decoration-blue-300/40">
                  {p.title}
                </h3>
                <motion.a
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>

              {/* Metadata */}
              <p className="text-sm text-gray-500 flex items-center gap-1 mb-1">
                <Building2 className="w-4 h-4 text-blue-400" /> {p.company}
              </p>
              <p className="text-xs text-gray-400 flex items-center gap-1 mb-4">
                <Calendar className="w-4 h-4 text-gray-400" /> {p.period}
              </p>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                {p.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    key={t}
                    className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 
                               text-gray-700 dark:text-gray-200 rounded-full shadow-sm"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              {/* Footer Link */}
              <motion.a
                whileHover={{ x: 4 }}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Explore Project <Code2 className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
