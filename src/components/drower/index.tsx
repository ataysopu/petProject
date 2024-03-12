import React from 'react';
import { TUser } from '../../core/types/user';
import { useOutsideClick } from '../../core/hooks/useOutsideClick';
import {
  Account,
  DrowerBody,
  DrowerContainer,
  DrowerFooter,
  DrowerHeader,
  DrowerWrapper, LangSwitch,
  LinksList,
  ListItem, NotAccount, SigninBtn, Title
} from './styled';
import { useSwipe } from '../../core/hooks/useSwipe';
import { URLS } from '../../routes/urls';

import { ReactComponent as OrdersIcon } from 'assets/icons/drower/orders.svg';
import { ReactComponent as SigninIcon } from 'assets/icons/signin.svg';
import { ReactComponent as CatalogIcon } from 'assets/icons/drower/catalog.svg';
import { ReactComponent as CartIcon } from 'assets/icons/drower/cart.svg';
import { ReactComponent as WishlistIcon } from 'assets/icons/drower/wishlist.svg';
import { ReactComponent as GeoIcon } from 'assets/icons/drower/geo.svg';
import { ReactComponent as ContactsIcon } from 'assets/icons/drower/contacts.svg';
import { ReactComponent as LogoutIcon } from 'assets/icons/drower/logout.svg';
import { ReactComponent as AccountIcon } from 'assets/icons/drower/account.svg';
import { ReactComponent as PinIcon } from 'assets/icons/drower/pin.svg';
import { Tab } from '../../containers/profile/controll';
import { useLocation, useNavigate } from 'react-router-dom';

interface IDrowerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setOpenLangModal: (open: boolean) => void;
  data: TUser;
}

export const Drower: React.FC<IDrowerProps> = React.memo(({ open, setOpen, setOpenLangModal, data }) => {
  const [openDrower, setOpenDrower] = React.useState<boolean>(open);

  const ref = React.useRef<HTMLDivElement>(null);
  const location = useLocation(); // Use useLocation from react-router-dom
  const navigate = useNavigate(); // Use useNavigate from react-router-dom

  React.useEffect(() => {
    setOpenDrower(open);
  }, [open]);

  React.useEffect(() => {
    setOpenDrower(false); // Set openDrower to false when location changes
  }, [location.pathname]);

  // prettier-ignore
  useOutsideClick(ref, () => {
    setOpenDrower(false);
    setOpen(false);
  }, true);

  useSwipe(ref, () => setOpen(false), {
    sensitivity: 160,
    axis: 'horizont'
  });

  const Links = () => {
    if (data.isAuth) {
      return DATA;
    } else {
      return DATA.filter((item) => !item.requiredAuth);
    }
  };

  return (
    <DrowerWrapper open={openDrower}>
      <DrowerContainer open={openDrower} ref={ref}>
        <DrowerHeader>
          {data.isAuth ? (
            <Account
              onClick={() =>
                navigate(URLS.Profile, {
                  state: {
                    data: Tab.PERSONAL
                  }
                })
              }
            >
              Профиль
            </Account>
          ) : (
            <NotAccount>
              <Title>Войдите в свой аккаунт</Title>
              <SigninBtn onClick={() => navigate(URLS.Auth)}>
                <SigninIcon />
                Войти
              </SigninBtn>
            </NotAccount>
          )}
        </DrowerHeader>
        <DrowerBody>
          <LinksList>
            {Links().map(({ label, handler, href, icon, state }) => {
              return (
                <ListItem
                  key={label}
                  onClick={
                    handler
                      ? handler
                      : () =>
                        navigate(href, {
                          state: { data: state }
                        })
                  }
                >
                  {icon} {label}
                </ListItem>
              );
            })}
          </LinksList>
        </DrowerBody>
        <DrowerFooter onClick={() => setOpenLangModal(true)}>
          <LangSwitch className="footer-lang" />
        </DrowerFooter>
      </DrowerContainer>
    </DrowerWrapper>
  );
});

const DATA = [
  {
    label: 'Заказы',
    icon: <OrdersIcon />,
    href: URLS.Profile,
    requiredAuth: true,
    state: Tab.ORDERS
  },
  {
    label: 'Адреса доставки',
    icon: <PinIcon />,
    href: URLS.Profile,
    requiredAuth: true,
    state: Tab.DELIVERY
  },
  {
    label: 'Каталог',
    icon: <CatalogIcon />,
    href: URLS.Catalog,
    requiredAuth: false
  },
  {
    label: 'Корзина',
    icon: <CartIcon />,
    href: URLS.Profile,
    requiredAuth: true,
    state: Tab.CART
  },
  {
    label: 'Избранное',
    icon: <WishlistIcon />,
    href: URLS.Profile,
    requiredAuth: true,
    state: Tab.WISHLIST
  },
  {
    label: 'Бишкек',
    icon: <GeoIcon />,
    href: '/geo',
    requiredAuth: false
  },
  {
    label: 'Контакты',
    icon: <ContactsIcon />,
    href: '/contacts',
    requiredAuth: false
  },
  {
    label: 'Выйти',
    icon: <LogoutIcon />,
    href: URLS.Main,
    handler: () => console.log('work'),
    requiredAuth: true
  }
];
