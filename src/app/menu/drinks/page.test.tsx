import React from 'react';
import { renderToString } from 'react-dom/server';
import DrinksMenuPage from './page';
import { describe, it, expect } from 'vitest';

describe('DrinksMenuPage', () => {
  it('renders drinks menu PDF', () => {
    const html = renderToString(<DrinksMenuPage />);
    expect(html).toContain('Drinks Menu');
    expect(html).toContain('chandlers-drinks.pdf');
    expect(html).toContain('<iframe');
  });
});
