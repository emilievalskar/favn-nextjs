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
                  <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn-dark">
                    {t(cat.bookLabel, lang)}
                  </a>
                </div>
              </div>
            );
          })}
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