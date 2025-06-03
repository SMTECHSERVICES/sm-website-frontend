// src/pages/dashboards/MentorDashboard.jsx
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useState } from "react";

const MentorDashboard = () => {
  const [sessions, setSessions] = useState([
    { topic: "Resume Building", date: "2025-06-10", time: "11:00 AM" },
    { topic: "Mock Interview", date: "2025-06-15", time: "2:00 PM" },
  ]);

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Mentor Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Scheduled Sessions</h3>
            <p className="text-2xl">{sessions.length}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Total Students</h3>
            <p className="text-2xl">25</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Status</h3>
            <p className="text-green-600 font-bold">Active</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-4">Upcoming Sessions</h3>
          <ul className="space-y-2">
            {sessions.map((session, index) => (
              <li key={index} className="p-2 border rounded-md flex justify-between">
                <span>{session.topic}</span>
                <span>{session.date} - {session.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MentorDashboard;
