// // src/pages/JobPortalLogin.jsx
 import { useState } from "react";
 import { useNavigate } from "react-router-dom";
 import { useAuth } from "../context/AuthContext"; // adjust path as per your folder
 import Navbar from "../components/layout/Navbar";

// const JobPortalLogin = () => {
//   const navigate = useNavigate();
//   const { login ,auth} = useAuth();
//     // State for the login form inputs
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     role: "candidate", // default role for login
//   });

//   // State to control which form is currently visible: 'login', 'register-candidate', or 'register-employer'
//   const [viewMode, setViewMode] = useState('login');

//   // States for the candidate registration form inputs
//   const [candidateRegForm, setCandidateRegForm] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   // States for the employer registration form inputs
//   const [employerRegForm, setEmployerRegForm] = useState({
//     companyName: "",
//     contactPerson: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   // --- Handlers for Login Form ---
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Mock authentication logic: In a real application, you would send
//     // formData.email and formData.password to your backend for validation.
//     // The backend would then return user data upon successful login.
//     const userData = {
//       isAuthenticated: true,
//       user: {
//         name: formData.email.split('@')[0], // Simple name extraction for demo
//         email: formData.email,
//         role: formData.role,
//       },
//       token: "dummy-auth-token", // A dummy token for demonstration purposes
//     };

//     login(userData); // Call the login function from AuthContext to set global auth state

//     // Simulate navigation by logging to console or setting a message
//     if (formData.role === "candidate") {
//       navigate('/candidate/dashboard')
//       // navigate("/candidate/dashboard"); // Uncomment if react-router-dom is available
//     } else if (formData.role === "employer") {
//       navigate('/employer/dashboard');
//       // navigate("/employer/dashboard"); // Uncomment if react-router-dom is available
//     }
//     // No alert() used, as per instructions. Console log for dev visibility.
//     console.log(`Logged in as ${formData.role}: ${formData.email}`);
//   };

//   // --- Handlers for Candidate Registration Form ---
//   const handleCandidateRegChange = (e) => {
//     const { name, value } = e.target;
//     setCandidateRegForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCandidateRegister = async (e) => {
//     e.preventDefault();
//     if (candidateRegForm.password !== candidateRegForm.confirmPassword) {
//       // Use a custom message box or state for user feedback instead of alert()
//       console.log("Passwords do not match for Candidate Registration!");
//       return;
//     }
//     // Mock registration logic: In a real application, send candidateRegForm data to your backend.
//     console.log("Candidate Registration Data:", candidateRegForm);

//     // After successful registration (mocked), clear the form and switch to login view
//     setCandidateRegForm({
//       fullName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });
    
//     alert("Candidate registration successful! Please login.");
 

//     setViewMode('login'); // Redirect to login form after successful registration
//       // navigate('/candidate/dashboard')
//   };

//   // --- Handlers for Employer Registration Form ---
//   const handleEmployerRegChange = (e) => {
//     const { name, value } = e.target;
//     setEmployerRegForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleEmployerRegister = async (e) => {
//     e.preventDefault();
//     if (employerRegForm.password !== employerRegForm.confirmPassword) {
//       // Use a custom message box or state for user feedback instead of alert()
//       console.log("Passwords do not match for Employer Registration!");
//       return;
//     }
//     // Mock registration logic: In a real application, send employerRegForm data to your backend.
//     console.log("Employer Registration Data:", employerRegForm);

//     // After successful registration (mocked), clear the form and switch to login view
//     setEmployerRegForm({
//       companyName: "",
//       contactPerson: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });
//     alert("Employer registration successful! Please login.");
    
//     setViewMode('login'); // Redirect to login form after successful registration
//    // navigate('/employer/dashboard')
//   };


