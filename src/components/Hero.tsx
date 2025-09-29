"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const imageSrc = currentTheme === "dark" ? "/me.png" : "/merev.png";

  return (
    <section className="bg-white dark:bg-gray-900 h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p className="text-blue-600 font-medium text-lg">
            👋 Hi, I&apos;m Victor
          </p>
          <h1 className="mt-2 text-2xl md:text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Frontend Developer <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Crafting Sleek & Modern Web Experiences
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
            I specialize in building scalable, user-friendly applications using
            Next.js, React, TypeScript, and TailwindCSS. Currently open to
            <span className="font-semibold text-blue-600">
              {" "}remote frontend roles
            </span>{" "}
            where I can bring designs to life and solve problems with clean code.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition"
            >
              View Projects <FaArrowRight />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="px-6 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium hover:border-blue-600 hover:text-blue-600 transition"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center lg:justify-end"
        >
          <Image
            src={imageSrc}
            alt="Victor - Frontend Developer"
            width={300}
            height={300}
            className="w-full max-w-sm rounded-full shadow-lg p-2 border-4 border-blue-600"
          />
        </motion.div>
      </div>
    </section>
  );
}
