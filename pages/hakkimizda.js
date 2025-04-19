// pages/hakkimizda.js
import { NextSeo } from 'next-seo';

export default function HakkimizdaPage() {
  return (
    <>
      <NextSeo
        title="Hakkımızda | Kreatifguru"
        description="Kreatifguru; Ankara merkezli, yenilikçi çözümler üreten web tasarım ve yazılım ajansıdır."
        canonical="https://kreatifguru.com/hakkimizda"
      />

      <section className="max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Hakkımızda</h1>
        <p className="text-gray-700 leading-7 mb-4">
          Kreatifguru, 2024 yılında Ankara’da kurulmuş; kurumsal firmalara dijital dönüşüm, modern web tasarımı, yazılım geliştirme ve dijital pazarlama alanlarında uçtan uca çözümler sunan bir ajanstır.
        </p>
        <p className="text-gray-700 leading-7 mb-4">
          Misyonumuz; işletmelere sadece bir web sitesi değil, aynı zamanda marka bilinirliğini artıran ve Google’da rekabet gücü kazandıran dijital çözümler sunmaktır.
        </p>
        <p className="text-gray-700 leading-7">
          Deneyimli yazılım ekibimiz, modern tasarım anlayışımız ve SEO odaklı altyapımızla işinizi dijitalde büyütmek için buradayız.
        </p>
      </section>
    </>
  );
}