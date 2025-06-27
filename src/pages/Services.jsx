// src/pages/Services.jsx
import Navbar from "../components/layout/Navbar";
import ServicesIntro from "../components/layout/ServicesIntro";
import ServicesList from "../components/layout/ServicesList";
import Footer from "../components/layout/Footer";
import LoginCommonLayout from "../components/layout/LoginCommonLayout";
import services from '/services.jpg'

const heading = 'Empowering People. Enabling Growth. Delivering Digital Excellence.';
const paragraph = 'Learn the skills, get placed, and build digital solutions — all with SM Services.We are here to shape your career and support your business.'

const Services = () => {
  return (
    <div>
      <Navbar />
      {/* <ServicesIntro /> */}
      <LoginCommonLayout login1={'Hiring Festival'} login2={'Digital Solutions'} heading={heading} paragraph={paragraph} hero={services} to1={'/job-fair'}  to2={'/software'}/>
      <ServicesList />
      <Footer />
    </div>
  );
};

export default Services;
