// pages/index.js
import { NextSeo } from 'next-seo';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Anasayfa | Kreatifguru"
        description="Kreatifguru, web tasarım, yazılım ve dijital pazarlama çözümleri sunar. Ankara merkezli yaratıcı ajans."
        canonical="https://kreatifguru.com"
      />
      <HeroSection />
    </>
  );
}