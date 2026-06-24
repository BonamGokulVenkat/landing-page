"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 z-0 hidden lg:block xl:hidden">
        <Image
          src="/images/profile-hero12.jpeg"
          alt="Portrait of Sharath Chandra Kancherla"
          fill
          priority
          className="object-cover object-[65%_center] lg:object-right"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
      </div>

      <div className="absolute inset-0 z-0 hidden xl:block">
        <Image
          src="/images/profile-hero1.jpeg"
          alt="Portrait of Sharath Chandra Kancherla"
          fill
          priority
          className="object-cover object-[65%_center] lg:object-right"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 relative z-10 flex items-center h-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left max-w-2xl mr-auto w-full"
        >
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-light tracking-tighter leading-[1.05] text-white mb-6"
          >
            SHARATH CHANDRA
            <span className="font-display italic font-normal text-xl sm:text-3xl lg:text-4xl text-gray-400 block mt-3 sm:mt-4 tracking-tight">
              &ldquo;A space for the body to remember how to rest.&rdquo;
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="w-full lg:hidden rounded-xl overflow-hidden mb-6 shadow-xl border border-white/10"
          >
            <Image
              src="/images/profile-hero2.jpeg"
              alt="Sharath Chandra holistic mentor"
              width={800}
              height={600}
              priority
              className="w-full h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 0vw"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-16 h-[1px] bg-white/20 mb-6"
          />

          <motion.p
            variants={itemVariants}
            className="small-label text-gray-400 mb-3"
          >
            Healing &bull; Wisdom &bull; Music
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="section-description text-gray-300 max-w-xl"
          >
            I empower individuals with practical tools for{" "}
            <span className="text-blue-600 font-medium">
              holistic well-being
            </span>{" "}
            and physical restoration. I integrate restorative biodynamic touch,
            traditional Japanese bodywork, sound frequency healing, and
            celestial guidance to help you navigate life with clarity, while
            spreading compassion to{" "}
            <span className="text-blue-600 font-medium">
              live as one global family
            </span>
            .
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-2 mt-6"
          >
            {[
              "CST Therapy",
              "Rakkenho Therapy",
              "Sound Therapy",
              "Vedic Astrology",
            ].map((item) => (
              <span
                key={item}
                className="small-label px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 w-full sm:w-auto"
          >
            <a
              href="#sessions"
              className="button-label group inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full transition-all duration-300 hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1"
            >
              Explore Offerings
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#about"
              className="button-label inline-flex items-center justify-center bg-transparent text-white border border-white/30 px-6 py-3 rounded-full transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
            >
              Read Biography
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}