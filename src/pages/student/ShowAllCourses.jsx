


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import Navbar from '../../components/layout/Navbar'; 
import axios from 'axios';
import { server } from '../../constants/api'; 
import CourseSection from '../../components/layout/CourseSection';
import Footer from '../../components/layout/Footer';






const ShowAllCourses = () => {
  // const [activeCategory, setActiveCategory] = useState('all');
  // const [courses, setCourses] = useState([]);
  // const [loading, setLoading] = useState(true); // Add loading state
  // const [error, setError] = useState(null); // Add error state
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     setError(null);
  //     try {
  //       const response = await axios.get(`${server}/student/get-allCourses`, {
  //         withCredentials: true
  //       });
  //       // Assuming response.data contains an array named 'courses'
  //       setCourses(response?.data); // Access the 'courses' array from the response
  //     } catch (err) {
  //       console.error("Error fetching courses:", err);
  //       setError("Failed to fetch courses. Please try again later."); // Set error to display to the user
  //     } finally {
  //       setLoading(false); // End loading after data fetch
  //     }
  //   };
  //   getData();
  // }, []);

  // const categories = [
  //   { id: 'all', name: 'All Courses' },
  //   { id: 'web-development', name: 'Web Development' },
  //   { id: 'app-development', name: 'App Development' },
  //   { id: 'hr', name: 'HR' },
  //   { id: 'marketing', name: 'Marketing' },
  //   { id: 'digital-marketing', name: 'Digital Marketing' },
  //   { id: 'career-support', name: 'Career Support' }
  // ];

  // const filteredCourses = activeCategory === 'all'
  //   ? courses
  //   : courses.filter(course => course.category === activeCategory);

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter">
  //       <p className="text-xl text-blue-700">Loading Courses...</p>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter">
  //       <p className="text-xl text-red-700">{error}</p>
  //     </div>
  //   );
  // }

  return (
    <>
      <Navbar />
<CourseSection />
<Footer />
    </>
  );
};

export default ShowAllCourses;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../../components/layout/Navbar'; 
// import axios from 'axios';
// import { server } from '../../constants/api'; 

// const ShowAllCourses = () => {
//   // ... existing states and hooks ...
//     const [activeCategory, setActiveCategory] = useState('all');
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true); // Add loading state
//   const [error, setError] = useState(null); // Add error state
//   const navigate = useNavigate();

//   useEffect(() => {
//     const getData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await axios.get(`${server}/student/get-allCourses`, {
//           withCredentials: true
//         });
//         // Assuming response.data contains an array named 'courses'
//         setCourses(response?.data); // Access the 'courses' array from the response
//       } catch (err) {
//         console.error("Error fetching courses:", err);
//         setError("Failed to fetch courses. Please try again later."); // Set error to display to the user
//       } finally {
//         setLoading(false); // End loading after data fetch
//       }
//     };
//     getData();
//   }, []);

//   const categories = [
//     { id: 'all', name: 'All Courses' },
//     { id: 'web-development', name: 'Web Development' },
//     { id: 'app-development', name: 'App Development' },
//     { id: 'hr', name: 'HR' },
//     { id: 'marketing', name: 'Marketing' },
//     { id: 'digital-marketing', name: 'Digital Marketing' },
//     { id: 'career-support', name: 'Career Support' }
//   ];

//   const filteredCourses = activeCategory === 'all'
//     ? courses
//     : courses.filter(course => course.category === activeCategory);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter">
//         <p className="text-xl text-blue-700">Loading Courses...</p>
//       </div>
//     );
//   }

//  if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter">
//         <p className="text-xl text-red-700">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50">
//         {/* ... existing sections (Hero, Video Demo, Categories) ... */}

//         {/* Enhanced Course Grid */}
//         <section className="py-12 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
//             <div className="flex flex-wrap justify-center gap-4 mb-12">
//               {/* ... category buttons ... */}
//             </div>

//             {/* Enhanced Course Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredCourses.map(course => {
//                 // Parse skills whether they're string or array
//                 const skills = typeof course.skillsCovered === 'string'
//                   ? course.skillsCovered.split(',').map(skill => skill.trim())
//                   : course.skillsCovered || [];
                
//                 return (
//                   <div key={course._id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
//                     <div className="relative">
//                       <img
//                         src={course.thumbnail}
//                         alt={course.title}
//                         className="w-full h-48 object-cover"
//                         onError={(e) => { 
//                           e.target.onerror = null; 
//                           e.target.src = "https://placehold.co/600x400?text=No+Image"; 
//                         }}
//                       />
//                       <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded">
//                         {course.duration}
//                       </div>
//                     </div>
                    
//                     <div className="p-6 flex flex-col flex-grow">
//                       <div className="flex justify-between items-start mb-3">
//                         <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
//                           {categories.find(cat => cat.id === course.category)?.name || course.category}
//                         </span>
//                       </div>
                      
//                       <h3 className="text-xl font-bold mb-2 line-clamp-2 h-14">{course.title}</h3>
                      
//                       {/* Instructor Info */}
//                       <div className="flex items-center mb-3">
//                         <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 flex items-center justify-center text-xs text-gray-500 mr-2">
//                           {course.instructor?.fullName?.charAt(0) || 'I'}
//                         </div>
//                         <p className="text-sm text-gray-600">
//                           By {course.instructor?.fullName || 'Unknown Instructor'}
//                         </p>
//                       </div>
                      
//                       <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{course.description}</p>
                      
//                       <div className="mb-4">
//                         <h4 className="text-sm font-semibold mb-2 text-gray-700">Skills Covered:</h4>
//                         <div className="flex flex-wrap gap-2">
//                           {skills.slice(0, 4).map((skill, index) => (
//                             <span 
//                               key={index} 
//                               className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                           {skills.length > 4 && (
//                             <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
//                               +{skills.length - 4} more
//                             </span>
//                           )}
//                         </div>
//                       </div>
                      
//                       <div className="flex justify-between mt-auto pt-4">
//                         <button 
//                           onClick={() => navigate(`/course/${course._id}`)} 
//                           className="text-blue-600 font-medium hover:text-blue-800 transition-colors hover:underline"
//                         >
//                           View Details
//                         </button>
//                         <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-md">
//                           Enroll Now
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
              
//               {filteredCourses.length === 0 && (
//                 <p className="text-center col-span-full text-gray-500 text-lg py-12">
//                   No courses found for selected category.
//                 </p>
//               )}
//             </div>
//           </div>
//         </section>

//         {/* ... existing footer ... */}
//       </div>
//     </>
//   );
// };

// export default ShowAllCourses;

