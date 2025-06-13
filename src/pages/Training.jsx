


// import React, { useState } from 'react';

// const Training = () => {
//   const [activeCategory, setActiveCategory] = useState('all');
  
//   const categories = [
//     { id: 'all', name: 'All Courses' },
//     { id: 'web', name: 'Web Development' },
//     { id: 'mobile', name: 'Mobile Development' },
//     { id: 'design', name: 'UI/UX Design' },
//     { id: 'data', name: 'Data Science' },
//     { id: 'cloud', name: 'Cloud & DevOps' },
//   ];

//   const courses = [
//     {
//       id: 1,
//       title: "Full Stack Web Development",
//       description: "Master MERN stack with modern tools and best practices",
//       category: 'web',
//       duration: "3 Months",
//       level: "Advanced",
//       features: ["Live Projects", "Certification", "Placement Assistance"]
//     },
//     {
//       id: 2,
//       title: "React Native Mobile App Development",
//       description: "Build cross-platform mobile apps with React Native",
//       category: 'mobile',
//       duration: "2 Months",
//       level: "Intermediate",
//       features: ["Real-world Apps", "API Integration", "Deployment"]
//     },
//     {
//       id: 3,
//       title: "UI/UX Design with Figma",
//       description: "Learn professional design techniques and prototyping",
//       category: 'design',
//       duration: "6 Weeks",
//       level: "Beginner",
//       features: ["Design Systems", "Portfolio Projects", "Industry Tools"]
//     },
//     {
//       id: 4,
//       title: "Python for Data Science",
//       description: "Data analysis and machine learning with Python",
//       category: 'data',
//       duration: "3 Months",
//       level: "Intermediate",
//       features: ["Pandas/Numpy", "ML Algorithms", "Data Visualization"]
//     },
//     {
//       id: 5,
//       title: "AWS Cloud Practitioner",
//       description: "Master AWS services and cloud infrastructure",
//       category: 'cloud',
//       duration: "8 Weeks",
//       level: "Beginner",
//       features: ["Hands-on Labs", "Certification Prep", "Real-world Scenarios"]
//     },
//     {
//       id: 6,
//       title: "Advanced JavaScript",
//       description: "Deep dive into modern JavaScript concepts",
//       category: 'web',
//       duration: "4 Weeks",
//       level: "Advanced",
//       features: ["ES6+ Features", "Performance Optimization", "Patterns"]
//     }
//   ];

//   const filteredCourses = activeCategory === 'all' 
//     ? courses 
//     : courses.filter(course => course.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Training Programs</h1>
//           <p className="text-xl max-w-3xl mx-auto">
//             Industry-relevant courses taught by experts with real-world projects and placement support
//           </p>
//           <button className="mt-8 bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300">
//             Explore Courses
//           </button>
//         </div>
//       </header>

//       {/* Video Demo Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">See Our Training in Action</h2>
//             <p className="text-xl text-gray-600">
//               Watch how our expert-led training helps students build real-world skills
//             </p>
//           </div>
          
//           <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
//             <iframe 
//               src="https://www.youtube.com/embed/QpITYdFqMmU?si=_RgPawmIROQt7Aix" 
//               title="Training Preview"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="w-full h-full"
//             ></iframe>
//           </div>
          
//           <div className="flex flex-wrap justify-center gap-4 mt-8">
//             {[
//               "Full Stack Development Demo",
//               "Student Success Stories",
//               "Live Project Walkthrough"
//             ].map((title, idx) => (
//               <div key={idx} className="flex items-center bg-gray-100 rounded-lg p-3 hover:bg-blue-50 cursor-pointer">
//                 <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-12 flex-shrink-0" />
//                 <span className="ml-3 font-medium">{title}</span>
//                 <svg className="w-5 h-5 text-blue-600 ml-2" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                 </svg>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {categories.map(category => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`px-6 py-3 rounded-full font-medium transition-all ${
//                   activeCategory === category.id
//                     ? 'bg-blue-600 text-white shadow-lg'
//                     : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
//                 }`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>

//           {/* Course Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredCourses.map(course => (
//               <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-4">
//                     <div>
//                       <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
//                         {course.duration}
//                       </span>
//                       <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
//                         {course.level}
//                       </span>
//                     </div>
//                     <span className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
//                   </div>
                  
//                   <h3 className="text-xl font-bold mb-2">{course.title}</h3>
//                   <p className="text-gray-600 mb-4">{course.description}</p>
                  
