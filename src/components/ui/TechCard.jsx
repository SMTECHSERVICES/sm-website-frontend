// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const TechCard = ({ heading, techList }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       className="relative w-full max-w-sm rounded-2xl overflow-hidden"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       whileHover={{ 
//         scale: 1.03,
//         boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2), 0 10px 10px -5px rgba(59, 130, 246, 0.1)"
//       }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//     >
//       {/* Background gradient */}
//       <motion.div 
//         className="absolute inset-0 z-0"
//         initial={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)" }}
//         animate={{
//           background: isHovered 
//             ? "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" 
//             : "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)"
//         }}
//         transition={{ duration: 0.4 }}
//       />
      
//       {/* Glow effect on hover */}
//       <motion.div 
//         className="absolute inset-0 z-0 opacity-0"
//         animate={{ opacity: isHovered ? 0.3 : 0 }}
//         transition={{ duration: 0.3 }}
//         style={{
//           background: "radial-gradient(600px circle at center, rgba(59, 130, 246, 0.4) 0%, transparent 80%)"
//         }}
//       />
      
//       {/* Card content */}
//       <div className="relative z-10 p-6 min-h-[250px] flex flex-col">
//         {/* Header */}
//         <motion.div 
//           className="mb-6"
//           animate={{ 
//             y: isHovered ? -10 : 0,
//             scale: isHovered ? 1.05 : 1
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center mb-4">
//             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//             </svg>
//           </div>
//           <h3 className="text-2xl font-bold text-gray-800">{heading}</h3>
//         </motion.div>
        
//         {/* Technology list */}
//         <div className="mt-auto">
//           <motion.ul className="space-y-2">
//             {techList.map((tech, index) => (
//               <motion.li 
//                 key={index}
//                 className="flex items-center"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ 
//                   opacity: 1, 
//                   x: 0,
//                   transition: { 
//                     delay: 0.1 * index,
//                     duration: 0.3 
//                   }
//                 }}
//                 whileHover={{ 
//                   x: 5,
//                   color: "#3b82f6"
//                 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <motion.span 
//                   className="mr-2 text-blue-500"
//                   animate={{ 
//                     scale: isHovered ? 1.2 : 1,
//                     rotate: isHovered ? 10 : 0
//                   }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </motion.span>
//                 <span className="text-gray-700">{tech}</span>
//               </motion.li>
//             ))}
//           </motion.ul>
//         </div>
        
//         {/* Floating elements */}
//         <motion.div 
//           className="absolute top-4 right-4 text-5xl font-bold text-blue-100"
//           animate={{ 
//             opacity: isHovered ? 0.8 : 0.3,
//             y: isHovered ? -5 : 0
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           {techList.length}
//         </motion.div>
        
//         <motion.div 
//           className="absolute bottom-4 right-4"
//           animate={{ 
//             opacity: isHovered ? 1 : 0,
//             y: isHovered ? 0 : 10
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           <div className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
//             View Details
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };



// export default TechCard


// components/ui/TechCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TechCard = ({ heading, techList }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full rounded-2xl overflow-hidden h-full cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2), 0 10px 10px -5px rgba(59, 130, 246, 0.1)"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background gradient */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)" }}
        animate={{
          background: isHovered 
            ? "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" 
            : "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)"
        }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Glow effect on hover */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-0"
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: "radial-gradient(600px circle at center, rgba(59, 130, 246, 0.4) 0%, transparent 80%)"
        }}
      />
      
      {/* Card content */}
      <div className="relative z-10 p-6 min-h-[250px] flex flex-col">
        {/* Header */}
        <motion.div 
          className="mb-6"
          animate={{ 
            y: isHovered ? -10 : 0,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-12 h-12 rounded-xl bg-[#99D8E3] flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{heading}</h3>
        </motion.div>
        
        {/* Technology list */}
        <div className="mt-auto">
          <motion.ul className="space-y-2">
            {techList.map((tech, index) => (
              <motion.li 
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    delay: 0.1 * index,
                    duration: 0.3 
                  }
                }}
                whileHover={{ 
                  x: 5,
                  color: "#99D1DC"
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.span 
                  className="mr-2 text-blue-500"
                  animate={{ 
                    scale: isHovered ? 1.2 : 1,
                    rotate: isHovered ? 10 : 0
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.span>
                <span className="text-gray-700">{tech}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        
        {/* Floating elements */}
        <motion.div 
          className="absolute top-4 right-4 text-5xl font-bold text-blue-100"
          animate={{ 
            opacity: isHovered ? 0.8 : 0.3,
            y: isHovered ? -5 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          
        </motion.div>
        
        <motion.div 
          className="absolute bottom-4 right-4"
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10
          }}
          transition={{ duration: 0.3 }}
        >
          
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TechCard;