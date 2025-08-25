import React from 'react';
import { renderToString } from 'react-dom/server';
import DinnerMenuPage from './page';
import { describe, it, expect } from 'vitest';

describe('DinnerMenuPage', () => {
  it('renders dinner menu image', () => {
    const html = renderToString(<DinnerMenuPage />);
    expect(html).toContain('Dinner Menu');
    expect(html).toContain('data:image/png;base64');
    expect(html).toContain('<img');
  });
});
