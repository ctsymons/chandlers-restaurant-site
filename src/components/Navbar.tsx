import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-3 flex justify-between">
        <Link href="/" className="site-title">Chandlers</Link>
      </div>
    </nav>
  );
}
