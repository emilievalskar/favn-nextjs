'use client';
import { createContext, useContext, useState, useEffect } from 'react';

// ─────────────────────────────────────────────
// Translations (mirrors shared.js translations object)
// ─────────────────────────────────────────────
export const translations = {
  no: {
    nav: ['Hjem', 'Behandlinger', 'Sikker salong', 'Bestill time', 'Kontakt', 'Ledige stillinger', 'Om oss'],
    bookBtn: 'Bestill time',
    footerTagline:
      'En fredfull oase midt i Oslo — hvor skjønnhet møter omsorg og faglig dyktighet.',
    footerNav: 'Navigasjon',
    footerContact: 'Kontakt',
    footerSocial: 'Sosiale medier',
    footerCopy: '© 2025 FAVN Neglesalong Oslo',
  },
  en: {
    nav: ['Home', 'Treatments', 'Safe salon', 'Book appointment', 'Contact', 'Job openings', 'About us'],
    bookBtn: 'Book now',
    footerTagline:
      'A peaceful oasis in the heart of Oslo — where beauty meets care and expertise.',
    footerNav: 'Navigation',
    footerContact: 'Contact',
    footerSocial: 'Social media',
    footerCopy: '© 2025 FAVN Nail Salon Oslo',
  },
};

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLangState] = useState('no');

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('favnLang');
    if (stored === 'en' || stored === 'no') setLangState(stored);
  }, []);

  function setLang(l) {
    setLangState(l);
    localStorage.setItem('favnLang', l);
    document.documentElement.lang = l;
  }

  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}