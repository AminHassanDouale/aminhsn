"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaGraduationCap, FaLaptopCode, FaBrain, FaBriefcase } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { BiMovie } from "react-icons/bi";
import { BsBookHalf } from "react-icons/bs";
import { GiBookCover } from "react-icons/gi";

export default function About() {
  const { ref } = useSectionInView("À propos");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>À propos de moi</SectionHeading>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-4 text-left sm:flex-row"
        >
          <FaGraduationCap className="flex-shrink-0 w-8 h-8 text-blue-500" />
          <p>
            Après avoir obtenu mon diplôme en{" "}
            <span className="font-medium">Ingénierie Informatique</span>, j'ai décidé de poursuivre ma
            passion pour la programmation. Je me suis inscrit à un bootcamp de programmation et j'ai appris le{" "}
            <span className="font-medium">développement web full-stack</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-4 text-left sm:flex-row"
        >
          <FaBrain className="flex-shrink-0 w-8 h-8 text-purple-500" />
          <p>
            <span className="italic">Ce que je préfère dans la programmation</span> est
            l'aspect résolution de problèmes. J'❤️ le
            sentiment de finalement trouver une solution à un problème.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-4 text-left sm:flex-row"
        >
          <FaLaptopCode className="flex-shrink-0 w-8 h-8 text-green-500" />
          <p>
            Ma stack principale est{" "}
            <span className="font-medium">
              Django, Laravel, Livewire(Volt), Next.js, Node.js, PostgreSql
            </span>
            . Je suis également familier avec l'analyse de données et le data mining.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-4 text-left sm:flex-row"
        >
          <FaBriefcase className="flex-shrink-0 w-8 h-8 text-orange-500" />
          <p>
            Je suis toujours à la recherche d'apprendre de nouvelles technologies. Je recherche actuellement un{" "}
            <span className="font-medium">poste à temps plein</span> en tant que développeur
            logiciel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="pt-6 mt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="mb-4 text-center">
            <span className="italic">Quand je ne code pas</span>, j'aime :
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 justify-items-center">
            <div className="flex flex-col items-center gap-2">
              <IoGameController className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              <span className="text-sm">Jeux Vidéo</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BiMovie className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              <span className="text-sm">Films</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <GiBookCover className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              <span className="text-sm">Lecture du Coran</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BsBookHalf className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              <span className="text-sm">Apprentissage</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}