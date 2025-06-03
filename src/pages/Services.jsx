// src/pages/Services.jsx
import Navbar from "../components/layout/Navbar";
import ServicesIntro from "../components/layout/ServicesIntro";
import ServicesList from "../components/layout/ServicesList";
import Footer from "../components/layout/Footer";

const Services = () => {
  return (
    <div>
      <Navbar />
      <ServicesIntro />
      <ServicesList />
      <Footer />
    </div>
  );
};

export default Services;
