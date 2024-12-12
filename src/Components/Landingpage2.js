import React, { useState, useEffect, useRef } from "react";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import img from "../Images/SVG.png";
import img1 from "../Images/SVG-1.png";
import img2 from "../Images/SVG-2.png";
import img3 from "../Images/SVG-3.png";
import img4 from "../Images/SVG-4.png";
import img5 from "../Images/SVG-5.png";
import img6 from "../Images/SVG-6.png";
import img7 from "../Images/SVG-7.png";
import img8 from "../Images/SVG-8.png";
import img9 from "../Images/SVG-9.png";
import img10 from "../Images/SVG-10.png";
import img11 from "../Images/SVG-11.png";

const images = [
  img,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

function LandingPage2() {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const sectionRef = useRef(null); // Create a reference for the Paper element

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationTriggered(true); // Trigger animation when element is in view
        } else {
          setAnimationTriggered(false); // Reset animation when element leaves the viewport
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the Paper element
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Cleanup observer when component unmounts
      }
    };
  }, []);

  return (
    <Box sx={{ padding: { xs: "2rem" } }}>
      {/* First Section */}
      <Grid
        container
        spacing={2}
        sx={{
          marginLeft: { md: "100px" },
          gap: { xs: "10px", md: "0" },
          marginTop: { xs: "15px", sm: "8rem" },
        }}
      >
        <Grid item xs={12} md={6}>
          <Paper
            ref={sectionRef} // Attach the ref to this Paper element
            elevation={0}
            className={animationTriggered ? "fade-down-right" : ""}
            sx={{
              opacity: animationTriggered ? 1 : 0, // Initially hidden
              transform: animationTriggered ? "translate3d(0, 0, 0)" : "translate3d(-50px, -50px, 0)", // Control the animation
              transition: "opacity 1.8s ease-out, transform 1.8s ease-out", // Smooth transition
            }}
          >
            <Typography variant="h3" sx={{ marginTop: "15px" }}>
              A powerful solution to boost your business performance
            </Typography>
          </Paper>
        </Grid>

        {/* Second Section with opposite transition */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              height: "100%",
              marginRight: { md: "14rem" },
              opacity: animationTriggered ? 1 : 0, // Initially hidden
              transform: animationTriggered
                ? "translate3d(0, 0, 0)" // Final position
                : "translate3d(50px, 50px, 0)", // Start position (bottom-left)
              transition: "opacity 1.8s ease-out, transform 1.8s ease-out", // Smooth transition
            }}
          >
            <Typography sx={{ marginTop: "30px", color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              non enim lacus. Nullam congue blandit quam, sit amet scelerisque
              turpis.
            </Typography>
            <Button
              sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "10px",
                fontSize: "12px",
                fontWeight: 400,
                marginTop: "20px",
                textTransform: "none",
                padding: "8px 16px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              See Customer Reviews
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Sliding Images Section */}
      <Box
        sx={{
          overflow: "hidden", // Hide overflowing content
          position: "relative",
          marginTop: "3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            animation: "slide 25s linear infinite", // Longer sliding time for smoother effect
            "@keyframes slide": {
              "0%": { transform: "translateX(0)" }, // Start position
              "100%": { transform: "translateX(-100%)" }, // Slide to the left
            },
          }}
        >
          {/* Map over images for the sliding effect */}
          {images.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image}
              alt={`Slide-${index}`}
              sx={{
                width: "100px",
                height: "50px",
                margin: "0 20px",
                objectFit: "contain",
              }}
            />
          ))}
          {/* Duplicate the images for seamless looping */}
          {images.map((image, index) => (
            <Box
              key={`repeat-${index}`}
              component="img"
              src={image}
              alt={`Repeat-Slide-${index}`}
              sx={{
                width: "100px",
                height: "50px",
                margin: "0 20px",
                objectFit: "contain",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage2;
