"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

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
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contactez-moi</SectionHeading>

      <motion.div 
        className="p-6 shadow-lg bg-white/80 dark:bg-white/10 rounded-2xl backdrop-blur-sm"
        variants={itemVariants}
      >
        <p className="mb-8 text-gray-700 dark:text-white/80">
          Je suis actuellement disponible pour des missions freelance et des postes à temps plein.
          Connectons-nous et discutons de la façon dont nous pouvons travailler ensemble !
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* WhatsApp Contact */}
          <motion.a
            href="https://wa.me/77049495"
            className="flex items-center justify-center gap-3 p-4 transition-all duration-300 bg-white shadow-md group dark:bg-white/5 rounded-xl hover:shadow-xl hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
          >
            <div className="p-3 transition-colors rounded-full bg-green-500/10 group-hover:bg-green-500/20">
              <FaWhatsapp className="text-2xl text-green-500" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900 dark:text-white">WhatsApp</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">+77049495</p>
            </div>
          </motion.a>

          {/* Email Contact */}
          <motion.a
            href="mailto:your.email@example.com"
            className="flex items-center justify-center gap-3 p-4 transition-all duration-300 bg-white shadow-md group dark:bg-white/5 rounded-xl hover:shadow-xl hover:-translate-y-1"
            variants={itemVariants}
          >
            <div className="p-3 transition-colors rounded-full bg-blue-500/10 group-hover:bg-blue-500/20">
              <FaEnvelope className="text-2xl text-blue-500" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900 dark:text-white">Emails</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Envoyez-moi un email</p>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/amin-hassan-194827301/"
            className="flex items-center justify-center gap-3 p-4 transition-all duration-300 bg-white shadow-md group dark:bg-white/5 rounded-xl hover:shadow-xl hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
          >
            <div className="p-3 transition-colors rounded-full bg-blue-700/10 group-hover:bg-blue-700/20">
              <FaLinkedin className="text-2xl text-blue-700" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900 dark:text-white">LinkedIn</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Connectons-nous</p>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/yourusername"
            className="flex items-center justify-center gap-3 p-4 transition-all duration-300 bg-white shadow-md group dark:bg-white/5 rounded-xl hover:shadow-xl hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
          >
            <div className="p-3 transition-colors rounded-full bg-gray-500/10 group-hover:bg-gray-500/20">
              <FaGithub className="text-2xl text-gray-700 dark:text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900 dark:text-white">GitHub</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Voir mes projets</p>
            </div>
          </motion.a>
        </div>

        <motion.div 
          className="flex items-center justify-center gap-2 mt-8 text-gray-700 dark:text-white/80"
          variants={itemVariants}
        >
          <FaMapMarkerAlt className="text-red-500" />
          <p>Djibouti, Djibouti</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}