// src/components/SessionForm.jsx
import { useState } from "react";
import UploadBox from "../components/ui/UploadBox";

const SessionForm = ({ onSubmit }) => {
  const [lesson, setLesson] = useState("");
  const [title, setTitle] = useState("");
  const [pdf, setPdf] = useState(null);
  const [video, setVideo] = useState("");
  const [live, setLive] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let pdfUrl = pdf ? URL.createObjectURL(pdf) : null;

    onSubmit({
        lesson:lesson,
      title: title,
      pdf: pdfUrl,
      video,
      live,
    });

    // Reset form
    setLesson("");
    setTitle("");
    setPdf(null);
    setVideo("");
    setLive("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 bg-gray-100 p-4 rounded shadow space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Lesson Number:</label>
          <input
            type="number"
            value={lesson}
            required
            onChange={(e) => setLesson(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., 1"
          />
        </div>

        <div>
          <label className="block font-medium">Session Title:</label>
          <input
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., Introduction to React"
          />
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1">Upload Notes (PDF):</label>
        <UploadBox
          label="Upload PDF Notes"
          accept=".pdf"
          onFileSelect={(file) => setPdf(file)}
        />
      </div>

      <div>
        <label className="block font-medium">YouTube Video Link:</label>
        <input
          type="url"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="https://youtube.com/..."
        />
      </div>

      <div>
        <label className="block font-medium">Live Class Link:</label>
        <input
          type="url"
          value={live}
          onChange={(e) => setLive(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="https://meet.google.com/..."
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Create Session
      </button>
    </form>
  );
};

export default SessionForm;
