import ServicesPreview from '../components/ServicesPreview';

export default function Services() {
  return (
    <>
      <section className="py-20 bg-purple-900 text-white text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-display">Our Services</h1>
        <p className="max-w-2xl mx-auto text-purple-200">
          Complete event solutions under one roof — from planning to execution.
        </p>
      </section>
      <ServicesPreview />
    </>
  );
}