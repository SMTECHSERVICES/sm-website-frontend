



// import React from 'react';
// import Navbar from '../components/layout/Navbar';
// import Footer from '../components/layout/Footer';
// import SoftwareDevComponent from '../components/layout/SoftwareDev';
// import SoftwareCard from '../components/ui/SoftwareCard';

// // Import Swiper React components and modules
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import hero from '/software.jpg';
// import TestimonialCard from '../components/ui/TestimonialCard';

// const SoftwareDev = () => {
//   const caseStudies = [
//     {
//       id: 1,
//       title: 'E-commerce Platform for Global Retailer',
//       description: 'Developed a scalable and secure e-commerce solution, integrating with existing inventory and payment systems. Achieved a 30% increase in online sales within the first year.',
//       image: '/HOME.jpg',
//       visitLink: 'https://www.mentors.ind.in/'
//     },
//     {
//       id: 2,
//       title: 'Mobile App for Healthcare Provider',
//       description: 'Created an intuitive mobile application for appointment scheduling, telemedicine consultations, and secure patient record access, enhancing patient engagement.',
//       image: '/HOME.jpg',
//       visitLink: 'https://www.mentors.ind.in/'
//     },
//     {
//       id: 3,
//       title: 'AI-Powered Analytics Dashboard',
//       description: 'Built a custom AI-driven dashboard that processes vast amounts of data to provide actionable business insights, reducing reporting time by 50%.',
//       image: '/HOME.jpg',
//       visitLink: 'https://www.mentors.ind.in/'
//     },
//     {
//       id: 4,
//       title: 'Cloud Migration for Enterprise',
//       description: 'Successfully migrated legacy systems to AWS cloud infrastructure, improving scalability and reducing operational costs by 40%.',
//       image: '/HOME.jpg',
//       visitLink: 'https://www.mentors.ind.in/'
//     },
//     {
//       id: 5,
//       title: 'IoT Fleet Management Solution',
//       description: 'Developed an IoT-based solution for real-time fleet tracking and management, reducing fuel costs by 25% and improving delivery times.',
//       image: '/HOME.jpg',
//       visitLink: 'https://www.mentors.ind.in/'
//     },
//   ];

//   const testimonials = [
//     {
//       id: 1,
//       quote: "Our experience with SM Services was exceptional. Their team delivered a robust and user-friendly platform ahead of schedule, exceeding our expectations.",
//       clientName: "Jane Doe",
//       clientTitle: "CEO, InnovateTech Solutions",
//       profileImage:'/expert1.png'
//     },
//     {
//       id: 2,
//       quote: "The custom software developed by SM Services has significantly streamlined our internal processes. Their technical expertise and communication were outstanding.",
//       clientName: "John Smith",
//       clientTitle: "Operations Manager, Global Logistics Co.",
//       profileImage:'/expert1.png'
//     },
//     {
//       id: 3,
//       quote: "From concept to deployment, SM Services demonstrated professionalism and a deep understanding of our needs. Highly recommend their services!",
//       clientName: "Sarah Chen",
//       clientTitle: "Founder, HealthLink Start-up",
//       profileImage:'/expert1.png'
//     },
//   ];

