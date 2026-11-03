import { api } from '@/lib/api/api';
import type {
  Car,
  CarFiltersResponse,
  CarsParams,
  CarsResponse,
} from '@/types/car';

export const getCars = async (params: CarsParams): Promise<CarsResponse> => {
  const { data } = await api.get<CarsResponse>('/cars', { params });

  return data;
};

export const getCarFilters = async (): Promise<CarFiltersResponse> => {
  const { data } = await api.get<CarFiltersResponse>('/cars/filters');

  return data;
};

export const getCarById = async (id: string): Promise<Car> => {
  const { data } = await api.get<Car>(`/cars/${id}`);

  return data;
};
