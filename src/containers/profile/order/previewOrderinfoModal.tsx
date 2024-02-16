import React from 'react';
import { Status } from './status';
import {
  PreviewBodyContainer,
  PreviewImage,
  PreviewInfoBox,
  PreviewItemInfoBox,
  PreviewListItem,
  PreviewMobileImage,
  PreviewNameContainer,
  PreviewOrderInfoInner,
  PreviewOrderInfoModalContainer,
  PreviewProductName,
  PreviewRecipientList,
  PreviewStatus,
  PreviewTitleContainer,
  StyledModal
} from './styled';

import iphone from 'assets/icons/cart/iphone.png';
import { ReactComponent as AccountIcon } from 'assets/icons/drower/account.svg';
import { ReactComponent as StarIcon } from 'assets/icons/modal_.svg';

interface IPreviewOrderInfoModalProps {
  open: any;
  close: (open: boolean, item?: any) => void;
}

export const PreviewOrderInfoModal: React.FC<IPreviewOrderInfoModalProps> = ({ open, close }) => {
  return (
    <StyledModal isOpen={open.modal} onClose={() => close(false)}>
      <PreviewOrderInfoModalContainer>
        <PreviewOrderInfoInner>
          <PreviewTitleContainer>
            <div>
              <StarIcon /> Заказ {open.data?.applicationId}
            </div>
          </PreviewTitleContainer>
          <PreviewBodyContainer>
            <PreviewImage src={iphone} />
            <PreviewInfoBox>
              <PreviewNameContainer>
                <PreviewMobileImage src={open.data?.image} />
                <div>
                  <Status Component={PreviewStatus} props={open.data?.status} />
                  <PreviewProductName>Смартфон Samsung Galaxy s21 Ultra, Green, 512 GB</PreviewProductName>
                </div>
              </PreviewNameContainer>
              <PreviewRecipientList>
                <PreviewListItem>
                  <AccountIcon />
                  <PreviewItemInfoBox>
                    <div>Получатель</div>
                    <div>Бердымухамедов Гурбангулы Мяликгулиевич</div>
                  </PreviewItemInfoBox>
                </PreviewListItem>
                <PreviewListItem>
                  <AccountIcon />
                  <PreviewItemInfoBox>
                    <div>Номер телефона</div>
                    <div>+996 312 12-34-56</div>
                  </PreviewItemInfoBox>
                </PreviewListItem>
                <PreviewListItem>
                  <AccountIcon />
                  <PreviewItemInfoBox>
                    <div>Точка самовывоза</div>
                    <div>пр. Чуй, 92, ГУМ “Чынар”, Планета электроники</div>
                  </PreviewItemInfoBox>
                </PreviewListItem>
                <PreviewListItem>
                  <AccountIcon />
                  <PreviewItemInfoBox>
                    <div>Доступен с</div>
                    <div>10 октября 2021</div>
                  </PreviewItemInfoBox>
                </PreviewListItem>
              </PreviewRecipientList>
            </PreviewInfoBox>
          </PreviewBodyContainer>
        </PreviewOrderInfoInner>
      </PreviewOrderInfoModalContainer>
    </StyledModal>
  );
};
