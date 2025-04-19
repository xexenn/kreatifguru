// pages/index.js
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Ankara Web Tasarım Ajansı | Kreatifguru"
        description="Kurumsal firmalar için mobil uyumlu, hızlı ve SEO odaklı web tasarım hizmetleri sunuyoruz. Markanı dijitale taşı!"
        canonical="https://kreatifguru.com"
        openGraph={{
          type: 'website',
          locale: 'tr_TR',
          url: 'https://kreatifguru.com',
          site_name: 'Kreatifguru',
        }}
      />

      <main className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 p-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Kreatifguru | Ankara Web Tasarım Ajansı
        </h1>
        <p className="text-lg text-gray-700 max-w-xl">
          SEO odaklı, mobil uyumlu, yüksek performanslı kurumsal web siteleri ve özel yazılım çözümleri geliştiriyoruz.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          Ücretsiz Teklif Al
        </a>
      </main>
    </>
  );
}