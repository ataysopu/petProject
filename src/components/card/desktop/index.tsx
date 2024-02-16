import React from 'react';
import {
  AddToCart,
  B,
  Card, Cost, CurrentCost, Description,
  FaveBtn,
  Favorites,
  Info, InstalmentPay, Name, NewCost, Price,
  SSliderContainer,
  Toast,
  ToastContainer,
  ToastsContainer,
  Type, Variant
} from './styled';

import { SliderCard } from '../../sliders';
import { CartItem } from '../../../core/types/cart';
import { Symbol } from '../../letter';

import { ReactComponent as UnFaveIcon } from 'assets/icons/unfave.svg';
import { ReactComponent as FaveIcon } from 'assets/icons/fave.svg';
import { formatNumber } from '../../../core/helpers';
import { IconCartLight } from '../../icons/cartLight';

interface IDesktopCard {
  data: CartItem;
  row?: boolean;
}

export const DesktopCard: React.FC<IDesktopCard> = ({ data, row }) => {
  const [hover, setHover] = React.useState<boolean>(false);

  return (
    <Card
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      onTouchMove={() => setHover(true)}
      onTouchEnd={() => setHover(true)}
      row={row}
    >
      <Favorites row={row}>
        {/* <CompareIcon /> */}
        <FaveBtn onClick={() => console.log('click')}>{data.fave ? <FaveIcon /> : <UnFaveIcon />}</FaveBtn>
      </Favorites>
      <ToastsContainer>
        {data.chips.map(({ type, label }: any) => (
          <ToastContainer key={label}>
            <Toast type={type}>{label}</Toast>
          </ToastContainer>
        ))}
      </ToastsContainer>
      <SSliderContainer row={row}>
        <SliderCard hover={hover}>
          {!!data.images.length && data.images.map((image) => <img src={image} key={image} alt="slide" />)}
        </SliderCard>
      </SSliderContainer>
      <B>
        <Info row={row}>
          <Type variant="subtitleB">{data.type}</Type>
          <Name variant="h4">{data.name}</Name>
          <Variant>выбор из {data.variants} вариантов</Variant>
          <Description row={row}>{data.description}</Description>
        </Info>
        <Price row={row}>
          <div>
            <InstalmentPay>
              <strong>от {formatNumber(data?.price.credit)} </strong>
              <span>
                <Symbol symbol="c" /> / в месяц
              </span>
            </InstalmentPay>
          </div>
          <Cost row={row}>
            <CurrentCost variant="subtitleB">
              Стоимость: {formatNumber(data?.price.withoutDiscount)} <Symbol symbol="c" />
            </CurrentCost>
            <NewCost variant="bodyB">
              {formatNumber(data?.price.withDiscount)} <Symbol symbol="c" />
            </NewCost>
          </Cost>
          <AddToCart primary center onClick={() => console.log('click')}>
            <IconCartLight /> В корзину
          </AddToCart>
        </Price>
      </B>
    </Card>
  );
};
