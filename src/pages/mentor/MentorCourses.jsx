// src/pages/mentor/MentorCourses.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/layout/Navbar";

const MentorCourses = () => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([
    {
      id: "course1",
      title: "React for Beginners",
      description: "Learn the fundamentals of React.js",
      thumbnail: "https://via.placeholder.com/300x180.png?text=React+Course",
    },
    {
      id: "course2",
      title: "Advanced Node.js",
      description: "Master backend with Node and Express",
      thumbnail: "https://via.placeholder.com/300x180.png?text=Node+Course",
    },
  ]);

  return (
    <>
    <Navbar />
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Your Created Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => navigate(`/mentor/courses/${course.id}`)}
            className="cursor-pointer bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default MentorCourses;
