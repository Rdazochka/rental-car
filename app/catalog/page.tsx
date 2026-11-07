'use client';

import { useState } from 'react';
import CatalogEmptyState from '@/components/CatalogEmptyState/CatalogEmptyState';

import CarCard from '@/components/CarCard/CarCard';
import CatalogFilters, {
  type CatalogFilterValues,
} from '@/components/CatalogFilters/CatalogFilters';
import CatalogLoader from '@/components/CatalogLoader/CatalogLoader';

import { useCars, useCarFilters } from '@/features/cars/hooks';

import css from './page.module.css';

export default function CatalogPage() {
  const [filters, setFilters] = useState<CatalogFilterValues>({});

  const { data: filterOptions } = useCarFilters();

  const {
    data,
    isFetching,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCars(filters);

  const cars = data?.pages.flatMap((page) => page.cars) ?? [];

  const [filtersResetKey, setFiltersResetKey] = useState(0);

  const handleResetFilters = () => {
    setFilters({});
    setFiltersResetKey((prev) => prev + 1);
  };

  return (
    <main>
      {filterOptions && (
        <CatalogFilters
          key={filtersResetKey}
          brands={filterOptions.brands}
          priceRange={filterOptions.price}
          onSearch={setFilters}
        />
      )}

      <div className={css.catalogResults}>
        <div className={css.carsArea}>
          {cars.length > 0 && (
            <div className={css.carsList}>
              {cars.map((car, index) => (
                <CarCard key={car.id} car={car} isLcp={index === 0} />
              ))}
            </div>
          )}

          {isError && <p>{error.message}</p>}

          {!isFetching && !isError && cars.length === 0 && (
            <CatalogEmptyState onReset={handleResetFilters} />
          )}
        </div>

        {hasNextPage && (
          <div className={css.loadMoreWrapper}>
            <button
              className={css.loadMoreButton}
              type="button"
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              Load more
            </button>
          </div>
        )}
      </div>

      {isFetching && <CatalogLoader />}
    </main>
  );
}
