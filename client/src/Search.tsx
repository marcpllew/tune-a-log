import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';
import StyleDropdown from './StyleInputField';
import { id } from 'date-fns/locale';

// alternate search function??
// const handleSubmit = (event: any) => {// axios request
//           event.preventDefault()
//           axios
//                 .get(`/api/music/`, {"artist_name": searchArtist|| undefined,
// "style": searchStyle|| undefined
// })
//                 .then((response: any) => {console.log(response.data)})
                
//     };


const Search = () => {
    // const [musicList, setMusicList] = useState([]);
    // const [musicList, setMusicList] = useState<any>([]);
    const [musicList, setMusicList] = useState<any[]>([])
    const [searchArtist, setSearchArtist] = useState("");
    const [searchStyle, setSearchStyle] = useState("");
    
    
    
    // change to a function, call function on search click
    const SearchDb = () => {
      
        axios
            .get(`/api/music?style=${searchStyle}&artist_name=${searchArtist}`)
            .then((response: any) => response.data)
            .then((data: any) => {
                setMusicList(data);
            });
            
            
  }




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
                  < StyleDropdown styleValue={searchStyle} handleChangeStyleValue={setSearchStyle}
                  />

                {/* <TextField
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
                /> */}
              </Grid>

            
            </Grid>

            <Button
            onClick={(event: any) => {
              
              SearchDb()
              
              // axios

              //   .get(`/api/music/search?artist=${searchArtist}&style=${searchStyle}`)
              //   .then((response: any) => response.data)
              //   .then((data: any) => {
              //       setMusicList(data);
                    
              //   });
            }}
                      
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              // backgroundColor: "#64dd17"
            }}
            >Search
                </Button> 

                <div className='tunes' >
                {musicList.filter((music: any) => {
                if (searchArtist === "" && searchStyle === "") {
                    return false
                } else if (music.artist_name.toLowerCase().includes(searchArtist.toLowerCase()) && music.style.toLowerCase().includes(searchStyle.toLowerCase()) ){
                    return true
                }

                })
            .map((music: any) => (
              // logic search criteria
                    
                    <p key={music.id}> <p style={{ fontSize: 25, color: "#4a54f1", textAlign: "center" }}> {music.artist_name}</p> <p style={{ fontSize: 17, color: "#4a54f1", textAlign: "center"}}>{music.style}</p>
                    {/* <p style={{ fontSize: 15, textAlign: "center" }}>{music.miscellaneous}</p>  */}
                    <Button
            onClick={(event: any) => {
              // setMusicList()
              axios
                .delete(`/api/music/${music.id}`).then(() => {
                  SearchDb()
                })
            }}

            
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 5 }}

            >
                delete
                </Button> 
  </p>

                )
                )}
                </div>          
            </Box>
            
        </Box>
        
        </Container>

    
    )

    
}


export default Search;


