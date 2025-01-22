import { toast } from 'react-toastify';
import { Patient } from '../types';
import PatientDetailItem from './PatientDetailItem';
import { usePatientStore } from '../store';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

type PatientDetailsProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {
  const deletePatient = usePatientStore(state => state.deletePatient);
  const getPatientById = usePatientStore(state => state.getPatientById);

  const handleClick = () => {
    deletePatient(patient.id);
    toast('Paciente Eliminado', {
      type: 'error',
    });
  };

  return (
    <Paper elevation={3} sx={{ m: 2, p: 2 }}>
      <PatientDetailItem label='ID' data={patient.id} />
      <PatientDetailItem label='Nombre' data={patient.name} />
      <PatientDetailItem label='Propietario' data={patient.caretaker} />
      <PatientDetailItem label='Email' data={patient.email} />
      <PatientDetailItem label='Fecha Alta' data={patient.date.toString()} />
      <PatientDetailItem label='Síntomas' data={patient.symptoms} />

      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        spacing={2}
        justifyContent='space-between'
        sx={{ mt: 2 }}
      >
        <Button
          variant='contained'
          color='primary'
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </Button>
        <Button variant='contained' color='error' onClick={handleClick}>
          Eliminar
        </Button>
      </Stack>
    </Paper>
  );
}
