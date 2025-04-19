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
{/* Hakkımızda / Görev & Çözüm */ }
<section className="bg-gray-900 text-white py-24 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    <div>
      <h2 className="text-4xl font-bold mb-6 text-red-500">Hakkımızda</h2>
      <p className="text-gray-300 leading-relaxed">
        Kreatifguru, Ankara merkezli, yaratıcı çözümler sunan bir web tasarım ve yazılım ajansıdır.
        Misyonumuz; dijitalde büyümek isteyen markalara modern, hızlı ve kullanıcı dostu çözümler üretmektir.
        <br /><br />
        Web tasarımı, yazılım geliştirme, SEO, e-ticaret, mobil uygulama, dijital pazarlama ve medya prodüksiyon alanlarında size özel stratejiler geliştiriyoruz.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-semibold mb-4 text-white">Görevimiz</h3>
      <p className="text-gray-400 mb-6">
        İşinizi dijitalde güçlü gösterecek altyapılar kurmak, müşterilerinizle buluşmanızı kolaylaştırmak ve sürdürülebilir başarınızı garantilemek.
      </p>
      <h3 className="text-2xl font-semibold mb-4 text-white">Çözümümüz</h3>
      <p className="text-gray-400">
        Tasarım, yazılım ve pazarlama üçlüsünü entegre şekilde sunuyor; ihtiyaçlarınıza özel çözümleri en kısa sürede, maksimum etkiyle üretiyoruz.
      </p>
    </div>
  </div>
</section>

{/* Sayılarla Başarı */ }
<section className="bg-black text-white py-20 text-center">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-red-500 mb-12">Sayılarla Kreatifguru</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
      <div>
        <p className="text-5xl font-extrabold text-white">120+</p>
        <p className="text-gray-400">Teslim Edilen Proje</p>
      </div>
      <div>
        <p className="text-5xl font-extrabold text-white">%98</p>
        <p className="text-gray-400">Müşteri Memnuniyeti</p>
      </div>
      <div>
        <p className="text-5xl font-extrabold text-white">12</p>
        <p className="text-gray-400">Yıllık Deneyim</p>
      </div>
    </div>
  </div>
