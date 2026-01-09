import { useState } from 'react';
import { UserPlus, Users, Clock, AlertTriangle, Search, Filter, ChevronLeft, ChevronRight, BadgeCheck, CircleDashed, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import CompanyLayout from '../components/CompanyLayout';

export default function AuditorManagementScreen() {
  const [activeTab, setActiveTab] = useState('active');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for the dashboard
  const statsData = [
    { title: 'Active Auditors', value: 12, icon: Users },
    { title: 'Pending Approvals', value: 3, icon: Clock },
    { title: 'Action Required', value: 2, icon: AlertTriangle }
  ];

  const auditorsData = [
    {
      id: 1,
      name: 'Kwame Mensah',
      firm: 'Mensah & Associates',
      license: 'ICAG-2023-001',
      engagementDate: '2023-10-15',
      status: 'active',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Adjoa Asante',
      firm: 'Asante & Partners',
      license: 'ICAG-2023-002',
      engagementDate: '2023-11-20',
      status: 'pending',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Kofi Adu',
      firm: 'Adu Chartered Accountants',
      license: 'ICAG-2023-003',
      engagementDate: '2023-12-05',
      status: 'action-required',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Active
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Pending Acceptance
          </span>
        );
      case 'action-required':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            Action Required
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Auditor Management</h1>
            <p className="text-gray-600 mt-2">Manage your auditor relationships and engagements</p>
          </div>
          <Link to="/auditor-search" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <UserPlus className="h-5 w-5 mr-2" />
            Find New Auditor
          </Link>
        </div>
      </div>

      {/* Summary Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-50 rounded-lg">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs Section */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('active')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'active' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Active Relationships
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'pending' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Pending Requests
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'history' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              History
            </button>
          </nav>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search auditors..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
          <Filter className="h-5 w-5 mr-2" />
          Filter
        </button>
      </div>

      {/* Auditor Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Auditor</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">ICAG License</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Engagement Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {auditorsData.map((auditor) => (
                <tr key={auditor.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full object-cover" src={auditor.avatar} alt={auditor.name} />
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center text-sm font-medium text-gray-900">
                          {auditor.name}
                          <span className="ml-2">
                            <BadgeCheck className="h-4 w-4 text-white fill-blue-500" />
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">{auditor.firm}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{auditor.license}</div>
                    <div className="text-sm text-green-600">Valid</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {auditor.engagementDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(auditor.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Table Footer */}
        <div className="bg-gray-50 px-6 py-3 flex flex-col sm:flex-row items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">3</span> results
          </div>
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <button className="p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <Info className="h-5 w-5 text-white fill-blue-500" />
          </div>
          <div className="ml-3">
            <h1 className="text-lg font-bold text-gray-900 mb-1">About Auditor Verification</h1>
            <p className="text-sm text-gray-700">
              All auditors listed on this platform are verified against the institute of chartered Accountants, Ghana (ICAG) database. Active <br /> engagement ensures compliance with the Companies Act,2019(Act992)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}