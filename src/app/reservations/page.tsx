import React from 'react';

export default function ReservationsPage() {
  return (
    <section id="reservations" className="flex items-center justify-center py-24">
      <div className="bg-black/70 p-4 rounded flex flex-col items-center">
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