//   return (
//     <>
//     <Navbar />
    
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-inter">
//         <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
//           {/* Display current auth status for demonstration */}
//           {auth.isAuthenticated ? (
//             <div className="text-center mb-4 p-2 bg-green-100 text-green-700 rounded-lg">
//               Logged in as: {auth.user?.email} ({auth.user?.role})
//             </div>
//           ) : (
//             <div className="text-center mb-4 p-2 bg-red-100 text-red-700 rounded-lg">
//               Not Logged In
//             </div>
//           )}

//           <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
//             {/* Dynamic heading based on the current view mode */}
//             {viewMode === 'login' ? 'Login to Job Portal' : 'Register for Job Portal'}
//           </h2>

//           {/* Toggle buttons for Login and Registration modes */}
//           <div className="flex justify-center mb-6 border-b border-gray-200">
//             <button
//               onClick={() => setViewMode('login')}
//               className={`py-2 px-4 rounded-tl-lg font-medium transition-colors duration-300
//                 ${viewMode === 'login' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
//               `}
//             >
//               Login
//             </button>
//             <button
//               onClick={() => setViewMode('register-candidate')}
//               className={`py-2 px-4 font-medium transition-colors duration-300
//                 ${viewMode === 'register-candidate' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
//               `}
//             >
//               Candidate
//             </button>
//              <button
//               onClick={() => setViewMode('register-employer')}
//               className={`py-2 px-4 rounded-tr-lg font-medium transition-colors duration-300
//                 ${viewMode === 'register-employer' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
//               `}
//             >
//               Employer
//             </button>
//           </div>

//           {/* Conditional Rendering based on viewMode state */}

//           {/* Login Form */}
//           {viewMode === 'login' && (
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <select
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="candidate">Candidate</option>
//                 <option value="employer">Employer</option>
//               </select>

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
//               />

//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
//               />

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
//               >
//                 Login
//               </button>
//             </form>
//           )}

//           {/* Candidate Registration Form */}
//           {viewMode === 'register-candidate' && (
//             <form onSubmit={handleCandidateRegister} className="space-y-4">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 required
//                 value={candidateRegForm.fullName}
//                 onChange={handleCandidateRegChange}
//                 className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 required
//                 value={candidateRegForm.email}
//                 onChange={handleCandidateRegChange}
//                 className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 required
//                 value={candidateRegForm.password}
//                 onChange={handleCandidateRegChange}
//                 className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 required
//                 value={candidateRegForm.confirmPassword}
//                 onChange={handleCandidateRegChange}
//                 className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
//               >
//                 Register as Candidate
//               </button>
//             </form>
//           )}

//           {/* Employer Registration Form */}
//           {viewMode === 'register-employer' && (
//             <form onSubmit={handleEmployerRegister} className="space-y-4">
//               <input
//                 type="text"
//                 name="companyName"
//                 placeholder="Company Name"
//                 required
//                 value={employerRegForm.companyName}
//                 onChange={handleEmployerRegChange}
//                 className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <input
//                 type="text"
//                 name="contactPerson"
//                 placeholder="Contact Person Name"
//                 required
//                 value={employerRegForm.contactPerson}
//                 onChange={handleEmployerRegChange}
//                 className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Company Email"
//                 required
//                 value={employerRegForm.email}
//                 onChange={handleEmployerRegChange}
//                 className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 required
//                 value={employerRegForm.password}
//                 onChange={handleEmployerRegChange}
//                 className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 required
//                 value={employerRegForm.confirmPassword}
//                 onChange={handleEmployerRegChange}
//                 className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
//               >
//                 Register as Employer
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default JobPortalLogin;

import React from 'react';
import Footer from "../components/layout/Footer";
import LoginCommonLayout from "../components/layout/LoginCommonLayout";
import hero1 from '/hero1.jpg'


