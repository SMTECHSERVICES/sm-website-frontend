// import { useState, useEffect, useRef } from "react";
// import { useParams } from "react-router-dom";
// import { server } from "../../constants/api";
// import axios from "axios";
// import Navbar from "../../components/layout/Navbar";

// const CourseDetails = () => {
//   const { courseId } = useParams();

//   const [course, setCourse] = useState(null);
  

//  useEffect(()=>{

//   const fetchDetails = async()=>{
//     try {
//       const response = await axios.get(`${server}/student/course-details/${courseId}`);

//     } catch (error) {
      
//     }
//   }

//  },[courseId]);


 



//   return (
//     <>
//       <Navbar />
//       <div className="max-w-6xl mx-auto p-4">
//         {course ? (
//           <>
//             {/* Header */}
//             <img
//               src={course.thumbnail}
//               alt="Course Banner"
//               className="w-full rounded shadow mb-4"
//             />
//             <div className="mb-6">
//               <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
//               <p className="text-gray-700">{course.description}</p>
//             </div>

//             {/* Enroll Button */}
//             <div className="mb-6">
//               <button className="bg-green-600 text-white px-6 py-2 rounded shadow hover:cursor-pointer hover:bg-green-700">
//                 Enroll Now
//               </button>
//             </div>

//             {/* Mentor Info */}
//             <div className="bg-white border p-4 rounded shadow mb-6 flex gap-4 items-center">
//               <img
//                 src={course.mentor.photo}
//                 alt={course.mentor.name}
//                 className="w-24 h-24 object-cover rounded-full"
//               />
//               <div>
//                 <h2 className="text-xl font-bold">{course.mentor.name}</h2>
//                 <p className="text-sm text-gray-600">Experience: {course.mentor.experience}</p>
//                 <p className="text-gray-700 text-sm mt-1">{course.mentor.bio}</p>
//               </div>
//             </div>

//             {/* Syllabus */}
//             <div className="mb-6">
//               <h2 className="text-2xl font-semibold mb-2">Course Syllabus</h2>
//               <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
//                 {course.syllabus.map((topic, i) => (
//                   <li key={i}>{topic}</li>
//                 ))}
//               </ul>

//               {/* PDF Download Link */}
//               {course.syllabusPdf && (
//                 <a
//                   href={course.syllabusPdf}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
//                 >
//                   📄 Download Full Syllabus (PDF)
//                 </a>
//               )}
//             </div>

           
           
//           </>
//         ) : (
//           <p>Loading course details...</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default CourseDetails;


import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { server } from "../../constants/api";
import axios from "axios";
import Navbar from "../../components/layout/Navbar";
import { FaClock, FaTag, FaMoneyBillWave, FaDownload } from "react-icons/fa";

const CourseDetails = () => {
  const navigate= useNavigate()
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${server}/student/course-details/${courseId}`);
        setCourse(response?.data?.courseDetail);
        setError(null);
      } catch (err) {
        setError("Failed to load course details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [courseId]);

  const handleEnroll = async () => {
    try {
      const response = await axios.post(
        `${server}/student/enroll/${courseId}`,
        {}, // Empty body if not needed
        { withCredentials: true } // Include credentials/cookies
      );
      
      if (response.status === 200 || response.status === 201) {
        navigate(`/student/mycourses/${courseId}`);
      }
    } catch (error) {
      if (error?.response) {
        switch (error?.response?.status) {
          case 401:
            alert('Please login to enroll in courses');
            // Optionally redirect to login
            // navigate('/login');
            break;
          case 400:
            alert('You are already enrolled in this course');
            navigate(`/student/mycourses/${courseId}`);
            break;
          case 404:
            alert('Course not found');
            break;
          default:
            alert('Enrollment failed. Please try again later.');
        }
      } else {
        console.error('Enrollment error:', error);
        alert('Network error. Please check your connection.');
      }
    }
  };

  // Format skills string into array
  const formatSkills = (skills) => {
    if (!skills) return [];
    return skills.split(",").map(skill => skill.trim());
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4 min-h-screen">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500 text-xl">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Retry
            </button>
          </div>
        ) : course ? (
          <>
            {/* Course Header */}
            <div className="flex flex-col md:flex-row gap-8 mb-10">
              <div className="md:w-2/3">
                <img
                  src={course.thumbnail}
                  alt="Course Banner"
                  className="w-full h-80 object-cover rounded-xl shadow-lg mb-6"
                />
                
                <div className="mb-6">
                  <h1 className="text-4xl font-bold mb-4 text-gray-800">{course.title}</h1>
                  <p className="text-gray-700 text-lg leading-relaxed">{course.description}</p>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 sticky top-24">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Course Details</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <FaClock className="text-blue-500 mr-3" />
                        <div>
                          <p className="text-gray-600">Duration</p>
                          <p className="font-semibold">{course.duration}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <FaTag className="text-blue-500 mr-3" />
                        <div>
                          <p className="text-gray-600">Category</p>
                          <p className="font-semibold capitalize">{course.category}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <FaMoneyBillWave className="text-blue-500 mr-3" />
                        <div>
                          <p className="text-gray-600">Price</p>
                          <p className="font-semibold">
                            {course.price === 0 ? "Free" : `$${course.price}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button onClick={handleEnroll} className="w-full bg-gradient-to-r cursor-pointer from-green-500 to-emerald-600 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-0.5">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Skills You'll Learn</h2>
              <div className="flex flex-wrap gap-3">
                {formatSkills(course.skillsCovered).map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Instructor Section */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Instructor</h2>
              <div className="flex items-start gap-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{course.instructor.fullName}</h3>
                  <p className="text-gray-600 mb-3">Expert Instructor</p>
                  <p className="text-gray-700">
                    Passionate educator with years of experience in teaching and industry practice.
                  </p>
                </div>
              </div>
            </div>

            {/* Syllabus Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Course Syllabus</h2>
              <p className="text-gray-700 mb-6">
                Download the complete syllabus to see all the topics covered in this course
              </p>
              
              {course.syllabusPdfLink && (
                <a
                  href={course.syllabusPdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors"
                >
                  <FaDownload className="mr-2" />
                  Download Full Syllabus (PDF)
                </a>
              )}
            </div>
          </>
        ) : (
          <p className="text-center py-10 text-gray-500">No course data available</p>
        )}
      </div>
    </>
  );
};

export default CourseDetails;
