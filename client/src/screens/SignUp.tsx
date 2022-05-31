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
import { response } from 'express';

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

export default function SignUp() {
    const [usernameReg, setusernameReg] = useState('');
    const [emailReg, setemailReg] = useState('');
    const [passwordReg, setpasswordReg] = useState('');

    const register = () => {
        axios
            .post('/api/users', {
                username: usernameReg,
                email: emailReg,
                password: passwordReg,
            })
            .then((response: any) => {
                console.log(response);
            });
    };

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //         username: data.get('username'),
    //         email: data.get('email'),
    //         password: data.get('password'),
    //     });
    // };

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
                    Sign up
                </Typography>
                <Box
                    component='form'
                    noValidate
                    // onSubmit={handleSubmit}
                    sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete='user-name'
                                name='username'
                                required
                                fullWidth
                                id='username'
                                label='User Name'
                                autoFocus
                                onChange={(e) => {
                                    setusernameReg(e.target.value);
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id='email'
                                label='Email Address'
                                name='email'
                                autoComplete='email'
                                onChange={(e) => {
                                    setemailReg(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name='password'
                                label='Password'
                                type='password'
                                id='password'
                                autoComplete='new-password'
                                onChange={(e) => {
                                    setpasswordReg(e.target.value);
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        onClick={register}
                        type='button'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}>
                        Sign Up
                    </Button>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Link href='/login' variant='body2'>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
        // </ThemeProvider>
    );
}
