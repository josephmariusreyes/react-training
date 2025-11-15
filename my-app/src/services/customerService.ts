import { Customer } from '../types/Customer';

const STORAGE_KEY = 'crm_customers';

// Initial sample data
const initialCustomers: Customer[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Tech Corp',
    status: 'Active',
    address: '123 Main St',
    city: 'New York',
    country: 'USA',
    joinedDate: '2024-01-15',
    lastPurchase: '2024-11-01',
    totalSpent: 15000
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 234-5678',
    company: 'Design Studio',
    status: 'Active',
    address: '456 Oak Ave',
    city: 'Los Angeles',
    country: 'USA',
    joinedDate: '2024-02-20',
    lastPurchase: '2024-10-25',
    totalSpent: 28500
  },
  {
    id: '3',
    firstName: 'Robert',
    lastName: 'Johnson',
    email: 'robert.j@example.com',
    phone: '+1 (555) 345-6789',
    company: 'Finance Plus',
    status: 'Inactive',
    address: '789 Pine Rd',
    city: 'Chicago',
    country: 'USA',
    joinedDate: '2024-03-10',
    lastPurchase: '2024-08-15',
    totalSpent: 12000
  },
  {
    id: '4',
    firstName: 'Emily',
    lastName: 'Brown',
    email: 'emily.brown@example.com',
    phone: '+1 (555) 456-7890',
    company: 'Marketing Pro',
    status: 'Active',
    address: '321 Elm St',
    city: 'Boston',
    country: 'USA',
    joinedDate: '2024-04-05',
    lastPurchase: '2024-11-10',
    totalSpent: 42000
  },
  {
    id: '5',
    firstName: 'Michael',
    lastName: 'Davis',
    email: 'michael.davis@example.com',
    phone: '+1 (555) 567-8901',
    company: 'Retail Solutions',
    status: 'Prospect',
    address: '654 Maple Dr',
    city: 'Seattle',
    country: 'USA',
    joinedDate: '2024-05-12',
    totalSpent: 0
  },
  {
    id: '6',
    firstName: 'Sarah',
    lastName: 'Wilson',
    email: 'sarah.wilson@example.com',
    phone: '+1 (555) 678-9012',
    company: 'Consulting Group',
    status: 'Active',
    address: '987 Cedar Ln',
    city: 'Miami',
    country: 'USA',
    joinedDate: '2024-06-18',
    lastPurchase: '2024-11-05',
    totalSpent: 31500
  },
  {
    id: '7',
    firstName: 'David',
    lastName: 'Martinez',
    email: 'david.m@example.com',
    phone: '+1 (555) 789-0123',
    company: 'Tech Innovations',
    status: 'Active',
    address: '147 Birch St',
    city: 'Austin',
    country: 'USA',
    joinedDate: '2024-07-22',
    lastPurchase: '2024-10-30',
    totalSpent: 19800
  },
  {
    id: '8',
    firstName: 'Lisa',
    lastName: 'Anderson',
    email: 'lisa.anderson@example.com',
    phone: '+1 (555) 890-1234',
    company: 'Global Ventures',
    status: 'Inactive',
    address: '258 Spruce Ave',
    city: 'Denver',
    country: 'USA',
    joinedDate: '2024-08-14',
    lastPurchase: '2024-09-10',
    totalSpent: 8500
  }
];

// Initialize storage
const initializeStorage = (): void => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialCustomers));
  }
};

// API functions (simulate async operations)
export const customerApi = {
  getAll: async (): Promise<Customer[]> => {
    initializeStorage();
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  getById: async (id: string): Promise<Customer> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const data = localStorage.getItem(STORAGE_KEY);
    const customers: Customer[] = data ? JSON.parse(data) : [];
    const customer = customers.find(c => c.id === id);
    if (!customer) throw new Error('Customer not found');
    return customer;
  },

  update: async (id: string, updatedCustomer: Customer): Promise<Customer> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const data = localStorage.getItem(STORAGE_KEY);
    const customers: Customer[] = data ? JSON.parse(data) : [];
    const index = customers.findIndex(c => c.id === id);
    
    if (index === -1) throw new Error('Customer not found');
    
    customers[index] = updatedCustomer;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customers));
    return updatedCustomer;
  },

  create: async (customer: Omit<Customer, 'id'>): Promise<Customer> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const data = localStorage.getItem(STORAGE_KEY);
    const customers: Customer[] = data ? JSON.parse(data) : [];
    const newCustomer: Customer = {
      ...customer,
      id: Date.now().toString()
    };
    customers.push(newCustomer);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customers));
    return newCustomer;
  },

  delete: async (id: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const data = localStorage.getItem(STORAGE_KEY);
    const customers: Customer[] = data ? JSON.parse(data) : [];
    const filteredCustomers = customers.filter(c => c.id !== id);
    
    if (filteredCustomers.length === customers.length) {
      throw new Error('Customer not found');
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredCustomers));
  }
};
