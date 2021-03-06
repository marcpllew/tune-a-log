import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Copyright(props: any) {
    return (
        <Typography
            variant='body2'
            color='text.secondary'
            align='center'
            {...props}>
            {'Copyright © '}
            Tune-a-Log {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// const theme = createTheme();

export default function Login() {
    const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        axios
            .post('/api/sessions', {
                username: username,
                password: password,
            })
            .then((response: any) => {
                console.log(response);
            });
    };

    return (
        // <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Login
                </Typography>
                <Box
                    // sx={{ bgcolor: 'secondary.main' }}
                    component='form'
                    // onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}>
                    <TextField
                        margin='normal'
                        sx={{ text: 'red' }}
                        required
                        fullWidth
                        id='username'
                        label='User Name'
                        name='username'
                        autoComplete='username'
                        autoFocus
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />

                    {/* <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email'
                            name='email'
                            autoComplete='email'
                            autoFocus
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        /> */}

                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                        autoFocus
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    {/* <FormControlLabel
                            control={
                                <Checkbox value='remember' color='primary' />
                            }
                            label='Remember me'
                        /> */}
                    <Button
                        onClick={login}
                        type='button'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}>
                        Login
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            {/* <Link href='#' variant='body2'>
                                Forgot password?
                            </Link> */}
                        </Grid>
                        <Grid item>
                            <Link href='/SignUp' variant='body2'>
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
        // </ThemeProvider>
    );
}
