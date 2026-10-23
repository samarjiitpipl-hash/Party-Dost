import { Link } from 'react-router-dom';
import { useState } from 'react';

const packages = [
  {
    name: 'The Eternal Promise',
    price: '₹15,00,000',
    tagline: 'Up to 100–150 guests',
    ideal: 'Court marriage celebrations, intimate weddings, engagement-cum-reception, and small luxury receptions.',
    included: [
      'Dedicated wedding planner and single-point coordination',
      'Wedding theme, mood board, and colour palette',
      'Venue coordination and vendor management',
      'Elegant entrance, stage, and mandap/reception backdrop décor',
      'Premium artificial and fresh floral accents',
      'Ambient lighting, fairy lights, and basic sound setup',
      'Reception stage, couple seating, and table décor',
      'Welcome desk, signage, and guest seating plan',
      'Basic DJ/music arrangement',
      'Professional photographer coordination',
      'On-ground execution team',
      'Setup, event-day management, and dismantling'
    ],
    color: 'pink',
  },
  {
    name: 'The Royal Vow',
    price: '₹35,00,000',
    tagline: 'Up to 150–250 guests',
    ideal: 'Traditional weddings, sangeet-cum-reception, and premium banquet celebrations.',
    included: [
      'Senior wedding planner and dedicated event manager',
      'Custom wedding concept, design direction, and vendor curation',
      'Venue shortlisting, coordination, and vendor negotiation support',
      'Premium entrance, walkway, mandap, stage, and reception décor',
      'Designer floral installations with faux and fresh flower combination',
      'Premium lighting design, chandeliers, and ambient décor',
      'LED screen and personalized wedding visuals',
      'Professional DJ, sound system, and basic lighting production',
      'Photo booth with props',
      'Guest hospitality desk and RSVP coordination',
      'Welcome drinks and refreshment counter décor',
      'Photography and cinematic videography coordination',
      'Makeup artist, mehendi artist, and priest/pandit coordination',
      'Dedicated on-ground execution team'
    ],
    color: 'rose',
  },
  {
    name: 'The Signature Celebration',
    price: '₹55,00,000',
    tagline: 'Up to 250–400 guests',
    ideal: 'Grand city weddings, hotel weddings, and large reception celebrations.',
    included: [
      'Dedicated wedding director and full planning team',
      'Complete wedding roadmap, budget planning, and vendor management',
      'Venue scouting, contracting support, and logistics coordination',
      'Bespoke wedding theme, custom sets, and premium stage design',
      'Luxury entrance, baraat welcome area, mandap, and reception décor',
      'Premium fresh and faux floral installations',
      'Designer furniture, lounge seating, and guest experience zones',
      'Advanced lighting, LED wall, sound engineering, and special effects',
      'Professional DJ, live band/musician coordination, and emcee',
      'Sangeet, cocktail, wedding, and reception planning support',
      'Photo booth, instant print station, and guest engagement activities',
      'Premium hospitality, welcome hampers, and guest transfer coordination',
      'Photography, cinematic films, drone coverage, and same-day edit coordination',
      'Bridal makeup, grooming, choreography, and artist coordination',
      'Dedicated security, housekeeping, and contingency planning'
    ],
    color: 'purple',
  },
  {
    name: 'The Imperial Affair',
    price: '₹65,00,000',
    tagline: 'Up to 300–500 guests',
    ideal: 'Palace weddings, destination-style weddings, and high-profile family celebrations.',
    included: [
      'Dedicated wedding director, creative head, and production team',
      'End-to-end planning across all wedding functions',
      'Venue and vendor negotiation, contracting, and logistics management',
      'Bespoke wedding identity: monogram, stationery direction, signage, and digital invites',
      'Luxury themed décor for haldi, mehendi, sangeet, wedding, and reception',
      'Premium floral design, custom fabricated sets, and immersive guest journey',
      'Designer mandap, stage, lounge, bar, and photo-op installations',
      'Advanced technical production: LED walls, intelligent lighting, sound, and special effects',
      'Celebrity artist, live band, DJ, and performer coordination',
      'Professional emcee, choreographer, and entertainment curation',
      'Premium guest hospitality, room-block support, transfers, and concierge desk',
      'Gourmet catering coordination with live counters and beverage curation',
      'Full photography, cinematic wedding film, drone, and reels team coordination',
      'Bridal styling, makeup, outfit coordination, and pre-wedding shoot support',
      'Dedicated on-site team, security, permissions, and contingency management'
    ],
    color: 'indigo',
  },
  {
    name: 'The Grand Romance',
    price: '₹75,00,000',
    tagline: 'Up to 400–600 guests',
    ideal: 'Luxury hotel weddings, destination weddings, and large-scale premium receptions.',
    included: [
      'Dedicated wedding director, creative director, and production head',
      'Complete multi-day wedding planning and guest journey design',
      'Premium venue sourcing, contracting, and vendor negotiation',
      'Bespoke wedding theme, custom fabrication, and luxury set design',
      'Grand entrance, royal baraat welcome, mandap, stage, and reception décor',
      'Premium floral installations, hanging gardens, chandeliers, and drapery',
      'Luxury furniture, VIP lounge, couple suite styling, and guest comfort zones',
      'Immersive lighting, LED walls, projection mapping, and special effects',
      'Premium DJ, live entertainment, celebrity performer, and artist management',
      'Professional emcee, choreographer, and performance production',
      'Curated food and beverage experience with live stations and premium bar design',
      'Luxury hospitality: welcome hampers, room blocks, transfers, and concierge support',
      'Full media production: photography, cinematic films, drone, reels, and live streaming',
      'Bridal and groom styling, makeup, wardrobe coordination, and pre-wedding shoot',
      'Dedicated guest relationship manager, RSVP desk, and on-ground concierge',
      'Security, permissions, insurance guidance, and complete contingency planning'
    ],
    color: 'amber',
  },
  {
    name: 'The Opulent Legacy',
    price: '₹95,00,000',
    tagline: 'Up to 500–1,000+ guests',
    ideal: 'Ultra-luxury destination weddings, palace weddings, and large-scale high-profile celebrations.',
    included: [
      'Dedicated wedding director, creative director, production head, and guest experience head',
      'Complete white-glove planning from first consultation to farewell',
      'Multi-city or destination wedding planning and on-ground execution',
      'Premium venue acquisition, contracting, and vendor negotiation',
      'Bespoke wedding identity, custom fabrication, and immersive set design',
      'Luxury décor across all functions: haldi, mehendi, sangeet, cocktail, wedding, and reception',
      'Grand entrance, royal baraat, mandap, stage, lounge, bar, and reception installations',
      'Premium fresh and faux floral design, hanging gardens, chandeliers, and drapery',
      'Immersive guest journey with interactive zones and personalized experiences',
      'Advanced technical production: LED walls, projection mapping, intelligent lighting, and special effects',
      'Celebrity artist, live band, DJ, and international performer coordination',
      'Professional emcee, choreographer, and full performance production',
      'Curated gourmet catering, live counters, premium bar, and beverage curation',
      'Luxury hospitality: welcome hampers, room blocks, transfers, concierge, and guest itineraries',
      'Full media production: photography, cinematic films, drone, reels, live streaming, and same-day edits',
      'Bridal and groom styling, makeup, wardrobe coordination, and pre-wedding shoot',
      'Dedicated guest relationship managers, RSVP desk, and on-ground concierge',
      'Security, permissions, insurance guidance, and complete contingency planning',
      'Post-wedding vendor settlement and follow-up support'
    ],
    color: 'emerald',
  },
];

