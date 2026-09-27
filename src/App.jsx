import ScrollToTop from './components/ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import CorporateEvents from './pages/CorporateEvents';
import SocialEvents from './pages/SocialEvents';
import Birthday from './pages/Birthday';
import Production from './pages/Production';
import Entertainment from './pages/Entertainment';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/corporate" element={<CorporateEvents />} />
          <Route path="/services/social" element={<SocialEvents />} />
          <Route path="/services/birthday" element={<Birthday />} />
          <Route path="/services/production" element={<Production />} />
          <Route path="/services/entertainment" element={<Entertainment />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}