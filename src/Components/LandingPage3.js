import React from "react";
import { Button, Box, Typography, Grid, Paper } from "@mui/material";  // Added necessary imports
import Backgroundpic from "../Images/backgroundpink.png";
import A from "../Images/A.png"
import B from "../Images/B.png"
import C from "../Images/C.png"

function LandingPage3() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
        }}
      >
        <Button
          sx={{
            color: "black", // Text color
            backgroundColor: "#FFE785", // Yellow background color
            borderRadius: "10px", // Rounded corners
            fontSize: { xs: "10px", sm: "12px", md: "14px" }, // Responsive font size
            cursor: "pointer", // Pointer cursor on hover
            fontFamily: "Inter, sans-serif", // Font family
            fontWeight: 600, // Font weight
            marginTop: { xs: "50px", sm: "100px" }, // Responsive margin-top
            textTransform: "none", // Prevent uppercase transformation
            padding: { xs: "6px 12px", sm: "8px 16px" }, // Responsive padding
          }}
          onClick={() => alert("Powerful Solutions Clicked!")}
          aria-label="Product Features Button" // Accessibility improvement
        >
          Product Features
        </Button>
      </Box>
      
      <div>
        <Typography
          variant="h1"
          sx={{
            marginLeft: { xs: "20px", sm: "50px", md: "200px", lg: "400px" }, // Responsive marginLeft
            marginRight: { xs: "20px", sm: "50px", md: "200px", lg: "400px" }, // Responsive marginRight
            fontSize: "3rem", // Static font size
            textAlign: "center",
            marginTop: "20px", // Static marginTop
          }}
        >
          Streamline tasks with optimized workflows
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginLeft: { xs: "20px", sm: "50px", md: "200px", lg: "400px" }, // Responsive marginLeft
            marginRight: { xs: "20px", sm: "50px", md: "200px", lg: "400px" }, // Responsive marginRight
            color: "black",
            textAlign: "center",
            marginTop: "20px", // Static marginTop
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
        </Typography>
      </div>

      {/* Background and 3-column Grid */}
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${Backgroundpic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
       <Grid
      container
      spacing={4} // The spacing between grid items, based on theme.spacing
      sx={{
        padding: { xs: "20px", md: "40px" }, // Adjust padding based on screen size
      }}
    >
      {/* Grid Column 1 */}
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          sx={{
            padding: 2,
            borderRadius: "16px",
            boxShadow: 3,
            position: "relative", // Enables absolute positioning of image
            marginTop:"40px",
            
          }}
        >
          {/* Image A positioned at the top of the column */}
          <img
            src={B}
            alt="A"
            style={{
              position: "absolute",
              top: "-17%", // Moves half of the image outside
              left: "50%",
              transform: "translateX(-50%)", // Centers the image horizontally
              width: "80px",
              height: "80px", // Half of the image will be inside
            }}
          />
          <Typography variant="h3" fontSize="2rem" sx={{ fontWeight: 700, color: "text.primary", marginTop: 4, textAlign:"center"}}>
          Keep on top of project
          management.
          </Typography>
          <Typography variant="body1"  sx={{ marginTop: 2, color: "black", textAlign:"center" }}>
            This is the content for column 1. You can add text, images, or any other content here.
          </Typography>
          <Button variant="text" color="black"  alignItems="center" sx={{ marginTop: "3", fontFamily:"Inter"}}>
            learn more
          </Button>
        </Paper>
      </Grid>

      {/* Grid Column 2 */}
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          sx={{
            padding: 2,
            borderRadius: "16px",
            boxShadow: 3,
            position: "relative", // Enables absolute positioning of image
             marginTop:"40px"
          }}
        >
          {/* Image B positioned at the top of the column */}
          <img
            src={A}
            alt="B"
            style={{
              position: "absolute",
              top: "-17%", // Moves half of the image outside
              left: "50%",
              transform: "translateX(-50%)", // Centers the image horizontally
              width: "80px",
              height: "80px", // Half of the image will be inside
            }}
          />
          <Typography variant="h3"fontSize="2rem" sx={{ fontWeight: 700, color: "text.primary", marginTop: 4 , textAlign:"center"}}>
          Analyze your business
          results in one place.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2, color: "black", textAlign:"center" }}>
            This is the content for column 2. You can add text, images, or any other content here.
          </Typography>
          <Button variant="text" sx={{fontFamily:"Inter", color:"black"}}>
            learn More
          </Button>
        </Paper>
      </Grid>

      {/* Grid Column 3 */}
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          sx={{
            padding: 2,
            borderRadius: "16px",
            boxShadow: 3,
            position: "relative", // Enables absolute positioning of image
             marginTop:"40px"
          }}
        >
          {/* Image C positioned at the top of the column */}
          <img
            src={C}
            alt="C"
            style={{
              position: "absolute",
              top: "-17%", // Moves half of the image outside
              left: "50%",
              transform: "translateX(-50%)", // Centers the image horizontally
              width: "80px",
              height: "80px", // Half of the image will be inside
            }}
          />
          <Typography variant="h3" fontSize="2rem" sx={{ fontWeight: 700, color: "text.primary", marginTop: 4 }}>
            Column 3
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2, color: "text.secondary" }}>
            This is the content for column 3. You can add text, images, or any other content here.
          </Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: 3 }}>
            Button
          </Button>
        </Paper>
      </Grid>
    </Grid>
      </div>
    </>
  );
}

export default LandingPage3;
