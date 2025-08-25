import React from 'react';

export default function DrinksMenuPage() {
  return (
    <section className="flex items-center justify-center py-24">
      <div className="bg-black/70 p-4 rounded flex flex-col items-center w-full">
        <h1 className="text-4xl font-bold text-white">Drinks Menu</h1>
        <iframe
          src="/chandlers-drinks.pdf"
          className="mt-4 w-full h-[80vh]"
        />
      </div>
    </section>
  );
}
