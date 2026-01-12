import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Shield, 
  Users, 
  Building, 
  FileText,
  BarChart,
  LogOut,
  User
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useStore } from '../store/useStore';

const IcagSidebar = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const location = useLocation();
  const setIsAuthenticated = useStore((state) => state.setIsAuthenticated);
  const setUserType = useStore((state) => state.setUserType);

  const handleLogout = () => {
    // Clear authentication status
    setIsAuthenticated(false);
    setUserType(null);
    // Show confirmation
    toast.success('You have been logged out');
    // Navigate to home page
    navigate('/');
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    handleLogout();
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-900 rounded flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h1 className="ml-3 text-xl font-bold text-gray-900">ICAG Portal</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {/* Dashboard */}
        <Link
          to="/icag-dashboard"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
            isActive('/icag-dashboard')
              ? 'bg-blue-50 text-blue-700'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Home className="w-5 h-5" />
          Dashboard
        </Link>

        {/* Manage Auditors */}
        <Link
          to="/manage-auditors"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
            isActive('/manage-auditors')
              ? 'bg-blue-50 text-blue-700'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Users className="w-5 h-5" />
          Manage Auditors
        </Link>

        {/* Manage Companies */}
        <Link
          to="/manage-companies"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
            isActive('/manage-companies')
              ? 'bg-blue-50 text-blue-700'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Building className="w-5 h-5" />
          Companies Directory
        </Link>

        {/* Compliance Reports */}
        {/* <Link
          to="/compliance-reports"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
            isActive('/compliance-reports')
              ? 'bg-blue-50 text-blue-700'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <FileText className="w-5 h-5" />
          Compliance Reports
        </Link> */}

        {/* Analytics */}
        {/* <Link
          to="/analytics"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
            isActive('/analytics')
              ? 'bg-blue-50 text-blue-700'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <BarChart className="w-5 h-5" />
          Analytics
        </Link> */}
      </nav>

      {/* Bottom section for profile */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gray-200 rounded-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">ICAG Admin</p>
            <p className="text-xs text-gray-500 truncate">admin@icag.org</p>
          </div>
        </div>
        <button
          onClick={handleLogoutClick}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-600 hover:bg-red-50 w-full text-left"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Confirm Logout</h3>
              <p className="text-gray-600 mb-4">Are you sure you want to log out? You will need to sign in again to access your account.</p>
            </div>
            <div className="bg-gray-50 px-6 py-4 rounded-b-lg flex justify-end space-x-3">
              <button
                onClick={cancelLogout}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IcagSidebar;