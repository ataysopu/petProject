import React from 'react';
import { Slider } from './styled';

const defaultSettings = {
  infinite: false,
  dots: true,
  arrows: false,
  speed: 0
};

export const SliderCard = ({ children, hover, ...props }) => {
  React.useEffect(() => {
    const allDots = Array.from(sliderRef.current.props.dotsClass).join('');
    const currentDot = document.getElementsByClassName(allDots);
    for (const dot of currentDot) {
      const htmlCollection = Array.from(dot.getElementsByTagName('button'));
      htmlCollection.forEach((i, idx) => {
        i.addEventListener('mouseenter', () => {
          sliderRef?.current?.slickGoTo(idx);
        });
      });
    }
  }, []);

  const sliderRef = React.useRef(null);

  return (
    <Slider ref={sliderRef} {...defaultSettings} hover={hover} dotsClass={Math.random().toString()} {...props}>
      {children}
    </Slider>
  );
};