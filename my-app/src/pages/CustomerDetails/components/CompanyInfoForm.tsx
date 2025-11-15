import React from 'react';
import { Customer } from '../../../types/Customer';

interface CompanyInfoFormProps {
  customer: Customer;
  formData: Customer;
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const CompanyInfoForm: React.FC<CompanyInfoFormProps> = ({
  customer,
  formData,
  isEditing,
  onChange
}) => {
  return (
    <div className="details-card">
      <h2>Company Information</h2>
      <div className="details-grid">
        <div className="detail-field">
          <label>Company</label>
          {isEditing ? (
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={onChange}
            />
          ) : (
            <div className="detail-value">{customer.company}</div>
          )}
        </div>

        <div className="detail-field">
          <label>Status</label>
          {isEditing ? (
            <select name="status" value={formData.status} onChange={onChange}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Prospect">Prospect</option>
            </select>
          ) : (
            <div className="detail-value">{customer.status}</div>
          )}
        </div>
      </div>
    </div>
  );
};
