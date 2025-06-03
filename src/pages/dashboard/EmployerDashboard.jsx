// src/pages/dashboards/EmployerDashboard.jsx
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useEffect, useState } from "react";

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([
    { title: "Software Engineer", applicants: 12 },
    { title: "Sales Manager", applicants: 5 },
  ]);

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Employer Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Total Job Posts</h3>
            <p className="text-2xl">{jobs.length}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Total Applicants</h3>
            <p className="text-2xl">{jobs.reduce((acc, job) => acc + job.applicants, 0)}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Account Status</h3>
            <p className="text-green-600 font-bold">Active</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-4">Your Job Posts</h3>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="border p-2 text-left">Title</th>
                <th className="border p-2 text-left">Applicants</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={index}>
                  <td className="border p-2">{job.title}</td>
                  <td className="border p-2">{job.applicants}</td>
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

export default EmployerDashboard;
