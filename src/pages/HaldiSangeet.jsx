import { Link } from 'react-router-dom';
import { useState } from 'react';

const packages = [
  {
    name: 'Haldi Glow',
    price: '₹15,999',
    tagline: 'Ideal for 30–40 guests',
    ideal: 'Home haldi, intimate ceremonies, and small family gatherings.',
    included: [
      'Haldi-themed entrance decoration',
      'Marigold and floral backdrop',
      'Traditional haldi thali setup',
      'Decorated seating for the couple',
      'Balloon and fabric draping accents',
      'Basic sound system for music',
      'Haldi ceremony props',
      '1 event coordinator',
      'Setup and dismantling included'
    ],
    color: 'amber',
  },
  {
    name: 'Sangeet Night',
    price: '₹35,999',
    tagline: 'Ideal for 50–80 guests',
    ideal: 'Sangeet nights, haldi-cum-sangeet, and family celebrations.',
    included: [
      'Premium entrance and stage backdrop',
      'Theme-based décor with drapes, flowers, and lighting',
      'Couple seating with throne or designer chairs',
      '200 balloons with customized color theme',
      'Fairy lights and ambient lighting',
      'DJ with basic sound system',
      'Dance floor setup',
      'Photo corner with props',
      'Welcome drink counter décor',
      '2 event coordinators',
      'Complete setup, coordination, and dismantling'
    ],
    color: 'pink',
  },
  {
    name: 'Royal Haldi & Sangeet',
    price: '₹55,999',
    tagline: 'Ideal for 80–120 guests',
    ideal: 'Premium home functions, banquet celebrations, and combined haldi-sangeet events.',
    included: [
      'Grand entrance gate and welcome area décor',
      'Designer haldi stage with floral and marigold décor',
      'Premium sangeet stage with LED backdrop',
      'Fresh and faux floral installations',
      '350+ balloons with customized theme',
      'Advanced lighting, chandeliers, and hanging décor',
      'Professional DJ, sound system, and basic lighting',
      'LED screen for photos, videos, and live visuals',
      'Photo booth with props',
      'Welcome drinks and refreshment counter décor',
      'Emcee coordination',
      '3–4 event coordinators',
      'Full setup, coordination, and dismantling'
    ],
    color: 'purple',
  },
  {
    name: 'The Celebration Edit',
    price: '₹65,000',
    tagline: 'Ideal for 100–150 guests',
    ideal: 'Banquet halls, farmhouses, and premium hotel functions.',
    included: [
      'Luxury entrance, pathway, and welcome area décor',
      'Designer haldi setup with floral canopy and traditional elements',
      'Premium sangeet stage with custom backdrop',
      'Fresh flower décor, drapes, and hanging installations',
      '450+ balloons with premium theme',
      'LED wall and personalized visuals',
      'Professional DJ, sound engineering, and dynamic lighting',
      'Dance floor with special effects',
      'Photo booth with instant prints',
      'Welcome drinks, mocktail counter, and refreshment décor',
      'Professional emcee and basic choreography coordination',
      'Guest seating plan and hospitality desk',
      '5–6 event coordinators',
      'Complete event planning and on-ground execution'
    ],
    color: 'rose',
  },
  {
    name: 'The Grand Sangeet',
    price: '₹75,000',
    tagline: 'Ideal for 150–200 guests',
    ideal: 'Luxury hotel functions, destination-style celebrations, and premium sangeet nights.',
    included: [
      'Luxury entrance, baraat-style welcome, and guest journey décor',
      'Designer haldi stage with floral canopy and traditional décor',
      'Premium sangeet stage with custom fabricated backdrop',
      'Premium fresh and faux floral installations',
      '600+ balloons with customized theme',
      'Luxury furniture, lounge seating, and VIP seating area',
      'LED wall, projection, and immersive lighting design',
      'Professional DJ, sound system, and advanced lighting production',
      'Live band, dhol, or performer coordination',
      'Professional emcee and choreographer coordination',
      'Photo booth with instant prints',
      'Premium welcome drinks, mocktail bar, and refreshment counter décor',
      'Guest hospitality, RSVP desk, and welcome hampers',
      'Dedicated event manager and 7–8 coordinators',
      'Complete planning, vendor coordination, and execution'
    ],
    color: 'indigo',
  },
  {
    name: 'The Opulent Celebration',
    price: '₹95,000',
    tagline: 'Ideal for 200–300+ guests',
    ideal: 'Ultra-luxury weddings, destination-style functions, and large-scale premium celebrations.',
    included: [
      'Dedicated event director, creative head, and production team',
      'Bespoke haldi and sangeet theme with custom set design',
      'Grand entrance, welcome area, and immersive guest journey décor',
      'Designer haldi stage with floral canopy and traditional elements',
      'Premium sangeet stage with custom fabricated backdrop',
      'Luxury floral installations, chandeliers, drapes, and hanging décor',
      '800+ balloons with premium customized theme',
      'Luxury furniture, lounge seating, and VIP guest areas',
      'LED walls, projection mapping, and advanced lighting design',
      'Professional DJ, live band, dhol, and celebrity performer coordination',
      'Professional emcee, choreographer, and performance production',
      'Premium photo booth with instant prints and guest engagement zones',
      'Curated welcome drinks, mocktail bar, and refreshment counter décor',
      'Luxury hospitality with welcome hampers and guest concierge desk',
      'Full media coordination: photography, cinematic video, drone, and reels',
      'Dedicated event manager and 10+ coordinators',
      'Security, permissions, and complete contingency planning'
    ],
    color: 'emerald',
  },
];

