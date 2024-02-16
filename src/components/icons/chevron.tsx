import React from 'react';

type Direction = 'down' | 'up' | 'left' | 'right';

export const IconVerticalChevron = ({ open }: { open: boolean }) => <IconChevron direction={open ? 'up' : 'down'} />;

export const IconChevron = ({ direction }: { direction: Direction }) => {
  const style: React.CSSProperties = {};
  switch (direction) {
    case 'down':
      style.transform = 'rotate(0)';
      break;
    case 'left':
      style.transform = 'rotate(90deg)';
      break;
    case 'right':
      style.transform = 'rotate(270deg)';
      break;
    case 'up':
      style.transform = 'rotate(180deg)';
      break;
    default:
      style.transform = 'unset';
  }

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <path d="M8 10L12 14L16 10" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
