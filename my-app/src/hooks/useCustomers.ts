import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { customerApi } from '../services/customerService';
import { Customer } from '../types/Customer';

// Query keys
export const customerKeys = {
  all: ['customers'] as const,
  detail: (id: string) => ['customers', id] as const,
};

// Get all customers
export const useCustomers = () => {
  return useQuery({
    queryKey: customerKeys.all,
    queryFn: customerApi.getAll,
  });
};

// Get single customer
export const useCustomer = (id: string) => {
  return useQuery({
    queryKey: customerKeys.detail(id),
    queryFn: () => customerApi.getById(id),
    enabled: !!id,
  });
};

// Update customer
export const useUpdateCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Customer }) =>
      customerApi.update(id, data),
    onSuccess: (updatedCustomer) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: customerKeys.all });
      queryClient.invalidateQueries({ queryKey: customerKeys.detail(updatedCustomer.id) });
    },
  });
};

// Create customer
export const useCreateCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Omit<Customer, 'id'>) => customerApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: customerKeys.all });
    },
  });
};

// Delete customer
export const useDeleteCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => customerApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: customerKeys.all });
    },
  });
};
