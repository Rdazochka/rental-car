import { useInfiniteQuery } from '@tanstack/react-query';
import { getCars } from '@/features/cars/api/carsApi';
import type { CarsParams } from '@/types/car';

export const useCars = (filters: CarsParams = {}) => {
  return useInfiniteQuery({
    queryKey: ['cars', filters],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getCars({
        ...filters,
        page: pageParam,
        perPage: 12,
      }),
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    placeholderData: (previousData) => previousData,
  });
};
