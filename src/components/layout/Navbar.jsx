


// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import menuByRole from "../../constants/menuConfig";

// const Navbar = () => {
//   const { auth, logout } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const isHomeRoute = location.pathname === "/";
//   const userRole = auth.user?.role;

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   // Show this only if authenticated and not at homepage
//   const roleBasedMenu = auth.isAuthenticated ? menuByRole[userRole] || [] : [];

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <Link to="/" className="text-xl font-bold text-blue-600">SM Services</Link>

//         {/* Public Navbar (only for homepage or unauthenticated users) */}
//         {(isHomeRoute || !auth.isAuthenticated) ? (
//           <div className="space-x-4">
//             <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
//             <Link to="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
//             <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
//             <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
//             {auth.isAuthenticated ? (
//               <button
//                 onClick={handleLogout}
//                 className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link to="/login" className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
//                 Login
//               </Link>
//             )}
//           </div>
//         ) : (
//           // Role-based navbar
//           <div className="flex items-center gap-4">
//             {roleBasedMenu.map((item, i) => (
//               <Link
//                 key={i}
//                 to={item.path}
//                 className="text-gray-700 hover:text-indigo-600 font-medium"
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <button
//               onClick={handleLogout}
//               className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//             >
//               Logout
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import menuByRole from "../../constants/menuConfig";

const Navbar = () => {
  const { auth, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomeRoute = location.pathname === "/";
  const userRole = auth.user?.role;
  const isAuthenticated = auth.isAuthenticated;

  const roleBasedMenu = isAuthenticated ? menuByRole[userRole] || [] : [];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
       <Link
  to={
    isAuthenticated
      ? userRole === "admin"
        ? "/admin/dashboard"
        : userRole === "employer"
        ? "/employer/dashboard"
        : userRole === "student"
        ? "/student/dashboard"
          : userRole === "mentor"
        ? "/mentor/dashboard"
        : userRole === "candidate"
        ? "/candidate/dashboard"
        : "/"
      : "/"
  }
  className="text-xl font-bold text-blue-600"
>
  <img className="h-10 w-auto object-contain" src="/logo.png" alt="sm-service" />
</Link>


        {/* Home or unauthenticated view */}
        {isHomeRoute || !isAuthenticated ? (
          <div className="space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
            {isAuthenticated ? (
              <button onClick={handleLogout} className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600">Logout</button>
            ) : (
              null
            )}
          </div>
        ) : (
          // Role-Based Navbar
          <div className="flex items-center gap-4">
            {roleBasedMenu.map((item, i) => (
              <Link key={i} to={item.path} className="text-gray-700 hover:text-indigo-600 font-medium">
                {item.label}
              </Link>
            ))}
            <button onClick={handleLogout} className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



