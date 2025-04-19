// components/Navbar.jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          Kreatifguru
        </Link>
        <div className="space-x-6 text-sm font-medium hidden md:flex">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Anasayfa</Link>
          <Link href="/hakkimizda" className="text-gray-700 hover:text-blue-600 transition">Hakkımızda</Link>
          <Link href="/hizmetlerimiz" className="text-gray-700 hover:text-blue-600 transition">Hizmetlerimiz</Link>
          <Link href="/iletisim" className="text-gray-700 hover:text-blue-600 transition">İletişim</Link>
        </div>
      </div>
    </nav>
  );
}