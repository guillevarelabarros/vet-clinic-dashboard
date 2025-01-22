// src/App.tsx
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import PatientForm from './components/PatientForm';
import PatientsList from './components/PatientsList';
import 'react-toastify/dist/ReactToastify.css';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Grid,
  IconButton,
  CssBaseline,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
  // Cargar el tema preferido desde localStorage
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('preferred-theme');
    return saved === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('preferred-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const currentTheme = darkMode ? darkTheme : lightTheme;

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      {/* CssBaseline aplica estilos globales según el tema */}
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            Veterinaria - Seguimiento de Pacientes
          </Typography>
          <IconButton color='inherit' onClick={handleThemeToggle}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <PatientForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <PatientsList />
          </Grid>
        </Grid>
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
