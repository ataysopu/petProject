import React from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_LINKS } from '../../routes/links';
import { useSelector } from 'react-redux';
import * as favoriteSliceSelectors from 'store/selectors/favoriteSelectors';


import { GoToWishlistBtn } from './styled';

import { ReactComponent as FaveIcon } from 'assets/icons/fave.svg';
import { ReactComponent as UnFaveIcon } from 'assets/icons/unfave.svg';

export const WishlistCounterBtn: React.FC = () => {
  const favedGoods = useSelector(favoriteSliceSelectors.goods);
  const length = favedGoods.length;
  const navigate = useNavigate();

  return (
    <GoToWishlistBtn count={length} onClick={() => navigate(APP_LINKS.Wishlist)}>
      {length ? <FaveIcon /> : <UnFaveIcon />}
    </GoToWishlistBtn>
  );
};
