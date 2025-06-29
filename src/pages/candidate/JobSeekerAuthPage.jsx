
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { server } from "../../constants/api";
import axios from "axios";

const JobSeekerAuthPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [hasPaid, setHasPaid] = useState(false);
  const portalFeeAmount = 1180; // INR

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showRegisterConfirmPassword, setShowRegisterConfirmPassword] = useState(false);

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
    resumeName: "",
    profilePic: null,
    profilePicName: "",
  });

  // Password strength checker
  const checkPasswordStrength = (password) => {
    if (password.length === 0) return "";
    if (password.length < 6) return "Weak (min 6 characters)";
    if (/[A-Z]/.test(password) && /[0-9]/.test(password) && password.length >= 8) 
      return "Strong";
    return "Medium (add uppercase letters and numbers)";
  };

  // Handle file uploads
  const handleFileChange = (e, field) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileName = file.name;
      
      setRegisterData({
        ...registerData,
        [field]: file,
        [`${field}Name`]: fileName,
      });
    }
  };

 
  const loadRazorpay = async () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => {
      const options = {
        key: import.meta.env.VITE_RAZORPAY_API_KEY, // 👉 Replace with your Razorpay Key ID
        amount: portalFeeAmount * 100,
        currency: "INR",
        name: "SM Services",
        description: "Job Seeker Portal Fee",
        handler: function (response) {
          alert("Payment Successful: " + response.razorpay_payment_id);
          setHasPaid(true);
        },
        prefill: {
          name: registerData.fullName,
          email: registerData.email,
          contact: registerData.phone,
        },
        theme: {
          color: "#1D4ED8",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    };

    script.onerror = () => {
      alert("Failed to load Razorpay. Please check your connection.");
    };

    document.body.appendChild(script);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      isAuthenticated: true,
      user: { name: "Job Seeker", email: loginData.email, role: "candidate" },
      token: "jobseeker-login-token",
    };
    login(userData);
    alert("Login successful!");
    navigate("/candidate/dashboard");
  };

  

