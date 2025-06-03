import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const SessionBooking = () => {
  const [formData, setFormData] = useState({
    course: "",
    batch: "",
    date: "",
    time: "",
    topic: "",
  });

  const courses = [
    "Digital Marketing",
    "Advanced Excel",
    "Software Development Training",
    "Internship Programs",
  ];

  const batches = [
    "Batch A",
    "Batch B",
    "Batch C",
  ];

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate API call to backend to save session details
    alert(`Session booked for ${formData.course} on ${formData.date} at ${formData.time}`);
    setFormData({
      course: "",
      batch: "",
      date: "",
      time: "",
      topic: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Book a Training Session</h1>
        <form
          className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="course" className="block mb-1 font-semibold">
              Select Course
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
            >
              <option value="">-- Select Course --</option>
              {courses.map((course, i) => (
                <option key={i} value={course}>{course}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="batch" className="block mb-1 font-semibold">
              Select Batch
            </label>
            <select
              id="batch"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
            >
              <option value="">-- Select Batch --</option>
              {batches.map((batch, i) => (
                <option key={i} value={batch}>{batch}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="topic" className="block mb-1 font-semibold">
              Session Topic
            </label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              placeholder="Enter session topic"
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block mb-1 font-semibold">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="time" className="block mb-1 font-semibold">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          >
            Book Session
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SessionBooking;
