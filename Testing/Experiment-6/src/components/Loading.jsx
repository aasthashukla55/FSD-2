import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh', 
        width: '100%',
        gap: 2
      }}
    >
    
      <CircularProgress size={60} thickness={4} />

      
      <Typography 
        variant="h5" 
        sx={{ 
          color: '#1976d2', 
          fontWeight: 'bold',
          animation: 'pulse 1.5s infinite' 
        }}
      >
        The page is loading...
      </Typography>

    
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
};

export default Loading;