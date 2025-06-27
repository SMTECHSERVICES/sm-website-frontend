// src/components/LeadershipTeam.jsx
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const leaders = [
  {
    name: "Er. Abhishek Mishra",
    title: "Founder & CEO",
    image: "/founder.jpeg",
    bio: "Visionary leader driving employment and entrepreneurship across India."
  },
  {
    name: "Mr. Vivek Sharma",
    title: "Training Head",
    image: "/expert1.png",
    bio: "Oversees mentor sessions and certified training programs."
  },
  {
    name: "Mr. Rajesh Kumar",
    title: "Job Fair Coordinator",
    image: "/expert2.jpg",
    bio: "Coordinates job fairs and corporate hiring drives."
  },
  {
    name: "Mr. Sagar Bhardwaj",
    title: "Payroll & Software Consultant",
    image: "/expert3.jpg",
    bio: "Provides payroll system and business software advisory."
  },
  {
    name: "Ms. Priya Sharma",
    title: "HR Operations Director",
    image: "/expert4.jpg",
    bio: "Manages talent acquisition and employee engagement."
  },
  {
    name: "Mr. Amit Patel",
    title: "Client Relations Manager",
    image: "/expert5.jpg",
    bio: "Builds and maintains corporate partnerships."
  },
  {
    name: "Ms. Neha Singh",
    title: "Marketing Director",
    image: "/expert6.jpg",
    bio: "Develops brand strategy and outreach programs."
  },
  {
    name: "Mr. Rohit Verma",
    title: "Technology Lead",
    image: "/expert7.jpg",
    bio: "Oversees software development and IT infrastructure."
  }
];

const LeadershipTeam = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our experienced leadership team driving innovation and excellence
          </p>
        </div>
        
        <div className="relative py-8">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              }
            }}
            className="swiper-container"
          >
            {leaders.map((leader, idx) => (
              <SwiperSlide key={idx} className="!h-auto pb-12">
                <div className="group relative h-full flex flex-col bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                  {/* Professional accent bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 to-blue-500"></div>
                  
                  {/* Image container */}
                  <div className="relative pt-8 px-8">
                    <div className="relative mx-auto">
                      <div className="absolute inset-0 transform scale-105"></div>
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 pt-4 text-center flex-grow flex flex-col">
                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                      <div className="mt-2 inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                        {leader.title}
                      </div>
                    </div>
                    <p className="text-gray-600 mt-4 flex-grow">{leader.bio}</p>
                    
                    {/* Contact info */}
                    
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          

        </div>
        
        {/* Stats section */}
        <div className="mt-10 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">10K+</div>
              <div className="text-gray-700 font-medium">Jobs Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Corporate Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">25+</div>
              <div className="text-gray-700 font-medium">Cities Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;