//   const heading = "Smart Software Solutions for a Smarter Tomorrow"
//   const paragraph = 'At SM Services - We create custom, scalable, and secure software using modern technologies like React, Node.js, and MongoDB. From web apps to enterprise solutions, our code powers growth, performance, and innovation.'

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 font-inter text-gray-800">
//         <SoftwareDevComponent hero={hero} heading={heading} paragraph={paragraph} />
//         <div className="container mx-auto p-4 sm:p-6 lg:p-8">
//           {/* Technologies Used Section */}
//           <section className="mb-12 bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
//             <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-8">Technologies We Master</h2>
//             <div className="flex flex-wrap justify-center gap-4 text-center">
//               {/* Frontend */}
//               <div className="p-4 bg-blue-50 rounded-lg shadow-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
//                 <h3 className="font-semibold text-lg text-blue-700 mb-2">Frontend</h3>
//                 <ul className="text-gray-600 text-sm space-y-1">
//                   <li>React</li>
//                   <li>Angular</li>
//                   <li>Vue.js</li>
//                   <li>HTML5 & CSS3</li>
//                   <li>JavaScript/TypeScript</li>
//                 </ul>
//               </div>
//               {/* Backend */}
//               <div className="p-4 bg-green-50 rounded-lg shadow-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
//                 <h3 className="font-semibold text-lg text-green-700 mb-2">Backend</h3>
//                 <ul className="text-gray-600 text-sm space-y-1">
//                   <li>Node.js (Express, NestJS)</li>
//                   <li>Python (Django, Flask)</li>
//                   <li>Java (Spring Boot)</li>
//                   <li>PHP (Laravel)</li>
//                   <li>.NET Core</li>
//                 </ul>
//               </div>
//               {/* Databases */}
//               <div className="p-4 bg-yellow-50 rounded-lg shadow-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
//                 <h3 className="font-semibold text-lg text-yellow-700 mb-2">Databases</h3>
//                 <ul className="text-gray-600 text-sm space-y-1">
//                   <li>PostgreSQL</li>
//                   <li>MySQL</li>
//                   <li>MongoDB</li>
//                   <li>SQL Server</li>
//                   <li>Redis</li>
//                 </ul>
//               </div>
//               {/* Cloud & DevOps */}
//               <div className="p-4 bg-purple-50 rounded-lg shadow-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
//                 <h3 className="font-semibold text-lg text-purple-700 mb-2">Cloud & DevOps</h3>
//                 <ul className="text-gray-600 text-sm space-y-1">
//                   <li>AWS</li>
//                   <li>Azure</li>
//                   <li>Google Cloud Platform (GCP)</li>
//                   <li>Docker</li>
//                   <li>Kubernetes</li>
//                 </ul>
//               </div>
//             </div>
//           </section>

//           {/* Case Studies Section with Swiper Slider */}
//           <section className="mb-16 py-8">
//             <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-8">Our Success Stories (Case Studies)</h2>
            
