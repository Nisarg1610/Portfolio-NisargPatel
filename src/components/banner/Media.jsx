import React from 'react';
import {FaReact, FaGoogle, FaGithub, FaStackOverflow } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const Media = () => {
  const googleUrl = "https://developers.google.com/profile/u/nisarg369";
  const gitUrl = "https://github.com/Nisarg1610";
  const stackUrl = "https://stackoverflow.com/users/23651957/nisarg-patel"; // Replace with your LinkedIn profile URL

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4 shadow-inner">
          <a href={googleUrl} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGoogle />
          </a>
          <a href={gitUrl} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
          <a href={stackUrl} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaStackOverflow />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
