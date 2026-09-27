import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    isActive ? 'text-amber-400 font-semibold' : 'hover:text-amber-400';

  return (
    <nav className="sticky top-0 z-50 bg-purple-900/95 backdrop-blur text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-amber-400 font-display">
          Party Dost
        </Link>
        <div className="hidden md:flex gap-6 items-center text-sm font-medium">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <Link to="/contact" className="bg-amber-500 text-purple-900 px-5 py-2 rounded-full font-semibold hover:bg-amber-400 transition">
            Get a Quote
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl" aria-label="Menu">
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-purple-800 px-6 pb-4 flex flex-col gap-3 text-sm">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}