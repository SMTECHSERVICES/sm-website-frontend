import React from 'react';
import { Link } from 'react-router-dom'
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
const SoftwareDevComponent = ({heading,paragraph,hero}) => {
  return (
   <>
   <section
    
      className="bg-cover bg-center bg-no-repeat relative h-screen flex items-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[white]/60 bg-opacity-90"></div>

      <div className="relative z-10 w-full text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
          {heading} 
        </h1>
        <p className="text-lg md:text-xl text-black mb-10 max-w-3xl mx-auto">
          {paragraph}
        </p>

       
        
      </div>
     
    </section>
   </>
  );
};

export default SoftwareDevComponent;