import { Cormorant_Garamond, Jost } from 'next/font/google';
import Providers from '../components/Providers';
import '../styles/globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata = {
  title: 'FAVN Neglesalong — Oslo',
  description:
    'FAVN Neglesalong tilbyr neglbehandlinger, vipper, bryn og mer i Oslo — Majorstuen og Aker Brygge.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="no" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <link rel="preload" as="image" href="/images/galleri-resepsjon-hover.jpg" />
        <link rel="preload" as="image" href="/images/galleri-majorstuen-hover.jpg" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}