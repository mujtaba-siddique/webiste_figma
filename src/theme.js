import { createTheme } from '@mui/material/styles';

// Define the theme
const theme = createTheme({
  // 1. Palette: Define global colors
  palette: {
    primary: {
      main: '#FF6F61', // Warm coral color for primary
      light: '#FF9E8A',
      dark: '#C64E3A',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4CAF50', // Fresh green for secondary
      light: '#80E27E',
      dark: '#087F23',
      contrastText: '#ffffff',
    },
    background: {
      default: '#FAFAFA', // Light grey background for a fresh feel
      paper: '#ffffff',
    },
    text: {
      primary: '#212121', // Dark text for readability
      secondary: '#757575',
    },
    error: {
      main: '#D32F2F', // Red for errors
    },
    success: {
      main: '#388E3C', // Green for success messages
    },
  },

  // 2. Typography: Responsive font scaling
  typography: {
    fontFamily: '"Bricolage Grotesque","Inter", "Roboto", "Helvetica", "Arial", sans-serif', // Updated font family
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#212121',
      '@media (max-width:600px)': {
        fontSize: '2.5rem', // Adjust font size for smaller screens
      },
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#212121',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#212121',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#757575',
      '@media (max-width:600px)': {
        fontSize: '0.95rem',
      },
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#757575',
      '@media (max-width:600px)': {
        fontSize: '0.8rem',
      },
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: 1.5,
      fontSize: '0.875rem',
    },
  },

  // 3. Spacing: Define responsive spacing
  spacing: 8, // Multiplier for consistent spacing

  // 4. Components: Customize specific MUI components
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 20px',
          fontSize: '0.875rem',
          '@media (max-width:600px)': {
            padding: '8px 16px',
            fontSize: '0.8rem',
          },
        },
        containedPrimary: {
          backgroundColor: '#FF6F61', // Coral button color
          '&:hover': {
            backgroundColor: '#C64E3A', // Darker shade on hover
          },
        },
        outlined: {
          borderColor: '#FF6F61',
          color: '#FF6F61',
          '&:hover': {
            borderColor: '#C64E3A',
            backgroundColor: '#FFEBEE',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#212121',
        },
        body1: {
          color: '#757575',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)', // Smooth shadow for depth
          '@media (max-width:600px)': {
            borderRadius: '12px',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px',
          '@media (max-width:600px)': {
            marginBottom: '12px',
          },
        },
      },
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          fontFamily: '"Bricolage Grotesque", "Roboto", "Helvetica", "Arial", sans-serif', // Font family updated here as well
          backgroundColor: '#FAFAFA',
          color: '#212121',
          '@media (max-width:600px)': {
            padding: '0 8px', // Add padding for smaller devices
          },
        },
      },
    },
  },

  // 5. Shape: Consistent border radius
  shape: {
    borderRadius: 8,
  },

  // 6. Breakpoints: Define breakpoints for responsiveness
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
