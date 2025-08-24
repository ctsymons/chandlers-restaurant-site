import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="flex items-center justify-center py-24">
      <div className="bg-black/70 p-4 rounded flex flex-col items-center">
        <h1 className="text-6xl font-bold text-white">Welcome to Chandlers</h1>
        <Link
          href="/reservations"
          className="mt-4 bg-black text-white px-4 py-2 rounded"
          style={{ fontFamily: 'Copperplate', fontWeight: 'bold' }}
        >
          Book a reservation
        </Link>
      </div>
    </section>
  );
}
