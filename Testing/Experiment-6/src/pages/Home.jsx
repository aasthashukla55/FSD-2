import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    date: '',
    rememberMe: false
  });

  
  const [open, setOpen] = useState(false);

  
  const isEmailError = formData.email !== '' && !formData.email.includes('@');
  const isPasswordError = formData.password !== '' && formData.password.length < 6;

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    if (isEmailError || isPasswordError) {
      return; 
    }

    
    console.log('Submitted Data:', formData);
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false);
   
  };

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="90vh"
      sx={{ py: 4 }} 
    >
      <Paper 
        elevation={4} 
        sx={{ 
          p: 4, 
          width: '100%', 
          maxWidth: 450, 
          borderRadius: 3 
        }}
      >
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{ mb: 4, fontWeight: 'bold', color: '#1976d2' }}
        >
          User Registration
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2.5}>
            <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} required />

            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={isEmailError}
              helperText={isEmailError ? "Email must contain @" : ""}
              required
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={isPasswordError}
              helperText={isPasswordError ? "Password must be at least 6 characters" : ""}
              required
            />

            <TextField fullWidth label="Age" name="age" type="number" value={formData.age} onChange={handleChange} required />

            <TextField select fullWidth label="Gender" name="gender" value={formData.gender} onChange={handleChange} required>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label="Date of Birth"
              name="date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formData.date}
              onChange={handleChange}
              required
            />

            <FormControlLabel
              control={<Checkbox name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />}
              label="Remember Me"
            />

            <Button type="submit" variant="contained" size="large" fullWidth sx={{ py: 1.5, fontWeight: 'bold', backgroundColor: '#1976d2' }}>
              REGISTER NOW
            </Button>
          </Stack>
        </form>
      </Paper>

      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
          {"Success!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your form has been submitted successfully. We have recorded your information.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus variant="contained" color="success">
            Great!
          </Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
};

export default Home;