// page.tsx (or page.jsx)
import React from 'react';
import Link from 'next/link';
import ReservationsPage from './reservations/page';
import MenuPage from './menu/page';
import PrivateEventsPage from './private-events/page';
import OurStoryPage from './our-story/page';
import EmploymentPage from './employment/page';
import ContactsPage from './contacts/page';

export default function HomePage() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative w-fit mx-auto">
        <img
          src="/images/chandlers-barton-art-1.jpg"
          alt="Chandlers artwork"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/70 p-6 rounded-xl flex flex-col items-center">
            <h1 className="text-6xl font-bold text-white">Welcome to Chandlers</h1>

<Link
  href="#reservations"
  className="mt-4 bg-black text-white px-4 py-2 rounded"
  style={{ fontFamily: 'Copperplate', fontWeight: 'bold' }}
  aria-label="Book a reservation"
  onClick={(e) => handleScroll(e, 'reservations')}
>
  Book a reservation
</Link>
        </div>
      </section>
      <ReservationsPage />
      <MenuPage />
      <PrivateEventsPage />
      <OurStoryPage />
      <EmploymentPage />
      <ContactsPage />
    </>
  );
}
