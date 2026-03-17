'use client';
import Image from 'next/image';
import { useLang } from '../../components/LangContext';
import useReveal from '../../components/useReveal';
import PhotoPageHeader from '../../components/PhotoPageHeader';
import { BOOK_URL } from '../../data/settings';
import styles from './om-oss.module.css';

// ─── Placeholder team data ───────────────────────────────────────────────────
// Replace with real content when the salon owner sends it
const teamMembers = [
  {
    id: 1,
    image: '/images/team-1.jpg',
    name: { no: 'Navn her', en: 'Name here' },
    role: { no: 'Rolle her', en: 'Role here' },
    bio: {
      no: 'Kort beskrivelse kommer snart.',
      en: 'Short description coming soon.',
    },
  },
  {
    id: 2,
    image: '/images/team-2.jpg',
    name: { no: 'Navn her', en: 'Name here' },
    role: { no: 'Rolle her', en: 'Role here' },
    bio: {
      no: 'Kort beskrivelse kommer snart.',
      en: 'Short description coming soon.',
    },
  },
  {
    id: 3,
    image: '/images/team-3.jpg',
    name: { no: 'Navn her', en: 'Name here' },
    role: { no: 'Rolle her', en: 'Role here' },
    bio: {
      no: 'Kort beskrivelse kommer snart.',
      en: 'Short description coming soon.',
    },
  },
  {
    id: 4,
    image: '/images/team-4.jpg',
    name: { no: 'Navn her', en: 'Name here' },
    role: { no: 'Rolle her', en: 'Role here' },
    bio: {
      no: 'Kort beskrivelse kommer snart.',
      en: 'Short description coming soon.',
    },
  },
];

const t = (obj, lang) => (typeof obj === 'string' ? obj : obj?.[lang] ?? obj?.no ?? '');

export default function OmOssClient() {
  const { lang } = useLang();
  useReveal();

  return (
    <>
      {/* ── HERO ── */}
      <PhotoPageHeader
        imageSrc="/images/om-oss.jpg"
        imageAlt="Om FAVN Neglesalong"
        eyebrow={lang === 'en' ? 'About us' : 'Om oss'}
        title={lang === 'en' ? 'Meet the people<br>behind <em>FAVN</em>' : 'Møt menneskene<br>bak <em>FAVN</em>'}
        height="55vh"
        minHeight="420px"
        objectPos="center 40%"
      />

      {/* ── OM FAVN ── */}
      <section className={styles.intro}>
        <div className={styles.introLayout}>
          <div className="reveal">
            <p className="eyebrow-label">{lang === 'en' ? 'About FAVN' : 'Om FAVN'}</p>
            <h2 className="section-title">
              {lang === 'en'
                ? <>A salon built on<br /><em>care and craft</em></>
                : <>En salong bygget<br />på <em>omsorg og faget</em></>}
            </h2>
            <div className="divider" />
            <p className={styles.introP}>
              {lang === 'en'
                ? 'Placeholder text — the salon owner will send the real content soon. This section will tell the story of FAVN, how it was founded and what makes it special.'
                : 'Plassholdertekst — innhold kommer snart fra salongeierne. Denne seksjonen vil fortelle historien om FAVN, hvordan salongen ble til og hva som gjør den spesiell.'}
            </p>
            <p className={styles.introP}>
              {lang === 'en'
                ? 'A second paragraph about the salon\'s values, approach to nail health and the experience they want every guest to have.'
                : 'Et andre avsnitt om salongenes verdier, tilnærming til neglehelse og den opplevelsen de ønsker at hver gjest skal ha.'}
            </p>
          </div>

          <div className={`${styles.introImage} reveal`} data-delay="0.12s">
            <Image
              src="/images/om-oss-interior.jpg"
              alt="FAVN interiør"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className={styles.team}>
        <div className="inner">
          <div className="reveal">
            <p className="eyebrow-label">{lang === 'en' ? 'The team' : 'Teamet'}</p>
            <h2 className="section-title">
              {lang === 'en' ? <>Meet <em>us</em></> : <>Møt <em>oss</em></>}
            </h2>
            <div className="divider" />
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, i) => (
              <div key={member.id} className={`${styles.memberCard} reveal`} data-delay={`${i * 0.1}s`}>
                <div className={styles.memberImage}>
                  <Image
                    src={member.image}
                    alt={t(member.name, lang)}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <div className={styles.memberRole}>{t(member.role, lang)}</div>
                  <h3 className={styles.memberName}>{t(member.name, lang)}</h3>
                  <p className={styles.memberBio}>{t(member.bio, lang)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className={styles.ctaSection}>
        <Image
          src="/images/cta.jpg"
          alt="FAVN Neglesalong"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 70%' }}
        />
        <div className={styles.ctaInner}>
          <div className="reveal">
            <p className="eyebrow-label" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {lang === 'en' ? 'Ready to visit us?' : 'Klar for å besøke oss?'}
            </p>
            <h2 className={styles.ctaTitle}>
              {lang === 'en'
                ? <>Book your appointment<br /><em>today</em></>
                : <>Bestill din time<br /><em>i dag</em></>}
            </h2>
            <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn-bordeaux">
              {lang === 'en' ? 'Book appointment' : 'Bestill time'}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}