import React from 'react';
import { renderToString } from 'react-dom/server';
import PrivateEventsPage from './page';
import { describe, it, expect } from 'vitest';

describe('PrivateEventsPage', () => {
  it('renders private events header', () => {
    const html = renderToString(<PrivateEventsPage />);
    expect(html).toContain('Private Events');
  });
});
