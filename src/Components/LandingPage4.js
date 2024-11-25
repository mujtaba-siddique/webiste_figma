import React from 'react';
import CloudImg from "../Images/cloud.png";
import { Box, Typography } from '@mui/material'; // Import Box from Material UI

function LandingPage4() {
  return (<>
    <Box
      sx={{
        display: 'flex',             // Use flexbox to center content
        justifyContent: 'center',    // Horizontally center the content
        alignItems: 'center',        // Vertically center the content
        backgroundColor: '#f0f0f0', // Optional: Light gray background
      }}
    >
      <img src={CloudImg} alt="Cloud" style={{ maxWidth: '100%', height: 'auto' }} />
    </Box>
    <Typography variant='h3'>
    Grow your business to the next level.

    </Typography>
    </>
  );
}

export default LandingPage4;
