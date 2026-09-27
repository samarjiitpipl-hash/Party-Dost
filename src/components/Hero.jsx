import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 text-white px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,#F59E0B,transparent_50%)]" />
      <div className="relative max-w-4xl text-center">
        <p className="text-amber-400 tracking-[0.3em] text-sm mb-4">EVENTS • EXPERIENCES • CELEBRATIONS</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">Party Dost</h1>
        <p className="text-xl md:text-2xl mb-4 text-purple-100">
          Your Trusted Partner for Events, Experiences & Celebrations
        </p>
        <p className="text-base md:text-lg mb-10 text-purple-200 max-w-2xl mx-auto">
          From concept development and planning to execution and on-ground management —
          we bring creativity, technology, entertainment and professional expertise under one roof.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="bg-amber-500 hover:bg-amber-400 text-purple-900 px-8 py-3 rounded-full font-semibold transition shadow-lg">
            Plan Your Event
          </Link>
          <Link to="/services" className="border-2 border-white/60 hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}