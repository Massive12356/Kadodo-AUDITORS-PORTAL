import React from 'react';
import Header from '../components/Header';

const AuditorRotationNoticeScreen = () => {
  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <main className="max-w-3xl mx-auto py-8 px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Auditor Rotation</h1>
          <p className="text-gray-600">Manage mandatory auditor rotation requirements and ensure compliance with regulations.</p>
        </div>
        
        {/* Top Header Bar */}
        <div className="bg-white rounded-t-lg shadow-sm">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center mr-3">
                <span className="text-white text-xs font-bold">ORC</span>
              </div>
              <h1 className="text-xl font-bold text-gray-800">ORC & ICAG</h1>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-b-lg shadow-sm p-8">
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
              Advance Notification: Mandatory Auditor Rotation
            </h1>
            <p className="text-sm text-gray-500">
              Official Communication from the Ghana ORC & ICAG
            </p>
          </div>

          {/* Introductory Paragraph */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              This is an official notice from the Office of the Registrar of Companies (ORC) and the Institute of Chartered Accountants, Ghana (ICAG) regarding the upcoming mandatory auditor rotation. In accordance with Section 170 of the Companies Act, 2019 (Act 992), companies are required to rotate their external auditors to ensure independence and objectivity. All affected parties must take necessary actions to ensure a smooth transition and full compliance with the regulation.
            </p>
          </div>

          {/* Key Information Card */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Key Information</h2>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Auditor Name</span>
                <span className="text-gray-800 font-semibold">KPMG Ghana</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Company Name</span>
                <span className="text-gray-800 font-semibold">MTN Ghana PLC</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-600 font-medium">Impending Rotation Date</span>
                <span className="text-orange-500 font-semibold">31st December 2024</span>
              </div>
            </div>
          </div>

          {/* Compliance Actions Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Required Actions to Ensure Compliance</h2>

            {/* Action Box 1 - For the Company */}
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-blue-700 mb-4">
                For the Company (MTN Ghana PLC):
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Initiate appointment of a new auditor at the Annual General Meeting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Pass and document resolutions in accordance with the Companies Act</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">File auditor change with ORC within the specified deadline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Facilitate a smooth handover process between outgoing and incoming auditors</span>
                </li>
              </ul>
            </div>

            {/* Action Box 2 - For the Auditor */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-700 mb-4">
                For the Auditor (KPMG Ghana):
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Cooperate fully during the transition period</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Provide comprehensive handover notes and documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Complete all final audit reports and regulatory filings on time</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Primary Call-To-Action Button */}
          <div className="text-center mb-8">
            <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors text-lg">
              Log in to the Compliance Portal →
            </button>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-600 text-sm mb-4">
              For inquiries, please contact the ORC at <a href="mailto:support@orc.gov.gh" className="text-blue-600 hover:underline">support@orc.gov.gh</a> or ICAG at <a href="mailto:info@icag.org" className="text-blue-600 hover:underline">info@icag.org</a>.
            </p>
            <p className="text-xs text-gray-500">
              © 2024 ORC & ICAG. All Rights Reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuditorRotationNoticeScreen;