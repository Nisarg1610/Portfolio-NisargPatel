import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Software Developer.", "Full Stack Developer.", "UI/UX Designer."],
      loop: true,
      typeSpeed: 40,
      deleteSpeed: 20,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">GREETINGS  TO MY  REALM</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Nisarg Patel</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I'm a Software Developer who loves crafting smooth, 
        user-friendly websites. From eye-catching interfaces 
        to sturdy back-end setups, I'm all about creating seamless 
        web experiences. Check out my portfolio to see some of 
        the innovative solutions I've built.
        </p>
        <div className="flex justify-left ">
          <a
            href="https://docs.google.com/document/d/1i6iMD1ZleaiJxw7V6nGDdHnQmLLIV7rS/edit?usp=sharing&ouid=110808522003483690477&rtpof=true&sd=true"  // Replace with the actual path to your resume file
            download="Nisarg_Patel_Resume"  // The name that will be given to the downloaded file
            className="px-4 py-2 bg-transparent border-designColor font-bold rounded-lg shadow-lg backdrop-blur-md border-2 hover:bg-yellow-200 hover:text-black transition-colors duration-300"
>
            Download Resume
          </a>
        </div>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner