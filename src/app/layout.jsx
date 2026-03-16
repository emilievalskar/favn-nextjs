import { Cormorant_Garamond, Jost } from 'next/font/google';
import Providers from '../components/Providers';
import '../styles/globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
