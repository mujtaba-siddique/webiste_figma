import React from 'react'
import { Box } from '@mui/material'; // Import Box from Material-UI
import blackbb from "../Images/blackbackgroundhai.png"
import iq1 from "../Images/iq1.png"

function LandingPage8() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative', // Make this container relative
      }}
    >
      <img
        src={blackbb}
        style={{ width: "944px", height: "394px" }}
        alt="Black Background"
      />
      <img
        src={iq1}
        style={{
          position: 'absolute', // Position the iq1 image relative to the parent
          top: '22%', // Adjust top to place it slightly at the top
          left: '50%', // Center horizontally
          transform: 'translateX(-50%)', // Adjust for exact centering
        }}
        alt="IQ Image"
      />
    </Box>
  )
}

export default LandingPage8;
