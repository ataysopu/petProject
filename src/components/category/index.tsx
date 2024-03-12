import React from 'react';
import { Categories, CountCategory, EmptyItem, Item, Label, Image } from './styled';

import phone from 'assets/icons/categories/phone.svg';
import notebook from 'assets/icons/categories/notebook.svg';
import headphone from 'assets/icons/categories/headphone.svg';


export const Category: React.FC = () => {
  return (
    <Categories>
      <Item>
        <Label variant="subtitleB">Ноутбуки</Label>
        <Image src={notebook} />
      </Item>
      <Item>
        <Label variant="subtitleB">Аксессуары</Label>
        <Image src={headphone} />
      </Item>
      <Item>
        <Label variant="subtitleB">Телефоны</Label>
        <Image src={phone} />
      </Item>
      <EmptyItem>
        <Label variant="subtitleB">
          Смотреть все <CountCategory>24 категории</CountCategory>
        </Label>
      </EmptyItem>
    </Categories>
  );
};