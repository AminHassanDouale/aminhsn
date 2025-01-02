"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { blogData } from "@/lib/data";
import { BsArrowRight } from "react-icons/bs";

export default function Blog() {
  const { ref } = useSectionInView("Blog");

  return (
    <section
      ref={ref}
      id="blog"
      className="scroll-mt-28 mb-28 max-w-[53rem]"
    >
      <SectionHeading>Blog</SectionHeading>
      <div className="mb-8 text-center text-gray-600 dark:text-gray-400">
        {blogData.length} posts so far. I occasionally write about programming, productivity, and more.
      </div>

      <div className="flex flex-col gap-4">
        {blogData.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                delay: index * 0.1,
              },
            }}
            viewport={{ once: true }}
          >
            <article className="p-4 transition-all border border-gray-200 rounded-lg cursor-pointer group hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <BsArrowRight className="transition opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {post.description}
                </p>
              </div>
            </article>
          </motion.div>
        ))}
      </div>
    </section>
  );
}