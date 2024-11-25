import React from 'react';
import { Button } from "@mui/material";

function PowerfullButtonn() {
  return (
    <Button
      sx={{
        color: "black", // Text color
        backgroundColor: "#FFE785", // Yellow background color
        borderRadius: "10px", // Rounded corners
        fontSize: "12px", // Font size
        cursor: "pointer", // Pointer cursor on hover
        fontFamily: "Inter, sans-serif", // Font family
        fontWeight: 600, // Font weight
        marginTop: "20px", // Margin at the top
        textTransform: "none", // Prevent uppercase transformation
        padding: "6px 12px", // Padding for better size
        // '&:hover': {
        //   backgroundColor: "#FFD700", // Change color on hover (lighter yellow)
        // },
      }}
      onClick={() => alert("Powerful Solutions Clicked!")}
    >
      Powerful Solutions
    </Button>
  );
}

export default PowerfullButtonn;
