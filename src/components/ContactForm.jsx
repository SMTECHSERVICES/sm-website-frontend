import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const access_key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handlePhoneChange = (e) => {
    const value = e.target.value;

    // Allow only digits and limit to 10 characters
    if (/^\d{0,10}$/.test(value)) {
      setPhone(value);

      if (value.length !== 10) {
        setPhoneError("Phone number must be exactly 10 digits.");
      } else {
        setPhoneError("");
      }
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    const formData = new FormData(event.target);
    formData.append("access_key", access_key);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        event.target.reset();
        setPhone(""); // reset phone input
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div id="contactForm" className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
            className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${phoneError ? 'border-red-500 focus:ring-red-400' : 'focus:ring-blue-400'}`}
            placeholder="10 digit phone number"
          />
          {phoneError && <p className="text-sm text-red-600 mt-1">{phoneError}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            required
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || phone.length !== 10}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="text-center mt-4 text-sm text-green-600 font-medium">
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
