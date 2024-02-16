import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Slider } from './styled';


const defaultSettings = {
  infinite: false,
  arrows: false,
  speed: 200,
  dots: true,
  dotsClass: 'slick-dot'
};

export const SliderMain = ({ children, ...props }) => (
  <Slider {...defaultSettings} {...props}>
    {children}
  </Slider>
);