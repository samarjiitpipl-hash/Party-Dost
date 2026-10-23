import { Link } from 'react-router-dom';
import { useState } from 'react';

const packages = [
  {
    name: 'Forever Begins',
    price: '₹17,999',
    tagline: 'Ideal for 20–25 guests',
    ideal: 'Home or small venue celebration',
    included: [
      'Balloon arch or entrance decoration',
      '"Happy Anniversary" backdrop',
      '100 balloons with thematic color combination',
      'LED name or anniversary banner',
      'Table decoration with Heart shaped Premium Balloons',
      'Cake table setup',
      'Basic sound system for music & entertainment',
      '1 event coordinator',
      'Setup and dismantling included',
    ],
    color: 'pink',
  },
  {
    name: 'Love Reimagined',
    price: '₹34,999',
    tagline: 'Ideal for 40–50 guests',
    ideal: 'Home, banquet, or café celebration',
    included: [
      'Premium entrance gate decoration with elegant Balloons / Faux flowers',
      'Premium faux floral décor and balloon backdrop with couple name',
      '200 balloons with theme-based décor',
      'Fresh flower arrangement',
      'Fairy lights and warm ambient lighting',
      'Cake table with balloons / faux floral décor',
      'Photo corner with props',
      'Basic DJ/music arrangement',
      '2 event coordinators',
      'Setup, coordination, and dismantling included',
    ],
    color: 'rose',
  },
  {
    name: 'Timeless Togetherness',
    price: '₹55,999',
    tagline: 'Ideal for 75–100 guests',
    ideal: 'Banquet hall or farmhouse celebration',
    included: [
      'Grand entrance decoration',
      'Premium faux floral décor stage backdrop',
      'Couple seating setup with throne chairs',
      '350–400 balloons with customized theme',
      'Premium faux floral décor and hanging floral installations',
      'LED screen or projector for couple photos/videos',
      'Professional DJ with basic lighting',
      'Photo booth with props',
      'Cake table and gift table décor',
      '3–4 event coordinators',
      'Complete event setup, coordination, and dismantling',
    ],
    color: 'red',
  },
  {
    name: 'Moments of Forever',
    price: '₹85,999',
    tagline: 'Ideal for 120–150 guests',
    ideal: 'Banquet hall, farmhouse, or hotel',
    included: [
      'Luxury themed entrance and walkway décor',
      'Premium designer faux floral décor stage with couple monogram',
      'Premium seating arrangement for guests',
      '500+ balloons with customized theme',
      'Premium faux floral décor, chandeliers, and hanging installations',
      'LED wall / projector with anniversary video',
      'Professional DJ, sound, and dynamic lighting',
      'Live photo booth with instant prints',
      'Cake, gift, and welcome drink counter décor',
      'Host/emcee coordination',
      '5–6 event coordinators',
      'Full event planning, vendor coordination, and execution',
    ],
    color: 'purple',
  },
  {
    name: 'The Golden Bond',
    price: '₹1,25,999',
    tagline: 'Ideal for 150–200+ guests',
    ideal: 'Premium banquet, hotel, farmhouse, or destination-style celebration',
    included: [
      'Luxury entrance, pathway, and welcome area décor',
      'Premium faux floral décor stage with premium backdrop',
      'Couple throne seating and VIP lounge area',
      '800+ balloons with premium customized theme',
      'Premium faux floral décor, chandeliers, drapes, and hanging installations',
      'LED wall with customized anniversary visuals',
      'Professional DJ, sound system, and advanced lighting',
      'Live photo booth with instant prints',
      'Cake table, gift table, welcome drinks, and refreshment counter décor',
      'Professional host/emcee',
      'Dedicated event manager and 8–10 coordinators',
      'Complete event planning, vendor management, and on-ground execution',
    ],
    color: 'amber',
  },
];

const colorMap = {
  pink: { border: 'border-pink-500', badge: 'bg-pink-500', priceText: 'text-pink-600', btn: 'bg-pink-500 hover:bg-pink-600' },
  rose: { border: 'border-rose-500', badge: 'bg-rose-500', priceText: 'text-rose-600', btn: 'bg-rose-500 hover:bg-rose-600' },
  red: { border: 'border-red-500', badge: 'bg-red-500', priceText: 'text-red-600', btn: 'bg-red-500 hover:bg-red-600' },
  purple: { border: 'border-purple-600', badge: 'bg-purple-600', priceText: 'text-purple-700', btn: 'bg-purple-600 hover:bg-purple-700' },
  amber: { border: 'border-amber-500', badge: 'bg-amber-500', priceText: 'text-amber-600', btn: 'bg-amber-500 hover:bg-amber-600' },
};

function PackageCard({ pkg }) {
  const [open, setOpen] = useState(false);
  const colors = colorMap[pkg.color];

  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition border-t-4 ${colors.border} overflow-hidden flex flex-col`}>
      <div className="p-6 flex-1 flex flex-col">
        <span className={`${colors.badge} text-white text-xs font-semibold px-3 py-1 rounded-full self-start mb-3`}>
          {pkg.tagline}
        </span>
        <h3 className="text-2xl font-bold text-purple-900 mb-1 font-display">{pkg.name}</h3>
        <p className={`text-3xl font-bold ${colors.priceText} mb-2`}>
          {pkg.price}<span className="text-base font-normal text-gray-500">/-</span>
        </p>
        <p className="text-sm text-gray-500 italic mb-4">{pkg.ideal}</p>

        <button 
          onClick={() => setOpen(!open)}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg ${colors.badge} text-white font-semibold text-sm transition hover:opacity-90 mb-4 mt-auto`}
        >
          <span>{open ? 'Hide Details' : "What's Included"}</span>
          <span className="text-lg">{open ? '−' : '+'}</span>
        </button>

        {open && (
          <div className="animate-fadeIn">
            <ul className="space-y-1.5 mb-4">
              {pkg.included.map((inc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-amber-500 mt-0.5">✓</span>
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="p-6 pt-0">
        <Link to="/contact" className={`block text-center ${colors.btn} text-white py-3 rounded-full font-semibold transition shadow-md`}>
          Book This Package
        </Link>
      </div>
    </div>
  );
}

export default function Anniversary() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1920&q=80"
          alt="Anniversary Celebration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 via-pink-900/70 to-transparent" />
        <div className="relative max-w-5xl px-6 text-center">
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-4">PACKAGES</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">Anniversary Events</h1>
          <p className="text-lg md:text-xl text-pink-100 max-w-2xl mx-auto">
            Celebrate your milestone with beautiful decor, entertainment, and flawless execution.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 text-center mb-4 font-display">
            Our Anniversary Packages
          </h2>
          <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
            Pick the perfect plan for your celebration. All packages are customizable.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-10">
            * Prices shown are starting prices. Final quote depends on venue, guest count & customization.
          </p>
        </div>
      </section>

      <section className="py-16 bg-pink-700 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready to Book?</h2>
        <p className="text-pink-100 mb-8 max-w-xl mx-auto">
          Contact us and we'll plan the perfect anniversary celebration for you.
        </p>
        <Link to="/contact" className="inline-block bg-amber-500 text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition shadow-lg">
          Get in Touch
        </Link>
      </section>
    </>
  );
}