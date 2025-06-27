// // src/components/Timeline.jsx
// const Timeline = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-4xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Our Journey</h2>
//         <ol className="relative border-l-4 border-blue-600 pl-6">
//           <li className="mb-10">
//             <span className="text-blue-600 font-bold">2010:</span>
//             <p className="text-gray-700 ml-2">SM Services founded with vision of career transformation.</p>
//           </li>
//           <li className="mb-10">
//             <span className="text-blue-600 font-bold">2020:</span>
//             <p className="text-gray-700 ml-2">Launched online training and job portal during pandemic.</p>
//           </li>
//           <li className="mb-10">
//             <span className="text-blue-600 font-bold">2023:</span>
//             <p className="text-gray-700 ml-2">Expanded to 12+ cities with payroll & job fair modules.</p>
//           </li>
//           <li className="mb-10">
//             <span className="text-blue-600 font-bold">2025:</span>
//             <p className="text-gray-700 ml-2">Launching MentorConnectBiz.com and AI-based job match system.</p>
//           </li>
//         </ol>
//       </div>
//     </section>
//   );
// };

// export default Timeline;


import { FaBriefcase, FaGlobe, FaUsers, FaRocket } from 'react-icons/fa';

const Timeline = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
          Our Journey
        </h2>
        <ol className="relative border-l-2 border-blue-600">
          {/* 2010 */}
          <li className="mb-12 ml-6 relative">
            <span className="absolute -left-4 top-1.5 bg-blue-600 rounded-full w-3 h-3"></span>
            <div className="flex items-start gap-4">
              <FaBriefcase className="text-blue-600 w-6 h-6 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-blue-700">2010</h3>
                <p className="text-gray-700">
                  SM Services founded with a vision of career transformation.
                </p>
              </div>
            </div>
          </li>

          {/* 2020 */}
          <li className="mb-12 ml-6 relative">
            <span className="absolute -left-4 top-1.5 bg-blue-600 rounded-full w-3 h-3"></span>
            <div className="flex items-start gap-4">
              <FaGlobe className="text-blue-600 w-6 h-6 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-blue-700">2020</h3>
                <p className="text-gray-700">
                  Launched online training and job portal during the pandemic.
                </p>
              </div>
            </div>
          </li>

          {/* 2023 */}
          <li className="mb-12 ml-6 relative">
            <span className="absolute -left-4 top-1.5 bg-blue-600 rounded-full w-3 h-3"></span>
            <div className="flex items-start gap-4">
              <FaUsers className="text-blue-600 w-6 h-6 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-blue-700">2023</h3>
                <p className="text-gray-700">
                  Expanded to 12+ cities with payroll & job fair modules.
                </p>
              </div>
            </div>
          </li>

          {/* 2025 */}
          <li className="ml-6 relative">
            <span className="absolute -left-4 top-1.5 bg-blue-600 rounded-full w-3 h-3"></span>
            <div className="flex items-start gap-4">
              <FaRocket className="text-blue-600 w-6 h-6 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-blue-700">2025</h3>
               <p className="text-gray-700">
  Launching <a href="https://www.mentors.ind.in/" target="_blank" className="text-blue-600 underline">Mentors Connect</a> — India’s first dedicated mentor–mentee networking platform.
</p>

              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Timeline;
