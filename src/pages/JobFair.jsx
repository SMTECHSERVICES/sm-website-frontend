import React ,{useState}from 'react'
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const JobFair = () => {
     const [activeTab, setActiveTab] = useState('employer'); // State for registration tabs
  const [employerForm, setEmployerForm] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    fairInterest: '',
  });
  const [candidateForm, setCandidateForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: null, // For file input
  });

  const handleEmployerChange = (e) => {
    const { name, value } = e.target;
    setEmployerForm({ ...employerForm, [name]: value });
  };

  const handleCandidateChange = (e) => {
    const { name, value } = e.target;
    setCandidateForm({ ...candidateForm, [name]: value });
  };

  const handleResumeUpload = (e) => {
    setCandidateForm({ ...candidateForm, resume: e.target.files[0] });
  };

  const handleEmployerSubmit = (e) => {
    e.preventDefault();
    console.log('Employer Registration Submitted:', employerForm);
    alert('Employer registration submitted! (Check console for data)');
    // In a real app, you'd send this data to a backend API
    setEmployerForm({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      fairInterest: '',
    });
  };

  const handleCandidateSubmit = (e) => {
    e.preventDefault();
    console.log('Candidate Registration Submitted:', candidateForm);
    alert('Candidate registration submitted! (Check console for data)');
    // In a real app, you'd send this data to a backend API
    setCandidateForm({
      fullName: '',
      email: '',
      phone: '',
      resume: null,
    });
  };

  // Dummy data for upcoming job fairs
  const upcomingFairs = [
    {
      id: 1,
      name: 'Annual College Career Fair',
      type: 'College',
      date: 'October 26, 2024',
      location: 'City University Auditorium',
      description: 'Connect with top students from various disciplines for internships and full-time roles. Includes career workshops and networking sessions.',
      pricingInfo: 'Starting from $500 (Early Bird Available)',
    },
    {
      id: 2,
      name: 'Regional Tech Talent Summit',
      type: 'Political Zone',
      date: 'November 15-16, 2024',
      location: 'Downtown Convention Center',
      description: 'A two-day event focusing on tech roles, software development, data science, and IT. Features keynote speakers and industry panels.',
      pricingInfo: 'Request custom proposal',
    },
    {
      id: 3,
      name: 'Corporate Innovation & Recruitment Drive',
      type: 'Corporate Park',
      date: 'December 5, 2024',
      location: 'Tech Hub Corporate Park',
      description: 'Exclusive fair for companies within corporate parks to recruit from a pre-vetted talent pool. Focus on innovation and future technologies.',
      pricingInfo: 'Contact us for enterprise pricing',
    },
  ];

  // Dummy data for past event gallery images
  const pastEvents = [
    { id: 1, src: 'https://placehold.co/600x400/FFD700/000000?text=Event+1', alt: 'Past Event 1' },
    { id: 2, src: 'https://placehold.co/600x400/87CEEB/000000?text=Event+2', alt: 'Past Event 2' },
    { id: 3, src: 'https://placehold.co/600x400/98FB98/000000?text=Event+3', alt: 'Past Event 3' },
    { id: 4, src: 'https://placehold.co/600x400/F08080/000000?text=Event+4', alt: 'Past Event 4' },
    { id: 5, src: 'https://placehold.co/600x400/DDA0DD/000000?text=Event+5', alt: 'Past Event 5' },
  ];
  return (
   <>
   <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-800">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">

        {/* Header */}
        <header className="text-center py-8 sm:py-12 bg-white shadow-lg rounded-xl mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-700 leading-tight">
            Job Fair Connect
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Connecting Talent with Opportunity Across Colleges, Political Zones, and Corporate Parks.
          </p>
        </header>

        {/* Upcoming Job Fairs Section */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-8">Upcoming Job Fairs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingFairs.map((fair) => (
              <div key={fair.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between transform transition-transform hover:scale-105 hover:shadow-xl">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-indigo-700 mb-2">{fair.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Type:</span> {fair.type}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Date:</span> {fair.date}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    <span className="font-medium">Location:</span> {fair.location}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">{fair.description}</p>
                </div>
                <div>
                  <p className="text-md font-bold text-green-700 mb-4">{fair.pricingInfo}</p>
                  <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-8">Gallery of Past Events</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 space-x-4 custom-scrollbar">
            {pastEvents.map((event) => (
              <div key={event.id} className="flex-shrink-0 snap-center w-64 sm:w-80 rounded-xl shadow-lg overflow-hidden border-2 border-indigo-200">
                <img
                  src={event.src}
                  alt={event.alt}
                  className="w-full h-48 object-cover transform transition-transform hover:scale-110"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/CCCCCC/000000?text=Image+Error`; }}
                />
                <p className="p-3 text-center text-gray-700 font-medium">{event.alt}</p>
              </div>
            ))}
          </div>
          <style>{`
            .custom-scrollbar::-webkit-scrollbar {
              height: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #e0e7ff; /* light indigo */
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #6366f1; /* indigo-500 */
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #4f46e5; /* indigo-600 */
            }
          `}</style>
        </section>


        {/* Registration Section */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-8">Register for a Job Fair</h2>

          {/* Registration Tabs */}
          <div className="flex justify-center mb-8 border-b border-gray-200">
            <button
              className={`py-3 px-6 text-lg font-medium transition-colors duration-300 ${
                activeTab === 'employer'
                  ? 'text-indigo-700 border-b-2 border-indigo-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('employer')}
            >
              Employer Registration
            </button>
            <button
              className={`py-3 px-6 text-lg font-medium transition-colors duration-300 ${
                activeTab === 'candidate'
                  ? 'text-indigo-700 border-b-2 border-indigo-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('candidate')}
            >
              Candidate Registration
            </button>
          </div>

          {/* Employer Registration Form */}
          {activeTab === 'employer' && (
            <form onSubmit={handleEmployerSubmit} className="max-w-xl mx-auto space-y-6">
              <div>
                <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={employerForm.companyName}
                  onChange={handleEmployerChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="contactPerson" className="block text-gray-700 font-medium mb-2">
                  Contact Person
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={employerForm.contactPerson}
                  onChange={handleEmployerChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={employerForm.email}
                  onChange={handleEmployerChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={employerForm.phone}
                  onChange={handleEmployerChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="fairInterest" className="block text-gray-700 font-medium mb-2">
                  Interested Fair (Optional)
                </label>
                <select
                  id="fairInterest"
                  name="fairInterest"
                  value={employerForm.fairInterest}
                  onChange={handleEmployerChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select an upcoming fair</option>
                  {upcomingFairs.map(fair => (
                    <option key={fair.id} value={fair.name}>{fair.name}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-md"
              >
                Register as Employer
              </button>
            </form>
          )}

          {/* Candidate Registration Form */}
          {activeTab === 'candidate' && (
            <form onSubmit={handleCandidateSubmit} className="max-w-xl mx-auto space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={candidateForm.fullName}
                  onChange={handleCandidateChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={candidateForm.email}
                  onChange={handleCandidateChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={candidateForm.phone}
                  onChange={handleCandidateChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">
                  Upload Resume (PDF, DOCX)
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeUpload}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                  required
                />
                {candidateForm.resume && (
                  <p className="text-sm text-gray-500 mt-2">Selected file: {candidateForm.resume.name}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-md"
              >
                Register as Candidate
              </button>
            </form>
          )}
        </section>

        {/* Footer */}
       
         <Footer />
      
      </div>
    </div>
   </>
  )
}

export default JobFair
