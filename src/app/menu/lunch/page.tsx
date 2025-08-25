import React from 'react';

export default function LunchMenuPage() {
  return (
    <section className="flex items-center justify-center py-24">
      <div className="bg-black/70 p-4 rounded flex flex-col items-center w-full">
        <h1 className="text-4xl font-bold text-white">Lunch Menu</h1>
        <iframe
          src="https://static1.squarespace.com/static/57f6bcbf197aea89dbc60ea2/t/68753d81a023ec3092d4f8d7/1752513921707/7%3A5+Lunch+menu+copy+2.pdf"
          title="Lunch Menu"
          className="mt-4 w-full h-[80vh]"
        />
      </div>
    </section>
  );
}
