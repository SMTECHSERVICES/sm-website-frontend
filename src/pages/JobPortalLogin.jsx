// src/pages/JobPortalLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // adjust path as per your folder
import Navbar from "../components/layout/Navbar";

const JobPortalLogin = () => {
  const navigate = useNavigate();
  const { login ,auth} = useAuth();
    // State for the login form inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "candidate", // default role for login
  });

  // State to control which form is currently visible: 'login', 'register-candidate', or 'register-employer'
  const [viewMode, setViewMode] = useState('login');

  // States for the candidate registration form inputs
  const [candidateRegForm, setCandidateRegForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // States for the employer registration form inputs
  const [employerRegForm, setEmployerRegForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // --- Handlers for Login Form ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mock authentication logic: In a real application, you would send
    // formData.email and formData.password to your backend for validation.
    // The backend would then return user data upon successful login.
    const userData = {
      isAuthenticated: true,
      user: {
        name: formData.email.split('@')[0], // Simple name extraction for demo
        email: formData.email,
        role: formData.role,
      },
      token: "dummy-auth-token", // A dummy token for demonstration purposes
    };

    login(userData); // Call the login function from AuthContext to set global auth state

    // Simulate navigation by logging to console or setting a message
    if (formData.role === "candidate") {
      navigate('/candidate/dashboard')
      // navigate("/candidate/dashboard"); // Uncomment if react-router-dom is available
    } else if (formData.role === "employer") {
      navigate('/employer/dashboard');
      // navigate("/employer/dashboard"); // Uncomment if react-router-dom is available
    }
    // No alert() used, as per instructions. Console log for dev visibility.
    console.log(`Logged in as ${formData.role}: ${formData.email}`);
  };

  // --- Handlers for Candidate Registration Form ---
  const handleCandidateRegChange = (e) => {
    const { name, value } = e.target;
    setCandidateRegForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCandidateRegister = async (e) => {
    e.preventDefault();
    if (candidateRegForm.password !== candidateRegForm.confirmPassword) {
      // Use a custom message box or state for user feedback instead of alert()
      console.log("Passwords do not match for Candidate Registration!");
      return;
    }
    // Mock registration logic: In a real application, send candidateRegForm data to your backend.
    console.log("Candidate Registration Data:", candidateRegForm);

    // After successful registration (mocked), clear the form and switch to login view
    setCandidateRegForm({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    
    alert("Candidate registration successful! Please login.");
 

    setViewMode('login'); // Redirect to login form after successful registration
      // navigate('/candidate/dashboard')
  };

  // --- Handlers for Employer Registration Form ---
  const handleEmployerRegChange = (e) => {
    const { name, value } = e.target;
    setEmployerRegForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmployerRegister = async (e) => {
    e.preventDefault();
    if (employerRegForm.password !== employerRegForm.confirmPassword) {
      // Use a custom message box or state for user feedback instead of alert()
      console.log("Passwords do not match for Employer Registration!");
      return;
    }
    // Mock registration logic: In a real application, send employerRegForm data to your backend.
    console.log("Employer Registration Data:", employerRegForm);

    // After successful registration (mocked), clear the form and switch to login view
    setEmployerRegForm({
      companyName: "",
      contactPerson: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    alert("Employer registration successful! Please login.");
    
    setViewMode('login'); // Redirect to login form after successful registration
   // navigate('/employer/dashboard')
  };

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   role: "candidate", // default role
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Mock authentication logic
  //   const userData = {
  //     isAuthenticated: true,
  //     user: {
  //       name: "John Doe",
  //       email: formData.email,
  //       role: formData.role,
  //     },
  //     token: "dummy-token",
  //   };

  //   login(userData);

  //   // Navigate based on role
  //   if (formData.role === "candidate") {
  //     navigate("/candidate/dashboard");
  //   } else if (formData.role === "employer") {
  //     navigate("/employer/dashboard");
  //   }
  // };

  return (
    <>
    <Navbar />
    {/* <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Job Portal</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="candidate">Candidate</option>
            <option value="employer">Employer</option>
          </select>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div> */}
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-inter">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
          {/* Display current auth status for demonstration */}
          {auth.isAuthenticated ? (
            <div className="text-center mb-4 p-2 bg-green-100 text-green-700 rounded-lg">
              Logged in as: {auth.user?.email} ({auth.user?.role})
            </div>
          ) : (
            <div className="text-center mb-4 p-2 bg-red-100 text-red-700 rounded-lg">
              Not Logged In
            </div>
          )}

          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
            {/* Dynamic heading based on the current view mode */}
            {viewMode === 'login' ? 'Login to Job Portal' : 'Register for Job Portal'}
          </h2>

          {/* Toggle buttons for Login and Registration modes */}
          <div className="flex justify-center mb-6 border-b border-gray-200">
            <button
              onClick={() => setViewMode('login')}
              className={`py-2 px-4 rounded-tl-lg font-medium transition-colors duration-300
                ${viewMode === 'login' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
              `}
            >
              Login
            </button>
            <button
              onClick={() => setViewMode('register-candidate')}
              className={`py-2 px-4 font-medium transition-colors duration-300
                ${viewMode === 'register-candidate' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
              `}
            >
              Candidate
            </button>
             <button
              onClick={() => setViewMode('register-employer')}
              className={`py-2 px-4 rounded-tr-lg font-medium transition-colors duration-300
                ${viewMode === 'register-employer' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
              `}
            >
              Employer
            </button>
          </div>

          {/* Conditional Rendering based on viewMode state */}

          {/* Login Form */}
          {viewMode === 'login' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="candidate">Candidate</option>
                <option value="employer">Employer</option>
              </select>

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Login
              </button>
            </form>
          )}

          {/* Candidate Registration Form */}
          {viewMode === 'register-candidate' && (
            <form onSubmit={handleCandidateRegister} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                value={candidateRegForm.fullName}
                onChange={handleCandidateRegChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={candidateRegForm.email}
                onChange={handleCandidateRegChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={candidateRegForm.password}
                onChange={handleCandidateRegChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                value={candidateRegForm.confirmPassword}
                onChange={handleCandidateRegChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Register as Candidate
              </button>
            </form>
          )}

          {/* Employer Registration Form */}
          {viewMode === 'register-employer' && (
            <form onSubmit={handleEmployerRegister} className="space-y-4">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                required
                value={employerRegForm.companyName}
                onChange={handleEmployerRegChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                name="contactPerson"
                placeholder="Contact Person Name"
                required
                value={employerRegForm.contactPerson}
                onChange={handleEmployerRegChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Company Email"
                required
                value={employerRegForm.email}
                onChange={handleEmployerRegChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={employerRegForm.password}
                onChange={handleEmployerRegChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                value={employerRegForm.confirmPassword}
                onChange={handleEmployerRegChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Register as Employer
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default JobPortalLogin;
