import { CustomSelect, ListItem } from './styled';
import { Typography } from '../typography';
import React from 'react';

import ruIcon from '../../assets/icons/ru.svg';
import kgIcon from '../../assets/icons/kg.svg';

interface ILangSwitcher {
  Icon?: any;
  selected?: string;
  className?: string;
  optionsIconShow?: boolean;
}

const CustomOption = (props: any) => {
  return (
    <ListItem {...props}>
      <img src={props.data.icon} alt={'флаг'} /> <Typography variant="bodyA">{props.data.label}</Typography>
    </ListItem>
  );
};

export const LangSwitcher: React.FC<ILangSwitcher> = React.memo(
  ({ Icon, optionsIconShow = true, selected = 'ru', className }) => {
    const options = [
      { value: 'ru', label: 'Русский', icon: optionsIconShow ? ruIcon : null },
      { value: 'kg', label: 'Кыргызский', icon: optionsIconShow ? kgIcon : null }
    ];

    return (
      <CustomSelect
        selected={selected}
        showSelectedValueIcon={true}
        onChange={() => console.log('')}
        options={options}
        Icon={Icon}
        className={className}
        CustomOptionComponent={CustomOption}
      />
    );
  }
);