//             <div className="relative">
//               <Swiper
//                 modules={[Navigation, Pagination, Autoplay]}
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 breakpoints={{
//                   640: {
//                     slidesPerView: 1,
//                   },
//                   768: {
//                     slidesPerView: 2,
//                   },
//                   1024: {
//                     slidesPerView: 3,
//                   },
//                 }}
//                 navigation={{
//                   nextEl: '.swiper-button-next',
//                   prevEl: '.swiper-button-prev',
//                 }}
//                 pagination={{ 
//                   clickable: true,
//                   el: '.swiper-pagination',
//                   type: 'bullets',
//                 }}
//                 autoplay={{
//                   delay: 5000,
//                   disableOnInteraction: false,
//                 }}
//                 loop={true}
//                 className="mySwiper pb-12"
//               >
//                 {caseStudies.map((caseItem) => (
//                   <SwiperSlide key={caseItem.id} className="h-auto">
//                     <div className="h-full px-2 pb-10">
//                       <SoftwareCard
//                         imageSrc={caseItem.image}
//                         heading={caseItem.title}
//                         paragraph={caseItem.description}
//                         visitLink={caseItem.visitLink}
//                       />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
              
//               {/* Custom Navigation Buttons */}
//               <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg cursor-pointer w-12 h-12 flex items-center justify-center hover:bg-blue-100">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </div>
//               <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg cursor-pointer w-12 h-12 flex items-center justify-center hover:bg-blue-100">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </div>
              
//               {/* Pagination */}
//               <div className="swiper-pagination absolute bottom-0 left-0 right-0 flex justify-center space-x-2 z-10"></div>
//             </div>
//           </section>

//           {/* Client Testimonials Section */}
//           <section className="mb-12 bg-[#C4DFEB] text-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
//             <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {testimonials.map((testimonial) => (
//                 <TestimonialCard key={testimonial.id} description={testimonial.quote} post={testimonial.clientTitle} profileImage={testimonial.profileImage} name={testimonial.clientName} />
//               ))}
//             </div>
//           </section>

         
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default SoftwareDev;


import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SoftwareDevComponent from '../components/layout/SoftwareDev';
import SoftwareCard from '../components/ui/SoftwareCard';
import TestimonialCard from '../components/ui/TestimonialCard';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import hero from '/software.jpg';
import TechCard from '../components/ui/TechCard';

const SoftwareDev = () => {

  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform for Global Retailer',
      description: 'Developed a scalable and secure e-commerce solution, integrating with existing inventory and payment systems. Achieved a 30% increase in online sales within the first year.',
      image: '/HOME.jpg',
      visitLink: 'https://www.mentors.ind.in/'
    },
    {
      id: 2,
      title: 'Mobile App for Healthcare Provider',
      description: 'Created an intuitive mobile application for appointment scheduling, telemedicine consultations, and secure patient record access, enhancing patient engagement.',
      image: '/HOME.jpg',
      visitLink: 'https://www.mentors.ind.in/'
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Built a custom AI-driven dashboard that processes vast amounts of data to provide actionable business insights, reducing reporting time by 50%.',
      image: '/HOME.jpg',
      visitLink: 'https://www.mentors.ind.in/'
    },
    {
      id: 4,
      title: 'Cloud Migration for Enterprise',
      description: 'Successfully migrated legacy systems to AWS cloud infrastructure, improving scalability and reducing operational costs by 40%.',
      image: '/HOME.jpg',
      visitLink: 'https://www.mentors.ind.in/'
    },
    {
      id: 5,
      title: 'IoT Fleet Management Solution',
      description: 'Developed an IoT-based solution for real-time fleet tracking and management, reducing fuel costs by 25% and improving delivery times.',
      image: '/HOME.jpg',
      visitLink: 'https://www.mentors.ind.in/'
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Our experience with SM Services was exceptional. Their team delivered a robust and user-friendly platform ahead of schedule, exceeding our expectations.",
      clientName: "Jane Doe",
      clientTitle: "CEO, InnovateTech Solutions",
      profileImage:'/expert1.png'
    },
    {
      id: 2,
      quote: "The custom software developed by SM Services has significantly streamlined our internal processes. Their technical expertise and communication were outstanding.",
      clientName: "John Smith",
      clientTitle: "Operations Manager, Global Logistics Co.",
      profileImage:'/expert1.png'
    },
    {
      id: 3,
      quote: "From concept to deployment, SM Services demonstrated professionalism and a deep understanding of our needs. Highly recommend their services!",
      clientName: "Sarah Chen",
      clientTitle: "Founder, HealthLink Start-up",
      profileImage:'/expert1.png'
    },
    {
      id: 4,
      quote: "The mobile app developed by SM Services has transformed how we engage with our customers. User feedback has been overwhelmingly positive.",
      clientName: "Robert Johnson",
      clientTitle: "Director, Retail Innovations",
      profileImage:'/expert1.png'
    },
    {
      id: 5,
      quote: "Working with SM Services was a game-changer for our business. Their innovative solutions helped us scale efficiently and improve customer satisfaction.",
      clientName: "Amanda Wilson",
      clientTitle: "CTO, TechGrowth Inc.",
      profileImage:'/expert1.png'
    },
      {
      id: 6,
      quote: "The custom software developed by SM Services has significantly streamlined our internal processes. Their technical expertise and communication were outstanding.",
      clientName: "John Smith",
      clientTitle: "Operations Manager, Global Logistics Co.",
      profileImage:'/expert1.png'
    },
  ];

   const techCardData = [
  {
    heading: "Frontend Technologies",
    techList: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
      "Vite.js"
    ]
  },
  {
    heading: "Backend Technologies",
    techList: [
      "Node.js",
      "Express.js",
      "NestJS",
      "JWT Authentication",
      "REST API",
      "Socket.IO"
    ]
  },
  {
    heading: "Database & Storage",
    techList: [
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Supabase",
      "Redis",
      "Cloudinary"
    ]
  },
  {
    heading: "DevOps & Deployment",
    techList: [
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Netlify",
      "Render",
      "AWS EC2"
    ]
  },
  {
    heading: "Tools & Utilities",
    techList: [
      "Visual Studio Code",
      "Figma",
      "Postman",
      "ESLint",
      "Prettier",
      "Webpack"
    ]
  },
  {
    heading: "AI & ML Tools",
    techList: [
      "TensorFlow",
      "PyTorch",
      "OpenAI API",
      "LangChain",
      "Hugging Face Transformers",
      "Whisper"
    ]
  }
];


  const heading = "Smart Software Solutions for a Smarter Tomorrow"
  const paragraph = 'At SM Services - We create custom, scalable, and secure software using modern technologies like React, Node.js, and MongoDB. From web apps to enterprise solutions, our code powers growth, performance, and innovation.'

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 font-inter text-gray-800">
        <SoftwareDevComponent hero={hero} heading={heading} paragraph={paragraph} />
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
          {/* Technologies Used Section */}
          <section className="mb-12 bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-8">Technologies We Master</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 overflow-hidden gap-2.5'>
   {techCardData.map((techCard,index)=>{
              return <TechCard key={index} heading={techCard.heading} techList={techCard.techList} />

            })}
            </div>
         
           
          </section>

          {/* Case Studies Section with Swiper Slider */}
          <section className="mb-16 py-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-8">Our Success Stories (Case Studies)</h2>
            
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{ 
                  clickable: true,
                  el: '.swiper-pagination',
                  type: 'bullets',
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="mySwiper pb-12"
              >
                {caseStudies.map((caseItem) => (
                  <SwiperSlide key={caseItem.id} className="h-auto">
                    <div className="h-full px-2 pb-10">
                      <SoftwareCard
                        imageSrc={caseItem.image}
                        heading={caseItem.title}
                        paragraph={caseItem.description}
                        visitLink={caseItem.visitLink}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Custom Navigation Buttons */}
              <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg cursor-pointer w-12 h-12 flex items-center justify-center hover:bg-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg cursor-pointer w-12 h-12 flex items-center justify-center hover:bg-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              {/* Pagination */}
              <div className="swiper-pagination absolute bottom-0 left-0 right-0 flex justify-center space-x-2 z-10"></div>
            </div>
          </section>

          {/* Client Testimonials Section with Slider */}
          <section className="mb-16 py-12 bg-[#C4DFEB] rounded-2xl shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-8">
                What Our Clients Say
              </h2>
              
              <div className="relative">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                  navigation={{
                    nextEl: '.testimonial-swiper-button-next',
                    prevEl: '.testimonial-swiper-button-prev',
                  }}
                  pagination={{ 
                    clickable: true,
                    el: '.testimonial-swiper-pagination',
                    type: 'bullets',
                  }}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="testimonialSwiper pb-12"
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className="h-auto">
                      <div className="h-full px-4 pb-10">
                        <TestimonialCard 
                          description={testimonial.quote} 
                          post={testimonial.clientTitle} 
                          profileImage={testimonial.profileImage} 
                          name={testimonial.clientName} 
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* Custom Navigation Buttons */}
                <div className="testimonial-swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg cursor-pointer w-12 h-12 flex items-center justify-center hover:bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                <div className="testimonial-swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg cursor-pointer w-12 h-12 flex items-center justify-center hover:bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                {/* Pagination */}
                <div className="testimonial-swiper-pagination absolute bottom-0 left-0 right-0 flex justify-center space-x-2 z-10"></div>
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default SoftwareDev;