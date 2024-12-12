import React, { useState, useEffect } from "react";
import { Button, Box, Typography, Grid, Paper } from "@mui/material";
import Backgroundpic from "../Images/backgroundpink.png";
import A from "../Images/A.png";
import B from "../Images/B.png";
import C from "../Images/C.png";
import Col1 from "./Col1"; // Assuming these are your custom components
import Col2 from "./Col2";
import Col3 from "./Col3";

const LandingPage3 = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection observer hook to trigger transitions when an element comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger visibility change when in view
        } else {
          setIsVisible(false); // Reset visibility when out of view
        }
      },
      { threshold: 0.9 } // Trigger when 50% of the element is in the viewport
    );

    const element = document.getElementById('landing-page');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const columnsData = [
    {
      id: 1,
      image: B,
      title: "Keep on top of project management.",
      description: "This is the content for column 1. You can add text, images, or any other content here.",
      component: <Col1 />,
      buttonText: "Learn More",
      isButtonVisible: true,
    },
    {
      id: 2,
      image: A,
      title: "Analyze your business results in one place.",
      description: "This is the content for column 2. You can add text, images, or any other content here.",
      component: <Col2 />,
      buttonText: "Learn More",
      isButtonVisible: true,
    },
    {
      id: 3,
      image: C,
      title: "Keep track of sales and shipping progress.",
      description: "This is the content for column 3. You can add text, images, or any other content here.",
      component: <Col3 />,
      buttonText: "Learn More",
      isButtonVisible: true,
    },
  ];

  return (
    <div id="landing-page">
      {/* Product Features Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: { xs: "50px", sm: "10rem" },
        }}
      >
        <Button
          className={`button-transition ${isVisible ? "fade-in" : ""}`}
          sx={{
            color: "black",
            backgroundColor: "#FFE785",
            borderRadius: "10px",
            fontSize: { xs: "10px", sm: "12px", md: "14px" },
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            textTransform: "none",
            padding: { xs: "6px 12px", sm: "8px 16px" },
            cursor: "pointer",
          }}
          onClick={() => alert("Powerful Solutions Clicked!")}
          aria-label="Product Features Button"
        >
          Product Features
        </Button>
      </Box>

      {/* Main Header */}
      {/* Main Header */}
<Typography
  variant="h1"
  className={` ${isVisible ? "fade-in-visible" : ""}`}
  sx={{
    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
    textAlign: "center",
    marginTop: "20px",
    marginX: { xs: "20px", sm: "50px", md: "auto" }, // 'auto' to center on medium and larger screens
    maxWidth: { xs: "100%", sm: "80%", md: "80%" }, // Adjusted max width for better visibility on md screens
    
    transition: "opacity 1s ease-in-out", // Smooth fade-in transition for visibility
    display: { xs: "block", sm: "block", md: "block" }, // Hide on xs and sm, show on md and larger
  }}
>
  Streamline tasks with optimized workflows
</Typography>

{/* Subtitle */}
<Typography
  variant="body1"
  className={`${isVisible ? "fade-in-visible" : ""}`}
  sx={{
    color: "black",
    textAlign: "center",
    marginTop: "20px",
    marginX: { xs: "20px", sm: "50px", md: "auto" }, // 'auto' to center on medium and larger screens
    maxWidth: { xs: "100%", sm: "80%", md: "60%" }, // Set max width to control overflow
    display: { xs: "block", sm: "block", md: "block" }, // Hide on xs and sm, show on md and larger
  }}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
</Typography>

      {/* Background and 3-column Grid */}
      <div
        style={{
          backgroundImage: `url(${Backgroundpic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid
          container
          spacing={{ xs: 7, md: 4 }}
          sx={{
            padding: { xs: "20px", md: "40px" },
            display: "flex",
            flexWrap: "wrap",
            marginTop: { md: "20px", xs: "20px" },
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          {columnsData.map((column, index) => (
            <GridItem key={column.id} column={column} delay={index * 300} />
          ))}
        </Grid>
      </div>

      <style jsx>{`
        /* Button transition on hover */
        .button-transition {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .button-transition:hover {
          transform: scale(1.05);
          opacity: 0.8;
        }

        /* Fade-in effect for Typography */
        .fade-in {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .fade-in-visible {
          opacity: 1;
        }

        /* Grid item transition (slide-up and fade-in) */
        .grid-item-transition {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .grid-item-transition-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Sequential transition delay */
        .grid-item-transition-visible {
          transition-delay: var(--transition-delay);
        }
      `}</style>
    </div>
  );
};

// Grid Item Component with transitions and sequential appearance
const GridItem = ({ column, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger visibility change when in view
        } else {
          setIsVisible(false); // Reset visibility when out of view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in the viewport
    );
    const element = document.getElementById(`grid-item-${column.id}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [column.id]);

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      id={`grid-item-${column.id}`}
      className={`grid-item-transition ${isVisible ? "grid-item-transition-visible" : ""}`}
      style={{ "--transition-delay": `${delay}ms` }} // Set delay for sequential transition
    >
      <Paper
        sx={{
          padding: 2,
          borderRadius: "16px",
          boxShadow: 3,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          minHeight: "37rem",
        }}
      >
        <img
          src={column.image}
          alt={column.title}
          style={{
            position: "absolute",
            top: "-7.5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "80px",
          }}
        />
        <Typography
          variant="h3"
          fontSize="1.5rem"
          sx={{
            fontWeight: 700,
            color: "text.primary",
            marginTop: 4,
            textAlign: "center",
          }}
        >
          {column.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: 2,
            color: "black",
            textAlign: "center",
          }}
        >
          {column.description}
        </Typography>

        {/* Button visibility */}
        {column.isButtonVisible && (
          <Button
            variant="text"
            className="button-transition"
            sx={{
              marginTop: 3,
              fontFamily: "Inter",
              color: "black",
              display: "block",
              width: {
                xs: "150px", // For mobile devices
                sm: "200px", // For small screens
                md: "250px", // For medium screens
                lg: "300px", // For larger screens
              },
              boxShadow: 2,
              "&:hover": {
                boxShadow: 4,
              },
            }}
            aria-label={`Learn more about ${column.title}`}
          >
            {column.buttonText}
          </Button>
        )}

        <div style={{ marginTop: "1.5rem", width: "100%" }}>
          {column.component}
        </div>
      </Paper>
    </Grid>
  );
};

export default LandingPage3;
