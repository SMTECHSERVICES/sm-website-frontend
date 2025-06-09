import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";

const ApplicationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [application, setApplication] = useState(null);
  const [action, setAction] = useState(null);
  const [interviewDate, setInterviewDate] = useState("");
  const [message, setMessage] = useState("");
  const [rejectionMessage, setRejectionMessage] = useState("");

  useEffect(() => {
    const dummyData = [
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
    ];

    const found = dummyData.find((app) => app.id === id);
    setApplication(found);
  }, [id]);

  const handleConfirm = () => {
    if (action === "accept") {
      if (!interviewDate || !message.trim()) {
        alert("Please enter interview date and message.");
        return;
      }
      alert(`Interview scheduled on ${interviewDate} with message:\n"${message}"`);
    } else if (action === "reject") {
      if (!rejectionMessage.trim()) {
        alert("Please write a reason for rejection.");
        return;
      }
      alert(`Application rejected for reason:\n"${rejectionMessage}"`);
    }

    // Redirect after confirmation
    navigate("/employer/applications");
  };

  if (!application) return <div className="p-6">Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-blue-700 mb-4">
            Application Details
          </h2>
          <p><strong>Name:</strong> {application.candidateName}</p>
          <p><strong>Email:</strong> {application.email}</p>
          <p><strong>Job Title:</strong> {application.jobTitle}</p>
          <p><strong>Applied On:</strong> {application.appliedDate}</p>
          <p className="mt-2">
            <strong>Resume:</strong>{" "}
            <a
              href={application.resumeUrl}
              target="_blank"
              className="text-blue-600 underline"
              rel="noreferrer"
            >
              View Resume
            </a>
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3">
            <button
              className={`px-4 py-2 rounded font-medium ${
                action === "accept"
                  ? "bg-green-700"
                  : "bg-green-600 hover:bg-green-700"
              } text-white`}
              onClick={() => setAction("accept")}
            >
              Accept & Schedule Interview
            </button>
            <button
              className={`px-4 py-2 rounded font-medium ${
                action === "reject"
                  ? "bg-red-700"
                  : "bg-red-500 hover:bg-red-600"
              } text-white`}
              onClick={() => setAction("reject")}
            >
              Reject
            </button>
          </div>

          {/* Accept Interview Form */}
          {action === "accept" && (
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Interview Date
                </label>
                <input
                  type="date"
                  value={interviewDate}
                  onChange={(e) => setInterviewDate(e.target.value)}
                  className="w-full border px-3 py-2 rounded border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message to Candidate
                </label>
                <textarea
                  rows="3"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Include Zoom link, interview time, or notes..."
                ></textarea>
              </div>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleConfirm}
              >
                Confirm Interview
              </button>
            </div>
          )}

          {/* Reject Reason Form */}
          {action === "reject" && (
            <div className="mt-6">
              <label className="block text-sm font-medium mb-1">Rejection Reason</label>
              <textarea
                rows="3"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={rejectionMessage}
                onChange={(e) => setRejectionMessage(e.target.value)}
                placeholder="Explain why the application was rejected..."
              ></textarea>
              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleConfirm}
              >
                Confirm Rejection
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ApplicationDetail;
