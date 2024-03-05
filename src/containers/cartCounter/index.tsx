import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../../core/types/user';
import { URLS } from '../../routes/urls';
import { Tab } from '../profile/controll';
import { GoToCartBtn } from './styled';

import { ReactComponent as EmptyCartIcon } from 'assets/icons/cart.svg';
import { ReactComponent as FullCartIcon } from 'assets/icons/cart_color.svg';
import { useSelector } from 'react-redux';
import * as wishSliceSelectors from 'store/selectors/wishlistSelectors';


export const CartCounterBtn: React.FC = () => {
  const DATA = useSelector(wishSliceSelectors.products);
  const isGuest = 'GUEST';
  const navigate = useNavigate();
  const length = DATA.length;

  const historyPath = isGuest === UserRole.GUEST ? URLS.Cart : { pathname: URLS.Profile, state: { data: Tab.CART } };
  return (
    <GoToCartBtn count={length} onClick={() => navigate(historyPath)}>
      {length ? <FullCartIcon /> : <EmptyCartIcon />}
    </GoToCartBtn>
  );
};
