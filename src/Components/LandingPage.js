import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  Box,
  Avatar,
  Stack,
} from "@mui/material";
import SectionBackground from "../Images/Section.png";
import Boy from "../Images/boy.png";
import Cloud from "../Images/cloud.png";
import Meetingup from "../Images/Background-1.png";
import Customer from "../Images/Background-2.png";
import border1 from "../Images/Background+Border.png";
import border2 from "../Images/Background+Border-1.png";
import border3 from "../Images/Background+Border-2.png";
import PowerfullButtonn from "./PowerfullButtonn"; // Assuming this is a custom button component
import LandingPage2 from "./Landingpage2";
import LandingPage3 from "./LandingPage3";
import LandingPage4 from "./LandingPage4";
import LandingPage5 from "./LandingPage5";
import LandingPage6 from "./LandingPage6";
import LandingPage7 from "./LandingPage7";
import LandingPage8 from "./LandingPage8";
import LandingPage9 from "./LandingPage9";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <style>
        {`
          @keyframes jump {
            0% {
              transform: translateY(0);
            }
            30% {
              transform: translateY(-30px); /* Jump up */
            }
            50% {
              transform: translateY(0); /* Back down */
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>

      <Box
        sx={{
          backgroundImage: `url(${SectionBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container style={{ height: "100%" }}>
          {/* Left Column */}
          <Grid item xs={12} md={6} style={{ padding: "20px" }}>
            <Paper
              style={{
                height: "100%",
                padding: "20px",
                background: "transparent",
                boxShadow: "none",
                marginLeft: "0px",
              }}
            >
              {/* PowerfullButtonn Component with Avatar */}
              <PowerfullButtonn />

              <Typography
                color="black"
                fontSize="60px"
                margin="5px"
                variant="h1"
                sx={{
                  fontWeight: 600,
                  marginRight: { xs: "0px", sm: "10px", md: "100px" },
                  marginTop: { xs: "20px", md: "0px" },
                }}
              >
                Our cutting-edge software solutions
              </Typography>

              <Typography
                fontFamily="Inter, sans-serif"
                color="black"
                fontSize="16px"
                fontWeight="100"
                sx={{
                  marginRight: { xs: "20px", sm: "1px", md: "200px" },
                  marginTop: { xs: "20px", md: "0px" },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
              </Typography>

              <Typography
                color="black"
                fontFamily="Inter"
                fontWeight="500"
                sx={{ marginTop: { md: "100px", xs: "50px" } }}
              >
                30 Day Free Trial No Credit Card Required:
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "flex-start", sm: "center" },
                  flexDirection: { xs: "column", sm: "row" },
                  marginTop: "20px",
                }}
              >
                <TextField
                  label="Enter your email"
                  variant="outlined"
                  size="small"
                  sx={{
                    marginRight: { sm: "2px" },
                    marginBottom: { xs: "8px", sm: "0" },
                    width: { xs: "100%", sm: "50%" },
                  }}
                />

                <Button
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "5px",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "10px",
                    padding: "8px 16px",
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    minWidth: "fit-content",
                    width: "auto",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    display: { xs: "none", sm: "inline-flex" },
                    marginTop: { sm: "0", xs: "8px" },
                    transition: "all 0.3s ease-in-out", // Added transition effect here
                    "&:hover": {
                      backgroundColor: "#333", // Darker shade on hover
                      transform: "scale(1.05)", // Slightly scale up the button
                    },
                  }}
                  onClick={() => alert("Email Submitted!")}
                >
                  Get Started ~ it’s free
                </Button>

                <Button
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "5px",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "10px",
                    padding: "8px 16px",
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    minWidth: "fit-content",
                    width: "auto",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    display: { xs: "block", sm: "none" },
                    marginTop: "8px",
                    transition: "all 0.3s ease-in-out", // Added transition effect here
                    "&:hover": {
                      backgroundColor: "#333", // Darker shade on hover
                      transform: "scale(1.05)", // Slightly scale up the button
                    },
                  }}
                  onClick={() => alert("Email Submitted!")}
                >
                  Get Started ~ it’s free
                </Button>
              </Box>

              <Typography fontSize="12px" marginTop="10px">
                ️ Add some additional disclaimer text here.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "80px",
                  position: "relative",
                }}
              >
                <Stack direction="row" spacing={0}>
                  {[border1, border2, border3].map((border, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "inline-block",
                        position: "relative",
                      }}
                    >
                      <Avatar
                        alt={`Avatar ${index + 1}`}
                        src={border}
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: "50%",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          border: "2px solid transparent",
                          transition: "all 0.3s ease-in-out", // Avatar transition effect
                          "&:hover": {
                            transform: "scale(1.2)", // Scale avatar on hover
                            opacity: 0.8, // Reduce opacity on hover
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Stack>

                <Typography
                  variant="h"
                  component="h4"
                  sx={{ margin: 0, fontFamily: "Inter", marginLeft: "20px" }}
                >
                  24k
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ margin: 0, fontFamily: "Inter", fontSize: "14px" }}
                  >
                    Active user
                  </Typography>
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Right Column */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "20px",
              position: "relative",
            }}
          >
            <Paper
              sx={{
                height: "100%",
                padding: "20px",
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <div style={{ position: "relative", textAlign: "center" }}>
                <img
                  src={Boy}
                  alt="Boy"
                  style={{
                    width: "100%",
                    maxWidth: "800px",
                    display: "block",
                    margin: "0 auto",
                    animation: "jump 1s infinite", // Jump animation applied here
                  }}
                />

                <img
                  src={Cloud}
                  alt="Cloud"
                  style={{
                    position: "absolute",
                    top: "-4%",
                    right: "20%",
                    width: "8vw",
                  }}
                />

                <img
                  src={Meetingup}
                  alt="MeetingUp"
                  style={{
                    position: "absolute",
                    bottom: "3%",
                    left: "-7%",
                    width: "25vw",
                  }}
                />

                <img
                  src={Customer}
                  alt="Customer"
                  style={{
                    position: "absolute",
                    top: "40%",
                    right: "3%",
                    width: "18vw",
                  }}
                />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <LandingPage2 />
      <LandingPage3 />
      <LandingPage4 />
      <LandingPage5 />
      <LandingPage6 />
      <LandingPage7 />
      <LandingPage8 />
      <LandingPage9 />
      <Footer />
    </>
  );
};

export default LandingPage;
