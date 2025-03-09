import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        {/* Section Heading */}
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2025</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>

        {/* Timeline Border */}
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* Software Developer Experience */}
          <ResumeCard
            title="Software Developer"
            subTitle="WebX | June 2024 - January 2025"
            result="Toronto, Canada"
            des={[
              "Enhanced system performance by 30% through leading end-to-end development using JavaScript, Python, and Java.",
              "Improved user engagement by designing responsive interfaces with React, Next.js, and Tailwind CSS.",
              "Optimized data retrieval times by 40% by developing server-side applications with Node.js, Express.js, and SQL/MongoDB.",
              "Developed and maintained RESTful and GraphQL APIs, enhancing communication between front-end and back-end systems.",
              "Designed and optimized database schemas, ensuring data integrity and improving query performance by 35%.",
              "Implemented CI/CD pipelines, automating testing and deployment processes to accelerate delivery cycles.",
              "Collaborated with cross-functional teams, including designers, testers, and product managers, to deliver software solutions aligned with business objectives."
            ]}
          />

          {/* Frontend Developer Experience */}
          <ResumeCard
            title="Frontend Developer"
            subTitle="WebX | December 2023 - May 2024"
            result="Toronto, Canada"
            des={[
              "Developed responsive user interfaces using HTML5, CSS3, TypeScript, and JavaScript to ensure seamless experiences across devices.",
              "Enhanced user experience (UX) by working closely with design teams to convert wireframes and mockups into interactive components.",
              "Optimized application performance using techniques like code splitting and lazy loading to reduce load times.",
              "Resolved cross-browser compatibility issues, ensuring consistent functionality across major browsers.",
              "Collaborated in Agile teams, actively participating in sprint planning, daily stand-ups, and working with backend developers and product managers."
            ]}
          />

        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
