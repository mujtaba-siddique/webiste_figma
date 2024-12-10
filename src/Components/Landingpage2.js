import React from "react";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import img from "../Images/SVG.png";
import img1 from "../Images/SVG-1.png";
import img2 from "../Images/SVG-2.png";
import img3 from "../Images/SVG-3.png";
import img4 from "../Images/SVG-4.png";
import img5 from "../Images/SVG-5.png";
import img6 from "../Images/SVG-6.png";
import img7 from "../Images/SVG-7.png";
import img8 from "../Images/SVG-8.png";
import img9 from "../Images/SVG-9.png";
import img10 from "../Images/SVG-10.png";
import img11 from "../Images/SVG-11.png";

const images = [
  img,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

function LandingPage2() {
  return (
    <Box sx={{ paddingRight: { sm: "5rem" } }}>
      {/* First Section */}
      <Grid
        container
        spacing={2}
        sx={{
          marginLeft: { md: "100px" },
          gap: { xs: "10px", md: "0" },
          marginTop: { xs: "15px", sm: "8rem" },
        }}
      >
        <Grid item xs={12} md={6}>
          <Paper elevation={0}>
            <Typography variant="h3" sx={{ marginTop: "15px" }}>
              A powerful solution to boost your business performance
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ height: "100%" }}>
            <Typography sx={{ marginTop: "30px", color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              non enim lacus. Nullam congue blandit quam, sit amet scelerisque
              turpis.
            </Typography>
            <Button
              sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "10px",
                fontSize: "12px",
                fontWeight: 400,
                marginTop: "20px",
                textTransform: "none",
                padding: "8px 16px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              See Customer Reviews
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Sliding Images Section */}
      <Box
        sx={{
          overflow: "hidden", // Hide overflowing content
          position: "relative",
          marginTop: "3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            animation: "slide 20s linear infinite", // Sliding animation
            "@keyframes slide": {
              "0%": { transform: "translateX(0)" }, // Start position
              "100%": { transform: "translateX(-100%)" }, // Slide to the left
            },
          }}
        >
          {/* Map over images for the sliding effect */}
          {images.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image}
              alt={`Slide-${index}`}
              sx={{
                width: "100px",
                height: "50px",
                margin: "0 20px",
                objectFit: "contain",
              }}
            />
          ))}
          {/* Duplicate the images for seamless looping */}
          {images.map((image, index) => (
            <Box
              key={`repeat-${index}`}
              component="img"
              src={image}
              alt={`Repeat-Slide-${index}`}
              sx={{
                width: "100px",
                height: "50px",
                margin: "0 20px",
                objectFit: "contain",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage2;
