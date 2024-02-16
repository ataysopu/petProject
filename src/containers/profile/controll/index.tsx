import React from 'react';
import { ReactComponent as OrdersIcon } from 'assets/icons/drower/orders.svg';
import { ReactComponent as AccountIcon } from 'assets/icons/drower/account.svg';
import { ReactComponent as PinIcon } from 'assets/icons/drower/pin.svg';
import { ReactComponent as FaveIcon } from 'assets/icons/fave.svg';
import { ReactComponent as CartIcon } from 'assets/icons/cart_color.svg';
import { ControllWrapper, ListItem, MenuList } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveTab } from '../../../store/reducers/appSlice';


interface IControllProps {
  activeTab: Tab | undefined;
  setActiveTab: (arg: Tab) => void;
  isCollapse?: boolean;
}

export enum Tab {
  PERSONAL = 'PERSONAL',
  ORDERS = 'ORDERS',
  DELIVERY = 'DELIVERY',
  WISHLIST = 'WISHLIST',
  CART = 'CART'
}

export type Items = {
  label: string;
  icon: React.SVGProps<SVGSVGElement>;
  value: Tab.DELIVERY | Tab.ORDERS | Tab.PERSONAL | Tab.WISHLIST | Tab.CART;
};

const ITEMS: Items[] = [
  {
    label: 'Личные данные',
    icon: <AccountIcon height="24px" width="24px" viewBox="8 8 24 24" />,
    value: Tab.PERSONAL
  },
  {
    label: 'Избранное',
    icon: <FaveIcon />,
    value: Tab.WISHLIST
  },
  {
    label: 'Заказы',
    icon: <OrdersIcon />,
    value: Tab.ORDERS
  },
  {
    label: 'Корзина',
    icon: <CartIcon />,
    value: Tab.CART
  },
  {
    label: 'Адреса доставки',
    icon: <PinIcon />,
    value: Tab.DELIVERY
  }
];

export const Controll: React.FC<IControllProps> = ({ activeTab, setActiveTab, isCollapse }) => {
  // @ts-ignore
  const dispatch = useDispatch();
  // @ts-ignore
  const { tabActive } = useSelector(state => state.app);

  return (
    <ControllWrapper>
      <MenuList>
        {ITEMS.map((i) => (
          <ListItem key={i.value} active={tabActive === i.value} onClick={() => dispatch(changeActiveTab(i.value))}
                    isCollapse={isCollapse}>
            <>
              {i.icon}
              <span>{i.label}</span>
            </>
          </ListItem>
        ))}
      </MenuList>
    </ControllWrapper>
  );
};