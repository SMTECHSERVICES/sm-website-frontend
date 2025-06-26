// src/components/ServicesList.jsx
const services = [
  {
    title: "Training",
    description:
      "Live mentor-led sessions with certifications. Choose from Job Skills, Soft Skills, and Tech Skills programs.",
    icon: "🎓",
    to:'/training'
  },
  {
    title: "Job Placement",
    description:
      "Browse job openings, apply with one click, and get shortlisted by top employers across India.",
    icon: "🧑‍💼",
    to:'/job-placement'
  },
  {
    title: "Job Fairs",
    description:
      "Participate in mega job fairs hosted in your city. Meet 50+ employers in one place and get hired faster.",
    icon: "🏢",
    to:'/job-fair'
  },
  {
    title: "Payroll Services",
    description:
      "Affordable and accurate payroll management for small businesses and startups with payslip PDF & reports.",
    icon: "💼",
    to:"/payroll"
  },
  {
    title: "Software Development",
    description:
      "Custom websites, CRM, and web apps tailored for manpower agencies, training centers, and SMEs.",
    icon: "💻",
    to:'/software'
  },
];

import { useNavigate } from "react-router-dom";

const ServicesList = () => {

  const handleClick = (to)=>{
    navigate(to);
  }
  const navigate = useNavigate();
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 ">
          {services.map((service, idx) => (
            <div
              onClick={()=>handleClick(service.to)}
              key={idx}
              className="bg-gray-50 rounded-xl hover:cursor-pointer shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
