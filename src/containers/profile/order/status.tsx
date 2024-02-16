import React from 'react';

import { ReactComponent as ReadyIcon } from 'assets/icons/profile/ready.svg';
import { ReactComponent as DeliveryIcon } from 'assets/icons/profile/delivery.svg';
import { ReactComponent as ConfirmIcon } from 'assets/icons/profile/confirm.svg';
import { ReactComponent as RejectedIcon } from 'assets/icons/profile/rejected.svg';

interface IIconProps {
  props: number;
  Component: React.ElementType;
  isSelected?: boolean;
}

export const Status: React.FC<IIconProps> = React.memo(({ props, Component, isSelected }) => {
  switch (props) {
    case 1:
      return (
        <Component style={{ color: '#003420' }} isSelected={isSelected}>
          <ReadyIcon /> Готов к выдаче
        </Component>
      );
    case 2:
      return (
        <Component style={{ color: '#664600' }} isSelected={isSelected}>
          <DeliveryIcon /> Товар в пути
        </Component>
      );
    case 3:
      return (
        <Component style={{ color: '#0D3C61' }} isSelected={isSelected}>
          <ConfirmIcon /> Заявка принята
        </Component>
      );
    case 4:
      return (
        <Component style={{ color: '#621B16' }} isSelected={isSelected}>
          <RejectedIcon /> Отменен
        </Component>
      );
    default:
      return null;
  }
});
