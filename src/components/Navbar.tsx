"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black/70 text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 flex justify-between items-center">
        <div className="flex flex-col">
          <Link href="/" className="site-title text-4xl">Chandlers</Link>
        </div>
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="px-2 py-1 rounded hover:bg-black/50 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
          {open && (
              <ul className="absolute right-0 mt-2 w-40 bg-black/80 rounded shadow-lg">
                <li>
                  <Link href="/menu" className="block px-4 py-2 hover:bg-black/60">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#reservations"
                    className="block px-4 py-2 hover:bg-black/60"
                  >
                    Reservations
                  </Link>
                </li>
                <li>
                  <Link href="/#private-events" className="block px-4 py-2 hover:bg-black/60">
                    Private Events
                  </Link>
                </li>
                <li>
                  <Link href="/#our-story" className="block px-4 py-2 hover:bg-black/60">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/#employment" className="block px-4 py-2 hover:bg-black/60">
                    Employment
                  </Link>
                </li>
                <li>
                  <Link href="/#contacts" className="block px-4 py-2 hover:bg-black/60">
                    Contacts
                  </Link>
                </li>
              </ul>
            )}
        </div>
      </div>
    </nav>
  );
}
