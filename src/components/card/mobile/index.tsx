import { CartItem } from '../../../core/types/cart';
import {
  AddToCart,
  Card,
  Cost,
  CurrentCost, Image,
  InstalmentPay,
  Name, NewCost,
  ProductInfo,
  Toast,
  ToastsContainer,
  Type,
  Variant
} from './styled';
import React from 'react';
import { formatNumber } from '../../../core/helpers';
import { Symbol } from '../../letter';

interface IMobileCard {
  data: CartItem;
}

export const MobileCard: React.FC<IMobileCard> = ({ data }) => {
  return (
    <Card>
      <Image src={data.images[0]} />
      <ProductInfo>
        <ToastsContainer>
          {data.chips.map(({ type, label }: any) => (
            <Toast key={label} type={type}>
              {label}
            </Toast>
          ))}
        </ToastsContainer>
        <Type>{data.type}</Type>
        <Name variant="subtitleB">{data.name}</Name>
        <Variant>выбор из {data.variants} вариантов</Variant>
        <div>
          <InstalmentPay>
            <strong>от {formatNumber(data?.price.credit)} </strong>
            <span>
              <Symbol symbol="c" /> / в месяц
            </span>
          </InstalmentPay>
        </div>
        <Cost>
          <CurrentCost>
            Стоимость: {formatNumber(data?.price.withoutDiscount)} <Symbol symbol="c" />
          </CurrentCost>
          <NewCost>
            {formatNumber(data?.price.withDiscount)} <Symbol symbol="c" />
          </NewCost>
        </Cost>
        <AddToCart primary center onClick={() => console.log('ckick')}>
          В Корзину
        </AddToCart>
      </ProductInfo>
    </Card>
  );
};

//TODO add handler from react-query
