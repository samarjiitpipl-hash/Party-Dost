import { Link } from 'react-router-dom';
import { useState } from 'react';

const packages = [
  {
    name: 'The Promise',
    price: '₹25,999',
    tagline: 'Up to 40–50 guests',
    ideal: 'Home engagements, intimate ring ceremonies, and small family gatherings.',
    included: [
      'Engagement-themed entrance decoration',
      'Ring ceremony backdrop with couple name',
      'Fresh and faux floral accents',
      '150 balloons with customized color theme',
      'Decorated ring ceremony table',
      'Couple seating with designer chairs',
      'Fairy lights and ambient lighting',
      'Basic sound system for music',
      'Photo corner with props',
      '1–2 event coordinators',
      'Complete setup and dismantling'
    ],
    color: 'amber',
  },
  {
    name: 'The Royal Ring',
    price: '₹55,999',
    tagline: 'Up to 60–100 guests',
    ideal: 'Banquet halls, premium home functions, and hotel engagement parties.',
    included: [
      'Grand entrance gate and welcome area décor',
      'Premium ring ceremony stage with floral backdrop',
      'Fresh and faux floral installations',
      '300+ balloons with customized theme',
      'Designer couple seating with throne chairs',
      'LED screen for photos, videos, and live visuals',
      'Professional DJ, sound system, and basic lighting',
      'Dance floor setup',
      'Photo booth with props',
      'Welcome drinks and refreshment counter décor',
      'Emcee coordination',
      '3–4 event coordinators',
      'Full setup, coordination, and dismantling'
    ],
    color: 'pink',
  },
  {
    name: 'The Grand Engagement',
    price: '₹85,000',
    tagline: 'Up to 100–150 guests',
    ideal: 'Luxury hotel engagements, destination-style celebrations, and premium engagement parties.',
    included: [
      'Luxury entrance, pathway, and welcome area décor',
      'Designer ring ceremony stage with custom backdrop',
      'Premium fresh and faux floral installations',
      '500+ balloons with customized theme',
      'Luxury furniture, lounge seating, and VIP seating area',
      'LED wall, projection, and immersive lighting design',
      'Professional DJ, sound system, and advanced lighting production',
      'Live band, dhol, or performer coordination',
      'Professional emcee and basic choreography coordination',
      'Photo booth with instant prints',
      'Premium welcome drinks, mocktail bar, and refreshment counter décor',
      'Guest hospitality desk and welcome hampers',
      'Dedicated event manager and 6–7 coordinators',
      'Complete planning, vendor coordination, and execution'
    ],
    color: 'purple',
  },
];

const colorMap = {
  amber: { border: 'border-amber-500', badge: 'bg-amber-500', priceText: 'text-amber-600', btn: 'bg-amber-500 hover:bg-amber-600' },
  pink: { border: 'border-pink-500', badge: 'bg-pink-500', priceText: 'text-pink-600', btn: 'bg-pink-500 hover:bg-pink-600' },
  purple: { border: 'border-purple-600', badge: 'bg-purple-600', priceText: 'text-purple-700', btn: 'bg-purple-600 hover:bg-purple-700' },
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

export default function Engagement() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1920&q=80"
          alt="Engagement Ceremony"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 via-pink-900/70 to-transparent" />
        <div className="relative max-w-5xl px-6 text-center">
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-4">PACKAGES</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">Engagement Ceremonies</h1>
          <p className="text-lg md:text-xl text-pink-100 max-w-2xl mx-auto">
            Beautifully styled ring ceremonies to celebrate your new beginning.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 text-center mb-4 font-display">
            Our Engagement Packages
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready to Plan Your Engagement?</h2>
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