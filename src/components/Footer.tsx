"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side */}
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Victor Eze. All rights reserved.
        </p>

        {/* Center Links */}
        <div className="flex gap-6 text-gray-600 dark:text-gray-400 text-sm">
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
        </div>

        {/* Right Side Socials */}
        <div className="flex gap-4 text-xl text-gray-600 dark:text-gray-400">
          <a
            href="https://github.com/VictorKingsHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/eze-victor-nkemjika"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ezevictornkemjika@gmail.com"
            className="hover:text-blue-600 transition-colors"
          >
            <SiGmail />
          </a>
        </div>
      </div>
    </footer>
  );
}
