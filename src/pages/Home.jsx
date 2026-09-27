import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import ProcessStrip from '../components/ProcessStrip';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProcessStrip />
      <section className="py-20 bg-amber-500 text-purple-900 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
          Let's Create Something Memorable
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Whether it's a corporate conference, product launch, or a milestone celebration —
          Party Dost is ready to turn your idea into an experience.
        </p>
        <Link to="/contact" className="bg-purple-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition shadow-lg">
          Start Planning
        </Link>
      </section>
    </>
  );
}