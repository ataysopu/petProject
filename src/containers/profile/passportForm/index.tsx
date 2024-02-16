import React from 'react';

import { Description, FillBtn, PassportFormWrapper, TextBlock, Title } from './styled';

import start from 'assets/icons/profile/start.png';

export const PassportForm = () => {
  return (
    <PassportFormWrapper>
      <img src={start} alt="start" />
      <TextBlock>
        <Title>Получите кредит в 2 раза быстрее!</Title>
        <Description>Заполнив паспортные данные, процесс одобрения кредита увеличивается в 50%</Description>
        <FillBtn onClick={() => console.log('push')}>Заполнить</FillBtn>
      </TextBlock>
    </PassportFormWrapper>
  );
};
