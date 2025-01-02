"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { workData, workIntro } from "@/lib/data";
import Image from "next/image";

export default function Work() {
  const { ref } = useSectionInView("Travail");

  return (
    <section ref={ref} id="work" className="scroll-mt-28 mb-28 max-w-[45rem] text-center sm:mb-40">
      <SectionHeading>{workIntro.title}</SectionHeading>
      <div className="mb-10 text-left">
        <p className="mb-8 text-gray-700 dark:text-white/80">
          {workIntro.description}
        </p>
      </div>

      <div className="relative flex flex-col gap-8">
        {/* Timeline line */}
        <div className="absolute left-8 top-3 bottom-3 w-[2px] bg-gray-200 dark:bg-gray-800" />

        {workData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (index * 0.1) }}
            className="group relative grid grid-cols-[64px_1fr_max-content] gap-4 items-center"
          >
            <div className="flex items-center justify-center w-16 h-16 overflow-hidden bg-white border-2 border-gray-200 rounded-full dark:border-gray-800 dark:bg-gray-900">
              <Image 
                src={item.icon}
                alt={`${item.company} icon`}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.location}</p>
            </div>
            <p className="text-gray-500">{item.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}