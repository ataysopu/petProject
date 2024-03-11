import React from 'react';
import {
  AddToCart,
  B,
  Card,
  Cost,
  CurrentCost,
  Description,
  FaveBtn,
  Favorites,
  Info,
  InstalmentPay,
  Name,
  NewCost,
  Price,
  SSliderContainer,
  Toast,
  ToastContainer,
  ToastsContainer,
  Type,
  Variant
} from './styled';

import { SliderCard } from '../../sliders';
import { CartItem } from '../../../core/types/cart';
import { Symbol } from '../../letter';

import { ReactComponent as UnFaveIcon } from 'assets/icons/unfave.svg';
import { ReactComponent as FaveIcon } from 'assets/icons/fave.svg';
import { formatNumber } from '../../../core/helpers';
import { IconCartLight } from '../../icons/cartLight';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, deleteFromFavorites } from '../../../store/reducers/favoriteSlice';
import * as favoriteSliceSelectors from 'store/selectors/favoriteSelectors';
import * as wishlistSliceSelectors from 'store/selectors/wishlistSelectors';
import { addWishlist, deleteFromWishlist } from '../../../store/reducers/wishlistSlice';
import { faveHelper } from '../../../core/helpers/faveHelpers';
import { loginHelper } from '../../../core/helpers/loginHelpers';
import * as userSelector from '../../../store/selectors/userSelectors';
import { loginText } from '../../../core';


interface IDesktopCard {
  data: CartItem;
  row?: boolean;
}

export const DesktopCard: React.FC<IDesktopCard> = ({ data, row }) => {
  const [userId, serUserId] = React.useState<any>(null);

  const [hover, setHover] = React.useState<boolean>(false);
  const goods = useSelector(favoriteSliceSelectors.goods);
  const products = useSelector(wishlistSliceSelectors.products);
  const user = useSelector(userSelector.user);

  const dispatch = useDispatch();
  const isExists = goods.find(g => g.id === data.id)?.id;
  const isWishlist = products.find(p => p.id === data.id)?.id;
  const isLogin = user.isLogin;

  React.useEffect(() => {
    loginHelper(userId, dispatch);
  }, [userId]);

  const handleClickFaveBtn = () => {
    if (!isLogin) {
      serUserId(window.prompt(loginText));
    } else {

      faveHelper(data);
      if (isExists) {
        dispatch(deleteFromFavorites(data));
      } else {
        dispatch(addFavorites(data));
      }
    }
  };


  const handleClickWishBtn = () => {
    if (isWishlist) {
      dispatch(deleteFromWishlist(data));
    } else {
      dispatch(addWishlist(data));
    }
  };

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
        <FaveBtn onClick={handleClickFaveBtn}>{isExists ? <FaveIcon /> :
          <UnFaveIcon />}</FaveBtn>
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
          <AddToCart primary center onClick={handleClickWishBtn}>
            <IconCartLight /> В корзину
          </AddToCart>
        </Price>
      </B>
    </Card>
  );
};
