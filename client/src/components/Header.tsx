import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { format } from 'path';
import { Avatar, ThemeProvider } from '@mui/material';
//
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PagesIcon from '@mui/icons-material/Pages';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1 }}>
                        {CustomizedMenus()}
                    </Typography>
                    <Typography
                        variant='h4'
                        component='div'
                        sx={{ flexGrow: 1 }}>
                        Tune-a-Log
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        component='div'
                        sx={{ flexGrow: 0.05 }}>
                        Marc's tunes
                    </Typography>

                    <Avatar src='/skeeter.png' />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
//
const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light'
                ? 'rgb(55, 65, 81)'
                : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

export function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id='demo-customized-button'
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                variant='contained'
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}>
                Pages
            </Button>
            <StyledMenu
                id='demo-customized-menu'
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                <MenuItem onClick={handleClose} disableRipple>
                    <MusicNoteIcon />
                    <Typography variant='inherit'>
                        <Link
                            style={{
                                color: 'blue',
                            }}
                            to='/'>
                            Add new Tunes{' '}
                        </Link>
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <MusicNoteIcon />
                    <Link
                        style={{
                            color: 'blue',
                        }}
                        to='/search'>
                        Search
                    </Link>
                </MenuItem>

                {/* <Divider sx={{ my: 0.5 }} /> */}

                {/* <MenuItem onClick={handleClose} disableRipple>
                    <MoreHorizIcon />
                    More
                </MenuItem> */}
            </StyledMenu>
        </div>
    );
}
