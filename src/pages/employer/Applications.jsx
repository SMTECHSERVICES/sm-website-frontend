// // src/pages/employer/Applications.jsx
// import { useState } from "react";
// import Navbar from "../../components/layout/Navbar";

// const Applications = () => {
//   // Dummy data: Replace with backend API response
//   const [applications, setApplications] = useState([
//     {
//       id: "app1",
//       candidateName: "Ravi Sharma",
//       email: "ravi@example.com",
//       jobTitle: "Frontend Developer",
//       resumeUrl: "https://example.com/ravi-resume.pdf",
//       appliedDate: "2025-06-08",
//     },
//     {
//       id: "app2",
//       candidateName: "Pooja Mehta",
//       email: "pooja@example.com",
//       jobTitle: "Backend Developer",
//       resumeUrl: "https://example.com/pooja-resume.pdf",
//       appliedDate: "2025-06-09",
//     },
//   ]);

//   return (
//     <>
//     <Navbar />
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
//           Job Applications
//         </h2>

//         {applications.length === 0 ? (
//           <p className="text-center text-gray-500">No applications found.</p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full border border-gray-200 table-auto">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Candidate</th>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Job Title</th>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Applied On</th>
//                   <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Resume</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {applications.map((app) => (
//                   <tr key={app.id} className="border-t border-gray-200">
//                     <td className="px-4 py-2">{app.candidateName}</td>
//                     <td className="px-4 py-2">{app.email}</td>
//                     <td className="px-4 py-2">{app.jobTitle}</td>
//                     <td className="px-4 py-2">{app.appliedDate}</td>
//                     <td className="px-4 py-2 text-center">
//                       <a
//                         href={app.resumeUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-600 hover:underline"
//                       >
//                         View Resume
//                       </a>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//     </>
//   );
// };

// export default Applications;

// src/pages/employer/Applications.jsx
// src/pages/employer/Applications.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/layout/Navbar";

const Applications = () => {
  const navigate = useNavigate();
  const [applications] = useState([
    {
      id: "app1",
      candidateName: "Ravi Sharma",
      email: "ravi@example.com",
      jobTitle: "Frontend Developer",
      resumeUrl: "https://example.com/ravi-resume.pdf",
      appliedDate: "2025-06-08",
    },
    {
      id: "app2",
      candidateName: "Pooja Mehta",
      email: "pooja@example.com",
      jobTitle: "Backend Developer",
      resumeUrl: "https://example.com/pooja-resume.pdf",
      appliedDate: "2025-06-09",
    },
  ]);

  const handleRowClick = (appId) => {
    navigate(`/employer/applications/${appId}`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
            Job Applications
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Candidate</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Job Title</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Applied On</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr
                    key={app.id}
                    onClick={() => handleRowClick(app.id)}
                    className="border-t border-gray-200 hover:bg-blue-50 cursor-pointer"
                  >
                    <td className="px-4 py-2">{app.candidateName}</td>
                    <td className="px-4 py-2">{app.email}</td>
                    <td className="px-4 py-2">{app.jobTitle}</td>
                    <td className="px-4 py-2">{app.appliedDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Applications;


