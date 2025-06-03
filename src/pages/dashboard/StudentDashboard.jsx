// src/pages/dashboards/StudentDashboard.jsx
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useState } from "react";

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([
    { title: "Career Skills", progress: 75 },
    { title: "Job Preparation", progress: 40 },
  ]);

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Courses Enrolled</h3>
            <p className="text-2xl">{enrolledCourses.length}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Completed (%)</h3>
            <p className="text-2xl">
              {Math.round(enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length)}%
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Account Status</h3>
            <p className="text-green-600 font-bold">Active</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-4">Your Courses</h3>
          <ul className="space-y-2">
            {enrolledCourses.map((course, index) => (
              <li key={index} className="p-2 border rounded-md flex justify-between">
                <span>{course.title}</span>
                <span>{course.progress}% completed</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentDashboard;
