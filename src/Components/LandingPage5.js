import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import BackgroundPink from "../Images/Back.png"; // Importing the background image
import Brightness1RoundedIcon from "@mui/icons-material/Brightness1Rounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import eglo from "../Images/eglo.png"; // Importing the image for absolute positioning
import { PiNavigationArrowFill } from "react-icons/pi";
import ProductFeatures from "../Components/ProductButton";
import Grid22 from "./grid2";
import { PiDiamondsFourFill } from "react-icons/pi";

function LandingPage5() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundPink})`, // Use the imported image as the background
        backgroundSize: "cover", // Ensure the background image covers the entire page
        backgroundPosition: "center", // Center the background image
        // marginLeft: { xs: "1rem", sm: "2rem", md: "3.5rem" }, // Responsive margin
        marginTop: { xs: "50px", sm: "250px" }, // Responsive margin
        px: { lg: "10rem", md: "5rem", sm: "3rem" },
        
      }}
    >
      {/* Main Grid Layout */}
      <Grid container>
        {/* First Column (7/12 of the grid) */}
        <Grid item xs={12} md={12} lg={7}>
          <Box
            sx={{
              // height: "300px",
              borderRadius: 2,
              backgroundColor: "transparent",
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
              variant="body1"
              marginTop={3}
              marginRight={{ sm: "100px", lg: "200px" }}
            >
              This is the content for the first column. It takes up 7/12 of the
              grid width.This is the content for the first column. It takes up
              7/12 of the grid width.This is the content for the first column.
              It takes up 7/12 of the grid width.This is the content for the
              first column. It takes up 7/12 of the grid width.This is the
              content for the first column. It takes up 7/12 of the grid width.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                marginTop: 4,
                backgroundColor: "#1e2026",
                color: "white",
                borderColor: "#1e2026",
                fontFamily: "Inter, sans-serif",
                fontWeight: 100,
                width: "150px",
                height: "30px",
                fontSize: "16px",
                padding: "1px 1px",
                "&:hover": {
                  backgroundColor: "#33383f",
                  borderColor: "#33383f",
                },
              }}
            >
              Find Out More
            </Button>
          </Box>

          {/* CheckCircleRoundedIcon Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              // marginTop: { md: "70px", xs: "20px", lg: "15px" },
              justifyContent: {lg: 'left', md:"left", sm:"space-between", xs:"space-between"},
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                verticalAlign: "middle",
                marginTop: "15px",
              }}
            >
              <CheckCircleRoundedIcon
                sx={{ fontSize: "24px", color: "#1e2026" }}
              />
              <Typography sx={{ fontSize: "16px", marginLeft: "10px" }}>
                Register users in seconds
              </Typography>
            </Box>
          <Box sx={{marginLeft: { md: "10rem", lg: "10rem" },}}>
          <img
              src={eglo}
              alt="eglo"
              style={{
                // paddingRight:{md:"5rem"},
                // marginLeft: { md: "10rem", lg: "10rem" },
                width: "60.72px",
                height: "60.72px",
              }}
            />
          </Box>
          </Box>

          {/* Additional CheckCircleRoundedIcon Section */}
          <Box sx={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
            <CheckCircleRoundedIcon
              sx={{ fontSize: "24px", color: "#1e2026" }}
            />
            <Typography sx={{ fontSize: "16px", marginLeft: "10px" }}>
              Collect authorization via secure portals.
            </Typography>
          </Box>
        </Grid>

        {/* Second Column (5/12 of the grid) */}
        <Grid item xs={12} md={12} lg={5}>
          <Paper
            sx={{
              // marginLeft: { md: "20px",sm:"10px"},
              //height: "300px",
              borderRadius: 2,
              // backgroundColor: "white",
              marginTop: { xs: "60px", sm: "6rem", md: "6rem", lg:"0px" },
            }}
          >
            {/* Top Icons */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <LockRoundedIcon
                  sx={{ fontSize: { xs: "1rem", sm: "12px" }, opacity: 0.3 }}
                />
                <Typography
                  color="black"
                  sx={{
                    marginLeft: "5px",
                    fontSize: { xs: "1rem", sm: "1rem" },
                  }}
                >
                  otake.com
                </Typography>
              </Box>
            </Box>

            {/* Bottom Typography Section */}
            <Box
              sx={{
                borderRadius: 2,
                backgroundColor: "rgba(128, 128, 128, 0.1)",
                
                margin:"10px",
                marginRight:"20px"
              }}
            >
              <Box
                sx={{
                  margin: { sm: "10px", xs: "10px" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h1"
                  // marginTop={3}
                  sx={{
                    fontSize: {
                      xs: "4rem", // small screens
                      sm: "4rem", // medium screens
                      md: "80px", // large screens
                    },
                  }}
                >
                  Otake
                </Typography>

                <Box
                  sx={{
                    marginLeft: { xs: "2rem", md: "3rem" },
                    display: "flex",
                    marginTop: { xs: "50px", sm: "15px" },
                  }}
                >
                  <PiNavigationArrowFill
                    style={{ marginBottom: "15px", color: "black" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "13px",
                      marginBottom: "auto",
                      border: "2px solid black",
                      borderRadius: "10px",
                      color: "black",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                      fontFamily: "Inter, sans-serif",
                      display: "inline-block",
                      marginTop: "10px",
                      background: "#ffff99",
                    }}
                  >
                    Designer
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontFamily: "inter",
                  marginTop: { xs: "-3px", md: "-25px" },
                  display: "flex",
                  fontSize: "15px",
                  marginLeft: "14px",
                }}
              >
                500+ Experience{" "}
                <Box
                  sx={{
                    marginLeft: { xs: "2rem", md: "5rem" },
                    display: "flex",
                    marginTop: { xs: "-4px", md: "3px" },
                  }}
                >
                  <PiNavigationArrowFill
                    style={{ marginBottom: "15px", color: "black" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "13px",
                      marginBottom: "auto",
                      border: "2px solid black",
                      borderRadius: "10px",
                      color: "black",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                      fontFamily: "Inter, sans-serif",
                      display: "inline-block",
                      marginTop: "10px",
                      background: "#6666ff",
                    }}
                  >
                    Flowbase
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginLeft: { xs: "2rem", md: "2rem" },
                    display: "flex",
                    marginTop: { xs: "-4px", md: "3px" },
                  }}
                >
                  <PiNavigationArrowFill
                    style={{ marginBottom: "15px", color: "black" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "13px",
                      marginBottom: "auto",
                      border: "2px solid black",
                      borderRadius: "10px",
                      color: "black",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                      fontFamily: "Inter, sans-serif",
                      display: "inline-block",
                      marginTop: "10px",
                      background: "#00cc99",
                    }}
                  >
                    John
                  </Typography>
                </Box>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                  marginLeft: "25px",
                }}
              >
                <PiDiamondsFourFill color="#6666ff" />
                <Typography sx={{ marginLeft: "10px", color: "#6666ff" }}>
                  {" "}
                  Enhanced User Experience
                </Typography>
              </Box>
              <Typography
                sx={{
                  border: "2px solid #6666ff",
                  padding: "20px",
                  color: "black",
                  marginTop: "10px",
                  marginLeft: "25px",
                  marginRight: "50px",
                }}
              >
                Intuitive interface foe seamless navigation and interaction
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                  marginLeft: "25px",
                }}
              >
                <PiDiamondsFourFill color="#6666ff" />
                <Typography sx={{ marginLeft: "10px", color: "#6666ff" }}>
                  {" "}
                  Customization Options
                </Typography>
              </Box>
              <Typography
                sx={{
                  border: "2px solid #6666ff",
                  padding: "20px",
                  color: "black",
                  marginTop: "10px",
                  marginLeft: "25px",
                  marginRight: "50px",
                }}
              >
                Intuitive interface foe seamless navigation and interaction
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // width: "100%", // Ensures it spans the full width of the parent
                  padding: "20px", // Optional padding for spacing
                }}
              >
                <Button
                  sx={{
                    color: "black",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: "500",
                    boxShadow: 1, // Box shadow for the button
                    width: "100%", // Adjust width as needed (relative to parent)
                    marginRight: "20px",
                  }}
                >
                  Redefining UI/UX
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Grid22 Component */}
      <Grid22 />
      
    </Box>
  );
}

export default LandingPage5;
