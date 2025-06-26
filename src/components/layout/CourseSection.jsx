
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
//import { server } from '../../constants/api'; 
import { server } from '../../constants/api';
import Footer from './Footer';

const CourseSection = () => {
      const [activeCategory, setActiveCategory] = useState('all');
      const [courses, setCourses] = useState([]);
      const [loading, setLoading] = useState(true); // Add loading state
      const [error, setError] = useState(null); // Add error state
      const navigate = useNavigate();
    
      useEffect(() => {
        const getData = async () => {
          setLoading(true);
          setError(null);
          try {
            const response = await axios.get(`${server}/student/get-allCourses`, {
              withCredentials: true
            });
            // Assuming response.data contains an array named 'courses'
            setCourses(response?.data); // Access the 'courses' array from the response
          } catch (err) {
            console.error("Error fetching courses:", err);
            setError("Failed to fetch courses. Please try again later."); // Set error to display to the user
          } finally {
            setLoading(false); // End loading after data fetch
          }
        };
        getData();
      }, []);

     const handleEnrollClick = async (courseId) => {
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
    
      const categories = [
        { id: 'all', name: 'All Courses' },
        { id: 'web-development', name: 'Web Development' },
        { id: 'app-development', name: 'App Development' },
        { id: 'hr', name: 'HR' },
        { id: 'marketing', name: 'Marketing' },
        { id: 'digital-marketing', name: 'Digital Marketing' },
        { id: 'career-support', name: 'Career Support' }
      ];
    
      const filteredCourses = activeCategory === 'all'
        ? courses
        : courses.filter(course => course.category === activeCategory);
    
      if (loading) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter">
            <p className="text-xl text-blue-700">Loading Courses...</p>
          </div>
        );
      }
    
      if (error) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter">
            <p className="text-xl text-red-700">{error}</p>
          </div>
        );
      }
  return (
    <div>
       <div className="min-h-screen bg-gray-50">

        {/* Hero Section */}

        {/* Video Demo Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">See Our Training in Action</h2>
              <p className="text-xl text-gray-600">
                Watch how our expert-led training helps students build real-world skills
              </p>
            </div>

            <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/QpITYdFqMmU?si=_RgPawmIROQt7Aix"
                title="Training Preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <div key={course._id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400?text=No+Image"; }} // Fallback image on error
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
                          {course.duration}
                        </span>
                        {/* Display category from course data */}
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                           {categories.find(cat => cat.id === course.category)?.name || course.category}
                        </span>
                      </div>
                    </div>
                      <h2 className="text-xl font-bold mb-2">
                        By -  {course.instructor?.fullName }
                        </h2>
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>

                    <div className="mb-6">
                      {/* Check if skillsCovered is a string before splitting */}
                      {typeof course.skillsCovered === 'string' && course.skillsCovered.split(',').map((skill, index) => (
                        <div key={index} className="flex items-center mb-2">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{skill.trim()}</span>
                        </div>
                      ))}
                      {/* If skillsCovered is an array, map directly */}
                      {Array.isArray(course.skillsCovered) && course.skillsCovered.map((skill, index) => (
                        <div key={index} className="flex items-center mb-2">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{skill.trim()}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <button onClick={() => navigate(`/student/allcourse/${course._id}`)} className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                        View Details
                      </button>
                      <button onClick={()=>handleEnrollClick(course._id)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {filteredCourses.length === 0 && (
                <p className="text-center col-span-full text-gray-500 text-lg">No courses found for selected category.</p>
              )}
            </div>
          </div>
        </section>

       

      </div>
    </div>
  )
}

export default CourseSection
