import React from 'react';
import { ICardProps } from './types';
import { BREAKEPOINTS } from '../../core/config/breakpoints';
import { DesktopCard } from './desktop';
import { MobileCard } from './mobile';

export const Card: React.FC<ICardProps> = React.memo(({ data, row = false, customWidth = '100%' }) => {
  return (
    <React.Fragment>
      {customWidth > BREAKEPOINTS.lg ? <DesktopCard data={data} row={row} /> : <MobileCard data={data} />}
    </React.Fragment>
  );
});
