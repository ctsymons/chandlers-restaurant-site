import React from 'react';
import { renderToString } from 'react-dom/server';
import DinnerMenuPage from './page';
import { describe, it, expect } from 'vitest';

describe('DinnerMenuPage', () => {
  it('renders dinner menu PDF', () => {
    const html = renderToString(<DinnerMenuPage />);
    expect(html).toContain('Dinner Menu');
    expect(html).toContain('chandlers-menu.pdf');
    expect(html).toContain('<iframe');
  });
});
