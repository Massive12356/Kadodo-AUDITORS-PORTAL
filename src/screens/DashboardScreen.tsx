import { useState } from 'react';
import { Search, ChevronDown, Table, CreditCard, Building2, Shield, AlertCircle, Clock, Users } from 'lucide-react';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Layout from '../components/Layout';

export default function DashboardScreen() {
  const navigate = useNavigate();
  const appointments = useStore((state) => state.appointments);

  // Calculate summary data
  const totalCompanies = appointments.length;
  const activeLicenses = appointments.filter(app => app.status === 'Active').length;
  const licensesDueForRenewal = appointments.filter(app => 
    app.status === 'Pending' || app.status === 'Expired'
  ).length;
  const overdueLicenses = appointments.filter(app => app.status === 'Expired').length;
  const pendingAuditorRotations = 2; // Mock data - in real app, this would come from store

  // Mock recent activity data
  const recentActivity = [
    { id: 1, action: 'License renewed', company: 'Tech Innovations Inc.', date: '2023-10-26' },
    { id: 2, action: 'Auditor rotation completed', company: 'GreenLeaf Organics', date: '2023-10-25' },
    { id: 3, action: 'New consent added', company: 'Quantum Solutions', date: '2023-10-24' },
  ];

  // Mock upcoming renewals
  const upcomingRenewals = [
    { id: 1, company: 'Starlight Ventures', date: '2023-11-15' },
    { id: 2, company: 'Oceanic Goods', date: '2023-12-01' },
  ];

  // Mock auditor rotations due
  const rotationsDue = [
    { id: 1, company: 'ABC Limited', date: '2023-11-30' },
    { id: 2, company: 'XYZ Corporation', date: '2023-12-15' },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome, Mintah JR!</h2>
            <p className="text-gray-600">Here's your system overview and key metrics.</p>
          </div>

          {/* Summary Cards (Top) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Companies</p>
                  <p className="text-2xl font-semibold text-gray-900">{totalCompanies}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-green-100">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Licenses</p>
                  <p className="text-2xl font-semibold text-gray-900">{activeLicenses}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-yellow-100">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Licenses Due for Renewal</p>
                  <p className="text-2xl font-semibold text-gray-900">{licensesDueForRenewal}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-red-100">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Overdue Licenses</p>
                  <p className="text-2xl font-semibold text-gray-900">{overdueLicenses}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-purple-100">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pending Auditor Rotations</p>
                  <p className="text-2xl font-semibold text-gray-900">{pendingAuditorRotations}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-indigo-100">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Compliance Rate</p>
                  <p className="text-2xl font-semibold text-gray-900">85%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Regulatory Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Upcoming License Renewals */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming License Renewals</h3>
              <div className="space-y-4">
                {upcomingRenewals.map((renewal) => (
                  <div key={renewal.id} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                    <div>
                      <p className="font-medium text-gray-900">{renewal.company}</p>
                      <p className="text-sm text-gray-500">Due: {renewal.date}</p>
                    </div>
                    <button 
                      onClick={() => navigate('/license-renewal')}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Auditor Rotations Due */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Auditor Rotations Due</h3>
              <div className="space-y-4">
                {rotationsDue.map((rotation) => (
                  <div key={rotation.id} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                    <div>
                      <p className="font-medium text-gray-900">{rotation.company}</p>
                      <p className="text-sm text-gray-500">Due: {rotation.date}</p>
                    </div>
                    <button 
                      onClick={() => navigate('/auditor-rotation')}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentActivity.map((activity) => (
                    <tr key={activity.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {activity.action}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {activity.company}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {activity.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
