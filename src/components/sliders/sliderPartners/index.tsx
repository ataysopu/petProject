import React from 'react';
import Carousel from 'react-slick';
import { Btn, Link, SlideBox, Title } from './styled';
import { BREAKEPOINTS } from '../../../core/config/breakpoints';

import mt from 'assets/icons/banner/partners/mt.png';
import gergert from 'assets/icons/banner/partners/gergert.png';
import eurolux from 'assets/icons/banner/partners/eurolux.png';
import planeta from 'assets/icons/banner/partners/planeta.png';
import { ReactComponent as IconPrev } from 'assets/icons/prevSlide.svg';
import { ReactComponent as IconNext } from 'assets/icons/nextSlide.svg';


const PARTNERS = [
  {
    icon: mt,
    href: '/mt'
  },
  {
    icon: gergert,
    href: 'gergert'
  },
  {
    icon: eurolux,
    href: 'eurolux'
  },
  {
    icon: planeta,
    href: 'planeta'
  },
  {
    icon: planeta,
    href: 'planeta'
  }
];

interface ISliderProps {
  children?: React.ReactNode;
}

const defaultSettings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  nextArrow: (
    <Btn>
      <IconNext />
    </Btn>
  ),
  prevArrow: (
    <Btn>
      <IconPrev />
    </Btn>
  ),
  responsive: [
    {
      breakpoint: BREAKEPOINTS.lg,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
      }
    },
    {
      breakpoint: BREAKEPOINTS.md,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        arrows: false
      }
    },
    {
      breakpoint: BREAKEPOINTS.sm,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
};

export const SliderPartners: React.FC<ISliderProps> = ({ ...props }) => {
  return (
    <>
      <Title variant="h1" variantOnMobile="h3">
        Наши партнеры
      </Title>
      <Carousel {...props} {...defaultSettings}>
        {PARTNERS.map((partner) => (
          <Link key={partner.href} href={partner.href}>
            <SlideBox>
              <img src={partner.icon} />
            </SlideBox>
          </Link>
        ))}
      </Carousel>
    </>
  );
};
