import React from 'react';
import { DATA } from '../mocks/catalogItems';
import { useNavigate } from 'react-router-dom';
import { APP_LINKS } from '../../routes/links';

import { GoToWishlistBtn } from './styled';

import { ReactComponent as FaveIcon } from 'assets/icons/fave.svg';
import { ReactComponent as UnFaveIcon } from 'assets/icons/unfave.svg';

export const WishlistCounterBtn: React.FC = () => {
  const data = DATA.filter((i) => i.fave); //TODO get data from react-query
  const navigate = useNavigate();
  const length = data.length;

  return (
    <GoToWishlistBtn count={length} onClick={() => navigate(APP_LINKS.Wishlist)}>
      {length ? <FaveIcon /> : <UnFaveIcon />}
    </GoToWishlistBtn>
  );
};
