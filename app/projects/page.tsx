"use client";
import React from "react";
import { Card, CardHeader, Image } from "@heroui/react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Code of War",
    image: "/cow.jpg",
    link: "https://code-of-war.vercel.app/",
    color:"white"
  },
  {
    title: "Feedback System",
    image: "/feedback.jpg",
    link: "https://feedback-system-rt.vercel.app/",
    color:"black"
  },
  {
    title: "FundBay",
    image: "/fundbay.jpg",
    link: "https://fund-bay.vercel.app/",
    color:"white"
  },
];

function Projects() {
  const openProject = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen w-full px-4 py-8 flex flex-col items-center space-y-12 mb-10">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.3 + index * 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full max-w-4xl"
        >
          <Card
            isPressable
            onPress={() => openProject(project.link)}
            className="relative w-full rounded-xl shadow-xl overflow-hidden"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

            {/* Card Header */}
            <CardHeader className={`absolute z-20 top-4 left-4 font-bold flex-col items-start text-${project.color}`}>
              <h4 className="font-semibold text-xl sm:text-2xl">
                {project.title}
              </h4>
              <p className="text-sm mt-2">Click to open project</p>
            </CardHeader>

            {/* Image Section */}
            <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
              <Image
                removeWrapper
                alt={project.title}
                className="w-full h-full object-cover object-top"
                src={project.image}
              />
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default Projects;
