import React from 'react';
import { renderToString } from 'react-dom/server';
import MenuPage from './page';
import { describe, it, expect } from 'vitest';

describe('MenuPage', () => {
  it('renders menu header', () => {
    const html = renderToString(<MenuPage />);
    expect(html).toContain('Menu');
  });
});
