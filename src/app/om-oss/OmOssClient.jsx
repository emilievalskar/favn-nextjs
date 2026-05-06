'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLang } from '../../components/LangContext';
import useReveal from '../../components/useReveal';
import PhotoPageHeader from '../../components/PhotoPageHeader';
import { BOOK_URL } from '../../data/settings';
import styles from './om-oss.module.css';

function useArchSlider(frameId, dotsId, interval) {
  useEffect(() => {
    const frame = document.getElementById(frameId);
    const dotsEl = document.getElementById(dotsId);
    if (!frame || !dotsEl) return;
    const allImgs = Array.from(frame.querySelectorAll('img'));
    const dots = dotsEl.querySelectorAll('button');
    let current = 0;

    allImgs.forEach((img, i) => {
      img.style.opacity = i === 0 ? '1' : '0';
      img.style.zIndex = i === 0 ? '1' : '0';
    });

    function isReady(img) {
      return img.complete && img.naturalWidth > 0;
    }

    function go(i) {
      const next = i % allImgs.length;
      // Skip if not loaded yet
      if (!isReady(allImgs[next])) {
        go(next + 1);
        return;
      }
      const prev = current;
      current = next;
      allImgs[current].style.zIndex = '2';
      allImgs[current].style.opacity = '1';
      setTimeout(() => {
        allImgs[prev].style.opacity = '0';
        allImgs[prev].style.zIndex = '0';
        allImgs[current].style.zIndex = '1';
      }, 900);
    }

    const timer = setInterval(() => go(current + 1), interval);
    return () => clearInterval(timer);
  }, [frameId, dotsId, interval]);
}

const t = (obj, lang) => (typeof obj === 'string' ? obj : obj?.[lang] ?? obj?.no ?? '');

