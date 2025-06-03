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
const SessionBookingPage = lazy(()=>import('./pages/training/SessionBooking'))
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

     <Route path='/employer/Dashboard' element={<EmployerDashboardPage />} />
     <Route path='/candidate/dashboard' element={<CandidateDashboardPage />} />
      <Route path='/mentor/dashboard' element={<MentorDashboardPage />} />
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
