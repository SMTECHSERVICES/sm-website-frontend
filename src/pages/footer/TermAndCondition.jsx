import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

const TermAndCondition = () => {
  return (
   <>
   <Navbar />

   <div className="max-w-4xl mx-auto p-6 bg-white shadow-md my-10 rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Terms and Conditions
      </h1>
     

      <p className="mb-6">
        Welcome to SM Services (“we,” “our,” or “us”). By accessing or using our
        website{" "}
        <a
          href="https://www.smservice.co.in"
          className="text-blue-600 underline"
          target="_blank"
          rel="noreferrer"
        >
          www.smservice.co.in
        </a>{" "}
        and related services (including job placement, training, payroll,
        background verification, and consulting), you agree to comply with and
        be bound by the following terms and conditions (“Terms”). Please read
        them carefully.
      </p>

      <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
      <p className="mb-6">
        By using our website and services, you acknowledge that you have read,
        understood, and agree to be legally bound by these Terms and all
        applicable laws and regulations. If you do not agree with any part of
        these Terms, please do not use our services.
      </p>

      <h2 className="text-xl font-semibold mb-3">2. Use of Services</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>
          You agree to use SM Services only for lawful purposes and in a way
          that does not infringe the rights of others or restrict their use of
          the website.
        </li>
        <li>
          You must provide accurate, current, and complete information when
          registering or using any of our services.
        </li>
        <li>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your
          account.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">3. Service Description</h2>
      <p className="mb-6">
        SM Services provides job placement, training, payroll, background
        verification, and consulting services. While we strive to offer
        high-quality services, we do not guarantee specific results such as
        employment or placement.
      </p>

      <h2 className="text-xl font-semibold mb-3">4. Intellectual Property Rights</h2>
      <p className="mb-6">
        All content, features, and functionality on the website, including but
        not limited to text, graphics, logos, images, and software, are the
        property of SM Services or its licensors and are protected by
        applicable intellectual property laws. You may not reproduce,
        distribute, modify, or create derivative works without our express
        written permission.
      </p>

      <h2 className="text-xl font-semibold mb-3">5. User-Generated Content</h2>
      <p className="mb-6">
        You may submit content such as resumes, profiles, or job postings
        through our platform. By submitting content, you grant SM Services a
        non-exclusive, worldwide, royalty-free license to use, modify, and
        display the content solely for the purpose of providing our services.
      </p>
      <p className="mb-6">
        You agree not to upload any content that is unlawful, harmful,
        defamatory, or infringes third-party rights.
      </p>

      <h2 className="text-xl font-semibold mb-3">6. Privacy</h2>
      <p className="mb-6">
        Your use of the website and services is also governed by our Privacy
        Policy, which explains how we collect, use, and protect your personal
        data. Please review our Privacy Policy carefully.
      </p>

      <h2 className="text-xl font-semibold mb-3">7. Payment Terms</h2>
      <p className="mb-6">
        If you purchase any paid services, you agree to provide accurate
        payment information and authorize us to charge the agreed fees.
        Refunds and cancellations are subject to our refund policy as stated
        separately or as communicated at the time of purchase.
      </p>

      <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
      <p className="mb-6">
        To the fullest extent permitted by law, SM Services shall not be liable
        for any direct, indirect, incidental, special, or consequential damages
        arising from your use of the website or services.
      </p>

      <h2 className="text-xl font-semibold mb-3">9. Indemnification</h2>
      <p className="mb-6">
        You agree to indemnify and hold harmless SM Services and its affiliates,
        employees, and agents from any claims, damages, liabilities, or expenses
        arising from your breach of these Terms or your use of the services.
      </p>

      <h2 className="text-xl font-semibold mb-3">10. Termination</h2>
      <p className="mb-6">
        We reserve the right to suspend or terminate your access to our services
        at any time without prior notice if you violate these Terms or for any
        other reason deemed necessary.
      </p>

      <h2 className="text-xl font-semibold mb-3">11. Changes to Terms</h2>
      <p className="mb-6">
        SM Services may update these Terms from time to time. We will notify you
        of significant changes by posting a notice on our website or sending an
        email. Your continued use of the website after changes means you accept
        the new Terms.
      </p>

      <h2 className="text-xl font-semibold mb-3">12. Governing Law</h2>
      <p className="mb-6">
        These Terms shall be governed by and construed in accordance with the
        laws of India, without regard to its conflict of law principles. Any
        disputes arising out of or related to these Terms shall be subject to
        the exclusive jurisdiction of the courts located in Indore, Madhya
        Pradesh, India.
      </p>

      <h2 className="text-xl font-semibold mb-3">13. Contact Us</h2>
      <p>
        If you have any questions or concerns about these Terms, please contact
        us at:
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@smservice.co.in" className="text-blue-600 underline">
            info@smservice.co.in
          </a>
        </li>
        <li>
          <strong>Phone:</strong> +91-9098273259
        </li>
        <li>
          <strong>Address:</strong> Indore City, Madhya Pradesh, India
        </li>
      </ul>
    </div>

   <Footer />
   </>
  )
}

export default TermAndCondition