const colorMap = {
  amber: { border: 'border-amber-500', badge: 'bg-amber-500', priceText: 'text-amber-600', btn: 'bg-amber-500 hover:bg-amber-600' },
  pink: { border: 'border-pink-500', badge: 'bg-pink-500', priceText: 'text-pink-600', btn: 'bg-pink-500 hover:bg-pink-600' },
  purple: { border: 'border-purple-600', badge: 'bg-purple-600', priceText: 'text-purple-700', btn: 'bg-purple-600 hover:bg-purple-700' },
  rose: { border: 'border-rose-500', badge: 'bg-rose-500', priceText: 'text-rose-600', btn: 'bg-rose-500 hover:bg-rose-600' },
  indigo: { border: 'border-indigo-600', badge: 'bg-indigo-600', priceText: 'text-indigo-700', btn: 'bg-indigo-600 hover:bg-indigo-700' },
  emerald: { border: 'border-emerald-600', badge: 'bg-emerald-600', priceText: 'text-emerald-700', btn: 'bg-emerald-600 hover:bg-emerald-700' },
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
        <p className={`text-3xl font-bold ${colors.priceText} mb-4`}>
          {pkg.price}<span className="text-base font-normal text-gray-500">/-</span>
        </p>
        
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
            <p className="text-xs italic text-gray-500 mt-4 border-t pt-4">
              <strong>Best suited for:</strong> {pkg.ideal}
            </p>
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

export default function HaldiSangeet() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80"
          alt="Haldi and Sangeet Celebration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/90 via-orange-900/70 to-transparent" />
        <div className="relative max-w-5xl px-6 text-center">
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-4">PACKAGES</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">Haldi & Sangeet</h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto">
            Vibrant, joyful, and beautifully styled setups to kickstart your wedding festivities.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 text-center mb-4 font-display">
            Our Haldi & Sangeet Packages
          </h2>
          <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
            Pick the perfect plan for your celebration. All packages are fully customizable.
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready to Plan Your Event?</h2>
        <p className="text-pink-100 mb-8 max-w-xl mx-auto">
          Contact us today to schedule a consultation and discuss your vision.
        </p>
        <Link to="/contact" className="inline-block bg-amber-500 text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition shadow-lg">
          Get in Touch
        </Link>
      </section>
    </>
  );
}