import React from 'react';
import { renderToString } from 'react-dom/server';
import OurStoryPage from './page';
import { describe, it, expect } from 'vitest';

describe('OurStoryPage', () => {
  it('renders our story header', () => {
    const html = renderToString(<OurStoryPage />);
    expect(html).toContain('Our Story');
  });
});
