'use client';

import CarCard from '@/components/CarCard/CarCard';
import { useCars } from '@/features/cars/hooks';

export default function CatalogPage() {
  const { data, isLoading, isError, error } = useCars();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  const firstCar = data?.pages[0]?.cars[0];

  if (!firstCar) return <p>No cars found</p>;

  return (
    <main>
      <CarCard car={firstCar} />
    </main>
  );
}
