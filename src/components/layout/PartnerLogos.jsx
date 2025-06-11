// src/components/PartnerLogos.jsx
const PartnerLogos = () => {
  return (
    <div className="py-10 bg-gray-100 text-center">
      <h3 className="text-xl font-semibold text-gray-700 mb-6">Trusted By</h3>
      <div className="flex flex-wrap justify-center gap-6">
        <img src="/logo1.jpg" alt="Client 1" className="h-12" />
        <img src="/logo2.png" alt="Client 2" className="h-12" />
        <img src="/logo3.png" alt="Client 3" className="h-12" />
      </div>
    </div>
  );
};

export default PartnerLogos;
