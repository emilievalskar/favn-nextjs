'use client';
import Link from 'next/link';
import { useLang } from './LangContext';

const NAV_LINKS = [
  { href: '/',              label: 'Hjem' },
  { href: '/behandlinger',  label: 'Behandlinger' },
  { href: '/sikker-salong', label: 'Sikker salong' },
  { href: '/om-oss',        label: 'Om oss' },
  { href: '/bestill',       label: 'Bestill time' },
  { href: '/kontakt',       label: 'Kontakt' },
  { href: '/stillinger',    label: 'Ledige stillinger' },
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="footer-brand-logo">FAVN</Link>
          <span className="footer-brand-sub">Neglesalong</span>
          <p>{t.footerTagline}</p>
        </div>

        <div className="footer-col">
          <h5>{t.footerNav}</h5>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>{t.footerContact}</h5>
          <p>
            hei@favnoslo.no<br />
            90 20 10 70<br /><br />
            Neuberggata 10A<br />
            Bryggegata 5, Oslo
          </p>
        </div>

        <div className="footer-col">
          <h5>{t.footerSocial}</h5>
          <ul>
            <li><a href="https://instagram.com/favnoslo" target="_blank" rel="noreferrer">Instagram @favnoslo</a></li>
            <li><a href="https://facebook.com/favnoslo" target="_blank" rel="noreferrer">Facebook @favnoslo</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>{t.footerCopy}</span>
        <div className="footer-social">
          <a href="https://instagram.com/favnoslo" target="_blank" rel="noreferrer">@favnoslo</a>
        </div>
      </div>
    </footer>
  );
}