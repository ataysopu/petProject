import React from 'react';
import { mockUser } from './mock';
import { useWindowSize } from '../../core/hooks/useWindowSize';
import { useWindowScroll } from '../../core/hooks/useWindowScroll';
import { BREAKEPOINTS } from '../../core/config/breakpoints';
import { Modal } from '../modal';
import { LangSwitcher } from '../LangSwitcher';
import { Drower } from '../drower';
import { MegaMenu } from '../megaMenu';
import { Geo } from '../geolocation';

import {
  ButtonsContainer,
  CatalogButton,
  CatalogButtonTypography,
  ContactUs,
  Container,
  DesktopLogoCover,
  DrowerLangModal,
  GetAppButton,
  GoodsAuthContainer,
  Header,
  HeaderBottom,
  HeaderBtnsContainer,
  HeaderTop,
  MobileMenuContainer,
  SearchContainer,
  TopButtonTypography
} from './styled';
import { ReactComponent as MobileAppIcon } from '../../assets/icons/mobileApp.svg';
import { ReactComponent as ContactUsIcon } from '../../assets/icons/contactUs.svg';
import { ReactComponent as CatalogIconOpen } from '../../assets/icons/burger.svg';
import { ReactComponent as CatalogIconClose } from '../../assets/icons/x-close.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';


import { Search } from '../../containers/search';
import { Signin } from './singin';
import { AppLogo } from '../../ui';
import { WishlistCounterBtn } from '../../containers/wishlistCounter';
import { CartCounterBtn } from '../../containers/cartCounter';
import { useSelector } from 'react-redux';
import * as userSelector from '../../store/selectors/userSelectors';
import { IUser } from '../../store/reducers/userSlice';
import { TUser } from '../../core/types/user';

export const AppHeader = React.memo(() => {
  const [openMegaMenu, setOpenMegaMenu] = React.useState<boolean>(false);
  const [openDrower, setOpenDrower] = React.useState<boolean>(false);
  const [isOpenDrowModal, setDrowerModal] = React.useState<boolean>(false);


  const window = useWindowSize();
  const scroll = useWindowScroll();

  const config = () => {
    if (window.width > BREAKEPOINTS.lg)
      return {
        closeIcon: false,
        outsideClick: false,
        style: { top: hiddenTopHeader() ? 80 : 128, borderTop: 'solid 1px #EBEBEB' }
      };
  };

  const hiddenSearch = () => {
    const initialToHidden = 400;
    return window.width < BREAKEPOINTS.lg && initialToHidden - scroll.y < 200 ? true : false;
  };

  const hiddenTopHeader = () => {
    return scroll.y > 50;
  };

  const handleClose = () => {
    setOpenDrower(false);
    return setDrowerModal(true);
  };

  const user = useSelector(userSelector.user);

  function convertIUserToTUser(user: IUser): TUser {
    return {
      name: user.name,
      birthday: user.birthDate,
      phone: user.phoneNumber,
      gender: user.gender,
      email: user.email,
      photo: user.photo,
      isAuth: false,
      adress: user.address,
      identifiedType: 'IDENTIFIED'
    };
  }

  const convertedUser = convertIUserToTUser(user.data);


  return (
    <Header>
      <Drower open={openDrower} setOpen={setOpenDrower} data={convertedUser} setOpenLangModal={handleClose} />
      <DrowerLangModal isOpen={isOpenDrowModal} onClose={() => setDrowerModal(false)} />
      <Container>
        <Modal isOpen={openMegaMenu} onClose={setOpenMegaMenu} bg="#ffffff" {...config()}>
          <MegaMenu hideTopDark={!hiddenTopHeader()} handleClose={() => setOpenMegaMenu(false)} />
        </Modal>
        <HeaderTop hidden={hiddenTopHeader()}>
          {window.width > BREAKEPOINTS.lg && <Geo />}
          <ButtonsContainer>
            <GetAppButton onClick={() => console.log('mobile app')}>
              <MobileAppIcon />
              <TopButtonTypography>Мобильное приложение</TopButtonTypography>
            </GetAppButton>
            <ContactUs onClick={() => console.log('mobile app')}>
              <ContactUsIcon />
              <TopButtonTypography>Связаться</TopButtonTypography>
            </ContactUs>
            <LangSwitcher />
          </ButtonsContainer>
        </HeaderTop>
        <HeaderBottom>
          {window.width < BREAKEPOINTS.lg && <Geo />}
          <MobileMenuContainer>
            <MenuIcon onClick={() => setOpenDrower(!openDrower)} />
            <AppLogo />
            <HeaderBtnsContainer>
              <CartCounterBtn />
            </HeaderBtnsContainer>
          </MobileMenuContainer>
          <SearchContainer hidden={hiddenSearch()}>
            <DesktopLogoCover>
              <AppLogo />
            </DesktopLogoCover>
            <CatalogButton primary onClick={() => setOpenMegaMenu(!openMegaMenu)}>
              {openMegaMenu ? <CatalogIconClose /> : <CatalogIconOpen />}
              <CatalogButtonTypography>Каталог</CatalogButtonTypography>
            </CatalogButton>
            <Search />
          </SearchContainer>
          <GoodsAuthContainer>
            <WishlistCounterBtn />
            <CartCounterBtn />
            <Signin />
          </GoodsAuthContainer>
        </HeaderBottom>
      </Container>
    </Header>
  );
});
