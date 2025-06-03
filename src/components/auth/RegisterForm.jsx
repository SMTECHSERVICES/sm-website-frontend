// src/components/Auth/RegisterForm.jsx
import { useState } from "react";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register Data:", form); // Hook to backend later
    alert("Registration submitted!");
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <div>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} value={form.name}
          className="w-full border px-3 py-2 rounded" required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} value={form.email}
          className="w-full border px-3 py-2 rounded" required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} value={form.password}
          className="w-full border px-3 py-2 rounded" required />
      </div>
      <div>
        <label>Role</label>
        <select name="role" value={form.role} onChange={handleChange}
          className="w-full border px-3 py-2 rounded">
          <option value="admin">Admin</option>
          <option value="employer">Employer</option>
          <option value="candidate">Candidate</option>
          <option value="mentor">Mentor</option>
          <option value="student">Student</option>
        </select>
      </div>
      <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
    </form>
  );
};

export default RegisterForm;
