import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  CheckCircle, 
  Briefcase, 
  MapPin, 
  Phone, 
  Mail, 
  Download, 
  Share2, 
  Calendar,
  Eye,
  Star,
  Award,
  Building2
} from 'lucide-react';
import CompanyLayout from '../components/CompanyLayout';
import { Link } from 'react-router-dom';
import img1 from '../assets/img3.jpg'

export default function AuditorProfileScreen() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data for the auditor
  const auditor = {
    id: 1,
    name: 'Kwame Mensah',
    title: 'Managing Partner',
    firm: 'Mensah & Associates',
    photo: img1,
    icagNumber: 'ICAG-2023-001',
    orcNumber: 'ORC-AUD-98765',
    status: 'Active & Compliant',
    experience: 12,
    rating: 4.8,
    reviewCount: 24,
    officeAddress: '123 Financial District, Accra, Ghana',
    phone: '+233 302 123 456',
    email: 'contact@mensahassociates.com',
    summary: 'Kwame Mensah is a highly experienced chartered accountant with over 12 years of expertise in statutory audits, tax advisory, and forensic accounting. He has served clients across multiple industries including banking, manufacturing, and agriculture. His commitment to professional excellence and compliance with ICAG standards makes him a trusted partner for corporate engagements.',
    services: [
      'Statutory Audit',
      'Tax Advisory',
      'Forensic Accounting',
      'Internal Control Review',
      'Financial Reporting'
    ],
    industries: [
      'Banking & Finance',
      'Agriculture',
      'Retail & FMCG',
      'Manufacturing'
    ],
    categorization: 'A1',
    icagMembership: {
      status: 'Active',
      registrationNumber: 'ICAG-2023-001',
      memberSince: '2010',
      expiryDate: '2025-12-31'
    },
    orcLicense: {
      status: 'Valid',
      licenseNumber: 'ORC-AUD-98765',
      expiryDate: '2024-08-15'
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'credentials', label: 'Credentials & Licenses' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'reviews', label: 'Reviews' }
  ];

  return (
      <div className="max-w-7xl mx-auto p-6">
        {/* Top Profile Header Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex items-center mb-4 md:mb-0 md:mr-6">
              <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-200">
                <img 
                  src={auditor.photo} 
                  alt={auditor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold text-gray-900">{auditor.name}, CA</h1>
                  <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    ICAG Verified
                  </span>
                </div>
                <p className="text-gray-600 mt-1">{auditor.title} at {auditor.firm}</p>
                <div className="flex flex-wrap items-center text-sm text-gray-500 mt-2 gap-x-3">
                  <span>ICAG No: {auditor.icagNumber}</span>
                  <span>•</span>
                  <span>ORC No: {auditor.orcNumber}</span>
                </div>
                <div className="mt-2">
                  <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                    Cat: {auditor.categorization}
                  </span>
                </div>
                <div className="flex items-center text-sm mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  <span className="text-green-600 font-medium">Status: {auditor.status}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-3 space-y-3 lg:space-y-0 ml-auto">
              <Link to={`/request-engagement/${auditor.id}`}>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Briefcase className="h-4 w-4 mr-2" />
                Request Engagement
              </button>
              </Link>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                <Download className="h-4 w-4 mr-2" />
                Download Profile
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column (Primary Content) */}
              <div className="lg:col-span-2 space-y-6">
                {/* Professional Summary Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Professional Summary</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {auditor.summary}
                  </p>
                </div>

                {/* Credentials Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* ICAG Membership Card */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center">
                      <Award className="h-8 w-8 text-blue-500 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">ICAG Membership</h3>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status</span>
                        <span className="font-medium text-green-600">{auditor.icagMembership.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Registration No</span>
                        <span className="font-medium">{auditor.icagMembership.registrationNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Member Since</span>
                        <span className="font-medium">{auditor.icagMembership.memberSince}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Expiry Date</span>
                        <span className="font-medium">{auditor.icagMembership.expiryDate}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span className="text-sm">Valid & Verified</span>
                    </div>
                  </div>

                  {/* ORC License Card */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center">
                      <Briefcase className="h-8 w-8 text-blue-500 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">ORC Crenentials</h3>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status</span>
                        <span className="font-medium text-green-600">{auditor.orcLicense.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Registration No</span>
                        <span className="font-medium">{auditor.orcLicense.licenseNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Expiry Date</span>
                        <span className="font-medium">{auditor.orcLicense.expiryDate}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span className="text-sm">Valid & Verified</span>
                    </div>
                  </div>
                </div>

                {/* Services & Industry Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="grid grid-cols-1 gap-6">
                    {/* Services Offered */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Services Offered</h3>
                      <div className="flex flex-wrap gap-2">
                        {auditor.services.map((service, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Industry Focus */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Industry Focus</h3>
                      <div className="flex flex-wrap gap-2">
                        {auditor.industries.map((industry, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-300"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Sidebar) */}
              <div className="space-y-6">
                {/* Contact Information Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="bg-gray-100 rounded-lg h-40 mb-4 overflow-hidden">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9945555938057!2d-0.2043431911913707!3d5.567820294389422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a79b5000001%3A0xf6ce5c4512f75bbf!2sSuku%20Technologies!5e0!3m2!1sen!2sgh!4v1767886462038!5m2!1sen!2sgh" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Office Address</p>
                        <p className="text-sm text-gray-600">{auditor.officeAddress}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Phone</p>
                        <p className="text-sm text-gray-600 flex items-center">
                          {auditor.phone.substring(0, 8)} 
                          <span className="ml-1 text-blue-600 hover:text-blue-800 cursor-pointer text-xs">(Request to view)</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Email</p>
                        <p className="text-sm text-gray-600">{auditor.email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability Card */}
                <div className="bg-green-50 rounded-xl border border-green-200 p-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-green-800">Availability</h3>
                  </div>
                  <p className="mt-2 text-green-700">
                    Open to new engagements
                  </p>
                </div>

                {/* Quick Actions Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Download className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-gray-700">Download CV</span>
                      </div>
                      <Eye className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Briefcase className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-gray-700">Save to Shortlist</span>
                      </div>
                      <Eye className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Share2 className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-gray-700">Share Profile</span>
                      </div>
                      <Eye className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}