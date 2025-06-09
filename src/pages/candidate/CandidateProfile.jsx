import { useState } from "react";
import Navbar from "../../components/layout/Navbar";

const CandidateProfile = () => {
  const [profile, setProfile] = useState({
    fullName: "Ravi Sharma",
    email: "ravi@example.com",
    phone: "9876543210",
    bio: "Passionate frontend developer with a love for React and UI/UX design.",
    skills: "React, Tailwind, JavaScript, HTML, CSS",
    linkedin: "https://linkedin.com/in/ravi-sharma",
    portfolio: "https://ravi-portfolio.com",
  });

  const [profileImage, setProfileImage] = useState(null); // File object
  const [previewImage, setPreviewImage] = useState(null); // Preview URL
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example form submission
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    formData.append("data", JSON.stringify(profile));

    // TODO: Send formData to backend with fetch or axios
    setMessage("Profile updated successfully with image!");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Candidate Profile
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
            {/* Profile Image Upload */}
            <div>
              <label className="block mb-1 text-sm font-medium">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full"
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="mt-2 h-24 w-24 rounded-full object-cover border"
                />
              )}
            </div>

            {/* Profile Fields */}
            <div>
              <label className="block mb-1 text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Short Bio</label>
              <textarea
                name="bio"
                rows="3"
                value={profile.bio}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Skills</label>
              <input
                type="text"
                name="skills"
                value={profile.skills}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">LinkedIn Profile</label>
              <input
                type="url"
                name="linkedin"
                value={profile.linkedin}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Portfolio Website</label>
              <input
                type="url"
                name="portfolio"
                value={profile.portfolio}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
            >
              Save Profile
            </button>

            {message && <p className="text-green-600 mt-2">{message}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default CandidateProfile;
