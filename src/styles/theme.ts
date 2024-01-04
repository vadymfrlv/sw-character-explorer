import { BREAKPOINTS } from 'constants/breakpoints';

const theme = {
  colors: {
    white: '#FFFFFF',
    yellow: '#FFE81F',
    lightsaberBlue: '#2E78F8',
    lightsaberRed: '#EB212E',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
  },
  screens: {
    mob: BREAKPOINTS.MOB,
    tab: BREAKPOINTS.TAB,
    note: BREAKPOINTS.NOTE,
    desk: BREAKPOINTS.DESK,
  },
};

export default theme;
