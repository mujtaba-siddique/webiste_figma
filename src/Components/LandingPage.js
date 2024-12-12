import React, { useState, useEffect, useRef } from "react";
import { Box, Grid } from "@mui/material";
import SectionBackground from "../Images/Section.png";
import LeftColumn from "./LeftColumn"; // Import LeftColumn
import RightColumn from "./RightColumn"; // Import RightColumn
import LandingPage2 from "./Landingpage2";
import LandingPage3 from "./LandingPage3";
import LandingPage4 from "./LandingPage4";
import LandingPage5 from "./LandingPage5";
import LandingPage6 from "./LandingPage6";
import LandingPage7 from "./LandingPage7";
import LandingPage8 from "./LandingPage8";
import LandingPage9 from "./LandingPage9";
import Footer from "./Footer";

const LandingPage = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const sectionRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationTriggered(true);
        } else {
          setAnimationTriggered(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${SectionBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container style={{ height: "100%", marginTop: "2rem" }}>
          <LeftColumn />
          <RightColumn animationTriggered={animationTriggered} sectionRef={sectionRef} />
        </Grid>
      </Box>

      <LandingPage2 />
      <LandingPage3 />
      <LandingPage4 />
      <LandingPage5 />
      <LandingPage6 />
      <LandingPage7 />
      <LandingPage8 />
      <LandingPage9 />
      <Footer />
    </>
  );
};

export default LandingPage;
