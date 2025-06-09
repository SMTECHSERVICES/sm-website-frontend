import { useState } from "react";

const generateRoomName = () => {
  // Generate unique room name (can be improved as needed)
  return "MentorSession_" + Math.random().toString(36).substring(2, 10);
};

const MentorSessions = () => {
  const [sessions, setSessions] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [activeSession, setActiveSession] = useState(null);

  const handleSchedule = () => {
    if (!date || !time) {
      alert("Please select date and time");
      return;
    }
    const roomName = generateRoomName();
    const dateTime = new Date(`${date}T${time}`);
    const newSession = {
      id: roomName,
      datetime: dateTime,
      roomName,
    };
    setSessions([...sessions, newSession]);
    setDate("");
    setTime("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Mentor Live Session Scheduler (Jitsi Meet)</h2>

      {/* Schedule form */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-auto"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-auto"
        />
        <button
          onClick={handleSchedule}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Schedule Session
        </button>
      </div>

      {/* Scheduled sessions list */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Scheduled Sessions</h3>
        {sessions.length === 0 && <p>No sessions scheduled yet.</p>}

        <div className="grid gap-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="border rounded p-4 shadow flex flex-col md:flex-row justify-between items-center"
            >
              <div>
                <p>
                  <strong>Date & Time:</strong>{" "}
                  {session.datetime.toLocaleString()}
                </p>
                <p>
                  <strong>Room:</strong> {session.roomName}
                </p>
              </div>
              <button
                onClick={() => setActiveSession(session)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4 md:mt-0"
              >
                Join Meeting
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Active Jitsi Meet iframe */}
      {activeSession && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Live Session: {activeSession.roomName}</h3>
          <div style={{ height: "600px" }}>
            <iframe
              title="Jitsi Meet"
              src={`https://meet.jit.si/${activeSession.roomName}#userInfo.displayName="Mentor"`}
              allow="camera; microphone; fullscreen; speaker; display-capture"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals allow-orientation-lock"
            />
          </div>
          <button
            onClick={() => setActiveSession(null)}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Close Session
          </button>
        </div>
      )}
    </div>
  );
};

export default MentorSessions;
