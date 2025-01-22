import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import type { DraftPatient } from '../types';
import { usePatientStore } from '../store';

export default function PatientForm() {
  const addPatient = usePatientStore(state => state.addPatient);
  const activeId = usePatientStore(state => state.activeId);
  const patients = usePatientStore(state => state.patients);
  const updatePatient = usePatientStore(state => state.updatePatient);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<DraftPatient>();

  useEffect(() => {
    if (activeId) {
      const activePatient = patients.find(patient => patient.id === activeId);
      if (activePatient) {
        setValue('name', activePatient.name);
        setValue('caretaker', activePatient.caretaker);
        setValue('date', activePatient.date);
        setValue('email', activePatient.email);
        setValue('symptoms', activePatient.symptoms);
      }
    }
  }, [activeId, patients, setValue]);

  const registerPatient = (data: DraftPatient) => {
    if (activeId) {
      updatePatient(data);
      toast('Paciente Actualizado Correctamente', {
        type: 'success',
      });
    } else {
      addPatient(data);
      toast.success('Paciente Registrado Correctamente');
    }
    reset();
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h3' align='center' gutterBottom>
        Seguimiento Pacientes
      </Typography>
      <Typography variant='h6' align='center' gutterBottom>
        Añade Pacientes y{' '}
        <span style={{ color: '#3f51b5', fontWeight: 'bold' }}>
          Administralos
        </span>
      </Typography>
      <Paper sx={{ p: 3, mb: 3 }}>
        <form noValidate onSubmit={handleSubmit(registerPatient)}>
          <Box mb={2}>
            <TextField
              id='name'
              label='Paciente'
              fullWidth
              {...register('name', {
                required: 'El Nombre del paciente es obligatorio',
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Box>
          <Box mb={2}>
            <TextField
              id='caretaker'
              label='Propietario'
              fullWidth
              {...register('caretaker', {
                required: 'El Propietario es obligatorio',
              })}
              error={!!errors.caretaker}
              helperText={errors.caretaker?.message}
            />
          </Box>
          <Box mb={2}>
            <TextField
              id='email'
              label='Email'
              type='email'
              fullWidth
              {...register('email', {
                required: 'El Email es Obligatorio',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email No Válido',
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Box>
          <Box mb={2}>
            <TextField
              id='date'
              label='Fecha Alta'
              type='date'
              fullWidth
              InputLabelProps={{ shrink: true }}
              {...register('date', {
                required: 'La fecha de alta es obligatoria',
              })}
              error={!!errors.date}
              helperText={errors.date?.message}
            />
          </Box>
          <Box mb={2}>
            <TextField
              id='symptoms'
              label='Síntomas'
              multiline
              rows={4}
              fullWidth
              {...register('symptoms', {
                required: 'Los síntomas son obligatorios',
              })}
              error={!!errors.symptoms}
              helperText={errors.symptoms?.message}
            />
          </Box>
          <Button variant='contained' color='primary' type='submit' fullWidth>
            Guardar Paciente
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
