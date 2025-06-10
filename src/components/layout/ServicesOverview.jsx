// src/components/ServicesOverview.jsx
import { useNavigate } from "react-router-dom";
const services = [
  { title: "Training", description: "Certified skill-based courses", icon: "🎓",to:'/training' },
  { title: "Job Placement", description: "Job portal for employers & candidates", icon: "💼" ,to:'/job-placement' },
  { title: "Job Fair", description: "Organized events across India", icon: "🏢",to:'/job-fair' },
  { title: "Payroll", description: "Outsourced payroll solutions", icon: "🧾",to:'/payroll' },
  { title: "Software Dev", description: "Custom web & mobile solutions", icon: "💻",to:'/software' },
];

const ServicesOverview = () => {
  const navigate = useNavigate();
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center hover:cursor-pointer">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div onClick={()=>navigate(service.to)} key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
