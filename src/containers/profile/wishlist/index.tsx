import React from 'react';
import { useWindowSize } from '../../../core/hooks/useWindowSize';
import { DATA } from '../../mocks/catalogItems';
import { BREAKEPOINTS } from '../../../core/config/breakpoints';
import { Select } from '../../../components/select';
import { Grid } from '../../../components/grid';
import { Card } from '../../../components/card';
import { EmptyList } from './emptyList';

import {
  Control,
  ControlContainer,
  FilterBy,
  GoodsContainer,
  Title,
  ToogleViewListBtn,
  WishlistWrapper
} from './styled';

import { ReactComponent as ViewListIcon } from 'assets/icons/viewList.svg';

export const OPTIONS = [
  { value: 'new', label: 'Недавно добавленные' },
  { value: 'popular', label: 'По популярности' }
];

export const Wishlist: React.FC<any> = () => {
  const [gridView, setGridView] = React.useState<string>('100%');
  const { width } = useWindowSize();
  const favedGoods = DATA.filter((item) => item.fave);

  React.useEffect(() => {
    width < BREAKEPOINTS.lg && setGridView('');
  }, [width]);

  const changeGrid = () => {
    setGridView((prevState) => (prevState ? '' : '100%'));
  };

  return (
    <WishlistWrapper>
      <ControlContainer>
        <Title>Избранное</Title>
        <Control>
          <ToogleViewListBtn onClick={() => changeGrid()} gridView={gridView}>
            <ViewListIcon />
          </ToogleViewListBtn>
          <FilterBy>
            <Select options={OPTIONS} onChange={() => console.log('work')} selected={'new'} />
          </FilterBy>
        </Control>
      </ControlContainer>
      <GoodsContainer>
        {!!favedGoods.length ? (
          <Grid frSize={gridView}>
            {favedGoods.map((item) => (
              <Card key={item.id} row={gridView === '100%'} data={item} />
            ))}
          </Grid>
        ) : (
          <EmptyList />
        )}
      </GoodsContainer>
    </WishlistWrapper>
  );
};
