'use client';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLang } from '../../components/LangContext';
import useReveal from '../../components/useReveal';
import PhotoPageHeader from '../../components/PhotoPageHeader';
import styles from './stillinger.module.css';

const lookingFor = [
  { no: 'Relevant fagutdanning innen negler, vipper eller bryn', en: 'Relevant professional training in nails, lashes or brows' },
  { no: 'Selvstendig og ansvarsbevisst', en: 'Independent and responsible' },
  { no: 'Lidenskap for faget og ønske om å utvikle seg', en: 'Passion for the craft and a desire to grow' },
  { no: 'Høy kvalitet på kundebehandling og service', en: 'High standard of client care and service' },
  { no: 'Positiv, glad og imøtekommende', en: 'Positive, cheerful and welcoming' },
  { no: 'Erfaring er et stort pluss', en: 'Experience is a big plus' },
];

const responsibilities = [
  { no: 'Kundebehandling innen negler, vipper og bryn', en: 'Client treatments in nails, lashes and brows' },
  { no: 'Daglig salongdrift: renhold, resepsjon, varesalg', en: 'Daily salon operations: cleaning, reception, retail sales' },
  { no: 'Bidra til et godt arbeidsmiljø og teamkultur', en: 'Contribute to a positive work environment and team culture' },
];

const weOffer = [
  { no: 'Profesjonelt, sosialt og hyggelig arbeidsmiljø', en: 'Professional, social and friendly work environment' },
  { no: 'Etablert salong med etablert kundebase', en: 'Established salon with an established client base' },
  { no: 'Oppfølging og videre kompetanseutvikling', en: 'Mentoring and further professional development' },
  { no: 'Stillingsstørrelse 20–100% etter avtale', en: 'Position size 20–100% by agreement' },
  { no: 'Fast timelønn og gode provisjoner', en: 'Fixed hourly wage and good commissions' },
  { no: 'Muligheten til stor utvikling og karrierevekst', en: 'Opportunity for significant growth and career development' },
];

const cultureCards = [
  {
    title: { no: 'Faglig vekst', en: 'Professional growth' },
    text: { no: 'Vi investerer i deg. Gjennom opplæring, kurs og tett oppfølging gir vi deg de beste forutsetningene for å vokse.', en: 'We invest in you. Through training, courses and close mentoring, we give you the best conditions to grow.' },
  },
  {
    title: { no: 'Godt fellesskap', en: 'Great community' },
    text: { no: 'Vi er et lite, tett team som heier på hverandre. Hos oss er det rom for å være deg selv.', en: 'We are a small, close team that cheers each other on. There is room to be yourself here.' },
  },
  {
    title: { no: 'Etablert base', en: 'Established base' },
    text: { no: 'Med to lokasjoner og en solid kundebase starter du der vi er — midt i det.', en: 'With two locations and a solid client base, you start right where we are — in the middle of it all.' },
  },
];

const t = (obj, lang) => (typeof obj === 'string' ? obj : obj?.[lang] ?? obj?.no ?? '');

