import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import logo from "../Images/Link.png";
import { FaInstagram, FaRegCopyright } from "react-icons/fa";
import { CiTwitter, CiFacebook, CiYoutube } from "react-icons/ci";
import dothai from "../Images/dothai.png";

function FooterGrid() {
  const sectionTitleStyle = {
    fontFamily: "Inter",
    fontWeight: "bold",
    fontSize: "1.2rem",
  };

  const linkStyle = {
    marginTop: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  };

  return (
    <Box sx={{ padding: { xs: "2rem", md: "4rem" } }}>
      <Grid container spacing={4}>
        {/* First Column (Logo, Social Media, Description) */}
        <Grid
          item
          xs={12} // Full width on xs screens
          sm={12}
          md={4}
          lg={4}
          sx={{
            textAlign: { xs: "center", lg: "left" },
            marginBottom: { xs: "2rem", lg: "0" },
          }}
        >
          <img src={logo} alt="Logo" style={{ width: "120px" }} />
          <Box sx={{ marginTop: "1.5rem" }}>
            <CiTwitter style={{ margin: "0 10px", fontSize: "1.5rem" }} />
            <FaInstagram style={{ margin: "0 10px", fontSize: "1.5rem" }} />
            <CiFacebook style={{ margin: "0 10px", fontSize: "1.5rem" }} />
            <CiYoutube style={{ margin: "0 10px", fontSize: "1.5rem" }} />
          </Box>
          <Typography
            variant="body2"
            sx={{
              marginTop: "1rem",
              color: "#666",
              maxWidth: "300px",
              marginX: { xs: "auto", lg: "0" },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula.
          </Typography>
        </Grid>

        {/* Pages Section */}
        <Grid
          item
          xs={4} // 4 columns on xs screens
          sm={4}
          md={2}
          lg={2}
          sx={{
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography sx={sectionTitleStyle}>Pages</Typography>
          <Typography variant="body2" sx={linkStyle}>Home</Typography>
          <Typography variant="body2" sx={linkStyle}>About</Typography>
          <Typography variant="body2" sx={linkStyle}>Pricing</Typography>
          <Typography variant="body2" sx={linkStyle}>
            Contact
            <img
              src={dothai}
              alt="New"
              style={{ width: "20px", marginLeft: "5px" }}
            />
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "600", color: "red", marginLeft: "5px" }}
            >
              New
            </Typography>
          </Typography>
        </Grid>

        {/* Solutions Section */}
        <Grid
          item
          xs={4} // 4 columns on xs screens
          sm={4}
          md={2}
          lg={2}
          sx={{
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography sx={sectionTitleStyle}>Solutions</Typography>
          <Typography variant="body2" sx={linkStyle}>Startup Support</Typography>
          <Typography variant="body2" sx={linkStyle}>
            Growth AI
            <img
              src={dothai}
              alt="New"
              style={{ width: "20px", marginLeft: "5px" }}
            />
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "600", color: "red", marginLeft: "5px" }}
            >
              New
            </Typography>
          </Typography>
          <Typography variant="body2" sx={linkStyle}>Business Support</Typography>
          <Typography variant="body2" sx={linkStyle}>Shipping</Typography>
        </Grid>

        {/* Resources Section */}
        <Grid
          item
          xs={4} // 4 columns on xs screens
          sm={4}
          md={2}
          lg={2}
          sx={{
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography sx={sectionTitleStyle}>Resources</Typography>
          <Typography variant="body2" sx={linkStyle}>Blog</Typography>
          <Typography variant="body2" sx={linkStyle}>Community</Typography>
          <Typography variant="body2" sx={linkStyle}>Tutorials</Typography>
          <Typography variant="body2" sx={linkStyle}>
            Monitoring
            <img
              src={dothai}
              alt="New"
              style={{ width: "20px", marginLeft: "5px" }}
            />
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "600", color: "red", marginLeft: "5px" }}
            >
              New
            </Typography>
          </Typography>
        </Grid>
      </Grid>

      {/* Footer Bottom Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "3rem",
          borderTop: "1px solid #ddd",
          paddingTop: "1rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaRegCopyright />
          <Typography variant="body2" sx={{ color: "#666" }}>
            Otake Template | Built by{" "}
            <Typography
              component="span"
              sx={{ fontWeight: "bold" }}
            >
              Flowbase
            </Typography>{" "}
            - Powered by{" "}
            <Typography
              component="span"
              sx={{ fontWeight: "bold" }}
            >
              Webflow
            </Typography>
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ marginTop: { xs: "1rem", md: "0" } }}>
          License
        </Typography>
      </Box>
    </Box>
  );
}

export default FooterGrid;
