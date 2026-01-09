import { useStore } from '../store/useStore';
import { Link } from 'react-router-dom';
import IcagLayout from '../components/IcagLayout';

export default function IcagDashboardScreen() {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const userType = useStore((state) => state.userType);

  // Check if user is authenticated and is an ICAG user
  if (!isAuthenticated || userType !== 'icag') {
    // In a real app, redirect to login
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-6">Please log in as an ICAG user to access this page.</p>
          <Link 
            to="/icag-login" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Go to ICAG Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ICAG Dashboard</h1>
          <p className="text-gray-600">Monitor and manage auditors and compliance across the industry.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Summary cards */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Total Auditors</h3>
            <p className="text-3xl font-bold text-blue-600">1,245</p>
            <p className="text-sm text-gray-500 mt-1">Registered auditors</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Verified Auditors</h3>
            <p className="text-3xl font-bold text-green-600">1,089</p>
            <p className="text-sm text-gray-500 mt-1">Currently verified</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Companies</h3>
            <p className="text-3xl font-bold text-purple-600">5,678</p>
            <p className="text-sm text-gray-500 mt-1">Under audit</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Pending Reviews</h3>
            <p className="text-3xl font-bold text-amber-600">42</p>
            <p className="text-sm text-gray-500 mt-1">Awaiting approval</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Compliance Issues</h3>
            <p className="text-3xl font-bold text-red-600">18</p>
            <p className="text-sm text-gray-500 mt-1">Active violations</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">License Expirations</h3>
            <p className="text-3xl font-bold text-orange-600">27</p>
            <p className="text-sm text-gray-500 mt-1">Due this month</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div>
                <p className="font-medium text-gray-900">Auditor license renewed: John Doe</p>
                <p className="text-sm text-gray-500">10 minutes ago</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Success
              </span>
            </div>
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div>
                <p className="font-medium text-gray-900">New company registered: Tech Innovations Inc.</p>
                <p className="text-sm text-gray-500">1 hour ago</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                New
              </span>
            </div>
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div>
                <p className="font-medium text-gray-900">Compliance violation reported: ABC Corp</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Violation
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Auditor suspended: Jane Smith</p>
                <p className="text-sm text-gray-500">5 hours ago</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                Suspended
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}