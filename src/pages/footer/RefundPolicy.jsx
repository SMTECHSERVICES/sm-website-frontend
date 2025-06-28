import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

const RefundPolicy = () => {
  return (
  <>
  <Navbar />

   <div className="max-w-4xl mx-auto p-6 bg-white shadow-md my-10 rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Refund Policy
      </h1>


      <p className="mb-6">
        Thank you for choosing SM Services (“we,” “our,” or “us”). We strive to
        provide high-quality services including job placement, training,
        payroll management, background verification, and consulting. Please read
        our Refund Policy carefully to understand the terms under which refunds
        may be issued.
      </p>

      <h2 className="text-xl font-semibold mb-3">1. General Policy</h2>
      <p className="mb-6">
        All sales and service fees are final unless otherwise stated in this
        Refund Policy or explicitly agreed upon in writing. By purchasing our
        services, you agree to the terms outlined below.
      </p>

      <h2 className="text-xl font-semibold mb-3">2. Training Services</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>
          If you have registered for a training program and need to cancel,
          please notify us at least <strong>7 days prior</strong> to the training
          start date to be eligible for a full refund.
        </li>
        <li>
          Cancellations made less than 7 days before the training will incur a{" "}
          <strong>50% cancellation fee</strong>, and the remaining amount may be
          refunded.
        </li>
        <li>
          No refunds will be issued once the training has started or if you miss
          sessions without prior notice.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">3. Job Placement Services</h2>
      <p className="mb-6">
        SM Services does not guarantee employment or placement. Therefore, fees
        paid for job placement services are <strong>non-refundable</strong>.
        In rare cases where services were not rendered as agreed, please contact
        us immediately so we can review your situation.
      </p>

      <h2 className="text-xl font-semibold mb-3">4. Payroll and Background Verification Services</h2>
      <p className="mb-6">
        Fees for payroll processing or background verification are{" "}
        <strong>non-refundable</strong> once the service has been initiated. If
        you believe there has been an error or omission in our service delivery,
        please contact us within <strong>3 business days</strong> of receipt of
        service to discuss possible resolutions.
      </p>

      <h2 className="text-xl font-semibold mb-3">5. Consulting Services</h2>
      <p className="mb-6">
        Refunds for consulting services will depend on the nature and scope of
        the engagement. If you are unsatisfied with the consulting services,
        please contact us within <strong>5 business days</strong> to discuss
        your concerns. Refunds, if any, will be considered on a case-by-case
        basis.
      </p>

      <h2 className="text-xl font-semibold mb-3">6. How to Request a Refund</h2>
      <p className="mb-6">
        To request a refund, please contact us at:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>
          Email:{" "}
          <a href="mailto:info@smservice.co.in" className="text-blue-600 underline">
            info@smservice.co.in
          </a>
        </li>
        <li>Phone: +91-9098273259</li>
      </ul>
      <p className="mb-6">
        Please include your full name, contact details, service purchased, date
        of purchase, and reason for the refund request. We will review your
        request and respond within <strong>7 business days</strong>.
      </p>

      <h2 className="text-xl font-semibold mb-3">7. Exceptions</h2>
      <p className="mb-6">
        Any refund exceptions or special terms will be documented explicitly in
        your service agreement or invoice. SM Services reserves the right to
        deny refund requests that do not comply with this policy or appear
        fraudulent.
      </p>

      <h2 className="text-xl font-semibold mb-3">8. Changes to Refund Policy</h2>
      <p className="mb-6">
        SM Services reserves the right to modify this Refund Policy at any time.
        Updates will be posted on our website at{" "}
        <a href="https://www.smservice.co.in/refund" className="text-blue-600 underline" target="_blank" rel="noreferrer">
          www.smservice.co.in/refund
        </a>.
        Continued use of our services after changes constitutes acceptance of
        the updated policy.
      </p>

      <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
      <p>
        If you have any questions or need further assistance regarding our Refund
        Policy, please contact us at:
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

export default RefundPolicy
