import React from 'react';
import { MENU_PLACEHOLDER } from '../placeholder-image';

export default function LunchMenuPage() {
  return (
    <section className="flex items-center justify-center py-24">
      <div className="bg-black/70 p-4 rounded flex flex-col items-center w-full">
        <h1 className="text-4xl font-bold text-white">Lunch Menu</h1>
        <img
          src={MENU_PLACEHOLDER}
          alt="Lunch Menu"
          className="mt-4 w-full h-[80vh]"
        />
      </div>
    </section>
  );
}
