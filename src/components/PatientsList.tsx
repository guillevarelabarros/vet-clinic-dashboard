import { usePatientStore } from '../store';
import PatientDetails from './PatientDetails';
import { Container, Typography } from '@mui/material';

export default function PatientsList() {
  const patients = usePatientStore(state => state.patients);

  return (
    <Container sx={{ mt: 4 }}>
      {patients.length ? (
        <>
          <Typography variant='h3' align='center' gutterBottom>
            Listado de Pacientes
          </Typography>
          <Typography variant='h5' align='center' gutterBottom>
            Administra tus{' '}
            <span style={{ color: '#3f51b5', fontWeight: 'bold' }}>
              Pacientes y Citas
            </span>
          </Typography>
          {patients.map(patient => (
            <PatientDetails key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <Typography variant='h3' align='center' gutterBottom>
            No hay pacientes
          </Typography>
          <Typography variant='h5' align='center' gutterBottom>
            Comienza agregando pacientes y aparecerán en este lugar
          </Typography>
        </>
      )}
    </Container>
  );
}
