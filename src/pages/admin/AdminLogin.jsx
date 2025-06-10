import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

const AdminLogin = () => {
    const [adminKey, setAdminKey] = useState(''); // State to store the admin key input
  const { login } = useAuth();
  const navigate = useNavigate();

   const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Define a simple hardcoded admin key for demonstration.
    // In a real application, this would involve a secure backend API call
    // to validate the key and authenticate the user.
    const secretAdminKey = 'superadmin123'; 

    if (adminKey === secretAdminKey) {
      // If the key matches, log in the user with 'admin' role
      const userData = {
        isAuthenticated: true,
        user: { name: 'Administrator', email: 'admin@yourcompany.com', role: 'admin' },
        token: 'fake-admin-token-12345', // A dummy token for demonstration
      };
      login(userData); // Call the login function from AuthContext
      // Using a custom message box instead of alert() for better UX
      // In a real app, you would likely use a state variable to show a message or redirect
      
      console.log('Admin Login Successful! Role: Admin');
      navigate(`/admin/dashboard`)
      // In a real application, you would typically redirect the user
      // to the admin dashboard here, e.g., using react-router-dom's navigate
    } else {
      // Using a custom message box instead of alert() for better UX
      console.log('Invalid Admin Key. Please try again.');
      setAdminKey(''); // Clear the input field on failure
    }
  };
  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 font-inter">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="adminKey" className="block text-gray-700 text-sm font-medium mb-2">
                Admin Key
              </label>
              <input
                type="password" // Use type="password" for sensitive keys
                id="adminKey"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your admin key"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md"
            >
              Login as Admin
            </button>
          </form>
        </div>
      </div>
  )
}

export default AdminLogin
