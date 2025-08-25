import React from 'react';
import { renderToString } from 'react-dom/server';
import MenuPage from './page';
import { describe, it, expect } from 'vitest';

describe('MenuPage', () => {
  it('renders menu header and links', () => {
    const html = renderToString(<MenuPage />);
    expect(html).toContain('Menu');
    const linkCount = (html.match(/<a/g) || []).length;
    expect(linkCount).toBe(5);
    expect(html).toContain('href="/menu/drinks"');
    expect(html).toContain('Drinks');
    expect(html).toContain('href="/menu/lunch"');
    expect(html).toContain('Lunch');
    expect(html).toContain('href="/menu/dinner"');
    expect(html).toContain('Dinner');
    expect(html).toContain('href="/menu/dinner-additions"');
    expect(html).toContain('Dinner Additions');
    expect(html).toContain('href="/menu/full-wine-list"');
    expect(html).toContain('Full Wine List');
  });
});
