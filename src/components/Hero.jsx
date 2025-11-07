"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const texts = ["Full Stack Developer", "MERN Stack Engineer", "Tech Enthusiast"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // Typing effect
  useEffect(() => {
    if (index === texts.length) return;

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        prev === texts[index].length + 1
          ? (setReverse(true), prev)
          : reverse
          ? prev - 1
          : prev + 1
      );

      if (reverse && subIndex === 0) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, reverse ? 70 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row justify-between items-center min-h-screen
                 bg-gradient-to-b from-gray-100 via-white to-gray-50
                 dark:from-gray-950 dark:via-gray-900 dark:to-black
                 text-gray-900 dark:text-white transition-colors duration-700
                 m-0 p-0 md:px-24"
    >
      {/* Image Section - LEFT */}
      <div className="flex-1 flex justify-center md:justify-end items-center relative md:pr-16">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center"
        >
          {/* Glowing cyan circular ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: "4px solid transparent",
              background:
                "conic-gradient(from 0deg, rgba(0,255,255,0.9), rgba(0,191,255,0.6), rgba(0,255,255,0.9))",
              borderRadius: "50%",
              boxShadow:
                "0 0 40px 8px rgba(0,255,255,0.9), inset 0 0 30px 6px rgba(0,191,255,0.8)",
            }}
            animate={{
              rotate: 360,
              filter: ["brightness(1)", "brightness(1.4)", "brightness(1)"],
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 8, ease: "linear" },
              filter: { repeat: Infinity, duration: 3, ease: "easeInOut" },
            }}
            whileHover={{
              boxShadow:
                "0 0 55px 12px rgba(0,255,255,1), inset 0 0 40px 10px rgba(0,191,255,0.9)",
            }}
          />

          {/* Photo */}
          <img
            src="pic.png"
            alt="Purushendra Karn"
            className="relative w-[73%] h-[100%] object-cover rounded-full shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Text Section - RIGHT */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-12">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hey, I'm{" "}
          <span className="text-cyan-400 dark:text-cyan-300">
            Purushendra Karn
          </span>
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-4xl font-medium text-gray-700 dark:text-gray-300 min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem]"
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {texts[index].substring(0, subIndex)}
          <span
            className={`text-cyan-400 dark:text-cyan-300 ${
              blink ? "opacity-100" : "opacity-0"
            }`}
          >
            |
          </span>
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-600 dark:text-gray-400 max-w-md text-sm sm:text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          I build modern, scalable web apps with clean UI, robust backend logic,
          and seamless performance across devices.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
