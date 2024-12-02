import React from 'react';
import { Grid, Box, Typography } from '@mui/material'; // Import necessary components from MUI

function Grid2() {
  return (
    <Box marginTop={50}>
    <div>
      {/* Second Grid Layout with 12 columns */}
      <Grid container spacing={2} sx={{ marginTop: "1.5rem" }}>
        {/* First Column (7/12 of the grid) */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              padding: 2,
              height: "300px", // Set height for demonstration
              borderRadius: 2,
              backgroundColor: "transparent", // Make grid item transparent
            }}
          >
            <Typography variant="h6">First Column (7/12)</Typography>
            <Typography variant="body2">
              This is the content for the first column. It takes up 7/12 of the
              grid width.
            </Typography>
          </Box>
        </Grid>

        {/* Second Column (5/12 of the grid) */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              padding: 2,
              height: "300px", // Set height for demonstration
              borderRadius: 2,
              backgroundColor: "transparent", // Make grid item transparent
            }}
          >
            <Typography variant="h6">Second Column (5/12)</Typography>
            <Typography variant="body2">
              This is the content for the second column. It takes up 5/12 of the
              grid width.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
    </Box>
  );
}

export default Grid2;