const JobPortal = () => {
  // Sample job data
  const navigate = useNavigate();
  const jobOpenings = [
    {
      id: 1,
      company: 'TechCorp',
      logo: 'https://via.placeholder.com/50',
      position: 'Senior Frontend Developer',
      type: 'Full-time',
      location: 'San Francisco, CA',
      salary: '$120,000 - $150,000',
      posted: '2 days ago',
      skills: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 2,
      company: 'DesignHub',
      logo: 'https://via.placeholder.com/50/ff9900',
      position: 'UI/UX Designer',
      type: 'Remote',
      location: 'Anywhere',
      salary: '$90,000 - $110,000',
      posted: '1 week ago',
      skills: ['Figma', 'Adobe XD', 'User Research']
    },
    {
      id: 3,
      company: 'DataSystems',
      logo: 'https://via.placeholder.com/50/0099ff',
      position: 'Data Scientist',
      type: 'Full-time',
      location: 'New York, NY',
      salary: '$130,000 - $160,000',
      posted: '3 days ago',
      skills: ['Python', 'Machine Learning', 'SQL']
    },
    {
      id: 4,
      company: 'CloudNine',
      logo: 'https://via.placeholder.com/50/00cc99',
      position: 'DevOps Engineer',
      type: 'Contract',
      location: 'Austin, TX',
      salary: '$70 - $90 per hour',
      posted: 'Just now',
      skills: ['AWS', 'Docker', 'Kubernetes']
    },
  ];

  const handleClick = ()=>{
    navigate('/job-portal-Login')
  }

  const heading = ' Connecting Talent with Opportunity';

  const paragraph = 'For Employers and Job Seekers | One Platform. Limitless Careers.'
  return (
    <>
    <Navbar/>
     <LoginCommonLayout login1={'Job-Seeker'} login2={'Employer'} heading={heading} paragraph={paragraph} to1={'/candidate/auth'} to2={'/employer/auth'} hero={hero1} />
    <div className="min-h-screen bg-gray-50">
        {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black">Latest Job Openings</h1>
          <div className="flex space-x-4">
            <button onClick={handleClick} className="px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer hover:bg-green-700">For Job Seekers</button>
            <button onClick={handleClick} className="px-4 py-2 bg-indigo-600 text-white rounded-md cursor-pointer hover:bg-indigo-700">For Employers</button>
            {/* <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Post a Job</button> */}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700">Job Title or Keywords</label>
              <input
                type="text"
                id="search"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                placeholder="e.g. React Developer"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                id="location"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                placeholder="e.g. San Francisco"
              />
            </div>
            <div className="flex items-end">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 h-10">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          {/* <h2 className="text-2xl font-semibold text-gray-800">Latest Job Openings</h2> */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm">
              <option>Most Recent</option>
              <option>Salary (High to Low)</option>
              <option>Salary (Low to High)</option>
            </select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobOpenings.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start">
                  <img src={job.logo} alt={`${job.company} logo`} className="h-12 w-12 rounded-md object-cover mr-4" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{job.position}</h3>
                        <p className="text-indigo-600 font-medium">{job.company}</p>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {job.type}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <svg className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.salary}
                      </div>
                      <div className="flex items-center ml-auto">
                        <svg className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {job.posted}
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50">
                    Save Job
                  </button>
                  <button className="ml-3 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <a href="#" className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Previous
            </a>
            <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-indigo-600 hover:bg-gray-50">
              1
            </a>
            <a href="#" className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              2
            </a>
            <a href="#" className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              3
            </a>
            <a href="#" className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Next
            </a>
          </nav>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">JobConnect</h3>
              <p className="text-gray-400">Connecting talent with opportunity since 2023.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">For Job Seekers</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Browse Jobs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Create Profile</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Job Alerts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">For Employers</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Post a Job</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Browse Candidates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <p className="text-gray-400 text-sm">&copy; 2023 JobConnect. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm mr-4">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm mr-4">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Contact Us</a>
            </div>
          </div>
        </div>
      </footer> */}
      <Footer/>
    </div>
    </>
  );
};

export default JobPortal;