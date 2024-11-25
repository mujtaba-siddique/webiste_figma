import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom'; // Importing useLocation for route detection

const Navbar = () => {
  const theme = useTheme(); // Access the theme
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation(); // Hook to get the current route

  // Handle dropdown for Services
  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle mobile drawer toggle
  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  // Helper function to check if the current path is active
  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main, boxShadow: 4 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          variant="h6"
          sx={{
            cursor: 'pointer',
            fontWeight: 'bold',
            color: theme.palette.primary.contrastText,
            transition: 'color 0.3s ease',
            '&:hover': {
              color: theme.palette.secondary.main,
            },
            fontFamily: '"Bricolage Grotesque", sans-serif', // Explicitly apply the font family
          }}
        >
          My Website
        </Typography>

        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
            <Button
              color="inherit"
              href="/"
              sx={{
                ...buttonStyle,
                backgroundColor: isActive('/') ? theme.palette.secondary.main : 'transparent',
                color: theme.palette.primary.contrastText,
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              href="/about"
              sx={{
                ...buttonStyle,
                backgroundColor: isActive('/about') ? theme.palette.secondary.main : 'transparent',
                color: theme.palette.primary.contrastText,
              }}
            >
              About
            </Button>
            <Button
              color="inherit"
              onMouseEnter={handleHover}
              onMouseLeave={handleClose}
              sx={{
                ...buttonStyle,
                backgroundColor: isActive('/services') ? theme.palette.secondary.main : 'transparent',
                color: theme.palette.primary.contrastText,
              }}
            >
              Services
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                onMouseLeave: handleClose,
              }}
              sx={{
                '& .MuiMenu-paper': {
                  backgroundColor: theme.palette.background.paper,
                },
              }}
            >
              <MenuItem onClick={handleClose} component="a" href="/services/design">
                Web Design
              </MenuItem>
              <MenuItem onClick={handleClose} component="a" href="/services/development">
                Development
              </MenuItem>
              <MenuItem onClick={handleClose} component="a" href="/services/seo">
                SEO
              </MenuItem>
            </Menu>
            <Button
              color="inherit"
              href="/portfolio"
              sx={{
                ...buttonStyle,
                backgroundColor: isActive('/portfolio') ? theme.palette.secondary.main : 'transparent',
                color: theme.palette.primary.contrastText,
              }}
            >
              Portfolio
            </Button>
            <Button
              color="inherit"
              href="/contact"
              sx={{
                ...buttonStyle,
                backgroundColor: isActive('/contact') ? theme.palette.secondary.main : 'transparent',
                color: theme.palette.primary.contrastText,
              }}
            >
              Contact
            </Button>
          </Box>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} sx={{ '& .MuiDrawer-paper': { backgroundColor: theme.palette.primary.main } }}>
              <List>
                <ListItem button component="a" href="/" onClick={toggleDrawer(false)} sx={{ borderBottom: isActive('/') ? theme.palette.secondary.main : 'transparent' }}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component="a" href="/about" onClick={toggleDrawer(false)} sx={{ backgroundColor: isActive('/about') ? theme.palette.secondary.main : 'transparent' }}>
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem button component="a" href="/services" onClick={toggleDrawer(false)} sx={{ backgroundColor: isActive('/services') ? theme.palette.secondary.main : 'transparent' }}>
                  <ListItemText primary="Services" />
                </ListItem>
                <ListItem button component="a" href="/portfolio" onClick={toggleDrawer(false)} sx={{ backgroundColor: isActive('/portfolio') ? theme.palette.secondary.main : 'transparent' }}>
                  <ListItemText primary="Portfolio" />
                </ListItem>
                <ListItem button component="a" href="/contact" onClick={toggleDrawer(false)} sx={{ backgroundColor: isActive('/contact') ? theme.palette.secondary.main : 'transparent' }}>
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

// Custom styling for buttons, using theme for hover color and other styles
const buttonStyle = {
  '&:hover': {
    backgroundColor: '#007C92',
    transform: 'scale(1.05)',
    transition: 'all 0.3s ease',
  },
  marginX: 2,
  textTransform: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
  transition: 'color 0.3s ease',
  '&:active': {
    color: '#fff',
  },
};

export default Navbar;
