import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Home from './Home';
import handleChangeStyleValue from './Home';
import {styleValue} from './Home'

 
export default function StyleDropdown({styleValue, handleChangeStyleValue}) {
const onChange = (event, newValue) => {
    handleChangeStyleValue(newValue===null?'': newValue)
}
  return (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Autocomplete
        id="style dropdown"
        freeSolo={true}
        options={definedMusicStyles.map((option) => option.style)}
        onChange={onChange}
        renderInput={(params) => <TextField  value={styleValue} {...params} label="Style*" />}
      />
 
     
    </Stack>
  );
}


const definedMusicStyles = [
 
  
  { style: 'Psych-Rock' },
  { style: 'Latin' },
  { style: 'Regge Jazz' },
  { style: 'Electro jazz' },
  { style: 'Electro' },
  { style: 'Laid back groove' },
  { style: '80s Pop' },
  { style: 'Bebop' },
  { style: 'Jazz' },
  { style: 'Traditional' },
  { style: 'Funk/Soul' },
  { style: 'Funk/Disco' }
  
];
