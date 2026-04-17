import React, { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Rating, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Divider,
  Stack
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Dashboard = () => {
 
  const [userRating, setUserRating] = useState(0);

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      gap={4}
      sx={{ mt: 2 }}
    >
     
      <Paper elevation={4} sx={{ p: 3, width: '100%', maxWidth: 450, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Contact Information
        </Typography>
        <Divider sx={{ mb: 2 }} />
        
        <List>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary={<Typography sx={{ fontWeight: 'medium' }}>Phone</Typography>} 
              secondary="+91 98765 43210" 
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <EmailIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary={<Typography sx={{ fontWeight: 'medium' }}>Email</Typography>} 
              secondary="support@experiment5.com" 
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <LocationOnIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary={<Typography sx={{ fontWeight: 'medium' }}>Address</Typography>} 
              secondary="123 AI Street, Tech Park, India" 
            />
          </ListItem>
        </List>
      </Paper>

      
      <Paper elevation={4} sx={{ p: 4, width: '100%', maxWidth: 450, borderRadius: 2, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Rate Our Service
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Please provide your feedback by selecting stars below:
        </Typography>
        
        <Stack alignItems="center" spacing={1}>
          <Rating 
            name="user-input-rating" 
            value={userRating} 
            precision={0.5} 
            size="large"
            onChange={(event, newValue) => {
              setUserRating(newValue);
            }}
          />
          <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
            {userRating > 0 ? `${userRating} Stars` : "No Rating Yet"}
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Dashboard;