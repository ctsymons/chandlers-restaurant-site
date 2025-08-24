import React from 'react';

const menuItems = [
  'Drinks',
  'Lunch',
  'Dinner',
  'Dinner Additions',
  'Full Wine List',
];

export default function MenuPage() {
  return (
    <section className="flex items-center justify-center py-24">
      <div className="bg-black/70 p-4 rounded flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white">Menu</h1>
        <div className="mt-4 flex flex-col space-y-2 w-full">
          {menuItems.map((item) => (
            <button
              key={item}
              className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
