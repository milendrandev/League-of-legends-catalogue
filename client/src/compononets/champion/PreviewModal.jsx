import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function PreviewModal({ coverImage, characterImage }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined"
                sx={{
                    width: '20%',
                    fontSize: '14px',
                    margin: 0, padding: 0,
                    color: '#0f0',
                    border: 'none'
                }}
                onClick={handleClickOpen}>
                Preview
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ color: '#222' }}
            >
                <DialogTitle id="alert-dialog-title">
                    Image
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <img src={coverImage} alt="" />
                        <img src={characterImage} alt="" />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}