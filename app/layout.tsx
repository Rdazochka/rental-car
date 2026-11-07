import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import TanStackProvider from '@/providers/TanStackProvider';
import Header from '@/components/Header/Header';

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
  title: 'RentalCar',
  description: 'Find and rent your perfect car with RentalCar.',
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
        </TanStackProvider>
      </body>
    </html>
  );
}
