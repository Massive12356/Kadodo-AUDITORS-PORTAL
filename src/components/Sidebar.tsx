import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Shield, 
  FileSignature, 
  Building, 
  Plus, 
  ChevronDown, 
  Bell, 
  User,
  AlertTriangle,
  Calendar,
  RotateCcw,
  LogOut
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useStore } from '../store/useStore';

const Sidebar = () => {
  const navigate = useNavigate();
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showRegulatoryDropdown, setShowRegulatoryDropdown] = useState(false);
  const location = useLocation();
  const setIsAuthenticated = useStore((state) => state.setIsAuthenticated);
  
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  const handleLogout = () => {
    // Clear authentication status
    setIsAuthenticated(false);
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

  // Mock counts for notification badges - in a real app, these would come from the store
  const licenseRenewalCount = 3; // Due soon
  const auditorRotationCount = 1; // Overdue
  const licenseLapseCount = 2;    // Pending

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-900 rounded flex items-center justify-center">
            <Building className="w-6 h-6 text-white" />
          </div>
          <h1 className="ml-3 text-xl font-bold text-gray-900">ICAG</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {/* Core */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">Core</h3>
          <Link
            to="/dashboard"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
              isActive('/dashboard')
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Home className="w-5 h-5" />
            Dashboard
          </Link>
        </div>

        {/* Regulatory Actions */}
        <div className="mb-6">
          <button
            onClick={() => setShowRegulatoryDropdown(!showRegulatoryDropdown)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5" />
              <span>Regulatory Actions</span>
            </div>
            <ChevronDown 
              className={`w-4 h-4 transition-transform ${
                showRegulatoryDropdown ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          {showRegulatoryDropdown && (
            <div className="mt-1 ml-6 space-y-1">
              <Link
                to="/license-renewal"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                  isActive('/license-renewal')
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>License Renewal</span>
                {(licenseRenewalCount > 0) && (
                  <span 
                    className={`ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800`}
                  >
                    {licenseRenewalCount}
                  </span>
                )}
              </Link>
              
              <Link
                to="/auditor-rotation"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                  isActive('/auditor-rotation')
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <RotateCcw className="w-4 h-4" />
                <span>Auditor Rotation</span>
                {(auditorRotationCount > 0) && (
                  <span 
                    className={`ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      auditorRotationCount > 1 ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {auditorRotationCount}
                  </span>
                )}
              </Link>
              
              <Link
                to="/license-lapse"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                  isActive('/license-lapse')
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <AlertTriangle className="w-4 h-4" />
                <span>License Lapse</span>
                {(licenseLapseCount > 0) && (
                  <span 
                    className={`ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      licenseLapseCount > 1 ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {licenseLapseCount}
                  </span>
                )}
              </Link>
            </div>
          )}
        </div>

        {/* Companies */}
        <div className="mb-6">
          <button
            onClick={() => setShowCompanyDropdown(!showCompanyDropdown)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <div className="flex items-center gap-3">
              <Building className="w-5 h-5" />
              <span>Companies</span>
            </div>
            <ChevronDown 
              className={`w-4 h-4 transition-transform ${
                showCompanyDropdown ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          {showCompanyDropdown && (
            <div className="mt-1 ml-6 space-y-1">
              <Link
                to="/consent-form"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                  isActive('/consent-form')
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Plus className="w-4 h-4" />
                <span>Add Consent</span>
              </Link>
              
              <Link
                to="/companies"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                  isActive('/companies')
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Building className="w-4 h-4" />
                <span>View All Companies</span>
              </Link>
            </div>
          )}
        </div>

        {/* Others */}
        <div>
          <Link
            to="/signature"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
              isActive('/signature')
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <FileSignature className="w-5 h-5" />
            Signature
          </Link>
        </div>
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
            <p className="text-sm font-medium text-gray-900 truncate">Mintah JR!</p>
            <p className="text-xs text-gray-500 truncate">auditor@example.com</p>
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

export default Sidebar;