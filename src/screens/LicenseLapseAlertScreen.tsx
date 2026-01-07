import React from 'react';
import Header from '../components/Header';

const LicenseLapseAlertScreen = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Alert Header Bar */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 border-b-2 border-red-200 p-5 flex items-center">
            <div className="bg-yellow-500 rounded-full p-2 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-red-800">
              Auditor License Non-Renewal Alert
            </h2>
          </div>

          {/* Critical Headline */}
          <div className="p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-red-600">CRITICAL:</span> Auditor License Has Lapsed
            </h1>
            
            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>

            {/* Auditor Identification Section */}
            <div className="mb-8 bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Auditor Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Auditor Name</span>
                  <span className="text-gray-800 font-semibold">John Doe</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600 font-medium">ICAG License Number</span>
                  <span className="text-red-600 font-semibold">ICAG/2024/12345</span>
                </div>
              </div>
            </div>

            {/* Affected Companies Section */}
            <div className="mb-8 bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Affected Companies</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center">
                    <div className="text-gray-500 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">ABC Limited</span>
                  </div>
                  <a href="#" className="text-blue-600 hover:underline text-sm font-medium">View</a>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center">
                    <div className="text-gray-500 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">XYZ Corporation</span>
                  </div>
                  <a href="#" className="text-blue-600 hover:underline text-sm font-medium">View</a>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center">
                    <div className="text-gray-500 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Tech Solutions Ltd</span>
                  </div>
                  <a href="#" className="text-blue-600 hover:underline text-sm font-medium">View</a>
                </div>
              </div>
            </div>

            {/* Compliance Implications Section */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Compliance Implications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-700">Auditor is no longer authorized to perform audits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-700">Affected companies are now non-compliant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-700">Potential penalties or administrative action may follow</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Bar (Footer Actions) */}
          <div className="bg-gray-50 rounded-b-lg p-6 flex flex-col sm:flex-row justify-between gap-4">
            <button className="bg-gray-400 text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-500 transition-colors flex-1 max-w-xs mx-auto sm:mx-0">
              Acknowledge
            </button>
            <button className="bg-[#0a2c47] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#1a3d5c] transition-colors flex-1 max-w-xs mx-auto sm:mx-0">
              View Compliance Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicenseLapseAlertScreen;