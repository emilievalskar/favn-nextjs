'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useLang } from '../../components/LangContext';
import useReveal from '../../components/useReveal';
import PhotoPageHeader from '../../components/PhotoPageHeader';
import { treatmentCategories } from '../../data/treatments';
import { BOOK_URL } from '../../data/settings';
import styles from './behandlinger.module.css';

const t = (obj, lang) => (typeof obj === 'string' ? obj : obj?.[lang] ?? obj?.no ?? '');

export default function BehandlingerClient() {
  const { lang } = useLang();
  const [openId, setOpenId] = useState(null);
  useReveal();

  function toggle(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <>
      <PhotoPageHeader
        imageSrc="/images/behandlinger.jpg"
        imageAlt="Behandlinger FAVN"
        eyebrow={lang === 'en' ? 'Treatments' : 'Behandlinger'}
        title={lang === 'en' ? 'What we<br><em>offer</em>' : 'Hva vi<br><em>tilbyr</em>'}
        height="50vh"
        minHeight="360px"
      />

      <section id="behandlinger-main" className={styles.main}>
        <div className={styles.accWrap}>
          <div className={styles.accIntro}>
            <p className="eyebrow-label">{lang === 'en' ? 'Our treatments' : 'Våre behandlinger'}</p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              {lang === 'en' ? <>Choose your <em>treatment</em></> : <>Velg din <em>behandling</em></>}
            </h2>
            <div className="divider" />
            <p>
              {lang === 'en'
                ? 'Click a category to see all available treatments and prices. All treatments can be booked directly online.'
                : 'Klikk på en kategori for å se alle tilgjengelige behandlinger og priser. Alle behandlinger kan bestilles direkte online.'}
            </p>
          </div>

          {treatmentCategories.map((cat, i) => {
            const isOpen = openId === cat.id;
            return (
              <div key={cat.id} className={`${styles.accItem}${isOpen ? ` ${styles.open}` : ''}`}>
                <button className={styles.accTrigger} onClick={() => toggle(cat.id)}>
                  <div className={styles.accTriggerLeft}>
                    <span className={styles.accNum}>{cat.num}</span>
                    <div>
                      <div className={styles.accTitle}>{t(cat.title, lang)}</div>
                      <div className={styles.accSub}>{t(cat.sub, lang)}</div>
                    </div>
                  </div>
                  <div className={`${styles.accIcon}${isOpen ? ` ${styles.accIconOpen}` : ''}`} />
                </button>

                <div className={styles.accBody} style={{ display: isOpen ? 'block' : 'none' }}>
                  {cat.note && (
                    <div className={styles.accNote}>{t(cat.note, lang)}</div>
                  )}
                  {cat.customBody ? (
                    <p style={{ fontSize: 14, color: 'var(--mid)', lineHeight: 1.8, marginBottom: 24 }}>
                      {t(cat.customBody, lang)}
                    </p>
                  ) : (
                    <div className={styles.tList}>
                      {cat.entries.map((entry, j) => (
                        <div key={j} className={styles.tEntry}>
                          <div>
                            <div className={styles.tEntryName}>{t(entry.name, lang)}</div>
                            {entry.desc && (
                              <div className={styles.tEntryDesc}>{t(entry.desc, lang)}</div>
                            )}
                          </div>
                          <div className={styles.tEntryRight}>
                            <div className={styles.tEntryPrice}>{entry.price}</div>
                            {entry.meta && <div className={styles.tEntryMeta}>{entry.meta}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <a href={cat.bookUrl || BOOK_URL} target="_blank" rel="noreferrer" className="btn-dark">
                    {t(cat.bookLabel, lang)}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* ── VILKÅR & BETINGELSER ── */}
      <section className={styles.termsSection}>
        <div className={styles.accWrap}>
          <div className='reveal'>
            <p className='eyebrow-label'>{lang === 'en' ? 'Terms & Conditions' : 'Vilkår & betingelser'}</p>
            <h2 className='section-title'>
              {lang === 'en' ? <>What you<br /><em>need to know</em></> : <>Det du<br /><em>trenger å vite</em></>}
            </h2>
            <div className='divider' />
          </div>
          <div className={styles.termsGrid}>
            <div className='reveal'>
              <h4>{lang === 'en' ? '1. Cancellation Policy' : '1. Avbestilling'}</h4>
              <p>{lang === 'en' ? 'Appointments must be cancelled or rescheduled at least 24 hours before the scheduled appointment time. Cancellations made less than 24 hours before the appointment may be charged up to 100% of the treatment price.' : 'Timen må avbestilles eller flyttes senest 24 timer før avtalt tid. Ved avbestilling mindre enn 24 timer før timen kan det belastes inntil 100% av behandlingsprisen.'}</p>
            </div>
            <div className='reveal' data-delay='0.05s'>
              <h4>{lang === 'en' ? '2. No-Shows' : '2. Uteblivelse'}</h4>
              <p>{lang === 'en' ? 'Clients who do not show up for their appointment without notice will be charged 100% of the booked service.' : 'Kunder som uteblir uten varsel vil bli fakturert 100% av den bookede behandlingen.'}</p>
            </div>
            <div className='reveal' data-delay='0.1s'>
              <h4>{lang === 'en' ? '3. Late Arrival' : '3. Sen ankomst'}</h4>
              <p>{lang === 'en' ? 'If you arrive late, we may need to shorten your treatment to avoid delaying the next client. The full treatment price will still apply.' : 'Ved sen ankomst kan vi bli nødt til å forkorte behandlingen for ikke å forsinke neste kunde. Full pris vil likevel gjelde.'}</p>
            </div>
            <div className='reveal' data-delay='0.15s'>
              <h4>{lang === 'en' ? '4. Health & Contraindications' : '4. Helse og kontraindikasjoner'}</h4>
              <p>{lang === 'en' ? 'Please inform us prior to your appointment if you have any allergies, infections, nail conditions, or medical concerns that may affect your treatment.' : 'Gi oss beskjed før timen dersom du har allergier, infeksjoner, negleproblemer eller andre helsemessige forhold som kan påvirke behandlingen.'}</p>
            </div>
            <div className='reveal' data-delay='0.2s'>
              <h4>{lang === 'en' ? '5. Guarantee & Adjustments' : '5. Garanti og justeringer'}</h4>
              <p>{lang === 'en' ? 'If you experience any issues with your treatment, please contact us within 48 hours and we will gladly assess and correct the service if necessary.' : 'Opplever du problemer med behandlingen, ta kontakt innen 48 timer så vurderer og korrigerer vi gjerne om nødvendig.'}</p>
            </div>
            <div className='reveal' data-delay='0.25s'>
              <h4>{lang === 'en' ? '6. Payment' : '6. Betaling'}</h4>
              <p>{lang === 'en' ? 'All services must be paid in full at the end of the appointment.' : 'Alle behandlinger betales i sin helhet ved avslutning av timen.'}</p>
            </div>
            <div className='reveal' data-delay='0.3s'>
              <h4>{lang === 'en' ? '7. Right to Refuse Service' : '7. Rett til å nekte service'}</h4>
              <p>{lang === 'en' ? 'FAVN reserves the right to refuse service if a client arrives with conditions that make the treatment unsafe or inappropriate.' : 'FAVN forbeholder seg retten til å avvise behandling dersom en kunde møter opp med tilstander som gjør behandlingen utrygg eller upassende.'}</p>
            </div>
          </div>
        </div>
      </section>
      {/* ── GAVEKORT ── */}
      <section id="gavekort" className={styles.gavekort}>
        <div className={styles.gkInner}>
          <div className="reveal">
            <p className="eyebrow-label" style={{ color: 'rgba(255,255,255,.3)' }}>
              {lang === 'en' ? 'Gift card' : 'Gavekort'}
            </p>
            <h2 className={styles.gkTitle}>
              {lang === 'en' ? <>Give the gift of<em>wellbeing</em></> : <>Gi bort<em>velvære</em></>}
            </h2>
            <p className={styles.gkText}>
              {lang === 'en'
                ? 'Gift cards for FAVN suit any occasion — birthday, anniversary or just because. Contact us to order.'
                : 'Gavekort til FAVN passer til enhver anledning — bursdag, jubileum eller bare fordi. Kontakt oss for bestilling.'}
            </p>
            <a href="mailto:hei@favnoslo.no" className="btn-white-outline">
              {lang === 'en' ? 'Order gift card' : 'Bestill gavekort'}
            </a>
          </div>
          <div className="reveal" data-delay="0.15s" style={{ height: 320, position: 'relative', overflow: 'hidden' }}>
            <Image src="/images/gavekort.jpg" alt="Gavekort" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
    </>
  );
}