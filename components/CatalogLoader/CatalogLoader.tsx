'use client';

import { useEffect } from 'react';
import css from './CatalogLoader.module.css';

export default function CatalogLoader() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, []);

  return (
    <div className={css.overlay} role="status" aria-live="polite">
      <div className={css.dialog}>
        <span className={css.spinner} aria-hidden="true" />

        <p className={css.title}>Loading cars...</p>

        <p className={css.description}>
          Please wait while we fetch the best
          <br />
          cars for you
        </p>
      </div>
    </div>
  );
}
