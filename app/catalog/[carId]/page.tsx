'use client';

import { useParams } from 'next/navigation';
import { useCarById } from '@/features/cars/hooks';
import CarDetails from '@/components/CarDetails/CarDetails';
import css from './page.module.css';
import Image from 'next/image';
import BookingForm from '@/components/BookingForm/BookingForm';
import CatalogLoader from '@/components/CatalogLoader/CatalogLoader';

export default function CarDetailsPage() {
  const { carId } = useParams<{ carId: string }>();

  const { data: car, isLoading, isError, error } = useCarById(carId);

  if (isLoading) {
    return <CatalogLoader />;
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
          priority
        />

        <BookingForm carId={car.id} />
      </div>

      <div className={css.rightColumn}>
        <CarDetails car={car} />
      </div>
    </main>
  );
}
