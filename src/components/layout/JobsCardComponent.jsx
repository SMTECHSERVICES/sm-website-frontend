import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Adjust the path if needed

const JobsCardComponent = ({ jobOpenings = [] }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();

  const handleReadMore = (id) => {
    navigate(`/job-detail/${id}`);
  };

  const handleProtectedAction = (callback) => {
    if (!auth?.isAuthenticated) {
      navigate('/candidate/auth');
    } else {
      callback(); // Run the actual action
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {jobOpenings.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start">
                  <img src={job.logo} alt={`${job.company} logo`} className="h-12 w-12 rounded-md object-cover mr-4" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{job.position}</h3>
                        <p className="text-indigo-600 font-medium">{job.company}</p>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {job.type}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">📍 {job.location}</div>
                      <div className="flex items-center">💰 {job.salary}</div>
                      <div className="flex items-center ml-auto">🗓️ {job.posted}</div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center flex-wrap gap-2">
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-2 border cursor-pointer border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50"
                      onClick={() => handleProtectedAction(() => alert('Job saved!'))}
                    >
                      Save Job
                    </button>
                    <button
                      className="px-4 py-2 cursor-pointer bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                      onClick={() => handleProtectedAction(() => alert('Apply flow triggered'))}
                    >
                      Apply Now
                    </button>
                  </div>
                  <button
                    onClick={() => handleReadMore(job.id)}
                    className="text-sm cursor-pointer text-blue-600 hover:underline mt-2 sm:mt-0"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (Optional) */}
        <div className="mt-8 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <a href="#" className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">Previous</a>
            <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-indigo-600 hover:bg-gray-50">1</a>
            <a href="#" className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">2</a>
            <a href="#" className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">3</a>
            <a href="#" className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">Next</a>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default JobsCardComponent;
