import { Link } from 'react-router-dom';
import { useState } from 'react';

const items = [
  { 
    name: 'Birthday Celebrations', 
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80',
    isBirthday: true
  },
  { 
    name: 'Anniversary Events', 
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80',
    isAnniversary: true
  },
  { 
    name: 'Weddings & Receptions', 
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    isWedding: true
  },
  { 
    name: 'Haldi & Sangeet', 
      image: '/Party-Dost/images/haldi-sangeet.jpg',
    isHaldi: true
  },
  { 
    name: 'Engagement Ceremonies', 
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80',
    isEngagement: true
  },
  { 
    name: 'Baby Showers', 
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80',
    isBabyShower: true
  },
  { 
    name: 'Private Parties', 
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
    isPrivateParty: true
  },
  { 
    name: 'Family Celebrations', 
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80',
    details: 'Intimate family gatherings, reunions, or milestone celebrations with complete décor, food coordination, and entertainment tailored for all generations.'
  },
];

function SocialCard({ item }) {
  const [open, setOpen] = useState(false);

  if (item.isBirthday) {
    return (
      <Link to="/services/birthday" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition border-b-4 border-pink-500 flex flex-col cursor-pointer">
        <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-bold text-purple-900 text-center mb-2">{item.name}</h3>
          <p className="text-xs text-pink-600 mt-2 font-medium text-center">Click to view packages →</p>
        </div>
      </Link>
    );
  }

  if (item.isAnniversary) {
    return (
      <Link to="/services/anniversary" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition border-b-4 border-pink-500 flex flex-col cursor-pointer">
        <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-bold text-purple-900 text-center mb-2">{item.name}</h3>
          <p className="text-xs text-pink-600 mt-2 font-medium text-center">Click to view packages →</p>
        </div>
      </Link>
    );
  }

  if (item.isWedding) {
    return (
      <Link to="/services/wedding" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition border-b-4 border-pink-500 flex flex-col cursor-pointer">
        <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-bold text-purple-900 text-center mb-2">{item.name}</h3>
          <p className="text-xs text-pink-600 mt-2 font-medium text-center">Click to view packages →</p>
        </div>
      </Link>
    );
  }

  if (item.isHaldi) {
    return (
      <Link to="/services/haldi-sangeet" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition border-b-4 border-pink-500 flex flex-col cursor-pointer">
        <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-bold text-purple-900 text-center mb-2">{item.name}</h3>
          <p className="text-xs text-pink-600 mt-2 font-medium text-center">Click to view packages →</p>
        </div>
      </Link>
    );
  }

  if (item.isEngagement) {
    return (
      <Link to="/services/engagement-ceremony" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition border-b-4 border-pink-500 flex flex-col cursor-pointer">
        <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-bold text-purple-900 text-center mb-2">{item.name}</h3>
          <p className="text-xs text-pink-600 mt-2 font-medium text-center">Click to view packages →</p>
        </div>
      </Link>
    );
  }

  if (item.isBabyShower) {
    return (
      <Link to="/services/baby-shower" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition border-b-4 border-pink-500 flex flex-col cursor-pointer">
        <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-bold text-purple-900 text-center mb-2">{item.name}</h3>
          <p className="text-xs text-pink-600 mt-2 font-medium text-center">Click to view packages →</p>
        </div>
      </Link>
    );
  }

  if (item.isPrivateParty) {
    return (
      <Link to="/services/private-parties" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition border-b-4 border-pink-500 flex flex-col cursor-pointer">
        <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-bold text-purple-900 text-center mb-2">{item.name}</h3>
          <p className="text-xs text-pink-600 mt-2 font-medium text-center">Click to view packages →</p>
        </div>
      </Link>
    );
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition border-b-4 border-pink-500 flex flex-col">
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-purple-900 text-center mb-4 h-12 flex items-center justify-center">{item.name}</h3>
        
        <button 
          onClick={() => setOpen(!open)}
          className="text-sm text-pink-600 font-semibold hover:text-pink-700 mt-auto underline decoration-pink-300 underline-offset-4"
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

export default function SocialEvents() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
          alt="Wedding Celebration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 via-pink-900/60 to-transparent" />
        <div className="relative max-w-5xl px-6 text-center">
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-4">SERVICES</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">Social & Private Events</h1>
          <p className="text-lg md:text-xl text-pink-100 max-w-2xl mx-auto">
            We transform special occasions into beautifully planned celebrations with customized themes and entertainment.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 text-center mb-4 font-display">
            What We Deliver
          </h2>
          <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
            Every celebration is crafted around your story, style and budget. Click on any card to read more.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            {items.map((item) => (
              <SocialCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-700 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Let's Celebrate Your Moment</h2>
        <p className="text-pink-100 mb-8 max-w-xl mx-auto">
          From intimate gatherings to grand weddings — we make every occasion unforgettable.
        </p>
        <Link to="/contact" className="inline-block bg-amber-500 text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition shadow-lg">
          Plan My Celebration
        </Link>
      </section>
    </>
  );
}