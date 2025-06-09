import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/layout/Navbar";

const CandidateApplications = () => {
  const navigate = useNavigate();

  const [applications] = useState([
    {
      id: "app1",
      jobTitle: "Frontend Developer",
      company: "Tech Solutions",
      appliedDate: "2025-06-08",
      status: "Interview Scheduled",
    },
    {
      id: "app2",
      jobTitle: "Backend Developer",
      company: "CodeCorp",
      appliedDate: "2025-06-09",
      status: "Rejected",
    },
  ]);

  const handleRowClick = (id) => {
    navigate(`/candidate/applications/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
            My Job Applications
          </h2>

          {applications.length === 0 ? (
            <p className="text-center text-gray-500">You haven't applied to any jobs yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Job Title</th>
                    <th className="px-4 py-2 text-left">Company</th>
                    <th className="px-4 py-2 text-left">Applied On</th>
                    <th className="px-4 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr
                      key={app.id}
                      onClick={() => handleRowClick(app.id)}
                      className="border-t border-gray-200 hover:bg-blue-50 cursor-pointer"
                    >
                      <td className="px-4 py-2">{app.jobTitle}</td>
                      <td className="px-4 py-2">{app.company}</td>
                      <td className="px-4 py-2">{app.appliedDate}</td>
                      <td className="px-4 py-2 font-medium text-indigo-600">{app.status}</td>
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

export default CandidateApplications;
