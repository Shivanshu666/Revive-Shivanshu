import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    let attempts = 0;
    const maxAttempts = 10;

    const tryScroll = () => {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 100); // wait and retry
      }
    };

    tryScroll();
  }, [location]);

  return null;
};

export default ScrollToHash;
