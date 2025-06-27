// // src/components/Footer.jsx
// const Footer = () => {
//   return (
//     <footer className="bg-blue-800 text-white py-6">
//       <div className="max-w-6xl mx-auto text-center">
//         <p>© {new Date().getFullYear()} SM Services. All rights reserved.</p>
//         <div className="text-sm mt-2">
//           <a href="/privacy" className="underline hover:text-gray-300">Privacy Policy</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import { FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-6">
        
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://t.me/smservicesbpojobs" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaXTwitter className="text-xl" />
          </a>
          <a href="https://instagram.com/invites/contact/?i=3htzp8kiy4t6&utm_content=g5mnsvo" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaInstagram className="text-xl" />
          </a>
          <a href="https://facebook.com/groups/182069336725323/?ref=share" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaFacebookF className="text-xl" />
          </a>
          <a href="https://linkedin.com/company/smservice" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaLinkedinIn className="text-xl" />
          </a>
          <a href="https://www.youtube.com/@SMServices24by7" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaYoutube className="text-xl" />
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center space-x-6 text-sm">
          <a href="/privacy" className="hover:underline hover:text-gray-300">Privacy Policy</a>
          <a href="/terms" className="hover:underline hover:text-gray-300">Terms & Conditions</a>
          <a href="/refund" className="hover:underline hover:text-gray-300">Refund Policy</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-200">
          © {new Date().getFullYear()} <span className="font-semibold">SM Services</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
