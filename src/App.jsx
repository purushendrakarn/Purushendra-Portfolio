import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
