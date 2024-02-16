import React from 'react';
import { ImgContainer, Left, QrCodeWrapper, Right, Title, Text } from './styled';

interface IQrCode {
  image: string;
  title?: string;
  text: string;
}

export const QrCode: React.FC<IQrCode> = ({ image, title, text }) => {
  return (
    <QrCodeWrapper>
      <Left>
        <ImgContainer>
          <img src={image} alt="qr code" />
        </ImgContainer>
      </Left>
      <Right>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Right>
    </QrCodeWrapper>
  );
};
