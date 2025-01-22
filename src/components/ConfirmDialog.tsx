// src/components/ConfirmDialog.tsx

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

type ConfirmDialogProps = {
  open: boolean;
  title?: string;
  content?: string;
  onConfirm: () => void;
  onClose: () => void;
};

export default function ConfirmDialog({
  open,
  title,
  content,
  onConfirm,
  onClose,
}: ConfirmDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title || 'Confirmación'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {content || '¿Estás seguro de continuar?'}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onConfirm} color='error'>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
