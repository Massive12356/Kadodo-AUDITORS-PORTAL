import React, { useState } from 'react';
import { Download, Plus, User, Check, Clock, AlertTriangle, ChevronDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';

const IcagExecutiveDashboardScreen: React.FC = () => {
  // Mock data for metrics
  const metrics = [
    {
      title: "Total Auditors",
      value: "1,284",
      percentage: "+5.2%",
      subtitle: "Total cumulative registrations",
      icon: User,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-100",
      percentColor: "text-green-500"
    },
    {
      title: "Good Standing",
      value: "942",
      percentage: "+2.1%",
      subtitle: "Verified and compliant with ICAG",
      icon: Check,
      iconColor: "text-green-500",
      bgColor: "bg-green-100",
      percentColor: "text-green-500"
    },
    {
      title: "Pending Renewals",
      value: "48",
      percentage: "Expires < 30d",
      subtitle: "Requires immediate administrative follow-up",
      icon: Clock,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-100",
      percentColor: "text-orange-500"
    },
    {
      title: "Fraud Alerts",
      value: "12",
      percentage: "High Priority",
      subtitle: "Reported unauthorized auditing activities",
      icon: AlertTriangle,
      iconColor: "text-red-500",
      bgColor: "bg-red-100",
      percentColor: "text-red-500"
    }
  ];

  // Mock data for recent verification requests
  const verificationRequests = [
    { id: 1, auditor: "Kwame & Associates", licenseId: "ICAG-2023-001", orcStatus: "Verified", icagStanding: "Compliant", lastSync: "2 min ago" },
    { id: 2, auditor: "Adams & Partners", licenseId: "ICAG-2023-002", orcStatus: "Pending", icagStanding: "Under Review", lastSync: "15 min ago" },
    { id: 3, auditor: "Asante & Co.", licenseId: "ICAG-2023-003", orcStatus: "Verified", icagStanding: "Compliant", lastSync: "1 hour ago" },
    { id: 4, auditor: "Boakye & Associates", licenseId: "ICAG-2023-004", orcStatus: "Rejected", icagStanding: "Non-compliant", lastSync: "3 hours ago" },
    { id: 5, auditor: "Danso & Partners", licenseId: "ICAG-2023-005", orcStatus: "Verified", icagStanding: "Compliant", lastSync: "5 hours ago" },
  ];

  // Mock data for charts
  const registrationData = [
    { month: "JAN", value: 180 },
    { month: "FEB", value: 220 },
    { month: "MAR", value: 190 },
    { month: "APR", value: 250 },
    { month: "MAY", value: 280 },
    { month: "JUN", value: 320 }
  ];

  const renewalData = [
    { month: "JAN", value: 100 },
    { month: "FEB", value: 120 },
    { month: "MAR", value: 110 },
    { month: "APR", value: 150 },
    { month: "MAY", value: 130 },
    { month: "JUN", value: 160 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">Administrator Portal</p>
            <h1 className="text-3xl font-bold text-gray-900 mt-1">ICAG Executive Dashboard</h1>
            <p className="text-gray-600 mt-2">System snapshot for <span className="font-bold text-black">October 24, 2023</span></p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <Download className="h-4 w-4" />
              Export Data
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
              <Plus className="h-4 w-4" />
              Register New Auditor
            </button>
          </div>
        </div>

        {/* Metrics Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                  <p className={`text-sm font-medium mt-1 ${metric.percentColor}`}>{metric.percentage}</p>
                </div>
                <div className={`${metric.bgColor} p-2 rounded-full`}>
                  <metric.icon className={`h-5 w-5 ${metric.iconColor}`} />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">{metric.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Auditor Registration Trend Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Auditor Registration Trend</h3>
                <p className="text-sm text-gray-600">New registrations over the last 6 months</p>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-bold text-gray-900 mr-2">1.2k</span>
                <span className="text-sm font-medium text-green-500">+12%</span>
              </div>
            </div>
            
            <div className="h-64 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={registrationData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 flex justify-end">
              <div className="flex items-center">
                <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Past 6 Months</option>
                  <option>Past 3 Months</option>
                  <option>Past Year</option>
                </select>
                <ChevronDown className="h-4 w-4 text-gray-500 ml-1" />
              </div>
            </div>
          </div>

          {/* License Renewal Pulse Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900">License Renewal Pulse</h3>
                <p className="text-sm text-gray-600">Monthly license renewal processing activity</p>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-bold text-gray-900 mr-2">480</span>
                <span className="text-sm font-medium text-green-500">+4%</span>
              </div>
            </div>
            
            <div className="h-64 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={renewalData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={0.3} fill="url(#colorGradient)" />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 flex justify-end">
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">RENEWALS</span>
            </div>
          </div>
        </div>

        {/* Recent Verification Requests Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Recent Verification Requests</h3>
              <p className="text-sm text-gray-600">Real-time auditor status updates from ORC integration</p>
            </div>
            <a href="#" className="text-blue-600 text-sm font-medium mt-2 md:mt-0 hover:text-blue-800">
              View All Requests
            </a>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Auditor / Firm</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">License ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORC Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ICAG Standing</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Sync</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {verificationRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.auditor}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.licenseId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        request.orcStatus === 'Verified' 
                          ? 'bg-green-100 text-green-800' 
                          : request.orcStatus === 'Pending' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-red-100 text-red-800'
                      }`}>
                        {request.orcStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        request.icagStanding === 'Compliant' 
                          ? 'bg-green-100 text-green-800' 
                          : request.icagStanding === 'Under Review' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-red-100 text-red-800'
                      }`}>
                        {request.icagStanding}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.lastSync}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IcagExecutiveDashboardScreen;