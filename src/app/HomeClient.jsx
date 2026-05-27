'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { useLang } from '../components/LangContext';
import useReveal from '../components/useReveal';
import { homeTreatments, testimonials } from '../data/home';
import { BOOK_URL } from '../data/settings';
import styles from './home.module.css';

const t = (obj, lang) => (typeof obj === 'string' ? obj : obj?.[lang] ?? obj?.no ?? '');

export default function HomeClient() {
  const { lang } = useLang();
  const [videoEnded, setVideoEnded] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showTattooMore, setShowTattooMore] = useState(false);
  const carouselRef = useRef(null);
  useReveal();

  function scrollToTestimonial(index) {
    setActiveTestimonial(index);
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll('[data-card]');
      if (cards[index]) {
        cards[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }

  return (
    <>
      <div className={styles.heroWrap}>
      {/* ── HERO ── */}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hero.jpg"
            alt="FAVN Neglesalong"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className={`${styles.heroImg} ${styles.heroImgDesktop}`}
          />
          <Image
            src="/images/mobil-hero.jpg"
            alt="FAVN Neglesalong"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            className={`${styles.heroImg} ${styles.heroImgMobile}`}
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
            <a href={BOOK_URL} target="_blank" rel="noreferrer" className={`btn-bordeaux ${styles.heroBtn}`} style={{ padding: '18px 48px' }}>
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

        {/* Knapper på mobil — kommer før bildene i DOM */}
        <div className={styles.introBtnsMobile}>
          <Link href="/sikker-salong" className="btn-outline">
            {lang === 'en' ? 'Safe salon' : 'Sikker salong'}
          </Link>
          <Link href="/behandlinger" className="btn-dark">
            {lang === 'en' ? 'All treatments' : 'Alle behandlinger'}
          </Link>
        </div>

          <div className={`${styles.introPhotos} reveal`} data-delay="0.15s">
            <div className={styles.ip1}><Image src="/images/interior.jpg" alt="Interiør" fill sizes="(max-width: 960px) 100vw, 36vw" style={{ objectFit: 'cover' }} /></div>
            <div className={styles.ip2}><Image src="/images/negler.jpg" alt="Negler" fill sizes="(max-width: 960px) 50vw, 28vw" style={{ objectFit: 'cover' }} /></div>
            <div className={styles.ip3}><Image src="/images/detalj.jpg" alt="Detalj" fill sizes="(max-width: 960px) 50vw, 19vw" style={{ objectFit: 'cover' }} /></div>
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
          <div className={`${styles.gp} ${styles.gpHover}`}>
            <img src="/images/galleri-velvaererom.jpg" alt="Negler" className={styles.gpImgDefault} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <img src="/images/galleri-negler-hover.jpg" alt="Negler hover" className={styles.gpImgHover} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div className={`${styles.gp} ${styles.gpHover}`}>
            <img src="/images/galleri-ekstra.jpg" alt="Interiør" className={styles.gpImgDefault} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <img src="/images/om-oss-interior.jpg" alt="Interiør hover" className={styles.gpImgHover} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div className={`${styles.gp} ${styles.gpHover}`}>
            <img src="/images/galleri-detaljer.jpg" alt="Detaljer" className={styles.gpImgDefault} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <img src="/images/galleri-detaljer-hover.jpg" alt="Detaljer hover" className={styles.gpImgHover} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
            {/* Mobil: overlay + overskrift over bildet */}
            <div className={styles.tattooMobileHeader}>
              <p className="eyebrow-label" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {lang === 'en' ? 'Tattoo artist at FAVN' : 'Tatovør hos FAVN'}
              </p>
              <h2 className={styles.tattooMobileTitle}>
                {lang === 'en' ? <>Margrethe<br /><em>Rykkelid</em></> : <>Margrethe<br /><em>Rykkelid</em></>}
              </h2>
            </div>
          </div>

          {/* Right: text + gallery */}
          <div className={`${styles.tattooContent} reveal`} data-delay="0.12s">
            <p className={`eyebrow-label ${styles.tattooDesktopOnly}`}>
              {lang === 'en' ? 'Tattoo artist at FAVN' : 'Tatovør hos FAVN'}
            </p>
            <h2 className={`section-title ${styles.tattooDesktopOnly}`}>
              {lang === 'en' ? <>Margrethe<br /><em>Rykkelid</em></> : <>Margrethe<br /><em>Rykkelid</em></>}
            </h2>
            <div className={`divider ${styles.tattooDesktopOnly}`} />
            <p className={styles.tattooText}>
              {lang === 'en'
                ? 'At FAVN you will also find tattoo artist Margrethe Rykkelid. She has a sharp eye for detail and a fondness for realism, but also appreciates the simple and clean. As a tattoo artist, she cares deeply that both the process and the result feel right for you as a client.'
                : 'Hos FAVN finner du også tatovør Margrethe Rykkelid. Hun har et skarpt blikk for detaljer og en forkjærlighet for realisme, men setter også pris på det enkle og rene. Som tatovør er hun opptatt av at både prosessen og resultatet skal føles riktig for deg som kunde.'}
            </p>

            {showTattooMore && (
              <p className={styles.tattooText}>
                {lang === 'en'
                  ? 'Here you will meet a dedicated and meticulous tattoo artist who works with precision, care and passion — and who places great emphasis on safety and good experiences.'
                  : 'Her møter du en dedikert og nøye tatovør som jobber med presisjon, omtanke og lidenskap — og som legger stor vekt på trygghet og gode opplevelser.'}
              </p>
            )}

            <button
              onClick={() => setShowTattooMore(!showTattooMore)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-sans)', fontSize: 10,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--accent)', padding: 0, marginTop: -8, marginBottom: 32,
                alignSelf: 'flex-start',
              }}
            >
              {showTattooMore
                ? (lang === 'en' ? 'Show less ↑' : 'Vis mindre ↑')
                : (lang === 'en' ? 'Read more ↓' : 'Les mer ↓')}
            </button>

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
          <div className={styles.tiLayout}>
            {/* Left: heading */}
            <div className="reveal">
              <p className="eyebrow-label" style={{ color: 'rgba(255,255,255,0.3)' }}>
                {lang === 'en' ? 'What clients say' : 'Kundene sier'}
              </p>
              <h2 className="section-title" style={{ color: 'white' }}>
                {lang === 'en' ? <>What others<br /><em>experience</em></> : <>Hva andre<br /><em>opplever</em></>}
              </h2>
              <div className="divider" style={{ background: 'rgba(255,255,255,0.15)' }} />
              <div className={styles.tNav}>
                <button className={styles.tArrow} onClick={() => setActiveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)}>←</button>
                <div className={styles.tDots}>
                  {testimonials.map((_, i) => (
                    <button key={i} className={`${styles.tDotBtn} ${activeTestimonial === i ? styles.tDotActive : ''}`} onClick={() => setActiveTestimonial(i)} />
                  ))}
                </div>
                <button className={styles.tArrow} onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}>→</button>
              </div>
            </div>

            {/* Right: stacked cards */}
            <div className={styles.tStack}>
              {testimonials.map((item, i) => {
                const offset = (i - activeTestimonial + testimonials.length) % testimonials.length;
                const rotations = [0, 5, -5];
                const translateX = [0, 22, -22];
                const translateY = [0, -20, 20];
                const zIndex = offset === 0 ? 3 : offset === 1 ? 2 : 1;
                const scale = offset === 0 ? 1 : 0.92;
                const opacity = offset === 0 ? 1 : offset === 1 ? 0.45 : 0.25;
                const isLight = i % 2 === 1;

                return (
                  <div
                    key={i}
                    className={`${styles.tStackCard} ${isLight ? styles.tStackLight : styles.tStackDark}`}
                    style={{
                      transform: `rotate(${rotations[offset] || 0}deg) translateX(${translateX[offset] || 0}px) translateY(${translateY[offset] || 0}px) scale(${scale})`,
                      zIndex,
                      opacity,
                      cursor: offset !== 0 ? 'pointer' : 'default',
                    }}
                    onClick={() => offset !== 0 && setActiveTestimonial(i)}
                  >
                    <div className={styles.tStars}>★★★★★</div>
                    <p className={styles.tQuote}>{item.quote}</p>
                    <div className={styles.tSig}>
                      <div className={styles.tAvatar}>{item.author[0]}</div>
                      <div className={styles.tWho}>{item.author}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <div className={styles.videoSection}>
        <video
          autoPlay
          muted
          loop
          playsInline
          onTimeUpdate={(e) => {
            if (e.target.currentTime >= 5 && !videoEnded) {
              setVideoEnded(true);
            }
          }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        >
          <source src="/videos/favn-video.mp4" type="video/mp4" />
        </video>

        <div className={`${styles.videoOverlay} ${videoEnded ? styles.videoOverlayVisible : ''}`} />

        <div className={`${styles.videoCta} ${videoEnded ? styles.videoCtaVisible : ''}`}>
          <div className={styles.videoCtaCard}>
            <p className="eyebrow-label" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {lang === 'en' ? 'Ready for a break?' : 'Klar for en pause?'}
            </p>
            <h2 className={styles.videoCtaTitle}>
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