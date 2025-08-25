import React from 'react';
import { renderToString } from 'react-dom/server';
import LunchMenuPage from './page';
import { describe, it, expect } from 'vitest';

describe('LunchMenuPage', () => {
  it('renders lunch menu image', () => {
    const html = renderToString(<LunchMenuPage />);
    expect(html).toContain('Lunch Menu');
    expect(html).toContain('data:image/png;base64');
    expect(html).toContain('<img');
  });
});
