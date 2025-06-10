import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import Navbar from "../../components/layout/Navbar";

const EnrolledCourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    const fetchCourse = async () => {
      const mockCourse = {
        id: courseId,
        title: "React Full Course",
        thumbnail: "https://via.placeholder.com/600x200?text=Course+Thumbnail",
        sessions: [
          {
            lesson: 1,
            title: "Introduction to React",
            pdf: "https://example.com/intro.pdf",
            video: "https://youtube.com/intro",
            live: "",
            completed: false,
          },
          {
            lesson: 2,
            title: "JSX & Components",
            pdf: "",
            video: "https://youtube.com/jsx",
            live: "https://zoom.us/liveclass",
            completed: false,
          },
        ],
      };
      setCourse(mockCourse);
      setSessions(mockCourse.sessions);
    };
    fetchCourse();
  }, [courseId]);

  const handleCheckboxChange = (index) => {
    const updated = [...sessions];
    updated[index].completed = !updated[index].completed;
    setSessions(updated);
  };

  const completedCount = sessions.filter((s) => s.completed).length;
  const progress = sessions.length
    ? Math.round((completedCount / sessions.length) * 100)
    : 0;

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-4">
        {course ? (
          <>
            {/* Course Header */}
            <div className="mb-4">
              <img
                src={course.thumbnail}
                alt="Course Thumbnail"
                className="w-full rounded shadow"
              />
              <h1 className="text-3xl font-bold mt-3">{course.title}</h1>
              <p className="text-sm text-gray-600 mt-1">
                Completion: {progress}% ({completedCount}/{sessions.length})
              </p>
              <div className="w-full bg-gray-200 h-4 rounded-full mt-2">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Session History Table */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-3">Session History</h2>
              <table className="min-w-full text-center table-auto border border-gray-300">
                <thead>
                  <tr className="bg-blue-300">
                    <th className="border p-2">✓</th>
                    <th className="border p-2">Lesson</th>
                    <th className="border p-2">Title</th>
                    <th className="border p-2">Notes (PDF)</th>
                    <th className="border p-2">Video</th>
                    <th className="border p-2">Live Class Link</th>
                  </tr>
                </thead>
                <tbody>
                  {sessions.length > 0 ? (
                    sessions.map((session, index) => (
                      <tr key={index} className="border">
                        <td className="p-2 border">
                          <input
                            type="checkbox"
                            checked={session.completed}
                            onChange={() => handleCheckboxChange(index)}
                            className="w-4 h-4"
                          />
                        </td>
                        <td className="p-2 border">{session.lesson}</td>
                        <td className="p-2 border">{session.title}</td>
                        <td className="p-2 border">
                          {session.pdf ? (
                            <a
                              href={session.pdf}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-600 underline"
                            >
                              View PDF
                            </a>
                          ) : (
                            "—"
                          )}
                        </td>
                        <td className="p-2 border">
                          {session.video ? (
                            <a
                              href={session.video}
                              target="_blank"
                              rel="noreferrer"
                              className="text-red-600 hover:text-red-700 text-lg inline-flex items-center gap-1"
                            >
                              <FaYoutube className="text-2xl" />
                              <span className="hidden sm:inline">Watch</span>
                            </a>
                          ) : (
                            "—"
                          )}
                        </td>
                        <td className="p-2 border">
                          {session.live ? (
                            <a
                              href={session.live}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-600 underline"
                            >
                              Join Class
                            </a>
                          ) : (
                            "—"
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center p-4 text-gray-500">
                        No sessions added yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p>Loading course details...</p>
        )}
      </div>
    </>
  );
};

export default EnrolledCourseDetail;
