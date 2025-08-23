import React from 'react';
import { renderToString } from 'react-dom/server';
import Navbar from './Navbar';
import { describe, it, expect } from 'vitest';

describe('Navbar', () => {
  it('renders brand name', () => {
    const html = renderToString(<Navbar />);
    expect(html).toContain('Chandlers');
  });
});
