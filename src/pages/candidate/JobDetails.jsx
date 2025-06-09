// src/pages/candidate/JobDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

const dummyJobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "SM Services",
    location: "Delhi",
    salary: "₹35,000",
    description:
      "Develop responsive UI using React.js and Tailwind CSS. Collaborate with backend team and designers.",
  },
  {
    id: "2",
    title: "Backend Developer",
    company: "SM Services",
    location: "Remote",
    salary: "₹45,000",
    description:
      "Build scalable APIs using Node.js, Express, and MongoDB. Ensure security and performance.",
  },
];

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = dummyJobs.find((j) => j.id === id);

  if (!job) return <p className="text-center mt-10">Job not found</p>;

  return (
   <>
   <Navbar />
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">{job.title}</h2>
        <p className="text-gray-600 mb-1">{job.company}</p>
        <p className="text-gray-500 mb-1">{job.location}</p>
        <p className="text-gray-500 mb-4">Salary: {job.salary}</p>
        <p className="text-gray-700">{job.description}</p>

        <div className="mt-6 text-right">
          <button
            onClick={() => navigate(`/candidate/apply/${job.id}`)}
            className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
   </>
  );
};

export default JobDetails;
