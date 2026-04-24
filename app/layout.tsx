import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter'
});

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope'
});

export const metadata: Metadata = {
  title: 'SAOMED | Профессор Нилюфар Хушвакова',
  description:
    'Профессиональный персональный сайт ЛОР-профессора и основателя SAOMED и GENMEDICAL.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000')
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${manrope.variable} font-sans`}>{children}</body>
    </html>
  );
}
