const steps = ['Concept', 'Planning', 'Procurement', 'Production', 'Execution', 'Experience'];

export default function ProcessStrip() {
  return (
    <section className="py-20 bg-purple-900 text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Our Approach</h2>
        <p className="text-purple-200 mb-14 max-w-2xl mx-auto">
          An event is more than a gathering — it is an experience. Here's how we bring yours to life.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className="bg-amber-500 text-purple-900 px-5 py-3 rounded-full font-semibold shadow-lg">
                {step}
              </div>
              {i < steps.length - 1 && <span className="text-amber-400 text-2xl">→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}