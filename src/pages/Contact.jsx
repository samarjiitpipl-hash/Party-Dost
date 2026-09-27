export default function Contact() {
  return (
    <section className="py-20 px-6 bg-orange-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-purple-900 mb-4 text-center font-display">
          Let's Plan Your Event
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Tell us about your vision — we'll bring it to life.
        </p>

        <form className="bg-white rounded-2xl shadow-xl p-8 space-y-5">
          <input type="text" placeholder="Your Name" required
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input type="email" placeholder="Email" required
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input type="tel" placeholder="Phone"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <select className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>Event Type</option>
            <option>Corporate Event</option>
            <option>Wedding / Social</option>
            <option>Birthday / Private Party</option>
            <option>Product Launch</option>
            <option>Other</option>
          </select>
          <textarea rows="4" placeholder="Tell us about your event..."
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
          <button type="submit"
            className="w-full bg-purple-900 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition">
            Send Enquiry
          </button>
        </form>

        <div className="mt-10 text-center text-gray-700">
          <p className="font-semibold mb-2">Or reach us directly:</p>
          <p>📞 +91-9147768492</p>
          <p>✉️ info@peritusideas.com</p>
        </div>
      </div>
    </section>
  );
}