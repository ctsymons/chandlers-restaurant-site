import React from 'react';

export default function DinnerMenuPage() {
  return (
    <section className="flex items-center justify-center py-24">
      <div className="bg-black/70 p-4 rounded flex flex-col items-center w-full">
        <h1 className="text-4xl font-bold text-white">Dinner Menu</h1>
        <iframe
          src="https://static1.squarespace.com/static/57f6bcbf197aea89dbc60ea2/t/68753d6f3fd22b60941592be/1752513903521/07%3A14+dinner+menu.pdf"
          title="Dinner Menu"
          className="mt-4 w-full h-[80vh]"
        />
      </div>
    </section>
  );
}
