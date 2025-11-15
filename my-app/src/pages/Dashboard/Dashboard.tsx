import React from 'react';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
  // Static data for widgets
  const stats = [
    {
      title: 'Total Customers',
      value: '248',
      change: '+12%',
      positive: true,
      icon: '👥'
    },
    {
      title: 'Active Orders',
      value: '42',
      change: '+8%',
      positive: true,
      icon: '📦'
    },
    {
      title: 'Revenue',
      value: '$152.4K',
      change: '+23%',
      positive: true,
      icon: '💰'
    },
    {
      title: 'Support Tickets',
      value: '18',
      change: '-5%',
      positive: false,
      icon: '🎫'
    }
  ];

  const recentActivity = [
    { id: 1, action: 'New customer registered', name: 'John Smith', time: '2 hours ago' },
    { id: 2, action: 'Order completed', name: 'Sarah Johnson', time: '4 hours ago' },
    { id: 3, action: 'Payment received', name: 'Mike Brown', time: '5 hours ago' },
    { id: 4, action: 'Support ticket closed', name: 'Emily Davis', time: '6 hours ago' },
    { id: 5, action: 'New order placed', name: 'Robert Wilson', time: '8 hours ago' }
  ];

  const topCustomers = [
    { name: 'Emily Brown', company: 'Marketing Pro', spent: '$42,000' },
    { name: 'Sarah Wilson', company: 'Consulting Group', spent: '$31,500' },
    { name: 'Jane Smith', company: 'Design Studio', spent: '$28,500' },
    { name: 'David Martinez', company: 'Tech Innovations', spent: '$19,800' },
    { name: 'John Doe', company: 'Tech Corp', spent: '$15,000' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's what's happening today.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3>{stat.title}</h3>
              <div className="stat-value">{stat.value}</div>
              <div className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                {stat.change} from last month
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="widgets-grid">
        <div className="widget">
          <div className="widget-header">
            <h2>Recent Activity</h2>
          </div>
          <div className="activity-list">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-dot"></div>
                <div className="activity-content">
                  <div className="activity-action">{activity.action}</div>
                  <div className="activity-name">{activity.name}</div>
                </div>
                <div className="activity-time">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="widget">
          <div className="widget-header">
            <h2>Top Customers</h2>
          </div>
          <div className="customers-list">
            {topCustomers.map((customer, index) => (
              <div key={index} className="customer-item">
                <div className="customer-rank">#{index + 1}</div>
                <div className="customer-info">
                  <div className="customer-name">{customer.name}</div>
                  <div className="customer-company">{customer.company}</div>
                </div>
                <div className="customer-spent">{customer.spent}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="widget chart-widget">
          <div className="widget-header">
            <h2>Sales Overview</h2>
          </div>
          <div className="chart-placeholder">
            <div className="chart-bars">
              <div className="bar" style={{ height: '60%' }}>
                <span className="bar-label">Jan</span>
              </div>
              <div className="bar" style={{ height: '75%' }}>
                <span className="bar-label">Feb</span>
              </div>
              <div className="bar" style={{ height: '55%' }}>
                <span className="bar-label">Mar</span>
              </div>
              <div className="bar" style={{ height: '85%' }}>
                <span className="bar-label">Apr</span>
              </div>
              <div className="bar" style={{ height: '70%' }}>
                <span className="bar-label">May</span>
              </div>
              <div className="bar" style={{ height: '90%' }}>
                <span className="bar-label">Jun</span>
              </div>
            </div>
          </div>
        </div>

        <div className="widget">
          <div className="widget-header">
            <h2>Quick Stats</h2>
          </div>
          <div className="quick-stats">
            <div className="quick-stat">
              <div className="quick-stat-label">Conversion Rate</div>
              <div className="quick-stat-value">3.24%</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '32%' }}></div>
              </div>
            </div>
            <div className="quick-stat">
              <div className="quick-stat-label">Customer Satisfaction</div>
              <div className="quick-stat-value">94%</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '94%' }}></div>
              </div>
            </div>
            <div className="quick-stat">
              <div className="quick-stat-label">Average Order Value</div>
              <div className="quick-stat-value">$324</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
