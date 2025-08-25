import React from 'react';

export default function DinnerMenuPage() {
  return (
    <section className="flex items-center justify-center py-24">
      <div className="bg-black/70 p-4 rounded flex flex-col items-center w-full">
        <h1 className="text-4xl font-bold text-white">Dinner Menu</h1>
        <iframe
          src="/chandlers-menu.pdf"
          className="mt-4 w-full h-[80vh]"
        />
      </div>
    </section>
  );
}
