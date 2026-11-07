import { useQuery } from '@tanstack/react-query';
import { getCarById } from '@/features/cars/api/carsApi';

export const useCarById = (id: string) => {
  return useQuery({
    queryKey: ['car', id],
    queryFn: () => getCarById(id),
    enabled: Boolean(id),
  });
};
