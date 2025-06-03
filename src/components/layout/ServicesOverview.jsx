// src/components/ServicesOverview.jsx
const services = [
  { title: "Training", description: "Certified skill-based courses", icon: "🎓" },
  { title: "Job Placement", description: "Job portal for employers & candidates", icon: "💼" },
  { title: "Job Fair", description: "Organized events across India", icon: "🏢" },
  { title: "Payroll", description: "Outsourced payroll solutions", icon: "🧾" },
  { title: "Software Dev", description: "Custom web & mobile solutions", icon: "💻" },
];

const ServicesOverview = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
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
