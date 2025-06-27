import React from 'react'
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

const Payroll = () => {
     const payrollSystemUrl = 'https://sm-hr-frontend.vercel.app/';
  return (
    <>
    <Navbar />
    <div>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 font-inter text-gray-800">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">

        {/* Header Section */}
        <header className="text-center py-8 sm:py-12 bg-white shadow-lg rounded-xl mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-600 leading-tight">
            Employee Payroll Management System
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Streamlining Compensation, Compliance, and Financial Accuracy
          </p>
        </header>

        {/* Introduction Section */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-6">What is a Payroll Management System?</h2>
          <div className="text-center">
            <img
              src="https://placehold.co/800x450/B6A2F1/FFFFFF?text=Payroll+System+Overview"
              alt="Payroll System Overview"
              className="w-full  max-w-2xl mx-auto rounded-lg shadow-md mb-6"
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x450/CCCCCC/000000?text=Image+Error`; }}
            />
          </div>
          <p className="text-gray-700 leading-relaxed text-md sm:text-lg mb-4">
            A Payroll Management System is a comprehensive solution designed to automate and manage all aspects of employee compensation, from calculating wages and deductions to generating pay stubs and ensuring tax compliance. It acts as the backbone for an organization's financial operations related to its workforce.
          </p>
          <p className="text-gray-700 leading-relaxed text-md sm:text-lg">
            Beyond just paying employees, a robust payroll system handles complex calculations, tracks working hours, manages benefits, and keeps accurate records, minimizing errors and administrative burden.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Time & Cost Savings</h3>
              <p className="text-gray-600 text-sm">
                Automates repetitive tasks, reducing manual effort and freeing up HR/finance teams for strategic activities.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Accuracy & Compliance</h3>
              <p className="text-gray-600 text-sm">
                Minimizes calculation errors and helps adhere to complex tax laws, labor regulations, and reporting requirements.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Employee Satisfaction</h3>
              <p className="text-gray-600 text-sm">
                Ensures timely and accurate payments, leading to higher employee morale and trust.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Enhanced Reporting</h3>
              <p className="text-gray-600 text-sm">
                Generates detailed reports for financial analysis, auditing, and strategic workforce planning.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Data Security</h3>
              <p className="text-gray-600 text-sm">
                Protects sensitive employee and financial data with robust security measures.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Integration Capabilities</h3>
              <p className="text-gray-600 text-sm">
                Often integrates with HR, time & attendance, and accounting systems for a unified approach.
              </p>
            </div>
          </div>
        </section>

        {/* Access Your Payroll System Section */}
        <section className="text-center mb-12 bg-blue-600 text-white rounded-xl shadow-lg p-8 sm:p-10 lg:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Manage Your Payroll?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            Click the button below to access your existing Employee Payroll Management System and experience seamless payroll processing.
          </p>
          <a
            href={payrollSystemUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 py-3 px-8 rounded-full font-bold text-lg sm:text-xl shadow-md
                       hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300 transform hover:scale-105"
          >
            Go to Your Payroll System
          </a>
         
        </section>

        {/* Footer */}
    
         
        
      </div>
    </div>
    </div>
     <Footer />
    </>
  )
}

export default Payroll
