// // src/pages/employer/PostJob.jsx
// import { useState } from "react";
// import Navbar from "../../components/layout/Navbar";

// const PostJob = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     company: "",
//     location: "",
//     salary: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Job Posted:", formData);

//     // You can send this to backend via fetch or axios
//     // Example:
//     // await axios.post('/api/jobs', formData);

//     alert("Job Posted Successfully!");
//     setFormData({
//       title: "",
//       company: "",
//       location: "",
//       salary: "",
//       description: "",
//     });
//   };

//   return (
//    <>
//    <Navbar />
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
//       <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
//         <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">
//           Post a New Job
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Job Title</label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               placeholder="e.g., Frontend Developer"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Company</label>
//             <input
//               type="text"
//               name="company"
//               value={formData.company}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               placeholder="e.g., SM Services"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Location</label>
//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               placeholder="e.g., Delhi, Remote"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Salary (Optional)</label>
//             <input
//               type="text"
//               name="salary"
//               value={formData.salary}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               placeholder="e.g., ₹30,000 - ₹50,000"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Job Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows={5}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               placeholder="Write job responsibilities, requirements, etc."
//               required
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//           >
//             Post Job
//           </button>
//         </form>
//       </div>
//     </div>
//    </>
//   );
// };

// export default PostJob;



import { useState } from "react";
import Navbar from "../../components/layout/Navbar";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    jobType: "",
    skills: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted:", formData);

    // Send data to backend here (axios/fetch)
    alert("Job Posted Successfully!");

    setFormData({
      title: "",
      company: "",
      location: "",
      salary: "",
      jobType: "",
      skills: "",
      description: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">
            Post a New Job
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Job Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="e.g., Frontend Developer"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="e.g., SM Services"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="e.g., Delhi, Remote"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Salary (Optional)</label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="e.g., ₹30,000 - ₹50,000"
              />
            </div>

            <div>
              <label className="block text-gray-700">Job Type</label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              >
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700">Skills Required</label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="e.g., React, Node.js, Figma"
                required
              />
              <p className="text-sm text-gray-500 mt-1">Comma-separated skills</p>
            </div>

            <div>
              <label className="block text-gray-700">Job Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Write job responsibilities, requirements, etc."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Post Job
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostJob;
