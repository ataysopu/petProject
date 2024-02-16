import React from 'react';

import {
  AddAdressBtn, Cheap,
  DeliveryAdressListInfo,
  DeliveryAdressTitleContainer,
  DeliveryAdressWrapper, ListInfoItem, TextContainer,
  Title, Text, Icons
} from './styled';

import { ReactComponent as HomeIcon } from 'assets/icons/profile/adress.svg';
import { ReactComponent as EditIcon } from 'assets/icons/profile/edit.svg';
import { ReactComponent as RemoveIcon } from 'assets/icons/profile/remove.svg';

export const DeliveryAdress: React.FC = ({}) => {
  return (
    <DeliveryAdressWrapper>
      <DeliveryAdressTitleContainer>
        <Title> Адреса доставки</Title>
        <AddAdressBtn onClick={() => console.log('add adress')}>+ Добавить новый адрес</AddAdressBtn>
      </DeliveryAdressTitleContainer>
      <DeliveryAdressListInfo>
        <ListInfoItem>
          <Cheap>Адрес проживания</Cheap>
          <TextContainer>
            <HomeIcon />
            <Text>
              <div>Бишкек, ул. Белинского, 188</div>
              <div>2 подъезд, 2 этаж, домофон 12</div>
            </Text>
          </TextContainer>
        </ListInfoItem>
        <ListInfoItem>
          <Cheap>Адрес по прописке</Cheap>
          <TextContainer>
            <HomeIcon />
            <Text>
              <div>Бишкек, ул. Московская, 188</div>
              <div>2 подъезд, 2 этаж, домофон 12</div>
            </Text>
            <Icons>
              <EditIcon />
              <RemoveIcon />
            </Icons>
          </TextContainer>
        </ListInfoItem>
      </DeliveryAdressListInfo>
    </DeliveryAdressWrapper>
  );
};
