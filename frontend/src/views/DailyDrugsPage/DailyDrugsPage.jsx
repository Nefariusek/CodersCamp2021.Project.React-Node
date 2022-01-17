import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const dailyDrugsPageTheme = createTheme({
  palette: {
    secondary: {
      main: '#fcd433',
    },
    background: {
      default: '#48cae4',
    },
  },
});

const DailyDrugsPage = () => {
  return (
    <ThemeProvider theme={dailyDrugsPageTheme}>
      <Container align="center">
        <CssBaseline />
        Text
      </Container>
    </ThemeProvider>
  );
};

export default DailyDrugsPage;
