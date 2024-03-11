import { ITheme, ThemeEnum } from '../types/theme';
import { lightColors } from './colors';
import { zIndex } from './zindex';
import { BREAKEPOINTS } from '../core/config/breakpoints';
import { DefaultTheme } from 'styled-components';

const baseTheme: ITheme = {
  colors: lightColors,

  globalAppContainerWidth: '1232px',

  zindex: zIndex,

  media: {
    extraLarge: `(max-width: ${BREAKEPOINTS.xl}px)`,
    large: `(max-width: ${BREAKEPOINTS.lg}px)`,
    medium: `(max-width: ${BREAKEPOINTS.md}px)`,
    small: `(max-width: ${BREAKEPOINTS.sm}px)`
  },

  durations: {
    ms300: 300
  },

  fontFace: {
    fira_sans: 'Fira Sans',
    pt_root_ui_regular: 'PT Root UI Regular',
    pt_root_ui_medium: 'PT Root UI Medium',
    pt_root_ui_bold: 'PT Root UI Bold'
  }
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,
  colors: lightColors
};
// Добавить палитру тёмных цветов, если будет тёмная тема приложения
export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,
  colors: lightColors
};
