import React from "react";
import blackbackground from "../Images/blackbackgroundhai.png";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import tree1 from "../Images/tree1.png";
import tree2 from "../Images/tree2.png";
import { FaStar } from "react-icons/fa";

function LandingPage6() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${blackbackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // py:"10vh",
        marginTop: "4rem", // Consider if this is needed based on the parent element
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "10vh",
        }}
      >
        <Button
          sx={{
            color: "black", // Text color
            backgroundColor: "#FFE785", // Yellow background color

            borderRadius: "5px", // Rounded corners
            fontSize: "10px", // Slightly larger font size for readability
            cursor: "pointer", // Pointer cursor on hover
            fontFamily: "Inter, sans-serif", // Font family
            fontWeight: 600, // Font weight
            // marginTop: "20px", // Margin at the top
            textTransform: "none", // Prevent uppercase transformation
            padding: "2px", // Adjusted padding for a more balanced size
            border: "1px solid #ddd", // Light border to give subtle definition
            "&:hover": {
              backgroundColor: "#f0f0f0", // Subtle hover effect (light gray background)
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Hover shadow for better interactivity
            },
          }}
          onClick={() => alert("Product Button Clicked!")}
        >
          Product Features
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { lg: "20rem", xs: "8px" },
          marginTop: "12px",
        }}
      >
        <img
          src={tree1}
          alt="tree"
          style={{
            width: "29.23px",
            height: "29.23px",
          }}
        />
        <Typography
          variant="h1"
          sx={{
            fontSize: { sm: "2rem", xs: "1.2rem" },
            color: "white",
            marginLeft: { xs: "10px", md: "25px", lg: "0px" },
          }}
        >
          Hear what our customers have to say
        </Typography>

        <img
          src={tree2}
          alt="tree"
          style={{
            width: "29.23px",
            height: "29.23px",
          }}
        />
      </Box>

      <Grid
        container
        spacing={4}
        sx={{ px: { xs: "5rem", lg: "15rem" }, marginTop: "12px" }}
      >
        {/* First column */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper
            elevation={3}
            sx={{ padding: "8px", backgroundColor: "#17161D" }}
          >
            <Box sx={{ backgroundColor: "Black", borderRadius: "8px" }}>
              <Typography
                sx={{
                  padding: "1rem",
                  color: "#FFE785",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaStar sx={{ marginLeft: "3px" }} />
                <FaStar sx={{ marginLeft: "3px" }} />
                <FaStar sx={{ marginLeft: "3px" }} />
                <FaStar sx={{ marginLeft: "3px" }} />
                <FaStar sx={{ marginLeft: "3px" }} />
              </Typography>
              <Typography>This is the content for the first column.</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Second column */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper
            elevation={3}
            sx={{ padding: "16px", backgroundColor: "#17161D" }}
          >
            <Typography variant="h6">Second Column</Typography>
            <Typography>This is the content for the second column.</Typography>
          </Paper>
        </Grid>
        {/* Third column */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper
            elevation={3}
            sx={{ padding: "16px", backgroundColor: "#17161D" }}
          >
            <Typography variant="h6">First Column</Typography>
            <Typography>This is the content for the first column.</Typography>
          </Paper>
        </Grid>

        {/* Fourth column */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper
            elevation={3}
            sx={{ padding: "16px", backgroundColor: "#17161D" }}
          >
            <Typography variant="h6">Second Column</Typography>
            <Typography>This is the content for the second column.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LandingPage6;
