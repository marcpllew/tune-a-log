import './App.css';
import Home from './Home';
import Search from './Search';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
// import CustomizedMenus  from './Header';
import ButtonAppBar from './Header';
import PagesIcon from './Header';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Paper } from '@mui/material';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const [darkMode, setDarkMode] = useState(true);
    // const theme = createTheme({
    //     palette: {
    //         main: red[500],
    //     },
    // });
    const darkTheme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
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
                            <Route path='*' element={<p>Page not found!</p>} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </Paper>
        </ThemeProvider>
    );
}

export default App;
