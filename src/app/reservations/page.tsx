import React from 'react';

export default function ReservationsPage() {
  return (
    <section
      id="reservations"
      className="relative flex items-center justify-center py-24 min-h-[400px] overflow-hidden"
    >
      <div className="absolute inset-0 flex justify-between items-center">
        <img src="/images/chandlers-bloody.jpg" alt="" className="flex-none" />
        <img src="/images/chandlers-wine-crates.jpg" alt="" className="flex-none" />
      </div>
      <div className="relative z-10 bg-black/70 p-4 rounded flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white">Reservations</h1>
        <p className="mt-2 text-white">Please contact us to book your table.</p>
        <a
          href="https://www.opentable.com/chandlers-a-restaurant?"
          className="mt-4 bg-black text-white px-4 py-2 rounded"
          style={{ fontFamily: 'Copperplate', fontWeight: 'bold' }}
        >
          Find a table
        </a>
      </div>
    </section>
  );
}
