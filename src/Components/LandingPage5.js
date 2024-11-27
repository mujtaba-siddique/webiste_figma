import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import ProductFeatures from "../Components/ProductButton";
import BackgroundPink from "../Images/Back.png"; // Importing the background image
import Brightness1RoundedIcon from "@mui/icons-material/Brightness1Rounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import eglo from "../Images/eglo.png"; // Importing the image for absolute positioning
import { PiNavigationArrow } from "react-icons/pi";
import Grid22 from "./grid2";

function LandingPage5() {
  return (
    <Box
      sx={{
        paddingLeft: { md: "3rem" },
        backgroundImage: `url(${BackgroundPink})`, // Use the imported image as the background
        backgroundSize: "cover", // Ensure the background image covers the entire page
        backgroundPosition: "center", // Center the background image
        marginLeft: { xs: "1rem", sm: "2rem", md: "3.5rem" }, // Responsive margin
        marginTop: { xs: "0.5rem", sm: "1rem", md: "1.5rem" }, // Responsive margin
      }}
    >
      {/* Main Grid Layout with 12 columns */}
      <Grid container>
        {/* First Column (7/12 of the grid) */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              height: "300px", // Set height for demonstration
              borderRadius: 2,
              backgroundColor: "transparent", // Make grid item transparent
            }}
          >
            <ProductFeatures />
            <Typography variant="h2" color="black" marginTop={2}>
              Powerful Solutions
            </Typography>
            <Typography variant="h2" color="grey">
              redefining growth.
            </Typography>
            <Typography
              variant="body2"
              marginTop={3}
              marginRight={{ xs: "100px", sm: "200px", md: "300px" }}
            >
              This is the content for the first column. It takes up 7/12 of the
              grid width. This is the content for the first column. It takes up
              7/12 of the grid width.
            </Typography>

            <Button
              variant="outlined"
              sx={{
                marginTop: 2,
                backgroundColor: "#1e2026", // Dark background
                color: "white", // White text color
                borderColor: "#1e2026", // Border matching the background
                fontFamily: "Inter, sans-serif", // Custom font
                fontWeight: 100, // Lighter font weight
                width: "150px", // Custom width
                height: "30px", // Custom height
                fontSize: "16px", // Default font size
                padding: "1px 1px", // Adjust padding to fit text nicely

                "&:hover": {
                  backgroundColor: "#33383f", // Darker background on hover
                  borderColor: "#33383f", // Darker border on hover
                },
              }}
            >
              Find Out More
            </Button>
          </Box>

          {/* CheckCircleRoundedIcon (Positioned Below the Button) */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              marginTop: { md: "70px", xs: "20px", lg: "15px" },
            }}
          >
            <CheckCircleRoundedIcon
              sx={{
                fontSize: "24px",
                color: "#1e2026",
                // marginTop: "50px", // Add space between the icon and text
              }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                // marginTop: "50px",
                marginLeft: "10px",
              }}
            >
              Register users in seconds
            </Typography>
            {/* Floating image with z-index for visibility */}
            <img
              src={eglo}
              alt="eglo"
              style={{
                transform: "translateX(150%)", // Default transform
                width: "48.72px", // Responsive width

                height: "48.72px", // Maintain aspect ratio
              }}
            />
          </Box>

          {/* CheckCircleRoundedIcon (Positioned Below the Button) */}
          <Box sx={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
            <CheckCircleRoundedIcon
              sx={{
                fontSize: "24px",
                color: "#1e2026",
              }}
            />
            <Typography sx={{ fontSize: "16px", marginLeft: "10px" }}>
              Collect authorization via secure portals.
            </Typography>
          </Box>
        </Grid>

        {/* Second Column (5/12 of the grid) */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              marginLeft: { md: "20px" },
              height: "300px", // Set height for demonstration
              borderRadius: 2,
              backgroundColor: "white", // Make grid item transparent
              marginTop: { xs: "30px", md: "20px" },
            }}
          >
            {/* Icons aligned to the left, Lock and otake.com centered */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "-webkit-fill-available",
              }}
            >
              <Brightness1RoundedIcon sx={{ color: "pink", width: "12px" }} />
              <Brightness1RoundedIcon
                sx={{
                  color: "orange",
                  opacity: 0.5,
                  width: "12px",
                  marginLeft: "1px",
                }}
              />
              <Brightness1RoundedIcon
                fontSize="1em"
                sx={{
                  color: "green",
                  opacity: 0.5,
                  width: "12px",
                  marginLeft: "1px",
                }}
              />

              {/* Centered lock and otake.com */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "10px", // Adjust spacing from the icons
                  width: "-webkit-fill-available",
                }}
              >
                <LockRoundedIcon
                  sx={{
                    fontSize: "small",
                    opacity: 0.3,
                  }}
                />
                <Typography color="black" sx={{ marginLeft: "5px" }}>
                  otake.com
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                marginLeft: { md: "20px", xs: "10px" },
                marginRight: { md: "20px", xs: "10px" },
                borderRadius: 2,
                backgroundColor: "rgba(128, 128, 128, 0.2)", // Grey with opacity of 0.78
              }}
            >
              <Box  display="flex" alignItems="center" justifyContent="space-around">
                <Typography variant="h1" marginTop={3} >
                  Otake 
                </Typography>
                <PiNavigationArrow fontSize={16}/>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid22></Grid22>
    </Box>
  );
}

export default LandingPage5;
