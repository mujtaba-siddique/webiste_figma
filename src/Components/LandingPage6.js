import React from "react";
import blackbackground from "../Images/blackbackgroundhai.png";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import tree1 from "../Images/tree1.png";
import tree2 from "../Images/tree2.png";
import { FaStar, FaArrowRight } from "react-icons/fa";
import svgn1 from "../Images/svgn1.png";
import svgn2 from "../Images/svgn2.png";
import svgn3 from "../Images/svgn3.png";
import svgn4 from "../Images/svgn4.png";

function LandingPage6() {
  return (
    <Box
      sx={{
        
        backgroundImage: `url(${blackbackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: {xs:"4rem",md:"15rem"},
        borderRadius:2,
        paddingBottom:"10vh"
       
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
            fontSize: { sm: "2rem", xs: "1.2rem", md: "2.4rem" },
            color: "white",
            marginLeft: { xs: "15px", md: "25px", lg: "0px" },
            marginTop:"12px"
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
        spacing={2}
        sx={{ px: { sm: "5rem", lg: "15rem" }, marginTop: {xs:"12px",sm:"3rem"} }}
      >
        {/* First Column */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper
            elevation={3}
            sx={{ padding: "8px", backgroundColor: "#17161D" ,paddingBottom:"2rem",borderRadius: "15px"}}
          >
            <Box sx={{ backgroundColor: "Black", borderRadius: "15px" }}>
              <Typography
                sx={{
                  padding: "1rem",
                  color: "#FFE785",
                  display: "flex",
                  alignItems: "center",
                  
                }}
              >
                <FaStar style={{ marginLeft: "3px" }} />
                <FaStar style={{ marginLeft: "3px" }} />
                <FaStar style={{ marginLeft: "3px" }} />
                <FaStar style={{ marginLeft: "3px" }} />
                <FaStar style={{ marginLeft: "3px" }} />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  paddingLeft: "1rem",
                  fontFamily: "inter",
                  fontSize: "1rem",
                }}
              >
                Revolutionizing Transactions:
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  paddingLeft: "1rem",
                  fontFamily: "inter",
                  marginTop:"1rem"
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                non enim lacus. Nullam congue blandit quam, sit amet scelerisque
                turpis pellentesque eu.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "2rem",
                  paddingLeft: "1rem",
                  paddingBottom:"1rem"
                }}
              >
                <img
                  src={svgn3}
                  alt="icon"
                  style={{
                    width: "70.34px",
                    height: "10.31px",
                    // marginTop: "16px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingRight: "1rem",
                    cursor:"pointer"
                  }}
                >
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Read More
                  </Typography>
                  <FaArrowRight style={{ color: "white", marginLeft: "6px" }} />
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        {/* First Column */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper
            elevation={3}
            sx={{ padding: "8px", backgroundColor: "#17161D" ,paddingBottom:"2rem",borderRadius: "15px"}}
          >
            <Box sx={{ backgroundColor: "Black", borderRadius: "15px" }}>
              <Typography
                sx={{
                  padding: "1rem",
                  color: "#FFE785",
                  display: "flex",
                  alignItems: "center",
                  
                }}
              >
                <FaStar style={{ marginLeft: "3px", color:"#85C6FF" }} />
                <FaStar style={{ marginLeft: "3px" , color:"#85C6FF" }} />
                <FaStar style={{ marginLeft: "3px" , color:"#85C6FF" }} />
                <FaStar style={{ marginLeft: "3px", color:"#85C6FF"  }} />
                <FaStar style={{ marginLeft: "3px" , color:"#85C6FF" }} />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  paddingLeft: "1rem",
                  fontFamily: "inter",
                  fontSize: "1rem",
                }}
              >
                Empowering growth:
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  paddingLeft: "1rem",
                  fontFamily: "inter",
                  marginTop:"1rem"
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                non enim lacus. Nullam congue blandit quam, sit amet scelerisque
                turpis pellentesque eu.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "2rem",
                  paddingLeft: "1rem",
                  paddingBottom:"1rem"
                }}
              >
                <img
                  src={svgn1}
                  alt="icon"
                  style={{
                    width: "70.34px",
                    height: "10.31px",
                    // marginTop: "16px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingRight: "1rem",
                    cursor:"pointer"
                  }}
                >
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Read More
                  </Typography>
                  <FaArrowRight style={{ color: "white", marginLeft: "6px" }} />
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        {/* First Column */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper
            elevation={3}
            sx={{ padding: "8px", backgroundColor: "#17161D" ,paddingBottom:"2rem",borderRadius: "15px"}}
          >
            <Box sx={{ backgroundColor: "Black", borderRadius: "15px" }}>
              <Typography
                sx={{
                  padding: "1rem",
                  color: "#FFE785",
                  display: "flex",
                  alignItems: "center",
                  
                }}
              >
                <FaStar style={{ marginLeft: "3px",color:"#FF85D6" }} />
                <FaStar style={{ marginLeft: "3px",color:"#FF85D6" }} />
                <FaStar style={{ marginLeft: "3px",color:"#FF85D6" }} />
                <FaStar style={{ marginLeft: "3px",color:"#FF85D6" }} />
                <FaStar style={{ marginLeft: "3px",color:"#FF85D6" }} />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  paddingLeft: "1rem",
                  fontFamily: "inter",
                  fontSize: "1rem",
                }}
              >
                Leverage analytics for growth:
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  paddingLeft: "1rem",
                  fontFamily: "inter",
                  marginTop:"1rem"
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                non enim lacus. Nullam congue blandit quam, sit amet scelerisque
                turpis pellentesque eu.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "2rem",
                  paddingLeft: "1rem",
                  paddingBottom:"1rem"
                }}
              >
                <img
                  src={svgn2}
                  alt="icon"
                  style={{
                    width: "80.34px",
                    height: "15.31px",
                    // marginTop: "16px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingRight: "1rem",
                    cursor:"pointer"
                  }}
                >
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Read More
                  </Typography>
                  <FaArrowRight style={{ color: "white", marginLeft: "6px" }} />
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        {/* First Column */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper
            elevation={3}
            sx={{ padding: "8px", backgroundColor: "#17161D" ,paddingBottom:"2rem",borderRadius: "15px"}}
          >
            <Box sx={{ backgroundColor: "Black", borderRadius: "15px" }}>
              <Typography
                sx={{
                  padding: "1rem",
                  color: "#FFE785",
                  display: "flex",
                  alignItems: "center",
                  
                }}
              >
                <FaStar style={{ marginLeft: "3px",color:"#9585FF" }} />
                <FaStar style={{ marginLeft: "3px" ,color:"#9585FF"}} />
                <FaStar style={{ marginLeft: "3px" ,color:"#9585FF"}} />
                <FaStar style={{ marginLeft: "3px" ,color:"#9585FF"}} />
                <FaStar style={{ marginLeft: "3px" ,color:"#9585FF"}} />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  paddingLeft: "1rem",
                  fontFamily: "inter",
                  fontSize: "1rem",
                }}
              >
                Streamline workflows:
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  paddingLeft: "1rem",
                  fontFamily: "inter",
                  marginTop:"1rem"
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                non enim lacus. Nullam congue blandit quam, sit amet scelerisque
                turpis pellentesque eu.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "2rem",
                  paddingLeft: "1rem",
                  paddingBottom:"1rem"
                }}
              >
                <img
                  src={svgn4}
                  alt="icon"
                  style={{
                    width: "120px",
                    height: "24px",
                    marginTop: "0px",
                  }}/>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingRight: "1rem",
                    cursor:"pointer"
                  }}
                >
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Read More
                  </Typography>
                  <FaArrowRight style={{ color: "white", marginLeft: "6px" }} />
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        

       
      </Grid>
    </Box>
  );
}

export default LandingPage6;
