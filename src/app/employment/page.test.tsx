import React from 'react';
import { renderToString } from 'react-dom/server';
import EmploymentPage from './page';
import { describe, it, expect } from 'vitest';

describe('EmploymentPage', () => {
  it('renders employment header', () => {
    const html = renderToString(<EmploymentPage />);
    expect(html).toContain('Employment');
  });
});
