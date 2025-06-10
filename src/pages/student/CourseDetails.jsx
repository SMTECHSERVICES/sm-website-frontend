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
    const fetchCourse = async () => {
      setCourse({
        id: courseId,
        title: "React Full Course",
        thumbnail: "https://via.placeholder.com/800x250?text=React+Course+Banner",
        description:
          "Master React with hands-on projects, hooks, context API, and full deployment. Perfect for beginners and intermediates.",
        mentor: {
          name: "Abhishek Mishra",
          photo: "/mentor1.jpg",
          experience: "5+ years",
          bio: "Expert React Developer with experience in building scalable MERN stack applications.",
        },
        syllabus: [
          "Introduction to React",
          "JSX and Components",
          "State and Props",
          "React Hooks",
          "Routing with React Router",
          "Redux Basics",
          "Connecting to Backend API",
          "Final Project and Deployment",
        ],
        syllabusPdf: "https://example.com/react-full-syllabus.pdf", // Replace with actual PDF link
      });
    };

    fetchCourse();
  }, [courseId]);


 



  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        {course ? (
          <>
            {/* Header */}
            <img
              src={course.thumbnail}
              alt="Course Banner"
              className="w-full rounded shadow mb-4"
            />
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
              <p className="text-gray-700">{course.description}</p>
            </div>

            {/* Enroll Button */}
            <div className="mb-6">
              <button className="bg-green-600 text-white px-6 py-2 rounded shadow hover:cursor-pointer hover:bg-green-700">
                Enroll Now
              </button>
            </div>

            {/* Mentor Info */}
            <div className="bg-white border p-4 rounded shadow mb-6 flex gap-4 items-center">
              <img
                src={course.mentor.photo}
                alt={course.mentor.name}
                className="w-24 h-24 object-cover rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold">{course.mentor.name}</h2>
                <p className="text-sm text-gray-600">Experience: {course.mentor.experience}</p>
                <p className="text-gray-700 text-sm mt-1">{course.mentor.bio}</p>
              </div>
            </div>

            {/* Syllabus */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Course Syllabus</h2>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                {course.syllabus.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>

              {/* PDF Download Link */}
              {course.syllabusPdf && (
                <a
                  href={course.syllabusPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                >
                  📄 Download Full Syllabus (PDF)
                </a>
              )}
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
