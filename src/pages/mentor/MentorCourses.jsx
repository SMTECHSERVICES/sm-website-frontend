import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../../constants/api';
import { useNavigate } from 'react-router-dom';

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ✅ for navigation

  const fetchMyCourses = async () => {
    try {
      const response = await axios.get(`${server}/mentor/myCourses`, {
        withCredentials: true,
      });
      setCourses(response.data.courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      alert("Failed to fetch your courses.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyCourses();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading courses...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">My Courses</h2>

      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 hover:cursor-pointer">
          {courses.map((course) => (
            <div
              key={course._id}
              className="border rounded-lg shadow p-4 bg-white cursor-pointer hover:shadow-lg transition"
              onClick={() => navigate(`/mentor/courses/${course._id}`)} // ✅ navigate on click
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="h-40 w-full object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-2">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.category}</p>
              <p className="mt-2">{course.description}</p>
              <p className="text-sm mt-1">📚 {course.skillsCovered}</p>
              <p className="text-sm">⏱ {course.duration}</p>
              <a
                href={course.syllabusPdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 mt-2 inline-block"
                onClick={(e) => e.stopPropagation()} // prevent div click
              >
                View Syllabus PDF
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses;
