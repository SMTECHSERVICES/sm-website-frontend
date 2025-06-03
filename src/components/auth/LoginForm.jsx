// // src/components/Auth/LoginForm.jsx
// import { useState } from "react";

// const LoginForm = () => {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//     role: "candidate",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Login Data:", form); // Hook to backend later
//     alert("Login submitted!");
//   };

//   return (
//     <form onSubmit={handleLogin} className="space-y-4">
//       <div>
//         <label>Email</label>
//         <input type="email" name="email" onChange={handleChange} value={form.email}
//           className="w-full border px-3 py-2 rounded" required />
//       </div>
//       <div>
//         <label>Password</label>
//         <input type="password" name="password" onChange={handleChange} value={form.password}
//           className="w-full border px-3 py-2 rounded" required />
//       </div>
//       <div>
//         <label>Role</label>
//         <select name="role" value={form.role} onChange={handleChange}
//           className="w-full border px-3 py-2 rounded">
//           <option value="admin">Admin</option>
//           <option value="employer">Employer</option>
//           <option value="candidate">Candidate</option>
//           <option value="mentor">Mentor</option>
//           <option value="student">Student</option>
//         </select>
//       </div>
//       <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
//     </form>
//   );
// };

// export default LoginForm;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("admin"); // Simplified role selection
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    const fakeUser = {
      isAuthenticated: true,
      user: { name: "Admin User", email, role },
      token: "dummy-jwt-token",
    };
    login(fakeUser);
    navigate(`/${role}/dashboard`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="border rounded p-2 mb-3 w-64"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select
        className="border rounded p-2 mb-4 w-64"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="admin">Admin</option>
        <option value="mentor">Mentor</option>
        <option value="student">Student</option>
        <option value="candidate">Candidate</option>
        <option value="employer">Employer</option>
      </select>
      <button
        onClick={handleLogin}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
