'use client';

import { useState, type FormEvent } from 'react';
import type { CarFiltersResponse, CarsParams } from '@/types/car';
import css from './CatalogFilters.module.css';

export type CatalogFilterValues = Pick<
  CarsParams,
  'brand' | 'price' | 'minMileage' | 'maxMileage'
>;

interface CatalogFiltersProps {
  brands: CarFiltersResponse['brands'];
  priceRange: CarFiltersResponse['price'];
  onSearch: (filters: CatalogFilterValues) => void;
}

export default function CatalogFilters({
  brands,
  priceRange,
  onSearch,
}: CatalogFiltersProps) {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);

  const priceOptions = Array.from(
    {
      length: Math.floor((priceRange.max - priceRange.min) / 10) + 1,
    },
    (_, index) => priceRange.min + index * 10,
  );

  if (priceOptions.at(-1) !== priceRange.max) {
    priceOptions.push(priceRange.max);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const filters: CatalogFilterValues = {};

    if (brand) filters.brand = brand;
    if (price !== '') filters.price = Number(price);
    if (minMileage !== '') filters.minMileage = Number(minMileage);
    if (maxMileage !== '') filters.maxMileage = Number(maxMileage);

    onSearch(filters);
  };

  const handleClear = () => {
    setBrand('');
    setPrice('');
    setMinMileage('');
    setMaxMileage('');
    setIsBrandOpen(false);
    setIsPriceOpen(false);

    onSearch({});
  };

  return (
    <form className={css.filters} onSubmit={handleSubmit}>
      {/* Car brand */}
      <div className={css.field}>
        <label className={css.label} htmlFor="brand">
          Car brand
        </label>

        <div className={css.brandDropdown}>
          <button
            className={css.select}
            id="brand"
            type="button"
            aria-expanded={isBrandOpen}
            onClick={() => {
              setIsBrandOpen((prev) => !prev);
              setIsPriceOpen(false);
            }}
          >
            <span>{brand || 'Choose a brand'}</span>

            <svg
              className={css.arrow}
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use
                href={`/icons.svg#${isBrandOpen ? 'icon-chevron-up' : 'icon-chevron-down'}`}
              />
            </svg>
          </button>

          {isBrandOpen && (
            <ul className={css.brandOptions}>
              {brands.map((item) => (
                <li key={item}>
                  <button
                    className={css.brandOption}
                    type="button"
                    aria-pressed={brand === item}
                    onClick={() => {
                      setBrand(item);
                      setIsBrandOpen(false);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Price */}
      <div className={css.field}>
        <label className={css.label} htmlFor="price">
          Price/ 1 hour
        </label>

        <div className={css.priceDropdown}>
          <button
            className={css.select}
            id="price"
            type="button"
            aria-expanded={isPriceOpen}
            onClick={() => {
              setIsPriceOpen((prev) => !prev);
              setIsBrandOpen(false);
            }}
          >
            <span>{price ? `To $${price}` : 'Choose a price'}</span>

            <svg
              className={css.arrow}
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use
                href={`/icons.svg#${isPriceOpen ? 'icon-chevron-up' : 'icon-chevron-down'}`}
              />
            </svg>
          </button>

          {isPriceOpen && (
            <ul className={css.priceOptions}>
              {priceOptions.map((item) => (
                <li key={item}>
                  <button
                    className={css.priceOption}
                    type="button"
                    aria-pressed={price === String(item)}
                    onClick={() => {
                      setPrice(String(item));
                      setIsPriceOpen(false);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Mileage */}
      <div className={css.field}>
        <label className={css.label} htmlFor="minMileage">
          Car mileage / km
        </label>

        <div className={css.mileageInputs}>
          <input
            className={css.input}
            id="minMileage"
            type="number"
            min="0"
            placeholder="From"
            value={minMileage}
            onChange={(event) => setMinMileage(event.target.value)}
          />

          <input
            className={css.input}
            id="maxMileage"
            type="number"
            min="0"
            placeholder="To"
            value={maxMileage}
            onChange={(event) => setMaxMileage(event.target.value)}
          />
        </div>
      </div>

      {/* Actions */}
      <div className={css.actions}>
        <button className={css.searchButton} type="submit">
          Search
        </button>

        <button className={css.clearButton} type="button" onClick={handleClear}>
          Clear filters
        </button>
      </div>
    </form>
  );
}
