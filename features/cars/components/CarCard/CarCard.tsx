import type { Car } from '@/types/car';
import Image from 'next/image';
import css from './CarCard.module.css';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <article>
      <Image
        className={css.image}
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        width={244}
        height={268}
      />

      <div className={css.info}>
        <h2 className={css.title}>
          <span>{car.brand}</span>{' '}
          <span className={css.model}>{car.model}</span>, {car.year}
        </h2>

        <p className={css.price}>${car.rentalPrice}</p>
      </div>
    </article>
  );
}
