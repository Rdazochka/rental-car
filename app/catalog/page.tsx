'use client';

import { useState } from 'react';

import CarCard from '@/components/CarCard/CarCard';
import CatalogFilters, {
  type CatalogFilterValues,
} from '@/components/CatalogFilters/CatalogFilters';

import { useCars, useCarFilters } from '@/features/cars/hooks';

import css from './page.module.css';

export default function CatalogPage() {
  const [filters, setFilters] = useState<CatalogFilterValues>({});

  const {
    data: filterOptions,
    isLoading: isFiltersLoading,
    isError: isFiltersError,
  } = useCarFilters();

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCars(filters);

  const cars = data?.pages.flatMap((page) => page.cars) ?? [];

  return (
    <main>
      {filterOptions && (
        <CatalogFilters
          brands={filterOptions.brands}
          priceRange={filterOptions.price}
          onSearch={setFilters}
        />
      )}

      {isFiltersLoading && <p>Loading filters...</p>}

      {isFiltersError && <p>Failed to load filters.</p>}

      {isLoading && <p>Loading cars...</p>}

      {isError && <p>{error.message}</p>}

      {!isLoading && !isError && cars.length === 0 && <p>No cars found</p>}

      {!isLoading && !isError && cars.length > 0 && (
        <div className={css.carsList}>
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}

      {hasNextPage && (
        <div className={css.loadMoreWrapper}>
          <button
            className={css.loadMoreButton}
            type="button"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Loading...' : 'Load more'}
          </button>
        </div>
      )}
    </main>
  );
}
