import React from 'react';
import { BREAKEPOINTS } from '../config/breakpoints';

export const useDeviceDetected = () => {
  const [isMobile, setMobile] = React.useState<boolean>();

  React.useEffect(() => {
    function handleSize() {
      if (window.innerWidth <= BREAKEPOINTS.lg) setMobile(true);
      else setMobile(false);
    }

    handleSize();
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return isMobile;
};
