"use client";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  const timeline = [
    {
      role: "Front-End Developer",
      company: "QUESS CORP",
      location: "Bangalore, India",
      years: "Mar 2024 – Jul 2025",
      details: [
        "Spearheaded courier system UI rebuild using React (Vite.js), reducing load times by 40%.",
        "Integrated OAuth 2.0 + Swagger-tested APIs, enhancing security and QA efficiency.",
        "Optimized PostgreSQL queries, reducing report generation time by 70%.",
        "Delivered 15+ features ahead of schedule in Agile sprints, improving release cycles by 20%.",
        "Mentored junior developers on React best practices, reducing review iterations.",
      ],
    },
    {
      role: "Freelance MERN Developer",
      company: "AERONET DYNAMIC SYSTEMS",
      location: "Bangalore, India",
      years: "Jul 2023 – Mar 2024",
      details: [
        "Delivered customer-facing apps using React.js, Node.js, Express, and MongoDB for 500+ users.",
        "Enhanced MySQL indexing, cutting query times by 30%.",
        "Built reusable UI components and REST APIs, reducing development effort by 25%.",
        "Managed client requirements and deliveries independently, leading to repeat business.",
      ],
    },
    {
      role: "Research Analyst",
      company: "SMARTACRE MEDIA SOLUTIONS",
      location: "Kathmandu, Nepal",
      years: "Jun 2021 – Jul 2023",
      details: [
        "Automated workflows using SQL and email protocols, saving 50+ hours per month.",
        "Developed interactive Power BI dashboards, accelerating data-driven decisions.",
        "Built automated email classification engines to optimize marketing campaigns.",
        "Improved campaign targeting accuracy by 18% through performance analytics.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-10">
          {timeline.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm flex items-center gap-1">
                    <Briefcase className="w-4 h-4" /> {exp.company}
                  </p>
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mt-2 sm:mt-0 flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {exp.years}
                </div>
              </div>

              <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1 mb-4">
                <MapPin className="w-4 h-4" /> {exp.location}
              </p>

              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-2 leading-relaxed">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
