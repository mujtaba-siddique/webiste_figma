import React from 'react';
import { Button, Box, Typography, Avatar, Stack } from "@mui/material";


function Col1() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
       
      >
        {/* Button */}
        <Button
          sx={{
            backgroundColor: "#1e2026", // Dark grey background color
            color: "white",              // White text color
            padding: "10px 20px",        // Padding to make the button more clickable
            borderRadius: "5px",         // Rounded corners
            
          }}
        >
          Today
        </Button>

      </Box>
      {/* Avatar + Text */}
      <Box sx={{ margin: "20px" }}>
      {/* First Stack with Avatar and Text */}
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Typography variant="body1">
          I've placed both the Button and the Stack inside a single Box component, which is set to
          <Typography variant="body2" color="text.secondary">13 minutes ago</Typography>
        </Typography>
        
      </Stack>

      {/* Second Stack with Avatar and Text */}
      <Stack direction="row" spacing={2} alignItems="center" marginTop={2}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Typography variant="body1">
          I've placed both the Button and the Stack inside a single Box component, which is set to
          <Typography variant="body2" color="text.secondary">26 minutes ago</Typography>
        </Typography>
        
      </Stack>
    </Box>
     
    </>
  );
}

export default Col1;
