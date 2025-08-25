import React from 'react';
import { renderToString } from 'react-dom/server';
import LunchMenuPage from './page';
import { describe, it, expect } from 'vitest';

describe('LunchMenuPage', () => {
  it('renders lunch menu pdf', () => {
    const html = renderToString(<LunchMenuPage />);
    expect(html).toContain('Lunch Menu');
    expect(html).toContain('<iframe');
    expect(html).toContain('7%3A5+Lunch+menu+copy+2.pdf');
  });
});
