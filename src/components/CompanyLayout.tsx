import React from 'react';
import CompanySidebar from './CompanySidebar';
import CompanyTopbar from './CompanyTopbar';
import Breadcrumb from './Breadcrumb';

interface CompanyLayoutProps {
  children: React.ReactNode;
}

const CompanyLayout: React.FC<CompanyLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <CompanySidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <CompanyTopbar />
        <div className="flex-1 overflow-y-auto p-6">
          <Breadcrumb />
          <main>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default CompanyLayout;