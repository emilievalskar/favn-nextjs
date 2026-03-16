'use client';
import { LangProvider } from '../components/LangContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Providers({ children }) {
  return (
    <LangProvider>
      <Navbar />
      {children}
      <Footer />
    </LangProvider>
  );
}
