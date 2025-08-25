import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black/70 text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 text-center md:text-left md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-semibold">Chandlers</h2>
          <p className="mt-2">215 Howard St, Petoskey, MI</p>
          <p>(231) 347-0254</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Navigate</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/menu" className="hover:underline">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/reservations" className="hover:underline">
                Reservations
              </Link>
            </li>
            <li>
              <Link href="/our-story" className="hover:underline">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/employment" className="hover:underline">
                Employment
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:text-right flex flex-col justify-between">
          <p>&copy; {year} Chandlers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
