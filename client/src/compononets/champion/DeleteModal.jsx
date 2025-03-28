import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import championService from '../../services/championService';
import { useNavigate } from 'react-router';

export default function DeleteModal({ championId, accessToken }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onDeleteClick = async () => {
    await championService.delete(championId, accessToken);
    navigate('/catalogue')
  }

  return (
    <React.Fragment>
      <Button sx={{ width: '200px', margin: '1em 0' }} variant="contained" color='error' onClick={handleClickOpen}>
        Delete champion
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete your champion?"}
        </DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onDeleteClick}>Delete</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}