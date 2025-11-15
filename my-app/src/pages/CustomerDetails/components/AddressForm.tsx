import React from 'react';
import { Customer } from '../../../types/Customer';

interface AddressFormProps {
  customer: Customer;
  formData: Customer;
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddressForm: React.FC<AddressFormProps> = ({
  customer,
  formData,
  isEditing,
  onChange
}) => {
  return (
    <div className="details-card">
      <h2>Address</h2>
      <div className="details-grid">
        <div className="detail-field full-width">
          <label>Street Address</label>
          {isEditing ? (
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={onChange}
            />
          ) : (
            <div className="detail-value">{customer.address}</div>
          )}
        </div>

        <div className="detail-field">
          <label>City</label>
          {isEditing ? (
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={onChange}
            />
          ) : (
            <div className="detail-value">{customer.city}</div>
          )}
        </div>

        <div className="detail-field">
          <label>Country</label>
          {isEditing ? (
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={onChange}
            />
          ) : (
            <div className="detail-value">{customer.country}</div>
          )}
        </div>
      </div>
    </div>
  );
};
