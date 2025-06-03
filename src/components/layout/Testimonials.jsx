// src/components/Testimonials.jsx
const testimonials = [
  { name: "Rahul S.", feedback: "Thanks to SM Services, I got placed at a top IT company!", role: "Candidate" },
  { name: "Aarti T.", feedback: "The training sessions were highly effective and interactive.", role: "Student" },
  { name: "Vikas R.", feedback: "Very professional team for payroll management.", role: "Client" },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="border p-6 rounded-lg shadow hover:shadow-md">
              <p className="italic mb-4">"{t.feedback}"</p>
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
