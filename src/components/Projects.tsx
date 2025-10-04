// src/components/Projects.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Sea Never Dry",
    description: "A sleek personal portfolio built with Next.js, TailwindCSS, and Framer Motion.",
    image: "/seaneverdry.PNG",
    demoLink: "https://www.seaneverdrynatural.com.ng/",
    codeLink: "https://github.com/VictorKingsHub/seaneverdry",
  },
  {
    title: "Taughtlevel Technologies",
    description: "A modern e-commerce store with product filtering and cart functionality.",
    image: "/consults.PNG",
    demoLink: "https://www.taughtlevel.com.ng/",
    codeLink: "https://github.com/VictorKingsHub/technologies",
  },
  {
    title: "AI Chatbot",
    description: "A conversational AI assistant powered by OpenAI and Next.js API routes.",
    image: "/consults.PNG",
    demoLink: "https://your-chatbot-link.com",
    codeLink: "https://github.com/your-repo",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white"
        >
          My <span className="text-blue-600">Projects</span>
        </motion.h2>

        {/* Project Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col"
            >
              {/* Project Image */}
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 flex-1">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="mt-4 flex gap-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm flex items-center gap-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                  >
                    Live Demo <FaExternalLinkAlt size={14} />
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-blue-600 hover:text-blue-600 transition"
                  >
                    Code <FaGithub size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
