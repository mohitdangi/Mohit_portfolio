import React, { useState } from "react";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  Divider,
  Container
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const resumeLink = "https://drive.google.com/file/d/1uk4BTBn-5YTNUQ79ZYYFF5eF990uK36Z/view";

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Daily Challenges", path: "/dailychallenges" },
    { name: "Works", path: "/works" }
  ];

  return (
    <>
      <AppBar 
        position="fixed"
        sx={{ 
          backgroundColor: theme.palette.background.paper,
          backgroundImage: 'none',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar 
            disableGutters
            sx={{ 
              display: "flex", 
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: '64px',
            }}
          >
            {/* Logo - Links to root */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: theme.palette.primary.main, // Swapped with hover color
                fontWeight: "bold",
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                '&:hover': {
                  color: theme.palette.text.primary, // Swapped with default color
                }
              }}
            >
              Mohit's Portfolio
            </Typography>

            {/* Desktop Links */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {navItems.filter(item => item.name !== "Home").map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: theme.palette.primary.main, // Swapped with hover color
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: theme.palette.text.primary, // Swapped with default color
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
              
              {/* Resume Button */}
              <Button
                component="a"
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.primary.main, // Swapped with hover color
                  fontWeight: 500,
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  '&:hover': {
                    color: theme.palette.text.primary, // Swapped with default color
                    backgroundColor: 'transparent',
                  },
                }}
              >
                Resume
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton 
              color="inherit" 
              edge="end" 
              sx={{ 
                display: { md: "none" }, 
                color: theme.palette.primary.main, // Swapped with hover color
                '&:hover': {
                  color: theme.palette.text.primary, // Swapped with default color
                }
              }} 
              onClick={handleDrawerToggle}
            >
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Add spacer to prevent content from being hidden behind the fixed navbar */}
      <Toolbar 
        sx={{
          minHeight: '64px !important',
          visibility: 'hidden',
          [theme.breakpoints.down('sm')]: {
            minHeight: '56px !important',
          }
        }} 
      />

      {/* Mobile Drawer */}
      <Drawer 
        anchor="right" 
        open={mobileOpen} 
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '75%', sm: '300px' },
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[8]
          }
        }}
      >
        <Box sx={{ padding: '20px' }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end',
            marginBottom: '10px'
          }}>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon sx={{ color: theme.palette.primary.main }} /> {/* Swapped with hover color */}
            </IconButton>
          </Box>
          
          <Divider sx={{ marginBottom: '20px' }} />
          
          <List>
            {navItems.map((item) => (
              <ListItem 
                key={item.name}
                disablePadding
                sx={{ marginBottom: '8px' }}
              >
                <Button
                  fullWidth
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    color: theme.palette.primary.main, // Swapped with hover color
                    justifyContent: 'flex-start',
                    padding: '12px 16px',
                    '&:hover': {
                      color: theme.palette.text.primary, // Swapped with default color
                      backgroundColor: 'transparent',
                    }
                  }}
                >
                  {item.name}
                </Button>
              </ListItem>
            ))}
            
            {/* Resume List Item */}
            <ListItem disablePadding sx={{ marginBottom: '8px' }}>
              <Button
                fullWidth
                component="a"
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDrawerToggle}
                sx={{
                  color: theme.palette.primary.main, // Swapped with hover color
                  justifyContent: 'flex-start',
                  padding: '12px 16px',
                  '&:hover': {
                    color: theme.palette.text.primary, // Swapped with default color
                    backgroundColor: 'transparent',
                  }
                }}
              >
                Resume
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;