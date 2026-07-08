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

      {/* ── VILKÅR & BETINGELSER ── */}
      <section className={styles.termsSection}>
        <div className='inner'>
          <div className='reveal'>
            <p className='eyebrow-label'>{lang === 'en' ? 'Terms & Conditions' : 'Vilkår & betingelser'}</p>
            <h2 className='section-title'>
              {lang === 'en' ? <>What you<br /><em>need to know</em></> : <>Det du<br /><em>trenger å vite</em></>}
            </h2>
            <div className='divider' />
          </div>
          <div className={styles.termsGrid}>
            <div className={"reveal"}>
              <h4>{lang === 'en' ? '1. Cancellation Policy' : '1. Avbestilling'}</h4>
              <p>{lang === 'en' ? 'Appointments must be cancelled or rescheduled at least 24 hours before the scheduled appointment time. Cancellations made less than 24 hours before the appointment may be charged up to 100% of the treatment price.' : 'Timen må avbestilles eller flyttes senest 24 timer før avtalt tid. Ved avbestilling mindre enn 24 timer før timen kan det belastes inntil 100% av behandlingsprisen.'}</p>
            </div>
            <div className={"reveal"} data-delay="0.05s">
              <h4>{lang === 'en' ? '2. No-Shows' : '2. Uteblivelse'}</h4>
              <p>{lang === 'en' ? 'Clients who do not show up for their appointment without notice will be charged 100% of the booked service.' : 'Kunder som uteblir uten varsel vil bli fakturert 100% av den bookede behandlingen.'}</p>
            </div>
            <div className={"reveal"} data-delay="0.1s">
              <h4>{lang === 'en' ? '3. Late Arrival' : '3. Sen ankomst'}</h4>
              <p>{lang === 'en' ? 'If you arrive late, we may need to shorten your treatment to avoid delaying the next client. The full treatment price will still apply.' : 'Ved sen ankomst kan vi bli nødt til å forkorte behandlingen for ikke å forsinke neste kunde. Full pris vil likevel gjelde.'}</p>
            </div>
            <div className={"reveal"} data-delay="0.15s">
              <h4>{lang === 'en' ? '4. Health & Contraindications' : '4. Helse og kontraindikasjoner'}</h4>
              <p>{lang === 'en' ? 'Please inform us prior to your appointment if you have any allergies, infections, nail conditions, or medical concerns that may affect your treatment.' : 'Gi oss beskjed før timen dersom du har allergier, infeksjoner, negleproblemer eller andre helsemessige forhold som kan påvirke behandlingen.'}</p>
            </div>
            <div className={"reveal"} data-delay="0.2s">
              <h4>{lang === 'en' ? '5. Guarantee & Adjustments' : '5. Garanti og justeringer'}</h4>
              <p>{lang === 'en' ? 'If you experience any issues with your treatment, please contact us within 48 hours and we will gladly assess and correct the service if necessary.' : 'Opplever du problemer med behandlingen, ta kontakt innen 48 timer så vurderer og korrigerer vi gjerne om nødvendig.'}</p>
            </div>
            <div className={"reveal"} data-delay="0.25s">
              <h4>{lang === 'en' ? '6. Payment' : '6. Betaling'}</h4>
              <p>{lang === 'en' ? 'All services must be paid in full at the end of the appointment.' : 'Alle behandlinger betales i sin helhet ved avslutning av timen.'}</p>
            </div>
            <div className={"reveal"} data-delay="0.3s">
              <h4>{lang === 'en' ? '7. Right to Refuse Service' : '7. Rett til å nekte service'}</h4>
              <p>{lang === 'en' ? 'FAVN reserves the right to refuse service if a client arrives with conditions that make the treatment unsafe or inappropriate.' : 'FAVN forbeholder seg retten til å avvise behandling dersom en kunde møter opp med tilstander som gjør behandlingen utrygg eller upassende.'}</p>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}