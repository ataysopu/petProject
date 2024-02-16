import React from 'react';
import { IMenuUI } from './types';
import { Icon, MenuItem, MenuList, ProductType, ProductTypeText } from './styled';
import { IconChevron } from '../../icons/chevron';

export const MenuUI: React.FC<IMenuUI> = ({ name, data, onClick, onMouserEnter }) => (
  <MenuList>
    {data?.length &&
      data.map((item) => (
        <MenuItem
          key={item.id}
          onClick={() => onClick(item)}
          onMouseEnter={() => onMouserEnter(item)}
          isActive={name === item.name}
        >
          <ProductType>
            {!!item.image && item.level !== 3 && (
              <Icon className="icon">
                <img src={item.image.url} />
              </Icon>
            )}
            <ProductTypeText variant="bodyA">{item.name}</ProductTypeText>
          </ProductType>
          <IconChevron direction="right" />
        </MenuItem>
      ))}
  </MenuList>
);
