import React, { useState } from "react";
import { Box, Button, Typography, Grid, Paper } from "@mui/material";
import backg from "../Images/backgroundpink.png";
import spg1 from "../Images/hatora.png";
import spg2 from "../Images/snak.png";
import spg3 from "../Images/SVGp1.png";
import spg4 from "../Images/SVGp2.png";
import spg5 from "../Images/SVGp3.png";
import spg6 from "../Images/Vector.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function LandingPage9() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleToggle = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Otake and how can it benefit my startup?",
      answer:
        "Otake is a startup growth platform designed to provide tools, insights, and analytics tailored for startups of all sizes. It can help optimize operations, improve productivity, and streamline growth strategies.",
    },
    {
      question:
        "Is Otake suitable for all types of startups, regardless of industry size?",
      answer:
        "Yes, Otake offers versatile features that are designed to support startups across various industries and sizes.",
    },
    {
      question:
        "How do I begin using Otake to develop my startup business effectively?",
      answer:
        "To start using Otake, sign up for a free trial and explore the setup guide that walks you through step-by-step on how to use the platform to maximize its benefits.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${backg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: "3rem",
        height: {md:"100vh"},
      }}
    >
      {/* Centered Button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
            padding: "3px",
            border: "1px solid #ddd",
            "&:hover": {
              backgroundColor: "#f0f0f0",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            },
          }}
          onClick={() => alert("Product Button Clicked!")}
        >
          Frequently Asked Questions
        </Button>
      </Box>

      {/* FAQ Section */}
      <Grid container spacing={2} sx={{ px: { sm: "5rem", lg: "8rem" }, mt: "2rem" }}>
        {/* Left Image */}
        <Grid
          item
          md={2}
          sx={{
            display: { xs: "none", md: "block" },
            justifyContent: "flex-end",
            alignItems: "flex-end",
            mt: "4rem",
          }}
        >
          <img src={spg1} alt="Left Image" />
        </Grid>

        <Grid item xs={12} sm={12} md={8}>
          <Typography variant="h2" sx={{ textAlign: "center", mt: "1.5rem" }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", mt: "0.5rem" }}>
            All Plans Come with a 14-day trial period
          </Typography>

          {/* FAQ Cards */}
          <Grid container spacing={2} sx={{ mt: "2rem" }}>
            <Grid item xs={6}>
              <Paper
                sx={{
                  backgroundColor: "white",
                  border: 2,
                  borderColor: "#9585FF",
                  padding: "2rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={spg6} alt="Getting Started" />
                <Typography
                  sx={{ marginLeft: "6px", color: "black", fontWeight: "600" }}
                >
                  Getting Started
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  padding: "2rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={spg3} alt="Features and Support" />
                <Typography
                  sx={{ marginLeft: "6px", color: "black", fontWeight: "600" }}
                >
                  Features and Support
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  padding: "2rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={spg4} alt="Security and Privacy" />
                <Typography
                  sx={{ marginLeft: "6px", color: "black", fontWeight: "600" }}
                >
                  Security And Privacy
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  padding: "2rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={spg5} alt="Octeka Assistance" />
                <Typography
                  sx={{ marginLeft: "6px", color: "black", fontWeight: "600" }}
                >
                  Octeka Assistance
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* FAQ Items */}
          <Box sx={{ mt: "2rem" }}>
            {faqData.map((item, index) => (
              <Box key={index} sx={{ mb: "1rem" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#f9f9f9",
                    padding: "1rem",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleToggle(index)}
                >
                  <Typography
                    variant="body1"
                    sx={{ color: "black", fontWeight: "600" }}
                  >
                    {item.question}
                  </Typography>
                  {openFAQ === index ? <FaAngleUp /> : <FaAngleDown />}
                </Box>

                {openFAQ === index && (
                  <Box
                    sx={{
                      backgroundColor: "#ffffff",
                      padding: "1rem",
                      borderRadius: "8px",
                      marginTop: "0.5rem",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#555", lineHeight: "1.6" }}
                    >
                      {item.answer}
                    </Typography>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Right Image */}
        <Grid item md={2} sx={{ display: { xs: "none", md: "block" } }}>
          <img
            src={spg2}
            alt="Right Image"
            style={{ marginTop: "30rem", marginLeft: "6rem" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default LandingPage9;
