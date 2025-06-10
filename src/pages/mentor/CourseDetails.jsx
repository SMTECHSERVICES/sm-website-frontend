// // src/pages/mentor/CourseDetails.jsx
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { FaYoutube } from "react-icons/fa";

// import SessionForm from "../../components/SessionForm";

// const CourseDetails = () => {
//   const { courseId } = useParams(); // 👈 Get course ID from URL

//   const [showForm, setShowForm] = useState(false);
//   const [sessions, setSessions] = useState([]);
//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//     // Simulate fetching course details from API
//     const fetchCourse = async () => {
//       // Replace with actual API call
//       setCourse({
//         id: courseId,
//         title: "React Full Course",
//         thumbnail: "https://via.placeholder.com/600x200?text=Course+Thumbnail",
//       });
//     };

//     fetchCourse();
//   }, [courseId]);

//   const handleAddSession = (newSession) => {
//     setSessions([...sessions, newSession]);
//     setShowForm(false);
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-4">
//       {course ? (
//         <>
//           {/* Course Header */}
//           <div className="mb-4">
//             <img src="/logo.png"alt="Course Thumbnail" className="w-full rounded shadow" />
//             <h1 className="text-3xl font-bold mt-3">{course.title}</h1>
//             {/* <p className="text-sm text-gray-500">Course ID: {courseId}</p> */}
//           </div>

//           {/* Add Session Button */}
//           {!showForm && (
//             <button
//               onClick={() => setShowForm(true)}
//               className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
//             >
//               + Add Session
//             </button>
//           )}

//           {showForm && <SessionForm onSubmit={handleAddSession} />}

//           {/* Session History */}
//           <div className="mt-8">
//             <h2 className="text-2xl font-semibold mb-3">Session History</h2>
//             <table className="min-w-full text-center table-auto border border-gray-300">
//               <thead>
//                 <tr className="bg-blue-300">
//                   <th className="border p-2">S.no</th>
//                   <th className="border p-2">Title</th>
//                   <th className="border p-2">Notes (PDF)</th>
//                   <th className="border p-2">Video</th>
//                   <th className="border p-2">Live Class Link</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {sessions.map((session, index) => (
//                   <tr key={index} className="border">
//                     <td className="p-2 border">{session.lesson}</td>
//                     <td className="p-2 border">{session.title}</td>
//                     <td className="p-2 border">
//                       {session.pdf ? (
//                         <a href={session.pdf} target="_blank" rel="noreferrer" className="text-blue-600 underline">
//                           View PDF
//                         </a>
//                       ) : (
//                         "—"
//                       )}
//                     </td>
//                    <td className="p-2 border text-center">
//   {session.video ? (
//     <a
//       href={session.video}
//       target="_blank"
//       rel="noreferrer"
//       className="text-red-600 hover:text-red-700 text-lg inline-flex items-center gap-1"
//     >
//       <FaYoutube className="text-2xl" />
//       <span className="hidden sm:inline">Watch</span>
//     </a>
//   ) : (
//     "—"
//   )}
// </td>
//                     <td className="p-2 border">
//                       {session.live ? (
//                         <a href={session.live} target="_blank" rel="noreferrer" className="text-blue-600 underline">
//                           Join Class
//                         </a>
//                       ) : (
//                         "—"
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//                 {sessions.length === 0 && (
//                   <tr>
//                     <td colSpan="4" className="text-center p-4 text-gray-500">
//                       No sessions added yet.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </>
//       ) : (
//         <p>Loading course details...</p>
//       )}
//     </div>
//   );
// };

// export default CourseDetails;


import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

import SessionForm from "../../components/SessionForm";
import Navbar from "../../components/layout/Navbar";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [course, setCourse] = useState(null);
  const formRef = useRef();

  useEffect(() => {
    // Simulate fetching course details from API
    const fetchCourse = async () => {
      setCourse({
        id: courseId,
        title: "React Full Course",
        thumbnail: "https://via.placeholder.com/600x200?text=Course+Thumbnail",
      });
    };
    fetchCourse();
  }, [courseId]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setShowForm(false);
      }
    };

    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);

  const handleAddSession = (newSession) => {
    setSessions([...sessions, newSession]);
    setShowForm(false);
  };

  return (
    <>
    <Navbar />
    <div className="max-w-5xl mx-auto p-4">
      {course ? (
        <>
          {/* Course Header */}
          <div className="mb-4">
            <img
              src="/logo.png"
              alt="Course Thumbnail"
              className="w-full rounded shadow"
            />
            <h1 className="text-3xl font-bold mt-3">{course.title}</h1>
          </div>

          {/* Add Session Button */}
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
            >
              + Add Session
            </button>
          )}

          {showForm && (
            <div ref={formRef}>
              <SessionForm onSubmit={handleAddSession} />
            </div>
          )}

          {/* Session History Table */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">Session History</h2>
            <table className="min-w-full text-center table-auto border border-gray-300">
              <thead>
                <tr className="bg-blue-300">
                  <th className="border p-2">Lesson</th>
                  <th className="border p-2">Title</th>
                  <th className="border p-2">Notes (PDF)</th>
                  <th className="border p-2">Video</th>
                  <th className="border p-2">Live Class Link</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((session, index) => (
                  <tr key={index} className="border">
                    <td className="p-2 border">{session.lesson}</td>
                    <td className="p-2 border">{session.title}</td>
                    <td className="p-2 border">
                      {session.pdf ? (
                        <a
                          href={session.pdf}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 underline"
                        >
                          View PDF
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="p-2 border">
                      {session.video ? (
                        <a
                          href={session.video}
                          target="_blank"
                          rel="noreferrer"
                          className="text-red-600 hover:text-red-700 text-lg inline-flex items-center gap-1"
                        >
                          <FaYoutube className="text-2xl" />
                          <span className="hidden sm:inline">Watch</span>
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="p-2 border">
                      {session.live ? (
                        <a
                          href={session.live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 underline"
                        >
                          Join Class
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                  </tr>
                ))}
                {sessions.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center p-4 text-gray-500">
                      No sessions added yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p>Loading course details...</p>
      )}
    </div>
    </>
  );
};

export default CourseDetails;

