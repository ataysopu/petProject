import { useNavigate } from 'react-router-dom';
import { Box, EmptyContainer, GoToMain, ListTitle, ProductList } from './styled';
import React from 'react';
import { URLS } from '../../../routes/urls';
import { Grid } from '../../../components/grid';
import { DATA } from '../../mocks/catalogItems';
import { Card } from '../../../components/card';

import empty from 'assets/icons/cart/cartEmpty.svg';

interface IEmptyProps {
  showPosts: boolean;
}

export const Empty: React.FC<IEmptyProps> = ({ showPosts }) => {
  const navigate = useNavigate();

  return (
    <EmptyContainer>
      <Box>
        <img src={empty} />
        <div>Ваша корзина пуста.</div>
        <div>Выберите нужный Вам товар из каталога интернет-магазина и добавьте его в корзину.</div>
        <GoToMain onClick={() => navigate(URLS.Main)}>Перейти на главную</GoToMain>
      </Box>
      {showPosts && (
        <ProductList>
          <ListTitle>Товары которые могут вас заинтересовать</ListTitle>
          <Grid>
            {DATA.slice(0, 4).map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </Grid>
        </ProductList>
      )}
    </EmptyContainer>
  );
};
