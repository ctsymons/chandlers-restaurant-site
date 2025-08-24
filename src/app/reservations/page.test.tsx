import React from 'react';
import { renderToString } from 'react-dom/server';
import ReservationsPage from './page';
import { describe, it, expect } from 'vitest';

describe('ReservationsPage', () => {
  it('renders reservations header', () => {
    const html = renderToString(<ReservationsPage />);
    expect(html).toContain('Reservations');
  });
});
