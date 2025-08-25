"use client";

import { useEffect } from 'react';

export default function ParallaxBackground() {
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.25;
      document.body.style.backgroundPosition = `center ${-offset}px`;
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
