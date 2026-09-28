import { Link } from 'react-router-dom';

const services = [
  'Conferences & Seminars',
  'Annual Meetings',
  'Dealer & Distributor Meets',
  'Award Ceremonies',
  'Product Launches',
  'Corporate Parties',
  'Employee Engagement Activities',
  'Brand Activations',
];

const faqs = [
  { q: 'What corporate events does Party Dost organize in Kolkata?', a: 'We plan and execute conferences, seminars, annual meetings, product launches, award ceremonies, dealer meets, corporate parties and employee engagement activities across Kolkata and surrounding areas.' },
  { q: 'How much does corporate event management cost in Kolkata?', a: 'Corporate event costs vary based on guest count, venue, production requirements and entertainment. Contact us for a customized quote — most mid-size Kolkata corporate events range from ₹50,000 to ₹5,00,000+.' },
  { q: 'Do you handle end-to-end corporate event production?', a: 'Yes. We handle concept development, venue coordination, stage & backdrop design, LED screens, AV setup, sound, lighting, branding, printing and complete on-ground execution.' },
  { q: 'Which areas of Kolkata do you serve for corporate events?', a: 'We serve all of Kolkata including Salt Lake, New Town, Rajarhat, Park Street, Alipore, Ballygunge, Behala, and Howrah.' },
];

export default function CorporateKolkata() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80"
          alt="Corporate Event Management in Kolkata"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-900/70 to-transparent" />
        <div className="relative max-w-5xl px-6 text-center">
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-4">KOLKATA</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">
            Corporate Event Management in Kolkata
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto">
            Professional corporate event planning and production across Kolkata, Howrah, Salt Lake and New Town. From concept to flawless execution — conferences, launches, award nights and brand activations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-amber-500 hover:bg-amber-400 text-purple-900 px-8 py-3 rounded-full font-semibold transition shadow-lg">
              Get a Free Consultation
            </Link>
            <Link to="/services/corporate" className="border-2 border-white/60 hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 text-center mb-4 font-display">
            Kolkata's Trusted Corporate Event Partner
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            End-to-end corporate event solutions designed to engage employees, clients and stakeholders.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((item) => (
              <div key={item} className="bg-orange-50 rounded-xl p-6 shadow-md hover:shadow-xl transition border-l-4 border-amber-500">
                <div className="text-2xl mb-2">🏢</div>
                <h3 className="font-semibold text-purple-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 text-center mb-4 font-display">
            Why Kolkata Businesses Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: '🎯', title: 'Objective-Driven', desc: 'We build each event around your business goal — engagement, visibility or client relationships.' },
              { icon: '🎬', title: 'Full Production', desc: 'Stage, backdrop, LED screens, AV, sound, lighting, branding & printing — all under one roof.' },
              { icon: '💰', title: 'Budget-Conscious', desc: 'Premium quality while keeping costs practical for Kolkata corporate budgets.' },
              { icon: '⚙️', title: 'On-Ground Coordination', desc: 'Detailed event-day management from setup to wrap-up.' },
              { icon: '🎤', title: 'Entertainment', desc: 'Anchors, DJs, live bands, comedians and celebrity management.' },
              { icon: '📍', title: 'City-Wide Coverage', desc: 'Serving Salt Lake, New Town, Rajarhat, Park Street, Alipore, Ballygunge, Behala and Howrah.' },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 border-l-4 border-amber-500">
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
              <span key={area} className="bg-purple-100 text-purple-700 font-semibold px-5 py-2 rounded-full">
                📍 {area}
              </span>
            ))}
            <span className="bg-purple-100 text-purple-700 font-semibold px-5 py-2 rounded-full">
              📍 Park Street · Alipore · Ballygunge · Rajarhat
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
                  <span className="text-amber-500 group-open:rotate-45 transition">+</span>
                </summary>
                <p className="text-gray-700 mt-3 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-900 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
          Planning a Corporate Event in Kolkata?
        </h2>
        <p className="text-purple-200 mb-8 max-w-xl mx-auto">
          Let's craft an experience your team, clients and partners will remember.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="inline-block bg-amber-500 text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition shadow-lg">
            Request a Proposal
          </Link>
          <a href="tel:+919147768492" className="inline-block border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
            📞 Call +91-9147768492
          </a>
        </div>
      </section>
    </>
  );
}