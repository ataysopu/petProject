/**
 * Hook that handles outside click event of the passed refs
 *
 * @param refs array of refs
 * @param handler a handler function to be called when clicked outside
 * @param outsideClick enable / disabled outsideClick
 */
import { useEffect } from 'react';

export const useOutsideClick = (refs: any, handler: any, outsideClick?: boolean) => {
  useEffect(() => {
    if (!outsideClick) return;
    const listener = (event: any) => {
      if (!refs.current || refs.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler]);
};