// src/components/HeroSection.jsx
const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-5">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Empowering Careers with SM Services</h1>
        <p className="text-lg mb-6">Your one-stop solution for training, job placement, job fairs, payroll, and software development.</p>
        <a href="/login" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
