// src/pages/candidate/ApplyJob.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/layout/Navbar";

const ApplyJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("message", formData.message);
    payload.append("resume", formData.resume);
    payload.append("jobId", id);

    console.log("Submitted:", {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      resume: formData.resume?.name,
    });

    alert("Application submitted successfully!");
    navigate("/candidate/jobs");
  };

  return (
   <>
   <Navbar />
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <div className="bg-white p-8 rounded shadow max-w-xl w-full mt-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Apply for Job</h2>
        <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write a short message or cover letter"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Resume (PDF Only)</label>

            <label className="flex items-center justify-between bg-gray-100 border border-dashed border-gray-400 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-200">
              <span className="text-gray-600">{formData.resume?.name || "Choose PDF file..."}</span>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                required
                className="hidden"
              />
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Browse</span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded text-lg font-medium transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
   </>
  );
};

export default ApplyJob;
