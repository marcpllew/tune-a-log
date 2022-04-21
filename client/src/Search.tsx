import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';

// import { MusicInfo } from "./MusicInfo";



const Search = () => {
    // const [musicList, setMusicList] = useState([]);
    // const [musicList, setMusicList] = useState<any>([]);
    const [musicList, setMusicList] = useState<any[]>([])
    const [searchArtist, setSearchArtist] = useState("");
    const [searchStyle, setSearchStyle] = useState("");
    
    
    useEffect(() => {
        axios
            .get("/api/music")
            .then((response: any) => response.data)
            .then((data: any) => {
                setMusicList(data);
            });
    }, []);


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
            Search Artist/Style
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
                  type="text"
                  autoComplete="artist_name"
                  autoFocus
                  value={searchArtist}
                  onChange={(event: any) => {
                    setSearchArtist(event.target.value);
                    
                }}
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
                  value={searchStyle}
                  onChange={(event: any) => {
                    setSearchStyle(event.target.value);
                    
                    
                }}
                />
              </Grid>

            
            </Grid>

            <Button
            onClick={(event: any) => {
              axios
                .get(`/api/music/search?artist=${searchArtist}&style=${searchStyle}`)
                .then((response: any) => response.data)
                .then((data: any) => {
                    setMusicList(data);
                    
                });
            
            }
        
            }
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}

            >
                Search

                </Button> 

                <div className='tunes' >
                <h2>Current Music:</h2> {musicList.filter((music: any) => {
                if (searchArtist === "" && searchStyle === "") {
                    return true
                } else if (music.artist_name.toLowerCase().includes(searchArtist.toLowerCase()) && music.style.toLowerCase().includes(searchStyle.toLowerCase()) ){
                    return true
                }

                
            }).map((music: any) => (
              // logic search criteria
                    <p>{music.id}: {music.artist_name}: {music.style}</p>
                    
                )
                )}
                </div>          
                            
            </Box>
            
        </Box>
        
        </Container>

    
    )

    
}


export default Search;


