// src/pages/Contact.jsx
import Navbar from "../components/layout/Navbar";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/layout/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
