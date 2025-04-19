// pages/index.js

import { NextSeo } from 'next-seo';

export default function Anasayfa() {
  return (
    <>
      <NextSeo
        title="Kreatifguru | Ankara Web Tasarım ve Yazılım Ajansı"
        description="Kreatifguru: Kurumsal firmalar için SEO uyumlu, mobil odaklı, yüksek performanslı web tasarım, yazılım ve dijital çözümler."
        canonical="https://kreatifguru.com"
      />

      <section className="relative min-h-screen bg-black text-white flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/media/creative-background.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 max-w-4xl text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
            Türkiye'nin En Yaratıcı <span className="text-red-500">Web Ajansı</span>
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Kreatifguru ile markanızı dijital dünyada konumlandırın. SEO uyumlu, hızlı ve modern tasarımlarla dijital başarınızı garantileyin.
          </p>
          <a
            href="/iletisim"
            className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            Ücretsiz Teklif Al
          </a>
        </div>
      </section>
    </>
  );
}