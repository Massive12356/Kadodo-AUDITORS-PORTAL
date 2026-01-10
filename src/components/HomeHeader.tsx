import { Link, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";

export default function HomeHeader() {
  const location = useLocation();

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                  <Globe className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  Ghana ORC & ICAG
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`font-medium ${isActive('/') ? 'text-blue-600 bg-blue-100 p-2 rounded-md font-bold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Home
              </Link>
              <Link
                to="/verify"
                className={`font-medium ${isActive('/verify') ? 'text-blue-600 bg-blue-100 p-2 rounded-md font-bold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Verify
              </Link>
              <Link
                to="/help-center"
                className={`font-medium ${isActive('/help-center') ? 'text-blue-600 bg-blue-100 p-2 rounded-md font-bold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Help Center
              </Link>

              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium hover:animate-pulse"
              >
                Auditor Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
  );
}
