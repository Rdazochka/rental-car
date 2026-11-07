import type { Car } from '@/types/car';
import css from './CarDetails.module.css';

interface CarDetailsProps {
  car: Car;
}

export default function CarDetails({ car }: CarDetailsProps) {
  return (
    <section className={css.details}>
      <div className={css.header}>
        <h1 className={css.title}>
          {car.brand} {car.model}, {car.year}
        </h1>

        <p className={css.article}>Article: {car.id}</p>
      </div>

      <p className={css.location}>
        <svg className={css.locationIcon} aria-hidden="true">
          <use href="/icons.svg#icon-location" />
        </svg>

        <span>
          {car.location.city}, {car.location.country}
        </span>
      </p>

      <p className={css.price}>${car.rentalPrice}</p>

      <p className={css.description}>{car.description}</p>

      <div className={css.section}>
        <h2 className={css.sectionTitle}>Rental Conditions:</h2>

        <ul className={css.list}>
          {car.rentalConditions.map((condition) => (
            <li className={css.listItem} key={condition}>
              <svg className={css.icon} aria-hidden="true">
                <use href="/icons.svg#icon-check-circle" />
              </svg>
              <span>{condition}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={css.divider} />

      <div className={css.section}>
        <h2 className={css.sectionTitle}>Car Specifications:</h2>

        <ul className={css.list}>
          <li className={css.listItem}>
            <svg className={css.icon} aria-hidden="true">
              <use href="/icons.svg#icon-calendar" />
            </svg>
            <span>Year: {car.year}</span>
          </li>

          <li className={css.listItem}>
            <svg className={css.icon} aria-hidden="true">
              <use href="/icons.svg#icon-car" />
            </svg>
            <span>Type: {car.type}</span>
          </li>

          <li className={css.listItem}>
            <svg className={css.icon} aria-hidden="true">
              <use href="/icons.svg#icon-brand" />
            </svg>
            <span>Fuel Consumption: {car.fuelConsumption}</span>
          </li>

          <li className={css.listItem}>
            <svg className={css.icon} aria-hidden="true">
              <use href="/icons.svg#icon-settings" />
            </svg>
            <span>Engine: {car.engine}</span>
          </li>

          <li className={css.listItem}>
            <svg className={css.icon} aria-hidden="true">
              <use href="/icons.svg#icon-road" />
            </svg>
            <span>Mileage: {car.mileage.toLocaleString('uk-UA')} km</span>
          </li>
        </ul>
      </div>

      <div className={css.divider} />

      <div className={css.section}>
        <h2 className={css.sectionTitle}>Features</h2>

        <ul className={css.list}>
          {car.features.map((feature) => (
            <li className={css.listItem} key={feature}>
              <svg className={css.icon} aria-hidden="true">
                <use href="/icons.svg#icon-check-circle" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
