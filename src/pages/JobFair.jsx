import React ,{useState}from 'react'
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LoginCommonLayout from '../components/layout/LoginCommonLayout';
 import jobFair from '/job-fair.jpg'
import PastJobFairEventsCard from '../components/ui/PastJobFaiEvents';


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
    { id: 1, src: '/Event 1.jpg', alt: 'Past Event 1' },
    { id: 2, src: '/Event 2.jpeg', alt: 'Past Event 2' },
  { id: 3, src: '/Event 3.jpg', alt: 'Past Event 3' },
    { id: 4, src: '/Event 4.jpeg', alt: 'Past Event 4' },
    
  ];

  const heading = 'Real Jobs. Real Connections. Real Impact.';
  const paragraph = 'Meet top employers, explore real job openings, and build meaningful career connections — all in one powerful event.'
  return (
   <>
   <Navbar />

    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-800">
      

        {/* Header */}
       
          {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-700 leading-tight">
            Job Fair Connect
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Connecting Talent with Opportunity Across Colleges, Political Zones, and Corporate Parks.
          </p> */}
          <LoginCommonLayout login1={'Career Explorer'} login2={'Talent Seeker'} heading={heading} paragraph={paragraph} to1={'/about'} to2={'/job-placement'} hero={jobFair} />
     

        {/* Upcoming Job Fairs Section */}
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
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
            {pastEvents.map((event,index) => (
              <PastJobFairEventsCard key={event.id} heading={event.alt} imageSrc={event.src}/>
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
       

        {/* Footer */}
       
        
      
      </div>
    </div>
     <Footer />
   </>
  )
}

export default JobFair
