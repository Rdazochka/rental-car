import type { Car } from '@/types/car';
import Image from 'next/image';
import Link from 'next/link';
import css from './CarCard.module.css';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <article className={css.card}>
      <Image
        className={css.image}
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        width={380}
        height={416}
      />

      <div className={css.info}>
        <h2 className={css.title}>
          {car.brand} <span>{car.model}</span>, {car.year}
        </h2>

        <p className={css.price}>${car.rentalPrice}</p>
      </div>

      <div className={css.details}>
        <div className={css.detailsRow}>
          <span>{car.location.city}</span>
          <span>{car.location.country}</span>
          <span>{car.rentalCompany}</span>
        </div>

        <div className={css.detailsRow}>
          <span>{car.type}</span>
          <span>{car.mileage.toLocaleString('uk-UA')} km</span>
        </div>
      </div>

      <Link
        href={`/catalog/${car.id}`}
        className={css.button}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </Link>
    </article>
  );
}
