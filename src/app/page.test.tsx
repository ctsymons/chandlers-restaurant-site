// HomePage.test.tsx (or .tsx)
// Flexible test: accepts either a <Link>/<a href="/reservations"> or a <button>
// Make sure HomePage default-exports your component from "./page"

import React from 'react';
import { renderToString } from 'react-dom/server';
import HomePage from './page';
import { describe, it, expect } from 'vitest';

describe('HomePage', () => {
  it('renders welcome header and a way to reserve (link or button)', () => {
    const html = renderToString(<HomePage />);

    // Header text should be present
    expect(html).toContain('Welcome to Chandlers');

    // Encourage semantic <h1>, but don't break if the dev chose another tag:
    const hasH1Header =
      /<h1[^>]*>[\s\S]*Welcome to Chandlers[\s\S]*<\/h1>/i.test(html);
    expect(hasH1Header).toBe(true);

    // The visible CTA text should be present
    expect(html).toContain('Book a reservation');

    // Pass if it's a link to the reservations section on the home page ...
    const hasReservationLink =
      /<a[^>]*href=(["'])\/?#reservations\1[^>]*>[\s\S]*?Book a reservation[\s\S]*?<\/a>/i.test(
        html
      );

    // ...or if it's a button (e.g., opens a modal)
    const hasReservationButton =
      /<button[^>]*>[\s\S]*?Book a reservation[\s\S]*?<\/button>/i.test(html);

    expect(hasReservationLink || hasReservationButton).toBe(true);
  });
});
