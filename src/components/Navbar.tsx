// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={700}
          offset={-70}
          className="text-xl font-bold tracking-tight cursor-pointer"
        >
          Victor<span className="text-blue-600">Eze</span>
        </ScrollLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={700}
              offset={-70}
              spy={true}
              activeClass="!text-blue-600" // 👈 Force active state
              className="group relative pb-1 cursor-pointer text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors"
            >
              {link.name}
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </ScrollLink>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {theme === "dark" ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={700}
                  offset={-70}
                  spy={true}
                  activeClass="!text-blue-600"
                  onClick={() => setIsOpen(false)}
                  className="block text-lg pb-1 cursor-pointer text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </ScrollLink>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 text-lg hover:text-blue-600 transition-colors"
              >
                {theme === "dark" ? (
                  <>
                    <FaMoon /> Dark Mode
                  </>
                ) : (
                  <>
                    <FaSun /> Light Mode
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
