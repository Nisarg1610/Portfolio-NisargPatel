import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react"; // Arrow Icon

const Skills = () => {
  // Skill categories and their descriptions
  const skillsData = {
    "Front-End & Back-End": `**Front-End:** Experienced in building dynamic and responsive user interfaces using **HTML5, CSS3, JavaScript, TypeScript, and React.js**, with state management handled by **Redux Toolkit**. Proficient in styling frameworks such as **Bootstrap, Tailwind CSS, SCSS, and Material UI** for creating visually appealing designs.

    **Back-End:** Skilled in **Java** with **Spring Boot**, as well as **Node.js** and **Express.js** for server-side development. Well-versed in **PHP** for web applications and **Socket.io** for real-time communication. Strong understanding of **RESTful APIs** for seamless client-server interactions.`,
    
    "Database & DevOps": `**Databases:** Proficient in **MongoDB, MySQL, and PostgreSQL**, with experience using **Prisma and Sequelize** for efficient ORM solutions.
    
    **DevOps:** Skilled in **Docker, CI/CD Pipelines (GitHub Actions, Jenkins), AWS (EC2, S3, Lambda), Azure, and Nginx** to ensure scalable and secure deployments.`,
    
    "Frameworks & Testing": `**Frameworks:** Experienced in working with **Angular, Spring, and Next.js**, with a strong understanding of **GraphQL** for efficient data management.
    
    **Testing:** Proficient in writing and executing tests using **Jest, Mocha, JUnit, and Postman** to ensure high-quality and reliable software.`,
    
    "Project Management & Version Control": `**Project Management:** Well-versed in **Scrum and Agile methodologies**, with hands-on experience using **JIRA** for task tracking and team collaboration.
    
    **Version Control:** Skilled in **Git and GitHub** for effective source code management and collaboration.`,
  };

  // Function to convert '**' to <strong> tags
  const convertToBold = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  // State for selected skill category
  const [selectedSkill, setSelectedSkill] = useState(Object.keys(skillsData)[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-10 pb-40 font-titleFont flex flex-col md:flex-row gap-10"
    >
     
      {/* Left Section - Buttons */}
      <div className="w-full md:w-1/3 flex flex-col gap-4">
      <h2 className="text-3xl md:text-4xl font-bold">Skill Set</h2>

        {Object.keys(skillsData).map((skill, index) => (
          <button
            key={index}
            onClick={() => setSelectedSkill(skill)}
            className={`w-full px-6 py-3 text-sm md:text-base font-medium flex justify-between items-center rounded-lg shadow-md transition duration-300 ${
              selectedSkill === skill
                ? "bg-designColor text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {skill}
            <ChevronRight size={18} className="ml-2" />
          </button>
        ))}
      </div>

      {/* Right Section - Description */}
      <div className="w-full md:w-2/3 p-6 bg-gray-900 rounded-lg shadow-lg">
        <h3 className="text-xl md:text-2xl font-semibold text-designColor">
          {selectedSkill}
        </h3>
        <p
          className="mt-4 text-sm md:text-base text-gray-300 whitespace-pre-line"
          dangerouslySetInnerHTML={{
            __html: convertToBold(skillsData[selectedSkill]),
          }}
        ></p>
      </div>
    </motion.div>
  );
};

export default Skills;
