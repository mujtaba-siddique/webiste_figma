import React from "react";
import { Grid, Paper, Typography, Button, TextField, Box } from "@mui/material";
import SectionBackground from "../Images/Section.png";
import Boy from "../Images/boy.png";
import Cloud from "../Images/cloud.png";
import Meetingup from "../Images/Background-1.png";
import Customer from "../Images/Background-2.png";
import border1 from "../Images/Background+Border.png";
import border2 from "../Images/Background+Border-1.png";
import border3 from "../Images/Background+Border-2.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PowerfullButtonn from "./PowerfullButtonn";
import LandingPage2 from "./Landingpage2";
import LandingPage3 from "./LandingPage3";
import LandingPage4 from "./LandingPage4";
import LandingPage5 from "./LandingPage5";
import LandingPage6 from "./LandingPage6";

const LandingPage = () => {
  return (
    <>
      <div
        style={{
          // height: "100vh",
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
              {/* Custom Button */}
              <PowerfullButtonn />

              <Typography
                color="black"
                fontSize="60px"
                margin="5px"
                variant="h1"
                sx={{
                  fontWeight: 600,
                  marginRight: { xs: "0px", sm: "10px", md: "100px" },
                }}
              >
                Our cutting-edge software solutions
              </Typography>

              <Typography
                fontFamily="Inter, sans-serif"
                color="black"
                fontSize="16px"
                fontWeight="100"
                sx={{ marginRight: { xs: "20px", sm: "1px", md: "200px" } }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                non enim lacus.
              </Typography>

              <Typography
                marginTop="100px"
                color="black"
                fontFamily="Inter"
                fontWeight="500"
              >
                30 Day Free Trial No Credit Card Required:
              </Typography>

              {/* Email Input and Button */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <TextField
                  label="Enter your email"
                  variant="outlined"
                  size="small"
                  sx={{
                    marginRight: "2px",
                  }}
                />
                <Button
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "5px",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    padding: "8px 16px",
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    minWidth: "fit-content",
                    width: "auto",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    marginLeft: "20px",
                  }}
                  onClick={() => alert("Email Submitted!")}
                >
                  Get Started ~ it’s free
                </Button>
              </Box>

              <Typography fontSize="12px" marginTop="10px">
                ️ Add some additional disclaimer text here.
              </Typography>

              {/* Avatar Stack with Borders */}
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
                        src={border} // Using imported images
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: "50%",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          border: "2px solid transparent",
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

          {/* Right Column (Hide on mobile view, show on medium and larger screens) */}
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
              {/* Container for Boy and Cloud images */}
              <div style={{ position: "relative", textAlign: "center" }}>
                <img
                  src={Boy}
                  alt="Boy"
                  style={{
                    width: "100%",
                    maxWidth: "800px",
                    display: "block",
                    margin: "0 auto",
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
      </div>
      <LandingPage2></LandingPage2>
      <LandingPage3></LandingPage3>
      <LandingPage4></LandingPage4>
      <LandingPage5></LandingPage5>
      <LandingPage6></LandingPage6>
      
    </>
  );
};

export default LandingPage;
