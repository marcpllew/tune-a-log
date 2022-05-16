import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
// import SearchDb from '../screens/Search'
// test imports

import { useEffect, useState } from 'react';
// test imports

type musicType = {
    id: number;
    artist_name: string;
    style: string;
    miscellaneous: string;
};

export default function AlertDialog({ SearchDb, music }: any) {
    const [open, setOpen] = React.useState(false);

    const [searchArtist, setSearchArtist] = useState('');
    const [searchStyle, setSearchStyle] = useState('');
    // const [music, setMusic] = useState<musicType | any>([]);
    const [artistId, setArtistId] = useState('');
    // const params = useParams();

    // useEffect(() => {
    //     axios.get(`/api/music/${params.id}`).then((response) => {
    //         setMusic(response.data);
    //     });
    // }, [params.id]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <React.Fragment>
                {/* <BrowserRouter> */}

                <Button variant='outlined' onClick={handleClickOpen}>
                    Delete
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='alert-dialog-title'
                    aria-describedby='alert-dialog-description'>
                    <DialogTitle id='alert-dialog-title'>Delete</DialogTitle>
                    <DialogContent>
                        <DialogContentText id='alert-dialog-description'>
                            Are you sure you would like to delete entry?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={(event: any) => {
                                axios
                                    .delete(`/api/music/${music.id}`)
                                    .then(() => {
                                        SearchDb();
                                        setOpen(false);
                                        // window.location.reload();
                                    });
                            }}>
                            Agree
                        </Button>
                        <Button onClick={handleClose} autoFocus>
                            Disagree
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </div>
    );
}

{
    /* <div className='tunes'>
    {musicList
        .filter((music: any) => {
        })
        .map((music: any) => (
        ))}
</div>; */
}
