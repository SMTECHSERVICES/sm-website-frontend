


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { server } from "../../constants/api";
import axios from "axios";
import { FiUser, FiLock, FiMail, FiPhone, FiGlobe, FiBriefcase, FiFileText } from "react-icons/fi";

const EmployerAuthPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    
    // Simulating API call
    setTimeout(() => {
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
      setIsLoading(false);
      navigate('/employer/Dashboard');
    }, 1000);
  };

 const handleRegister = async (e) => {
  e.preventDefault();
  
  if (registerData.password !== registerData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }
  
  setIsLoading(true);
  
  try {
    // Prepare form data
    const formData = new FormData();
    
    // Append employer data as JSON string
    const employerData = {
      companyName: registerData.companyName,
      fullName: registerData.fullName,
      email: registerData.email,
      phone: registerData.phone,
      companyWebsite: registerData.website,
      password: registerData.password
    };
    formData.append("employer", JSON.stringify(employerData));
    
    // Append files if they exist
    if (registerData.companyLogo) {
      formData.append("companyLogo", registerData.companyLogo);
    }
    if (registerData.companyDoc) {
      formData.append("companyDoc", registerData.companyDoc);
    }
    
    // Make API request
    const response = await axios.post(
      `${server}/employer/register`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true
      }
    );
    
    // Handle successful response
    if (response.status === 200) {
      const { token, employer } = response.data;
      
      // Create auth context data
      const userData = {
        isAuthenticated: true,
        user: {
          id: employer.id,
          name: employer.fullName,
          email: employer.email,
          role: "employer",
        },
        token,
      };
      
      // Update auth context
      login(userData);
      
      // Redirect to dashboard
      navigate('/employer/Dashboard');
    }
  } catch (error) {
    console.error("Registration failed:", error);
    
    // Handle specific error messages
    let errorMessage = "Registration failed. Please try again.";
    if (error.response) {
      if (error.response.status === 400) {
        errorMessage = error.response.data.message || "Validation error";
      } else if (error.response.status === 409) {
        errorMessage = "Email or phone number already registered";
      }
    }
    
    alert(errorMessage);
  } finally {
    setIsLoading(false);
  }
};

  const handleFileChange = (e, field) => {
    setRegisterData({
      ...registerData,
      [field]: e.target.files[0],
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center p-4 py-8">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Section - Branding */}
          <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Employer Portal</h1>
              <p className="text-blue-100 mb-8">
                {isLogin 
                  ? "Welcome back! Access your employer dashboard to manage job postings and candidates."
                  : "Join our platform to find the best talent for your company. Post jobs and manage applications with ease."}
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="flex items-center justify-center mb-6">
                <div className=" border-2  w-16 h-16">
                  <img className="w-full h-full" src="/smLogo.png" />
                </div>
              </div>
              <div className="text-center text-blue-100 text-sm">
                <p>Trusted by 5,000+ companies worldwide</p>
              </div>
            </div>
          </div>
          
          {/* Right Section - Form */}
          <div className="md:w-3/5 p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                {isLogin ? "Employer Login" : "Employer Registration"}
              </h2>
              
              <div className="relative inline-block w-12 h-6 rounded-full bg-gray-300">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className={`absolute top-0 w-6 h-6 rounded-full bg-blue-600 transition-all duration-300 ${
                    isLogin ? "left-0" : "left-6"
                  }`}
                />
              </div>
            </div>
            
            {isLogin ? (
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="relative">
                  <FiMail className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Work Email Address"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    required
                    className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="relative">
                  <FiLock className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    required
                    className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {/* <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    /> */}
                    {/* <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                      Remember me
                    </label> */}
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center items-center cursor-pointer bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : "Login"}
                </button>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(false)}
                      className="text-blue-600 cursor-pointer font-medium hover:underline"
                    >
                      Register here
                    </button>
                  </p>
                </div>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <div className="relative">
                      <FiBriefcase className="absolute left-3 top-3.5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Your company name"
                        value={registerData.companyName}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, companyName: e.target.value })
                        }
                        required
                        className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Full Name</label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-3.5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="First and last name"
                        value={registerData.fullName}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, fullName: e.target.value })
                        }
                        required
                        className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-3.5 text-gray-400" />
                      <input
                        type="email"
                        placeholder="company@example.com"
                        value={registerData.email}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, email: e.target.value })
                        }
                        required
                        className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <FiPhone className="absolute left-3 top-3.5 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={registerData.phone}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, phone: e.target.value })
                        }
                        required
                        className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Website (optional)</label>
                  <div className="relative">
                    <FiGlobe className="absolute left-3 top-3.5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="https://yourcompany.com"
                      value={registerData.website}
                      onChange={(e) =>
                        setRegisterData({ ...registerData, website: e.target.value })
                      }
                      className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div className="relative">
                      <FiLock className="absolute left-3 top-3.5 text-gray-400" />
                      <input
                        type="password"
                        placeholder="Create a strong password"
                        value={registerData.password}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, password: e.target.value })
                        }
                        required
                        className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <div className="relative">
                      <FiLock className="absolute left-3 top-3.5 text-gray-400" />
                      <input
                        type="password"
                        placeholder="Re-enter your password"
                        value={registerData.confirmPassword}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, confirmPassword: e.target.value })
                        }
                        required
                        className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Logo
                    </label>
                    <div className="relative">
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <FiBriefcase className="w-8 h-8 mb-2 text-gray-400" />
                            <p className="text-sm text-gray-500">
                              {registerData.companyLogo 
                                ? registerData.companyLogo.name 
                                : "Click to upload logo"}
                            </p>
                          </div>
                          <input 
                            type="file" 
                            className="hidden" 
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'companyLogo')}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Document (PDF)
                    </label>
                    <div className="relative">
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <FiFileText className="w-8 h-8 mb-2 text-gray-400" />
                            <p className="text-sm text-gray-500">
                              {registerData.companyDoc 
                                ? registerData.companyDoc.name 
                                : "Upload PAN/GST document"}
                            </p>
                          </div>
                          <input 
                            type="file" 
                            className="hidden" 
                            accept=".pdf"
                            onChange={(e) => handleFileChange(e, 'companyDoc')}
                            required
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-600">
                      I agree to the <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center items-center cursor-pointer bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating account...
                    </>
                  ) : "Create Account"}
                </button>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(true)}
                      className="text-blue-600 cursor-pointer font-medium hover:underline"
                    >
                      Login here
                    </button>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EmployerAuthPage;