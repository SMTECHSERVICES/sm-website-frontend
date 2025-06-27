import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PastJobFairEventsCard = ({ heading, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="relative w-full max-w-md rounded-3xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image container with zoom effect */}
      <motion.div 
        className="relative w-full h-80 overflow-hidden"
        animate={{ 
          scale: isHovered ? 1.1 : 1,
          transition: { duration: 0.5 }
        }}
      >
        <img 
          src={imageSrc} 
          alt={heading} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.parentNode.innerHTML = `
              <div class="bg-gradient-to-r from-purple-500 to-indigo-600 w-full h-full flex items-center justify-center">
                <div class="text-white text-center">
                  <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p class="mt-2 font-semibold">Image not available</p>
                </div>
              </div>
            `;
          }}
        />
        
        {/* Gradient overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
      
      {/* Content container */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        {/* Heading with slide-up animation */}
        <motion.h3 
          className="text-2xl font-bold text-white mb-2"
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -20 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {heading}
        </motion.h3>
        
        {/* Hidden content that appears on hover */}
       
      </div>
      
      {/* Floating elements */}
     
    </motion.div>
  );
};


export default PastJobFairEventsCard;