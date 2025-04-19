// pages/index.js

import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function Anasayfa() {
  return (
    <>
      <NextSeo
        title="Kreatifguru | Türkiye'nin En İyi Web Tasarım Ajansı"
        description="SEO odaklı web tasarımı, yazılım, dijital pazarlama, mobil uygulama geliştirme, marka kimliği ve daha fazlası. Kreatifguru ile markanızı zirveye taşıyın."
        canonical="https://kreatifguru.com"
      />

      <Head>
        <title>Kreatifguru | Web Tasarım Ajansı</title>
        <meta
          name="description"
          content="Kreatifguru ile markanızı dijitale taşıyın. Web tasarımı, SEO, yazılım, mobil uygulama ve daha fazlası için profesyonel çözümler."
        />
      </Head>

      <main className="bg-black text-white font-sans">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-red-900/40 to-black/90 z-0" />
          <video
            autoPlay
            muted
            loop
            className="absolute w-full h-full object-cover z-[-1]"
            src="/video/agency-bg.mp4"
          ></video>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight z-10">
            Türkiye'nin En <span className="text-red-500">Yaratıcı</span> <br /> Web Tasarım Ajansı
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-300 z-10">
            Kreatifguru, dijital varlığınızı güçlendirmek için modern teknolojilerle donatılmış, SEO odaklı ve mobil uyumlu web çözümleri sunar.
          </p>
          <a
            href="/iletisim"
            className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition z-10"
          >
            Ücretsiz Teklif Al
          </a>
        </section>

        {/* Görev ve Çözüm */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-28 bg-gray-900">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-red-500">Görevimiz</h2>
            <p className="text-gray-300">
              Kreatifguru olarak her müşterimizin dijitalde zirveye ulaşmasını hedefliyoruz. Modern tasarım, yüksek performans ve erişilebilirlik odaklı projelerle markanızı büyütüyoruz.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-red-500">Çözümümüz</h2>
            <p className="text-gray-300">
              Kullanıcı deneyimi, SEO altyapısı ve kurumsal tasarım dilini birleştirerek ölçülebilir sonuçlar sunan web siteleri inşa ediyoruz. Her proje, özgün içerik ve ölçülebilir başarılarla hayat bulur.
            </p>
          </div>
        </section>

        {/* Hizmetlerimiz */}
        <section className="py-24 px-10 text-center bg-black">
          <h2 className="text-4xl font-bold text-white mb-12">Hizmetlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[ 
              ['Kurumsal Web Tasarımı', 'Kurumsal kimliğinize uygun, SEO ve hız odaklı web siteleri.'],
              ['Yazılım & Uygulama Geliştirme', 'Tailor-made yazılım çözümleri ve mobil uygulamalar.'],
              ['SEO & Dijital Pazarlama', 'Google’da üst sıralara çıkmanızı sağlayacak içerik ve teknik altyapı.'],
              ['E-Ticaret Çözümleri', 'WooCommerce, Shopify ya da özel altyapılarla online satış çözümleri.'],
              ['Marka Kimliği & Grafik Tasarım', 'Logo, renk paleti, kartvizit, sunum ve kurumsal materyaller.'],
              ['Video & Medya Üretimi', 'Tanıtım filmi, drone çekimi, sosyal medya içerik prodüksiyonu.'],
            ].map(([baslik, aciklama], i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-white mb-2">{baslik}</h3>
                <p className="text-gray-400 text-sm">{aciklama}</p>
              </div>
            ))}
          </div>
        </section>

        {/* İstatistikler ve CTA */}
        <section className="py-20 bg-red-900 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Başarılarımız</h2>
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            {[
              ['Tamamlanan Proje', '120+'],
              ['Müşteri Memnuniyeti', '%98'],
              ['Deneyim (yıl)', '12'],
            ].map(([label, value], i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-extrabold">{value}</div>
                <div className="text-gray-200 mt-2">{label}</div>
              </div>
            ))}
          </div>

          <a
            href="/iletisim"
            className="mt-10 inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Bizimle Hemen İletişime Geç
          </a>
        </section>
      </main>
    </>
  );
}
