import { useQuery } from '@tanstack/react-query';
import { getCarFilters } from '@/features/cars/api/carsApi';

export const useCarFilters = () => {
  return useQuery({
    queryKey: ['carFilters'],
    queryFn: getCarFilters,
  });
};
