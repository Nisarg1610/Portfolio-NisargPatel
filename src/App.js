import React from "react";

import Banner from "./components/banner/Banner";

import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import ParticlesComponent from "./components/Design";

function App() {
  return (
    
    <div className="w-full h-auto bg-bodyColor relative overflow-hidden p-4">
    <div className="max-w-7xl mx-auto text-white relative z-10">
      {/* Header */}
      <Navbar />
      <Banner />
      <Resume />
      <Projects />
      

      
      
      <FooterBottom />
  
         
    
         <div >
        <ParticlesComponent id="Particles"/>
        </div>
        </div>
        </div>
     
    
   
  );
}

export default App;


