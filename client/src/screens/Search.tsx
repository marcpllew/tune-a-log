import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import StyleDropdown from './StyleInputField';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import DeleteIcon from '@mui/icons-material/Delete';

// import SearchInfoDb from './components/SearchInfo';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AlertDialog from '../components/AlertDialog';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// end of delete button function
const Search = () => {
    const [musicList, setMusicList] = useState<any[]>([]);
    const [searchArtist, setSearchArtist] = useState('');
    const [searchStyle, setSearchStyle] = useState('');
    const [notify, setNotify] = useState({
        isOpen: false,
        message: '',
        type: '',
    });

    const SearchDb = () => {
        axios
            .get(`/api/music?style=${searchStyle}&artist_name=${searchArtist}`)
            .then((response: any) => response.data)
            .then((data: any) => {
                setMusicList(data);
            });
    };

    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <LibraryMusicIcon />

                <Typography component='h2' variant='h4'>
                    Search Artist/Style
                </Typography>
                <Box
                    component='form'
                    noValidate
                    onSubmit={() => {}}
                    sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}></Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id='artist_name'
                                label='Artist Name'
                                name='artist_name'
                                type='text'
                                autoComplete='artist_name'
                                autoFocus
                                value={searchArtist}
                                onChange={(event: any) => {
                                    setSearchArtist(event.target.value);
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <StyleDropdown
                                styleValue={searchStyle}
                                handleChangeStyleValue={setSearchStyle}
                            />
                        </Grid>
                    </Grid>

                    <Button
                        onClick={(event: any) => {
                            SearchDb();
                        }}
                        fullWidth
                        variant='contained'
                        sx={{
                            mt: 3,
                            mb: 2,
                        }}>
                        Search
                    </Button>

                    <div className='tunes'>
                        {/* <BrowserRouter> */}
                        {musicList
                            .filter((music: any) => {
                                if (searchArtist === '' && searchStyle === '') {
                                    return false;
                                } else if (
                                    music.artist_name
                                        .toLowerCase()
                                        .includes(searchArtist.toLowerCase()) &&
                                    music.style
                                        .toLowerCase()
                                        .includes(searchStyle.toLowerCase())
                                ) {
                                    return true;
                                }
                            })
                            .map((music: any) => (
                                <React.Fragment>
                                    <CardContent>
                                        <p key={music.id}> </p>
                                        <Typography
                                            variant='h5'
                                            component='div'>
                                            {music.artist_name}
                                        </Typography>
                                        <Typography
                                            sx={{ mb: 1.5 }}
                                            color='text.secondary'>
                                            {music.style}
                                        </Typography>
                                        <CardActions>
                                            {/* start of delete button */}
                                            {/* <AlertDialog /> */}
                                            <AlertDialog music={music} />
                                            {/* end of delete button */}
                                            <Link
                                                to={`/searchInfo/${music.id}`}>
                                                <Button
                                                    fullWidth
                                                    size='small'
                                                    variant='contained'
                                                    sx={{ mt: 0, mb: 5 }}>
                                                    Artist info
                                                </Button>
                                            </Link>
                                        </CardActions>
                                    </CardContent>
                                </React.Fragment>
                            ))}

                        {/* </BrowserRouter> */}
                    </div>
                </Box>
            </Box>
        </Container>
    );
};

export default Search;

// {
//     <Button
//     style={{
//         maxWidth: '60px',
//         maxHeight: '30px',
//         minWidth: '30px',
//         minHeight: '30px',
//     }}
//     size='small'
//     onClick={(event: any) => {
//         axios.delete(`/api/music/${music.id}`).then(() => {
//             SearchDb();
//         });
//     }}
//     fullWidth
//     variant='outlined'
//     sx={{ mt: 0, mb: 5 }}>
//     delete
// </Button>
// }
