import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Dummy data for demo — replace with API call
    const dummyNotifications = [
      {
        id: 1,
        type: "application-status",
        message: "Your application for 'Frontend Developer' was accepted. Interview scheduled on 2025-06-15.",
        date: "2025-06-10",
      },
      {
        id: 2,
        type: "new-job",
        message: "New job posted: 'Full Stack Developer' in Noida. Apply Now!",
        date: "2025-06-09",
      },
      {
        id: 3,
        type: "application-status",
        message: "Your application for 'Backend Developer' was rejected. Reason: Not enough Node.js experience.",
        date: "2025-06-08",
      },
    ];

    setNotifications(dummyNotifications);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Notifications</h2>

          {notifications.length === 0 ? (
            <p className="text-gray-500 text-center">No notifications found.</p>
          ) : (
            <ul className="space-y-4">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`border-l-4 p-4 rounded shadow-sm ${
                    notification.type === "application-status"
                      ? "border-green-500 bg-green-50"
                      : "border-blue-500 bg-blue-50"
                  }`}
                >
                  <p className="text-sm text-gray-700">{notification.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{notification.date}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Notification;
