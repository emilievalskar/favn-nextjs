'use client';
import Image from 'next/image';
import { useLang } from '../../components/LangContext';
import useReveal from '../../components/useReveal';
import PhotoPageHeader from '../../components/PhotoPageHeader';
import { BOOK_URL } from '../../data/settings';
import styles from './sikker-salong.module.css';

const promises = [
  {
    num: '01',
    title: { no: 'Sterilisert utstyr', en: 'Sterilised equipment' },
    text: { no: 'Alt utstyr steriliseres grundig mellom hver enkelt kunde. Ingen gjenbruk.', en: 'All equipment is thoroughly sterilised between each client. No reuse.' },
    dark: false,
  },
  {
    num: '02',
    title: { no: 'Personlige sett', en: 'Personal kits' },
    text: { no: 'Faste kunder får egne personlige redskaper som bare brukes på dem.', en: 'Regular clients receive their own personal tools used exclusively for them.' },
    dark: true,
  },
  {
    num: '03',
    title: { no: 'Rent & ryddig', en: 'Clean & tidy' },
    text: { no: 'Salongen vaskes mellom hver kunde. Hånddesinfeksjon alltid tilgjengelig.', en: 'The salon is cleaned between each client. Hand sanitiser always available.' },
    dark: false,
  },
  {
    num: '04',
    title: { no: 'Du går frisk hjem', en: 'You leave healthy' },
    text: { no: 'Vi sørger for at du forlater salongen i minst like god stand som da du kom.', en: 'We make sure you leave the salon in at least as good condition as when you arrived.' },
    dark: true,
  },
];

const products = [
  {
    name: 'CND Shellac',
    desc: { no: 'HEMA-fritt. Fritt for toluen, kamfer, formaldehyd, ftalater og metyl etyl keton. Tryggest i klassen.', en: 'HEMA-free. Free from toluene, camphor, formaldehyde, phthalates and methyl ethyl ketone. Safest in its class.' },
  },
  {
    name: 'IBX System',
    desc: { no: 'HEMA-fritt. Penetrerer neglen naturlig uten fjerning. Vokser ut med natureglen — ingen bivirkninger.', en: 'HEMA-free. Penetrates the nail naturally without removal. Grows out with the natural nail — no side effects.' },
  },
  {
    name: { no: 'Øvrige produkter', en: 'Other products' },
    desc: { no: 'Kun produkter fra leverandører med høy kvalitetsstandard — testet, dokumentert og anerkjent i bransjen.', en: 'Only products from suppliers with high quality standards — tested, documented and recognised in the industry.' },
  },
];

const t = (obj, lang) => (typeof obj === 'string' ? obj : obj?.[lang] ?? obj?.no ?? '');

export default function SikkerSalongClient() {
  const { lang } = useLang();
  useReveal();

  return (
    <>
      <PhotoPageHeader
        imageSrc="/images/sikker-salong.jpg"
        imageAlt="Sikker salong"
        eyebrow={lang === 'en' ? 'Safe salon' : 'Sikker salong'}
        title={lang === 'en' ? "It all starts<br>with <em>safety</em>" : "Det hele begynner<br>med <em>sikkerhet</em>"}
        height="55vh"
        minHeight="420px"
        objectPos="center 50%"
      />

      <section id="safety-text" className={styles.safetyText}>
        <div className={styles.safetyGrid}>
          <div className="reveal">
            <p className="eyebrow-label">{lang === 'en' ? 'Our approach' : 'Vår tilnærming'}</p>
            <h2 className="section-title">
              {lang === 'en' ? <>Safe from<br /><em>start to finish</em></> : <>Trygg fra<br /><em>start til slutt</em></>}
            </h2>
            <div className="divider" />
            <p className={styles.safetyP}>
              {lang === 'en'
                ? 'At FAVN, hygiene and safety are not routines — they are the core of everything we do. We believe beauty treatments should benefit you, not just in the moment, but for your nail health in the long run.'
                : 'Hos FAVN er hygiene og sikkerhet ikke rutiner — det er kjernen i alt vi gjør. Vi mener skjønnhetsbehandlinger skal gjøre deg godt, ikke bare i øyeblikket, men for neglehelsen på lang sikt.'}
            </p>
            <p className={styles.safetyP}>
              {lang === 'en'
                ? 'You arrive well, and you leave well. That is our promise.'
                : 'Du kommer frisk til din avtale, og du går frisk. Det er løftet vårt.'}
            </p>
            <div style={{ marginTop: 36 }}>
              <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn-dark">
                {lang === 'en' ? 'Book safely with us' : 'Bestill trygt hos oss'}
              </a>
            </div>
          </div>

          <div className={`${styles.stRight} reveal`} data-delay="0.12s">
            {promises.map((p) => (
              <div key={p.num} className={`${styles.promiseCard}${p.dark ? ` ${styles.dark}` : ''}`}>
                <div className={styles.pcNum}>{p.num}</div>
                <div className={styles.pcTitle}>{t(p.title, lang)}</div>
                <p className={styles.pcText}>{t(p.text, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products-section" className={styles.productsSection}>
        <div className="inner">
          <div className="reveal">
            <p className="eyebrow-label">{lang === 'en' ? 'Safe products' : 'Trygge produkter'}</p>
            <h2 className="section-title">
              {lang === 'en' ? <>Products you<br /><em>can trust</em></> : <>Produkter du<br /><em>kan stole på</em></>}
            </h2>
            <div className="divider" />
          </div>
          <div className={styles.productsGrid}>
            {products.map((prod, i) => (
              <div key={i} className={`${styles.prodCard} reveal`} data-delay={`${i * 0.1}s`}>
                <h4>{t(prod.name, lang)}</h4>
                <p>{t(prod.desc, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.safetyCta}>
        <Image src="/images/sikker-salong-produkter.jpg" alt="FAVN Neglesalong" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 45%' }} />
        <div className={styles.safetyCtaInner}>
          <div className="reveal">
            <p className={styles.eyebrowOverride}>{lang === 'en' ? 'Ready for a safe treatment?' : 'Klar for en sikker behandling?'}</p>
            <h2 className={styles.safetyCtaTitle}>
              {lang === 'en' ? <>Book your appointment<br /><em>at FAVN</em></> : <>Bestill din time<br /><em>hos FAVN</em></>}
            </h2>
            <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn-bordeaux">
              {lang === 'en' ? 'Book now' : 'Bestill time nå'}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}