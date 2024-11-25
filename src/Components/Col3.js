import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

ChartJS.register(ArcElement, Tooltip, Legend);

const col3 = () => {
  // Data for Doughnut Chart "Order Completed" (without labels)
  const orderCompletedData = {
    datasets: [
      {
        data: [32, 16], // 32 completed out of 48
        backgroundColor: ["#3f51b5", "#e0e0e0"],
        borderWidth: 0,
      },
    ],
    // You can add an empty labels array to avoid the Legend error
    labels: [],
  };

  // Data for Doughnut Chart "On Shipping" (without labels)
  const onShippingData = {
    datasets: [
      {
        data: [17, 7], // 17 shipped out of 24
        backgroundColor: ["#f50057", "#e0e0e0"],
        borderWidth: 0,
      },
    ],
    labels: [], // Empty labels array here too
  };

  // Chart Options with Legend Disabled
  const chartOptions = {
    cutout: "75%",
    plugins: {
      tooltip: {
        enabled: false, // Disable default tooltip
      },
      legend: {
        display: false, // Disable the legend
      },
    },
  };

  // Calculating percentages for dynamic display
  const calculatePercentage = (completed, total) => {
    return ((completed / total) * 100).toFixed(0);
  };

  const orderCompletedPercentage = calculatePercentage(32, 48);
  const onShippingPercentage = calculatePercentage(17, 24);

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", padding: 2, boxShadow: "none" }}>
      <CardContent sx={{ fontFamily: 'Inter, sans-serif' }}> {/* Apply font here */}
        {/* Header Section */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" component="div">
            Today's Transaction
          </Typography>
          <IconButton size="small" sx={{ padding: 0 }}>
            <MoreVertIcon />
          </IconButton>
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* Order Completed Section */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
          <Box>
            <Typography variant="h4" component="div">
              {32}
              <span style={{ fontSize: "1rem", color: "#9e9e9e" }}>/48</span>
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Order completed
            </Typography>
          </Box>
          <Box
            sx={{
              width: 80,
              height: 80,
              position: "relative",
            }}
          >
            <Doughnut data={orderCompletedData} options={chartOptions} />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#3f51b5",
              }}
            >
              {orderCompletedPercentage}%
            </Box>
          </Box>
        </Stack>

        {/* On Shipping Section */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="h4" component="div">
              {17}
              <span style={{ fontSize: "1rem", color: "#9e9e9e" }}>/24</span>
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              On shipping
            </Typography>
          </Box>
          <Box
            sx={{
              width: 80,
              height: 80,
              position: "relative",
            }}
          >
            <Doughnut data={onShippingData} options={chartOptions} />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#f50057",
              }}
            >
              {onShippingPercentage}%
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default col3;
