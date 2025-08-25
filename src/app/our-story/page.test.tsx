import React from 'react';
import { renderToString } from 'react-dom/server';
import OurStoryPage from './page';
import { describe, it, expect } from 'vitest';

describe('OurStoryPage', () => {
  it('renders our story content', () => {
    const html = renderToString(<OurStoryPage />);
    expect(html).toContain('Our Story');
    expect(html).toContain('Gaslight District');
    expect(html).toContain('wine cellar');
  });
});
