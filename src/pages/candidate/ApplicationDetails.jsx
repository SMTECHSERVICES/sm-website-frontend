import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";

const ApplicationDetail = () => {
  const { id } = useParams();

  const [application, setApplication] = useState(null);

  useEffect(() => {
    const dummyData = [
      {
        id: "app1",
        jobTitle: "Frontend Developer",
        company: "Tech Solutions",
        status: "Interview Scheduled",
        message: "Dear Candidate, Your interview is scheduled on 2025-06-15 at 10:00 AM via Zoom.",
      },
      {
        id: "app2",
        jobTitle: "Backend Developer",
        company: "CodeCorp",
        status: "Rejected",
        message: "Thank you for applying. Unfortunately, your profile does not meet our current requirements.",
      },
    ];

    const found = dummyData.find((app) => app.id === id);
    setApplication(found);
  }, [id]);

  if (!application) return <div className="p-6">Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Application Details</h2>

          <p><strong>Job Title:</strong> {application.jobTitle}</p>
          <p><strong>Company:</strong> {application.company}</p>
          <p><strong>Status:</strong> <span className="text-indigo-600">{application.status}</span></p>
          
          <div className="mt-4 bg-gray-50 p-4 rounded border border-gray-200">
            <p className="text-sm text-gray-700">
              <strong>Message from Employer:</strong>
            </p>
            <p className="mt-2 text-gray-800">{application.message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationDetail;
