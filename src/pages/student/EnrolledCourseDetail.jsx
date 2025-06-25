// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { FaYoutube } from "react-icons/fa";
// import Navbar from "../../components/layout/Navbar";
// import {server} from '../../constants/api';
// import axios from axios;

// const EnrolledCourseDetail = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);
//   const [sessions, setSessions] = useState([]);

//   useEffect(() => {
//     // Simulate API fetch
//     const fetchCourse = async () => {
//      try {
//        const response = await axios.get(`${server}/student/myCourse/${id}`);
//      } catch (error) {
      
//      }
//     };
//     fetchCourse();
//   }, [id]);

//   const handleCheckboxChange = (index) => {
//     const updated = [...sessions];
//     updated[index].completed = !updated[index].completed;
//     setSessions(updated);
//   };

//   const completedCount = sessions.filter((s) => s.completed).length;
//   const progress = sessions.length
//     ? Math.round((completedCount / sessions.length) * 100)
//     : 0;

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-5xl mx-auto p-4">
//         {course ? (
//           <>
//             {/* Course Header */}
//             <div className="mb-4">
//               <img
//                 src={course.thumbnail}
//                 alt="Course Thumbnail"
//                 className="w-full rounded shadow"
//               />
//               <h1 className="text-3xl font-bold mt-3">{course.title}</h1>
//               <p className="text-sm text-gray-600 mt-1">
//                 Completion: {progress}% ({completedCount}/{sessions.length})
//               </p>
//               <div className="w-full bg-gray-200 h-4 rounded-full mt-2">
//                 <div
//                   className="bg-green-500 h-4 rounded-full"
//                   style={{ width: `${progress}%` }}
//                 />
//               </div>
//             </div>

//             {/* Session History Table */}
//             <div className="mt-8">
//               <h2 className="text-2xl font-semibold mb-3">Session History</h2>
//               <table className="min-w-full text-center table-auto border border-gray-300">
//                 <thead>
//                   <tr className="bg-blue-300">
//                     <th className="border p-2">✓</th>
//                     <th className="border p-2">Lesson</th>
//                     <th className="border p-2">Title</th>
//                     <th className="border p-2">Notes (PDF)</th>
//                     <th className="border p-2">Video</th>
//                     <th className="border p-2">Live Class Link</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {sessions.length > 0 ? (
//                     sessions.map((session, index) => (
//                       <tr key={index} className="border">
//                         <td className="p-2 border">
//                           <input
//                             type="checkbox"
//                             checked={session.completed}
//                             onChange={() => handleCheckboxChange(index)}
//                             className="w-4 h-4"
//                           />
//                         </td>
//                         <td className="p-2 border">{session.lesson}</td>
//                         <td className="p-2 border">{session.title}</td>
//                         <td className="p-2 border">
//                           {session.pdf ? (
//                             <a
//                               href={session.pdf}
//                               target="_blank"
//                               rel="noreferrer"
//                               className="text-blue-600 underline"
//                             >
//                               View PDF
//                             </a>
//                           ) : (
//                             "—"
//                           )}
//                         </td>
//                         <td className="p-2 border">
//                           {session.video ? (
//                             <a
//                               href={session.video}
//                               target="_blank"
//                               rel="noreferrer"
//                               className="text-red-600 hover:text-red-700 text-lg inline-flex items-center gap-1"
//                             >
//                               <FaYoutube className="text-2xl" />
//                               <span className="hidden sm:inline">Watch</span>
//                             </a>
//                           ) : (
//                             "—"
//                           )}
//                         </td>
//                         <td className="p-2 border">
//                           {session.live ? (
//                             <a
//                               href={session.live}
//                               target="_blank"
//                               rel="noreferrer"
//                               className="text-blue-600 underline"
//                             >
//                               Join Class
//                             </a>
//                           ) : (
//                             "—"
//                           )}
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="6" className="text-center p-4 text-gray-500">
//                         No sessions added yet.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </>
//         ) : (
//           <p>Loading course details...</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default EnrolledCourseDetail;


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import Navbar from "../../components/layout/Navbar";
import { server } from '../../constants/api';
import axios from 'axios';

const EnrolledCourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${server}/student/myCourse/${id}`,{
          withCredentials:true
        });
        setCourse(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to load course details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  // const handleCheckboxChange = (lessonId) => {
  //   // In a real app, you would send an API request to update completion status
  //   setCourse(prev => ({
  //     ...prev,
  //     lessons: prev.lessons.map(lesson => 
  //       lesson._id === lessonId 
  //         ? { ...lesson, isCompleted: !lesson.isCompleted } 
  //         : lesson
  //     ),
  //     completedLessons: prev.lessons.some(l => 
  //       l._id === lessonId && !l.isCompleted
  //     )
  //       ? [...prev.completedLessons, lessonId]
  //       : prev.completedLessons.filter(id => id !== lessonId)
  //   }));
  // };

  const handleCheckboxChange = async (lessonId) => {
  try {
    const newCompletedStatus = !course.lessons.find(l => l._id === lessonId).isCompleted;
    
    // Optimistic UI update
    const updatedCourse = { ...course };
    updatedCourse.lessons = updatedCourse.lessons.map(lesson => 
      lesson._id === lessonId 
        ? { ...lesson, isCompleted: newCompletedStatus } 
        : lesson
    );
    
    updatedCourse.completedLessons = newCompletedStatus
      ? [...course.completedLessons, lessonId]
      : course.completedLessons.filter(id => id !== lessonId);
    
    setCourse(updatedCourse);

    // Send update to server
    await axios.patch(`${server}/student/lesson/${lessonId}`, {
      completed: newCompletedStatus
    }, {
      withCredentials:true
    });
    
  } catch (err) {
    console.error("Failed to update lesson status", err);
    // Revert UI on error
    setCourse(course);
  }
};

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="max-w-5xl mx-auto p-4">
          <p>Loading course details...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="max-w-5xl mx-auto p-4">
          <p className="text-red-500">{error}</p>
        </div>
      </>
    );
  }

  if (!course) {
    return (
      <>
        <Navbar />
        <div className="max-w-5xl mx-auto p-4">
          <p>Course not found</p>
        </div>
      </>
    );
  }

  const completedCount = course.lessons.filter(l => l.isCompleted).length;
  const totalLessons = course.lessons.length;
  const progress = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-4">
        {/* Course Header */}
        <div className="mb-4">
         
          <h1 className="text-3xl font-bold mt-3">{course.title}</h1>
          <p className="text-sm text-gray-600 mt-1">
            Completion: {progress}% ({completedCount}/{totalLessons})
          </p>
          <div className="w-full bg-gray-200 h-4 rounded-full mt-2">
            <div
              className="bg-green-500 h-4 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Lessons Table */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Course Lessons</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-center table-auto border border-gray-300">
              <thead>
                <tr className="bg-blue-300">
                  <th className="border p-2">✓</th>
                  <th className="border p-2">Lesson #</th>
                  <th className="border p-2">Title</th>
                  <th className="border p-2">Notes (PDF)</th>
                  <th className="border p-2">Video</th>
                  <th className="border p-2">Live Class</th>
                </tr>
              </thead>
              <tbody>
                {course.lessons.length > 0 ? (
                  course.lessons.map((lesson) => (
                    <tr 
                      key={lesson._id} 
                      className={`border ${lesson.isCompleted ? 'bg-green-50' : ''}`}
                    >
                      <td className="p-2 border">
                        <input
                          type="checkbox"
                          checked={lesson.isCompleted}
                          onChange={() => handleCheckboxChange(lesson._id)}
                          className="w-4 h-4 cursor-pointer"
                        />
                      </td>
                      <td className="p-2 border">{lesson.lessonNumber}</td>
                      <td className="p-2 border font-medium">{lesson.title}</td>
                      <td className="p-2 border">
                        {lesson.notesPdfLink ? (
                          <a
                            href={lesson.notesPdfLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            View PDF
                          </a>
                        ) : (
                          "—"
                        )}
                      </td>
                      <td className="p-2 border">
                        {lesson.videoLink ? (
                          <a
                            href={lesson.videoLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-red-600 hover:text-red-700 flex items-center justify-center gap-1"
                          >
                            <FaYoutube className="text-xl" />
                            <span>Watch</span>
                          </a>
                        ) : (
                          "—"
                        )}
                      </td>
                      <td className="p-2 border">
                        {lesson.liveClassLink ? (
                          <a
                            href={lesson.liveClassLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Join Class
                          </a>
                        ) : (
                          "—"
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center p-4 text-gray-500">
                      No lessons available for this course
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrolledCourseDetail;