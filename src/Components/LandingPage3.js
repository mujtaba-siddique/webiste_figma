import React from "react";
import { Button, Box, Typography, Grid, Paper } from "@mui/material";
import Backgroundpic from "../Images/backgroundpink.png";
import A from "../Images/A.png";
import B from "../Images/B.png";
import C from "../Images/C.png";
import Col1 from "./Col1"; // Assuming these are your custom components
import Col2 from "./Col2";
import Col3 from "./Col3";

function LandingPage3() {
  // Data for the columns (in array form)
  const columnsData = [
    {
      id: 1,
      image: B,
      title: "Keep on top of project management.",
      description: "This is the content for column 1. You can add text, images, or any other content here.",
      component: <Col1 />, // The corresponding component to render for column 1
      buttonText: "Learn More",
      isButtonVisible: true, // Control visibility of button here
    },
    {
      id: 2,
      image: A,
      title: "Analyze your business results in one place.",
      description: "This is the content for column 2. You can add text, images, or any other content here.",
      component: <Col2 />, // The corresponding component to render for column 2
      buttonText: "Learn More",
      isButtonVisible: true, // Set to true to show the button
    },
    {
      id: 3,
      image: C,
      title: "Keep track of sales and shipping progress.",
      description: "This is the content for column 3. You can add text, images, or any other content here.",
      component: <Col3 />, // The corresponding component to render for column 3
      buttonText: "Learn More",
      isButtonVisible: true, // Control visibility of button here
    },
  ];

  return (
    <>
      {/* Product Features Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: { xs: "50px", sm: "100px" },
        }}
      >
        <Button
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
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          textAlign: "center",
          marginTop: "20px",
          marginX: { xs: "20px", sm: "50px", md: "200px", lg: "400px" },
        }}
      >
        Streamline tasks with optimized workflows
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          color: "black",
          textAlign: "center",
          marginTop: "20px",
          marginX: { xs: "20px", sm: "50px", md: "200px", lg: "400px" },
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
      </Typography>

      {/* Background and 3-column Grid */}
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${Backgroundpic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid
          container
          spacing={{ xs: 6, md: 4 }}
          sx={{
            padding: { xs: "20px", md: "40px" },
            display: "flex",
            flexWrap: "wrap", // Allow wrap for responsiveness
            marginTop: { md: "20px", xs: "20px" },
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          {columnsData.map((column) => (
            <Grid
              item
              xs={12}
              sm={4} // Equal width for each column
              md={4} // Equal width for each column
              key={column.id}
              sx={{
                display: "flex",
                flexDirection: "column", // Ensure the content within is stacked vertically
                justifyContent: "space-between", // Distribute space evenly
                height: "100%", // Ensure full height
              }}
            >
              <Paper
                sx={{
                  padding: 2,
                  borderRadius: "16px",
                  boxShadow: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%", // Make sure Paper takes up the full height of the grid item
                  minHeight: "42rem",
                }}
              >
                {/* Image positioned at the top of the column */}
                <img
                  src={column.image}
                  alt={column.title}
                  style={{
                    width: "80px", // Set a fixed width
                    height: "80px", // Set a fixed height
                    marginTop: "-105px", // Adjust image position with margin
                    marginBottom: "20px", // Space between the image and the content
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

                {/* Move Button Above the Component */}
                {column.isButtonVisible && (
                  <Button
                    variant="text"
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
                      boxShadow: 2, // Adds shadow
                      "&:hover": {
                        boxShadow: 4, // Increases shadow on hover
                        transition: "box-shadow 0.3s ease-in-out", // Smooth hover effect
                      },
                    }}
                    aria-label={`Learn more about ${column.title}`}
                  >
                    {column.buttonText}
                  </Button>
                )}

                {/* Add margin-top to the components */}
                <div style={{ marginTop: "1.5rem", width: "100%" }}>
                  {column.component} {/* Insert the dynamic component here */}
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default LandingPage3;
