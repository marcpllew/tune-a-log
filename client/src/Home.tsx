import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';


function Home(props: any) {
    const [value, setValue] = useState('');
    const [musicList, setMusicList] = useState([]);
    const [artistValue, setArtistValue] = useState("");
    const [styleValue, setStyleValue] = useState("");
    const [miscellaneousValue, setMiscellaneousValue] = useState("");

    const handleChangeArtistValue = (event: any) => {
        setArtistValue(event.target.value);
    };

    const handleChangeStyleValue = (event: any) => {
        setStyleValue(event.target.value);
    };

    const handleChangeMiscellaneousValue = (event: any) => {
        setMiscellaneousValue(event.target.value);
    };

    const handleSubmit = () => {
        props.onNewSubmit(value);
    };

    const handleKeypress = (e: any) => {
            handleSubmit();
    };

  return (
    
  <Container component="main" maxWidth="xs">
      <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} /> */}
          <Typography component="h1" variant="h5">
            Store new Tunes
          </Typography>
          <Box component="form" noValidate onSubmit={() => {}} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="artist_name"
                  label="Artist Name"
                  name="artist_name"
                  autoComplete="artist_name"
                  value={artistValue}
                  onChange={handleChangeArtistValue}
                  onKeyPress={handleKeypress}
                />
              </Grid>

                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="style"
                  label="Style"
                  name="style"
                  autoComplete="style"
                  value={styleValue}
                  onChange={handleChangeStyleValue}
                  onKeyPress={handleKeypress}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="miscellaneous"
                  label="Miscellaneous"
                  name="miscellaneous"
                  autoComplete="miscellaneous"
                  value={miscellaneousValue}
                  onChange={handleChangeMiscellaneousValue}
                  onKeyPress={handleKeypress}
                />
              </Grid>
            
            </Grid>
            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create entry
            </Button>
          </Box>
        </Box>
      </Container>
  )
}
export default Home;