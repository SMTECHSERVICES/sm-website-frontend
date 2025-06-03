// src/components/MissionVision.jsx
const MissionVision = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To empower individuals and businesses through skill development, job connectivity,
            and reliable payroll & software solutions that drive success across India.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To become India's leading manpower service brand by bridging the gap between
            talent and opportunity using innovation, integrity, and impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
