import { Link } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';

export default function HelpCenterScreen() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <HomeHeader />
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions and get support for using our platform
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">How do I verify a consent letter?</h3>
              <p className="mt-2 text-gray-600">
                To verify a consent letter, navigate to the Verify page and enter the consent code in the format CNST-XXXXXX. 
                The code is typically located at the top-right corner of the document.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900">How do I register as an auditor?</h3>
              <p className="mt-2 text-gray-600">
                Auditors must be registered with the Institute of Chartered Accountants of Ghana (ICAG) 
                before they can participate in our system. Please contact ICAG directly for registration.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900">How do I appoint an auditor for my company?</h3>
              <p className="mt-2 text-gray-600">
                Companies can search for qualified auditors in our directory and request engagement. 
                Once accepted, you will generate a digital consent letter that needs to be submitted to the ORC.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900">What is the Companies Act 2019 (Act 992)?</h3>
              <p className="mt-2 text-gray-600">
                Act 992 governs the incorporation, regulation, and management of companies in Ghana. 
                It requires companies to appoint qualified auditors for annual statutory audits.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Need Additional Support?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600 mb-4">
                Reach out to our support team for personalized assistance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-gray-600">Email: </span>
                  <a href="mailto:support@orc-icag.gov.gh" className="text-blue-600 hover:underline ml-2">
                    support@orc-icag.gov.gh
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">Phone: </span>
                  <span className="ml-2">+233 (0) 302 123 456</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Office Location</h3>
              <p className="text-gray-600 mb-4">
                Visit our office for in-person support during business hours.
              </p>
              <address className="text-gray-600 not-italic">
                Office of the Registrar of Companies<br />
                P.O. Box AN 12345<br />
                Accra, Ghana
              </address>
              <p className="text-gray-600 mt-2">
                Business Hours: Monday - Friday, 8:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}