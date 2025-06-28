import React from 'react';
import JobsCardComponent from './JobsCardComponent';

const JobsComponent = ({ jobOpenings = [] }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Latest Job Openings</h1>
          <p className="mt-2 text-lg text-indigo-100">
            Explore opportunities and apply to your dream job today.
          </p>
        </div>
      </div>

      {/* Search Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700">Job Title or Keywords</label>
              <input
                type="text"
                id="search"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                placeholder="e.g. React Developer"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                id="location"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                placeholder="e.g. Delhi"
              />
            </div>
            <div className="flex items-end">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 h-10 w-full md:w-auto">
                🔍 Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sort Dropdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Job Results</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm">
              <option>Most Recent</option>
              <option>Salary (High to Low)</option>
              <option>Salary (Low to High)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Job Cards */}
      <JobsCardComponent jobOpenings={jobOpenings} />
    </div>
  );
};

export default JobsComponent;





// import React, { useState, useEffect } from 'react';
// import JobsCardComponent from './JobsCardComponent';

// const JobsComponent = () => {
//   const [jobOpenings, setJobOpenings] = useState([]);
//   const [searchTitle, setSearchTitle] = useState('');
//   const [searchLocation, setSearchLocation] = useState('');
//   const [loading, setLoading] = useState(false);

//   // 🔹 Fetch all jobs initially
//   useEffect(() => {
//     fetchJobs(); // Fetch without filters
//   }, []);

//   // 🔹 Reusable fetch function
//   const fetchJobs = async (filters = {}) => {
//     setLoading(true);
//     try {
//       const query = new URLSearchParams(filters).toString();
//       const response = await fetch(`https://your-api-url.com/api/jobs?${query}`);
//       const data = await response.json();
//       setJobOpenings(data.jobs || []);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//       setJobOpenings([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 Triggered on search button
//   const handleSearch = () => {
//     fetchJobs({
//       title: searchTitle,
//       location: searchLocation,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 pb-12">
//       {/* Header Section */}
//       <div className="bg-gradient-to-r from-indigo-600 to-blue-600 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl font-bold text-white">Latest Job Openings</h1>
//           <p className="mt-2 text-lg text-indigo-100">
//             Explore opportunities and apply to your dream job today.
//           </p>
//         </div>
//       </div>

//       {/* Search Filters */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1">
//               <label htmlFor="search" className="block text-sm font-medium text-gray-700">Job Title or Keywords</label>
//               <input
//                 type="text"
//                 id="search"
//                 value={searchTitle}
//                 onChange={(e) => setSearchTitle(e.target.value)}
//                 className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
//                 placeholder="e.g. React Developer"
//               />
//             </div>
//             <div className="flex-1">
//               <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
//               <input
//                 type="text"
//                 id="location"
//                 value={searchLocation}
//                 onChange={(e) => setSearchLocation(e.target.value)}
//                 className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
//                 placeholder="e.g. Delhi"
//               />
//             </div>
//             <div className="flex items-end">
//               <button
//                 onClick={handleSearch}
//                 className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 h-10 w-full md:w-auto"
//               >
//                 🔍 Search
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Sort Dropdown */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold text-gray-700">Job Results</h2>
//           <div className="flex items-center space-x-2">
//             <span className="text-sm text-gray-600">Sort by:</span>
//             <select className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm">
//               <option>Most Recent</option>
//               <option>Salary (High to Low)</option>
//               <option>Salary (Low to High)</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Job Cards */}
//       {loading ? (
//         <div className="text-center text-gray-500 py-10">Loading jobs...</div>
//       ) : (
//         <JobsCardComponent jobOpenings={jobOpenings} />
//       )}
//     </div>
//   );
// };

// export default JobsComponent;
