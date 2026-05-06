'use client';
import Image from 'next/image';
import { useLang } from '../../components/LangContext';
import useReveal from '../../components/useReveal';
import { locations } from '../../data/settings';
import styles from './bestill.module.css';

export default function BestillClient() {
  const { lang } = useLang();
  useReveal();

  return (
    <>
      <div className={styles.bookSplit}>
        {/* Left: booking cards */}
        <div className={styles.bookLeft}>
          <p className={`eyebrow-label reveal`}>
            {lang === 'en' ? 'Online booking' : 'Online booking'}
          </p>
          <h1 className={`${styles.bookH1} reveal`}>
            {lang === 'en' ? <>Book your<br /><em>treatment</em></> : <>Bestill din<br /><em>behandling</em></>}
          </h1>
          <p className={`${styles.bookIntro} reveal`}>
            {lang === 'en'
              ? 'Choose a location and book directly. Fast, simple and always available.'
              : 'Velg lokasjon og book direkte. Raskt, enkelt og alltid tilgjengelig.'}
          </p>
          <div className="reveal" data-delay="0.1s">
            {locations.map((loc) => (
              <a key={loc.id} href={loc.timmaUrl} target="_blank" rel="noreferrer" className={styles.locCard}>
                <div className={styles.lcTag}>{loc.tag}</div>
                <div className={styles.lcName}>{loc.name}</div>
                <div className={styles.lcAddr}>
                  {loc.address}<br />
                  {loc.hours}
                </div>
                <span className={styles.lcArrow}>→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: decorative photo */}
        <div className={styles.bookRight}>
          <Image
            src="/images/bestill.jpg"
            alt="Interiør FAVN"
            fill
            sizes="(max-width: 960px) 0vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <section id="info-section" className={styles.infoSection}>
        <div className={styles.infoGrid}>
          <div className="info-card reveal" data-delay="0s">
            <h4>{lang === 'en' ? 'Cancellation' : 'Avbestilling'}</h4>
            <p>
              {lang === 'en'
                ? 'Please cancel at least 24 hours in advance — so we can offer the slot to other clients.'
                : 'Vi ber om at du avbestiller senest 24 timer i forveien — slik at vi kan tilby timen til andre kunder.'}
            </p>
          </div>
          <div className="info-card reveal" data-delay="0.1s">
            <h4>{lang === 'en' ? 'Gift cards' : 'Gavekort'}</h4>
            <p>
              {lang === 'en'
                ? 'Want to buy a gift card? Contact us at hei@favnoslo.no or call 90 20 10 70.'
                : 'Ønsker du å kjøpe et gavekort? Kontakt oss på hei@favnoslo.no eller ring 90 20 10 70.'}
            </p>
          </div>
          <div className="info-card reveal" data-delay="0.2s">
            <h4>{lang === 'en' ? 'Questions?' : 'Spørsmål?'}</h4>
            <p>
              {lang === 'en'
                ? 'Unsure which treatment suits you? We are happy to help — feel free to get in touch.'
                : 'Usikker på hvilken behandling som passer? Vi hjelper deg gjerne — ta gjerne kontakt.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}