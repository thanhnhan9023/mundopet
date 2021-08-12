import {TextStyle} from 'react-native';

export type ThemeFontWeight = {
  regular: FontBase;
  bold: FontBase;
  xl: FontBase;
  lg: FontBase;
  md: FontBase;
  s: FontBase;
  xs: FontBase;
  '2lg': FontBase;
};

export type FontBase = {
  fontFamily: string;
  fontWeight: TextStyle['fontWeight'];
  fontSize?: TextStyle['fontSize'];
  lineHeight?: TextStyle['lineHeight'];
};

export type ThemeColors = {[key: string]: string};
