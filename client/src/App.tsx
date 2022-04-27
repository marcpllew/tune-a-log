import './App.css';
import Home from './Home';
import Search from './Search';
import SearchInfo from './components/SearchInfo';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
// import CustomizedMenus  from './Header';
import ButtonAppBar from './components/Header';
import PagesIcon from './components/Header';
import * as React from 'react';
import { Paper } from '@mui/material';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { red } from '@mui/material/colors';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
    const colorMode = React.useContext(ColorModeContext);
    const [darkMode, setDarkMode] = useState(true);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            // text: {
            //     primary: 'rgba(255,0,0,0.87)',
            // },
        },
        typography: {
            fontFamily: 'Roboto',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Paper style={{ height: '100vh' }}>
                <div>
                    <BrowserRouter>
                        <ButtonAppBar />

                        {/* <IconButton
                            onClick={() => setDarkMode((prev) => !prev)}>
                            Toggle Dark Mode
                        </IconButton> */}

                        <IconButton
                            sx={{ ml: 1 }}
                            onClick={() => setDarkMode((prev) => !prev)}
                            // onClick={() => setDarkMode((prev) => !prev)}
                            color='inherit'>
                            {theme.palette.mode === 'dark' ? (
                                <Brightness7Icon />
                            ) : (
                                <Brightness4Icon />
                            )}
                        </IconButton>

                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='search' element={<Search />} />
                            <Route
                                path='searchInfo/:id'
                                element={<SearchInfo />}
                            />
                            <Route path='*' element={<p>Page not found!</p>} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </Paper>
        </ThemeProvider>
    );
}

export default App;
