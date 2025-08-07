'use client'

import { useEffect } from 'react';
import Lenis from 'lenis';
import Intro from '../components/Intro';
import Footer from '../components/Footer2'; // ganti ke Footer2 kalau mau coba sticky

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Intro />
      <Footer />
    </main>
  );
}