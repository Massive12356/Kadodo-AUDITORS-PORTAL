import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bell, User, ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';
import { useStore } from '../store/useStore';

const Topbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const userProfile = useStore((state) => state.userProfile);
  const setIsAuthenticated = useStore((state) => state.setIsAuthenticated);
  
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setShowProfileDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Clear authentication status
    setIsAuthenticated(false);
    // Show confirmation
    toast.success('You have been logged out');
    // Navigate to home page
    navigate('/');
    // Close profile dropdown
    setShowProfileDropdown(false);
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
  
  // Map routes to page titles
  const getPageTitle = () => {
    switch(location.pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/license-renewal':
        return 'License Renewal';
      case '/auditor-rotation':
        return 'Auditor Rotation';
      case '/license-lapse':
        return 'License Lapse';
      case '/signature':
        return 'Signature';
      case '/consent-form':
        return 'Add Consent';
      case '/profile':
        return 'Profile';
      case '/account-settings':
        return 'Account Settings';
      default:
        return 'Dashboard';
    }
  };
  
  return (
    <>
      <header className="bg-white border-b border-gray-200 h-16 flex items-center">
        <div className="flex-1 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Current page title */}
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-gray-900">
                {getPageTitle()}
              </h1>
            </div>

            {/* Right side - notifications and profile */}
            <div className="flex items-center space-x-4">
              {/* Notification Bell */}
              <div className="relative">
                <button 
                  onClick={() => setShowNotificationDropdown(!showNotificationDropdown)}
                  className="p-1 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                >
                  <Bell className="w-6 h-6" />
                  {/* Notification badge */}
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </button>
                {/* Dropdown for notifications */}
                {showNotificationDropdown && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">Notifications</p>
                    </div>
                    <div className="py-2">
                      <Link
                        to="/license-renewal"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          setShowNotificationDropdown(false);
                          navigate('/license-renewal');
                        }}
                      >
                        <div className="flex justify-between">
                          <span>License Renewal Due</span>
                          <span className="text-xs text-gray-500">2 hours ago</span>
                        </div>
                        <p className="text-xs text-gray-500">Tech Innovations Inc. needs renewal</p>
                      </Link>
                      <Link
                        to="/auditor-rotation"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          setShowNotificationDropdown(false);
                          navigate('/auditor-rotation');
                        }}
                      >
                        <div className="flex justify-between">
                          <span>Auditor Rotation</span>
                          <span className="text-xs text-gray-500">1 day ago</span>
                        </div>
                        <p className="text-xs text-gray-500">GreenLeaf Organics rotation due</p>
                      </Link>
                      <Link
                        to="/license-lapse"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          setShowNotificationDropdown(false);
                          navigate('/license-lapse');
                        }}
                      >
                        <div className="flex justify-between">
                          <span>License Lapse Alert</span>
                          <span className="text-xs text-gray-500">3 days ago</span>
                        </div>
                        <p className="text-xs text-gray-500">Oceanic Goods license expired</p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowProfileDropdown(!showProfileDropdown);
                  }}
                  className="flex items-center gap-2 focus:outline-none p-1 rounded-full hover:bg-gray-100 transition-colors"
                  type="button"
                  aria-label="Profile menu"
                >
                  <div className="w-9 h-9 bg-gray-200 rounded-full overflow-hidden ring-2 ring-transparent hover:ring-blue-500 transition-all">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${showProfileDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showProfileDropdown && (
                  <div 
                    ref={profileDropdownRef}
                    className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-50"
                  >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {userProfile?.fullName || 'User'}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {userProfile?.email || 'user@example.com'}
                      </p>
                    </div>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      <User className="w-4 h-4 mr-2" />
                      My Profile
                    </Link>
                    <Link
                      to="/account-settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Account Settings
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button
                      onClick={handleLogoutClick}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      
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
    </>
  );
};

export default Topbar;