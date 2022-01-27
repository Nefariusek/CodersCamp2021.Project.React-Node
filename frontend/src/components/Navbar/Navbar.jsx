import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

import {
  PATH_TO_CALENDAR,
  PATH_TO_DAILY_DRUGS,
  PATH_TO_LEXICON,
  PATH_TO_LOGIN,
  PATH_TO_SETTINGS,
  PATH_TO_USER_HOMEPAGE,
} from '../../constants/paths';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';

const pages = [
  { path: PATH_TO_DAILY_DRUGS, name: 'Daily Drugs' },
  { path: PATH_TO_LEXICON, name: 'Lexicon' },
  { path: PATH_TO_CALENDAR, name: 'Calendar' },
];
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
          <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} to={page.path}>
            <Typography textAlign="center">{page.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const simpleMenu = (
    <>
      {pages.map((page) => (
        <Button
          key={page.name}
          onClick={handleCloseNavMenu}
          component={Link}
          to={page.path}
          sx={{ my: 2, color: 'inherit', display: 'block' }}
        >
          {page.name}
        </Button>
      ))}
    </>
  );

  const tools = (
    <Stack direction="row" alignItems="center">
      <ThemeSwitch defaultChecked />
      <IconButton color="inherit" size="large" aria-label="settings button" component={Link} to={PATH_TO_SETTINGS}>
        <SettingsIcon />
      </IconButton>
      <IconButton color="inherit" size="large" aria-label="login button" component={Link} to={PATH_TO_LOGIN}>
        <LogoutIcon />
      </IconButton>
    </Stack>
  );

  return (
    <AppBar position="static">
      <CssBaseline />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, textDecoration: 'none' }}
              component={Link}
              to={PATH_TO_USER_HOMEPAGE}
              color="inherit"
            >
              {brand}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>{dropdownMenu}</Box>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'inherit', textDecoration: 'none' }}
            component={Link}
            to={PATH_TO_USER_HOMEPAGE}
          >
            {brand}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>{simpleMenu}</Box>
          {tools}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