export default function StillingerClient() {
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
        'template_9xy09iw',
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
        imageSrc="/images/stillinger.jpg"
        imageAlt="FAVN Neglesalong"
        eyebrow={lang === 'en' ? 'Job openings' : 'Ledige stillinger'}
        title={lang === 'en' ? 'Become part<br>of <em>FAVN</em>' : 'Bli en del<br>av <em>FAVN</em>'}
        height="55vh"
        minHeight="420px"
      />

      <section id="job-main" className={styles.jobMain}>
        <div className={styles.jobLayout}>

          {/* ── Left: job details ── */}
          <div className={`${styles.jt} reveal`}>
            <p className="eyebrow-label">{lang === 'en' ? 'Open position' : 'Åpen stilling'}</p>
            <h2 className="section-title">
              {lang === 'en' ? <>Nail technician<br />/ <em>Specialist</em></> : <>Negletekniker<br />/ <em>Fagarbeider</em></>}
            </h2>
            <div className="divider" />
            <p className={styles.jtP}>
              {lang === 'en'
                ? "Do you thrive with people and a creative workday? We are looking for someone who is passionate about the craft, enjoys teamwork and has an eye for sales."
                : "Trives du med mennesker og en kreativ hverdag? Vi søker deg som brenner for faget, liker å jobbe i team og har et øye for salg."}
            </p>
            <p className={styles.jtP}>
              {lang === 'en'
                ? "Some previous salon experience is preferred! You must be able to work independently and have the knowledge that comes with the profession."
                : "Gjerne med noe tidligere erfaring i salong! Du må kunne utføre jobben selvstendig og ha kunnskap som følger med faget."}
            </p>

            <ListBlock
              heading={lang === 'en' ? 'We are looking for' : 'Vi ser etter'}
              items={lookingFor}
              lang={lang}
            />
            <ListBlock
              heading={lang === 'en' ? 'Responsibilities' : 'Arbeidsoppgaver'}
              items={responsibilities}
              lang={lang}
            />
            <ListBlock
              heading={lang === 'en' ? 'We offer' : 'Vi tilbyr'}
              items={weOffer}
              lang={lang}
            />
          </div>

          {/* ── Right: apply ── */}
          <div className={`${styles.jobAside} reveal`} data-delay="0.15s">
            <div className={styles.contactCta}>
              <h3>{lang === 'en' ? 'Interested?' : 'Interessert?'}</h3>
              <p>
                {lang === 'en'
                  ? 'Contact manager Julianne Sofia directly for an informal chat.'
                  : 'Kontakt daglig leder Julianne Sofia direkte for en uforpliktende prat.'}
              </p>
              <div className={styles.ccRow}>
                <span className={styles.ccLbl}>{lang === 'en' ? 'Phone' : 'Telefon'}</span>
                <span className={styles.ccVal}><a href="tel:90201070">90 20 10 70</a></span>
              </div>
              <div className={styles.ccRow}>
                <span className={styles.ccLbl}>E-post</span>
                <span className={styles.ccVal}><a href="mailto:hei@favnoslo.no">hei@favnoslo.no</a></span>
              </div>

              <div className={styles.applyForm}>
                <h4>{lang === 'en' ? 'Send a quick application' : 'Send en rask søknad'}</h4>
                <form className={styles.af} onSubmit={handleSubmit} ref={formRef}>
                  <div className={styles.fg}>
                    <label>{lang === 'en' ? 'Name' : 'Navn'}</label>
                    <input type="text" required placeholder={lang === 'en' ? 'Your name' : 'Ditt navn'} />
                  </div>
                  <div className={styles.fg}>
                    <label>E-post</label>
                    <input type="email" required placeholder="din@epost.no" />
                  </div>
                  <div className={styles.fg}>
                    <label>{lang === 'en' ? 'Phone' : 'Telefon'}</label>
                    <input type="tel" placeholder={lang === 'en' ? 'Your phone number' : 'Ditt telefonnummer'} />
                  </div>
                  <div className={styles.fg}>
                    <label>{lang === 'en' ? 'About you' : 'Kort om deg'}</label>
                    <textarea required placeholder={lang === 'en' ? 'Tell us about your background…' : 'Fortell oss om din bakgrunn…'} />
                  </div>
                  {submitted && (
                    <div className={styles.successMsg}>
                      {lang === 'en' ? '✓ Application sent! We will be in touch.' : '✓ Søknaden er sendt! Vi tar kontakt.'}
                    </div>
                  )}
                  {error && (
                    <div className={styles.successMsg} style={{ color: 'red' }}>
                      {lang === 'en' ? 'Something went wrong. Please try again.' : 'Noe gikk galt. Prøv igjen.'}
                    </div>
                  )}
                  <button type="submit" className="btn-dark">
                    {lang === 'en' ? 'Send application' : 'Send søknad'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CULTURE ── */}
      <section id="culture" className={styles.culture}>
        <div className={styles.cultureInner}>
          <div className="reveal">
            <p className="eyebrow-label" style={{ color: 'rgba(255,255,255,.3)' }}>
              {lang === 'en' ? 'The workplace' : 'Arbeidsmiljøet'}
            </p>
            <h2 className="section-title" style={{ color: 'white' }}>
              {lang === 'en' ? <>Why work<br /><em>at FAVN</em></> : <>Hvorfor jobbe<br /><em>hos FAVN</em></>}
            </h2>
            <div className="divider" style={{ background: 'rgba(255,255,255,.15)' }} />
          </div>
          <div className={styles.cultureGrid}>
            {cultureCards.map((card, i) => (
              <div key={i} className={`${styles.cc} reveal`} data-delay={`${i * 0.1}s`}>
                <h4>{t(card.title, lang)}</h4>
                <p>{t(card.text, lang)}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 56 }} className="reveal">
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontStyle: 'italic', color: 'rgba(255,255,255,.5)', marginBottom: 24 }}>
              {lang === 'en' ? 'We look forward to hearing from you!' : 'Vi gleder oss til å høre fra deg!'}
            </p>
            <a href="tel:90201070" className="btn-white-outline">
              {lang === 'en' ? 'Call us: 90 20 10 70' : 'Ring oss: 90 20 10 70'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ListBlock({ heading, items, lang }) {
  return (
    <div style={{ marginTop: 32 }}>
      <h4 style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--charcoal)', fontWeight: 500, marginBottom: 14 }}>
        {heading}
      </h4>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize: 14, color: 'var(--mid)', paddingLeft: 22, position: 'relative', lineHeight: 1.7 }}>
            <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', opacity: .7 }}>—</span>
            {typeof item === 'string' ? item : item[lang] ?? item.no}
          </li>
        ))}
      </ul>
    </div>
  );
}