export default function OmOssClient() {
  const { lang } = useLang();
  const [videoEnded, setVideoEnded] = useState(false);
  useReveal();
  useArchSlider('arch-majorstuen', 'dots-majorstuen', 3000);
  useArchSlider('arch-akerbrygge', 'dots-akerbrygge', 3800);

  return (
    <>
      {/* ── HERO ── */}
      <div className={styles.heroWrap}>
        <PhotoPageHeader
          imageSrc="/images/majorstuen.jpg"
          imageAlt="Om FAVN Neglesalong"
          eyebrow={lang === 'en' ? 'About us' : 'Om oss'}
          title={lang === 'en' ? 'A place to<br><em>breathe</em>' : 'Et sted å<br><em>puste ut</em>'}
          height="55vh"
          minHeight="420px"
          objectPos="center 40%"
        />
        <div className={styles.heroOverlay} />
      </div>

      {/* ── OM FAVN ── */}
      <section className={styles.intro}>
        <div className={styles.introLayout}>
          <div className="reveal">
            <p className="eyebrow-label">{lang === 'en' ? 'About FAVN' : 'Om FAVN'}</p>
            <h2 className="section-title">
              {lang === 'en'
                ? <>A salon built on<br /><em>care and craft</em></>
                : <>En salong bygget på<br /><em>omsorg og dyktighet</em></>}
            </h2>
            <div className="divider" />
            <p className={styles.introP}>
              {lang === 'en'
                ? 'FAVN Neglesalong was founded with one goal: to create a space where you can truly relax. With two locations in Oslo — at Majorstuen and Aker Brygge — we welcome guests who value both quality and calm.'
                : 'FAVN Neglesalong ble til med ett mål: å skape et sted hvor du virkelig kan slappe av. Med to lokasjoner i Oslo — på Majorstuen og Aker Brygge — tar vi imot gjester som setter pris på både kvalitet og ro.'}
            </p>
            <p className={styles.introP}>
              {lang === 'en'
                ? 'We care deeply about nail health and use only the finest products recognised worldwide. Every detail in our salons — from the light walls and blonde furniture to the art and green plants — is chosen to make you feel at ease from the moment you step inside.'
                : 'Vi er opptatt av god neglehelse og bruker kun de beste produktene, anerkjent over hele verden. Hver detalj i salongene våre — fra lyse vegger og blonde møbler til kunst og grønne planter — er valgt for å gi deg en følelse av ro fra det øyeblikket du trer inn.'}
            </p>
            <div style={{ marginTop: 36, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn-dark">
                {lang === 'en' ? 'Book appointment' : 'Bestill time'}
              </a>
              <Link href="/kontakt" className="btn-outline">
                {lang === 'en' ? 'Find us' : 'Finn oss'}
              </Link>
            </div>
          </div>

          <div className={`${styles.introImage} reveal`} data-delay="0.15s">
            <img
              src="/images/om-oss-interior.jpg"
              alt="FAVN interiør"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── LOKASJONER ── */}
      <section className={styles.locations}>
        <div className="inner">
          <div className="reveal">
            <p className="eyebrow-label">{lang === 'en' ? 'Our locations' : 'Våre lokasjoner'}</p>
            <h2 className="section-title">
              {lang === 'en' ? <>Two salons<br /><em>in Oslo</em></> : <>To salonger<br /><em>i Oslo</em></>}
            </h2>
            <div className="divider" />
          </div>

          <div className={styles.locGrid}>
            <div className={`${styles.locCard} reveal`}>
              <div className={styles.locImg}>
                <img src="/images/majorstuen.jpg" alt="Majorstuen" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className={styles.locInfo}>
                <p className={styles.locNum}>01</p>
                <h3 className={styles.locName}>Majorstuen</h3>
                <p className={styles.locAddr}>Neuberggata 10A, 0367 Oslo</p>
                <a href="https://maps.google.com/?q=Neuberggata+10A+Oslo" target="_blank" rel="noreferrer" className="btn-outline" style={{ marginTop: 24, display: 'inline-block', fontSize: 10, padding: '10px 26px' }}>
                  {lang === 'en' ? 'Open in Maps' : 'Åpne i kart'}
                </a>
              </div>
            </div>

            <div className={`${styles.locCard} reveal`} data-delay="0.12s">
              <div className={styles.locImg}>
                <img src="/images/aker-brygge.jpg" alt="Aker Brygge" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className={styles.locInfo}>
                <p className={styles.locNum}>02</p>
                <h3 className={styles.locName}>Aker Brygge</h3>
                <p className={styles.locAddr}>Bryggegata 5, 0250 Oslo</p>
                <a href="https://maps.google.com/?q=Bryggegata+5+Oslo" target="_blank" rel="noreferrer" className="btn-outline" style={{ marginTop: 24, display: 'inline-block', fontSize: 10, padding: '10px 26px' }}>
                  {lang === 'en' ? 'Open in Maps' : 'Åpne i kart'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUE-SLIDER ── */}
      <section className={styles.archSection}>
        <div className="inner">
          <div className="reveal" style={{ marginBottom: 56 }}>
            <p className="eyebrow-label">{lang === 'en' ? 'From the salons' : 'Fra salongene'}</p>
            <h2 className="section-title">
              {lang === 'en' ? <>Two salons, <em>one experience</em></> : <>To salonger, <em>én opplevelse</em></>}
            </h2>
            <div className="divider" />
          </div>

          <div className={styles.archRow}>
            {/* Majorstuen */}
            <div className={`${styles.archWrap} reveal`}>
              <div className={styles.archFrame} id="arch-majorstuen">
                {[
                  '/images/om-oss-majorstua/IMG_0499.jpg',
                  '/images/om-oss-majorstua/IMG_0518.jpg',
                  '/images/om-oss-majorstua/IMG_0544.jpg',
                  '/images/om-oss-majorstua/IMG_0556.jpg',
                  '/images/om-oss-majorstua/IMG_0576.jpg',
                  '/images/om-oss-majorstua/IMG_0584.jpg',
                  '/images/om-oss-majorstua/IMG_0588.jpg',
                  '/images/om-oss-majorstua/IMG_0589.jpg',
                  '/images/om-oss-majorstua/IMG_0633.jpg',
                  '/images/om-oss-majorstua/IMG_0669.jpg',
                  '/images/om-oss-majorstua/IMG_0689.jpg',
                ].map((src, i) => (
                  <img key={i} src={src} alt={`Majorstuen ${i + 1}`} className={i === 0 ? styles.archImgActive : styles.archImg} data-index={i} />
                ))}
              </div>
              <div className={styles.archDots} id="dots-majorstuen" style={{ display: 'none' }}>
                {Array.from({length: 11}, (_, i) => (
                  <button key={i} className={i === 0 ? styles.archDotActive : styles.archDot} data-index={i} />
                ))}
              </div>
              <p className={styles.archLabel}>Majorstuen</p>
              <p className={styles.archAddr}>Neuberggata 10A</p>
            </div>

            {/* Aker Brygge */}
            <div className={`${styles.archWrap} reveal`} data-delay="0.15s">
              <div className={styles.archFrame} id="arch-akerbrygge">
                {[
                  '/images/om-oss-akerbrygge/IMG_0018.jpeg',
                  '/images/om-oss-akerbrygge/IMG_0021.jpeg',
                  '/images/om-oss-akerbrygge/IMG_0024.jpeg',
                  '/images/om-oss-akerbrygge/IMG_0027.jpeg',
                  '/images/om-oss-akerbrygge/IMG_0028.jpeg',
                  '/images/om-oss-akerbrygge/IMG_0034.jpeg',
                  '/images/om-oss-akerbrygge/IMG_0041.jpeg',
                  '/images/om-oss-akerbrygge/IMG_0043.jpeg',
                ].map((src, i) => (
                  <img key={i} src={src} alt={`Aker Brygge ${i + 1}`} className={i === 0 ? styles.archImgActive : styles.archImg} data-index={i} />
                ))}
              </div>
              <div className={styles.archDots} id="dots-akerbrygge" style={{ display: 'none' }}>
                {Array.from({length: 8}, (_, i) => (
                  <button key={i} className={i === 0 ? styles.archDotActive : styles.archDot} data-index={i} />
                ))}
              </div>
              <p className={styles.archLabel}>Aker Brygge</p>
              <p className={styles.archAddr}>Bryggegata 5</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <div className={styles.videoWrap} style={{ width: '100%', height: '100vh', maxHeight: '700px', overflow: 'hidden', position: 'relative', background: '#1E1E1A' }}>
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

        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          textAlign: 'center', padding: '0 40px', zIndex: 2,
          pointerEvents: videoEnded ? 'auto' : 'none',
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.18)',
            borderRadius: '2px',
            padding: '52px 72px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '620px',
            width: '100%',
            opacity: videoEnded ? 1 : 0,
            transform: videoEnded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease 1s, transform 1s ease 1s',
          }}
          className={styles.videoCtaCard}
          >
            <p className="eyebrow-label" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {lang === 'en' ? 'Ready for a break?' : 'Klar for en pause?'}
            </p>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 3.5vw, 52px)',
              fontWeight: 300,
              color: 'white',
              lineHeight: 1.08,
              marginBottom: '36px',
            }}>
              {lang === 'en'
                ? <>Book your treatment<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)', textShadow: '0 2px 12px rgba(120, 70, 60, 0.7), 0 0 24px rgba(100, 50, 40, 0.5)' }}>today</em></>
                : <>Bestill din behandling<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)', textShadow: '0 2px 12px rgba(120, 70, 60, 0.7), 0 0 24px rgba(100, 50, 40, 0.5)' }}>i dag</em></>}
            </h2>
            <div className={styles.videoBtns} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href={BOOK_URL} target="_blank" rel="noreferrer" className={`btn-bordeaux ${styles.videoBtn}`}>
                {lang === 'en' ? 'Book appointment' : 'Bestill time'}
              </a>
              <Link href="/kontakt" className={`btn-white-outline ${styles.videoBtn}`}>
                {lang === 'en' ? 'Contact us' : 'Kontakt oss'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}