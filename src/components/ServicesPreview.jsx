import { Link } from 'react-router-dom';

const services = [
  { title: 'Corporate Events', desc: 'Conferences, product launches, award ceremonies, brand activations & more.', icon: '🏢', path: '/services/corporate' },
  { title: 'Social & Private Events', desc: 'Weddings, birthdays, anniversaries, baby showers & family celebrations.', icon: '🎊', path: '/services/social' },
  { title: 'Production & Decor', desc: 'Stage design, thematic decor, LED walls, sound, lighting & branding.', icon: '🎬', path: '/services/production' },
  { title: 'Entertainment & Artists', desc: 'Live bands, DJs, comedians, anchors, dancers & celebrity management.', icon: '🎤', path: '/services/entertainment' },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 px-6 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-900 mb-4 font-display">
          What We Do
        </h2>
        <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
          Complete event solutions tailored to every client's requirements, vision and budget.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link key={s.title} to={s.path} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition border-t-4 border-amber-500">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}