import { useState } from 'react';
import { User, Building2, Clipboard, Upload, Info, AlertTriangle, HelpCircle } from 'lucide-react';
import CompanyLayout from '../components/CompanyLayout';

export default function RequestAuditorEngagementScreen() {
  const [message, setMessage] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  const services = [
    'Statutory Audit',
    'Tax Advisory',
    'Forensic Accounting',
    'Internal Control Review',
    'Financial Reporting',
    'Risk Assessment',
    'Compliance Review'
  ];

  return (
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Request Auditor Engagement</h1>
          <p className="text-gray-600 mt-2">Submit your engagement request to the selected auditor</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recipient Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <User className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-lg font-bold text-gray-900">Recipient</h2>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                      alt="Auditor profile" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <div className="flex items-center">
                      <h3 className="font-medium text-gray-900">John Doe, CPA</h3>
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">License: CA-2023-001</p>
                    <p className="text-sm text-gray-600">ABC & Associates, Accra</p>
                    <div className="mt-2 flex items-center">
                      <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                        Cat: A1
                      </span>
                    </div>
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Change
                  </button>
                </div>
              </div>
            </div>

            {/* Company Details Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <Building2 className="h-5 w-5 text-gray-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">Company Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter your company name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Registration Number
                  </label>
                  <input
                    type="text"
                    id="registrationNumber"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    placeholder="Enter registration number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Engagement Scope Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <Clipboard className="h-5 w-5 text-gray-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">Engagement Scope</h2>
              </div>
              
              <div className="mb-4">
                <label htmlFor="serviceSelect" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Primary Service
                </label>
                <select
                  id="serviceSelect"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select primary service...</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
                <p className="mt-1 text-sm text-gray-500">Choose the primary service you need from the auditor</p>
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message to Auditor
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  maxLength={500}
                  placeholder="Describe your specific requirements, timeline, and any other relevant details..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
                <div className="mt-1 text-right text-sm text-gray-500">
                  {message.length}/500
                </div>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-100">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-blue-600">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  PDF, DOCX up to 10MB
                </p>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex justify-end">

              <div className="   flex space-x-6">
              <button className="text-gray-700 hover:text-gray-900 font-medium">
                Cancel
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                Send Request
                <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              </div>
            </div>
          </div>

          {/* Right Column - Info Panels */}
          <div className="space-y-6">
            {/* How It Works Card */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Info className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">How It Works</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
                      1
                    </div>
                    <div className="h-full w-0.5 bg-blue-200 mt-1"></div>
                  </div>
                  <div className="pb-4">
                    <h4 className="font-medium text-gray-900">Request Sent</h4>
                    <p className="text-sm text-gray-600">Auditor receives your engagement request</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
                      2
                    </div>
                    <div className="h-full w-0.5 bg-blue-200 mt-1"></div>
                  </div>
                  <div className="pb-4">
                    <h4 className="font-medium text-gray-900">Auditor Review</h4>
                    <p className="text-sm text-gray-600">Auditor reviews and responds to your request</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Engagement Letter</h4>
                    <p className="text-sm text-gray-600">Finalize terms and sign engagement letter</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex">
                
              <div className="flex items-start">
                <div>
                    <AlertTriangle className="h-30 w-30 text-orange-500 mt-0.5 mr-2" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Important Notice</h3>
                  <p className="text-[18px] text-gray-500">
                  By submitting this request you must authorize the selected auditor to access your basic company information registration with the <span className="font-medium">Office of the Registrar of Companies (ORC)</span>  for conflict check and KYC purposes as mandated by <span className="font-medium">ICAG</span>    regulations
                  </p>
                </div>
              </div>
            </div>

            {/* Help Link */}
            <div className=" p-6 flex flex-row items-center justify-center">
              <div className="flex items-center">
                <HelpCircle className="h-5 w-5 text-white mr-2 fill-blue-500" />
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Need assistance?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}