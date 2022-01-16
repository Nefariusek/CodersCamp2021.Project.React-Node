import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

import ThemeSwitch from './ThemeSwitch/ThemeSwitch';

const pages = ['Daily Drugs', 'Lexicon', 'Calendar'];
const LOGO_IMG = { path: './logo_color.png', alt: 'logo' };

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const brand = (
    <>
      <Avatar alt="logo" src={LOGO_IMG.path} sx={{ width: 50, height: 50 }} />
      <Typography variant="h6" noWrap component="div" sx={{ ml: 2, mt: 1, mr: 2 }}>
        aID kIT
      </Typography>
    </>
  );

  const dropdownMenu = (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const simpleMenu = (
    <>
      {pages.map((page) => (
        <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
          {page}
        </Button>
      ))}
    </>
  );

  const tools = (
    <>
      <ThemeSwitch defaultChecked />
      <IconButton color="inherit" size="large" aria-label="settings button">
        <SettingsIcon />
      </IconButton>
      <IconButton color="inherit" size="large" aria-label="login button">
        <LogoutIcon />
      </IconButton>
    </>
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>{brand}</Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>{dropdownMenu}</Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>{brand}</Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>{simpleMenu}</Box>
          {tools}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
