export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  status: 'Active' | 'Inactive' | 'Prospect';
  address: string;
  city: string;
  country: string;
  joinedDate: string;
  lastPurchase?: string;
  totalSpent: number;
}
