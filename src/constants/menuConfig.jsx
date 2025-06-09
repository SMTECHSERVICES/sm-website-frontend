import { FiBell } from "react-icons/fi";


const menuByRole = {
  admin: [
    { label: "Dashboard", path: "/admin/dashboard" },
    { label: "Manage Users", path: "/admin/users" },
    { label: "Manage Jobs", path: "/admin/jobs" },
    { label: "Settings", path: "/admin/settings" },
  ],
  mentor: [
    { label: "Mentor Dashboard", path: "/mentor/dashboard" },
    { label: "Create Course", path: "/mentor/create-course" },
    { label: "My courses", path: "/mentor/courses" },
  ],
  student: [
    { label: "Student Dashboard", path: "/student/dashboard" },
    { label: "Join Training", path: "/training/join" },
    { label: "Certificates", path: "/student/certificates" },
  ],
  candidate: [
      { label: "Dashboard", path: "/candidate/dashboard" },
    { label: "Jobs", path: "/candidate/jobs" },
    { label: "My Applications", path: "/candidate/applications" },
    { label: "Profile", path: "/candidate/profile" },
    {
  label: (
    <div className="relative">
      <FiBell className="text-xl" />
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
        3
      </span>
    </div>
  ),
  path: "/candidate/notifications",
},
  ],
  employer: [
     { label: "Dashboard", path: "/employer/dashboard" },
    { label: "Post Job", path: "/employer/post-job" },
    { label: "Manage Jobs", path: "/employer/manage-jobs" },
    { label: "Applications", path: "/employer/applications" },
  ],
};

export default menuByRole;
