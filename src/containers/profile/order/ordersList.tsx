import React from 'react';
import { Status } from './status';
import { Symbol } from '../../../components/letter';
import {
  Info,
  ListItem,
  ListStatus,
  ListTitle,
  ListTitleContainer,
  Name,
  OrdersList, PaymentMethod, Processes,
  ProductInfoContainer, WhyRejectedBtn
} from './styled';

interface IListProps {
  data: any[];
  openPreviewModal: any;
}

export const List: React.FC<IListProps> = React.memo(({ data, openPreviewModal }) => {
  return (
    <OrdersList>
      {data.map(({ applicationId, date, image, name, paymentMethod, price, status }) => (
        <ListItem
          key={applicationId}
          onClick={() =>
            openPreviewModal({ modal: true, data: { applicationId, date, image, name, paymentMethod, price, status } })
          }
        >
          <ListTitleContainer>
            <ListTitle>
              Заказ <strong>{applicationId}</strong> {date}
            </ListTitle>
            <Status props={status} Component={ListStatus} />
          </ListTitleContainer>
          <ProductInfoContainer>
            <img src={image} />
            <Info>
              <Name>
                {name}
                <strong>
                  {price} <Symbol symbol="c" />
                </strong>
              </Name>
              <Processes>
                <div>Способ получения:</div>
                <div>{paymentMethod}</div>
              </Processes>
              <PaymentMethod>
                <div>Способ оплаты:</div>
                <div>{paymentMethod}</div>
              </PaymentMethod>
              {status === 4 && (
                <WhyRejectedBtn onClick={() => console.log('why rejected')}>Почему заказ отменен?</WhyRejectedBtn>
              )}
            </Info>
          </ProductInfoContainer>
        </ListItem>
      ))}
    </OrdersList>
  );
});