</section>
{/* Hizmetlerimiz */ }
<section className="bg-gray-950 text-white py-24 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12 text-red-500">Hizmetlerimiz</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      {[
        {
          title: 'Kurumsal Web Tasarımı',
          desc: 'Mobil uyumlu, SEO dostu, hızlı açılan kurumsal web siteleri geliştiriyoruz.',
        },
        {
          title: 'Yazılım ve Uygulama Geliştirme',
          desc: 'İşinize özel backend + frontend sistemler ve mobil uygulamalar geliştiriyoruz.',
        },
        {
          title: 'E-Ticaret Çözümleri',
          desc: 'WooCommerce, Shopify veya özel altyapılarla dijital mağazanızı oluşturuyoruz.',
        },
        {
          title: 'SEO & Dijital Pazarlama',
          desc: 'Google’da üst sıralara çıkmanız için anahtar kelime, teknik SEO ve içerik çözümleri sunuyoruz.',
        },
        {
          title: 'Grafik Tasarım & Marka Kimliği',
          desc: 'Logo, renk paleti, kurumsal kimlik ve görsel iletişim çözümleriyle markanızı inşa ediyoruz.',
        },
        {
          title: 'Video & Medya Prodüksiyon',
          desc: 'Tanıtım filmi, drone çekimi, sosyal medya içerikleri ve YouTube stratejileri üretiyoruz.',
        },
        {
          title: 'Sosyal Medya Yönetimi',
          desc: 'Instagram, LinkedIn ve diğer platformlar için içerik planlaması ve hesap yönetimi sağlıyoruz.',
        },
        {
          title: 'Hazır Web Paketleri',
          desc: 'Uygun maliyetli, hızlı kurulumlu, modern hazır tasarımlar sunuyoruz.',
        },
        {
          title: 'Tekliflendirme ve Danışmanlık',
          desc: 'Projeniz için en uygun dijital çözümleri sunuyor, teklif ve strateji desteği veriyoruz.',
        },
      ].map((item, i) => (
        <div key={i} className="bg-gray-800 hover:bg-gray-700 p-6 rounded-lg shadow transition">
          <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
          <p className="text-gray-300 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Portföy / Öne Çıkan Projeler */ }
<section className="bg-black text-white py-24 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12 text-red-500">Portföyümüzden Seçmeler</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          img: '/img/proje1.jpg',
          title: 'NovaMed Klinik',
          desc: 'Sağlık sektörüne özel, mobil uyumlu ve SEO odaklı web sitesi.',
        },
        {
          img: '/img/proje2.jpg',
          title: 'Artema Yapı',
          desc: 'İnşaat firması için özel tasarlanmış kurumsal web çözümü.',
        },
        {
          img: '/img/proje3.jpg',
          title: 'Zenix Dijital',
          desc: 'Ajans yapısına uygun, animasyonlu, one-page kreatif site.',
        },
      ].map((project, i) => (
        <div
          key={i}
          className="bg-gray-900 hover:bg-gray-800 transition rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-5 text-left">
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm">{project.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <a
      href="/iletisim"
      className="mt-12 inline-block bg-white text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-100 transition"
    >
      Benzer Proje Talep Et
    </a>
  </div>
</section>
{/* Müşteri Yorumları */ }
<section className="bg-gray-950 text-white py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12 text-red-500">Müşterilerimiz Ne Diyor?</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          name: 'Ahmet Yıldız',
          role: 'NovaMed Klinik / Kurucu',
          text: 'Kreatifguru ekibiyle çalışmak gerçekten büyük bir fark yarattı. Web sitemiz sadece şık değil, aynı zamanda Google’da da yükseldi!',
        },
        {
          name: 'Gizem Aksoy',
          role: 'Artema Yapı / Pazarlama Müdürü',
          text: 'Kreatifguru’nun profesyonelliği sayesinde dijital pazarlama hedeflerimizi 2 kat hızlı gerçekleştirdik.',
        },
        {
          name: 'Mustafa Kaya',
          role: 'Zenix Dijital / Ajans Sahibi',
          text: 'Yaratıcılık, hız ve iletişim konusunda gerçekten harikalar. Ajans ajansa hizmet veremez derlerdi, yalanmış!',
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition text-left"
        >
          <p className="text-gray-300 text-sm italic mb-4">“{item.text}”</p>
          <p className="font-semibold text-white">{item.name}</p>
          <p className="text-gray-500 text-xs">{item.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Referans Markalar */ }
<section className="bg-black text-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-red-500 mb-12">Bizi Tercih Eden Markalar</h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center grayscale hover:grayscale-0 transition">
      {[
        '/img/logo-novamed.svg',
        '/img/logo-artema.svg',
        '/img/logo-zenix.svg',
        '/img/logo-genesis.svg',
      ].map((src, i) => (
        <div key={i} className="flex justify-center">
          <img src={src} alt={`Referans ${i + 1}`} className="h-12 object-contain" />
        </div>
      ))}
    </div>
  </div>
</section>
{/* CTA - İletişime Geç */ }
<section className="bg-red-700 text-white py-24 text-center px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-6">Projenizi Dijitale Taşımanın Tam Zamanı!</h2>
    <p className="text-lg text-white/90 mb-8">
      Web tasarımı, SEO, yazılım veya mobil uygulama projeleriniz için bizimle iletişime geçin. Size özel çözümler sunalım.
    </p>
    <a
      href="/iletisim"
      className="inline-block bg-white text-red-700 font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-100 transition"
    >
      İletişim Formunu Doldurun
    </a>
  </div>
</section>

{/* Footer */ }
<footer className="bg-black text-gray-400 text-sm py-12 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h3 className="text-white font-semibold text-lg mb-4">Kreatifguru</h3>
      <p>Yaratıcı, hızlı ve SEO odaklı web çözümleri. Markanızı dijitale taşıyan güvenilir ajans.</p>
    </div>

    <div>
      <h4 className="text-white font-semibold mb-3">Hizmetler</h4>
      <ul className="space-y-1">
        <li><a href="/web-tasarim" className="hover:text-white">Web Tasarımı</a></li>
        <li><a href="/seo" className="hover:text-white">SEO</a></li>
        <li><a href="/yazilim" className="hover:text-white">Yazılım</a></li>
        <li><a href="/mobil-uygulama" className="hover:text-white">Mobil Uygulama</a></li>
      </ul>
    </div>

    <div>
      <h4 className="text-white font-semibold mb-3">Kurumsal</h4>
      <ul className="space-y-1">
        <li><a href="/hakkimizda" className="hover:text-white">Hakkımızda</a></li>
        <li><a href="/iletisim" className="hover:text-white">İletişim</a></li>
        <li><a href="/blog" className="hover:text-white">Blog</a></li>
        <li><a href="/kvkk" className="hover:text-white">KVKK</a></li>
      </ul>
    </div>

    <div>
      <h4 className="text-white font-semibold mb-3">İletişim</h4>
      <p>📍 Ankara, Türkiye</p>
      <p>📞 0 (312) 123 45 67</p>
      <p>✉️ info@kreatifguru.com</p>
      <div className="mt-4 flex space-x-4">
        <a href="https://www.instagram.com" target="_blank"><img src="/icons/instagram.svg" className="h-5" alt="Instagram" /></a>
        <a href="https://www.linkedin.com" target="_blank"><img src="/icons/linkedin.svg" className="h-5" alt="LinkedIn" /></a>
        <a href="https://wa.me/905551234567" target="_blank"><img src="/icons/whatsapp.svg" className="h-5" alt="WhatsApp" /></a>
      </div>
    </div>
  </div>

  <div className="mt-12 text-center text-xs text-gray-500">
    © {new Date().getFullYear()} Kreatifguru. Tüm hakları saklıdır.
  </div>
</footer>