//                   <div className="mb-6">
//                     {course.features.map((feature, index) => (
//                       <div key={index} className="flex items-center mb-2">
//                         <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                         <span className="text-sm">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="flex justify-between items-center">
//                     <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
//                       View Details
//                     </button>
//                     <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//                       Enroll Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our Training?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Industry Expert Trainers",
//                 description: "Learn from professionals with 5+ years of industry experience",
//                 icon: "👨‍🏫"
//               },
//               {
//                 title: "Project-Based Learning",
//                 description: "Work on real-world projects to build your portfolio",
//                 icon: "💼"
//               },
//               {
//                 title: "Placement Assistance",
//                 description: "Resume building and interview preparation support",
//                 icon: "📈"
//               }
//             ].map((feature, index) => (
//               <div key={index} className="bg-white p-8 rounded-xl text-center shadow-md">
//                 <div className="text-4xl mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Student Success Stories</h2>
//           <div className="max-w-4xl mx-auto">
//             <div className="bg-blue-50 p-8 rounded-2xl shadow-md mb-8">
//               <div className="flex items-center mb-4">
//                 <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
//                 <div className="ml-4">
//                   <h4 className="font-bold text-lg">Rajesh Kumar</h4>
//                   <p className="text-blue-600">Placed at Google</p>
//                 </div>
//               </div>
//               <p className="text-gray-700 italic">
//                 "The Full Stack course completely transformed my career. The hands-on projects gave me the practical 
//                 experience I needed to ace my interviews. I went from beginner to job-ready in just 4 months!"
//               </p>
//             </div>
            
//             <div className="text-center">
//               <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
//                 Watch More Success Stories
//                 <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-12">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-lg mb-4">Ready to transform your career?</p>
//           <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
//             Contact Us Today
//           </button>
//           <div className="mt-8 pt-8 border-t border-gray-700">
//             <p>© 2023 CodeMaster Trainings. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Training;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Training = () => {
  const [activeTab, setActiveTab] = useState('student');
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  const [userName, setUserName] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const { login } = useAuth();

  const navigate = useNavigate();
  
  // Authentication state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  //const { login } = useAuth(); // ✅ Use login function from context

  if (isLogin) {
    const userData = {
      isAuthenticated: true,
      user: {
        name: formData.email.split('@')[0],
        email: formData.email,
        role: activeTab,
      },
      token: "fake-token", // Or real token if from API
    };

    login(userData); // ✅ Save to context + localStorage
    alert(`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} login successful!`);
    navigate(`/${activeTab}/dashboard`);
  } else {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    setIsLogin(true);
    alert("Registration successful! Please login.");
  }
};

  // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate authentication
