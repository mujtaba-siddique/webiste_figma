import React from "react";
import { Grid, Paper } from "@mui/material";
import Boy from "../Images/boy.png";
import Cloud from "../Images/cloud.png";
import Meetingup from "../Images/Background-1.png";
import Customer from "../Images/Background-2.png";

const RightColumn = ({ animationTriggered, sectionRef }) => {
  return (
    <>
      <style>
        {`
          @keyframes jump {
            0% {
              transform: translateY(0);
            }
            30% {
              transform: translateY(-30px); /* Jump up */
            }
            50% {
              transform: translateY(0); /* Back down */
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: { xs: "none", md: "block" },
          padding: "20px",
          position: "relative",
          opacity: animationTriggered ? 1 : 0,
          transform: animationTriggered ? "translate3d(0, 0, 0)" : "translate3d(50px, 0, 0)",
          transition: "opacity 1.8s ease-out, transform 1.8s ease-out",
        }}
        ref={sectionRef}
      >
        <Paper sx={{ height: "100%", padding: "20px", background: "transparent", boxShadow: "none" }}>
          <div style={{ position: "relative", textAlign: "center" }}>
            <img
              src={Boy}
              alt="Boy"
              style={{
                width: "100%",
                maxWidth: "800px",
                display: "block",
                margin: "0 auto",
                animation: "jump 1s infinite", // Jump animation applied to the Boy image
              }}
            />
            <img
              src={Cloud}
              alt="Cloud"
              style={{ position: "absolute", top: "-4%", right: "20%", width: "8vw" }}
            />
            <img
              src={Meetingup}
              alt="MeetingUp"
              style={{ position: "absolute", bottom: "3%", left: "-7%", width: "25vw" }}
            />
            <img
              src={Customer}
              alt="Customer"
              style={{ position: "absolute", top: "40%", right: "3%", width: "18vw" }}
            />
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default RightColumn;
