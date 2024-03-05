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
import { useSelector, useDispatch } from 'react-redux';
import * as cartSliceSelectors from 'store/selectors/wishlistSelectors';
import { addWishlist, deleteFromWishlist } from '../../../store/reducers/wishlistSlice';

interface IMobileCard {
  data: CartItem;
}

export const MobileCard: React.FC<IMobileCard> = ({ data }) => {
  const products = useSelector(cartSliceSelectors.products);
  const dispatch = useDispatch();
  const isExists = products.find(p => p.id === data.id)?.id;

  const handleClickCartBtn = () => {
    if (isExists) {
      dispatch(deleteFromWishlist(data));
    } else {
      dispatch(addWishlist(data));
    }
  };

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
        <AddToCart primary center onClick={handleClickCartBtn}>
          В Корзину
        </AddToCart>
      </ProductInfo>
    </Card>
  );
};
