import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#242334',
  accent: '#FF6A65',
  lightGrey: '#F1F1F3',
  darkGrey: '#838383',
  white: '#FFFFFF',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 20,
  h2: 18,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {fontFamily: 'Montserrat-Bold', fontSize: SIZES.largeTitle},
  h1: {fontFamily: 'Montserrat-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Montserrat-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Montserrat-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Montserrat-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {
    fontFamily: 'Montserrat-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Montserrat-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Montserrat-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Montserrat-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Montserrat-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

export default {COLORS, SIZES, FONTS};
