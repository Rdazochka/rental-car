import Link from 'next/link';
import css from './Hero.module.css';

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.content}>
        <h1 className={css.title}>Find your perfect rental car</h1>

        <p className={css.description}>
          Reliable and budget-friendly rentals for any journey
        </p>

        <Link href="/catalog" className={css.button}>
          <p className={css.buttonText}>View Catalog</p>
        </Link>
      </div>
    </section>
  );
}
