"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Code2, Send, CheckCircle2, X } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const contacts = [
    {
      name: "Email",
      icon: <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      link: "mailto:purushendrakarn@outlook.com",
      label: "purushendrakarn@outlook.com",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      link: "https://www.linkedin.com/in/purushendra-karn/",
      label: "linkedin.com/in/purushendra-karn",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6 text-gray-800 dark:text-gray-300" />,
      link: "https://github.com/purushendrakarn",
      label: "github.com/purushendrakarn",
      color: "hover:bg-gray-800 hover:text-white",
    },
    {
      name: "LeetCode",
      icon: <Code2 className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      link: "https://leetcode.com/u/purushendrakarn/",
      label: "leetcode.com/u/purushendrakarn",
      color: "hover:bg-amber-600 hover:text-white",
    },
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      const res = await fetch("https://formspree.io/f/mblpnwen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setShowToast(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative pt-24 pb-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 px-6 overflow-hidden"
    >
      {/* ✅ Success Toast */}
      {showToast && (
        <div className="fixed top-5 right-5 z-50 animate-fade-in">
          <div className="flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg">
            <CheckCircle2 className="w-6 h-6" />
            <span className="font-medium">Message Sent Successfully!</span>
            <button onClick={() => setShowToast(false)} className="ml-3 text-white hover:text-gray-100">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Let’s Connect</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Whether you have a project in mind, a question, or just want to say hi — feel free to reach out
          through any platform or send me a message below.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contacts.map((c) => (
            <a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg ${c.color}`}
            >
              <div className="mb-3">{c.icon}</div>
              <p className="font-semibold">{c.name}</p>
              <p className="text-sm mt-1 text-gray-600 dark:text-gray-400 break-all">{c.label}</p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium shadow transition-all duration-300 w-full ${
                  isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>

              {error && <p className="text-red-500 text-center mt-3">Something went wrong. Please try again later.</p>}
            </form>
          ) : (
            <div className="text-center py-10">
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="text-2xl font-semibold text-green-500 mb-2">Message Sent ✅</h3>
              <p className="text-gray-600 dark:text-gray-400">Thanks for reaching out! I’ll get back to you soon.</p>
            </div>
          )}
        </div>
      </div>

      {/* ✨ Animated Gradient Glow (Footer-style) */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40 blur-sm"
        />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}
