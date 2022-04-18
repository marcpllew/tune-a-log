import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';


function Home() {
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
                />
              </Grid>
            
            </Grid>
            <Button
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