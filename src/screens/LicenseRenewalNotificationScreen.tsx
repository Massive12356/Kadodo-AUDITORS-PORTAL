import React from 'react';
import Header from '../components/Header';

const LicenseRenewalNotificationScreen = () => {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">License Renewal</h1>
          <p className="text-gray-600">Manage your license renewal process and stay compliant with ICAG requirements.</p>
        </div>
        
        {/* Main Card Container */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          {/* Main Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-[#0a2c47] mb-6">
            Urgent: Your ICAG Auditor License is Expiring Soon
          </h1>

          {/* Greeting & Intro Text */}
          <div className="mb-8">
            <p className="text-lg font-medium text-gray-800 mb-3">Dear [Auditor's Full Name],</p>
            <p className="text-gray-600 leading-relaxed">
              This is an official notification from the Office of the Registrar of Companies (ORC) and the Institute of Chartered Accountants, Ghana (ICAG) regarding your auditor license. Your license is approaching its expiry date and requires renewal to ensure uninterrupted practice as a certified auditor in Ghana.
            </p>
          </div>

          {/* License Information Panel */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Auditor License Number</h3>
                <p className="text-lg font-semibold text-gray-800">[ICAG/2023/1234]</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">License Expiry Date</h3>
                <p className="text-lg font-semibold text-red-600">December 31, 2024</p>
              </div>
            </div>
          </div>

          {/* Primary Call-To-Action Button */}
          <div className="text-center mb-10">
            <button className="bg-[#0a2c47] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#1a3d5c] transition-colors text-lg">
              Renew Your License Now
            </button>
          </div>

          {/* Renewal Instructions Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#0a2c47] mb-4">Renewal Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li className="text-gray-700">
                <span className="font-medium">Click the renew button</span> above to access the renewal portal
              </li>
              <li className="text-gray-700">
                <span className="font-medium">Log in using your credentials</span> to access your account
              </li>
              <li className="text-gray-700">
                <span className="font-medium">Complete the renewal form</span> with updated information
              </li>
              <li className="text-gray-700">
                <span className="font-medium">Submit required documents and payment</span> to complete the process
              </li>
            </ol>
          </div>

          {/* Warning / Consequences Box */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <h3 className="text-lg font-bold text-[#0a2c47] mb-2">Consequences of Non-Renewal</h3>
            <p className="text-gray-700">
              Failure to renew your auditor license before the expiry date will result in the suspension of your certification. 
              You will not be legally permitted to perform audit functions or represent yourself as a certified auditor in Ghana. 
              Any audit work performed without a valid license may result in disciplinary action and legal consequences.
            </p>
          </div>

          {/* Footer Content */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-600 mb-4">
              If you have any questions about the renewal process, please contact our support team.
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Help Center:</span>{' '}
              <a href="#" className="text-blue-600 hover:underline">support.icag.gh/auditors</a>
            </p>
            <p className="text-gray-600 mb-6">
              <span className="font-medium">Support Email:</span>{' '}
              <a href="mailto:licensing@icag.org.gh" className="text-blue-600 hover:underline">licensing@icag.org.gh</a>
            </p>
            
            <p className="text-gray-800 font-medium mb-2">Sincerely,</p>
            <p className="text-gray-700">The Compliance & Lifecycle Management Team</p>
            <p className="text-gray-700">ORC & ICAG</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LicenseRenewalNotificationScreen;