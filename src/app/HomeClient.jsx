'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '../components/LangContext';
import useReveal from '../components/useReveal';
import { homeTreatments, testimonials } from '../data/home';
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
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className={styles.heroImg}
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>
            Majorstuen &amp; Aker Brygge · Oslo
          </p>
          <h1 className={styles.heroTitle}>
            {lang === 'en' ? (
              <>A place where you can<br /><em>breathe</em></>
            ) : (
              <>Et sted du kan<br /><em>puste ut</em></>
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
        <div className={styles.tsItem}>
          <span className={styles.tsNum}>01</span>
          <span className={styles.tsText}>{lang === 'en' ? 'Sterilised equipment' : 'Sterilisert utstyr'}</span>
        </div>
        <div className={styles.tsItem}>
          <span className={styles.tsNum}>02</span>
          <span className={styles.tsText}>CND Shellac &amp; IBX</span>
        </div>
        <div className={styles.tsItem}>
          <span className={styles.tsNum}>03</span>
          <span className={styles.tsText}>{lang === 'en' ? 'Two locations' : 'To lokasjoner'}</span>
        </div>
        <div className={styles.tsItem}>
          <span className={styles.tsNum}>04</span>
          <span className={styles.tsText}>{lang === 'en' ? 'Personal service' : 'Personlig service'}</span>
        </div>
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
            <p className={styles.introP}>
              {lang === 'en'
                ? "We care deeply about nail health — that's why we use only the finest products, recognised worldwide."
                : 'Vi er opptatt av god neglehelse — derfor bruker vi kun de beste produktene, anerkjent over hele verden.'}
            </p>
            <p className={styles.introP}>
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
          <h2 className="section-title">
            {lang === 'en' ? <>See <em>inside</em></> : <>Se <em>innsiden</em></>}
          </h2>
          <div className="divider" />
        </div>
        <div className={styles.galleryStrip}>
          <div className={`${styles.gp} ${styles.gpLarge}`}>
            <img src="/images/galleri-interior.jpg" alt="Interiør" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div className={`${styles.gp} ${styles.gpHover}`}>
            <img src="/images/galleri-resepsjon.jpg" alt="Resepsjon" className={styles.gpImgDefault} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <img src="/images/galleri-resepsjon-hover2.jpg" alt="Resepsjon hover" className={styles.gpImgHover} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div className={`${styles.gp} ${styles.gpHover}`}>
            <img src="/images/galleri-fasade.jpg" alt="Fasade" className={styles.gpImgDefault} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <img src="/images/galleri-resepsjon-hover.jpg" alt="Fasade hover" className={styles.gpImgHover} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div className={`${styles.gp} ${styles.gpHover}`}>
            <img src="/images/galleri-majorstuen.jpg" alt="Majorstuen" className={styles.gpImgDefault} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <img src="/images/galleri-majorstuen-hover.jpg" alt="Majorstuen hover" className={styles.gpImgHover} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div className={styles.gp}>
            <img src="/images/galleri-velvaererom.jpg" alt="Negler" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div className={styles.gp}>
            <img src="/images/galleri-ekstra.jpg" alt="Interiør" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div className={styles.gp}>
            <img src="/images/galleri-detaljer.jpg" alt="Detaljer" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
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
            <h2 className="section-title">
              {lang === 'en' ? <>What we <em>offer</em></> : <>Hva vi <em>tilbyr</em></>}
            </h2>
          </div>
          <Link href="/behandlinger" className="btn-outline">
            {lang === 'en' ? 'View all treatments' : 'Se alle behandlinger'}
          </Link>
        </div>
        <div className={styles.treatmentsList}>
          {homeTreatments.map((item, i) => (
            <div key={item.num} className="t-item reveal" data-delay={`${i * 0.09}s`}>
              <div className="t-n">{item.num}</div>
              <div className="t-title">{t(item.title, lang)}</div>
              <div className="t-bar" />
              <p className="t-desc">{t(item.desc, lang)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TATTOO ARTIST ── */}
      <section id="tatovør" className={styles.tattoo}>
        <div className={styles.tattooLayout}>

          {/* Left: portrait */}
          <div className={`${styles.tattooPortrait} reveal`}>
            <Image
              src="/images/tattoo-artist.jpg"
              alt="Margrethe Rykkelid — tatovør hos FAVN"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>

          {/* Right: text + gallery */}
          <div className={`${styles.tattooContent} reveal`} data-delay="0.12s">
            <p className="eyebrow-label">
              {lang === 'en' ? 'Tattoo artist at FAVN' : 'Tatovør hos FAVN'}
            </p>
            <h2 className="section-title">
              {lang === 'en' ? <>Margrethe<br /><em>Rykkelid</em></> : <>Margrethe<br /><em>Rykkelid</em></>}
            </h2>
            <div className="divider" />
            <p className={styles.tattooText}>
              {lang === 'en'
                ? 'At FAVN you will also find tattoo artist Margrethe Rykkelid. She works with fine line tattoos and illustrative motifs, often inspired by nature and botanical elements.'
                : 'Hos FAVN finner du også tatovør Margrethe Rykkelid. Hun jobber med fine line-tatoveringer og illustrative motiver, ofte inspirert av natur og botaniske elementer.'}
            </p>

            <div className={styles.tattooGrid}>
              <div className={styles.tattooImg}>
                <Image src="/images/tattoo-work-1.jpg" alt="Tatovering 1" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.tattooImg}>
                <Image src="/images/tattoo-work-2.jpg" alt="Tatovering 2" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.tattooImg}>
                <Image src="/images/tattoo-work-3.jpg" alt="Tatovering 3" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>

            <a
              href="https://www.instagram.com/margrethe.rykkelid/"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              style={{ alignSelf: 'flex-start' }}
            >
              {lang === 'en' ? 'See her work on Instagram' : 'Se arbeidet hennes på Instagram'}
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className={styles.testimonials}>
        <div className={styles.tiInner}>
          <div className="reveal">
            <p className="eyebrow-label" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {lang === 'en' ? 'What clients say' : 'Kundene sier'}
            </p>
            <h2 className="section-title" style={{ color: 'white' }}>
              {lang === 'en' ? <>What others<br /><em>experience</em></> : <>Hva andre<br /><em>opplever</em></>}
            </h2>
            <div className="divider" style={{ background: 'rgba(255,255,255,0.15)' }} />
          </div>
          <div className={styles.tGrid}>
            {testimonials.map((item, i) => (
              <div key={i} className="t-block reveal" data-delay={`${i * 0.1}s`}>
                <div className={styles.tQmark}>&ldquo;</div>
                <p className={styles.tQuote}>{item.quote}</p>
                <div className={styles.tSig}>
                  <div className={styles.tDot} />
                  <div>
                    <div className={styles.tWho}>{item.author} — {item.source}</div>
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
        <Image
          src="/images/cta.jpg"
          alt="FAVN Neglesalong"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 70%' }}
        />
        <div className={styles.ctaInner}>
          <div className="reveal">
            <p className="eyebrow-label" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {lang === 'en' ? 'Ready for a break?' : 'Klar for en pause?'}
            </p>
            <h2 className={styles.ctaTitle}>
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