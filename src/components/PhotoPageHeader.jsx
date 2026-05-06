import Image from 'next/image';
import styles from './PhotoPageHeader.module.css';

/**
 * Reusable full-bleed photo page header.
 *
 * Props:
 *   imageSrc   – path to the hero image (in /public/images/)
 *   imageAlt   – alt text
 *   eyebrow    – small uppercase label
 *   title      – plain string, may contain <em> HTML
 *   height     – optional CSS height string (default "50vh")
 *   minHeight  – optional CSS minHeight string (default "360px")
 *   objectPos  – optional object-position (default "center center")
 */
export default function PhotoPageHeader({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  height = '50vh',
  minHeight = '360px',
  objectPos = 'center center',
}) {
  return (
    <div className={styles.header} style={{ height, minHeight }}>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt || ''}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: objectPos }}
        />
      )}
      <div className={styles.inner}>
        <p className={styles.eyebrowLabel}>{eyebrow}</p>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    </div>
  );
}