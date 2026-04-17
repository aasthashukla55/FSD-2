import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Form
          </Typography>

         
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          
          <Button color="inherit" component={Link} to="/dashboard">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;