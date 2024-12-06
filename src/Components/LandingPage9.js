import React from "react";
import { Box, Button, Typography, Grid, Paper } from "@mui/material"; // Importing Box and Button from MUI
import backg from "../Images/backgroundpink.png"; // Corrected image import
import spg1 from "../Images/hatora.png";
import spg2 from "../Images/snak.png";
import spg3 from "../Images/SVGp1.png";
import spg4 from "../Images/SVGp2.png";
import spg5 from "../Images/SVGp3.png";
import spg6 from "../Images/Vector.png";
import { FaAngleDown } from "react-icons/fa6";

function LandingPage9() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backg})`, // Use the correct background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: "3rem", // You can adjust this as needed
        height: "100vh", // Full viewport height
      }}
    >
      {/* Centered Button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            color: "black",
            backgroundColor: "#FFE785",
            borderRadius: "5px",
            fontSize: "10px", // Increased font size for readability
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            textTransform: "none",
            padding: "3px", // Increased padding for button appearance
            border: "1px solid #ddd",
            "&:hover": {
              backgroundColor: "#f0f0f0",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            },
          }}
          onClick={() => alert("Product Button Clicked!")}
        >
          Frequently Asked Questions
        </Button>
      </Box>

      {/* FAQ Section with Grid */}
      <Grid
        container
        spacing={2}
        sx={{
          px: { sm: "5rem", lg: "8rem" },
          marginTop: { xs: "12px", sm: "0rem" },
        }}
      >
        {/* Left Image Section */}
        <Grid
          item
          md={2}
          sx={{
            display: { xs: "none", md: "block" },
            justifyContent: "flex-end", // Align image to the end
            alignItems: "flex-end", // Align image to the bottom
            marginTop: "4rem",
          }}
        >
          <img src={spg1} alt="Image" />
        </Grid>

        {/* Main FAQ Content Section */}
        <Grid item xs={12} sm={12} md={8}>
          <Typography
            variant="h2"
            sx={{ textAlign: "center", marginTop: "1.5rem" }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", marginTop: "0.5rem" }}
          >
            All Plans Come with a 14-day trial period
          </Typography>

          {/* Additional Grid Layout for FAQ Items */}
          <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
            <Grid item xs={6}>
              <Paper
                sx={{
                  backgroundColor: "white",
                  border: 2,
                  borderColor: "#9585FF",
                  padding: "2rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={spg6} />
                <Typography
                  sx={{ marginLeft: "6px", color: "black", fontWeight: "600" }}
                >
                  {" "}
                  Getting Started
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  padding: "2rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={spg3} />
                <Typography
                  sx={{ marginLeft: "6px", color: "black", fontWeight: "600" }}
                >
                  {" "}
                  Features and Support
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  padding: "2rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={spg4} />
                <Typography
                  sx={{ marginLeft: "6px", color: "black", fontWeight: "600" }}
                >
                  Security And Privacy
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  padding: "2rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={spg5} />
                <Typography
                  sx={{ marginLeft: "6px", color: "black", fontWeight: "600" }}
                >
                  {" "}
                  Octeka Assistance
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Box>
            {" "}
            <Typography variant="h3" sx={{ marginTop: "5rem" }}>
              {" "}
              Getting Started
            </Typography>
          </Box>
          <Box>
            <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center", marginTop:"2rem"}}>
              <Typography variant="body2" sx={{color:"black",fontWeight:"600"}}> What is Otake and how can it benefit my startup?</Typography>
              <FaAngleDown/>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center", marginTop:"2rem"}}>
              <Typography variant="body2" sx={{color:"black",fontWeight:"600"}}>Is Otake suitable for all types of startups, regardless of industry size?</Typography>
              <FaAngleDown/>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center", marginTop:"2rem"}}>
              <Typography variant="body2" sx={{color:"black",fontWeight:"600"}}> How do I begin using Otake to develop my startup business effectively?</Typography>
              <FaAngleDown/>
            </Box>
            
            
          </Box>
        </Grid>

        {/* Empty Grid Section (can be removed if not needed) */}
        <Grid item md={2} sx={{ display: { xs: "none", md: "block" } }}>
          <img
          src={spg2}
          style={{marginTop:"30rem",marginLeft:"6rem"}}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LandingPage9;
