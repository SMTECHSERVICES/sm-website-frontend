import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // adjust path as needed
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
const EmployerAuthPage = () => {
    const navigate = useNavigate();
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const [registerData, setRegisterData] = useState({
    companyName: "",
    fullName: "",
    email: "",
    phone: "",
    website: "",
    password: "",
    confirmPassword: "",
    companyLogo: null,
    companyDoc: null,
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      isAuthenticated: true,
      user: {
        name: "Employer",
        email: loginData.email,
        role: "employer",
      },
      token: "employer-login-token",
    };
    login(userData);
    alert("Login successful!");
    navigate('/employer/Dashboard')
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
        role: "employer",
      },
      token: "employer-register-token",
    };
    login(userData);
    alert("Registration successful!");
    navigate('/employer/Dashboard')
    // In real app: Send `formData` to API
  };

  return (
   <>
   <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Employer Login" : "Employer Registration"}
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
              placeholder="Company Name"
              value={registerData.companyName}
              onChange={(e) =>
                setRegisterData({ ...registerData, companyName: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />

            <input
              type="text"
              placeholder="Your Full Name"
              value={registerData.fullName}
              onChange={(e) =>
                setRegisterData({ ...registerData, fullName: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />

            <input
              type="email"
              placeholder="Official Email Address"
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
              type="text"
              placeholder="Company Website (optional)"
              value={registerData.website}
              onChange={(e) =>
                setRegisterData({ ...registerData, website: e.target.value })
              }
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
                setRegisterData({ ...registerData, confirmPassword: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />

            {/* Upload Company Logo */}
            <div>
              <label className="block text-sm font-medium mb-1">Upload Company Logo</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    companyLogo: e.target.files[0],
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Upload Company Document */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Upload Company PAN/GST Document (PDF)
              </label>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    companyDoc: e.target.files[0],
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

export default EmployerAuthPage;
