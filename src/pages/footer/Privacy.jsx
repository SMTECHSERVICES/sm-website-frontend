import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const Privacy = () => {
  return (
    <>
    <Navbar />

    <div className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
          Privacy Policy
        </h1>

        <section className="space-y-6 text-justify text-sm md:text-base">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              SM Services (“we,” “our,” or “us”) is committed to safeguarding your personal data. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services related to job placement, training, payroll, background verification, and consulting.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. What We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
              <li><strong>Contact Details:</strong> Name, email, phone number, address.</li>
              <li><strong>Professional Info:</strong> Resume, qualifications, job experience, job preferences.</li>
              <li><strong>Payment Details:</strong> Razorpay payment ID, payment status, billing info (if applicable).</li>
              <li><strong>Technical Info:</strong> IP address, browser type, device data, pages visited.</li>
              <li><strong>Uploaded Documents:</strong> Resume, certificates, profile photos (used for hiring or training).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Why We Collect It</h2>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>To process registrations for job seekers, employers, clients, or trainees.</li>
              <li>To provide services like job placement, training, payroll, or software development.</li>
              <li>To personalize user experience and improve our platform.</li>
              <li>To comply with legal obligations.</li>
              <li>To send important notifications, receipts, or support messages.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Who We Share It With</h2>
            <p>We do not sell your data. We may share limited information with:</p>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
              <li>Employers or recruiters (if you apply for a job).</li>
              <li>Razorpay or other payment gateways (for secure payment processing).</li>
              <li>Internal trainers, mentors, or consultants (only when relevant).</li>
              <li>Legal authorities (when legally required).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
            <p>We use encryption, authentication, and secure storage practices to protect your data. Uploaded documents and payment info are stored securely.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Cookies & Analytics</h2>
            <p>Our website may use cookies and tools like Google Analytics to understand usage patterns. These are used only for improving your experience.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
            <p>You can:</p>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
              <li>Access, update, or delete your personal data.</li>
              <li>Request a copy of the data we have about you.</li>
              <li>Withdraw consent or request correction.</li>
            </ul>
            <p className="mt-2">To request any of the above, email us at <a href="mailto:info@smservice.co.in" className="text-blue-700 font-medium">info@smservice.co.in</a>.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. For Children</h2>
            <p>Our services are not intended for individuals under the age of 16. We do not knowingly collect information from children without verified parental consent.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy occasionally. When we do, we will revise the “Effective Date” above. Check this page regularly to stay informed.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
            <p>If you have any questions or feedback about this Privacy Policy:</p>
            <div className="mt-2 space-y-1 text-sm">
              <p><strong>SM Services</strong></p>
              <p>📍 PAN India Presence</p>
              <p>📞 +91 9098273259</p>
              <p>✉️ <a href="mailto:info@smservice.co.in" className="text-blue-700">info@smservice.co.in</a></p>
              <p>🌐 <a href="https://www.smservice.co.in" className="text-blue-700" target="_blank" rel="noreferrer">www.smservice.co.in</a></p>
            </div>
          </div>
        </section>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default Privacy;

