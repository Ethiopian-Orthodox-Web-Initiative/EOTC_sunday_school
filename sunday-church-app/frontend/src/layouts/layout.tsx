// src/layouts/layout.tsx
import React from 'react';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
     
      {/* Main content */}
      <main className="flex-grow">{children}</main>

    
    </div>
  );
};

export default Layout;
