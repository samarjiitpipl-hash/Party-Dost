import { Link } from 'react-router-dom';
import { useState } from 'react';

const packages = [
  {
    name: 'Basic Package',
    price: '₹11,999',
    tagline: 'Intimate Celebrations',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    description: 'A beautiful and cheerful party setup combining tasteful décor, a coordinated theme look, and core party arrangements.',
    included: [
      'Elegant balloon decoration setup',
      '"Happy Birthday" Neon LED light',
      'Entry gate with balloon decoration',
      'Welcome tripod standee with balloons / floral',
      'Photography to capture candid moments',
      'Themed backdrop for cake cutting & photos',
      'Basic table setup with designer cake (1.5 lbs)',
      'Simple party essentials',
    ],
    ideal: 'Ideal for home celebrations, small venue parties, and clients who prefer simple yet elegant décor styling.',
    color: 'amber',
  },
  {
    name: 'Standard Package',
    price: '₹17,999',
    tagline: 'Refined & Vibrant',
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=800&q=80',
    description: 'A fuller styling experience with premium decorative features and charming finishing touches for a polished celebration.',
    included: [
      'Enhanced décor arrangement',
      'Premium backdrop design',
      'Curated theme elements',
      'Designer / Thematic cake (2 lbs)',
      'Welcome tripod standee',
      'Entry gate elegant balloon decoration',
      'Party poppers (2 pcs)',
    ],
    fun: [
      'Games: Hit the Wicket, Break the Pyramid, Shoot the Balloons',
      'Magic Show (30 mins)',
      'Additional styling touches',
    ],
    ideal: 'Best suited for clients who want a stylish, vibrant, and more detailed celebration setup with added charm and guest-friendly touches.',
    color: 'pink',
  },
  {
    name: 'Premium Package',
    price: '₹24,999',
    tagline: 'Grand & Unforgettable',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
    description: 'A complete premium décor and entertainment experience with luxury styling, personalized elements, and engaging performances.',
    included: [
      'Premium theme-based decoration setup',
      'Luxury backdrop for cake cutting & photos',
      'Balloon décor for entrance, ceiling & focal areas',
      'Cake table styling with elegant accents',
      'Personalized name board / custom signage',
      'Photography-ready setups',
      'Dedicated on-site coordination',
    ],
    entertainment: [
      'Magic Show',
      'Juggling Show',
      'Puppet Show',
      'Clown Character appearance',
      'Mickey Mouse character appearance',
      'Charlie Chaplin character appearance',
      'Mascot services',
    ],
    games: [
      'Interactive games (Hit the Wicket, Break the Pyramid, Shoot the Balloons)',
      'Grand entry options: Car Entry, Fire Guns, Smoke Effects, Fireworks Entry',
    ],
    ideal: 'Entertainment acts, mascot options, game activities, and grand entry elements can be customized based on age group, venue space, safety permissions, and event preferences.',
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
    <div
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition border-t-4 ${colors.border} overflow-hidden flex flex-col`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`${colors.badge} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md`}>
            {pkg.tagline}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-purple-900 mb-1 font-display">{pkg.name}</h3>
        <p className={`text-3xl font-bold ${colors.priceText} mb-4`}>
          {pkg.price}<span className="text-base font-normal text-gray-500">/-</span>
        </p>
        <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>

        {/* Toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg ${colors.badge} text-white font-semibold text-sm transition hover:opacity-90 mb-4`}
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

            {pkg.fun && (
              <>
                <h4 className="font-semibold text-purple-900 mb-2 text-sm mt-4">Fun & Entertainment:</h4>
                <ul className="space-y-1.5 mb-4">
                  {pkg.fun.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-amber-500 mt-0.5">🎉</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {pkg.entertainment && (
              <>
                <h4 className="font-semibold text-purple-900 mb-2 text-sm mt-4">Entertainment (any two):</h4>
                <ul className="space-y-1.5 mb-4">
                  {pkg.entertainment.map((e, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-amber-500 mt-0.5">⭐</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {pkg.games && (
              <>
                <h4 className="font-semibold text-purple-900 mb-2 text-sm mt-4">Games & Grand Entry:</h4>
                <ul className="space-y-1.5 mb-4">
                  {pkg.games.map((g, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-amber-500 mt-0.5">🎯</span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <p className="text-xs italic text-gray-500 mt-4 border-t pt-4">{pkg.ideal}</p>
          </div>
        )}
      </div>

      <div className="p-6 pt-0">
        <Link
          to="/contact"
          className={`block text-center ${colors.btn} text-white py-3 rounded-full font-semibold transition shadow-md`}
        >
          Book This Package
        </Link>
      </div>
    </div>
  );
}

export default function Birthday() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1920&q=80"
          alt="Birthday Celebration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 via-pink-900/70 to-transparent" />
        <div className="relative max-w-5xl px-6 text-center">
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-4">PACKAGES</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">Birthday Celebrations</h1>
          <p className="text-lg md:text-xl text-pink-100 max-w-2xl mx-auto">
            Choose the perfect package for your special day — from intimate home celebrations to grand themed parties.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 text-center mb-4 font-display">
            Our Birthday Packages
          </h2>
          <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
            Pick the perfect plan for your celebration. Click "What's Included" to see full details.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
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
          Contact us and we'll plan the perfect birthday celebration for you.
        </p>
        <Link to="/contact" className="inline-block bg-amber-500 text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition shadow-lg">
          Get in Touch
        </Link>
      </section>
    </>
  );
}