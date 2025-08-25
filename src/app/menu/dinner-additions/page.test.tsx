import React from 'react';
import { renderToString } from 'react-dom/server';
import DinnerAdditionsMenuPage from './page';
import { describe, it, expect } from 'vitest';

describe('DinnerAdditionsMenuPage', () => {
  it('renders dinner additions menu image', () => {
    const html = renderToString(<DinnerAdditionsMenuPage />);
    expect(html).toContain('Dinner Additions');
    expect(html).toContain('data:image/png;base64');
    expect(html).toContain('<img');
  });
});
