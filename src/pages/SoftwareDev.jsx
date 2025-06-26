import React from 'react'
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const SoftwareDev = () => {
     const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform for Global Retailer',
      description: 'Developed a scalable and secure e-commerce solution, integrating with existing inventory and payment systems. Achieved a 30% increase in online sales within the first year.',
      image: 'https://placehold.co/600x400/AED6F1/000000?text=E-commerce+Solution',
    },
    {
      id: 2,
      title: 'Mobile App for Healthcare Provider',
      description: 'Created an intuitive mobile application for appointment scheduling, telemedicine consultations, and secure patient record access, enhancing patient engagement.',
      image: 'https://placehold.co/600x400/F1C40F/000000?text=Healthcare+App',
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Built a custom AI-driven dashboard that processes vast amounts of data to provide actionable business insights, reducing reporting time by 50%.',
      image: 'https://placehold.co/600x400/A2D9CE/000000?text=AI+Dashboard',
    },
  ];

  // Dummy data for Client Testimonials
  const testimonials = [
    {
      id: 1,
      quote: "Our experience with [Your Company Name] was exceptional. Their team delivered a robust and user-friendly platform ahead of schedule, exceeding our expectations.",
      clientName: "Jane Doe",
      clientTitle: "CEO, InnovateTech Solutions",
    },
    {
      id: 2,
      quote: "The custom software developed by them has significantly streamlined our internal processes. Their technical expertise and communication were outstanding.",
      clientName: "John Smith",
      clientTitle: "Operations Manager, Global Logistics Co.",
    },
    {
      id: 3,
      quote: "From concept to deployment, [Your Company Name] demonstrated professionalism and a deep understanding of our needs. Highly recommend their services!",
      clientName: "Sarah Chen",
      clientTitle: "Founder, HealthLink Start-up",
    },
  ];
  return (
   <>
   <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 font-inter text-gray-800">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">

        {/* Header */}
        <header className="text-center py-8 sm:py-12 bg-white shadow-lg rounded-xl mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-700 leading-tight">
            Custom Software Solutions
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Innovating the future, one line of code at a time.
          </p>
        </header>

        {/* Company Profile Section */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-6">Our Company Profile</h2>
          <div className="text-center">
            <img
              src="https://placehold.co/800x450/3498DB/FFFFFF?text=Our+Team"
              alt="Our Team Working"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-6"
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x450/CCCCCC/000000?text=Image+Error`; }}
            />
          </div>
          <p className="text-gray-700 leading-relaxed text-md sm:text-lg mb-4">
            At <span className='text-2xl font-semibold text-[#3451F7]'>SM SERVICES</span>, we specialize in crafting bespoke software solutions that drive innovation and efficiency for businesses of all sizes. With a passionate team of experienced developers, designers, and project managers, we transform complex challenges into intuitive and powerful digital experiences.
          </p>
          <p className="text-gray-700 leading-relaxed text-md sm:text-lg">
            Our approach is client-centric, focusing on deep understanding of your business needs, agile development methodologies, and transparent communication. We are committed to delivering high-quality, scalable, and secure software that perfectly aligns with your strategic objectives and helps you achieve sustainable growth in a rapidly evolving digital landscape.
          </p>
        </section>

        {/* Technologies Used Section */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-8">Technologies We Master</h2>
          <div className="flex flex-wrap justify-center gap-4 text-center">
            {/* Frontend */}
            <div className="p-4 bg-blue-50 rounded-lg shadow-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <h3 className="font-semibold text-lg text-blue-700 mb-2">Frontend</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>React</li>
                <li>Angular</li>
                <li>Vue.js</li>
                <li>HTML5 & CSS3</li>
                <li>JavaScript/TypeScript</li>
              </ul>
            </div>
            {/* Backend */}
            <div className="p-4 bg-green-50 rounded-lg shadow-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <h3 className="font-semibold text-lg text-green-700 mb-2">Backend</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Node.js (Express, NestJS)</li>
                <li>Python (Django, Flask)</li>
                <li>Java (Spring Boot)</li>
                <li>PHP (Laravel)</li>
                <li>.NET Core</li>
              </ul>
            </div>
            {/* Databases */}
            <div className="p-4 bg-yellow-50 rounded-lg shadow-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <h3 className="font-semibold text-lg text-yellow-700 mb-2">Databases</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>SQL Server</li>
                <li>Redis</li>
              </ul>
            </div>
            {/* Cloud & DevOps */}
            <div className="p-4 bg-purple-50 rounded-lg shadow-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <h3 className="font-semibold text-lg text-purple-700 mb-2">Cloud & DevOps</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>AWS</li>
                <li>Azure</li>
                <li>Google Cloud Platform (GCP)</li>
                <li>Docker</li>
                <li>Kubernetes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-8">Our Success Stories (Case Studies)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/CCCCCC/000000?text=Image+Error`; }}
                />
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">{study.title}</h3>
                  <p className="text-gray-600 text-sm">{study.description}</p>
                  <button className="mt-4 text-blue-600 hover:underline font-medium">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="mb-12 bg-blue-700 text-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white text-gray-800 rounded-lg p-6 shadow-md flex flex-col justify-between">
                <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-blue-700">{testimonial.clientName}</p>
                  <p className="text-sm text-gray-600">{testimonial.clientTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-600 text-sm">
          <Footer />
        </footer>
      </div>
    </div>
   </>
  )
}

export default SoftwareDev
