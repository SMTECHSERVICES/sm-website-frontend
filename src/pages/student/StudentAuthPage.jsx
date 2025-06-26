import React, { useState } from "react";
//import { useAuth } from "../context/AuthContext"; // adjust path as needed
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const StudentAuthPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  // Login form state
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  // Registration form state
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // Example token and user role
    const userData = {
      isAuthenticated: true,
      user: {
        name: "Student",
        email: loginData.email,
        role: "student",
      },
      token: "dummy-login-token",
    };
    login(userData);
    alert("Login successful!");
    navigate('/student/dashboard')
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      isAuthenticated: true,
      user: {
        name: registerData.fullName,
        email: registerData.email,
        role: "student",
      },
      token: "dummy-register-token",
    };
    login(userData);
    alert("Registration successful!");
    navigate('/student/dashboard')
    
  };

  return (
   <>
   <Navbar />

    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Student Login" : "Student Registration"}
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
              className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4">
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
            <button
              type="submit"
              className="w-full bg-green-600 cursor-pointer text-white py-2 rounded hover:bg-green-700"
            >
              Register
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-sm cursor-pointer text-gray-600">
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

export default StudentAuthPage;
