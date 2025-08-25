import React from 'react';

export default function DinnerAdditionsMenuPage() {
  return (
    <section className="flex items-center justify-center py-24">
      <div className="bg-black/70 p-4 rounded flex flex-col items-center w-full">
        <h1 className="text-4xl font-bold text-white">Dinner Additions</h1>
        <iframe
          src="https://static1.squarespace.com/static/57f6bcbf197aea89dbc60ea2/t/687542a224006d5df903710b/1752515235086/07%3A14+dinner+additions.pdf"
          title="Dinner Additions Menu"
          className="mt-4 w-full h-[80vh]"
        />
      </div>
    </section>
  );
}
