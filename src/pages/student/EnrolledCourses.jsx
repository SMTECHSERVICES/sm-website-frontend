// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../../components/layout/Navbar";
// import { useEffect } from "react";
// import axios from 'axios';
// import {server} from '../../constants/api'

// const enrolledCourses = [
//   {
//     id: 1,
//     title: "React for Beginners",
//     image: "https://via.placeholder.com/400x200.png?text=React+Course",
//     progress: 75,
//   },
//   {
//     id: 2,
//     title: "Tailwind CSS Mastery",
//     image: "https://via.placeholder.com/400x200.png?text=Tailwind+Course",
//     progress: 40,
//   },
//   {
//     id: 3,
//     title: "JavaScript Essentials",
//     image: "https://via.placeholder.com/400x200.png?text=JS+Course",
//     progress: 90,
//   },
// ];

// const EnrolledCourses = () => {
//     const navigate = useNavigate();

//     useEffect(()=>{
//       const fetchCourses = async()=>{
//         try {
//           const response = await axios.get(`${server}/student/getMyCourses`,{
//             withCredentials:true
//           })

          
//         } catch (error) {
          
//         }
//       }
//     })
//   return (
//    <>
//    <Navbar />
//     <div  className="min-h-screen bg-gray-100 p-6 hover:cursor-pointer">
//       <h1 className="text-3xl font-bold mb-6 text-center">My Enrolled Courses</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {enrolledCourses.map((course) => (
//           <div
//           onClick={()=>navigate(`/student/mycourses/${course.id}`)}
//             key={course.id}
//             className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105"
//           >
//             <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
//               <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
//                 <div
//                   className="bg-blue-500 h-4 rounded-full transition-all duration-500"
//                   style={{ width: `${course.progress}%` }}
//                 ></div>
//               </div>
//               <p className="text-sm text-gray-600">{course.progress}% completed</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//    </>
//   );
// };

// export default EnrolledCourses;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from '../../components/layout/Footer'
import axios from 'axios';
import { server } from '../../constants/api';
import { FaSpinner } from "react-icons/fa";

const EnrolledCourses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${server}/student/getMyCourses`, {
          withCredentials: true
        });
        
        if (response.data && response.data.enrolledCourses) {
          setCourses(response.data.enrolledCourses);
        } else {
          setError("No courses found");
        }
      } catch (err) {
        console.error("Failed to fetch courses:", err);
        setError("Failed to load your courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchCourses();
  }, []);

  const handleCourseClick = (courseId) => {
    navigate(`/student/mycourses/${courseId}`);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <FaSpinner className="animate-spin text-4xl text-blue-500" />
          <span className="ml-3 text-lg">Loading your courses...</span>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 max-w-md">
            <p>{error}</p>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">My Enrolled Courses</h1>
        
        {courses.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-sm p-8 max-w-md mx-auto">
              <h2 className="text-2xl font-semibold mb-4">No Courses Enrolled</h2>
              <p className="text-gray-600 mb-6">
                You haven't enrolled in any courses yet. Browse our catalog to find interesting courses!
              </p>
              <button
                onClick={() => navigate('/courses')}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Browse Courses
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.courseId}
                onClick={() => handleCourseClick(course.courseId)}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                <img 
                  src={course.thumbnail || "https://via.placeholder.com/400x200.png?text=Course+Image"} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x200.png?text=Course+Image";
                  }}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 truncate">{course.title}</h2>
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                    <div
                      className="bg-blue-500 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${course.progress.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{course.progress.percentage}% completed</span>
                    <span>
                      {course.progress.completed}/{course.progress.total} lessons
                    </span>
                  </div>
                  
                  {!course.available && (
                    <div className="mt-2 text-xs text-red-500 italic">
                      This course is no longer available
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
   <Footer />
    </>
  );
};

export default EnrolledCourses;