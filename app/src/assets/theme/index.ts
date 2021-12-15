import { Property } from 'csstype';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      tint: {
        primary: Property.Color;
        primaryHover: Property.Color;
        primaryPress: Property.Color;

        secondary: Property.Color;
        secondaryHover: Property.Color;
        secondaryPress: Property.Color;
      };

      surface: {
        primary: Property.Color;
        primaryHover: Property.Color;
        primaryPress: Property.Color;

        secondary: Property.Color;
        secondaryHover: Property.Color;
        secondaryPress: Property.Color;

        tertiary: Property.Color;
        tertiaryHover: Property.Color;
        tertiaryPress: Property.Color;
      };

      disable: Property.Color;

      notice: {
        info: Property.Color;
        infoHover: Property.Color;
        infoPress: Property.Color;

        success: Property.Color;
        successHover: Property.Color;
        successPress: Property.Color;

        warning: Property.Color;
        warningHover: Property.Color;
        warningPress: Property.Color;

        error: Property.Color;
        errorHover: Property.Color;
        errorPress: Property.Color;
      };

      lines: {
        separator: Property.Color;
        borderline: Property.Color;
      };

      background: {
        primary: Property.Color;
        secondary: Property.Color;
      };

      font: {
        primary: Property.Color;
        secondary: Property.Color;
        tertiary: Property.Color;
        quaternary: Property.Color;

        success: Property.Color;
        warning: Property.Color;
        error: Property.Color;
        info: Property.Color;
        accent: Property.Color;
      };

      separator: {
        opaque: Property.Color;
        transparent: Property.Color;
      };

      base: {
        white: Property.Color;
        black: Property.Color;
      };
    };
    shadow: {
      primary: Property.BoxShadow;
      secondary: Property.BoxShadow;
      tertiary: Property.BoxShadow;
    };
  }
}

import { DarkBlueTheme } from './DarkBlueTheme';
import { LightTheme } from './LightTheme';
export { DarkBlueTheme, LightTheme };
