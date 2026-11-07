'use client';

import { useParams } from 'next/navigation';
import { useCarById } from '@/features/cars/hooks';
import CarDetails from '@/components/CarDetails/CarDetails';
import css from './page.module.css';
import Image from 'next/image';

export default function CarDetailsPage() {
  const { carId } = useParams<{ carId: string }>();

  const { data: car, isLoading, isError, error } = useCarById(carId);

  if (isLoading) {
    return <p>Loading car details...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (!car) {
    return <p>Car not found</p>;
  }

  return (
    <main className={css.page}>
      <div className={css.leftColumn}>
        <Image
          className={css.carImage}
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          width={640}
          height={512}
          loading="eager"
        />
      </div>

      <div className={css.rightColumn}>
        <CarDetails car={car} />
      </div>
    </main>
  );
}
