import { useEffect, useState } from 'react';

interface Scroll {
  x: number;
  y: number;
}

export const useWindowScroll = (): Scroll => {
  const [windowScroll, setWindowScroll] = useState<Scroll>({
    x: window.scrollX,
    y: window.scrollY
  });
  useEffect(() => {
    function handleScroll() {
      setWindowScroll({
        x: window.scrollX,
        y: window.scrollY
      });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return windowScroll;
};
