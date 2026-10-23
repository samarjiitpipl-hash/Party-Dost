import { Link } from 'react-router-dom';
import { useState } from 'react';

const items = [
  { 
    name: 'Conferences & Seminars', 
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
    details: 'End-to-end management of large-scale conferences, including venue booking, stage setup, AV production, speaker coordination, and attendee management.'
  },
  { 
    name: 'Annual Meetings', 
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=600&q=80',
    details: 'Professional setup for annual general meetings, board meetings, and company-wide gatherings with seamless presentations and corporate branding.'
  },
  { 
    name: 'Dealer & Distributor Meets', 
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
    details: 'Engaging events to align channel partners, featuring product showcases, award distribution, team-building activities, and gala dinners.'
  },
  { 
    name: 'Award Ceremonies', 
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=600&q=80',
    details: 'Premium award nights with red-carpet entries, custom trophies, stage design, entertainment acts, and professional photography/videography.'
  },
  { 
    name: 'Product Launches', 
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80',
    details: 'High-impact product reveal events with immersive thematic setups, innovative lighting, reveal mechanics, and press/media coordination.'
  },
  { 
    name: 'Corporate Parties', 
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    details: 'High-energy corporate parties with DJs, live bands, themed decor, catering, and interactive entertainment to boost team morale.'
  },
  { 
    name: 'Employee Engagement Activities', 
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    details: 'Fun-filled team-building events, sports tournaments, family days, and wellness activities designed to build stronger bonds.'
  },
  { 
    name: 'Brand Activations', 
    image: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=600&q=80',
    details: 'Experiential marketing events, mall activations, roadshows, and pop-up stalls designed to directly engage your target audience.'
  },
];

function EventCard({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition border-b-4 border-amber-500 flex flex-col">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-purple-900 text-center mb-4 h-12 flex items-center justify-center">{item.name}</h3>
        
        <button 
          onClick={() => setOpen(!open)}
          className="text-sm text-amber-600 font-semibold hover:text-amber-700 mt-auto underline decoration-amber-300 underline-offset-4"
        >
          {open ? 'Show Less' : 'Read Details'}
        </button>
        
        {open && (
          <p className="text-sm text-gray-600 mt-3 pt-3 border-t border-gray-100 animate-fadeIn">
            {item.details}
          </p>
        )}
      </div>
    </div>
  );
}

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
            End-to-end corporate event solutions — from concept to flawless execution. Click on any card to read more.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            {items.map((item) => (
              <EventCard key={item.name} item={item} />
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