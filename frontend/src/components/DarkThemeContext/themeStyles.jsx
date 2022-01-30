import { createTheme } from '@mui/material/styles';

import {
  DARKMODE_BASE_COLOR,
  DARKMODE_NAVBAR_COLOR,
  DARKMODE_SUBTITLE_COLOR,
  DARKMODE_TITLE_COLOR,
  LIGHTMODE_BACKGROUND_COLOR,
  LIGHTMODE_BASE_COLOR,
  LIGHTMODE_ERROR_COLOR,
  LIGHTMODE_LABEL_COLOR,
  LIGHTMODE_NAVBAR_COLOR,
  LIGHTMODE_PRIMARY_COLOR,
  LIGHTMODE_SECONDARY_COLOR,
  LIGHTMODE_SUBTITLE_COLOR,
  LIGHTMODE_TEXT_COLOR,
  LIGHTMODE_TITLE_COLOR,
} from '../../constants/colors';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: LIGHTMODE_BASE_COLOR,
    },
    secondary: {
      main: LIGHTMODE_SECONDARY_COLOR,
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    label: {
      main: LIGHTMODE_LABEL_COLOR,
    },
    error: {
      main: LIGHTMODE_ERROR_COLOR,
    },
    background: {
      default: LIGHTMODE_BASE_COLOR,
    },
    title: {
      main: LIGHTMODE_TITLE_COLOR,
      light: LIGHTMODE_SUBTITLE_COLOR,
    },
    navbar: {
      main: LIGHTMODE_NAVBAR_COLOR,
    },
    datetime: {
      mainFont: LIGHTMODE_PRIMARY_COLOR,
      mainBackground: LIGHTMODE_SECONDARY_COLOR,
      currentDayFont: LIGHTMODE_PRIMARY_COLOR,
      currentDayBackground: LIGHTMODE_BACKGROUND_COLOR,
    },
    tonalOffset: 0.1,
  },

  components: {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          backgroundColor: LIGHTMODE_SECONDARY_COLOR,
          color: LIGHTMODE_PRIMARY_COLOR,
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          backgroundColor: LIGHTMODE_BACKGROUND_COLOR,
          color: LIGHTMODE_PRIMARY_COLOR,
          fontWeight: 900,
          '&.Mui-selected': {
            backgroundColor: LIGHTMODE_PRIMARY_COLOR,
            color: LIGHTMODE_TEXT_COLOR,
            '&:hover, &:focus, &.Mui-focusVisible': {
              backgroundColor: LIGHTMODE_PRIMARY_COLOR,
              color: LIGHTMODE_TEXT_COLOR,
            },
          },
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: LIGHTMODE_BASE_COLOR,
    },
    secondary: {
      main: LIGHTMODE_SECONDARY_COLOR,
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    label: {
      main: LIGHTMODE_LABEL_COLOR,
    },
    error: {
      main: LIGHTMODE_ERROR_COLOR,
    },
    background: {
      default: LIGHTMODE_BASE_COLOR,
    },
    title: {
      main: LIGHTMODE_TITLE_COLOR,
      light: LIGHTMODE_SUBTITLE_COLOR,
    },
    navbar: {
      main: DARKMODE_NAVBAR_COLOR,
    },
    datetime: {
      mainFont: LIGHTMODE_PRIMARY_COLOR,
      mainBackground: LIGHTMODE_SECONDARY_COLOR,
      currentDayFont: LIGHTMODE_PRIMARY_COLOR,
      currentDayBackground: LIGHTMODE_BACKGROUND_COLOR,
    },
    tonalOffset: 0.1,
  },

  components: {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          backgroundColor: LIGHTMODE_SECONDARY_COLOR,
          color: LIGHTMODE_PRIMARY_COLOR,
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          backgroundColor: LIGHTMODE_BACKGROUND_COLOR,
          color: LIGHTMODE_PRIMARY_COLOR,
          fontWeight: 900,
          '&.Mui-selected': {
            backgroundColor: LIGHTMODE_PRIMARY_COLOR,
            color: LIGHTMODE_TEXT_COLOR,
            '&:hover, &:focus, &.Mui-focusVisible': {
              backgroundColor: LIGHTMODE_PRIMARY_COLOR,
              color: LIGHTMODE_TEXT_COLOR,
            },
          },
        },
      },
    },
  },
});

export { darkTheme, lightTheme };
