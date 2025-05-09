import './styles/globals.css';
import './styles/fonts.css';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio of a game designer and developer',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[--background] text-[--foreground]">
        <Header />
        <main className="flex-1 px-4 md:px-12 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
