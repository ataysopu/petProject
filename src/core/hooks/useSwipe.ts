import React from 'react';

interface RefObject<T> {
  readonly current: T | null | undefined;
}

interface Options {
  axis: 'vertical' | 'horizont';
  sensitivity: number;
}

/**
 * Hook that handles swipe event of the passed ref
 *
 * @param ref ref of component
 * @param handler a handler function to be called when swipe triggered
 * @param options sensitivity: the number of pixels to swipe, axis: swipe direction
 */

export const useSwipe = (ref: RefObject<HTMLElement>, handler: () => void, options: Options) => {
  const [touchStart, setTouchStart] = React.useState<number>(0);
  const [touchEnd, setTouchEnd] = React.useState<number>(0);
  const { sensitivity, axis } = options;

  React.useEffect(() => {
    ref.current?.addEventListener('touchstart', handleTouchStart);
    ref.current?.addEventListener('touchmove', handleTouchMove);
    ref.current?.addEventListener('touchend', handleTouchEnd);

    return () => {
      ref.current?.removeEventListener('touchstart', handleTouchStart);
      ref.current?.removeEventListener('touchmove', handleTouchMove);
      ref.current?.removeEventListener('touchend', handleTouchEnd);
    };
  }, [ref, handler]);

  const axios = axis === 'horizont' ? 'clientX' : 'clientY';

  function handleTouchStart(e: TouchEvent): void {
    setTouchStart(e.targetTouches[0][axios]);
  }

  function handleTouchMove(e: TouchEvent): void {
    setTouchEnd(e.targetTouches[0][axios]);
  }

  function handleTouchEnd() {
    if (axis === 'horizont' && touchStart - touchEnd > sensitivity) {
      handler();
    }
    if (axis === 'vertical' && touchEnd - touchStart > sensitivity) {
      handler();
    }
  }
};
