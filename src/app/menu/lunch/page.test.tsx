import React from 'react';
import { renderToString } from 'react-dom/server';
import LunchMenuPage from './page';
import { describe, it, expect } from 'vitest';

describe('LunchMenuPage', () => {
  it('renders lunch menu PDF', () => {
    const html = renderToString(<LunchMenuPage />);
    expect(html).toContain('Lunch Menu');
    expect(html).toContain('chandlers-lunch.pdf');
    expect(html).toContain('<iframe');
  });
});
