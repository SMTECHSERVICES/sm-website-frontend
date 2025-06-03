// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p>© {new Date().getFullYear()} SM Services. All rights reserved.</p>
        <div className="text-sm mt-2">
          <a href="/privacy" className="underline hover:text-gray-300">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
