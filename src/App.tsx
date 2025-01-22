// src/App.tsx
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import PatientForm from './components/PatientForm';
import PatientsList from './components/PatientsList';
import 'react-toastify/dist/ReactToastify.css';
import {
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
  const [darkMode, setDarkMode] = useState(false);
  const currentTheme = darkMode ? darkTheme : lightTheme;

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      {/* CssBaseline aplica estilos globales según el tema */}
      <CssBaseline />
      <Container sx={{ mt: 10, position: 'relative' }}>
        <IconButton
          onClick={handleThemeToggle}
          sx={{ position: 'absolute', top: 0, right: 0 }}
          color='inherit'
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Typography variant='h2' align='center' gutterBottom>
          Seguimiento de Pacientes{' '}
          <span style={{ color: currentTheme.palette.primary.main }}>
            Veterinaria
          </span>
        </Typography>
        <Grid container spacing={3} sx={{ mt: 3 }}>
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
