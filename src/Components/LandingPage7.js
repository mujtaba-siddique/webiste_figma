import React from "react";
import { Typography, Box, Button, Grid, Paper } from "@mui/material";
import Backgroundim from "../Images/Back.png";
import img1 from "../Images/h1.png";
import img2 from "../Images/h2.png";
import img3 from "../Images/h3.png";

function LandingPage7() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Backgroundim})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: "4rem",
       
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: {sm:"10vh"},
        }}
      >
        <Button
          sx={{
            color: "black",
            backgroundColor: "#FFE785",
            borderRadius: "5px",
            fontSize: "10px",
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            textTransform: "none",
            padding: "2px",
            border: "1px solid #ddd",
            "&:hover": {
              backgroundColor: "#f0f0f0",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            },
          }}
          onClick={() => alert("Product Button Clicked!")}
        >
          Blog Articles
        </Button>
      </Box>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          px: { sm: "5rem", md: "25rem" },
          marginTop: "1rem",
        }}
      >
        Take a look at the latest articles from otake
        <Typography
          variant="body1"
          sx={{ marginTop: "1.5rem", color: "black" }}
        >
          Doing so, they became ashamed of their nakedness and God expelled them
          from the Garden to prevent them from eating the fruit of the tree of
          life and becoming immortal. The narrative{" "}
        </Typography>
      </Typography>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            px: { sm: "5rem", lg: "10rem" },
            marginTop: { xs: "12px", sm: "3rem" },
          }}
        >
          <Grid item xs={12} sm={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                padding: "8px",
                borderRadius: "15px",
                paddingBottom: "2rem",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={img1}
                  alt="Cloud"
                  style={{
                    width: "352px",
                    height: "247.8px",
                    display: "block",
                    margin: "20px",
                  }}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  marginLeft: "1.5rem",
                  fontWeight: "500",
                }}
              >
                Shipping
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  marginTop: "1rem",
                  fontWeight: "600",
                  marginLeft: "10px",
                }}
              >
                Use data analytics to improve shipping times.
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginLeft: "10px", marginTop: "8px", color: "black" }}
              >
                forbidden. After doing so, they became ashamed of their
                nakedness and God expelled them from the Garden to prevent them
                from eating the fruit of the forbidden. After
              </Typography>
              <Button
                sx={{
                  width: "100%",
                  boxShadow: 3,

                  marginTop: "2rem",
                  color: "black",
                }}
              >
                Learn More
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                padding: "8px",
                borderRadius: "15px",
                paddingBottom: "2rem",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={img2}
                  alt="Cloud"
                  style={{
                    width: "352px",
                    height: "247.8px",
                    display: "block",
                    margin: "20px",
                  }}
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "black",
                    marginLeft: "1.5rem",
                    fontWeight: "500",
                  }}
                >
                  Data
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "black",
                    marginLeft: "1.5rem",
                    fontWeight: "500",
                  }}
                >
                  Sales Growth
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  marginTop: "1rem",
                  fontWeight: "600",
                  marginLeft: "10px",
                }}
              >
                Use data analytics to improve shipping times.
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginLeft: "10px", marginTop: "8px", color: "black" }}
              >
                forbidden. After doing so, they became ashamed of their
                nakedness and God expelled them from the Garden to prevent them
                from eating the fruit of the forbidden. After
              </Typography>
              <Button
                sx={{
                  width: "100%",
                  boxShadow: 3,

                  marginTop: "2rem",
                  color: "black",
                }}
              >
                Learn More
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                padding: "8px",
                borderRadius: "15px",
                paddingBottom: "2rem",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={img3}
                  alt="Cloud"
                  style={{
                    width: "352px",
                    height: "247.8px",
                    display: "block",
                    margin: "20px",
                  }}
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "black",
                    marginLeft: "1.5rem",
                    fontWeight: "500",
                  }}
                >
                  Data
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "black",
                    marginLeft: "1.5rem",
                    fontWeight: "500",
                  }}
                >
                  Shipping
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "black",
                    marginLeft: "1.5rem",
                    fontWeight: "500",
                  }}
                >
                  Sales Growth
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  marginTop: "1rem",
                  fontWeight: "600",
                  marginLeft: "10px",
                }}
              >
                Use data analytics to improve shipping times.
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginLeft: "10px", marginTop: "8px", color: "black" }}
              >
                forbidden. After doing so, they became ashamed of their
                nakedness and God expelled them from the Garden to prevent them
                from eating the fruit of the forbidden. After
              </Typography>
              <Button
                sx={{
                  width: "100%",
                  boxShadow: 3,

                  marginTop: "2rem",
                  color: "black",
                }}
              >
                Learn More
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default LandingPage7;
