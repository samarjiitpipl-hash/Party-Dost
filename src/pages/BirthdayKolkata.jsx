import { Link } from 'react-router-dom';

const serviceAreas = ['Kolkata', 'Howrah', 'Salt Lake', 'New Town'];

const faqs = [
  { q: 'How much does a birthday party organizer cost in Kolkata?', a: 'Party Dost birthday packages in Kolkata start from ₹11,999 for intimate home celebrations, ₹17,999 for themed setups with entertainment, and ₹24,999 for a grand premium experience.' },
  { q: 'Do you provide birthday decoration at home in Kolkata?', a: 'Yes. We specialize in home birthday decorations across Kolkata, Howrah, Salt Lake and New Town. Our team handles balloon décor, themed backdrops, LED neon signage, cake tables and photography.' },
  { q: 'How far in advance should I book?', a: 'For weekends and festive seasons, we recommend booking 1–2 weeks in advance. For weekday celebrations, 3–5 days advance notice is usually sufficient.' },
  { q: 'What areas in and around Kolkata do you serve?', a: 'We serve all of Kolkata including Salt Lake, New Town, Howrah, Behala, Ballygunge, Park Street, Alipore, Rajarhat and surrounding areas.' },
];

export default function BirthdayKolkata() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1920&q=80"
          alt="Birthday Party Organizer in Kolkata"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 via-pink-900/70 to-transparent" />
        <div className="relative max-w-5xl px-6 text-center">
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-4">KOLKATA</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">
            Birthday Party Organizer in Kolkata
          </h1>
          <p className="text-lg md:text-xl text-pink-100 max-w-3xl mx-auto">
            From intimate home celebrations to grand themed birthday parties — Party Dost brings creative décor, entertainment and flawless coordination across Kolkata, Howrah, Salt Lake and New Town.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-amber-500 hover:bg-amber-400 text-purple-900 px-8 py-3 rounded-full font-semibold transition shadow-lg">
              Get a Free Quote
            </Link>
            <Link to="/services/birthday" className="border-2 border-white/60 hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition">
              View Packages
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 text-center mb-4 font-display">
            Why Choose Party Dost in Kolkata
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Kolkata's trusted partner for beautifully planned birthday celebrations.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎨', title: 'Creative Décor', desc: 'Custom themes, balloon art, LED neon signage and photo-ready backdrops.' },
              { icon: '💰', title: 'Budget-Friendly', desc: 'Transparent pricing starting at ₹11,999. No hidden costs.' },
              { icon: '🎉', title: 'Entertainment', desc: 'Magic shows, games, mascot appearances, clowns and DJs.' },
              { icon: '📸', title: 'Photography', desc: 'Capture every candid moment with professional photography.' },
              { icon: '⚡', title: 'Coordination', desc: 'Dedicated team manages setup, timing and execution.' },
              { icon: '📍', title: 'City-Wide Coverage', desc: 'Serving Kolkata, Howrah, Salt Lake and New Town.' },
            ].map((f) => (
              <div key={f.title} className="bg-orange-50 rounded-xl p-6 border-l-4 border-pink-500">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-purple-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 text-center mb-4 font-display">
            Birthday Packages in Kolkata
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            All-inclusive packages designed for Kolkata homes, banquet halls and venues.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Basic Package', price: '₹11,999', tag: 'Intimate', color: 'border-amber-500', btn: 'bg-amber-500 hover:bg-amber-600' },
              { name: 'Standard Package', price: '₹17,999', tag: 'Refined', color: 'border-pink-500', btn: 'bg-pink-500 hover:bg-pink-600' },
              { name: 'Premium Package', price: '₹24,999', tag: 'Grand', color: 'border-purple-600', btn: 'bg-purple-600 hover:bg-purple-700' },
            ].map((p) => (
              <div key={p.name} className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition border-t-4 ${p.color}`}>
                <span className="text-xs font-semibold text-pink-600 uppercase tracking-wider">{p.tag}</span>
                <h3 className="text-2xl font-bold text-purple-900 mt-2 mb-1 font-display">{p.name}</h3>
                <p className="text-3xl font-bold text-amber-600 mb-4">
                  {p.price}<span className="text-base font-normal text-gray-500">/-</span>
                </p>
                <Link to="/services/birthday" className={`block text-center ${p.btn} text-white py-2.5 rounded-full font-semibold transition`}>
                  View Details
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link to="/services/birthday" className="text-pink-600 font-semibold hover:underline">
              → See full package inclusions
            </Link>
          </p>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 font-display">
            Areas We Serve
          </h2>
          <p className="text-gray-600 mb-8">
            Party Dost provides birthday party organization across:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span key={area} className="bg-pink-100 text-pink-700 font-semibold px-5 py-2 rounded-full">
                📍 {area}
              </span>
            ))}
            <span className="bg-pink-100 text-pink-700 font-semibold px-5 py-2 rounded-full">
              📍 Behala · Ballygunge · Park Street · Alipore · Rajarhat
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 text-center mb-12 font-display">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl shadow-md p-5 group">
                <summary className="font-semibold text-purple-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-pink-500 group-open:rotate-45 transition">+</span>
                </summary>
                <p className="text-gray-700 mt-3 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-pink-700 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
          Ready to Plan a Birthday in Kolkata?
        </h2>
        <p className="text-pink-100 mb-8 max-w-xl mx-auto">
          Let's create a celebration your guests will remember.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="inline-block bg-amber-500 text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition shadow-lg">
            Book Now
          </Link>
          <a href="tel:+919147768492" className="inline-block border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
            📞 Call +91-9147768492
          </a>
        </div>
      </section>
    </>
  );
}