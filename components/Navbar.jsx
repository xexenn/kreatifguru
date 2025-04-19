// components/Navbar.jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Kreatifguru
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-700 hover:text-blue-600">Hakkımızda</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">Hizmetler</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">İletişim</Link>
        </div>
      </div>
    </nav>
  );
}