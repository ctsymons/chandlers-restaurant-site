import React from 'react';

export default function OurStoryPage() {
  return (
    <section id="our-story" className="flex items-center justify-center py-24">
      <div className="bg-black/70 p-4 rounded flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white">Our Story</h1>
        <p className="mt-2 text-white text-center">
          Nestled in Petoskey’s historic Gaslight District, Chandler’s opened in
          December 1999 behind the iconic Symons General Store. Channeling a
          chic European vibe, we invite you to dine in three distinctive
          settings: the lively main dining room and bar, a seasonal patio, and
          Symons Wine Cellar. Three unique areas, one intimate feel.
        </p>
        <p className="mt-4 text-white text-center">
          Our rustic wine cellar hosts a curated selection from vineyards around
          the globe. Explore our wine list and call to order for pickup or
          delivery—enjoy 10% off any half case or 15% off a full case.
        </p>
      </div>
    </section>
  );
}
