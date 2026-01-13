import React, { useState } from 'react';
import { Building, UserSearch, AlertTriangle, RotateCcw, Filter, Download, ChevronDown, MoreVertical } from 'lucide-react';

const CompanyOversightModuleScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All Entities');

  // Mock data for metrics
  const metrics = [
    {
      title: "Total Companies",
      value: "12,450",
      indicator: "+2.5% vs last month",
      icon: Building,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-100",
      indicatorColor: "text-green-500"
    },
    {
      title: "Active Auditors",
      value: "1,840",
      indicator: "-1.2% vs last month",
      icon: UserSearch,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-100",
      indicatorColor: "text-red-500"
    },
    {
      title: "Expired Licenses",
      value: "24",
      indicator: "-5.0% urgent actions",
      icon: AlertTriangle,
      iconColor: "text-red-500",
      bgColor: "bg-red-100",
      indicatorColor: "text-red-500"
    },
    {
      title: "Rotation Due",
      value: "156",
      indicator: "+8.4% next 90 days",
      icon: RotateCcw,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-100",
      indicatorColor: "text-green-500"
    }
  ];

  // Mock data for companies
  const companies = [
    {
      id: 1,
      name: "Tech Solutions Ltd",
      orc: "ORC: GH-123456-A",
      auditor: "Kwame Mensah",
      firm: "Mensah & Associates",
      license: "ICAG-2023-001",
      rotationCycle: { current: 3, total: 6, status: "on track" },
      status: "Active",
      statusIcon: "check"
    },
    {
      id: 2,
      name: "Finance Corp Ghana",
      orc: "ORC: GH-789012-B",
      auditor: "Adjoa Asante",
      firm: "Asante & Partners",
      license: "ICAG-2023-002",
      rotationCycle: { current: 1, total: 6, status: "on track" },
      status: "Active",
      statusIcon: "check"
    },
    {
      id: 3,
      name: "Mining Ventures Inc",
      orc: "ORC: GH-345678-C",
      auditor: "Yaw Boakye",
      firm: "Boakye Consulting",
      license: "ICAG-2023-003",
      rotationCycle: { current: 5, total: 6, status: "overdue" },
      status: "Expired",
      statusIcon: "alert"
    },
    {
      id: 4,
      name: "Energy Solutions Co",
      orc: "ORC: GH-901234-D",
      auditor: "Akosua Owusu",
      firm: "Owusu & Co.",
      license: "ICAG-2023-004",
      rotationCycle: { current: 4, total: 6, status: "due soon" },
      status: "Active",
      statusIcon: "warning"
    },
    {
      id: 5,
      name: "Telecom Services Ltd",
      orc: "ORC: GH-567890-E",
      auditor: "Kofi Adu",
      firm: "Adu & Associates",
      license: "ICAG-2023-005",
      rotationCycle: { current: 2, total: 6, status: "on track" },
      status: "Active",
      statusIcon: "check"
    }
  ];

  // Function to get status icon based on type
  const getStatusIcon = (iconType: string) => {
    switch(iconType) {
      case 'check':
        return <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>;
      case 'warning':
        return <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>;
      case 'alert':
        return <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
      default:
        return null;
    }
  };

  // Function to get progress bar width based on rotation cycle
  const getProgressWidth = (current: number, total: number) => {
    return `${(current / total) * 100}%`;
  };

  // Function to get progress label based on status
  const getProgressLabel = (cycle: { current: number, total: number, status: string }) => {
    if (cycle.status === 'overdue') return 'Rotation Overdue';
    if (cycle.status === 'due soon') return 'Rotation Due (3m)';
    return `Year ${cycle.current} of ${cycle.total}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Companies Directory</h1>
            <p className="text-gray-600 mt-2">Monitor auditor-company relationships and regulatory compliance across Ghana.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <Filter className="h-4 w-4" />
              Filters
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              Export Data
            </button>
          </div>
        </div>

        {/* Summary Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                  <p className={`text-sm font-medium mt-1 ${metric.indicatorColor}`}>{metric.indicator}</p>
                </div>
                <div className={`${metric.bgColor} p-2 rounded-full`}>
                  <metric.icon className={`h-5 w-5 ${metric.iconColor}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            {['All Entities', 'Compliance Warnings', 'Lapsed Licenses', 'Pending Rotations'].map((tab) => (
              <button
                key={tab}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Data Table Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Details</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Auditor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ICAG License</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rotation Cycle</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {companies.map((company) => (
                  <tr key={company.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{company.name}</div>
                      <div className="text-sm text-gray-500">{company.orc}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                          {company.auditor.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{company.auditor}</div>
                          <div className="text-sm text-gray-500">{company.firm}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        company.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {company.license}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col items-start">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              company.rotationCycle.status === 'overdue' 
                                ? 'bg-red-500' 
                                : company.rotationCycle.status === 'due soon' 
                                  ? 'bg-orange-500' 
                                  : 'bg-blue-500'
                            }`} 
                            style={{ width: getProgressWidth(company.rotationCycle.current, company.rotationCycle.total) }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {getProgressLabel(company.rotationCycle)}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusIcon(company.statusIcon)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="bg-gray-50 px-6 py-3 flex flex-col sm:flex-row items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">12,450</span> results
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
              <span className="px-3 py-1 text-gray-500">...</span>
              <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                1245
              </button>
              <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOversightModuleScreen;