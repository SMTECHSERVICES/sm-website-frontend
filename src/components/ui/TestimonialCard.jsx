import React from 'react';

const TestimonialCard = ({ 
  
  description, 
  name, 
  post, 
  profileImage 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
   
      
      {/* Quote */}
      <div className="relative mb-6">
        <div className="absolute top-0 left-0 text-5xl text-blue-100 font-serif">“</div>
        <p className="text-gray-600 pl-8 pt-4 italic">{description}</p>
        <div className="absolute bottom-0 right-0 text-5xl text-blue-100 font-serif">”</div>
      </div>
      
      {/* Profile */}
      <div className="mt-auto flex items-center pt-4 border-t border-gray-100">
        <div className="mr-4">
          {profileImage ? (
            <img 
              src={profileImage} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
              onError={(e) => {
                e.target.onerror = null;
                e.target.parentNode.innerHTML = 
                  `<div class="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 flex items-center justify-center">
                    <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>`;
              }}
            />
          ) : (
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
          )}
        </div>
        
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{post}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;