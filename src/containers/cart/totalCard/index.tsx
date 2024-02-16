import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutContainer, CheckoutInfo, CheckoutTop, CheckoutTotal, Get, Total } from './styled';
import { formatNumber } from '../../../core/helpers';
import { URLS } from '../../../routes/urls';
import { Symbol } from '../../../components/letter';
import { useCalculation } from '../../../core/hooks/useCalculation';

export const TotalCard: React.FC = () => {
  const { total = 0, discount = 0, countItems = 0 } = useCalculation();
  const navigate = useNavigate();
  const orderId = 'some-id';

  return (
    <Total>
      <CheckoutContainer>
        <CheckoutTop>
          <div>Ваша корзина</div>
          <div>{countItems} товара</div>
        </CheckoutTop>
        <CheckoutInfo>
          <li>
            <div>Товары ({countItems})</div>
            <div>
              {formatNumber(total)} <Symbol symbol="c" />
            </div>
          </li>
          <li>
            <div>Скидка</div>
            <div style={{ color: '#F44336' }}>
              – {formatNumber(discount)} <Symbol symbol="c" />
            </div>
          </li>
          <li />
        </CheckoutInfo>
        <CheckoutTotal>
          <div>Общая стоимость</div>
          <div>
            {formatNumber(total)} <Symbol symbol="c" />
          </div>
        </CheckoutTotal>
        <Get onClick={() => navigate(URLS.Order(orderId))}>Перейти к оформлению</Get>
      </CheckoutContainer>
    </Total>
  );
};
