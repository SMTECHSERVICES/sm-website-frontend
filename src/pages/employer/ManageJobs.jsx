// src/pages/employer/ManageJobs.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

const ManageJobs = () => {
  // Dummy job data — replace with API data
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "SM Services",
      location: "Delhi",
      salary: "₹35,000",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "SM Services",
      location: "Remote",
      salary: "₹45,000",
    },
  ]);

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/employer/manage-jobs/${id}`);
    
    // Navigate to edit page or open modal
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this job?")) {
      setJobs(jobs.filter((job) => job.id !== id));
    }
  };

  return (
   <>
   <Navbar />
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-blue-700 text-center">
          Manage Posted Jobs
        </h2>

        {jobs.length === 0 ? (
          <p className="text-center text-gray-500">No jobs posted yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Job Title</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Company</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Location</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Salary</th>
                  <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id} className="border-t border-gray-200">
                    <td className="px-4 py-2">{job.title}</td>
                    <td className="px-4 py-2">{job.company}</td>
                    <td className="px-4 py-2">{job.location}</td>
                    <td className="px-4 py-2">{job.salary}</td>
                    <td className="px-4 py-2 text-center space-x-2">
                      <button
                        onClick={() => handleEdit(job.id)}
                        className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(job.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
   </>
  );
};

export default ManageJobs;
