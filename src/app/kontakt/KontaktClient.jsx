'use client';
import Image from 'next/image';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLang } from '../../components/LangContext';
import useReveal from '../../components/useReveal';
import PhotoPageHeader from '../../components/PhotoPageHeader';
import { openingHoursMajor, openingHoursAker, locations, BOOK_URL } from '../../data/settings';
import styles from './kontakt.module.css';

const t = (obj, lang) => (typeof obj === 'string' ? obj : obj?.[lang] ?? obj?.no ?? '');

export default function KontaktClient() {
  const { lang } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef(null);
  useReveal();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    try {
      await emailjs.sendForm(
        'service_2jx575s',
        'template_mo7h1fr',
        formRef.current,
        'kuhdcUJKGTGHm6cAG'
      );
      setSubmitted(true);
      formRef.current.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError(true);
    }
  }

  return (
    <>
      <PhotoPageHeader
        imageSrc="/images/kontakt.jpg"
        imageAlt="Kontakt FAVN"
        eyebrow={lang === 'en' ? 'Contact' : 'Kontakt'}
        title={lang === 'en' ? 'Get in<br><em>touch with us</em>' : 'Kom i<br><em>kontakt med oss</em>'}
        height="50vh"
        minHeight="380px"
      />

      <section id="contact-main" className={styles.contactMain}>
        <div className={styles.contactLayout}>

          {/* ── LEFT: contact info ── */}
          <div className="reveal">
            <p className="eyebrow-label">{lang === 'en' ? 'Contact information' : 'Kontaktinformasjon'}</p>
            <h2 className="section-title">
              {lang === 'en' ? <>We are here<br /><em>for you</em></> : <>Vi er her<br /><em>for deg</em></>}
            </h2>
            <div className="divider" />

            <div className={styles.ciBlock}>
              <div className={styles.ciLabel}>{lang === 'en' ? 'Phone' : 'Telefon'}</div>
              <div className={styles.ciVal}><a href="tel:90201070">90 20 10 70</a></div>
            </div>
            <div className={styles.ciBlock}>
              <div className={styles.ciLabel}>E-post</div>
              <div className={styles.ciVal}><a href="mailto:hei@favnoslo.no">hei@favnoslo.no</a></div>
            </div>
            <div className={styles.ciBlock}>
              <div className={styles.ciLabel}>Majorstuen</div>
              <div className={styles.ciVal}>Neuberggata 10A, 0367 Oslo</div>
            </div>
            <div className={styles.ciBlock}>
              <div className={styles.ciLabel}>Aker Brygge</div>
              <div className={styles.ciVal}>Bryggegata 5, 0250 Oslo</div>
            </div>
            <div className={styles.ciBlock}>
              <div className={styles.ciLabel}>{lang === 'en' ? 'Social media' : 'Sosiale medier'}</div>
              <div className={styles.ciVal}>
                <a href="https://instagram.com/favnoslo" target="_blank" rel="noreferrer">Instagram</a>
                {' \u00B7 '}
                <a href="https://facebook.com/favnoslo" target="_blank" rel="noreferrer">Facebook</a>
                <br />@favnoslo
              </div>
            </div>

            <div style={{ marginTop: 36 }}>
              <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn-dark">
                {lang === 'en' ? 'Book online' : 'Bestill time online'}
              </a>
            </div>
          </div>

          {/* ── RIGHT: contact form ── */}
          <div className="reveal" data-delay="0.15s">
            <div className={styles.cfWrap}>
              <h3>{lang === 'en' ? 'Send us a message' : 'Send oss en melding'}</h3>
              <p>
                {lang === 'en'
                  ? 'Questions about treatments, prices or anything else? We reply quickly.'
                  : 'Spørsmål om behandlinger, priser eller noe annet? Vi svarer raskt.'}
              </p>
              <form className={styles.cf} onSubmit={handleSubmit} ref={formRef}>
                <div className={styles.fgRow}>
                  <div className={styles.fg}>
                    <label>{lang === 'en' ? 'First name' : 'Fornavn'}</label>
                    <input type="text" name="fornavn" required placeholder={lang === 'en' ? 'Your first name' : 'Ditt fornavn'} />
                  </div>
                  <div className={styles.fg}>
                    <label>{lang === 'en' ? 'Last name' : 'Etternavn'}</label>
                    <input type="text" name="etternavn" required placeholder={lang === 'en' ? 'Your last name' : 'Ditt etternavn'} />
                  </div>
                </div>
                <div className={styles.fg}>
                  <label>E-post</label>
                  <input type="email" name="email" required placeholder="din@epost.no" />
                </div>
                <div className={styles.fg}>
                  <label>{lang === 'en' ? 'Subject' : 'Emne'}</label>
                  <select name="emne">
                    <option value="">{lang === 'en' ? 'Choose subject…' : 'Velg emne…'}</option>
                    <option>{lang === 'en' ? 'Question about treatment' : 'Spørsmål om behandling'}</option>
                    <option>{lang === 'en' ? 'Prices' : 'Priser'}</option>
                    <option>{lang === 'en' ? 'Gift card' : 'Gavekort'}</option>
                    <option>{lang === 'en' ? 'Other' : 'Annet'}</option>
                  </select>
                </div>
                <div className={styles.fg}>
                  <label>{lang === 'en' ? 'Message' : 'Melding'}</label>
                  <textarea name="melding" required placeholder={lang === 'en' ? 'Write your message…' : 'Skriv din melding…'} />
                </div>
                {submitted && (
                  <div className={styles.successMsg}>
                    {lang === 'en' ? '✓ Message sent! We will get back to you shortly.' : '✓ Melding sendt! Vi svarer deg snart.'}
                  </div>
                )}
                {error && (
                  <div className={styles.successMsg} style={{ color: 'red' }}>
                    {lang === 'en' ? 'Something went wrong. Please try again.' : 'Noe gikk galt. Prøv igjen.'}
                  </div>
                )}
                <button type="submit" className="btn-dark">
                  {lang === 'en' ? 'Send message' : 'Send melding'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section id="map-section" className={styles.mapSection}>
        <div className="inner">
          <div className="reveal">
            <p className="eyebrow-label">{lang === 'en' ? 'Locations' : 'Lokasjoner'}</p>
            <h2 className="section-title">
              {lang === 'en' ? <>Find <em>us</em></> : <>Finn <em>oss</em></>}
            </h2>
            <div className="divider" />
          </div>
          <div className={styles.mapGrid}>
            {locations.map((loc, i) => (
              <div key={loc.id} className={`${styles.mapCard} reveal`} data-delay={`${i * 0.1}s`}>
                <h3>{loc.name}</h3>
                <p>{loc.address}{loc.phone ? <><br />Tlf: {loc.phone}</> : null}</p>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn-outline ${styles.mapBtn}`}
                  style={{ fontSize: 10, padding: '10px 26px' }}
                >
                  {lang === 'en' ? 'Open in Google Maps' : 'Åpne i Google Maps'}
                </a>
                <div className={styles.mapImg}>
                  <Image src={loc.image} alt={loc.name} fill sizes="(max-width: 960px) 100vw, 50vw" style={{ objectFit: 'cover', objectPosition: loc.id === 'aker-brygge' ? 'center 70%' : 'center center' }} />
                </div>
              </div>
            ))}
          </div>

          {/* ── OPENING HOURS ── */}
          <div className={styles.hoursRow}>
            <div className={`${styles.hoursSection} reveal`}>
              <h4 className={styles.hoursTitle}>Majorstuen</h4>
              <div className={styles.hoursGrid}>
                {openingHoursMajor.map((row, i) => (
                  <div key={i} className={styles.hr}>
                    <span>{t(row.day, lang)}</span>
                    <span>{typeof row.time === 'object' ? t(row.time, lang) : row.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.hoursSection} reveal`} data-delay="0.1s">
              <h4 className={styles.hoursTitle}>Aker Brygge</h4>
              <div className={styles.hoursGrid}>
                {openingHoursAker.map((row, i) => (
                  <div key={i} className={styles.hr}>
                    <span>{t(row.day, lang)}</span>
                    <span>{typeof row.time === 'object' ? t(row.time, lang) : row.time}</span>
                  </div>
                ))}
              </div>
              <p className={styles.hoursNote}>{lang === 'en' ? '* Opening hours may vary. Check our social media for updates.' : '* Åpningstider kan variere. Følg oss på sosiale medier for oppdateringer.'}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}