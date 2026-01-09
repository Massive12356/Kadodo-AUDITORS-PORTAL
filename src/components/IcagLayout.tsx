import React from 'react';
import IcagSidebar from './IcagSidebar';
import IcagTopbar from './IcagTopbar';

interface IcagLayoutProps {
  children: React.ReactNode;
}

const IcagLayout: React.FC<IcagLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <IcagSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <IcagTopbar />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default IcagLayout;