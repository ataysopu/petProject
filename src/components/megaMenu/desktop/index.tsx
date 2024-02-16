import React from 'react';
import { IDestopMenuUI } from './types';
import {
  Destop,
  DestopMenu,
  DestopMenuItem,
  DestopMenuItemBlock,
  DestopMenuItemMainTitle, DestopMenuItemTitle,
  DestopMenuList,
  Icon
} from './styled';
import { CategoryDto } from '../../../types/categories';

export const DestopMenuUI: React.FC<IDestopMenuUI> = ({ data, onClick }) => {
  return (
    <Destop>
      <DestopMenu>
        <DestopMenuList className="desktop-menu__list">
          {data &&
            data.map((element: CategoryDto) => (
              <DestopMenuItemBlock key={element.id}>
                <Icon className="icon">
                  <img src={element.image.url} />
                </Icon>
                <DestopMenuItem>
                  <DestopMenuItemMainTitle variant="h3">{element.name}</DestopMenuItemMainTitle>
                  {element.children.map((childItem: CategoryDto) => (
                    <DestopMenuList key={childItem.id}>
                      <DestopMenuItem className="link" onClick={() => onClick(childItem)}>
                        <DestopMenuItemTitle variant="bodyB">{childItem.name}</DestopMenuItemTitle>
                      </DestopMenuItem>
                    </DestopMenuList>
                  ))}
                </DestopMenuItem>
              </DestopMenuItemBlock>
            ))}
        </DestopMenuList>
      </DestopMenu>
    </Destop>
  );
};
