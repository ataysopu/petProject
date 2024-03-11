import React from 'react';
import { DATA } from '../mocks/catalogItems';
import { Select } from '../../components/select';
import { Grid } from '../../components/grid';
import { Card } from '../../components/card';
import { useSelector } from 'react-redux';
import * as favoriteSliceSelectors from 'store/selectors/favoriteSelectors';

import {
  CompilationGoodsContainer,
  FilterBy,
  GoodsContainer,
  GoodsCount,
  SortContainer, SubTitle,
  Title,
  WishlistWrapper
} from './styled';
import { fetchBestSales } from '../../api/getBestSales';

export const OPTIONS = [
  { value: 'isNew', label: 'новый' },
  { value: 'isPopular', label: 'популярные' }
];

export const Wishlist: React.FC<any> = () => {
  const favedGoods = useSelector(favoriteSliceSelectors.goods);

  const [bestSales, setBestSales] = React.useState<any[]>([]);
  const [goods, setGoods] = React.useState<any[]>(favedGoods);


  React.useEffect(() => {
    fetchBestSales().then(res => setBestSales(res.data));
  }, []);

  React.useEffect(() => {
    if (favedGoods) {
      setGoods(favedGoods);
    }
  }, [favedGoods]);

  const sortByType = (flag: string) => {
    const data = goods.filter((a) => a[flag]);

    // console.log('data: ', [...data, ...goods]);
    // setGoods(items => ({ ...items, ...data }));
  };

  return (
    <WishlistWrapper>
      <Title>Избранное</Title>
      <SortContainer>
        <GoodsCount>Показано {favedGoods.length} товаров</GoodsCount>
        <FilterBy>
          <Select options={OPTIONS} onChange={(item: any) => sortByType(item)} placeholder="Сортировать" />
        </FilterBy>
      </SortContainer>
      <GoodsContainer>
        <Grid>
          {goods.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </Grid>
      </GoodsContainer>
      <CompilationGoodsContainer>
        <SubTitle>Товары которые могут вас заинтересовать</SubTitle>
        <Grid>
          {bestSales.slice(0, 4).map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </Grid>
      </CompilationGoodsContainer>
    </WishlistWrapper>
  );
};
