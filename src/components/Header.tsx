import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building, Home, Plus, ChevronDown, FileSignature, Menu, X, User } from "lucide-react";
import toast from 'react-hot-toast';
import { useStore } from '../store/useStore';

const Header = () => {
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false); // Added state for profile dropdown
  const userProfile = useStore((state) => state.userProfile); // Get user profile from store
  const handleAddConsent = () => {
    toast.success("Redirecting to consent form...");
    setShowCompanyDropdown(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-900 rounded flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
            <h1 className="ml-3 text-xl font-bold text-gray-900">ICAG</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6">
              <Link
                to="/"
                className="text-gray-900 font-medium flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
              </Link>
              <Link to="/dashboard">
                <button className="text-gray-900 font-medium">Dashboard</button>
              </Link>

              <Link to="/signature">
                <button className="text-gray-900 font-medium flex items-center gap-2">
                  <FileSignature className="w-4 h-4" />
                  Signature
                </button>
              </Link>
            </nav>
            <div className="relative">
              <button
                onClick={() => setShowCompanyDropdown(!showCompanyDropdown)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Companies
                <ChevronDown className="w-4 h-4" />
              </button>

              {showCompanyDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                  <Link
                    to="/consent-form"
                    onClick={handleAddConsent}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Add Consent
                  </Link>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    View All Companies
                  </a>
                </div>
              )}
            </div>
            {/* Profile dropdown with hover effect */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowProfileDropdown(true)}
                onMouseLeave={() => setShowProfileDropdown(false)}
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className="flex items-center gap-2 focus:outline-none"
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
                  className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10"
                  onMouseEnter={() => setShowProfileDropdown(true)}
                  onMouseLeave={() => setShowProfileDropdown(false)}
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
                  >
                    <User className="w-4 h-4 mr-2" />
                    My Profile
                  </Link>
                  <Link
                    to="/account-settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Account Settings
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="relative bg-white h-full w-64 ml-auto overflow-y-auto">
            <div className="px-4 py-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-900 rounded flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="ml-3 text-xl font-bold text-gray-900">ICAG</h1>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                  <X className="block h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-1">
                <Link
                  to="/"
                  className="text-gray-900 font-medium flex items-center gap-2 px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home className="w-4 h-4" />
                  Home
                </Link>
                <Link
                  to="/dashboard"
                  className="text-gray-900 font-medium block px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/signature"
                  className="text-gray-900 font-medium flex items-center gap-2 px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FileSignature className="w-4 h-4" />
                  Signature
                </Link>
                <div className="border-t border-gray-200 my-2"></div>
                <Link
                  to="/consent-form"
                  className="text-gray-900 font-medium block px-3 py-2 rounded-md"
                  onClick={() => {
                    handleAddConsent();
                    setIsMenuOpen(false);
                  }}
                >
                  Add Consent
                </Link>
                <a
                  href="#"
                  className="text-gray-900 font-medium block px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View All Companies
                </a>
                <div className="border-t border-gray-200 my-2"></div>
                <Link
                  to="/profile"
                  className="text-gray-900 font-medium block px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Profile
                </Link>
                <Link
                  to="/account-settings"
                  className="text-gray-900 font-medium block px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Account Settings
                </Link>
                <Link
                  to="/"
                  className="text-red-600 font-medium block px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;