import * as React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Box, Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import { useSession, signOut } from "next-auth/react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Link from 'next/link';





function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };
    const { data: session } = useSession()

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>My Profile</DialogTitle>
            <List sx={{ pt: 0 }}>
                <ListItem disableGutters>
                    <Link href="/profile">
                        <ListItemButton onClick={handleClose} >
                            <ListItemAvatar>
                                <Avatar >
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={session.user.email} />
                        </ListItemButton>
                    </Link>
                </ListItem>


                <ListItem disableGutters>
                    <ListItemButton
                        autoFocus
                        onClick={() => signOut()}
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <ExitToAppIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Sign Out" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default function Brofile() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }} >
                    <Avatar sx={{ my: 2, display: "block", color: "#FFFFFF" }} src='/imgs/avatar.png' />
                </Box>
            </Button>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}
