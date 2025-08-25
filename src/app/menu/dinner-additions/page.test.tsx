import React from 'react';
import { renderToString } from 'react-dom/server';
import DinnerAdditionsMenuPage from './page';
import { describe, it, expect } from 'vitest';

describe('DinnerAdditionsMenuPage', () => {
  it('renders dinner additions menu placeholder', () => {
    const html = renderToString(<DinnerAdditionsMenuPage />);
    expect(html).toContain('Dinner Additions');
    expect(html).toContain('Menu coming soon');
  });
});
