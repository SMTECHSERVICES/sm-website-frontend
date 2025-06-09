// src/pages/mentor/CreateCourse.jsx
import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import UploadBox from "../../components/ui/UploadBox";

const CreateCourse = () => {
  const [course, setCourse] = useState({
    title: "",
    description: "",
    duration: "",
    skills: "",
    price: "",
    thumbnail: null,
    syllabusPdf: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "thumbnail" || name === "syllabusPdf") {
      setCourse({ ...course, [name]: files[0] });
    } else {
      setCourse({ ...course, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in course) {
      formData.append(key, course[key]);
    }

    console.log("Course data to submit:", course);
    alert("Course created successfully!");

    // Add axios/fetch POST here
  };

  return (
    <>
    <Navbar />
     <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow mt-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Create a New Course</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Course Title</label>
          <input
            type="text"
            name="title"
            value={course.title}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded"
            placeholder="e.g. Advanced React"
          />
        </div>

        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            name="description"
            value={course.description}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded"
            rows={4}
            placeholder="Overview of your course"
          ></textarea>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">Duration</label>
            <input
              type="text"
              name="duration"
              value={course.duration}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded"
              placeholder="e.g. 4 weeks"
            />
          </div>

          <div>
            <label className="block font-semibold">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={course.price}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              placeholder="Optional"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold">Skills Covered</label>
          <input
            type="text"
            name="skills"
            value={course.skills}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded"
            placeholder="e.g. JavaScript, React, Firebase"
          />
        </div>

       {/* Course Thumbnail Upload */}
 <div className="mb-4">
        <UploadBox
          label="Upload Course Thumbnail (JPG/PNG)"
          accept="image/*"
          onFileSelect={(file) => handleFileSelect(file, "thumbnail")}
        />
      </div>

      <div className="mb-4">
        <UploadBox
          label="Upload Syllabus PDF"
          accept="application/pdf"
          onFileSelect={(file) => handleFileSelect(file, "syllabusPdf")}
        />
      </div>


        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Create Course
        </button>
      </form>
    </div>
    </>
   
  );
};

export default CreateCourse;
