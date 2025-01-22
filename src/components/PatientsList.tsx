// src/components/PatientsList.tsx
import { useState } from 'react';
import { usePatientStore } from '../store';
import PatientDetails from './PatientDetails';
import { Container, Typography, TextField, Box } from '@mui/material';

export default function PatientsList() {
  const patients = usePatientStore(state => state.patients);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPatients = patients.filter(
    patient =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.caretaker.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant='h3' align='center' gutterBottom>
        Listado de Pacientes
      </Typography>
      <Typography variant='h5' align='center' gutterBottom>
        Administra tus{' '}
        <span style={{ color: '#3f51b5', fontWeight: 'bold' }}>
          Pacientes y Citas
        </span>
      </Typography>
      <Box sx={{ mb: 2 }}>
        <TextField
          label='Buscar paciente...'
          variant='outlined'
          fullWidth
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </Box>
      {filteredPatients.length > 0 ? (
        filteredPatients.map(patient => (
          <PatientDetails key={patient.id} patient={patient} />
        ))
      ) : (
        <Typography variant='h6' align='center'>
          No se encontraron pacientes
        </Typography>
      )}
    </Container>
  );
}
