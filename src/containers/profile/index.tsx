import React from 'react';
import { Tab } from './controll';
import { useDeviceDetected } from '../../core/hooks/useDeviceDetected';
import { Column, Main, ProfileWrapper, Row } from './styled';
import { Modal } from '../../components';
import { Title } from '../cart/styled';
import { AccountLeftMenu } from './account';
import { UserInfoCard } from './account/userInfoCard';
import { Credit } from './credit';
import { QrCode } from './qrCode';

import { DownloadAppBtn, ImagesContainer, ModalContainer, SubTitle } from './account/styled';

import qrCodeImage from 'assets/icons/profile/qr.png';
import userImage from 'assets/icons/profile/Property1.png';
import userIdentImage from 'assets/icons/user-photo.png';
import arrowIcon from 'assets/icons/profile/arrow.svg';
import { user_data } from '../mocks/user';
import { Personal } from './personalForm';
import { DeliveryAdress } from './deliveryAdress';
import { Orders } from './order';
import { Wishlist } from './wishlist';
import { useSelector } from 'react-redux';
import { CartPage } from '../../pages/cart';
import * as userSelector from '../../store/selectors/userSelectors';

interface LocationStateProps {
  data: undefined | Tab;
}

export const Profile: React.FC<any> = () => {
  const [openIdentifiedModal, setOpenIdentifiedModal] = React.useState<boolean>(false);
  const data = user_data; // TODO get data from react-query
  const isMobile = useDeviceDetected();
  // @ts-ignore
  const { tabActive } = useSelector(state => state.app);

  // подклчи везде где mockuser
  const user = useSelector(userSelector.user);
  console.log(user.data);

  const Component = React.useCallback(() => {
    switch (tabActive) {
      case Tab.PERSONAL:
        return <Personal data={user_data} />;
      case Tab.DELIVERY:
        return <DeliveryAdress />;
      case Tab.ORDERS:
        return <Orders data={user_data.orders || []} />;
      case Tab.WISHLIST:
        return <Wishlist />;
      case Tab.CART:
        return <CartPage />;
      default:
        return null;
    }
  }, [tabActive]);

  return (
    <ProfileWrapper>
      {!isMobile ? (
        <AccountLeftMenu
          data={data}
          isOpenModal={openIdentifiedModal}
          setOpenModal={setOpenIdentifiedModal}
        />
      ) : (
        tabActive === Tab.PERSONAL && (
          <UserInfoCard
            data={data}
            svgSize={102}
            imageSize={60}
            isOpenModal={openIdentifiedModal}
            setOpenModal={setOpenIdentifiedModal}
          />
        )
      )}
      <Main>
        <Column>
          <Row>
            <Credit />
            <QrCode
              image={qrCodeImage}
              title="Скачайте приложение используя QR"
              text="C помощью приложения можно оплачивать кредит и смотреть активные задолженности"
            />
          </Row>
          <Component />
        </Column>
      </Main>
      <Modal isOpen={openIdentifiedModal} onClose={() => setOpenIdentifiedModal(false)} top="34%">
        <ModalContainer>
          <ImagesContainer>
            <img src={userImage} alt="user" />
            <img src={arrowIcon} alt="arrow" />
            <img src={userIdentImage} alt="ident user" />
          </ImagesContainer>
          <Title>Пройдите идентификацию для получения кредита</Title>
          <SubTitle>Заполните анкету в приложении,которое доступно в Google play и AppStore.</SubTitle>
          <DownloadAppBtn onClick={() => console.log('download app')}>Скачать приложение</DownloadAppBtn>
        </ModalContainer>
      </Modal>
    </ProfileWrapper>
  );
};