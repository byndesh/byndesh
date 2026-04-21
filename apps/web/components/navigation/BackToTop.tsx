/**
 * @component BackToTop
 * @description Diamond-shaped orange button that appears after 400px scroll.
 *   Smooth scrolls to the top of the page on click.
 * @example
 * <BackToTop />  — renders itself fixed to bottom-right of viewport
 */
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 cursor-pointer items-center justify-center bg-bynd-orange text-white shadow-btn transition-all duration-200 hover:bg-bynd-black hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bynd-orange focus-visible:ring-offset-2"
          style={{ transform: 'rotate(45deg)' }}
        >
          <ChevronUp className="h-5 w-5" style={{ transform: 'rotate(-45deg)' }} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
