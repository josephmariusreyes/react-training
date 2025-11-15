import React from 'react';

interface CustomerHeaderProps {
  onBack: () => void;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  isEditing: boolean;
}

export const CustomerHeader: React.FC<CustomerHeaderProps> = ({
  onBack,
  onEdit,
  onSave,
  onCancel,
  isEditing
}) => {
  return (
    <div className="details-header">
      <button onClick={onBack} className="back-button">
        ← Back to Customers
      </button>
      <div className="header-actions">
        {!isEditing ? (
          <button onClick={onEdit} className="edit-button">
            ✏️ Edit
          </button>
        ) : (
          <div className="edit-actions">
            <button onClick={onCancel} className="cancel-button">
              Cancel
            </button>
            <button onClick={onSave} className="save-button">
              💾 Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
