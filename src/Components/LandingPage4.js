import React from "react";
import { Box, Grid, Typography } from "@mui/material"; // Import Box and Grid from Material UI
import CloudImg from "../Images/cloud.png"; // Cloud Image (already imported)
import Icon1 from "../Images/icon1.png"; // Avatar images (example)
import Icon2 from "../Images/icon2.png";
import Icon3 from "../Images/icon3.png";
import Icon4 from "../Images/icon4.png";

// JSON data for the columns with avatar images, headings, and body
const columnData = [
  {
    avatar: Icon1, 
    heading: "User Management",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus."
  },
  {
    avatar: Icon2,
    heading: "Insightful Data Analytics",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus."
  },
  {
    avatar: Icon3,
    heading: "Effortless Integration",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus."
  },
  {
    avatar: Icon4,
    heading: "Robust Security Suite",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus."
  }
];

function LandingPage4() {
  return (
    <>
      {/* Cloud Image Section */}
      <Box
        sx={{
          display: "flex", // Use flexbox to center content
          justifyContent: "center", // Horizontally center the content
          alignItems: "center", // Vertically center the content
          // backgroundColor: "#f0f0f0", // Optional: Light gray background
          marginTop: { xs: "50px", sm: "200px" },
          
        }}
      >
        <img
          src={CloudImg}
          alt="Cloud"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>

      {/* Header Section */}
      <Typography
        variant="h3"
        textAlign="center"
        sx={{ marginTop: "20px", fontWeight: "bold" }}
      >
        Grow your business to the next level.
      </Typography>

      {/* Description Section */}
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          marginTop: "20px",
          marginX: { xs: "20px", sm: "50px", md: "200px" }, // Responsive margins
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
      </Typography>

      {/* Avatar Grid Section */}
      <Grid
        container
        spacing={4}
        sx={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center", // Centers the columns in the grid
          padding: "20px", // Optional padding
        }}
      >
        {columnData.map((column, index) => (
          <Grid
            item
            xs={12} // 1 column on mobile
            sm={6} // 2 columns on tablet
            md={3} // 4 columns on desktop
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px", // Optional padding for spacing
            }}
          >
            {/* Avatar Image */}
            <img
              src={column.avatar}
              alt={`Avatar for ${column.heading}`}
              style={{
                width: "44px", // Set width of avatar image
                height: "44px", // Set height of avatar image
                borderRadius: "50%", // Makes it circular
                marginBottom: "16px", // Space between image and text
              }}
            />
            <Typography color="black" fontSize={20} textAlign="center" sx={{ fontWeight: "bold" }}>
              {column.heading}
            </Typography>
            <Typography variant="body2" textAlign="center" sx={{ marginTop: "10px" }}>
              {column.body}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default LandingPage4;
