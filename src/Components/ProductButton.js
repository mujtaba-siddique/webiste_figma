import React from 'react';
import { Button } from "@mui/material";

function ProductFeatures({backgroundColor}) {
  return (
    <Button
      sx={{
        color: "black", // Text color
        backgroundColor: "white", // White background color
        borderRadius: "10px", // Rounded corners
        fontSize: "14px", // Slightly larger font size for readability
        cursor: "pointer", // Pointer cursor on hover
        fontFamily: "Inter, sans-serif", // Font family
        fontWeight: 600, // Font weight
        // marginTop: "20px", // Margin at the top
        textTransform: "none", // Prevent uppercase transformation
        padding: "5px 16px", // Adjusted padding for a more balanced size
        border: "1px solid #ddd", // Light border to give subtle definition
        '&:hover': {
          backgroundColor: "#f0f0f0", // Subtle hover effect (light gray background)
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Hover shadow for better interactivity
        },
      }}
      onClick={() => alert("Product Button Clicked!")}
    >
      Product Features
    </Button>
  );
}

export default ProductFeatures;
