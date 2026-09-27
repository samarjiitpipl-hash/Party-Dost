import { Link } from 'react-router-dom';

const items = [
  'Stage & Backdrop Design',
  'Thematic Decor',
  'Balloon & Floral Decoration',
  'Stall & Exhibition Fabrication',
  'LED Screens & AV Setup',
  'Sound & Lighting',
  'Branding & Printing',
  'Entrance Gates & Photo Zones',
  'Furniture & Event Infrastructure',
];

export default function Production() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80"
          alt="Event Production"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-indigo-900/60 to-transparent" />
        <div className="relative max-w-5xl px-6 text-center">
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-4">SERVICES</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">Event Production & Decor</h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
            Our production solutions cover the visual and technical elements required to create an impactful event environment.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 text-center mb-4 font-display">
            What We Deliver
          </h2>
          <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
            Complete production support — from design and fabrication to on-site installation.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition border-l-4 border-indigo-500">
                <div className="text-2xl mb-2">🎬</div>
                <h3 className="font-semibold text-purple-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-900 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready to Build Your Event Space?</h2>
        <p className="text-indigo-200 mb-8 max-w-xl mx-auto">
          From stage design to full-scale infrastructure — we handle the visual and technical.
        </p>
        <Link to="/contact" className="inline-block bg-amber-500 text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition shadow-lg">
          Discuss Production
        </Link>
      </section>
    </>
  );
}