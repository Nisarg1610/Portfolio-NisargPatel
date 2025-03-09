import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Computer System Technology - Software Development & Networking Engineering"
            subTitle="Sheridan College"
            result="3.70/4"
            des={["A comprehensive program focused on software development, networking, and system administration. Gained expertise in programming, database management, cloud computing, and cybersecurity. Developed strong problem-solving and analytical skills through hands-on projects and real-world applications, preparing for a dynamic career in the tech industry."]}
          />
          <ResumeCard
            title="Bachelor of Computer Science "
            subTitle="Nirma University"
            result="4.75/5"
            des={["A rigorous program covering core computer science principles, including algorithms, data structures, software engineering, artificial intelligence, and database management. Gained hands-on experience in coding, system design, and problem-solving through research projects, internships, and collaborative team-based learning."]}
          />
       
        </div>
      </div>
     
    </motion.div>
  );
}

export default Education