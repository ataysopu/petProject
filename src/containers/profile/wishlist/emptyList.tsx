import { useNavigate } from 'react-router-dom';
import { EmptyListInfo, EmptyListWrapper, GetCatalogBtn } from './styled';
import React from 'react';
import { URLS } from '../../../routes/urls';

import { ReactComponent as EmptyIcon } from 'assets/icons/profile/empty_list.svg';

export const EmptyList = () => {
  const navigate = useNavigate();

  return (
    <EmptyListWrapper>
      <EmptyIcon />
      <EmptyListInfo>
        <div>Ваш список заказов пока пуст</div>
        <div>Найдите товары в нашем каталоге или воспользуйтесь поиском</div>
        <GetCatalogBtn onClick={() => navigate(URLS.Catalog)}>Перейти в каталог</GetCatalogBtn>
      </EmptyListInfo>
    </EmptyListWrapper>
  );
};
