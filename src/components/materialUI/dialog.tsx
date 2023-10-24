import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

type TResponsiveDialog={
    setSignup: (e:boolean)=>boolean;
}
export default function ResponsiveDialog({setSignup}:TResponsiveDialog) {
const [open, setOpen] = React.useState(true);
const theme = useTheme();
const fullScreen = useMediaQuery(theme.breakpoints.down('md'));



const handleClose = () => {
    setOpen(false);
    setSignup(false)
};

return (
    <div>

    <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
    >
        <DialogTitle id="responsive-dialog-title">
        {"Welcome to HyperShop"}
        </DialogTitle>
        <DialogContent>
        <DialogContentText>
            Congrats, You joined us , Enjoy Shopping
        </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Link style={{ textDecoration: 'none'}} className='primary-btn' to="/" onClick={handleClose}>
            Login
        </Link>
        </DialogActions>
    </Dialog>
    </div>
);
}