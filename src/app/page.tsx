// page.tsx (or page.jsx)
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="flex min-h-screen items-center justify-center py-24">
      <div className="bg-black/70 p-6 rounded-xl flex flex-col items-center">
        <h1 className="text-6xl font-bold text-white">Welcome to Chandlers</h1>

        <Link
          href="/reservations"
          className="mt-4 bg-black text-white px-4 py-2 rounded"
          style={{ fontFamily: 'Copperplate', fontWeight: 'bold' }}
          aria-label="Book a reservation"
        >
          Book a reservation
        </Link>
      </div>
    </section>
  );
}
