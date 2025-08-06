"use client"
import React from 'react'
import { motion } from "framer-motion";
import { Card, CardHeader, Image } from "@heroui/react";

const page = () => {

    const projects = [
        {
            title: "Grow My Therapy",
            image: "/growmytherapy.jpg",
            link: "https://grow-my-therapy-assignment-r4i5.vercel.app/",
            color: "black",
        },
        {
            title: "Figma Assignment",
            image: "/figma.jpg",
            link: "https://figma-assignment-css.vercel.app/",
            color: "black",
        }
    ]


    return (
        <div className="min-h-screen w-full px-4 py-8 flex flex-col items-center space-y-12 mb-10">
            {projects.map((project, index) => (
                <div key={index} className="w-full max-w-4xl space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.3 + index * 0.2, ease: "easeOut" }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full"
                    >
                        <Card
                            isPressable
                            onClick={() => { window.open(project.link, '_blank') }}
                            className="relative w-full rounded-xl shadow-xl overflow-hidden cursor-pointer"
                        >
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

                            {/* Card Header */}
                            <CardHeader
                                className={`absolute z-20 top-4 left-4 font-bold flex-col items-start text-${project.color}`}
                            >
                                <h4 className="font-semibold text-xl sm:text-2xl mx-auto">
                                    {project.title}
                                </h4>
                            </CardHeader>

                            {/* Image */}
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
                </div>))}
        </div>
    )
}

export default page
