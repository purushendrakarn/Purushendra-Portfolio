"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Header({ darkMode, setDarkMode }) {
  const { scrollYProgress } = useScroll();
  const backgroundPosition = useTransform(scrollYProgress, [0, 1], ["0% 0%", "200% 0%"]);

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const { href } of navItems) {
        const section = document.querySelector(href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(href.slice(1));
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.header
      style={{
        backgroundPosition,
        backgroundSize: "200% 100%",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-r from-white/70 via-blue-50/60 to-purple-50/70 
                 dark:from-gray-950/70 dark:via-gray-900/70 dark:to-gray-950/70 
                 border-b border-gray-200/40 dark:border-gray-800/40 shadow-sm transition-all duration-500"
      animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-5 sm:px-8 md:px-14">
        {/* Navigation */}
        <motion.nav
          className="flex flex-wrap justify-center gap-5 sm:gap-8 md:gap-12 
                     text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] font-semibold mx-auto tracking-wider uppercase"
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, i) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.a
                key={item.href}
                href={item.href}
                custom={i}
                variants={textVariants}
                className="relative group text-gray-800 dark:text-gray-200"
                whileHover={{
                  scale: 1.07,
                  transition: { duration: 0.25 },
                }}
              >
                <motion.span
                  className={`relative inline-block bg-clip-text text-transparent bg-gradient-to-r 
                    from-gray-700 via-gray-900 to-gray-700 dark:from-gray-300 dark:via-gray-100 dark:to-gray-300 
                    transition-all duration-500 ease-out 
                    ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-textShimmerSlow"
                        : "group-hover:animate-textShimmer"
                    }`}
                >
                  {item.label}
                </motion.span>

                {/* Underline */}
                <motion.span
                  layoutId="underline"
                  className={`absolute left-0 -bottom-[3px] h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                    transition-all duration-300 ${
                      isActive
                        ? "w-full shadow-[0_0_8px_#60a5fa] animate-pulse-glow"
                        : "w-0 group-hover:w-full"
                    }`}
                />
              </motion.a>
            );
          })}
        </motion.nav>

        {/* Dark Mode Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 sm:p-3 rounded-xl border border-gray-300 dark:border-gray-700 
                     bg-white/60 dark:bg-gray-900/60 hover:bg-gray-100 dark:hover:bg-gray-800 
                     shadow-sm transition-all duration-300"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {darkMode ? (
            <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
          ) : (
            <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
          )}
        </motion.button>
      </div>

      {/* Glow + shimmer keyframes */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 6px #60a5fa, 0 0 12px #9333ea;
            opacity: 1;
          }
          50% {
            box-shadow: 0 0 12px #60a5fa, 0 0 24px #ec4899;
            opacity: 0.9;
          }
        }
        .animate-pulse-glow {
          animation: pulseGlow 2.4s ease-in-out infinite;
        }

        @keyframes textShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-textShimmer {
          background-image: linear-gradient(90deg, #3b82f6, #9333ea, #ec4899, #3b82f6);
          background-size: 200%;
          animation: textShimmer 2.5s linear infinite;
        }
        .animate-textShimmerSlow {
          background-image: linear-gradient(90deg, #3b82f6, #9333ea, #ec4899, #3b82f6);
          background-size: 200%;
          animation: textShimmer 5s linear infinite;
        }

        @media (max-width: 640px) {
          nav a span {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </motion.header>
  );
}
