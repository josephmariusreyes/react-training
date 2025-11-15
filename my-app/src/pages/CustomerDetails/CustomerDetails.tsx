import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCustomer, useUpdateCustomer } from '../../hooks/useCustomers';
import { Customer } from '../../types/Customer';
import { CustomerHeader } from './components/CustomerHeader';
import { CustomerInfoCard } from './components/CustomerInfoCard';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { CompanyInfoForm } from './components/CompanyInfoForm';
import { AddressForm } from './components/AddressForm';
import { AccountSummary } from './components/AccountSummary';
import './CustomerDetails.scss';

const CustomerDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: customer, isLoading, error } = useCustomer(id || '');
  const updateCustomer = useUpdateCustomer();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Customer | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (customer) {
      setFormData(customer);
    }
  }, [customer]);

  useEffect(() => {
    if (error) {
      navigate('/customers');
    }
  }, [error, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (formData) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSave = async () => {
    if (formData && id) {
      try {
        await updateCustomer.mutateAsync({ id, data: formData });
        setIsEditing(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } catch (error) {
        console.error('Failed to update customer:', error);
      }
    }
  };

  const handleCancel = () => {
    setFormData(customer || null);
    setIsEditing(false);
  };

  const handleBack = () => {
    navigate('/customers');
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (!customer || !formData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="customer-details-page">
      <CustomerHeader
        onBack={handleBack}
        onEdit={() => setIsEditing(true)}
        onSave={handleSave}
        onCancel={handleCancel}
        isEditing={isEditing}
      />

      {showSuccess && (
        <div className="success-message">
          ✓ Customer details updated successfully!
        </div>
      )}

      <div className="details-container">
        <div className="details-main">
          <CustomerInfoCard customer={formData} />
          
          <PersonalInfoForm
            customer={customer}
            formData={formData}
            isEditing={isEditing}
            onChange={handleInputChange}
          />

          <CompanyInfoForm
            customer={customer}
            formData={formData}
            isEditing={isEditing}
            onChange={handleInputChange}
          />

          <AddressForm
            customer={customer}
            formData={formData}
            isEditing={isEditing}
            onChange={handleInputChange}
          />
        </div>

        <AccountSummary customer={customer} />
      </div>
    </div>
  );
};

export default CustomerDetails;
