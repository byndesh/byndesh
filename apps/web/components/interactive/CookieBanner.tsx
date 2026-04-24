'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-bynd-ink border-t border-white/10 p-6">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-white/80 text-sm">
          We use cookies to improve your experience. Essential cookies are required; analytics and marketing cookies are optional.{' '}
          <a href="/cookie-policy" className="text-bynd-flame hover:underline">Learn more →</a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="font-ui text-sm text-white/60 border border-white/20 px-5 py-2 rounded-full hover:border-white/40 transition"
          >
            DECLINE
          </button>
          <button
            onClick={accept}
            className="font-ui text-sm bg-bynd-flame text-white px-5 py-2 rounded-full hover:bg-bynd-flame/90 transition"
          >
            ACCEPT ALL
          </button>
        </div>
      </div>
    </div>
  );
}
