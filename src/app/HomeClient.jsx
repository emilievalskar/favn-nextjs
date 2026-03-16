'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '../components/LangContext';
import useReveal from '../components/useReveal';
import { homeTreatments, testimonials, galleryImages, taglineItems } from '../data/home';
import { BOOK_URL } from '../data/settings';
import styles from './home.module.css';

const t = (obj, lang) => (typeof obj === 'string' ? obj : obj?.[lang] ?? obj?.no ?? '');

export default function HomeClient() {
  const { lang } = useLang();
  useReveal();

  return (
    <>
      {/* ── HERO ── */}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hero.jpg"
            alt="FAVN Neglesalong"
            fill
            priority
            style={{ objectFit: 'cover' }}
            className={styles.heroImg}
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>
            {lang === 'en' ? 'Nail salon — Oslo' : 'Neglesalong — Oslo'}
          </p>
          <h1 className={styles.heroTitle}>
            {lang === 'en' ? (
              <>Nails that<br /><em>strengthen</em><br /><em>and last</em></>
            ) : (
              <>Negler som<br /><em>styrker og</em><br /><em>varer</em></>
            )}
          </h1>
          <div className={styles.heroCta}>
            <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn-bordeaux" style={{ padding: '18px 48px' }}>
              {lang === 'en' ? 'Book appointment' : 'Bestill time'}
            </a>
          </div>
        </div>
      </section>

      {/* ── TAGLINE STRIP ── */}
      <div className={styles.taglineStrip}>
        {taglineItems.map((item) => (
          <div key={item.num} className={styles.tsItem}>
            <span className={styles.tsNum}>{item.num}</span>
            <span className={styles.tsText}>{t(item.text, lang)}</span>
          </div>
        ))}
      </div>

      {/* ── ABOUT / INTRO ── */}
      <section id="intro" className={styles.intro}>
        <div className={styles.introLayout}>
          <div className="reveal">
            <p className="eyebrow-label">{lang === 'en' ? 'About FAVN' : 'Om FAVN'}</p>
            <h2 className="section-title">
              {lang === 'en' ? (
                <>Nails that<br />strengthen and<br /><em>last</em></>
              ) : (
                <>Negler som<br />styrker og<br /><em>varer</em></>
              )}
            </h2>
            <div className="divider" />
            <p style={{ fontSize: 16, color: 'var(--mid)', lineHeight: 1.9, marginBottom: 18 }}>
              {lang === 'en'
                ? "We care deeply about nail health — that's why we use only the finest products, recognised worldwide."
                : 'Vi er opptatt av god neglehelse — derfor bruker vi kun de beste produktene, anerkjent over hele verden.'}
            </p>
            <p style={{ fontSize: 16, color: 'var(--mid)', lineHeight: 1.9, marginBottom: 18 }}>
              {lang === 'en'
                ? 'The salon is designed for calm and wellbeing: light walls, blonde furniture, art and green plants. You feel it the moment you step inside.'
                : 'Salongen er designet for ro og velvære: lyse vegger, blonde møbler, kunst og grønne planter. Du merker det fra det øyeblikket du trer inn.'}
            </p>
            <div className={styles.introBtns}>
              <Link href="/sikker-salong" className="btn-outline">
                {lang === 'en' ? 'Safe salon' : 'Sikker salong'}
              </Link>
              <Link href="/behandlinger" className="btn-dark">
                {lang === 'en' ? 'All treatments' : 'Alle behandlinger'}
              </Link>
            </div>
          </div>

          <div className={`${styles.introPhotos} reveal`} data-delay="0.15s">
            <div className={styles.ip1}><Image src="/images/interior.jpg" alt="Interiør" fill style={{ objectFit: 'cover' }} /></div>
            <div className={styles.ip2}><Image src="/images/venterom.jpg" alt="Venterom" fill style={{ objectFit: 'cover' }} /></div>
            <div className={styles.ip3}><Image src="/images/detalj.jpg" alt="Detalj" fill style={{ objectFit: 'cover' }} /></div>
            <div className={styles.brassBadge}>
              <span>4,5★</span>
              <span>Google Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <div id="gallery" className={styles.gallery}>
        <div className={styles.mobileGalleryHeader}>
          <p className="eyebrow-label">{lang === 'en' ? 'From the salon' : 'Fra salongen'}</p>
          <h2 className="section-title">{lang === 'en' ? <>See <em>inside</em></> : <>Se <em>innsiden</em></>}</h2>
          <div className="divider" />
        </div>
        <div className={styles.galleryStrip}>
          {galleryImages.map((img) => (
            <div key={img.src} className={`${styles.gp}${img.large ? ` ${styles.gpLarge}` : ''}`}>
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} />
              <div className={styles.galleryLabel}><span>{t(img.label, lang)}</span></div>
            </div>
          ))}
        </div>
        <div className={styles.galleryFooter}>
          <p>
            {lang === 'en' ? 'See more from the salon at ' : 'Se mer fra salongen på '}
            <a href="https://instagram.com/favnoslo" target="_blank" rel="noreferrer">@favnoslo</a>
          </p>
          <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn-outline">
            {lang === 'en' ? 'Book appointment' : 'Bestill time'}
          </a>
        </div>
      </div>

      {/* ── TREATMENTS ── */}
      <section id="treatments" className={styles.treatments}>
        <div className={`${styles.treatmentsHead} reveal`}>
          <div>
            <p className="eyebrow-label">{lang === 'en' ? 'Treatments' : 'Behandlinger'}</p>
            <h2 className="section-title">{lang === 'en' ? <>What we <em>offer</em></> : <>Hva vi <em>tilbyr</em></>}</h2>
          </div>
          <Link href="/behandlinger" className="btn-outline">
            {lang === 'en' ? 'View all treatments' : 'Se alle behandlinger'}
          </Link>
        </div>
        <div className={styles.treatmentsList}>
          {homeTreatments.map((item, i) => (
            <div key={item.num} className="t-item reveal" data-delay={`${i * 0.09}s`}>
              <div className={styles.tN}>{item.num}</div>
              <div className={styles.tTitle}>{t(item.title, lang)}</div>
              <div className={styles.tBar} />
              <p className={styles.tDesc}>{t(item.desc, lang)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className={styles.testimonials}>
        <div className={styles.tiInner}>
          <div className="reveal">
            <p className="eyebrow-label">{lang === 'en' ? 'What clients say' : 'Kundene sier'}</p>
            <h2 className="section-title">
              {lang === 'en' ? <>What others<br /><em>experience</em></> : <>Hva andre<br /><em>opplever</em></>}
            </h2>
            <div className="divider" />
          </div>
          <div className={styles.tGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className="t-block reveal" data-delay={`${i * 0.1}s`}>
                <div className={styles.tQmark}>&ldquo;</div>
                <p className={styles.tQuote}>{t.quote}</p>
                <div className={styles.tSig}>
                  <div className={styles.tDot} />
                  <div>
                    <div className={styles.tWho}>{t.author} — {t.source}</div>
                    <div className={styles.tStars}>★★★★★</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO CTA ── */}
      <div id="cta-section" className={styles.ctaSection}>
        <Image src="/images/cta.jpg" alt="FAVN Neglesalong" fill style={{ objectFit: 'cover' }} />
        <div className={styles.ctaInner}>
          <div className="reveal">
            <p className={styles.eyebrowOverride}>
              {lang === 'en' ? 'Ready for a break?' : 'Klar for en pause?'}
            </p>
            <h2>
              {lang === 'en'
                ? <>Book your treatment<br /><em>today</em></>
                : <>Bestill din behandling<br /><em>i dag</em></>}
            </h2>
            <div className={styles.ctaBtns}>
              <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn-bordeaux">
                {lang === 'en' ? 'Book appointment' : 'Bestill time'}
              </a>
              <Link href="/kontakt" className="btn-white-outline">
                {lang === 'en' ? 'Contact us' : 'Kontakt oss'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
