import React from 'react';
import { DATA } from '../mocks/catalogItems';
import { Select } from '../../components/select';
import { Grid } from '../../components/grid';
import { Card } from '../../components/card';

import {
  CompilationGoodsContainer,
  FilterBy,
  GoodsContainer,
  GoodsCount,
  SortContainer, SubTitle,
  Title,
  WishlistWrapper
} from './styled';

export const OPTIONS = [
  { value: 'new', label: 'По новизне' },
  { value: 'popular', label: 'По популярности' }
];

export const Wishlist: React.FC<any> = () => {
  const allGoods = DATA;
  const favedGoods = DATA.filter((item) => item.fave);

  const data = [...favedGoods];
  return (
    <WishlistWrapper>
      <Title>Избранное</Title>
      <SortContainer>
        <GoodsCount>Показано {data.length} товаров</GoodsCount>
        <FilterBy>
          <Select options={OPTIONS} onChange={() => console.log('work')} placeholder="Сортировать" />
        </FilterBy>
      </SortContainer>
      <GoodsContainer>
        <Grid>
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </Grid>
      </GoodsContainer>
      <CompilationGoodsContainer>
        <SubTitle>Товары которые могут вас заинтересовать</SubTitle>
        <Grid>
          {allGoods.slice(0, 4).map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </Grid>
      </CompilationGoodsContainer>
    </WishlistWrapper>
  );
};
