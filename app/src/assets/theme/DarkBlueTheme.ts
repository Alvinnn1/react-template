import { Theme } from '@emotion/react';
import { Property } from 'csstype';

export const DarkBlueTheme: Theme = {
  color: {
    tint: {
      primary: '#7065D8',
      primaryHover: '#7A6FE2',
      primaryPress: '#665BCE',

      secondary: '#4A94FF',
      secondaryHover: '#549EFF',
      secondaryPress: '#408AF5',
    },

    surface: {
      primary: '#242731',
      primaryHover: '#2E313B',
      primaryPress: '#1A1D27',

      secondary: '#1E2129',
      secondaryHover: '#282B33',
      secondaryPress: '#14171F',

      tertiary: '#181B22',
      tertiaryHover: '#22252C',
      tertiaryPress: '#0E1118',
    },

    lines: {
      separator: 'rgba(78, 92, 109, 0.18)',
      borderline: '#3E465E',
    },
    background: {
      primary: '#1C1E24',
      secondary: '#14161B',
    },

    disable: '#3A3A3A',
    font: {
      primary: 'rgba(255, 255, 255, 0.88)',
      secondary: 'rgba(255, 255, 255, 0.55)',
      tertiary: 'rgba(255, 255, 255, 0.33)',
      quaternary: 'rgba(255, 255, 255, 0.18)',

      error: '#FA7878',
      info: '#2998FF',
      success: '#68C11F',
      warning: '#FDB321',
      accent: '#7065D8',
    },
    notice: {
      info: '#4A94FF',
      infoHover: '#549EFF',
      infoPress: '#408AF5',

      success: '#82CC24',
      successHover: '#8CD62E',
      successPress: '#78C21A',

      warning: '#FFBC37',
      warningHover: '#FFC641',
      warningPress: '#F5B22D',

      error: '#FD7789',
      errorHover: '#FF8193',
      errorPress: '#F36D7F',
    },
    separator: {
      opaque: '#108CFF',
      transparent: '#108CFF',
    },
    base: {
      black: '#000000',
      white: '#ffffff',
    },
  },
  shadow: {
    primary: '0px 0px 6px rgba(0, 0, 0, 0.4), 4px 4px 10px rgba(0, 0, 0, 0.2)',
    secondary: '2px 2px 12px rgba(25, 27, 33, 0.6), 6px 6px 22px rgba(18, 19, 23, 0.4)',
    tertiary: '3px 3px 16px 1px rgba(13, 13, 15, 0.8), 10px 10px 22px 8px rgba(19, 22, 27, 0.6)',
  },
};
