import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: "Martin's Portfolio",
    template: "%s | Martin's Portfolio",
  },
  description: 'This is Martin K. Nielsen portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='min-h-dvh flex flex-col bg-base-100 text-base-content'>
        <Header />
        <main className='p-4'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
