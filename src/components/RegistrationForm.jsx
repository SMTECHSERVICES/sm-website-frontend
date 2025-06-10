// src/components/RegistrationForm.js
import React, { useState } from 'react';

const RegistrationForm = ({ type, fair, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    resume: null,
    package: 'standard'
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    // In a real application, this would send data to your backend
    alert('Registration submitted successfully!');
    onBack();
  };
  
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to options
      </button>
      
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        {type === 'employer' ? 'Employer Registration' : 'Candidate Registration'}
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {type === 'employer' ? 'Company Name' : 'Full Name'}
            </label>
            <input
              type="text"
              name={type === 'employer' ? 'company' : 'name'}
              value={type === 'employer' ? formData.company : formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          
          {type === 'employer' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Position
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          
          {type === 'employer' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Package Selection
              </label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="standard">Standard ({fair.pricing.standard})</option>
                <option value="premium">Premium ({fair.pricing.premium})</option>
              </select>
            </div>
          )}
          
          {type === 'candidate' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Resume (PDF, DOC)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full text-sm"
                required
              />
            </div>
          )}
          
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition"
            >
              Complete Registration
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;