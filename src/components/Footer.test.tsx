import React from 'react';
import { renderToString } from 'react-dom/server';
import Footer from './Footer';
import { describe, it, expect } from 'vitest';

describe('Footer', () => {
  it('renders current year and brand', () => {
    const year = new Date().getFullYear().toString();
    const html = renderToString(<Footer />);
    expect(html).toContain(year);
    expect(html).toContain('Chandlers');
  });

  it('includes navigation links', () => {
    const html = renderToString(<Footer />);
    expect(html).toContain('Menu');
    expect(html).toContain('Reservations');
  });
});
