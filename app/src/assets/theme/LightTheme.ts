import { Theme } from '@emotion/react'

export const LightTheme: Theme = {
  color: {
    tint: {
      primary: '#448FFC',
      primaryHover: '#4E99FF',
      primaryPress: '#3A85F2',

      secondary: '#F29E3A',
      secondaryHover: '#FCB24E',
      secondaryPress: '#E89430',
    },

    surface: {
      primary: '#ffffff',
      primaryHover: '#F5F5F5',
      primaryPress: '#f5f5f9',

      secondary: '#F9F9FA',
      secondaryHover: '#ffffff',
      secondaryPress: '#EFEFF0',

      tertiary: '#F3F3F4',
      tertiaryHover: '#FEFEFE',
      tertiaryPress: '#E9E9EA',
    },

    lines: {
      separator: 'rgba(53, 63, 78, 0.07)',
      borderline: '#D8DEE8',
    },

    background: {
      primary: '#F8F8FA',
      secondary: '#F0F0F2',
    },

    disable: '#E9E9EA',
    font: {
      primary: 'rgba(0, 0, 0, 0.88)',
      secondary: 'rgba(0, 0, 0, 0.55)',
      tertiary: 'rgba(0, 0, 0, 0.33)',
      quaternary: 'rgba(0, 0, 0, 0.18)',

      success: '#63b71e',
      warning: '#faad14',
      error: '#F86F6F',
      info: '#1890ff',
      accent: '#6C61D0',
    },
    notice: {
      info: '#448FFC',
      infoHover: '#4E99FF',
      infoPress: '#3A85F2',

      success: '#7FC723',
      successHover: '#89D12D',
      successPress: '#75BD19',

      warning: '#F8B532',
      warningHover: '#FFBF3C',
      warningPress: '#EEAB28',

      error: '#F47183',
      errorHover: '#FE7B8D',
      errorPress: '#EA6779',
    },
    separator: {
      opaque: 'rgba(0, 0, 0, 0.06)',
      transparent: 'rgba(0, 0, 0, 0.06)',
    },
    base: {
      black: '#000000',
      white: '#ffffff',
    },
  },
  shadow: {
    primary: '0px 0px 4px rgba(0, 0, 0, 0.05), 1px 1px 4px rgba(0, 0, 0, 0.05)',
    secondary: '1px 1px 6px rgba(42, 47, 60, 0.06), 3px 3px 10px rgba(33, 34, 43, 0.06)',
    tertiary: '1px 1px 10px rgba(33, 50, 69, 0.06), 6px 6px 20px rgba(33, 34, 43, 0.08)',
  },
}
