// src/pages/employer/EditJob.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

const dummyJobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "SM Services",
    location: "Delhi",
    salary: "₹35,000",
    description: "Build and maintain frontend applications.",
  },
  {
    id: "2",
    title: "Backend Developer",
    company: "SM Services",
    location: "Remote",
    salary: "₹45,000",
    description: "Handle APIs and databases.",
  },
];

const EditJob = () => {
  const { id } = useParams(); // get id from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const job = dummyJobs.find((j) => j.id === id);
    if (job) {
      setFormData(job);
    } else {
      alert("Job not found!");
      navigate("/employer/manage-jobs");
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Job:", formData);

    // Here you would do: axios.put(`/api/jobs/${id}`, formData)
    alert("Job updated successfully!");
    navigate("/employer/manage-jobs");
  };

  if (!formData) return <p className="text-center mt-20 text-gray-500">Loading...</p>;

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">
          Edit Job Posting
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Job Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Salary</label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700">Job Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border rounded"
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Update Job
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default EditJob;
