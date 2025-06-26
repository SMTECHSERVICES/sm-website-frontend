import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext"; // adjust import if needed
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const MentorAuthPage = () => {
    const navigate = useNavigate();
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  // Login State
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  // Register State
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    cv: null,
    profilePic: null,
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      isAuthenticated: true,
      user: {
        name: "Mentor",
        email: loginData.email,
        role: "mentor",
      },
      token: "mentor-login-token",
    };
    login(userData);
    alert("Login successful!");
    navigate('/mentor/dashboard')
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", registerData.fullName);
    formData.append("email", registerData.email);
    formData.append("phone", registerData.phone);
    formData.append("password", registerData.password);
    formData.append("cv", registerData.cv);
    formData.append("profilePic", registerData.profilePic);

    const userData = {
      isAuthenticated: true,
      user: {
        name: registerData.fullName,
        email: registerData.email,
        role: "mentor",
      },
      token: "mentor-register-token",
    };

    login(userData);
    alert("Mentor registration successful!");
    navigate('/mentor/dashboard')
    // In real app: send `formData` to API using Axios
  };

  return (
    <>
    <Navbar />
     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Mentor Login" : "Mentor Registration"}
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
              type="password"
              placeholder="Password"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
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

            {/* Upload CV */}
            <div>
              <label className="block text-sm font-medium mb-1">Upload CV (PDF)</label>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) =>
                  setRegisterData({ ...registerData, cv: e.target.files[0] })
                }
                required
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Upload Profile Picture */}
            <div>
              <label className="block text-sm font-medium mb-1">Upload Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    profilePic: e.target.files[0],
                  })
                }
                required
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

export default MentorAuthPage;