const colorMap = {
  pink: { border: 'border-pink-500', badge: 'bg-pink-500', priceText: 'text-pink-600', btn: 'bg-pink-500 hover:bg-pink-600' },
  rose: { border: 'border-rose-500', badge: 'bg-rose-500', priceText: 'text-rose-600', btn: 'bg-rose-500 hover:bg-rose-600' },
  purple: { border: 'border-purple-600', badge: 'bg-purple-600', priceText: 'text-purple-700', btn: 'bg-purple-600 hover:bg-purple-700' },
  indigo: { border: 'border-indigo-600', badge: 'bg-indigo-600', priceText: 'text-indigo-700', btn: 'bg-indigo-600 hover:bg-indigo-700' },
  amber: { border: 'border-amber-500', badge: 'bg-amber-500', priceText: 'text-amber-600', btn: 'bg-amber-500 hover:bg-amber-600' },
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

export default function Wedding() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
          alt="Wedding Celebration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 via-pink-900/70 to-transparent" />
        <div className="relative max-w-5xl px-6 text-center">
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-4">PACKAGES</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">Weddings & Receptions</h1>
          <p className="text-lg md:text-xl text-pink-100 max-w-2xl mx-auto">
            From intimate ceremonies to grand royal weddings, we bring your dream vision to life.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 text-center mb-4 font-display">
            Luxury Wedding Packages
          </h2>
          <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
            Pick the perfect plan for your big day. All packages are fully customizable.
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready to Plan Your Wedding?</h2>
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