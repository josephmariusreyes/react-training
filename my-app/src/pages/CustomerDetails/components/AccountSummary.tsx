import React from 'react';
import { Customer } from '../../../types/Customer';

interface AccountSummaryProps {
  customer: Customer;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(amount);
};

export const AccountSummary: React.FC<AccountSummaryProps> = ({ customer }) => {
  return (
    <div className="details-sidebar">
      <div className="sidebar-card">
        <h3>Account Summary</h3>
        <div className="summary-item">
          <span className="summary-label">Total Spent</span>
          <span className="summary-value amount">
            {formatCurrency(customer.totalSpent)}
          </span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Joined Date</span>
          <span className="summary-value">
            {new Date(customer.joinedDate).toLocaleDateString()}
          </span>
        </div>
        {customer.lastPurchase && (
          <div className="summary-item">
            <span className="summary-label">Last Purchase</span>
            <span className="summary-value">
              {new Date(customer.lastPurchase).toLocaleDateString()}
            </span>
          </div>
        )}
      </div>

      <div className="sidebar-card">
        <h3>Quick Actions</h3>
        <button className="action-button">📧 Send Email</button>
        <button className="action-button">📞 Schedule Call</button>
        <button className="action-button">📄 Generate Report</button>
      </div>
    </div>
  );
};
