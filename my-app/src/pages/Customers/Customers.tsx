import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomers } from '../../hooks/useCustomers';
import { Customer } from '../../types/Customer';
import './Customers.css';

const Customers: React.FC = () => {
  const { data: customers = [], isLoading, error } = useCustomers();
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const navigate = useNavigate();

  useEffect(() => {
    let filtered = [...customers];

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (customer) =>
          customer.firstName.toLowerCase().includes(term) ||
          customer.lastName.toLowerCase().includes(term) ||
          customer.email.toLowerCase().includes(term) ||
          customer.company.toLowerCase().includes(term)
      );
    }

    // Filter by status
    if (statusFilter !== 'All') {
      filtered = filtered.filter((customer) => customer.status === statusFilter);
    }

    setFilteredCustomers(filtered);
  }, [searchTerm, statusFilter, customers]);

  const handleRowClick = (customerId: string) => {
    navigate(`/customers/${customerId}`);
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active':
        return 'status-active';
      case 'Inactive':
        return 'status-inactive';
      case 'Prospect':
        return 'status-prospect';
      default:
        return '';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  if (isLoading) {
    return (
      <div className="customers-page">
        <div className="customers-header">
          <h1>Customers</h1>
        </div>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          Loading customers...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="customers-page">
        <div className="customers-header">
          <h1>Customers</h1>
        </div>
        <div style={{ padding: '2rem', textAlign: 'center', color: '#dc3545' }}>
          Error loading customers: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="customers-page">
      <div className="customers-header">
        <div>
          <h1>Customers</h1>
          <p>Manage your customer relationships</p>
        </div>
      </div>

      <div className="customers-controls">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by name, email, or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label>Status:</label>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Prospect">Prospect</option>
          </select>
        </div>
      </div>

      <div className="table-container">
        <table className="customers-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Total Spent</th>
              <th>Joined Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  onClick={() => handleRowClick(customer.id)}
                  className="customer-row"
                >
                  <td>
                    <div className="customer-name">
                      {customer.firstName} {customer.lastName}
                    </div>
                  </td>
                  <td>{customer.email}</td>
                  <td>{customer.company}</td>
                  <td>{customer.phone}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(customer.status)}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="amount">{formatCurrency(customer.totalSpent)}</td>
                  <td>{new Date(customer.joinedDate).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="no-results">
                  No customers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="customers-footer">
        <p>Showing {filteredCustomers.length} of {customers.length} customers</p>
      </div>
    </div>
  );
};

export default Customers;
