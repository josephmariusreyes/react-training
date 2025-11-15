import React from 'react';
import { Customer } from '../../../types/Customer';

interface PersonalInfoFormProps {
  customer: Customer;
  formData: Customer;
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  customer,
  formData,
  isEditing,
  onChange
}) => {
  return (
    <div className="details-card">
      <h2>Personal Information</h2>
      <div className="details-grid">
        <div className="detail-field">
          <label>First Name</label>
          {isEditing ? (
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={onChange}
            />
          ) : (
            <div className="detail-value">{customer.firstName}</div>
          )}
        </div>

        <div className="detail-field">
          <label>Last Name</label>
          {isEditing ? (
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={onChange}
            />
          ) : (
            <div className="detail-value">{customer.lastName}</div>
          )}
        </div>

        <div className="detail-field">
          <label>Email</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
            />
          ) : (
            <div className="detail-value">{customer.email}</div>
          )}
        </div>

        <div className="detail-field">
          <label>Phone</label>
          {isEditing ? (
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={onChange}
            />
          ) : (
            <div className="detail-value">{customer.phone}</div>
          )}
        </div>
      </div>
    </div>
  );
};
