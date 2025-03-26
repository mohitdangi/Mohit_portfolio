import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme(); // Access the custom theme
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.background.default, boxShadow: `0 0 10px ${theme.palette.primary.main}` }}>
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: theme.palette.primary.main,
            flexGrow: 1,
            fontWeight: "bold",
            textShadow: `0 0 5px ${theme.palette.primary.main}, 0 0 10px ${theme.palette.primary.main}`,
          }}
        >
          Mohit's Portfolio
        </Typography>

        {/* Desktop Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {["Daily Challenges", "Resume", "Works"].map((item, index) => (
            <Button
              key={index}
              color="inherit"
              component={Link}
              to={`/${item.toLowerCase().replace(/\s/g, "")}`}
              sx={{
                color: theme.palette.primary.main,
                textShadow: `0 0 5px ${theme.palette.primary.main}, 0 0 10px ${theme.palette.primary.main}`,
                "&:hover": {
                  backgroundColor: theme.palette.background.paper,
                  boxShadow: `0 0 10px ${theme.palette.primary.main}`,
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton color="inherit" edge="end" sx={{ display: { md: "none" }, color: theme.palette.primary.main }} onClick={handleDrawerToggle}>
          <MenuIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, padding: 2, backgroundColor: theme.palette.background.default, color: theme.palette.primary.main }}>
          <Typography variant="h6" sx={{ textAlign: "center", mb: 2, fontWeight: "bold", textShadow: `0 0 5px ${theme.palette.primary.main}, 0 0 10px ${theme.palette.primary.main}` }}>
            Menu
          </Typography>
          <Divider sx={{ backgroundColor: theme.palette.primary.main }} />
          <List>
  {["Home", "Daily Challenges", "Resume", "Works"].map((item, index) => (
    item === "Resume" ? (
      <ListItem 
        key={index} 
        button 
        component="a" 
        href="https://drive.google.com/your-resume-link" 
        target="_blank" 
        rel="noopener noreferrer" 
        sx={{ 
          color: theme.palette.primary.main, 
          "&:hover": { 
            backgroundColor: theme.palette.background.paper, 
            boxShadow: `0 0 10px ${theme.palette.primary.main}` 
          } 
        }}
      >
        <ListItemText primary={item} />
      </ListItem>
    ) : (
      <ListItem 
        key={index} 
        button 
        component={Link} 
        to={`/${item.toLowerCase().replace(/\s/g, "")}`} 
        onClick={handleDrawerToggle} 
        sx={{ 
          color: theme.palette.primary.main, 
          "&:hover": { 
            backgroundColor: theme.palette.background.paper, 
            boxShadow: `0 0 10px ${theme.palette.primary.main}` 
          } 
        }}
      >
        <ListItemText primary={item} />
      </ListItem>
    )
  ))}
</List>

        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
