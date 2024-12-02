import React from "react";
import { Grid, Paper, Button, Typography } from "@mui/material";
import PowerfullButtonn from "./PowerfullButtonn";
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

function LandingPage2() {
  return (
    <div style={{ paddingRight: "5rem" }}>
      {/* Grid container with 12 columns */}
      <Grid
        container
        spacing={2}
        marginTop={15}
        sx={{
          marginLeft: { md: "100px" },
          gap: { xs: "10px", md: "0" }, // Adjusting the margin between columns in mobile view (10px) and default for desktop
        }}
      >
        {/* First section (takes up 6 columns) */}
        <Grid item xs={12} md={6} sx={{ marginLeft: { xs: "16px", md: "0" } }}>
          <Paper elevation={0}>
            <PowerfullButtonn />
            <Typography
              variant="h3"
              sx={{
                marginTop: { xs: "15px", sm: "15px", md: "20px" }, // Apply responsive marginTop
                marginRight: { xs: "50px", sm: "1px", md: "30px" }, // Apply responsive marginRight
              }}
            >
              A powerful solution to boost your business performance
            </Typography>
          </Paper>
        </Grid>

        {/* Second section (takes up 6 columns) */}
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ padding: "16px", height: "100%" }}>
            <Typography
              sx={{
                marginRight: { xs: "0", sm: "50px", md: "200px" }, // Responsive marginRight
                marginTop: { xs: "5px", sm: "15px", md: "30px" }, // Responsive marginTop
                color: "black", // Color of the text
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              non enim lacus. Nullam congue blandit quam, sit amet scelerisque
              turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus non enim lacus. Nullam congue blandit quam, sit amet
              scelerisque turpis.
            </Typography>

            {/* MUI Button component with sx prop */}
            <Button
              sx={{
                color: "black", // Text color
                backgroundColor: "white", // Yellow background color
                borderRadius: "10px", // Rounded corners
                fontSize: "12px", // Font size
                cursor: "pointer", // Pointer cursor on hover
                fontFamily: "Inter, sans-serif", // Font family
                fontWeight: 400, // Font weight
                marginTop: "20px", // Margin at the top
                textTransform: "none", // Prevent uppercase transformation
                padding: "8px 16px", // Padding for better size
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow effect to make the button visible
                "&:hover": {
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)", // Darker shadow on hover
                },
              }}
            >
              See Customer Reviews
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Second Grid container for images with two images per column */}
      <Grid
  container
  spacing={2}  // Change this value to increase/decrease the space between columns
  marginTop={3}
  sx={{
    paddingLeft: { xs: "0", md: "100px" }
  }}
>
        {/* 6 Columns with 2 images per column */}
        <Grid item xs={6} sm={6} md={2}>
          <Paper sx={{ padding: "16px", height: "100%", display:"flex", justifyContent:"left", flexDirection:"column", marginRight:{sm:"30px"}}}>
            <img
              src={img}
              alt="SVG-1"
              style={{ width: "103px", height: "32px", marginBottom: "10px" }}
            />
            <img
              src={img1}
              alt="SVG-2"
              style={{ width: "114px", height: "32px",  marginTop:"20px"}}
            />
          </Paper>
        </Grid>

        <Grid item xs={6} sm={6} md={2}>
          <Paper sx={{ padding: "16px", height: "100%", display:"flex", justifyContent:"left",
            flexDirection:"column"
          }}>
            <img
              src={img2}
              alt="SVG-3"
              style={{ width: "95px", height: "32px", marginBottom: "10px" }}
            />
            <img
              src={img3}
              alt="SVG-4"
              style={{ width: "100px", height: "32px", marginTop:"20px"}}
            />
          </Paper>
        </Grid>

        <Grid item xs={6} sm={6} md={2}>
          <Paper sx={{ padding: "16px", height: "100%", display:'flex', justifyContent:"left", flexDirection:"column"}}>
            <img
              src={img4}
              alt="SVG-5"
              style={{ width: "99px", height: "32px", marginBottom: "10px" }}
            />
            <img
              src={img5}
              alt="SVG-6"
              style={{ width: "110px", height: "27px", marginTop:"20px"}}
            />
          </Paper>
        </Grid>

        <Grid item xs={6} sm={6} md={2}>
          <Paper sx={{ padding: "16px", height: "100%", display:"flex", justifyContent:"left", flexDirection:"column" }}>
            <img
              src={img6}
              alt="SVG-7"
              style={{ width: "94px", height: "32px", marginBottom: "10px" }}
            />
            <img
              src={img7}
              alt="SVG-8"
              style={{ width: "100px", height: "32px",marginTop:"20px" }}
            />
          </Paper>
        </Grid>

        <Grid item xs={6} sm={6} md={2}>
          <Paper sx={{ padding: "16px", height: "100%", display:"flex", justifyContent:"left", flexDirection:"column" }}>
            <img
              src={img8}
              alt="SVG-9"
              style={{ width: "110px", height: "27px", marginBottom: "10px" }}
            />
            <img
              src={img9}
              alt="SVG-10"
              style={{ width: "103px", height: "32px",marginTop:"20px" }}
            />
          </Paper>
        </Grid>

        <Grid item xs={6} sm={6} md={2}>
          <Paper sx={{ padding: "16px", height: "100%", display:"flex", justifyContent:"left", flexDirection:"column" }}>
            <img
              src={img10}
              alt="SVG-11"
              style={{ width: "96px", height: "32px", marginBottom: "10px" }}
            />
            <img
              src={img11}
              alt="SVG-12"
              style={{ width: "96px", height: "32px",  marginTop:"20px"}}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default LandingPage2;
