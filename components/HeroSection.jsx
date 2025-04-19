// components/HeroSection.jsx
export default function HeroSection() {
    return (
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-36 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 max-w-4xl mx-auto leading-tight">
          Türkiye'nin En Yaratıcı <span className="text-blue-600">Web Tasarım Ajansı</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Kreatifguru olarak markanızı dijitalde zirveye taşıyan hızlı, SEO odaklı ve mobil uyumlu web çözümleri sunuyoruz.
        </p>
        <a
          href="/iletisim"
          className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Ücretsiz Teklif Al
        </a>
      </section>
    );
  }