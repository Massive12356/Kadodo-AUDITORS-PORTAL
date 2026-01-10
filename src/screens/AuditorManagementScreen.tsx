import { useState, useEffect } from 'react';
import { UserPlus, Users, Clock, AlertTriangle, Search, Filter, ChevronLeft, ChevronRight, BadgeCheck, CircleDashed, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Eye, Star } from 'lucide-react';
import CompanyLayout from '../components/CompanyLayout';

export default function AuditorManagementScreen() {
  const [activeTab, setActiveTab] = useState('active');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    status: '',
    licenseType: ''
  });
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
    
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdownId !== null) {
        const target = event.target as HTMLElement;
        if (!target.closest('.dropdown-container')) {
          setOpenDropdownId(null);
        }
      }
    };
  
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openDropdownId]);
    
  const auditorsData = [
    {
      id: 1,
      name: 'Kwame Mensah',
      firm: 'Mensah & Associates',
      license: 'ICAG-2023-001',
      engagementDate: '2023-10-15',
      status: 'active',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      category: 'A1'
    },
    {
      id: 2,
      name: 'Adjoa Asante',
      firm: 'Asante & Partners',
      license: 'ICAG-2023-002',
      engagementDate: '2023-11-20',
      status: 'pending',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      category: 'B1'
    },
    {
      id: 3,
      name: 'Kofi Adu',
      firm: 'Adu Chartered Accountants',
      license: 'ICAG-2023-003',
      engagementDate: '2023-12-05',
      status: 'action-required',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      category: 'C'
    },
    {
      id: 4,
      name: 'Akosua Owusu',
      firm: 'Owusu & Co. Chartered Accountants',
      license: 'ICAG-2023-004',
      engagementDate: '2023-09-10',
      status: 'active',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      category: 'A'
    },
    {
      id: 5,
      name: 'Yaw Boakye',
      firm: 'Boakye Audit Solutions',
      license: 'ICAG-2023-005',
      engagementDate: '2023-12-18',
      status: 'pending',
      avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
      category: 'D'
    },
    {
      id: 6,
      name: 'Esi Asiedu',
      firm: 'Asiedu Financial Consultants',
      license: 'ICAG-2023-006',
      engagementDate: '2023-08-22',
      status: 'active',
      avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
      category: 'A1'
    },
    {
      id: 7,
      name: 'Kwaku Danso',
      firm: 'Danso & Associates',
      license: 'ICAG-2023-007',
      engagementDate: '2023-11-05',
      status: 'action-required',
      avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
      category: 'B'
    }
  ];

  // Stats data is calculated dynamically based on auditorsData
  const statsData = [
    { title: 'Active Auditors', value: auditorsData.filter(auditor => auditor.status === 'active').length, icon: Users },
    { title: 'Pending Approvals', value: auditorsData.filter(auditor => auditor.status === 'pending').length, icon: Clock },
    { title: 'Action Required', value: auditorsData.filter(auditor => auditor.status === 'action-required').length, icon: AlertTriangle }
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

  // Filter auditors based on search term, active tab, and additional filters
  const filteredAuditors = auditorsData.filter(auditor => {
    const matchesSearch = 
      searchTerm === '' ||
      auditor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      auditor.firm.toLowerCase().includes(searchTerm.toLowerCase()) ||
      auditor.license.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter based on active tab
    let matchesTab = true;
    if (activeTab === 'active') {
      matchesTab = auditor.status === 'active';
    } else if (activeTab === 'pending') {
      matchesTab = auditor.status === 'pending';
    } else if (activeTab === 'history') {
      // For history, we could show all or different data - for now showing all
      matchesTab = true;
    }
    
    // Filter based on additional filters
    const matchesStatusFilter = filters.status === '' || auditor.status === filters.status;
    
    return matchesSearch && matchesTab && matchesStatusFilter;
  });

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
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative">
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
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
          <Filter className="h-5 w-5 mr-2" />
          Filter
        </button>
        
        {/* Filter Dropdown */}
        {showFilters && (
          <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-3">Filters</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={filters.status}
                    onChange={(e) => setFilters({...filters, status: e.target.value})}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Statuses</option>
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="action-required">Action Required</option>
                  </select>
                </div>
                
                <div className="flex space-x-3 pt-2">
                  <button
                    onClick={() => {
                      setFilters({status: '', licenseType: ''});
                      setShowFilters(false);
                    }}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Auditor Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Auditor</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">License & Category</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Engagement Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAuditors.length > 0 ? (
                filteredAuditors.map((auditor) => (
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
                      <div className="text-sm text-gray-500">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                          Cat: {auditor.category}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {auditor.engagementDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(auditor.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="relative">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDropdownId(openDropdownId === auditor.id ? null : auditor.id);
                          }}
                          className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </button>
                        
                        {openDropdownId === auditor.id && (
                          <div className="dropdown-container absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                            <div className="py-1">
                              <Link 
                                to={`/auditor-profile/${auditor.id}`} 
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                onClick={() => setOpenDropdownId(null)}
                              >
                                <Eye className="h-4 w-4 mr-2" /> View Profile
                              </Link>
                              <Link 
                                to={`/review-auditor/${auditor.id}`} 
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                onClick={() => setOpenDropdownId(null)}
                              >
                                <Star className="h-4 w-4 mr-2" /> Review
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    No auditors found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Table Footer */}
        <div className="bg-gray-50 px-6 py-3 flex flex-col sm:flex-row items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredAuditors.length}</span> of <span className="font-medium">{filteredAuditors.length}</span> results
          </div>
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <button className="p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50" disabled>
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50" disabled>
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