import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Adjust path if needed
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const JobSeekerAuthPage = () => {
    const navigate = useNavigate();
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
    qualification: "",
    experience: "",
    location: "",
    resume: null,
    profilePic: null,
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      isAuthenticated: true,
      user: {
        name: "Job Seeker",
        email: loginData.email,
        role: "candidate",
      },
      token: "jobseeker-login-token",
    };
    login(userData);
    alert("Login successful!");
    navigate('/candidate/dashboard')
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const formData = new FormData();
    for (const key in registerData) {
      formData.append(key, registerData[key]);
    }

    const userData = {
      isAuthenticated: true,
      user: {
        name: registerData.fullName,
        email: registerData.email,
        role: "candidate",
      },
      token: "jobseeker-register-token",
    };
    login(userData);
    alert("Registration successful!");
    navigate('/candidate/dashboard');
    // In real app: send formData to backend
  };

  return (
  <>
  <Navbar />

    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Job Seeker Login" : "Job Seeker Registration"}
        </h2>

        {isLogin ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4" encType="multipart/form-data">
            <input
              type="text"
              placeholder="Full Name"
              value={registerData.fullName}
              onChange={(e) =>
                setRegisterData({ ...registerData, fullName: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={registerData.phone}
              onChange={(e) =>
                setRegisterData({ ...registerData, phone: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />

            <input
              type="date"
              placeholder="Date of Birth"
              value={registerData.dob}
              onChange={(e) =>
                setRegisterData({ ...registerData, dob: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Highest Qualification"
              value={registerData.qualification}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  qualification: e.target.value,
                })
              }
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Years of Experience (e.g. Fresher, 2 years)"
              value={registerData.experience}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  experience: e.target.value,
                })
              }
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Preferred Job Location"
              value={registerData.location}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  location: e.target.value,
                })
              }
              required
              className="w-full p-2 border rounded"
            />

            <input
              type="password"
              placeholder="Password"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  password: e.target.value,
                })
              }
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={registerData.confirmPassword}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  confirmPassword: e.target.value,
                })
              }
              required
              className="w-full p-2 border rounded"
            />

            <div>
              <label className="block text-sm font-medium mb-1">Upload Resume (PDF)</label>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) =>
                  setRegisterData({ ...registerData, resume: e.target.files[0] })
                }
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Upload Profile Picture </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    profilePic: e.target.files[0],
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Register
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already registered?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 cursor-pointer underline ml-1"
          >
            {isLogin ? "Register here" : "Login here"}
          </button>
        </p>
      </div>
    </div>

  <Footer />
  </>
  );
};

export default JobSeekerAuthPage;
