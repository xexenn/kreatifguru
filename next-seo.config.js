const siteUrl = 'https://kreatifguru.com';

export default {
  title: 'Ankara Web Tasarım | Kreatifguru',
  description:
    'Kreatifguru, Ankara merkezli kurumsal web tasarım, yazılım, mobil uygulama ve SEO çözümleri sunar. Web sitenizi dijital dünyaya hazırlayın.',
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteUrl,
    site_name: 'Kreatifguru',
    images: [
      {
        url: `${siteUrl}/img/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Kreatifguru - Ankara Web Tasarım Ajansı',
      },
    ],
  },
  twitter: {
    handle: '@kreatifguru',
    site: '@kreatifguru',
    cardType: 'summary_large_image',
  },
};