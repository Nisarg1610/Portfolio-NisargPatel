import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="WEATHER APP"
          des=" Weather App Powered by React and OpenWeather API: Real-Time Forecasts at Your Fingertips"
          src={projectOne}
        />
        <ProjectsCard
          title="News App"
          des=" This News App is a modern platform for delivering the latest news articles across various categories. Built using Vite and React, it offers a fast, responsive, and user-friendly interface for browsing news from multiple sources."
          src={projectTwo}
        />
        <ProjectsCard
          title="To-Do App"
          des=" A To-Do App built with React and Next.js, featuring task management, local storage, and responsive design with Tailwind CSS. It uses React state for real-time updates and Next.js SSR for better performance."
          src={projectThree}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Link Me is a social media platform similar to Instagram and Facebook, allowing users to create profiles, share posts, photos, and videos, and interact through likes, comments, and follows. It is built using PHP with PHPMyAdmin as the backend database and includes Gmail SMTP functionality for email notifications."
          src={projectFour}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" An e-commerce website built with React, featuring product browsing, shopping cart functionality, and user authentication. It uses React state management for real-time updates and dynamic interactions, with a responsive UI built using Tailwind CSS for a modern look and feel."
          src={projectFive}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Real-Time Chatting App Built with Firebase and React: Seamless Messaging Experience"
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects