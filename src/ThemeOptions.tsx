import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface ThemeOptions {
    cssVariables?: boolean;
  }
}

export const themeOptions: ThemeOptions = {
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: '#FFC971',
      contrastText: '#6c5c51',
    },
    secondary: {
      main: '#6c5c51',
    },
    background: {
      default: '#e2daca',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Macondo',
  },
  shape: {
    borderRadius: 16,
  },
};