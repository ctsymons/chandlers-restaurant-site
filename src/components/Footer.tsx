import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Chandlers. All rights reserved.</p>
    </footer>
  );
}
