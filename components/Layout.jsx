// components/Layout.jsx
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-24">{children}</main>
    </>
  );
}