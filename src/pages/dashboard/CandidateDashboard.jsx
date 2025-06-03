// src/pages/dashboards/CandidateDashboard.jsx
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useState } from "react";

const CandidateDashboard = () => {
  const [appliedJobs, setAppliedJobs] = useState([
    { title: "React Developer", status: "Pending" },
    { title: "HR Executive", status: "Interview Scheduled" },
  ]);

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Candidate Dashboard</h2>

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
