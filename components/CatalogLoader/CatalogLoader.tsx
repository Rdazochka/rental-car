import css from './CatalogLoader.module.css';

export default function CatalogLoader() {
  return (
    <div className={css.overlay} role="status" aria-live="polite">
      <div className={css.dialog}>
        <span className={css.spinner} aria-hidden="true" />

        <p className={css.title}>Loading cars...</p>

        <p className={css.description}>
          Please wait while we fetch the best cars for you
        </p>
      </div>
    </div>
  );
}
