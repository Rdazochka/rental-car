'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isCatalogPage = pathname === '/catalog';
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" className={css.logo} aria-label="RentalCar — Home">
          <svg width="102" height="16" aria-hidden="true">
            <use href="/icons.svg#icon-logo" />
          </svg>
        </Link>

        <nav className={css.navigation}>
          <Link
            href="/"
            className={isHomePage ? css.active : ''}
            aria-current={isHomePage ? 'page' : undefined}
          >
            Home
          </Link>

          <Link
            href="/catalog"
            className={isCatalogPage ? css.active : ''}
            aria-current={isCatalogPage ? 'page' : undefined}
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}
