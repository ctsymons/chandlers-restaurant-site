import React from 'react';
import { renderToString } from 'react-dom/server';
import DrinksMenuPage from './page';
import { describe, it, expect } from 'vitest';

describe('DrinksMenuPage', () => {
  it('renders drinks menu pdf', () => {
    const html = renderToString(<DrinksMenuPage />);
    expect(html).toContain('Drinks Menu');
    expect(html).toContain('<iframe');
    expect(html).toContain('CURRENTJune+Drink+List.pdf');
  });
});
