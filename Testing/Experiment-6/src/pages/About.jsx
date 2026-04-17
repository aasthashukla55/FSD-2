import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, Stack } from '@mui/material';

const About = () => {
  const [aboutText, setAboutText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Bio Saved:", aboutText);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <Paper elevation={4} sx={{ p: 4, width: '100%', maxWidth: 500, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4, fontWeight: 'bold', color: '#1976d2' }}>
          About Me
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <TextField
              fullWidth
              label="Bio / Description"
              multiline
              rows={8}
              placeholder="Type your description here..."
              variant="outlined"
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" size="large" fullWidth sx={{ py: 1.5, backgroundColor: '#1976d2' }}>
              SAVE PROFILE
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};


export default About;