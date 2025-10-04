"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.section
      id="welcome"
      key={theme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center 
                 pt-24 sm:pt-20 lg:pt-16 
                 bg-white dark:bg-gray-900 
                 transition-colors duration-500"
    >
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12 
                   flex flex-col-reverse lg:grid lg:grid-cols-2 
                   gap-12 items-center"
      >
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-blue-600 font-medium text-lg"
          >
            Hi, I&apos;m Victor
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-2 text-2xl md:text-4xl font-extrabold leading-tight 
                       text-gray-900 dark:text-white"
          >
            Frontend Developer <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Crafting Sleek & Modern Web Experiences
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 
                       max-w-2xl mx-auto lg:mx-0"
          >
            I specialize in building scalable, user-friendly applications using
            Next.js, React, TypeScript, and TailwindCSS. Currently open to
            <span className="font-semibold text-blue-600"> remote frontend roles </span>
            where I can bring designs to life and solve problems with clean code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition"
            >
              View Projects <FaArrowRight />
            </motion.a>
            <motion.a
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="px-6 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 
                         text-gray-700 dark:text-gray-200 font-sm 
                         hover:border-blue-600 hover:text-blue-600 transition"
            >
              Contact Me
            </motion.a>
            {/* Download CV Button */}
            <motion.a
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
              href="/Victor-Eze-CV.pdf"
              download
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 
                         text-white font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition"
            >
              Download CV <FaDownload />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, -2, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={theme === "dark" ? "/me.png" : "/reverse.png"}
              alt="Victor - Frontend Developer"
              width={300}
              height={300}
              className="w-full max-w-sm rounded-full shadow-lg p-2 border-4 border-blue-600 
                         transition-transform duration-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
