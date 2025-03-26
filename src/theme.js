import { createTheme } from '@mui/material/styles';

const neonTheme = createTheme({
  palette: {
    primary: {
      main: '#39FF14', // Neon Green
      heading : '#FFF',
    },
    secondary: {
      main: '#FF00FF', // Neon Pink
    },
    background: {
      default: '#111111', // Dark Background
      paper: '#222222', // Darker Background for Paper
    },
    text: {
      primary: '#FFFFFF', // White Text
      secondary: '#39FF14', // Neon Green Text
    },
  },
  typography: {
    fontFamily: '"Orbitron", sans-serif',
    allVariants: {
      color: '#FFFFFF',
    },
  },
});

export default neonTheme;
