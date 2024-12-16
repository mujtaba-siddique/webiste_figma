import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  TextField,
  Stack,
  Avatar,
} from "@mui/material";
import PowerfullButtonn from "./PowerfullButtonn";
import border1 from "../Images/Background+Border.png";
import border2 from "../Images/Background+Border-1.png";
import border3 from "../Images/Background+Border-2.png";

const LeftColumn = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
   
    const stepDelays = [500, 1000, 1500, 2000, 2500, 3000];

    
    const timeouts = stepDelays.map((delay, index) =>
      setTimeout(() => setStep(index + 1), delay)
    );

   
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []); 

  return (
    <Grid
      item
      xs={12}
      md={6}
      style={{
        padding: "20px",
        position: "sticky",
        top: "0",
        zIndex: 1,
      }}
    >
      <Paper
        style={{
          height: "100%",
          padding: "20px",
          background: "transparent",
          boxShadow: "none",
        }}
      >
        {/* Powerfull Button */}
        <PowerfullButtonn />

        {/* Main Heading */}
        <Typography
          color="black"
          fontSize="60px"
          margin="5px"
          variant="h1"
          sx={{
            fontWeight: 600,
            marginRight: { xs: "0px", sm: "10px", md: "100px" },
            marginTop: { xs: "20px", md: "0px" },
            opacity: step >= 1 ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            transitionDelay: "0.5s",
          }}
        >
          Our cutting-edge software solutions
        </Typography>

        {/* Description Text */}
        <Typography
          fontFamily="Inter, sans-serif"
          color="black"
          fontSize="16px"
          fontWeight="100"
          sx={{
            marginRight: { xs: "20px", sm: "1px", md: "200px" },
            marginTop: { xs: "20px", md: "0px" },
            opacity: step >= 2 ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            transitionDelay: "1s",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
        </Typography>

        {/* 30 Day Free Trial Text */}
        <Typography
          color="black"
          fontFamily="Inter"
          fontWeight="500"
          sx={{
            marginTop: { md: "100px", xs: "50px" },
            opacity: step >= 3 ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            transitionDelay: "1.5s",
          }}
        >
          30 Day Free Trial No Credit Card Required:
        </Typography>

        {/* Email Input and Button Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "flex-start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            marginTop: "20px",
            opacity: step >= 4 ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            transitionDelay: "2s",
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
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#333",
                transform: "scale(1.05)",
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
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#333",
                transform: "scale(1.05)",
              },
            }}
            onClick={() => alert("Email Submitted!")}
          >
            Get Started ~ it’s free
          </Button>
        </Box>

        {/* Disclaimer */}
        <Typography fontSize="12px" marginTop="10px">
          Add some additional disclaimer text here.
        </Typography>

        {/* User Stats Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "80px",
            position: "relative",
            opacity: step >= 5 ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            transitionDelay: "3s",
          }}
        >
          <Stack direction="row" spacing={0}>
            {[border1, border2, border3].map((border, index) => (
              <Box key={index} sx={{ display: "inline-block", position: "relative" }}>
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
                    transition: "all 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.2)", opacity: 0.8 },
                  }}
                />
              </Box>
            ))}
          </Stack>
          <Typography
            variant="h4"
            component="h4"
            sx={{ margin: 0, fontFamily: "Inter", marginLeft: "20px" }}
          >
            24k
            <Typography
              variant="body1"
              component="p"
              sx={{ margin: 0, fontFamily: "Inter", fontSize: "14px" }}
            >
              Active users
            </Typography>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default LeftColumn;
