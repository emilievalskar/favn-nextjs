'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useLang } from './LangContext';

const NAV_LINKS = [
  { href: '/',               labelKey: 0 },
  { href: '/behandlinger',   labelKey: 1 },
  { href: '/sikker-salong',  labelKey: 2 },
  { href: '/om-oss',         labelKey: 6 },
  { href: '/kontakt',        labelKey: 4 },
  { href: '/stillinger',     labelKey: 5 },
];

const BOOK_URL = 'https://app.acuityscheduling.com/schedule/cd20d4b9';

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 60); }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="nav-logo-wrap">
          <span className="nav-logo-word">FAVN</span>
          <span className="nav-logo-sub">Neglesalong</span>
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
              >
                {t.nav[link.labelKey]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <div className="lang-switch">
            <button
              data-lang="no"
              className={lang === 'no' ? 'active' : ''}
              onClick={() => setLang('no')}
            >
              NO
            </button>
            <span className="lang-sep">/</span>
            <button
              data-lang="en"
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <a href={BOOK_URL} target="_blank" rel="noreferrer" className="nav-cta">
            {t.bookBtn}
          </a>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Åpne meny"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav[link.labelKey]}
          </Link>
        ))}
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noreferrer"
          className="mobile-book"
          onClick={() => setMenuOpen(false)}
        >
          {t.bookBtn}
        </a>
      </div>
    </>
  );
}