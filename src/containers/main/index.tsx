import { useWindowSize } from '../../core/hooks/useWindowSize';
import { Content, GoodsSection, SliderContainer, SliderSection } from './styled';
import React from 'react';

import slide from 'assets/icons/slide.png';
import { SliderMain, SliderPartners } from '../../components/sliders';
import { Category } from '../../components/category';
import { BREAKEPOINTS } from '../../core/config/breakpoints';
import { BannerPartner, BannerPrice } from '../../components/banner';
import { CompilationGoods } from '../compilationGoods';


export const MainPage = () => {
  const window = useWindowSize();

  return (
    <Content>
      <SliderSection>
        <SliderContainer>
          <SliderMain>
            <img src={slide} />
            <img src={slide} />
            <img src={slide} />
          </SliderMain>
        </SliderContainer>
        <Category />
      </SliderSection>
      {window.width > BREAKEPOINTS.lg && <BannerPartner />}
      <GoodsSection>
        <CompilationGoods />
      </GoodsSection>
      {window.width < BREAKEPOINTS.lg && <BannerPartner />}
      <BannerPrice />
      <SliderPartners />
    </Content>
  );
};
