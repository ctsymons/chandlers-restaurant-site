import React from 'react';
import { renderToString } from 'react-dom/server';
import ContactsPage from './page';
import { describe, it, expect } from 'vitest';

describe('ContactsPage', () => {
  it('renders contacts header', () => {
    const html = renderToString(<ContactsPage />);
    expect(html).toContain('Contacts');
  });
});
