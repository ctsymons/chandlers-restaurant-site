import React from 'react';
import { renderToString } from 'react-dom/server';
import ReservationsPage from './page';
import { describe, it, expect } from 'vitest';

describe('ReservationsPage', () => {
  it('renders reservations header', () => {
    const html = renderToString(<ReservationsPage />);
    expect(html).toContain('Reservations');
  });

  it('includes a link to find a table', () => {
    const html = renderToString(<ReservationsPage />);
    expect(html).toContain('Find a table');
    expect(html).toContain('https://www.opentable.com/chandlers-a-restaurant?');
  });
});
