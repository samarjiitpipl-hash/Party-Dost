import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-amber-500 mb-2 font-display">Party Dost</h3>
          <p className="text-sm text-gray-400 mb-2">A unit of Peritus Ideas Private Limited</p>
          <p className="text-sm">Events • Experiences • Celebrations</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/corporate" className="hover:text-amber-400">Corporate Events</Link></li>
            <li><Link to="/services/social" className="hover:text-amber-400">Social & Private Events</Link></li>
            <li><Link to="/services/production" className="hover:text-amber-400">Production & Decor</Link></li>
            <li><Link to="/services/entertainment" className="hover:text-amber-400">Entertainment & Artists</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <p className="text-sm mb-1">📞 +91-9147768492</p>
          <p className="text-sm mb-1">✉️ info@peritusideas.com</p>
          <p className="text-sm mt-4 text-amber-400 font-semibold">Plan. Create. Celebrate.</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Party Dost · Peritus Ideas Private Limited
      </div>
    </footer>
  );
}