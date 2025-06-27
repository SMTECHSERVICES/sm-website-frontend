// src/pages/Home.jsx
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/layout/HeroSection';
import ServicesOverview from '../components/layout/ServicesOverview';
import CallToAction from '../components/layout/CallToAction';
import Testimonials from '../components/layout/Testimonials';
import PartnerLogos from '../components/layout/PartnerLogos';
import Footer from '../components/layout/Footer';
import LoginCommonLayout from '../components/layout/LoginCommonLayout';
import home from '/HOME.jpg'

const heading = ' One Platform. Endless Opportunities – From Skill to Success'
const paragraph = 'Empowering You with Training, Jobs, Payroll & Smart Software Solutions'

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <HeroSection /> */}
      <LoginCommonLayout login1={'Career Launchpad'} login2={'Professional Training Zone'} heading={heading} paragraph={paragraph} to1={'/job-placement'} to2={'/training'} hero={home} />
      <ServicesOverview />
      {/* <CallToAction /> */}
      <Testimonials />
      <PartnerLogos />
      <Footer />
    </div>
  );
};

export default Home;
