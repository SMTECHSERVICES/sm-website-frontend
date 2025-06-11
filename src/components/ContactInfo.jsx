// // src/components/ContactInfo.jsx
// const ContactInfo = () => {
//   return (
//     <section className="bg-blue-700 text-white py-12 px-6">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
//         <p className="mb-6">We’re here to help you with training, placements, job fairs, or payroll solutions.</p>
//         <div className="grid md:grid-cols-3 gap-6 text-left">
//           <div>
//             <h4 className="font-bold text-lg">📍 Address</h4>
//             <p>Registed Office : 309 SaiRam Plaza,63 Mangal Nagar A.B.Road Indore Madhya Pradesh 452001 </p>
//             <p> Branch Office : Plot no 46, Harfala road, opp. Petrol pump, sikari ballabgarh -121004 </p>
//             <p>Branch  Office : 301 OM Acarde ,1/1,sec-5,Rajeddnra Nagar ,Gaziabaad - 201005  </p>
//           </div>
//           <div>
//             <h4 className="font-bold text-lg">📞 Phone</h4>
//             <p>+91 9098273259</p>
//           </div>
//           <div>
//             <h4 className="font-bold text-lg">✉️ Email</h4>
//             <p>info@smservicess.com</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactInfo;
// src/components/ContactInfo.jsx
const ContactInfo = () => {
  return (
    <section className="bg-blue-700 text-white py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-8 text-sm sm:text-base">
          We’re here to help you with training, placements, job fairs, or payroll solutions.
        </p>
        <div className="grid gap-8 text-left md:grid-cols-3">
          {/* Address Section */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">📍 Address</h4>
            <div className="text-sm leading-relaxed space-y-3">
              <p>
                <span className="font-semibold">Registered Office:</span><br />
                309 SaiRam Plaza, 63 Mangal Nagar,<br />
                A.B. Road, Indore, Madhya Pradesh - 452001
              </p>
              <p>
                <span className="font-semibold">Branch Office:</span><br />
                Plot No. 46, Harfala Road, Opp. Petrol Pump,<br />
                Sikari, Ballabgarh, Haryana - 121004
              </p>
              <p>
                <span className="font-semibold">Branch Office:</span><br />
                301 OM Arcade, 1/1, Sec-5,<br />
                Rajendra Nagar, Ghaziabad, Uttar Pradesh - 201005
              </p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="space-y-2">
            <h4 className="font-bold text-lg">📞 Phone</h4>
            <p className="text-sm">+91 9098273259 (Only For Official Information )</p>
            <p className="text-sm">+91 9302401223 (Job Related Information)</p>
          </div>

          {/* Email Section */}
          <div className="space-y-2">
            <h4 className="font-bold text-lg">✉️ Email</h4>
            <p className="text-sm break-all">info@smservice.co.in</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

