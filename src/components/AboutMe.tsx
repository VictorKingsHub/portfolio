"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGlobe, FaLightbulb } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            I&apos;m <span className="font-semibold text-blue-600">Victor</span>, a
            passionate <span className="text-blue-600 font-medium">Frontend Developer</span> 
            who loves crafting sleek, responsive, and user-friendly web
            applications. I specialize in{" "}
            <span className="font-semibold">Next.js, React, TypeScript, and TailwindCSS</span>, 
            with strong experience in turning designs into high-performing digital experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            With a strong foundation in UI/UX principles and modern frontend tools, 
            I enjoy building products that not only function seamlessly but also look 
            visually appealing. Currently seeking{" "}
            <span className="font-semibold text-blue-600">remote opportunities</span> 
            to collaborate and bring creative ideas to life.
          </motion.p>
        </motion.div>

        {/* Right Floating Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          {/* Floating Card 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 flex items-center gap-4"
          >
            <FaLaptopCode className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Clean Code
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Writing scalable, maintainable, and readable frontend code.
              </p>
            </div>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 flex items-center gap-4"
          >
            <FaGlobe className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Global Mindset
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Building responsive apps that scale for users worldwide.
              </p>
            </div>
          </motion.div>

          {/* Floating Card 3 */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 flex items-center gap-4"
          >
            <FaLightbulb className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Creative Problem Solving
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Transforming ideas into engaging, functional web experiences.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
