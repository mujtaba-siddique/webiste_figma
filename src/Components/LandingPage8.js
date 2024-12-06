import React from "react";
import { Box, Button, Typography } from "@mui/material";
import blackbb from "../Images/blackbackgroundhai.png";
import iq1 from "../Images/iq1.png";
import { BsDot } from "react-icons/bs";

function LandingPage8() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        position: "relative",
        backgroundImage: `url(${blackbb})`,
        // backgroundPosition: 'center',
        backgroundSize: "cover",
        width: { lg: "944px" },
        height: "394px",
        marginTop: { xs: "6rem", lg: "0px" },
        margin: { lg: "14rem" },
        borderRadius: 3,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: "-10%" },
          left: { lg: "50%", xs: "20%" },
          transform: {
            lg: "translateX(-50%)",
            md: "translateX(320%)",
            sm: "translateX(225%)",
            xs: "translateX(100%)",
          },
        }}
      >
        <img
          src={iq1}
          alt="IQ Image"
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </Box>
      <Box>
        <Typography
          variant="h2"
          sx={{ color: "white", marginTop: "-4rem", marginLeft: "30px" }}
        >
          {" "}
          Get Started with Otake.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          {" "}
          Explore a new realm of efficency and success with our cutting-edge
          SaaS
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            
            justifyContent: "space-between",
            marginLeft: "2rem",
            marginRight: "2rem",
            marginTop: "1rem",
          }}
        >
          <Typography variant="body1" sx={{ color: "white" }}>
            120 Employes
          </Typography>
          <BsDot style={{ color: "gray" }}/>
          
          <Typography variant="body1" sx={{ color: "white" }}>
            $31.5M Reaised
          </Typography>
          <BsDot style={{ color: "gray" }}/>
          <Typography variant="body1" sx={{ color: "white" }}>
            7 Years old
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "-4rem",
            marginTop: "2rem",
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "white", color: "black",fontFamily:
              "inter"
             }}
          >
            Apply Now
            <Typography sx={{ marginLeft: "12px",fontFamily:
              "inter" }}>
              {" "}
              ~ Otake Template
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage8;
