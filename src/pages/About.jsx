export default function About() {
  return (
    <section className="py-20 px-6 bg-orange-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-6 text-center font-display">
          About Party Dost
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
          Party Dost is a dynamic event solutions brand dedicated to creating memorable experiences for corporate, social and private occasions.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-900 mb-4 font-display">Our Approach</h2>
          <p className="text-gray-700 leading-relaxed">
            We believe an event is more than a gathering — it is an experience. We begin by understanding the client's objective, audience, theme and budget. Our team then develops a practical event concept, coordinates vendors and production requirements, manages logistics and supervises execution to ensure every element works together smoothly.
          </p>
        </div>

        <div className="bg-purple-900 text-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 font-display text-amber-400">Our Vision</h2>
          <p className="leading-relaxed">
            To become a trusted event partner for businesses, brands and individuals by creating experiences that people remember long after the event ends.
          </p>
        </div>
      </div>
    </section>
  );
}