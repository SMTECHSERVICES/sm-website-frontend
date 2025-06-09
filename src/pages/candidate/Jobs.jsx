// src/pages/candidate/Jobs.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

const Jobs = () => {
  const navigate = useNavigate();

  // Dummy job list
  const [jobs] = useState([
    {
      id: "1",
      title: "Frontend Developer",
      company: "SM Services",
      location: "Delhi",
      salary: "₹35,000",
      description: "React + Tailwind based job portal frontend work.",
    },
    {
      id: "2",
      title: "Backend Developer",
      company: "SM Services",
      location: "Remote",
      salary: "₹45,000",
      description: "Node.js, Express, and MongoDB backend system work.",
    },
  ]);

  return (
<>
<Navbar />
<div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Available Job Openings
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {job.title}
              </h3>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-500">{job.location}</p>
              <p className="text-sm text-gray-500 mb-2">Salary: {job.salary}</p>

              <p className="text-gray-700 mb-4 line-clamp-2">
                {job.description}
              </p>

              <div className="flex justify-between">
                <button
                  onClick={() => navigate(`/candidate/jobs/${job.id}`)}
                  className="text-blue-600 hover:underline"
                >
                  View Details
                </button>
                <button
                  onClick={() => navigate(`/candidate/apply/${job.id}`)}
                  className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
</>
  );
};

export default Jobs;
