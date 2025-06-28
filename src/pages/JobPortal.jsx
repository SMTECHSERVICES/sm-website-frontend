// // src/pages/JobPortalLogin.jsx
 import { useState } from "react";
 import { useNavigate } from "react-router-dom";
 import { useAuth } from "../context/AuthContext"; // adjust path as per your folder
 import Navbar from "../components/layout/Navbar";
 //import JobsCardComponent from "../components/layout/JobsCardComponent";



import React from 'react';
import Footer from "../components/layout/Footer";
import LoginCommonLayout from "../components/layout/LoginCommonLayout";
import hero1 from '/hero1.jpg'
import JobsComponent from "../components/layout/JobsComponent";
//import JobsCardComponent from "../components/layout/JobsCardComponent";


const JobPortal = () => {
  // Sample job data
  const navigate = useNavigate();
  const jobOpenings = [
    {
      id: 1,
      company: 'TechCorp',
      logo: 'https://via.placeholder.com/50',
      position: 'Senior Frontend Developer',
      type: 'Full-time',
      location: 'San Francisco, CA',
      salary: '$120,000 - $150,000',
      posted: '2 days ago',
      skills: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 2,
      company: 'DesignHub',
      logo: 'https://via.placeholder.com/50/ff9900',
      position: 'UI/UX Designer',
      type: 'Remote',
      location: 'Anywhere',
      salary: '$90,000 - $110,000',
      posted: '1 week ago',
      skills: ['Figma', 'Adobe XD', 'User Research']
    },
    {
      id: 3,
      company: 'DataSystems',
      logo: 'https://via.placeholder.com/50/0099ff',
      position: 'Data Scientist',
      type: 'Full-time',
      location: 'New York, NY',
      salary: '$130,000 - $160,000',
      posted: '3 days ago',
      skills: ['Python', 'Machine Learning', 'SQL']
    },
    {
      id: 4,
      company: 'CloudNine',
      logo: 'https://via.placeholder.com/50/00cc99',
      position: 'DevOps Engineer',
      type: 'Contract',
      location: 'Austin, TX',
      salary: '$70 - $90 per hour',
      posted: 'Just now',
      skills: ['AWS', 'Docker', 'Kubernetes']
    },
  ];

  const handleClick = ()=>{
    navigate('/job-portal-Login')
  }

  const heading = ' Connecting Talent with Opportunity';

  const paragraph = 'For Employers and Job Seekers | One Platform. Limitless Careers.'
  return (
    <>
    <Navbar/>
     <LoginCommonLayout login1={'Job-Seeker'} login2={'Employer'} heading={heading} paragraph={paragraph} to1={'/candidate/auth'} to2={'/employer/auth'} hero={hero1} />

   
   <JobsComponent jobOpenings={jobOpenings} />
 
   


      
      
    
    <Footer/>
    </>
  );
};

export default JobPortal;