//     if (isLogin) {
//       // Login logic
//       setIsLoggedIn(true);
//       setUserType(activeTab);
//       console.log(activeTab)
//       setUserName(formData.email.split('@')[0]);
//       alert(`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} login successful!`);
//       navigate(`/${activeTab}/dashboard`)
//     } else {
//       // Register logic
//       if (formData.password !== formData.confirmPassword) {
//         alert("Passwords don't match!");
//         return;
//       }
//       setIsLogin(true);
//       alert('Registration successful! Please login.');
//     }
//   };

  // Logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType('');
    setUserName('');
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  // Course data
  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'data', name: 'Data Science' },
    { id: 'cloud', name: 'Cloud & DevOps' },
  ];

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master MERN stack with modern tools and best practices",
      category: 'web',
      duration: "3 Months",
      level: "Advanced",
      features: ["Live Projects", "Certification", "Placement Assistance"],
      mentor: "Raj Sharma",
      enrolled: 1250
    },
    {
      id: 2,
      title: "React Native Mobile App Development",
      description: "Build cross-platform mobile apps with React Native",
      category: 'mobile',
      duration: "2 Months",
      level: "Intermediate",
      features: ["Real-world Apps", "API Integration", "Deployment"],
      mentor: "Priya Patel",
      enrolled: 890
    },
    {
      id: 3,
      title: "UI/UX Design with Figma",
      description: "Learn professional design techniques and prototyping",
      category: 'design',
      duration: "6 Weeks",
      level: "Beginner",
      features: ["Design Systems", "Portfolio Projects", "Industry Tools"],
      mentor: "Ananya Singh",
      enrolled: 1450
    },
    {
      id: 4,
      title: "Python for Data Science",
      description: "Data analysis and machine learning with Python",
      category: 'data',
      duration: "3 Months",
      level: "Intermediate",
      features: ["Pandas/Numpy", "ML Algorithms", "Data Visualization"],
      mentor: "Vikram Mehta",
      enrolled: 2100
    },
    {
      id: 5,
      title: "AWS Cloud Practitioner",
      description: "Master AWS services and cloud infrastructure",
      category: 'cloud',
      duration: "8 Weeks",
      level: "Beginner",
      features: ["Hands-on Labs", "Certification Prep", "Real-world Scenarios"],
      mentor: "Amit Kumar",
      enrolled: 1750
    },
    {
      id: 6,
      title: "Advanced JavaScript",
      description: "Deep dive into modern JavaScript concepts",
      category: 'web',
      duration: "4 Weeks",
      level: "Advanced",
      features: ["ES6+ Features", "Performance Optimization", "Patterns"],
      mentor: "Neha Gupta",
      enrolled: 980
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  // Render authentication form
  const renderAuthForm = () => (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-8">
      <div className="flex border-b">
        <button 
          className={`flex-1 py-2 font-semibold ${activeTab === 'student' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('student')}
        >
          Student
        </button>
        <button 
          className={`flex-1 py-2 font-semibold ${activeTab === 'mentor' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('mentor')}
        >
          Mentor
        </button>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-center mb-4">
          <button 
            className={`px-4 py-2 font-medium ${isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`px-4 py-2 font-medium ${!isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          
          {!isLogin && (
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // Render user dashboard
  const renderDashboard = () => (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Welcome, {userName}</h2>
          <p className="text-gray-600">
            {userType === 'student' 
              ? 'Start learning from our expert mentors' 
              : 'Manage your courses and students'}
          </p>
        </div>
        <button 
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
        >
          Logout
        </button>
      </div>
      
      {userType === 'student' ? (
        <div>
          <h3 className="text-xl font-semibold mb-4">Your Enrolled Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.slice(0, 2).map(course => (
              <div key={course.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-bold">{course.title}</h4>
                <p className="text-sm text-gray-600">Mentor: {course.mentor}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {course.duration}
                  </span>
                  <button className="text-blue-600 text-sm font-medium">
                    Continue Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-semibold mb-4">Your Teaching Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.slice(0, 3).map(course => (
              <div key={course.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-bold">{course.title}</h4>
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600">Students: {course.enrolled}</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    {course.level}
                  </span>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <button className="text-blue-600 text-sm font-medium">
                    View Analytics
                  </button>
                  <button className="text-green-600 text-sm font-medium">
                    Manage Content
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      
       <Navbar/>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Training Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Industry-relevant courses taught by experts with real-world projects and placement support
          </p>
          <button className="mt-8 bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300">
            Explore Courses
          </button>
        </div>
      </header>

      

      {/* Video Demo Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See Our Training in Action</h2>
            <p className="text-xl text-gray-600">
              Watch how our expert-led training helps students build real-world skills
            </p>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.youtube.com/embed/QpITYdFqMmU?si=C8nspmt0CvA874f9" 
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
                        {course.duration}
                      </span>
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        {course.level}
                      </span>
                    </div>
                    <span className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <span className="text-xs text-blue-800 font-bold">M</span>
                      </div>
                      <span className="text-sm text-gray-700">Mentor: {course.mentor}</span>
                    </div>
                    
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">{course.enrolled}</span> students enrolled
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our Training?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Expert Trainers",
                description: "Learn from professionals with 5+ years of industry experience",
                icon: "👨‍🏫"
              },
              {
                title: "Project-Based Learning",
                description: "Work on real-world projects to build your portfolio",
                icon: "💼"
              },
              {
                title: "Placement Assistance",
                description: "Resume building and interview preparation support",
                icon: "📈"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl text-center shadow-md">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Authentication Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">
            {isLoggedIn ? 'Your Dashboard' : 'Join Our Learning Community'}
          </h2>
          {isLoggedIn ? renderDashboard() : renderAuthForm()}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Student Success Stories</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-2xl shadow-md mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h4 className="font-bold text-lg">Rajesh Kumar</h4>
                  <p className="text-blue-600">Placed at Google</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The Full Stack course completely transformed my career. The hands-on projects gave me the practical 
                experience I needed to ace my interviews. I went from beginner to job-ready in just 4 months!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg mb-4">Ready to transform your career?</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Contact Us Today
          </button>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p>© 2023 CodeMaster Trainings. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
      <Footer/>
    </div>
  );
};

export default Training;