import React from 'react';
import { renderToString } from 'react-dom/server';
import DrinksMenuPage from './page';
import { describe, it, expect } from 'vitest';

describe('DrinksMenuPage', () => {
  it('renders drinks menu image', () => {
    const html = renderToString(<DrinksMenuPage />);
    expect(html).toContain('Drinks Menu');
    expect(html).toContain('data:image/png;base64');
    expect(html).toContain('<img');
  });
});
