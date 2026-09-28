import { Link } from 'react-router-dom';

const services = [
  'Wedding Planning & Coordination',
  'Reception Decor & Styling',
  'Haldi & Sangeet Setup',
  'Engagement Ceremonies',
  'Thematic Wedding Décor',
  'Floral & Balloon Decoration',
  'Stage & Mandap Design',
  'Lighting & Photo Zones',
];

const faqs = [
  { q: 'What does a wedding decorator in Kolkata cost?', a: 'Wedding décor costs in Kolkata vary based on venue size, theme and floral requirements. Basic setups start from ₹30,000, mid-range themes from ₹75,000, and premium wedding setups from ₹1,50,000+. Contact us for a customized quote.' },
  { q: 'Do you handle complete wedding planning or just décor?', a: 'We handle both. You can book us for décor and production only, or for complete wedding planning including vendor coordination, entertainment, photography and on-ground management.' },
  { q: 'Which venues in Kolkata do you work with?', a: 'We work with venues across Kolkata — banquet halls, hotels, farmhouses and private residences in Salt Lake, New Town, Rajarhat, Park Street, Alipore, Ballygunge, and Howrah.' },
  { q: 'How far in advance should weddings be booked?', a: 'For peak wedding season (November–February), we recommend booking 3–6 months in advance. For off-season dates, 1–2 months is usually sufficient.' },
];

export default function WeddingKolkata() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
          alt="Wedding Decorators in Kolkata"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 via-pink-900/70 to-transparent" />
        <div className="relative max-w-5xl px-6 text-center">
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-4">KOLKATA</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">
            Wedding Decorators in Kolkata
          </h1>
          <p className="text-lg md:text-xl text-pink-100 max-w-3xl mx-auto">
            Beautifully designed weddings, receptions, haldi and sangeet setups across Kolkata, Howrah, Salt Lake and New Town. Custom themes, floral décor, stage design and complete wedding planning.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-amber-500 hover:bg-amber-400 text-purple-900 px-8 py-3 rounded-full font-semibold transition shadow-lg">
              Get a Free Quote
            </Link>
            <Link to="/services/social" className="border-2 border-white/60 hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition">
              View Social Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 text-center mb-4 font-display">
            Wedding Services We Offer in Kolkata
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From intimate ceremonies to grand receptions — we bring your vision to life.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((item) => (
              <div key={item} className="bg-orange-50 rounded-xl p-6 shadow-md hover:shadow-xl transition border-l-4 border-pink-500">
                <div className="text-2xl mb-2">💐</div>
                <h3 className="font-semibold text-purple-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 text-center mb-4 font-display">
            Why Kolkata Couples Choose Party Dost
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: '💐', title: 'Custom Themes', desc: 'Every wedding is designed around your story, culture and style — never a template.' },
              { icon: '🎨', title: 'Complete Décor', desc: 'Floral arrangements, mandap design, stage backdrops, entrance gates, lighting and photo zones.' },
              { icon: '🎉', title: 'Entertainment', desc: 'DJs, live music, dance performances, anchors and entertainment to keep your guests engaged.' },
              { icon: '📸', title: 'Photo-Ready Setups', desc: 'Every corner designed to be picture-perfect for your wedding album.' },
              { icon: '⚙️', title: 'On-Ground Coordination', desc: 'Dedicated team managing vendors, timelines and logistics so you can enjoy your day.' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'Clear quotations — no hidden charges. We work within your budget.' },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 border-l-4 border-pink-500">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-purple-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 font-display">
            Areas We Serve in Kolkata
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['Kolkata', 'Howrah', 'Salt Lake', 'New Town'].map((area) => (
              <span key={area} className="bg-pink-100 text-pink-700 font-semibold px-5 py-2 rounded-full">
                📍 {area}
              </span>
            ))}
            <span className="bg-pink-100 text-pink-700 font-semibold px-5 py-2 rounded-full">
              📍 Rajarhat · Behala · Park Street · Alipore
            </span>
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-pink-700 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
          Planning a Wedding in Kolkata?
        </h2>
        <p className="text-pink-100 mb-8 max-w-xl mx-auto">
          Let's create your dream celebration — beautifully planned, flawlessly executed.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="inline-block bg-amber-500 text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition shadow-lg">
            Book a Consultation
          </Link>
          <a href="tel:+919147768492" className="inline-block border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
            📞 Call +91-9147768492
          </a>
        </div>
      </section>
    </>
  );
}