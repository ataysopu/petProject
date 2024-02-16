import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../../core/types/user';
import { URLS } from '../../routes/urls';
import { Tab } from '../profile/controll';
import { GoToCartBtn } from './styled';

import { ReactComponent as EmptyCartIcon } from 'assets/icons/cart.svg';
import { ReactComponent as FullCartIcon } from 'assets/icons/cart_color.svg';


export const CartCounterBtn: React.FC = () => {
  const DATA: any = []; //TODO get data from react-query
  const isGuest = 'GUEST'; //TODO get data from react-query

  const navigate = useNavigate();
  const length = React.useMemo(() => DATA.length, [DATA]);

  const historyPath = isGuest === UserRole.GUEST ? URLS.Cart : { pathname: URLS.Profile, state: { data: Tab.CART } };
  return (
    <GoToCartBtn count={length} onClick={() => navigate(historyPath)}>
      {length ? <FullCartIcon /> : <EmptyCartIcon />}
    </GoToCartBtn>
  );
};
