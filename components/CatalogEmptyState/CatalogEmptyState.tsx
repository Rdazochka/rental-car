import css from './CatalogEmptyState.module.css';
import Image from 'next/image';

interface CatalogEmptyStateProps {
  onReset: () => void;
}

export default function CatalogEmptyState({ onReset }: CatalogEmptyStateProps) {
  return (
    <section className={css.emptyState}>
      <div className={css.illustration}>
        <Image
          src="/images/no-cars.webp"
          alt="No cars found"
          fill
          sizes="414px"
        />
      </div>

      <h2 className={css.title}>No cars found</h2>

      <p className={css.description}>
        We couldn’t find any cars that match your
        <br />
        current filters. Try changing your search
        <br />
        criteria or reset the filters.
      </p>

      <button className={css.resetButton} type="button" onClick={onReset}>
        Reset filters
      </button>
    </section>
  );
}
