// src/pages/dashboards/CandidateDashboard.jsx
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useState } from "react";

const CandidateDashboard = () => {
  const [candidate, setCandidate] = useState({
    fullName: "Ravi Sharma",
    email: "ravi@example.com",
    phone: "9876543210",
    bio: "Passionate frontend developer with a love for React and UI/UX design.",
    skills: "React, Tailwind, JavaScript, HTML, CSS",
    linkedin: "https://linkedin.com/in/ravi-sharma",
    portfolio: "https://ravi-portfolio.com",
    image: "/logo.png", // Add a placeholder image in public folder
  });

  const [appliedJobs, setAppliedJobs] = useState([
    { title: "React Developer", status: "Pending" },
    { title: "HR Executive", status: "Interview Scheduled" },
  ]);

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* Candidate Info Card */}
        <div className="bg-white p-6 rounded-xl shadow mb-6 flex flex-col md:flex-row gap-6">
          <img
            src={candidate.image}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-blue-700">{candidate.fullName}</h2>
            <p className="text-gray-600 mb-1">{candidate.email} | {candidate.phone}</p>
            <p className="text-gray-700 italic mb-2">{candidate.bio}</p>
            <p><strong>Skills:</strong> {candidate.skills}</p>
            <div className="mt-2 flex gap-4">
              <a
                href={candidate.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                LinkedIn
              </a>
              <a
                href={candidate.portfolio}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Total Applications</h3>
            <p className="text-2xl">{appliedJobs.length}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Status</h3>
            <p className="text-green-600 font-bold">Active</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Upcoming Interviews</h3>
            <p className="text-2xl">1</p>
          </div>
        </div>

        {/* Applications Table */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-4">Your Applications</h3>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="border p-2 text-left">Job Title</th>
                <th className="border p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {appliedJobs.map((job, index) => (
                <tr key={index}>
                  <td className="border p-2">{job.title}</td>
                  <td className="border p-2">{job.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CandidateDashboard;