const handleRegister = async (e) => {
  e.preventDefault();

  if (!hasPaid) return alert("Please complete payment first.");
  if (registerData.password !== registerData.confirmPassword) {
    return alert("Passwords do not match!");
  }

  const formData = new FormData();

  const user = {
    fullName: registerData.fullName,
    email: registerData.email,
    password: registerData.password,
    phone: registerData.phone,
    dob: registerData.dob,
    qualification: registerData.qualification,
    experience: registerData.experience,
    location: registerData.location,
  };

  formData.append("user", JSON.stringify(user));
  formData.append("amount", portalFeeAmount);

  if (registerData.resume) {
    formData.append("resume", registerData.resume);
  }

  if (registerData.profilePic) {
    formData.append("profilePic", registerData.profilePic);
  }

  try {
    const { data } = await axios.post(
      `${server}/razorpay/create-order`,
      formData,
      {
        withCredentials: true, // 🔐 Important for sending JWT cookies
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // ✅ Store login info in auth context
    login({
      isAuthenticated: true,
      user: {
        name: data.candidate.fullName,
        email: data.candidate.email,
        role: "candidate",
      },
      token: data.token, // Replace if your backend returns a token
    });

    alert("Registration successful!");
    navigate("/candidate/dashboard");

  } catch (error) {
    console.error("Registration error:", error);
    const msg = error.response?.data?.message || "Something went wrong. Please try again.";
    alert(msg);
  }
};



  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isLogin ? "Job Seeker Login" : "Create Job Seeker Account"}
          </h2>

          {isLogin ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    required
                    className="w-full p-2 border rounded pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                  >
                    {showLoginPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Login to Your Account
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4" encType="multipart/form-data">
              {/* Personal Information Section */}
              <div className="border-b pb-3">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
                
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First and Last Name"
                    value={registerData.fullName}
                    onChange={(e) => setRegisterData({ ...registerData, fullName: e.target.value })}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={registerData.email}
                    onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={registerData.phone}
                    onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                    pattern="[0-9]{10}"
                    required
                    className="w-full p-2 border rounded"
                  />
                  <p className="text-xs text-gray-500 mt-1">Format: 9876543210</p>
                </div>
                
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={registerData.dob}
                    onChange={(e) => setRegisterData({ ...registerData, dob: e.target.value })}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div className="border-b pb-3">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Professional Details</h3>
                
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Highest Qualification <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Degree/Certification"
                    value={registerData.qualification}
                    onChange={(e) => setRegisterData({ ...registerData, qualification: e.target.value })}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Work Experience <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Years of experience"
                    value={registerData.experience}
                    onChange={(e) => setRegisterData({ ...registerData, experience: e.target.value })}
                    required
                    className="w-full p-2 border rounded"
                  />
                  <p className="text-xs text-gray-500 mt-1">Example: 2 years, Fresher, etc.</p>
                </div>
                
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Job Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="City or State"
                    value={registerData.location}
                    onChange={(e) => setRegisterData({ ...registerData, location: e.target.value })}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>

              {/* Account Security */}
              <div className="border-b pb-3">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Security</h3>
                
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Create Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showRegisterPassword ? "text" : "password"}
                      placeholder="Strong password (min 6 characters)"
                      value={registerData.password}
                      onChange={(e) => {
                        setRegisterData({ ...registerData, password: e.target.value });
                        setPasswordStrength(checkPasswordStrength(e.target.value));
                      }}
                      required
                      className="w-full p-2 border rounded pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                    >
                      {showRegisterPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                          <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {passwordStrength && (
                    <p className={`text-xs mt-1 ${
                      passwordStrength.includes("Weak") ? "text-red-500" : 
                      passwordStrength.includes("Medium") ? "text-yellow-500" : "text-green-500"
                    }`}>
                      Strength: {passwordStrength}
                    </p>
                  )}
                </div>
                
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showRegisterConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter your password"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                      required
                      className="w-full p-2 border rounded pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowRegisterConfirmPassword(!showRegisterConfirmPassword)}
                    >
                      {showRegisterConfirmPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                          <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Documents Section - Improved */}
              <div className="border-b pb-3">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Upload Documents</h3>
                
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resume (PDF only) <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center">
                    <label className="flex flex-col items-center justify-center w-full p-3 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PDF (max. 5MB)</p>
                      </div>
                      <input 
                        type="file" 
                        accept=".pdf" 
                        className="hidden" 
                        onChange={(e) => handleFileChange(e, 'resume')} 
                        required
                      />
                    </label>
                  </div>
                  {registerData.resumeName && (
                    <div className="mt-2 flex items-center text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                      </svg>
                      <span className="truncate">{registerData.resumeName}</span>
                    </div>
                  )}
                </div>
                
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Profile Photo
                  </label>
                  <div className="flex items-center">
                    <label className="flex flex-col items-center justify-center w-full p-3 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">JPG, PNG (max. 2MB)</p>
                      </div>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleFileChange(e, 'profilePic')} 
                      />
                    </label>
                  </div>
                  {registerData.profilePicName && (
                    <div className="mt-2 flex items-center text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                      <span className="truncate">{registerData.profilePicName}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Section */}
              <div className="bg-yellow-50 p-4 border-l-4 border-yellow-500 rounded">
                <h3 className="font-semibold text-gray-800 mb-2">Portal Registration Fee</h3>
                <p className="text-sm text-gray-700 mb-3">
                  One-time payment of <strong>₹{portalFeeAmount}</strong> for full access to job opportunities and features
                </p>
                
                {!hasPaid ? (
                  <button
                    type="button"
                    onClick={loadRazorpay}
                    className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    Pay Now with Razorpay
                  </button>
                ) : (
                  <div className="bg-green-50 p-3 rounded border border-green-200 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-green-700 font-medium">Payment Successful</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={!hasPaid}
                className={`w-full text-white py-2.5 rounded font-medium mt-4 ${
                  hasPaid 
                    ? "bg-green-600 hover:bg-green-700 transition" 
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {hasPaid ? "Complete Registration" : "Complete Payment to Register"}
              </button>
            </form>
          )}

          <div className="mt-6 text-center text-sm text-gray-600 pt-4 border-t">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:text-blue-800 font-medium ml-1"
            >
              {isLogin ? "Register Now" : "Login Instead"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobSeekerAuthPage;




