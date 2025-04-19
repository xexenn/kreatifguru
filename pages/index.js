// pages/index.js

import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Ankara Web Tasarım Ajansı | Kreatifguru"
        description="Kurumsal firmalar için mobil uyumlu, hızlı ve SEO odaklı web tasarım hizmetleri sunuyoruz. Markanı dijitale taşı!"
        canonical="https://kreatifguru.com"
      />

      <section className="bg-gradient-to-b from-blue-50 to-white py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 max-w-4xl mx-auto">
          Ankara'nın Lider Web Tasarım ve Yazılım Ajansı
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Kreatifguru ile markanı dijitale taşı! SEO uyumlu, hızlı ve mobil odaklı web siteleri, profesyonel yazılım çözümleri ve dijital pazarlama hizmetleriyle tanış.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          Ücretsiz Teklif Al
        </a>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          Hizmetlerimiz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'Kurumsal Web Tasarımı',
              desc: 'Mobil uyumlu, SEO dostu ve hızlı açılan kurumsal siteler. Marka kimliğinizi dijitale taşıyoruz.',
            },
            {
              title: 'Yazılım & Programlama',
              desc: 'Özel yazılım çözümleri, kurumsal sistem entegrasyonu ve hızlı geliştirme hizmetleri.',
            },
            {
              title: 'E-Ticaret Çözümleri',
              desc: 'WooCommerce, Shopify veya özel altyapılarla satışlarınızı dijitale taşıyoruz.',
            },
            {
              title: 'SEO & Dijital Pazarlama',
              desc: 'Google’da üst sıralar için anahtar kelime analizi, SEO teknik optimizasyon ve içerik stratejisi.',
            },
            {
              title: 'Sosyal Medya Yönetimi',
              desc: 'Kurumsal hesapların kreatif içeriklerle büyümesini sağlıyoruz.',
            },
            {
              title: 'Mobil Uygulama Geliştirme',
              desc: 'iOS ve Android için performanslı, modern ve kullanıcı dostu uygulamalar geliştiriyoruz.',
            },
            {
              title: 'Grafik Tasarım & Marka Kimliği',
              desc: 'Logo, kurumsal renkler, kartvizit ve tüm görsel materyaller için yaratıcı çözümler.',
            },
            {
              title: 'Hazır Web Paketleri',
              desc: 'Hızlı kurulum, düşük maliyetli, SEO dostu hazır web site seçenekleri.',
            },
            {
              title: 'Video & Medya Prodüksiyon',
              desc: 'Tanıtım filmi, dron çekimi, YouTube içerik üretimi ve medya stratejisi.',
            },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white text-center py-20">
        <h2 className="text-3xl font-bold">Projen Hazır mı?</h2>
        <p className="mt-2 text-lg">Bize ulaş, markanı dijital dünyada en güçlü şekilde konumlandıralım.</p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          İletişime Geç
        </a>
      </section>
    </>
  );
}