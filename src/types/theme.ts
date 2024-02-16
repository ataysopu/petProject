import { zIndex } from '../styles/zindex';
import { GlobalStyle } from '../styles/global';

type zIndexType = typeof zIndex
type ColorsType = typeof GlobalStyle
type Fonts = 'fira_sans' | 'pt_root_ui_regular' | 'pt_root_ui_medium' | 'pt_root_ui_bold'

export interface ITheme {
  colors: ColorsType;

  globalAppContainerWidth: string;

  media: {
    extraLarge: string
    large: string
    medium: string
    small: string
  };

  durations: {
    ms300: number
  };

  zindex: zIndexType;

  fontFace: {
    [key in Fonts]: string
  };
}

export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}
