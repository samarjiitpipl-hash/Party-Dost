import { Link } from 'react-router-dom';

const items = [
  'Conferences & Seminars',
  'Annual Meetings',
  'Dealer & Distributor Meets',
  'Award Ceremonies',
  'Product Launches',
  'Corporate Parties',
  'Employee Engagement Activities',
  'Brand Activations',
];

export default function CorporateEvents() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80"
          alt="Corporate Conference"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-900/70 to-transparent" />
        <div className="relative max-w-5xl px-6 text-center">
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-4">SERVICES</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">Corporate Events</h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto">
            We plan and execute professional corporate events designed to engage employees, clients, partners and stakeholders.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 text-center mb-4 font-display">
            What We Deliver
          </h2>
          <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
            End-to-end corporate event solutions — from concept to flawless execution.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {items.map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition border-l-4 border-amber-500">
                <div className="text-2xl mb-2">🏢</div>
                <h3 className="font-semibold text-purple-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-900 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Planning a Corporate Event?</h2>
        <p className="text-purple-200 mb-8 max-w-xl mx-auto">
          Let's craft an experience your team, clients and partners will remember.
        </p>
        <Link to="/contact" className="inline-block bg-amber-500 text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition shadow-lg">
          Get a Free Consultation
        </Link>
      </section>
    </>
  );
}