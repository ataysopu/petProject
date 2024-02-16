import React from 'react';
import { IButtonProps } from './types';
import S from './styled';

export const Button: React.FC<IButtonProps> = ({ onClick, children, ...props }) => {
  return (
    <S.Button onClick={onClick} {...props}>
      {children}
    </S.Button>
  );
};
