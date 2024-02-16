import React from 'react';
import { IGridProps } from './types';
import { useWindowSize } from '../../core/hooks/useWindowSize';
import { Layout } from './styled';


interface IGridChildProps {
  customWidth: number;
}

export const Grid: React.FC<IGridProps> = ({ children, frSize }) => {
  const { width } = useWindowSize();

  const customWidth = width;

  const frSizeChange = () => {
    return '280px';
    // if (customWidth > BREAKEPOINTS.lg) {
    //   return '286px';
    // } else {
    //   return '285px';
    // } ??
  };
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { customWidth } as IGridChildProps);
    }
    return child;
  });

  return <Layout frSize={frSize || frSizeChange()}>{childrenWithProps}</Layout>;
};
