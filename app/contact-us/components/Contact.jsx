"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      className={`bg-[#e9ad64] text-white mb-20  overflow-hidden my-[90px]`}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        exit={{ opacity: 0, x: -100 }}
        className="w-full h-full px-4 py-8 sm:px-6 sm:py-14 lg:px-32 lg:py-20 flex flex-col md:flex-row justify-between items-center"
      >
        {/* Text */}
        <div className="flex w-full flex-col gap-5">
          <h2 className="text-5xl font-bold">
            Contact Us
          </h2>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
