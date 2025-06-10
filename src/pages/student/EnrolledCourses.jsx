import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

const enrolledCourses = [
  {
    id: 1,
    title: "React for Beginners",
    image: "https://via.placeholder.com/400x200.png?text=React+Course",
    progress: 75,
  },
  {
    id: 2,
    title: "Tailwind CSS Mastery",
    image: "https://via.placeholder.com/400x200.png?text=Tailwind+Course",
    progress: 40,
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    image: "https://via.placeholder.com/400x200.png?text=JS+Course",
    progress: 90,
  },
];

const EnrolledCourses = () => {
    const navigate = useNavigate();
  return (
   <>
   <Navbar />
    <div  className="min-h-screen bg-gray-100 p-6 hover:cursor-pointer">
      <h1 className="text-3xl font-bold mb-6 text-center">My Enrolled Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <div
          onClick={()=>navigate(`/student/mycourses/${course.id}`)}
            key={course.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div
                  className="bg-blue-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">{course.progress}% completed</p>
            </div>
          </div>
        ))}
      </div>
    </div>
   </>
  );
};

export default EnrolledCourses;
