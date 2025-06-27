"use client";
import React, { useState } from "react";
import { Card, CardHeader, Image, Button } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Code of War",
    image: "/cow.jpg",
    link: "https://code-of-war.vercel.app/",
    color: "white",
    description: `A competitive coding platform inspired by LeetCode, featuring multi-language support, custom test cases, and real-time analysis — born from our love for both coding and gaming.\n
Our USP? We allow users to compete with friends through a unique Party System. Head over to the Playground to configure custom contest settings with your friends.\n
We’ve transformed competitive coding into an online game you can play with your friends. Dive into the project and experience the magic.\n
\n
🎮 Inspiration:\n
\t• The UI and UX are heavily inspired by the God of War game — from logo to design and nomenclature.\n
\t• Our Party System takes cues from Valorant's lobby-style matchmaking, enabling friends to team up and compete.\n
\n
👤 Personal Dashboard:\n
\t• Track your submission streaks, total problems solved, and detailed problem-wise stats.\n
\t• Add and manage friends with a seamless "Add Friend" system.\n
\t• View your recent activity timeline and receive real-time notifications.\n
\n
🏆 Leaderboard:\n
\t• Analyze your Playground participation history.\n
\t• View performance metrics for each match — accuracy, speed, and completion rate.\n
\t• Compete on global or friend-based leaderboards to see how you stack up.\n
\n
Come and explore how we've blended the thrill of gaming with the challenge of coding to create an unforgettable experience.`
  },
  {
    title: "Feedback System",
    image: "/feedback.jpg",
    link: "https://feedback-system-rt.vercel.app/",
    color: "black",
    description: `An institutional feedback collection system with dynamic form generation and an advanced analytics dashboard.\n
Inspiration? - Absence of a robust and automated feedback system in our College\n
Key Features:\n
\t1. Student Registration — students can register and maintain their profiles.\n
\t2. Admin Portal — secured access for managing the feedback system.\n
\t3. Smart Student Filtering — filter students by stream, subject, or teacher to target feedback forms precisely.\n
\t4. Secure Feedback Distribution — time-bound, single-use feedback links sent via email, accessible only by verified students to prevent spam.\n
\t5. Weighted Feedback — responses from better-performing students are given higher weightage for more accurate results.\n
\t6. Results Dashboard — view performance data:\n
\t\t• Individual Teacher Performance: Highlights each teacher’s feedback.\n
\t\t• Overall Comparison: Visualizes comparative performance across all teachers and against university averages.\n
\t7. Admin Privileges — includes editing student and teacher records, form creation, and complete data control.`
  },
  {
    title: "DisasterSHIELD",
    image: "/ds.jpg",
    link: "https://disaster-shield-ten.vercel.app/",
    color: "black",
    description: `🏆 *DisasterSHIELD* is an award-winning hackathon project designed to revolutionize disaster response and crisis management using intelligent, real-time technology.

🌐 **Key Features:**

1. **Proactive Disaster Alerts**  
   A machine learning–powered alert system that predicts potential natural disasters (like floods or earthquakes) ahead of time, enabling authorities and emergency teams to act early and save lives.

2. **Resource Mapping & Navigation**  
   An interactive geolocation-based map that displays nearby relief centers including food supply hubs, medical facilities, and temporary shelters. Users can get real-time directions to the nearest help point with one click.

3. **AI-Powered Smart Chatbot**  
   Integrated with Google Gemini, the chatbot answers public queries instantly—ranging from safety tips to resource locations—ensuring timely and accurate information during emergencies.

4. **Secure Donation Platform**  
   A seamless and trusted donation gateway powered by Razorpay that connects donors directly with verified disaster relief initiatives, ensuring transparency and rapid fund mobilization.

💡 *Built to empower communities, assist authorities, and save lives when it matters most.*
`

  },
  {
    title: "FundBay",
    image: "/fundbay.jpg",
    link: "https://fund-bay.vercel.app/",
    color: "white",
    description: `A crowdfunding platform connecting donors with individuals in need — whether it’s for personal emergencies, creative content, relief funds, or investment opportunities. A one-stop solution for raising and giving support.`
  },
];


function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleProjectDetails = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen w-full px-4 py-8 flex flex-col items-center space-y-12 mb-10">

      <h1 className="text-[#1d1e22] dark:text-white font-bold text-xl md:text-3xl ">Click on a project card to view more details and visit the live demo.</h1>
      {projects.map((project, index) => (
        <div key={index} className="w-full max-w-4xl space-y-4">
          {/* Card */}
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
              onPress={() => toggleProjectDetails(index)}
              className="relative w-full rounded-xl shadow-xl overflow-hidden cursor-pointer"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

              {/* Card Header */}
              <CardHeader
                className={`absolute z-20 top-4 left-4 font-bold flex-col items-start text-${project.color}`}
              >
                <h4 className="font-semibold text-xl sm:text-2xl">
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

          {/* Expanded Details Section */}
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="dark:bg-[#090a0a] dark:text-[aliceblue] bg-[#4ABDAC] text-[aliceblue] rounded-xl p-6 shadow-md"
              >
                <h5 className="text-xl font-semibold mb-2">{project.title}</h5>
                <p className="text-md mb-4 whitespace-pre-line">{project.description}</p>
                <Button
                  as="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black font-medium hover:scale-105 transition transform"
                >
                  Visit Project →
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default Projects;
