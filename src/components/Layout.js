
import React from 'react';
import Sidebar from './Sidebar'; // ✅ Correct relative path

const Layout = ({ children, showSidebar }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {showSidebar && <Sidebar />}
      <main style={{ flex: 1, padding: '1rem', background: '#fef8e0' }}>{children}</main>
    </div>
  );
};

export default Layout;

