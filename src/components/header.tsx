'use client';

import Link from 'next/link';

export default function header() {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-[--background] text-[--foreground] shadow-md">
      <h1 className="text-2xl font-playfair font-bold">My Portfolio</h1>
      <nav className="space-x-6 font-lato">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
