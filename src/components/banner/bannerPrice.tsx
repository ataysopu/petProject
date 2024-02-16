import { BannerPriceCover, Img, Poster, TextBox } from './styled';

import pc from 'assets/icons/banner/ad/pc.png';
import card from 'assets/icons/banner/ad/card.png';

export const BannerPrice: React.FC = () => {
  return (
    <BannerPriceCover>
      <Poster>
        <TextBox bg="main">
          <h6>Рассрочка</h6>
          <span>Купите сейчас – заплатите потом!</span>
        </TextBox>
        <Img src={card} />
      </Poster>
      <Poster>
        <TextBox bg="error">
          <h6>Низкая цена</h6>
          <span>Купите ноутбук Hayer по выгодной цене!</span>
        </TextBox>
        <Img src={pc} />
      </Poster>
    </BannerPriceCover>
  );
};