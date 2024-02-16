import { TUser } from '../../../core/types/user';
import React from 'react';
import { useOutsideClick } from '../../../core/hooks/useOutsideClick';
import { URLS } from '../../../routes/urls';
import { Tab } from '../../../containers/profile/controll';
import { useNavigate } from 'react-router-dom';
import { APP_LINKS } from '../../../routes/links';
import { useDispatch } from 'react-redux';
import { changeActiveTab } from '../../../store/reducers/appSlice';

import {
  Account,
  ExpandLinksListWrapper,
  LinksList,
  ListItem,
  ListItemTypography,
  NotAccount,
  SigninBtn,
  SigninWrapper
} from './styled';

import { ReactComponent as OrdersIcon } from 'assets/icons/drower/orders.svg';
import { ReactComponent as SigninIcon } from 'assets/icons/signin.svg';
import { ReactComponent as CartIcon } from 'assets/icons/drower/cart.svg';
import { ReactComponent as WishlistIcon } from 'assets/icons/drower/wishlist.svg';
import { ReactComponent as LogoutIcon } from 'assets/icons/drower/logout.svg';
import { ReactComponent as AccountIcon } from 'assets/icons/drower/account.svg';
import { ReactComponent as PinIcon } from 'assets/icons/drower/pin.svg';

interface ISigninProps {
  data: TUser;
}

export const Signin: React.FC<ISigninProps> = React.memo(({ data }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  // @ts-ignore
  const dispatch = useDispatch();


  const DATA = [
    {
      label: 'Заказы',
      icon: <OrdersIcon />,
      href: APP_LINKS.profile_orders,
      state: Tab.ORDERS
    },
    {
      label: 'Адреса доставки',
      icon: <PinIcon />,
      href: APP_LINKS.profile_addresses,
      state: Tab.DELIVERY
    },
    {
      label: 'Избранное',
      icon: <WishlistIcon />,
      href: APP_LINKS.profile_favorites,
      state: Tab.WISHLIST
    },
    {
      label: 'Корзина',
      icon: <CartIcon />,
      href: APP_LINKS.cart,
      state: Tab.CART
    },
    {
      label: 'Выйти',
      icon: <LogoutIcon />,
      href: URLS.Main,
      handler: () => console.log('work')
    }
  ];

  React.useEffect(() => {
    // Используйте navigate вместо history
    const unlisten = () => {
      setOpen(false);
    };

    return unlisten;
  }, [navigate]);

  useOutsideClick(ref, () => setOpen(false), true);

  console.log(DATA);

  return (
    <SigninWrapper>
      {data.isAuth ? (
        <Account onClick={() => setOpen(!open)}>
          <AccountIcon />
          Профиль
        </Account>
      ) : (
        <NotAccount>
          <SigninBtn onClick={() => navigate('/auth')}>
            <SigninIcon />
            Войти
          </SigninBtn>
        </NotAccount>
      )}
      <ExpandLinksListWrapper open={open} ref={ref}>
        <Account
          onClick={() =>
            navigate(URLS.Profile, {
              state: {
                data: Tab.PERSONAL
              }
            })
          }
        >
          <AccountIcon />
          Профиль
        </Account>
        <LinksList>
          {DATA.map(({ label, state, handler, href, icon }) => (
            <ListItem
              key={label}
              onClick={
                handler
                  ? handler
                  : () => {
                    navigate(`/profile`);
                    dispatch(changeActiveTab(state));
                  }
              }
            >
              {icon} <ListItemTypography variant="bodyA">{label}</ListItemTypography>
            </ListItem>
          ))}
        </LinksList>
      </ExpandLinksListWrapper>
    </SigninWrapper>
  );
});
