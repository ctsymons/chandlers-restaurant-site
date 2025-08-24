import React from 'react';
import { renderToString } from 'react-dom/server';
import HomePage from './page';
import { describe, it, expect } from 'vitest';

describe('HomePage', () => {
  it('renders welcome header and reservation link', () => {
    const html = renderToString(<HomePage />);
    expect(html).toContain('Welcome to Chandlers');
    expect(html).toContain('Book a reservation');
    expect(html).toContain('href="/reservations"');
  });
});
