// // src/components/MissionVision.jsx
// const MissionVision = () => {
//   return (
//     <section className="bg-white py-16 px-6">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
//         <div>
//           <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h2>
//           <p className="text-gray-700">
//             To empower individuals and businesses through skill development, job connectivity,
//             and reliable payroll & software solutions that drive success across India.
//           </p>
//         </div>
//         <div>
//           <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h2>
//           <p className="text-gray-700">
//             To become India's leading manpower service brand by bridging the gap between
//             talent and opportunity using innovation, integrity, and impact.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MissionVision;


// src/components/MissionVision.jsx
import React from 'react';

const MissionVision = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Guiding Principles
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform group-hover:-rotate-1 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 h-full transform group-hover:-translate-y-2 transition duration-300">
              <div className="absolute top-0 right-0 -mt-6 mr-6">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                To empower individuals and businesses through skill development, job connectivity,
                and reliable payroll & software solutions that drive success across India.
              </p>
              {/* <div className="mt-8 flex items-center">
                <div className="w-12 h-0.5 bg-blue-600"></div>
                <span className="ml-4 text-sm uppercase tracking-wider font-semibold text-blue-600">Core Purpose</span>
              </div> */}
            </div>
          </div>
          
          {/* Vision Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl transform group-hover:rotate-1 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 h-full transform group-hover:-translate-y-2 transition duration-300">
              <div className="absolute top-0 right-0 -mt-6 mr-6">
                <div className="bg-indigo-600 text-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-indigo-700 mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                To become India's leading manpower service brand by bridging the gap between
                talent and opportunity using innovation, integrity, and impact.
              </p>
              {/* <div className="mt-8 flex items-center">
                <div className="w-12 h-0.5 bg-indigo-600"></div>
                <span className="ml-4 text-sm uppercase tracking-wider font-semibold text-indigo-600">Future Goals</span>
              </div> */}
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block bg-blue-50 rounded-full px-6 py-3">
            <p className="text-gray-700 font-medium">
              <span className="text-blue-600 font-bold">SM Services:</span> Connecting talent with opportunity since 2010
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;