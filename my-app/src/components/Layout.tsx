import React from 'react';
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';
import './Layout.scss';

const Layout: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleInventoryClick = () => {
    alert('Inventory management coming soon!');
  };

  const handleSettingsClick = () => {
    alert('Settings page coming soon!');
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>CRM System</h2>
          <ThemeToggle />
        </div>
        
        <nav className="sidebar-nav">
          <Link 
            to="/dashboard" 
            className={`nav-item ${isActive('/dashboard') && !location.pathname.includes('/customers') ? 'active' : ''}`}
          >
            <span className="nav-icon">📊</span>
            <span>Dashboard</span>
          </Link>
          
          <Link 
            to="/customers" 
            className={`nav-item ${isActive('/customers') ? 'active' : ''}`}
          >
            <span className="nav-icon">👥</span>
            <span>Customers</span>
          </Link>
          
          <button onClick={handleInventoryClick} className="nav-item nav-button">
            <span className="nav-icon">📦</span>
            <span>Inventory</span>
          </button>
          
          <button onClick={handleSettingsClick} className="nav-item nav-button">
            <span className="nav-icon">⚙️</span>
            <span>Settings</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-button">
            <span className="nav-icon">🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
