import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
  { name: 'Drinks', href: '/menu/drinks' },
  { name: 'Lunch', href: '/menu/lunch' },
  { name: 'Dinner', href: '/menu/dinner' },
  { name: 'Dinner Additions', href: '/menu/dinner-additions' },
  { name: 'Full Wine List', href: '/menu/full-wine-list' },
];

export default function MenuPage() {
  return (
    <section className="flex items-center justify-center py-24">
      <div className="bg-black/70 p-4 rounded flex items-center space-x-4">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-white">Menu</h1>
          <div className="mt-4 flex flex-col space-y-2 w-full">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 text-center"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <Image
          src="/chandlers-bloody.webp"
          alt="Chandler's Bloody Mary"
          width={300}
          height={400}
          className="rounded"
        />
      </div>
    </section>
  );
}
