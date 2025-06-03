import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useState, useEffect } from "react";

const AdminDashboard = () => {
  // Sample data states (You will replace these with API calls)
  const [usersCount, setUsersCount] = useState({
    mentors: 10,
    students: 50,
    candidates: 40,
    employers: 15,
  });
  const [jobPostsCount, setJobPostsCount] = useState(120);
  const [jobApplicationsCount, setJobApplicationsCount] = useState(230);
  const [trainingSessionsCount, setTrainingSessionsCount] = useState(30);

  useEffect(() => {
    // TODO: Fetch these stats from backend APIs on component mount
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Mentors</h3>
            <p className="text-3xl font-bold text-indigo-600">{usersCount.mentors}</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Students</h3>
            <p className="text-3xl font-bold text-indigo-600">{usersCount.students}</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Candidates</h3>
            <p className="text-3xl font-bold text-indigo-600">{usersCount.candidates}</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Employers</h3>
            <p className="text-3xl font-bold text-indigo-600">{usersCount.employers}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Job Posts</h3>
            <p className="text-3xl font-bold text-green-600">{jobPostsCount}</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Job Applications</h3>
            <p className="text-3xl font-bold text-green-600">{jobApplicationsCount}</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Training Sessions</h3>
            <p className="text-3xl font-bold text-green-600">{trainingSessionsCount}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>New Mentor John Doe registered.</li>
            <li>Candidate Jane applied for Software Developer job.</li>
            <li>Training session "Advanced Excel" scheduled.</li>
            <li>Employer ABC Corp posted 3 new jobs.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
