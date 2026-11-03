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
    </article>
  );
}
