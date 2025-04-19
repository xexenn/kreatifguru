// bilesenler/Hizmetlerimiz.jsx

const hizmetler = [
    {
      baslik: 'Kurumsal Web Tasarımı',
      aciklama: 'Mobil uyumlu, SEO dostu, hızlı açılan kurumsal web siteleri geliştiriyoruz.',
    },
    {
      baslik: 'Özel Yazılım Geliştirme',
      aciklama: 'İşinize özel web tabanlı yazılım çözümleri sunuyoruz.',
    },
    {
      baslik: 'E-Ticaret Sistemleri',
      aciklama: 'WooCommerce, Shopify ve özel e-ticaret altyapılarıyla satışlarınızı dijitale taşıyoruz.',
    },
    {
      baslik: 'SEO ve Google Optimizasyonu',
      aciklama: 'Anahtar kelime odaklı, teknik SEO uyumlu siteler ile aramalarda öne geçin.',
    },
    {
      baslik: 'Sosyal Medya Yönetimi',
      aciklama: 'Markanızın sosyal medyada etkili bir şekilde temsil edilmesini sağlıyoruz.',
    },
    {
      baslik: 'Grafik & Marka Tasarımı',
      aciklama: 'Logo, kurumsal kimlik, kartvizit ve tüm görsel ihtiyaçlarınız için çözümler.',
    },
  ];
  
  export default function Hizmetlerimiz() {
    return (
      <section className="bg-white py-20 px-4" id="hizmetlerimiz">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-12">Hizmetlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hizmetler.map((hizmet, index) => (
              <div
                key={index}
                className="bg-blue-50 hover:bg-blue-100 p-6 rounded-xl shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{hizmet.baslik}</h3>
                <p className="text-gray-700 text-sm">{hizmet.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }