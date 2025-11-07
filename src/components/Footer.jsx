"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20;
    const y = (e.clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  const links = [
    { name: "GitHub", icon: <Github className="w-5 h-5" />, href: "https://github.com/purushendrakarn" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/purushendra-karn/" },
    { name: "3D Portfolio", icon: <Globe className="w-5 h-5" />, href: "https://transcendent-fairy-7d7dd7.netlify.app/" },
  ];

  return (
    <footer
      onMouseMove={handleMouseMove}
      className="relative -mt-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200/60 dark:border-gray-700/60 overflow-hidden"
    >
      {/* ✨ Animated Gradient Line Between Contact & Footer */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 inset-x-0 h-[2px] bg-[linear-gradient(90deg,#3b82f6,#a855f7,#ec4899,#3b82f6)] bg-[length:200%_100%] blur-sm opacity-70"
      />

      {/* Ambient shimmer */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ rotateX: mousePos.y, rotateY: -mousePos.x }}
          className="absolute -inset-1 bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.08)_40%,rgba(255,255,255,0)_80%)] opacity-20 blur-[1px]"
        />
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 text-sm mb-6"
        >
         
          <span className="font-semibold text-blue-600 dark:text-blue-400"> © {new Date().getFullYear()}{" "}Purushendra Karn</span>. 
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6"
        >
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="group inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              <span className="text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition">
                {link.icon}
              </span>
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Decorative Line */}
        <div className="mt-10 h-[1px] w-2/3 mx-auto bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>
    </footer>
  );
}
