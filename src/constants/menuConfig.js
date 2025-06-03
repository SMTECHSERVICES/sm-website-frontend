const menuByRole = {
  admin: [
    { label: "Dashboard", path: "/admin/dashboard" },
    { label: "Manage Users", path: "/admin/users" },
    { label: "Manage Jobs", path: "/admin/jobs" },
    { label: "Settings", path: "/admin/settings" },
  ],
  mentor: [
    { label: "Mentor Dashboard", path: "/mentor/dashboard" },
    { label: "Book Sessions", path: "/training/book-session" },
    { label: "My Sessions", path: "/mentor/sessions" },
  ],
  student: [
    { label: "Student Dashboard", path: "/student/dashboard" },
    { label: "Join Training", path: "/training/join" },
    { label: "Certificates", path: "/student/certificates" },
  ],
  candidate: [
    { label: "Jobs", path: "/jobs" },
    { label: "My Applications", path: "/candidate/applications" },
    { label: "Profile", path: "/candidate/profile" },
  ],
  employer: [
    { label: "Post Job", path: "/employer/post-job" },
    { label: "Manage Jobs", path: "/employer/jobs" },
    { label: "Applications", path: "/employer/applications" },
  ],
};

export default menuByRole;
