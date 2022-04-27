import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import StyleDropdown from './components/StyleInputField';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CardContent from '@mui/material/CardContent';

function Home(props: any) {
    const [value, setValue] = useState('');
    const [musicList, setMusicList] = useState([]);
    const [artistValue, setArtistValue] = useState('');
    const [styleValue, setStyleValue] = useState('');
    const [miscellaneousValue, setMiscellaneousValue] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleChangeArtistValue = (event: any) => {
        setArtistValue(event.target.value);
    };

    const handleChangeStyleValue = (newValue: any) => {
        setStyleValue(newValue);
        console.log(newValue);
    };

    const handleChangeMiscellaneousValue = (event: any) => {
        setMiscellaneousValue(event.target.value);
    };

    const handleSubmit = (event: any) => {
        // axios request
        // create piece of state to call showMessage
        // when showMessage is true redor a message
        // error logic to go here
        setShowErrorMessage(false);
        setShowMessage(false);
        setArtistValue('');
        setStyleValue('');
        setMiscellaneousValue('');
        event.preventDefault();
        axios
            .post(`/api/music/`, {
                artist_name: artistValue || undefined,
                style: styleValue || undefined,
                miscellaneous: miscellaneousValue,
            })
            .then((response: any) => {
                console.log(response.data);
                if ('error' in response.data) {
                    setShowErrorMessage(true);
                    return;
                }

                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 5000);
            })
            .catch((response: any) => {
                setShowErrorMessage(true);
            });
        // .then((response: any) => {console.log(response.data)})
    };

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}

                // message to be rendored here
            >
                {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} /> */}
                <MusicNoteIcon />
                <Typography component='h1' variant='h4'>
                    Store new Tunes
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
                                autoComplete='artist_name'
                                value={artistValue}
                                onChange={handleChangeArtistValue}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <StyleDropdown
                                styleValue={styleValue}
                                handleChangeStyleValue={setStyleValue}
                            />

                            {/* <TextField
                  required
                  fullWidth
                  id="style"  
                  label="Style"  
                  name="style"
                  autoComplete="style"
                  value={styleValue}
                  onChange={handleChangeStyleValue}
                    onChange={(event: any) => {
                    setStyleValue(event.target.value);
                    
                }}
                  
                /> */}
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                // required
                                fullWidth
                                id='miscellaneous'
                                label='Miscellaneous'
                                name='miscellaneous'
                                autoComplete='miscellaneous'
                                value={miscellaneousValue}
                                onChange={handleChangeMiscellaneousValue}
                                //     onChange={(event: any) => {
                                //     setMiscellaneousValue(event.target.value);

                                // }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        onClick={handleSubmit}
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}>
                        Create entry
                    </Button>
                    {/* <Box> {showMessage && <p>Artist input success</p> }</Box> */}
                </Box>

                <React.Fragment>
                    <CardContent>
                        <Typography variant='h5' component='div'>
                            {showMessage && <p>Artist input success!</p>}
                        </Typography>
                    </CardContent>
                </React.Fragment>

                <React.Fragment>
                    <CardContent>
                        <Typography variant='h5' component='div'>
                            {showErrorMessage && (
                                <p>Error: Fill in manditory fields</p>
                            )}
                        </Typography>
                    </CardContent>
                </React.Fragment>
            </Box>
        </Container>
    );
}
export default Home;
