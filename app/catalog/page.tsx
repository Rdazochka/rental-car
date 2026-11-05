'use client';

import CarCard from '@/components/CarCard/CarCard';
import { useCars } from '@/features/cars/hooks';
import css from '@/app/catalog/page.module.css';

export default function CatalogPage() {
  const { data, isLoading, isError, error } = useCars();

  const cars = data?.pages.flatMap((page) => page.cars) ?? [];

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  const firstCar = data?.pages[0]?.cars[0];

  if (!firstCar) return <p>No cars found</p>;

  return (
    <main>
      <div className={css.carsList}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </main>
  );
}
