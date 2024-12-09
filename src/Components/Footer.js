import React from "react";
import backgro from "../Images/blackbackgroundhai.png";
import FooterGrid from "./FooterGrid";
import {
  Box,
  Typography,
  Grid,
  Divider,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import img1 from "../Images/brain.png";
import img2 from "../Images/finger.png";
import img3 from "../Images/kela.png";
import { BsDot } from "react-icons/bs";

function Footer() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgro})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        borderRadius: 5,
        p: 3,
      }}
    >
      {/* Feature Columns */}
      <Grid
        container
        spacing={2}
        sx={{
          px: { sm: "3rem", lg: "8rem" },
          marginTop: { sm: "6rem" },
        }}
      >
        {[
          { img: img1, title: "INNOVATION", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus." },
          { img: img2, title: "CLOUD SECURE", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus." },
          { img: img3, title: "GROWTH DRIVEN", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus." },
        ].map((item, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            key={index}
            sx={{
              textAlign: "center",
            }}
          >
            <img src={item.img} alt={item.title.toLowerCase()} />
            <Typography variant="h6" sx={{ marginTop: { sm: "2rem" } }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ marginX: "12px", marginTop: "5px" }}>
              {item.text}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Divider Section */}
      <Grid
        container
        spacing={0}
        sx={{
          px: { sm: "3rem", lg: "8rem" },
          marginTop: { sm: "6rem" },
        }}
      >
        <Grid item xs={5.5}>
          <Divider sx={{ backgroundColor: "#878493" }} />
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            textAlign: "center",
            height: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#878493",
          }}
        >
          <BsDot />
        </Grid>
        <Grid item xs={5.5}>
          <Divider sx={{ backgroundColor: "#878493" }} />
        </Grid>
      </Grid>

      {/* Newsletter Section */}
      <Grid
        container
        spacing={2}
        sx={{
          px: { sm: "3rem", lg: "8rem" },
          marginTop: { xs: "1.5rem", sm: "6rem" },
        }}
      >
        {/* Newsletter Text */}
        <Grid
          item
          sm={6}
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontFamily: "Inter, sans-serif" }}>
            Subscribe to our newsletter for updates:
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "1rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>

        {/* Newsletter Input */}
        <Grid
  item
  sm={6}
  sx={{
    textAlign: "center",
  }}
>
  <Typography variant="h6" sx={{ fontFamily: "Inter, sans-serif" }}>
    30-Day Free Trial - No Credit Card Required:
  </Typography>
  <Box sx={{ marginTop: "1rem", textAlign: "center" }}>
    <TextField
      label="Enter your email"
      variant="outlined"
      size="small"
      sx={{
        width: { xs: "90%", md: "70%" },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button
              sx={{
                backgroundColor: "#9585FF",
                color: "white",
                borderRadius: "5px",
                fontSize: "12px",
                padding: "8px 16px",
                textTransform: "none",
                display: { xs: 'none', md: 'inline-flex' }, // Hide button in xs, show in sm and above
              }}
            >
              Get Started ~ it's free
            </Button>
          </InputAdornment>
        ),
      }}
    />

    {/* Button for xs view (mobile) */}
    <Box sx={{ display: { sm: 'block', md: 'none' }, marginTop: '1rem' }}>
      <Button
        sx={{
          backgroundColor: "#9585FF",
          color: "white",
          borderRadius: "5px",
          fontSize: "12px",
          padding: "8px 16px",
          textTransform: "none",
          width: "100%", // To make button the same width as the input field
        }}
      >
        Get Started ~ it's free
      </Button>
    </Box>
  </Box>
</Grid>

      </Grid>

      {/* Footer Divider */}
      <Grid
        container
        spacing={0}
        sx={{
          px: { sm: "3rem", lg: "8rem" },
          marginTop: { xs: "2rem", sm: "6rem" },
        }}
      >
        <Grid item xs={5.5}>
          <Divider sx={{ backgroundColor: "#878493" }} />
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            textAlign: "center",
            height: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#878493",
          }}
        >
          <BsDot />
        </Grid>
        <Grid item xs={5.5}>
          <Divider sx={{ backgroundColor: "#878493" }} />
        </Grid>
      </Grid>

      {/* Footer Grid */}
      <FooterGrid />
    </Box>
  );
}

export default Footer;
