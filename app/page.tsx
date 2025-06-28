"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";
import { Accordion, AccordionItem, Avatar } from "@heroui/react";
import Image from "next/image";



import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function HomePage() {
  const particlesInit = async (engine: Engine): Promise<void> => {
    await loadFull(engine);
  };


  return (
    <section className="relative pt-20 flex flex-col items-center text-center text-white px-4">

      {/* Particles background */}
      <Particles
        id="tsparticles"
        //init={particlesInit}
        options={{
          background: { color: "#000" },
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            number: { value: 80 },
            opacity: { value: 0.2 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Animated Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className={title({ color: "black", size: "lg" })}>Raghav&nbsp;</span>
        <span className={title({ color: "violet", size: "lg" })}>Bhargava</span>
      </motion.h1>

      {/* Typewriter Text */}
      <motion.p
        className="text-xl md:text-2xl mt-4 z-10 text-black dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Typewriter
          words={[
            "Full-Stack Developer",
            "Next.js | React.js | MongoDB | Node.js | TailwindCSS",
            "Hackathon Winner",
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.p>

      {/* Call to Action Buttons */}
      <motion.div
        className="mt-8 flex flex-wrap gap-4 justify-center z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link
          href="/projects"
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105"
        >
          Explore Projects
        </Link>
        <Link
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded-full  shadow-lg hover:scale-105"
        >
          Connect With Me
        </Link>

        <Link
          isExternal
          className={buttonStyles({
            variant: "bordered",
            radius: "full",
            color: "primary",
            className: "text-black shadow-lg px-6 py-3 border border-white rounded-full hover:text-black transition-white hover:scale-105 dark:text-white dark:border-black dark:shadow-lg"
          })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>

      </motion.div>

      {/* Instruction Snippet */}
      <motion.div
        className="mt-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >

      </motion.div>
      <Accordion defaultExpandedKeys={["2"]} selectionMode="multiple" variant="shadow" className="mt-24" itemClasses={{ title: "font-bold text-xl " }}>
        <AccordionItem
          key="1"
          aria-label="About Me"
          subtitle="Press the profile picture to expand"

          startContent={
            <Avatar
              isBordered
              color="primary"
              radius="lg"
              src="/cover-pic.jpg"
            />
          }
          title="About Me"
          className="text-black dark:text-white"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 px-4 py-10">
            <div className="text-lg leading-relaxed max-w-xl">
              Hey, I’m <strong>Raghav Bhargava</strong> — a full-stack developer passionate about building purposeful digital products that blend performance with great design.
              <br /><br />
              With hands-on expertise in Next.js, Node.js, and MongoDB, I build scalable web apps inculcating AI-driven tools, and real-time systems that solve real problems.
              <br /><br />
              From hackathon wins to full-scale launches, I thrive on creative engineering with a strong focus on UX, accessibility, and clean architecture.
              <br /><br />
              Let’s connect — the next big idea might just start here.
              <motion.div
                className="mt-8 flex flex-wrap gap-4 justify-center z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">

                  <Link
                    href="/contact"
                    className="bg-slate-900 text-white px-6 py-3 rounded-full shadow-lg hover:bg-slate-900 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-400 transition-colors"

                  >
                    Connect With Me
                  </Link>


                  <Link
                    href="/RaghavBhargava_Resume.pdf"

                    className="bg-purple-700 dark:bg-cyan-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-600 dark:hover:bg-cyan-400 transition-colors"

                  >
                    View Resume
                  </Link>
                </div>


              </motion.div>
            </div>
            <div className="w-full max-w-2xl overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src="/profile-pic.jpg"
                alt="Raghav Bhargava"
                width={1000}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </AccordionItem>

      </Accordion>

    </section>
  );
}
