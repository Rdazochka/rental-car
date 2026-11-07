import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import TanStackProvider from '@/providers/TanStackProvider';
import Header from '@/components/Header/Header';
import { Toaster } from 'sonner';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  weight: ['500'],
});

export const metadata: Metadata = {
  title: {
    default: 'RentalCar | Find Your Perfect Car',
    template: '%s | RentalCar',
  },
  description:
    'Explore our car collection, compare vehicles, and book your perfect rental car with RentalCar.',
  applicationName: 'RentalCar',
  openGraph: {
    title: 'RentalCar | Find Your Perfect Car',
    description:
      'Find, explore, and book your perfect rental car with RentalCar.',
    siteName: 'RentalCar',
    type: 'website',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="uk"
      className={`${manrope.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <TanStackProvider>
          <Header />
          {children}
          <Toaster position="top-right" richColors />
        </TanStackProvider>
      </body>
    </html>
  );
}
