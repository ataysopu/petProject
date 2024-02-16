import React from 'react';
import { Menu, MenuButton, MenuLeft, MenuRight, MenuWrap } from './styled';

interface IIdentTotalCart {
  productCount: number;
  productAmount: number;
  discount: number;
  amount: number;
  refElement?: any;
  isSticky?: boolean;
}

export const IdentTotalCart: React.FC<IIdentTotalCart> = (
  {
    productCount,
    productAmount,
    discount,
    amount,
    isSticky,
    refElement
  }) => {
  return (
    <Menu ref={refElement} isSticky={isSticky}>
      <MenuWrap>
        <MenuLeft>
          <div>
            {productCount} товара на сумму {productAmount} с
          </div>
          <div>
            Скидка – <span>{discount} с</span>
          </div>
        </MenuLeft>
        <MenuRight>
          <span>{amount} с</span>
          <MenuButton to="/order">Перейти к оформлению</MenuButton>
        </MenuRight>
      </MenuWrap>
    </Menu>
  );
};
