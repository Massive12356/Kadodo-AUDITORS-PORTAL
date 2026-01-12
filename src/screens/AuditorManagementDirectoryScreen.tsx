import React, { useState, useEffect, useRef } from 'react';
import { Download, Plus, Users, Shield, FileText, Search, ChevronDown, Filter, X, Mail, Edit3, RotateCcw } from 'lucide-react';

interface ComplianceHistory {
  id: number;
  event: string;
  date: string;
  source: string;
}

interface Auditor {
  id: number;
  name: string;
  email: string;
  license: string;
  firm: string;
  status: string;
  lastRenewed: string;
  initials: string;
  complianceHistory: ComplianceHistory[];
}

const AuditorManagementDirectoryScreen: React.FC = () => {
  const [isDetailPanelOpen, setIsDetailPanelOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState<number | null>(null);
  const [showChangeStatusModal, setShowChangeStatusModal] = useState(false);
  const [selectedAuditor, setSelectedAuditor] = useState<any>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Mock data for stats
  const stats = [
    {
      title: "TOTAL REGISTERED",
      value: "1,240",
      badge: "+2.4% this year",
      icon: Users,
      iconColor: "text-blue-500",
      badgeColor: "text-green-600"
    },
    {
      title: "GOOD STANDING",
      value: "1,150",
      badge: "92.7% Compliant",
      icon: Shield,
      iconColor: "text-green-500",
      badgeColor: "text-green-600"
    },
    {
      title: "PENDING REVIEWS",
      value: "12",
      badge: "Requires Action",
      icon: FileText,
      iconColor: "text-orange-500",
      badgeColor: "text-red-600"
    }
  ];

  // Mock data for auditors
  const [auditors, setAuditors] = useState([
    {
      id: 1,
      name: "Kwame Mensah",
      email: "kwame.mensah@example.com",
      license: "ICAG-2023-001",
      firm: "Mensah & Associates",
      status: "Good Standing",
      lastRenewed: "Jan 15, 2024",
      initials: "KM",
      complianceHistory: [
        { id: 1, event: "Renewal Approved", date: "Jan 15, 2024", source: "ADMIN" },
        { id: 2, event: "CPD Credits Verified", date: "Dec 20, 2023", source: "SYSTEM" },
        { id: 3, event: "Registry Entry Created", date: "Nov 05, 2023", source: "ADMIN" }
      ]
    },
    {
      id: 2,
      name: "Adjoa Asante",
      email: "adjoa.asante@example.com",
      license: "ICAG-2023-002",
      firm: "Asante & Partners",
      status: "Lapsed",
      lastRenewed: "Dec 03, 2023",
      initials: "AA",
      complianceHistory: [
        { id: 1, event: "Renewal Approved", date: "Jan 15, 2024", source: "ADMIN" },
        { id: 2, event: "CPD Credits Verified", date: "Dec 20, 2023", source: "SYSTEM" },
        { id: 3, event: "Registry Entry Created", date: "Nov 05, 2023", source: "ADMIN" }
      ]
    },
    {
      id: 3,
      name: "Yaw Boakye",
      email: "yaw.boakye@example.com",
      license: "ICAG-2023-003",
      firm: "Boakye Consulting",
      status: "Suspended",
      lastRenewed: "Oct 12, 2023",
      initials: "YB",
      complianceHistory: [
        { id: 1, event: "Renewal Approved", date: "Jan 15, 2024", source: "ADMIN" },
        { id: 2, event: "CPD Credits Verified", date: "Dec 20, 2023", source: "SYSTEM" },
        { id: 3, event: "Registry Entry Created", date: "Nov 05, 2023", source: "ADMIN" }
      ]
    },
    {
      id: 4,
      name: "Akosua Owusu",
      email: "akosua.owusu@example.com",
      license: "ICAG-2023-004",
      firm: "Owusu & Co.",
      status: "Good Standing",
      lastRenewed: "Feb 28, 2024",
      initials: "AO",
      complianceHistory: [
        { id: 1, event: "Renewal Approved", date: "Jan 15, 2024", source: "ADMIN" },
        { id: 2, event: "CPD Credits Verified", date: "Dec 20, 2023", source: "SYSTEM" },
        { id: 3, event: "Registry Entry Created", date: "Nov 05, 2023", source: "ADMIN" }
      ]
    }
  ]);

  // Function to update auditor status
  const updateAuditorStatus = (auditorId: number, newStatus: string, reason: string) => {
    setAuditors(prevAuditors => 
      prevAuditors.map(auditor => 
        auditor.id === auditorId 
          ? { 
              ...auditor, 
              status: newStatus, 
              lastRenewed: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
              complianceHistory: [
                {
                  id: (auditor.complianceHistory || []).length + 1,
                  event: `Status Changed to ${newStatus}`,
                  date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
                  source: "ADMIN"
                },
                ...(auditor.complianceHistory || [])
              ]
            } 
          : auditor
      )
    );
  };



  // Filter auditors based on search term
  const filteredAuditors = auditors.filter(auditor => 
    auditor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    auditor.license.toLowerCase().includes(searchTerm.toLowerCase()) ||
    auditor.firm.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Auditor Management Directory</h1>
            <p className="text-gray-600 mt-2">Manage and verify professional standing for all registered auditors in Ghana.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <Download className="h-4 w-4" />
              Export Registry
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
              <Plus className="h-4 w-4" />
              Add New Auditor
            </button>
          </div>
        </div>

        {/* Summary Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-sm font-medium mt-1 ${stat.badgeColor}`}>{stat.badge}</p>
                </div>
                <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, license number, or firm…"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8">
                  <option>All Statuses</option>
                  <option>Good Standing</option>
                  <option>Lapsed</option>
                  <option>Suspended</option>
                </select>
                <ChevronDown className="h-4 w-4 text-gray-500 absolute right-2.5 top-2.5" />
              </div>
              <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors">
                <Filter className="h-4 w-4" />
                Advanced Filters
              </button>
            </div>
          </div>
        </div>

        {/* Auditor Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Auditor Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">License #</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Firm Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Renewed</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredAuditors.map((auditor) => (
                  <tr 
                    key={auditor.id} 
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium">
                          {auditor.initials}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{auditor.name}</div>
                          <div className="text-sm text-gray-500">{auditor.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">{auditor.license}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{auditor.firm}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        auditor.status === 'Good Standing' 
                          ? 'bg-green-100 text-green-800' 
                          : auditor.status === 'Lapsed' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-red-100 text-red-800'
                      }`}>
                        {auditor.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{auditor.lastRenewed}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 relative">
                      <button 
                        className="text-gray-500 hover:text-gray-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDropdown(showDropdown === auditor.id ? null : auditor.id);
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                      </button>
                      
                      {showDropdown === auditor.id && (
                        <div 
                          ref={dropdownRef}
                          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200"
                        >
                          <div className="py-1">
                            <button 
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowDropdown(null);
                                setSelectedAuditor(auditor);
                                setIsDetailPanelOpen(true);
                              }}
                            >
                              View Details
                            </button>
                            <button 
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowDropdown(null);
                                setSelectedAuditor(auditor);
                                setShowChangeStatusModal(true);
                              }}
                            >
                              Change Status
                            </button>
                            <button 
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowDropdown(null);
                                // Handle edit action
                              }}
                            >
                              Edit
                            </button>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="bg-gray-50 px-6 py-3 flex flex-col sm:flex-row items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredAuditors.length}</span> of <span className="font-medium">{filteredAuditors.length}</span> auditors
            </div>
            <div className="flex items-center space-x-2 mt-2 sm:mt-0">
              <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 rounded-md border border-blue-500 bg-blue-50 text-blue-600 font-medium">
                1
              </button>
              <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Change Status Modal */}
      {showChangeStatusModal && selectedAuditor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Change Status</h3>
              <p className="text-sm text-gray-500 mt-1">Change status for {selectedAuditor.name}</p>
            </div>
            <div className="px-6 py-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Status</label>
                <div className="flex items-center">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    selectedAuditor.status === 'Good Standing' 
                      ? 'bg-green-100 text-green-800' 
                      : selectedAuditor.status === 'Lapsed' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-red-100 text-red-800'
                  }`}>
                    {selectedAuditor.status}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">New Status</label>
                <select name="status-select" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="Good Standing">Good Standing</option>
                  <option value="Lapsed">Lapsed</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
                <textarea 
                  name="status-reason"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Enter reason for status change..."
                ></textarea>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4 rounded-b-lg flex justify-end space-x-3">
              <button
                onClick={() => setShowChangeStatusModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const statusSelect = document.querySelector('select[name="status-select"]') as HTMLSelectElement;
                  const reasonTextarea = document.querySelector('textarea[name="status-reason"]') as HTMLTextAreaElement;
                  
                  const newStatus = statusSelect?.value || '';
                  const reason = reasonTextarea?.value || 'Status change';
                  
                  if (selectedAuditor && newStatus) {
                    updateAuditorStatus(selectedAuditor.id, newStatus, reason);
                  }
                  
                  setShowChangeStatusModal(false);
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Detail Panel - Center Modal */}
      {isDetailPanelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Auditor Profile</h2>
              <button
                onClick={() => setIsDetailPanelOpen(false)}
                className="h-7 flex items-center justify-center rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Profile Section */}
              <div className="mt-2">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0 h-20 w-20 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium text-xl">
                    {selectedAuditor ? selectedAuditor.initials : 'N/A'}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900">{selectedAuditor ? selectedAuditor.name : 'N/A'}</h3>
                  <p className="text-sm text-gray-500">Licensed Auditor (Practitioner)</p>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs font-medium text-gray-500 uppercase">License No.</p>
                    <p className="mt-1 text-sm font-medium">{selectedAuditor ? selectedAuditor.license : 'N/A'}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs font-medium text-gray-500 uppercase">Renewal Date</p>
                    <p className="mt-1 text-sm font-medium">{selectedAuditor ? selectedAuditor.lastRenewed : 'N/A'}</p>
                  </div>
                </div>

                {/* Compliance History Timeline */}
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-gray-900">Compliance History</h4>
                  <div className="mt-4 space-y-4">
                    {(selectedAuditor?.complianceHistory || []).map((entry: ComplianceHistory) => (
                      <div key={entry.id} className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-0.5 h-full bg-gray-200"></div>
                        </div>
                        <div className="pb-4 flex-1">
                          <p className="text-sm font-medium text-gray-900">{entry.event}</p>
                          <p className="text-xs text-gray-500">{entry.date} • {entry.source}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    <Mail className="h-4 w-4" />
                    Email
                  </button>
                  <button className="w-full flex items-center justify-center bg-green-600 gap-2 px-4 py-2 border border-gray-300 rounded-lg text-green-100 hover:bg-green-800 transition-colors font-bold">
                    <Edit3 className="h-4 w-4 font-bold" />
                    Edit Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditorManagementDirectoryScreen;