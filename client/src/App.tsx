import "./App.css";
import Home from './Home';
import Search from './Search';
import { BrowserRouter, Link, Routes, Route, } from "react-router-dom";
// import CustomizedMenus  from './Header';
import ButtonAppBar  from './Header';
import PagesIcon  from './Header';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { useState } from 'react';



const darkTheme = createTheme({
  
  palette: {
    // mode: 'dark',
    // mode: darkMode ? 'dark': 'light',
  },
});


function App() {
  const [darkMode, setDarkMode] = useState(false);
  // const theme = createTheme({
  //   palette: {
  //     main: red[500],
  //   },
  //   },
  // );

  return (
    
    <ThemeProvider theme={darkTheme}>
    <Paper style={{ height: '100vh'}}>
    <div>
      
      <BrowserRouter>
      <ButtonAppBar />

        {/* <nav>
          <ul>
            <li>
              <Link to="/">Store new Tunes </Link>
            </li>
            <li>
              <Link to="/search">Search Tunes</Link>
            </li>
          </ul>
        </nav> */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<p>Page not found!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
        </Paper>
        </ThemeProvider>
  );
}


export default App; 





