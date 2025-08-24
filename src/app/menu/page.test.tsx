import React from 'react';
import { renderToString } from 'react-dom/server';
import MenuPage from './page';
import { describe, it, expect } from 'vitest';

describe('MenuPage', () => {
  it('renders menu header and buttons', () => {
    const html = renderToString(<MenuPage />);
    expect(html).toContain('Menu');
    const buttonCount = (html.match(/<button/g) || []).length;
    expect(buttonCount).toBe(5);
    expect(html).toContain('Drinks');
    expect(html).toContain('Lunch');
    expect(html).toContain('Dinner');
    expect(html).toContain('Dinner Additions');
    expect(html).toContain('Full Wine List');
  });
});
