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
const TrainingPage = lazy(()=>import('./pages/Training.jsx'));
const JobPortalPage = lazy(()=>import('./pages/JobPortal.jsx'));
const JobPortalLogin = lazy(()=>import('./components/layout/JobPortalLogin.jsx'))
const JobFairPage = lazy(()=>import('./pages/JobFair.jsx'));
const PayrollPage = lazy(()=>import('./pages/Payroll.jsx'));
const SoftwareDevPage = lazy(()=>import('./pages/SoftwareDev.jsx'));
//const LoginPage = lazy(()=>import('./pages/AuthPage'));
const EmployerDashboardPage = lazy(()=>import('./pages/dashboard/EmployerDashboard'));
const CandidateDashboardPage = lazy(()=>import('./pages/dashboard/CandidateDashboard'));
const MentorDashboardPage = lazy(()=>import('./pages/dashboard/MentorDashboard'));
const StudentDashboardPage = lazy(()=>import('./pages/dashboard/StudentDashboard'));
const AdminDashboardPage = lazy(()=>import('./pages/dashboard/AdminDashboard'));

const PostJobPage = lazy(()=>import('./pages/employer/PostJob'));
const ManageJobsPage = lazy(()=>import('./pages/employer/ManageJobs'));
const EditJobPage = lazy(()=>import('./pages/employer/EditJob'));
const ApplicationPage = lazy(()=>import('./pages/employer/Applications.jsx'));
const EmployerAuthPage = lazy(()=>import('./pages/employer/EmployerAuthPage.jsx'));
const ApplicationDetailPage = lazy(()=>import('./pages/employer/ApplicationDetail.jsx'));
const CandidateAuthPage = lazy(()=>import('./pages/candidate/JobSeekerAuthPage.jsx'))
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
const MentorAuthPage = lazy(()=>import('./pages/mentor/MentorAuthPage.jsx'));


const ShowAllCoursesPage = lazy(()=>import('./pages/student/ShowAllCourses.jsx'));
const ShowCourseDetails = lazy(()=>import('./pages/student/CourseDetails.jsx'));
const EnrolledCourses = lazy(()=>import('./pages/student/EnrolledCourses'));
const EnrolledCourseDetailPage = lazy(()=>import('./pages/student/EnrolledCourseDetail.jsx'));
const StudentAuthPage = lazy(()=>import('./pages/student/StudentAuthPage.jsx'))

const AdminLoginPage = lazy(()=>import('./pages/admin/AdminLogin.jsx'))

function App() {
 

  return (
    <>
 
 
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/unauthorized' element={<Unauthorized />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/services' element={<ServicesPage />} />
    <Route path='/contact' element={<ContactPage />} />
    <Route path='/training' element={<TrainingPage />}/>
    <Route path='/job-placement' element={<JobPortalPage />}/>
    <Route path='/job-fair' element={<JobFairPage />}/>
     <Route path='/payroll' element={<PayrollPage />}/>
      <Route path='/software' element={<SoftwareDevPage />}/>
      <Route path='/job-portal-Login' element={<JobPortalLogin />} />
     
     {/* <Route path='/login' element={<LoginPage />} /> */}
     
     {/* EMPLOYER PATHS */}

      <Route path='/employer/auth' element={<EmployerAuthPage />} />
     <Route path='/employer/Dashboard' element={<EmployerDashboardPage />} />
     <Route path='/employer/post-job' element={<PostJobPage />} />
     <Route path='/employer/manage-jobs' element={<ManageJobsPage />} />
       <Route path='/employer/applications' element={<ApplicationPage />} />
        <Route path="/employer/applications/:id" element={<ApplicationDetailPage />} />
     <Route path='/employer/manage-jobs/:id' element={<EditJobPage />} />

     {/* MENTOR PATHS */}
     <Route path='/mentor/auth' element={<MentorAuthPage />} />
     <Route path='/mentor/dashboard' element={<MentorDashboardPage />} />
     <Route path='/mentor/create-course' element={<CreateCoursePage />}  />
     <Route path='/mentor/courses' element={<MentorCoursesPage />}  />
     

      <Route path='/mentor/courses/:id' element={<MentorCourseDetailsPage />}  />
    

     {/* CANDIDATE PATHS */}
      <Route path='/candidate/auth' element={<CandidateAuthPage />} />
     <Route path='/candidate/dashboard' element={<CandidateDashboardPage />} />
     <Route path='/candidate/profile' element={<CandidateProfilePage />} />
     <Route path='/candidate/jobs' element={<CandidateJobsPage />} />
     <Route path='/candidate/applications' element={<CandidateAppicationsPage />} />
      <Route path='/candidate/notifications' element={<NotificationPage />} />
      <Route path='/candidate/applications/:id' element={<CandidateApplicationDetailPage />} />
     <Route path='/candidate/jobs/:id' element={<CandidateJobDetailPage />} />
     <Route path='/candidate/apply/:id' element={<ApplyJobPage />} />

     {/* STUDENT PATHS */}
      <Route path='/student/auth' element={<StudentAuthPage />} />
       <Route path='/student/dashboard' element={<StudentDashboardPage />} />
       <Route path='/student/mycourses' element={<EnrolledCourses />} />
        <Route path='/student/allcourse' element={<ShowAllCoursesPage />} />
        <Route path='/student/mycourses/:id' element={<EnrolledCourseDetailPage />} />
        <Route path="student/allcourse/:courseId" element={<ShowCourseDetails />} />


        {/* <Route path='/admin-dashboard' element={<AdminDashboardPage />} /> */}
        <Route path='/admin' element={<AdminLoginPage />} />
            <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <AdminDashboardPage />
              </PrivateRoute>
            }
          />


   </Routes>
  
 
  
    </>
  )
}

export default App
