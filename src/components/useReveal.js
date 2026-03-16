'use client';
import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to every .reveal element on the page.
 * Adds the "visible" class when an element enters the viewport.
 * Call this hook once inside the top-level page component.
 */
export default function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => {
      if (el.dataset.delay) el.style.transitionDelay = el.dataset.delay;
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);
}
