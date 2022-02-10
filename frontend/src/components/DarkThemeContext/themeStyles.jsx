import { createTheme } from '@mui/material/styles';

import {
  DARKTHEME_BASE_COLOR,
  DARKTHEME_ERROR_COLOR,
  DARKTHEME_HELPER_COLOR,
  DARKTHEME_INPUT_BG_COLOR,
  DARKTHEME_NAVBAR_COLOR,
  DARKTHEME_PRIMARY_COLOR,
  DARKTHEME_SECONDARY_COLOR,
  DARKTHEME_TEXT_COLOR,
  DARKTHEME_TITLE_COLOR,
  LIGHTTHEME_BACKGROUND_COLOR,
  LIGHTTHEME_BASE_COLOR,
  LIGHTTHEME_ERROR_COLOR,
  LIGHTTHEME_HELPER_COLOR,
  LIGHTTHEME_INPUT_BG_COLOR,
  LIGHTTHEME_LABEL_COLOR,
  LIGHTTHEME_NAVBAR_COLOR,
  LIGHTTHEME_PRIMARY_COLOR,
  LIGHTTHEME_SECONDARY_COLOR,
  LIGHTTHEME_SUBTITLE_COLOR,
  LIGHTTHEME_TEXT_COLOR,
  LIGHTTHEME_TITLE_COLOR,
} from '../../constants/colors';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: LIGHTTHEME_BASE_COLOR,
    },
    secondary: {
      main: LIGHTTHEME_SECONDARY_COLOR,
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    label: {
      main: LIGHTTHEME_LABEL_COLOR,
    },
    error: {
      main: LIGHTTHEME_ERROR_COLOR,
    },
    helper: {
      main: LIGHTTHEME_HELPER_COLOR,
    },
    background: {
      default: LIGHTTHEME_BASE_COLOR,
    },
    title: {
      main: LIGHTTHEME_TITLE_COLOR,
      light: LIGHTTHEME_SUBTITLE_COLOR,
    },
    text: {
      main: LIGHTTHEME_TEXT_COLOR,
    },
    navbar: {
      main: LIGHTTHEME_NAVBAR_COLOR,
    },
    datetime: {
      mainFont: LIGHTTHEME_PRIMARY_COLOR,
      mainBackground: LIGHTTHEME_SECONDARY_COLOR,
      currentDayFont: LIGHTTHEME_PRIMARY_COLOR,
      currentDayBackground: LIGHTTHEME_BACKGROUND_COLOR,
      weekDayFont: '#fff',
    },
    tonalOffset: 0.1,
  },

  components: {
    MuiFilledInput: {
      styleOverrides: {
        input: {
          backgroundColor: LIGHTTHEME_INPUT_BG_COLOR,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        filled: {
          backgroundColor: LIGHTTHEME_INPUT_BG_COLOR,
        },
      },
    },
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          backgroundColor: LIGHTTHEME_BASE_COLOR,
          color: LIGHTTHEME_PRIMARY_COLOR,
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          backgroundColor: LIGHTTHEME_BACKGROUND_COLOR,
          color: '#fff',
          fontWeight: 900,
          '&.Mui-selected': {
            backgroundColor: LIGHTTHEME_PRIMARY_COLOR,
            color: LIGHTTHEME_TEXT_COLOR,
            '&:hover, &:focus, &.Mui-focusVisible': {
              backgroundColor: LIGHTTHEME_PRIMARY_COLOR,
              color: LIGHTTHEME_TEXT_COLOR,
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
      main: DARKTHEME_BASE_COLOR,
    },
    secondary: {
      main: DARKTHEME_TITLE_COLOR,
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    label: {
      main: LIGHTTHEME_LABEL_COLOR,
    },
    error: {
      main: DARKTHEME_ERROR_COLOR,
    },
    helper: {
      main: DARKTHEME_HELPER_COLOR,
    },
    background: {
      default: DARKTHEME_NAVBAR_COLOR,
    },
    title: {
      main: DARKTHEME_TITLE_COLOR,
      light: LIGHTTHEME_SUBTITLE_COLOR,
    },
    text: {
      main: DARKTHEME_TEXT_COLOR,
    },
    navbar: {
      main: DARKTHEME_BASE_COLOR,
    },
    datetime: {
      mainFont: DARKTHEME_SECONDARY_COLOR,
      mainBackground: LIGHTTHEME_SECONDARY_COLOR,
      currentDayFont: LIGHTTHEME_PRIMARY_COLOR,
      currentDayBackground: LIGHTTHEME_BACKGROUND_COLOR,
      weekDayFont: '#000',
    },
    tonalOffset: 0.1,
  },

  components: {
    MuiFilledInput: {
      styleOverrides: {
        input: {
          backgroundColor: DARKTHEME_INPUT_BG_COLOR,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        filled: {
          backgroundColor: DARKTHEME_INPUT_BG_COLOR,
        },
      },
    },
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          backgroundColor: DARKTHEME_NAVBAR_COLOR,
          color: DARKTHEME_TITLE_COLOR,
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          backgroundColor: DARKTHEME_PRIMARY_COLOR,
          color: '#000',
          fontWeight: 900,
          '&.Mui-selected': {
            backgroundColor: LIGHTTHEME_PRIMARY_COLOR,
            color: LIGHTTHEME_TEXT_COLOR,
            '&:hover, &:focus, &.Mui-focusVisible': {
              backgroundColor: LIGHTTHEME_PRIMARY_COLOR,
              color: LIGHTTHEME_TEXT_COLOR,
            },
          },
        },
      },
    },
  },
});

export { darkTheme, lightTheme };
