import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme(); // Access the theme
  const isMobile = useMediaQuery("(max-width:600px)");
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

  // Helper function to get the button styles based on active state
  const getButtonStyle = (path) => ({
    ...buttonStyle,
    backgroundColor: isActive(path)
      ? theme.palette.secondary.main
      : "transparent",
    color: theme.palette.primary.contrastText,
  });

  // Helper function to get styles for active drawer items
  const getDrawerItemStyle = (path) => ({
    backgroundColor: isActive(path) ? "#007C92" : "transparent",
    color: "#fff",
  });

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.primary.main,
        boxShadow: 4,
        width: "100%",
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            cursor: "pointer",
            fontWeight: "bold",
            color: theme.palette.primary.contrastText,
            transition: "color 0.3s ease",
            "&:hover": {
              color: theme.palette.secondary.main,
            },
            fontFamily: '"Bricolage Grotesque", sans-serif', // Explicitly apply the font family
          }}
        >
          My Website
        </Typography>

        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
            <Button color="inherit" href="/" sx={getButtonStyle("/")}>
              Home
            </Button>
            <Button color="inherit" href="/about" sx={getButtonStyle("/about")}>
              About
            </Button>
            <Button
              color="inherit"
              onMouseEnter={handleHover}
              onMouseLeave={handleClose}
              sx={getButtonStyle("/services")}
            >
              Services
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              sx={{
                "& .MuiMenu-paper": {
                  backgroundColor: theme.palette.background.paper,
                },
              }}
            >
              <MenuItem
                onClick={handleClose}
                component="a"
                href="/services/design"
              >
                Web Design
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component="a"
                href="/services/development"
              >
                Development
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component="a"
                href="/services/seo"
              >
                SEO
              </MenuItem>
            </Menu>
            <Button
              color="inherit"
              href="/portfolio"
              sx={getButtonStyle("/portfolio")}
            >
              Portfolio
            </Button>
            <Button
              color="inherit"
              href="/contact"
              sx={getButtonStyle("/contact")}
            >
              Contact
            </Button>
          </Box>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ marginRight: "12px" }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  backgroundColor: theme.palette.primary.main,
                },
              }}
            >
              <List>
                <ListItem
                  button
                  component="a"
                  href="/"
                  onClick={toggleDrawer(false)}
                  sx={getDrawerItemStyle("/")}
                >
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/about"
                  onClick={toggleDrawer(false)}
                  sx={getDrawerItemStyle("/about")}
                >
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/services"
                  onClick={toggleDrawer(false)}
                  sx={getDrawerItemStyle("/services")}
                >
                  <ListItemText primary="Services" />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/portfolio"
                  onClick={toggleDrawer(false)}
                  sx={getDrawerItemStyle("/portfolio")}
                >
                  <ListItemText primary="Portfolio" />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/contact"
                  onClick={toggleDrawer(false)}
                  sx={getDrawerItemStyle("/contact")}
                >
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

// Custom styling for buttons
const buttonStyle = {
  "&:hover": {
    backgroundColor: "#007C92",
    transform: "scale(1.05)",
    transition: "all 0.3s ease",
  },
  marginX: 2,
  textTransform: "none",
  fontWeight: "bold",
  fontSize: "16px",
  transition: "color 0.3s ease",
  "&:active": {
    color: "#fff",
  },
};

export default Navbar;
