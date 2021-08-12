import {Platform} from 'react-native';
import {ThemeFontWeight} from './types';

export const Fonts: ThemeFontWeight = {
  regular: {
    fontWeight: 'normal',
    fontSize: 14,
    fontFamily: Platform.select({
      ios: 'HiraginoSans-W3',
      android: 'Roboto',
      default: 'System',
    }),
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: Platform.select({
      ios: 'HiraginoSans-W3',
      android: 'Roboto',
      default: 'System',
    }),
  },
  xl: {
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 26,
    fontFamily: Platform.select({
      ios: 'HiraginoSans-W3',
      android: 'Roboto',
      default: 'System',
    }),
  },
  '2lg': {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Platform.select({
      ios: 'HiraginoSans-W3',
      android: 'Roboto',
      default: 'System',
    }),
  },
  lg: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 22,
    fontFamily: Platform.select({
      ios: 'HiraginoSans-W3',
      android: 'Roboto',
      default: 'System',
    }),
  },
  md: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 22,
    fontFamily: Platform.select({
      ios: 'HiraginoSans-W3',
      android: 'Roboto',
      default: 'System',
    }),
  },
  s: {
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    fontFamily: Platform.select({
      ios: 'HiraginoSans-W3',
      android: 'Roboto',
      default: 'System',
    }),
  },
  xs: {
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 14,
    fontFamily: Platform.select({
      ios: 'HiraginoSans-W3',
      android: 'Roboto',
      default: 'System',
    }),
  },
};
