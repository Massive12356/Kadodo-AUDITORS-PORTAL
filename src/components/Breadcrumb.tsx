import React from 'react';
import { useLocation, Link } from 'react-router-dom';

// Define a mapping of URL paths to readable titles
const PATH_TO_TITLE: Record<string, string> = {
  '/company-dashboard': 'Dashboard',
  '/auditor-search': 'Auditor Search',
  '/auditor-profile': 'Auditor Profile',
  '/request-engagement': 'Request Engagement',
  '/auditor-management': 'Auditor Management',
  '/review-auditor': 'Review Auditor',
  '/verify': 'Verify',
  '/help-center': 'Help Center',
};

// Function to get title based on partial path match
const getTitleFromPath = (path: string): string => {
  if (path.startsWith('/auditor-profile/')) return 'Auditor Profile';
  if (path.startsWith('/request-engagement/')) return 'Request Engagement';
  if (path.startsWith('/review-auditor/')) return 'Review Auditor';
  return '';
};

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Function to generate readable title from path segment
  const getTitle = (index: number): string => {
    // Build the full path up to this index
    const fullPath = '/' + pathnames.slice(0, index + 1).join('/');
    
    // Check if we have a specific mapping for this full path
    if (PATH_TO_TITLE[fullPath]) {
      return PATH_TO_TITLE[fullPath];
    }
    
    // Check for dynamic routes
    const dynamicTitle = getTitleFromPath(fullPath);
    if (dynamicTitle) {
      return dynamicTitle;
    }
    
    // Get the current path segment
    const currentSegment = pathnames[index];
    
    // Convert kebab-case to Title Case
    return currentSegment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Function to generate the path up to the current index
  const getPathToIndex = (index: number): string => {
    return '/' + pathnames.slice(0, index + 1).join('/');
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        <li>
          <Link to="/company-dashboard" className="hover:text-gray-700">
            Dashboard
          </Link>
        </li>
        
        {pathnames.map((path, index) => {
          const isLast = index === pathnames.length - 1;
          const title = getTitle(index);
          const pathToIndex = getPathToIndex(index);
          
          return (
            <React.Fragment key={index}>
              <li>
                <span className="mx-2">›</span>
              </li>
              <li>
                {isLast ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {title}
                  </span>
                ) : (
                  <Link 
                    to={pathToIndex} 
                    className="hover:text-gray-700"
                  >
                    {title}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;