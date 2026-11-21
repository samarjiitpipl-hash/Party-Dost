import { useEffect } from 'react';

export default function WhatsAppButton() {
  useEffect(() => {
    // This script handles the popup after 3 seconds
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@magicb64/chatwoot@1.0.0/dist/chatwoot.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      href="https://wa.me/919147768492?text=Hi%20I%20am%20looking%20for%20an%20event%20organizer."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50 flex items-center justify-center text-2xl"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      💬
    </a>
  );
}