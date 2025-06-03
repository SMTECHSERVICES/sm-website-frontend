// src/pages/AuthPage.jsx
import { useState } from "react";

import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
          <div className="flex justify-around mb-4">
            <button
              className={`px-4 py-2 rounded ${isLogin ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`px-4 py-2 rounded ${!isLogin ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthPage;
