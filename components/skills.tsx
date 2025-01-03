"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion"
];

export default function Skills() {
  const { ref } = useSectionInView("Competences");

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      id="competences"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <SectionHeading>Mes Compétences</SectionHeading>

      <motion.div
        className="p-6 shadow-lg bg-white/80 dark:bg-white/10 rounded-2xl backdrop-blur-sm"
        variants={itemVariants}
      >
        <p className="mb-8 text-gray-700 dark:text-white/80">
          Technologies et frameworks que j'utilise quotidiennement pour créer des solutions innovantes
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 transition-all duration-300 bg-white shadow-md group dark:bg-white/5 rounded-xl hover:shadow-xl hover:-translate-y-1"
              variants={itemVariants}
            >
              <span className="font-medium text-gray-900 dark:text-white">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}