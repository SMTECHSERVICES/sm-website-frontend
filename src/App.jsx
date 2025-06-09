import { lazy, useState } from 'react'
import {  Routes,Route } from 'react-router-dom'
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from './routes/PrivateRoute';
import './App.css'
import Unauthorized from './pages/auth/Unauthorized';
const HomePage = lazy(()=>import('./pages/Home'));
const AboutPage = lazy(()=>import('./pages/About'));
const ContactPage = lazy(()=>import('./pages/Contact'));
const ServicesPage = lazy(()=>import('./pages/Services'));
const LoginPage = lazy(()=>import('./pages/AuthPage'));
const EmployerDashboardPage = lazy(()=>import('./pages/dashboard/EmployerDashboard'));
const CandidateDashboardPage = lazy(()=>import('./pages/dashboard/CandidateDashboard'));
const MentorDashboardPage = lazy(()=>import('./pages/dashboard/MentorDashboard'));
const StudentDashboardPage = lazy(()=>import('./pages/dashboard/StudentDashboard'));
const AdminDashboardPage = lazy(()=>import('./pages/dashboard/AdminDashboard'));
const SessionBookingPage = lazy(()=>import('./pages/training/SessionBooking'));
const PostJobPage = lazy(()=>import('./pages/employer/PostJob'));
const ManageJobsPage = lazy(()=>import('./pages/employer/ManageJobs'));
const EditJobPage = lazy(()=>import('./pages/employer/EditJob'));
const ApplicationPage = lazy(()=>import('./pages/employer/Applications.jsx'));
const ApplicationDetailPage = lazy(()=>import('./pages/employer/ApplicationDetail.jsx'))
const CandidateJobsPage = lazy(()=>import('./pages/candidate/Jobs.jsx'));
const CandidateJobDetailPage = lazy(()=>import('./pages/candidate/JobDetails.jsx'));
const ApplyJobPage = lazy(()=>import('./pages/candidate/ApplyJob.jsx'));
const CandidateApplicationDetailPage = lazy(()=>import('./pages/candidate/ApplicationDetails.jsx'));
const CandidateAppicationsPage = lazy(()=>import('./pages/candidate/CandidateApplications.jsx'));
const NotificationPage = lazy(()=>import('./pages/candidate/Notification.jsx'));
const CandidateProfilePage = lazy(()=>import('./pages/candidate/CandidateProfile.jsx'));
const CreateCoursePage = lazy(()=>import('./pages/mentor/CreateCourse.jsx'));
const MentorCoursesPage = lazy(()=>import('./pages/mentor/MentorCourses.jsx'))
const MentorCourseDetailsPage = lazy(()=>import('./pages/mentor/CourseDetails.jsx'));

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
 
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/unauthorized' element={<Unauthorized />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/services' element={<ServicesPage />} />
    <Route path='/contact' element={<ContactPage />} />
     <Route path='/login' element={<LoginPage />} />
     
     {/* EMPLOYER PATHS */}

     <Route path='/employer/Dashboard' element={<EmployerDashboardPage />} />
     <Route path='/employer/post-job' element={<PostJobPage />} />
     <Route path='/employer/manage-jobs' element={<ManageJobsPage />} />
       <Route path='/employer/applications' element={<ApplicationPage />} />
        <Route path="/employer/applications/:id" element={<ApplicationDetailPage />} />
     <Route path='/employer/manage-jobs/:id' element={<EditJobPage />} />

     {/* MENTOR PATHS */}
     <Route path='/mentor/dashboard' element={<MentorDashboardPage />} />
     <Route path='/mentor/create-course' element={<CreateCoursePage />}  />
     <Route path='/mentor/courses' element={<MentorCoursesPage />}  />
     

      <Route path='/mentor/courses/:id' element={<MentorCourseDetailsPage />}  />
    

     {/* CANDIDATE PATHS */}
     <Route path='/candidate/dashboard' element={<CandidateDashboardPage />} />
     <Route path='/candidate/profile' element={<CandidateProfilePage />} />
     <Route path='/candidate/jobs' element={<CandidateJobsPage />} />
     <Route path='/candidate/applications' element={<CandidateAppicationsPage />} />
      <Route path='/candidate/notifications' element={<NotificationPage />} />
      <Route path='/candidate/applications/:id' element={<CandidateApplicationDetailPage />} />
     <Route path='/candidate/jobs/:id' element={<CandidateJobDetailPage />} />
     <Route path='/candidate/apply/:id' element={<ApplyJobPage />} />

     {/* STUDENT PATHS */}
      
       <Route path='/student/dashboard' element={<StudentDashboardPage />} />

        {/* <Route path='/admin-dashboard' element={<AdminDashboardPage />} /> */}
            <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <AdminDashboardPage />
              </PrivateRoute>
            }
          />

         <Route path='/session-booking' element={<SessionBookingPage />} />

   </Routes>
  
 
  
    </>
  )
}

export default App
