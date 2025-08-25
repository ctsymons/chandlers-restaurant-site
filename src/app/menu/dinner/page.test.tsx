import React from 'react';
import { renderToString } from 'react-dom/server';
import DinnerMenuPage from './page';
import { describe, it, expect } from 'vitest';

describe('DinnerMenuPage', () => {
  it('renders dinner menu pdf', () => {
    const html = renderToString(<DinnerMenuPage />);
    expect(html).toContain('Dinner Menu');
    expect(html).toContain('<iframe');
    expect(html).toContain('07%3A14+dinner+menu.pdf');
  });
});
