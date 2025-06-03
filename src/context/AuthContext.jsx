import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null, // { name, email, role }
    token: null,
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("auth");
    if (savedUser) setAuth(JSON.parse(savedUser));
  }, []);

  const login = (userData) => {
    localStorage.setItem("auth", JSON.stringify(userData));
    setAuth(userData);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setAuth({ isAuthenticated: false, user: null, token: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
