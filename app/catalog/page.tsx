'use client';

import { useCars } from '@/features/cars/hooks';

export default function CatalogPage() {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCars();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <h1>Cars loaded: {data?.pages.flatMap((page) => page.cars).length}</h1>

      <h2>Total cars: {data?.pages[0].totalCars}</h2>

      <h3>Total pages: {data?.pages[0].totalPages}</h3>

      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? 'Loading...' : 'Load more'}
      </button>
    </div>
  );
}
