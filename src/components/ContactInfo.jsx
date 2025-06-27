


const ContactInfo = () => {
  // Function to handle address clicks
  const openGoogleMaps = (address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white text-black py-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Background pattern with company logo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 opacity-20 mix-blend-soft-light"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-500 opacity-15 mix-blend-soft-light"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-purple-500 opacity-20 mix-blend-soft-light"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-blue-400 opacity-15 mix-blend-soft-light"></div>
      </div>
      
      {/* Company logo watermark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <div className="text-[20rem] font-bold tracking-wider">SM</div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Get in Touch</h2>
        <div className="w-24 h-1 bg-blue-400 mx-auto mb-6 rounded-full"></div>
        <p className="mb-10 text-lg max-w-2xl mx-auto">
          We're here to help you with training, placements, job fairs, or payroll solutions. 
          Reach out to us through any of the channels below.
        </p>
        
        <div className="grid gap-8 text-left md:grid-cols-3 bg-blue-200 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          {/* Address Section */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <div className="bg-white p-3 rounded-xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl">Address</h3>
            </div>
            
            <div className="text-sm leading-relaxed space-y-4">
              {/* Registered Office */}
              <div 
                className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-all cursor-pointer group border border-white/10"
                onClick={() => openGoogleMaps("309 SaiRam Plaza, 63 Mangal Nagar, A.B. Road, Indore, Madhya Pradesh - 452001")}
              >
                <p className="font-semibold text-black group-hover:text-white transition-colors">
                  Registered Office:
                </p>
                <p className="mt-2 group-hover:underline">
                  309 SaiRam Plaza, 63 Mangal Nagar,<br />
                  A.B. Road, Indore, Madhya Pradesh - 452001
                </p>
                <div className="flex justify-end mt-2">
                  <span className="text-xs bg-white px-2 py-1 rounded-full flex items-center">
                    View on map
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
              
              {/* Branch Office 1 */}
              <div 
                className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-all cursor-pointer group border border-white/10"
                onClick={() => openGoogleMaps("Plot No. 46, Harfala Road, Opp. Petrol Pump, Sikari, Ballabgarh, Haryana - 121004")}
              >
                <p className="font-semibold text-black group-hover:text-white transition-colors">
                  Branch Office:
                </p>
                <p className="mt-2 group-hover:underline">
                  Plot No. 46, Harfala Road, Opp. Petrol Pump,<br />
                  Sikari, Ballabgarh, Haryana - 121004
                </p>
                <div className="flex justify-end mt-2">
                  <span className="text-xs bg-white px-2 py-1 rounded-full flex items-center">
                    View on map
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
              
              {/* Branch Office 2 */}
              <div 
                className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-all cursor-pointer group border border-white/10"
                onClick={() => openGoogleMaps("301 OM Arcade, 1/1, Sec-5, Rajendra Nagar, Ghaziabad, Uttar Pradesh - 201005")}
              >
                <p className="font-semibold text-black group-hover:text-white transition-colors">
                  Branch Office:
                </p>
                <p className="mt-2 group-hover:underline">
                  301 OM Arcade, 1/1, Sec-5,<br />
                  Rajendra Nagar, Ghaziabad, Uttar Pradesh - 201005
                </p>
                <div className="flex justify-end mt-2">
                  <span className="text-xs bg-white px-2 py-1 rounded-full flex items-center">
                    View on map
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Section */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <div className="bg-white p-3 rounded-xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl">Phone</h3>
            </div>
            
            <div className="space-y-4">
              <a 
                href="tel:+919098273259" 
                className="block bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-all group border border-white/10"
              >
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-lg">+91 9098273259</p>
                    <p className="text-sm text-black group-hover:text-white transition-colors">Only For Official Information</p>
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <span className="text-xs bg-white px-2 py-1 rounded-full flex items-center">
                    Call now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </a>
              
              <a 
                href="tel:+919302401223" 
                className="block bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-all group border border-white/10"
              >
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-lg">+91 9302401223</p>
                    <p className="text-sm text-black group-hover:text-white transition-colors">Job Related Information</p>
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <span className="text-xs bg-white px-2 py-1 rounded-full flex items-center">
                    Call now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Email Section */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <div className="bg-white p-3 rounded-xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl">Email</h3>
            </div>
            
            <a 
              href="mailto:info@smservice.co.in" 
              className="block bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-all group border border-white/10 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="font-medium text-xl break-all">info@smservice.co.in</p>
              <p className="mt-2 text-black group-hover:text-white transition-colors">
                Click to send us an email
              </p>
              <div className="flex justify-center mt-4">
                <span className="text-xs bg-white px-3 py-2 rounded-full flex items-center">
                  Send email
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
        
        {/* Additional contact form CTA */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-3">Prefer to write to us?</h3>
          <p className="mb-5 text-black">
            Send us a message and we'll get back to you within 24 hours
          </p>
         <a href="#contactForm">
           <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-xl transition-all transform hover:-translate-y-0.5 flex items-center mx-auto">
            Contact Form
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
         </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;



