import React from 'react';
import { Customer } from '../../../types/Customer';

interface CustomerInfoCardProps {
  customer: Customer;
}

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

export const CustomerInfoCard: React.FC<CustomerInfoCardProps> = ({ customer }) => {
  return (
    <div className="customer-header-card">
      <div className="customer-avatar">
        {customer.firstName.charAt(0)}
        {customer.lastName.charAt(0)}
      </div>
      <div className="customer-header-info">
        <h1>
          {customer.firstName} {customer.lastName}
        </h1>
        <p>{customer.company}</p>
        <span className={`status-badge ${getStatusClass(customer.status)}`}>
          {customer.status}
        </span>
      </div>
    </div>
  );
};
