/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import championService from '../../services/championService';
import { useNavigate } from 'react-router';

export default function BuyModal({ champion, championId, ownerId }) {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onBuyClick = async () => {
        await championService.update(champion, championId, ownerId);
        navigate('/collection')
        //setChampions(state => state.filter(champ => champ._id !== champId));
    }

    return (
        <React.Fragment>
            <Button sx={{ width: '200px', marginTop: '1.5em' }} variant="contained" color='success' onClick={handleClickOpen}>
                Buy
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to buy this champion?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        By clicking the buy button, you agree to our TERMS & CONDITIONS.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={onBuyClick}>Buy</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}