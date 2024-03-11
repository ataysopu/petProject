import { AppLogoImg, AppLogoLink } from './styled';
import { APP_LINKS } from '../routes/links';
import Logo from 'assets/icons/Color.svg';

export const AppLogo = () => {
  return (
    <AppLogoLink to={APP_LINKS.app_root}>
      <AppLogoImg src={Logo} alt="logo" />
    </AppLogoLink>
  );
};