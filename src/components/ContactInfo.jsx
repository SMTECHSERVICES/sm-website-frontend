// src/components/ContactInfo.jsx
const ContactInfo = () => {
  return (
    <section className="bg-blue-700 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6">We’re here to help you with training, placements, job fairs, or payroll solutions.</p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div>
            <h4 className="font-bold text-lg">📍 Address</h4>
            <p>Mishra Global Solutions, Nagod, Madhya Pradesh, India</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">📞 Phone</h4>
            <p>+91 9098273259</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">✉️ Email</h4>
            <p>info@smservicess.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
