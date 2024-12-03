import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material"; // Import necessary components from MUI
import { RiExchangeDollarFill } from "react-icons/ri";
import Brightness1RoundedIcon from "@mui/icons-material/Brightness1Rounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import backgrouundd from "../Images/Back.png";
import Avta from "../Images/Background+Border-2.png";
import border1 from "../Images/Background+Border.png";
import border2 from "../Images/Background+Border-1.png";
import border3 from "../Images/Background+Border-2.png"

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
function Grid2() {
  return (
    <Box marginTop={15}>
      <div>
        {/* Second Grid Layout with 12 columns */}
        <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
          {/* First Column (7/12 of the grid) */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                padding: 2,
                // height: "300px", // Set height for demonstration
                borderRadius: 2,
                backgroundColor: `url(${backgrouundd})`, // Make grid item transparent `url(${BackgroundPink})`
              }}
            >
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
              <Box
                sx={{
                  backgroundColor: "rgba(128, 128, 128, 0.1)",
                  borderRadius: 3,
                }}
              >
                {/*main box of contant*/}
                <Box
                  sx={{
                    px: { sm: "1rem" },
                    marginTop: "1.5rem",
                    marginTop: "1.5rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <RiExchangeDollarFill
                      style={{
                        fontSize: "1.5rem",
                        color: "gray",
                        marginTop: "1.5rem",
                      }}
                    />
                    <Typography
                      sx={{
                        color: "black",
                        paddingLeft: "0.8rem",
                        fontSize: "1rem",
                        fontFamily: "inter",
                        fontWeight: "500",
                        marginTop: "1.5rem",
                      }}
                    >
                      Otake Performance:
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex", // Inline buttons with flex
                    // Optional: Adds spacing between buttons
                    justifyContent: "start", // Optional: Centers the buttons
                    marginTop: "20px",
                    marginLeft: "15px",
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      fontFamily: "inter",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                    }}
                  >
                    New Users
                  </Button>
                  <Button sx={{ fontFamily: "inter" ,color:"gray",fontWeight:"200"}}>online Sales</Button>
                  <Button sx={{ fontFamily: "inter",color:"gray",fontWeight:"200" }}>Daily Sales</Button>
                </Box>
                <Grid container spacing={2} sx={{ marginTop: "1.5rem" }}>
                  {/* First column: spans 2 columns */}
                  <Grid item xs={2}>
                    <Stack
                      sx={{
                        paddingLeft: { lg: "1rem", md: "1rem", sm: "2rem" },
                      }}
                    >
                      <Avatar alt="Remy Sharp" src={Avta} />
                    </Stack>
                  </Grid>

                  {/* Second column: spans 5 columns */}
                  <Grid item xs={5}>
                    <Box sx={{ marginLeft: "12px" }}>
                      <Typography variant="body2" sx={{ fontFamily: "inter" }}>
                        TOP USER
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "inter",
                          fontWeight: "500",
                          color: "Black",
                          fontSize: "15px",
                        }}
                      >
                        John Smith
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Third column: spans 5 columns */}
                  <Grid item xs={5}>
                    <Box sx={{ marginRight: "25px" }}>
                      <Typography variant="body2" sx={{ fontFamily: "inter" }}>
                        PURCHASE
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "inter",
                          fontWeight: "500",
                          color: "Black",
                        }}
                      >
                        7 Items
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Typography sx={{marginTop:"4rem", paddingLeft:"2rem"}}>TOTAL NEW USERS</Typography>
                <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
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
                        alt={`Avata ${index + 1}`}
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
                  12.4k
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ margin: 0, fontFamily: "Inter", fontSize: "14px" }}
                  >
                    Otake Users
                  </Typography>
                </Typography>
              </Box>
              </Box>
            </Box>
          </Grid>

          {/* Second Column (5/12 of the grid) */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                padding: 2,
                height: "300px", // Set height for demonstration
                borderRadius: 2,
                backgroundColor: "transparent", // Make grid item transparent
              }}
            >
              <Typography variant="h6">Second Column (5/12)</Typography>
              <Typography variant="body2">
                This is the content for the second column. It takes up 5/12 of
                the grid width.
              </Typography>
            </Box>
            
          </Grid>
          
        </Grid>
      </div>
    </Box>
  );
}

export default Grid2;
