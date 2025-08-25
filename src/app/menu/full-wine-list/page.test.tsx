import React from 'react';
import { renderToString } from 'react-dom/server';
import FullWineListPage from './page';
import { describe, it, expect } from 'vitest';

describe('FullWineListPage', () => {
  it('renders full wine list menu placeholder', () => {
    const html = renderToString(<FullWineListPage />);
    expect(html).toContain('Full Wine List');
    expect(html).toContain('Menu coming soon');
  });
});
