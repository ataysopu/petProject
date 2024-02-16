import {
  AgreementDesktop,
  AgreementMobile,
  BottomContentBox, BottomContentBoxText, BottomContentBoxTitle,
  ContactUsBtn,
  Container,
  DesktopBox, Empty, FooterBottom,
  FooterCover,
  FooterTop, MobileBox, SocialIconsBox,
  TopContentBox,
  TopContentBoxList,
  TopContentBoxTitle, TopContentTypography
} from './styled';
import { Typography } from '../typography';
import { IconMail } from '../icons/mail';
import { IconPayment } from '../icons/payment';
import { IconNewLogo } from '../icons/logoNew';
import { IconInsta } from '../icons/insta';
import { IconTwitter } from '../icons/twitter';
import { IconFacebook } from '../icons/facebook';
import { Accordion } from '../accordion';

export const Footer: React.FC = () => {
  return (
    <FooterCover>
      <Container>
        <FooterTop>
          <DesktopBox>
            <TopContentBox>
              <TopContentBoxTitle variant="h1">
                <strong>9090</strong>
              </TopContentBoxTitle>
              <TopContentBoxList>
                <li>
                  <TopContentTypography variant="bodyA">
                    <a>Бесплатно с мобильного</a>
                  </TopContentTypography>
                </li>
              </TopContentBoxList>
              <ContactUsBtn fullWidth center onClick={() => console.log('contact us')}>
                <IconMail /> <Typography variant="subtitleA">Связаться</Typography>
              </ContactUsBtn>
            </TopContentBox>
            <TopContentBox>
              <TopContentBoxTitle variant="h3">Покупателям</TopContentBoxTitle>
              <TopContentBoxList>
                <li>
                  <TopContentTypography variant="bodyA">
                    <a href={'#'}>Как выбрать товар</a>
                  </TopContentTypography>
                </li>
                <li>
                  <TopContentTypography variant="bodyA">
                    <a href={'#'}>Как оформить рассрочку</a>
                  </TopContentTypography>
                </li>
                <li>
                  <TopContentTypography variant="bodyA">
                    <a href={'#'}>Как вернуть товар</a>
                  </TopContentTypography>
                </li>
                <li>
                  <TopContentTypography variant="bodyA">
                    <a href={'#'}>Условия доставки</a>
                  </TopContentTypography>
                </li>
              </TopContentBoxList>
            </TopContentBox>
            <TopContentBox>
              <TopContentBoxTitle variant="h3">Партнерам</TopContentBoxTitle>
              <TopContentBoxList>
                <li>
                  <TopContentTypography variant="bodyA">
                    <a href={'#'}>Как стать партнером</a>
                  </TopContentTypography>
                </li>
                <li>
                  <TopContentTypography variant="bodyA">
                    <a href={'#'}>Личный кабинет партнера</a>
                  </TopContentTypography>
                </li>
              </TopContentBoxList>
            </TopContentBox>
            <TopContentBox>
              <TopContentBoxTitle variant="h3">Способы оплаты</TopContentBoxTitle>
              <IconPayment style={{ width: 210 }} />
            </TopContentBox>
          </DesktopBox>
          <MobileBox>
            <TopContentBox>
              <TopContentBoxTitle variant="h3">
                <strong>9090</strong>
              </TopContentBoxTitle>
              <TopContentBoxList>
                <li>
                  <TopContentTypography variant="bodyA">
                    <a>Бесплатно с мобильного</a>
                  </TopContentTypography>
                </li>
              </TopContentBoxList>
              <ContactUsBtn fullWidth center onClick={() => console.log('contact us')}>
                <IconMail />
                <Typography variant="subtitleA">Связаться</Typography>
              </ContactUsBtn>
            </TopContentBox>
            <Accordion title={'Покупателям'}>
              <TopContentBox>
                <TopContentBoxList>
                  <li>
                    <TopContentTypography variant="bodyA">
                      <a href={'#'}>Как выбрать товар</a>
                    </TopContentTypography>
                  </li>
                  <li>
                    <TopContentTypography variant="bodyA">
                      <a href={'#'}>Как оформить рассрочку</a>
                    </TopContentTypography>
                  </li>
                  <li>
                    <TopContentTypography variant="bodyA">
                      <a href={'#'}>Как вернуть товар</a>
                    </TopContentTypography>
                  </li>
                  <li>
                    <TopContentTypography variant="bodyA">
                      <a href={'#'}>Условия доставки</a>
                    </TopContentTypography>
                  </li>
                </TopContentBoxList>
              </TopContentBox>
            </Accordion>
            <Accordion title="Партнерам">
              <TopContentBox>
                <TopContentBoxList>
                  <li>
                    <TopContentTypography variant="bodyA">
                      <a href={'#'}>Как стать партнером</a>
                    </TopContentTypography>
                  </li>
                  <li>
                    <TopContentTypography variant="bodyA">
                      <a href={'#'}>Личный кабинет партнера</a>
                    </TopContentTypography>
                  </li>
                </TopContentBoxList>
              </TopContentBox>
            </Accordion>
            <Accordion title="Способы оплаты">
              <TopContentBox>
                <IconPayment style={{ width: 210 }} />
              </TopContentBox>
            </Accordion>
          </MobileBox>
        </FooterTop>
        <FooterBottom>
          <BottomContentBox position="bottom">
            <BottomContentBoxTitle variant="subtitleB">
              <IconNewLogo />
            </BottomContentBoxTitle>
            <SocialIconsBox>
              <IconInsta />
              <IconTwitter />
              <IconFacebook />
            </SocialIconsBox>
          </BottomContentBox>
          <BottomContentBox position="bottom">
            <BottomContentBoxTitle variant="subtitleB">2024 © ОсОО &ldquo;Наименование&ldquo;</BottomContentBoxTitle>
            <BottomContentBoxText style={{ minWidth: 380, marginBottom: 24 }}>
              Сервис, объеденяющий кредиты, предоставляемые <br /> ОАО &ldquo;Наименование&ldquo; и товары из
              магазинов-партнеров банка
            </BottomContentBoxText>
            <BottomContentBoxText style={{ minWidth: 400 }}>1 123 123 товаров от 300 магазинов</BottomContentBoxText>
          </BottomContentBox>
          <Empty />
          <BottomContentBox position="bottom" style={{ marginRight: 0 }}>
            <BottomContentBoxTitle variant="subtitleB">market@naimenovanie.kg</BottomContentBoxTitle>
            <BottomContentBoxText>Головной офис</BottomContentBoxText>
            <BottomContentBoxText>920000</BottomContentBoxText>
            <BottomContentBoxText>Кыргызская Республика</BottomContentBoxText>
            <BottomContentBoxText>г. Бишкек, адрес вашей компании</BottomContentBoxText>
          </BottomContentBox>
          <AgreementMobile>
            <BottomContentBoxText variant="bodyB">
              <a href={'#'}>Политика конфиденциальности</a>
            </BottomContentBoxText>
            <BottomContentBoxText variant="bodyB">
              <a href={'#'}>Пользовательское соглашение</a>
            </BottomContentBoxText>
          </AgreementMobile>
        </FooterBottom>
        <AgreementDesktop>
          <BottomContentBoxText>
            <a href={'#'}>Политика конфиденциальности</a>
          </BottomContentBoxText>
          <BottomContentBoxText>
            <a href={'#'}>Пользовательское соглашение</a>
          </BottomContentBoxText>
        </AgreementDesktop>
      </Container>
    </FooterCover>
  );
};
