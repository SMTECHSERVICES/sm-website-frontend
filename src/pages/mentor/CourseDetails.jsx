// src/pages/mentor/CourseDetails.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";

const CourseDetails = () => {
  const { courseId } = useParams();

  const [videoLink, setVideoLink] = useState("");
  const [youtubeLinks, setYoutubeLinks] = useState([]);

  const [sessionLink, setSessionLink] = useState("");
  const [schedule, setSchedule] = useState("");

  // Safe YouTube embed parser
  const getEmbedUrl = (url) => {
    try {
      const parsedUrl = new URL(url);
      const videoId = parsedUrl.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    } catch {
      return "";
    }
  };

  const handleAddVideo = () => {
    if (videoLink.trim()) {
      setYoutubeLinks([...youtubeLinks, videoLink.trim()]);
      setVideoLink("");
    }
  };

  const handleSchedule = () => {
    if (!sessionLink || !schedule) {
      alert("Please enter session link and schedule time.");
      return;
    }
    alert(`Session link: ${sessionLink}\nScheduled at: ${new Date(schedule).toLocaleString()}`);
    setSessionLink("");
    setSchedule("");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded-xl mt-4">
      <h2 className="text-xl font-bold mb-4">Manage Course: {courseId}</h2>

      {/* Video Upload Section */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold">YouTube Video Link</label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter YouTube video link"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            className="flex-1 border px-3 py-2 rounded"
          />
          <button
            onClick={handleAddVideo}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Video
          </button>
        </div>
      </div>

      {/* Display YouTube Videos */}
      <div className="mb-8 grid gap-6">
        {youtubeLinks.length > 0 && (
          <h3 className="text-lg font-semibold">Uploaded Videos</h3>
        )}
        {youtubeLinks.map((link, idx) => {
          const embedUrl = getEmbedUrl(link);
          return embedUrl ? (
            <iframe
              key={idx}
              width="100%"
              height="240"
              src={embedUrl}
              title={`YouTube Video ${idx}`}
              allowFullScreen
              className="rounded shadow"
            ></iframe>
          ) : (
            <p key={idx} className="text-red-600">
              Invalid YouTube link: {link}
            </p>
          );
        })}
      </div>

      {/* Live Session (Meet/Jitsi) Scheduler */}
      <div className="border-t pt-6">
        <h3 className="font-bold mb-2">Schedule Live Session (Meet/Jitsi)</h3>
        <label className="block mb-1 font-medium">Session Link</label>
        <input
          type="url"
          placeholder="https://meet.google.com/xyz-abc-def or https://meet.jit.si/your-room"
          value={sessionLink}
          onChange={(e) => setSessionLink(e.target.value)}
          className="w-full border px-3 py-2 mb-2 rounded"
        />
        <label className="block mb-1 font-medium">Session Date & Time</label>
        <input
          type="datetime-local"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
          className="w-full border px-3 py-2 mb-4 rounded"
        />
        <button
          onClick={handleSchedule}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Schedule Session
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
