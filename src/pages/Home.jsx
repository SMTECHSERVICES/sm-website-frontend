// src/pages/Home.jsx
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/layout/HeroSection';
import ServicesOverview from '../components/layout/ServicesOverview';
import CallToAction from '../components/layout/CallToAction';
import Testimonials from '../components/layout/Testimonials';
import PartnerLogos from '../components/layout/PartnerLogos';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesOverview />
      <CallToAction />
      <Testimonials />
      <PartnerLogos />
      <Footer />
    </div>
  );
};

export default Home;
