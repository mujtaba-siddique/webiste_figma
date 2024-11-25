import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  IconButton,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const Col2 = () => {
  // Chart Data
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Sales',
        data: [880.21, 760.45, 920.32, 1020.45, 1200.56, 1100.78, 882.21],
        backgroundColor: '#3f51b5', // Bar color
      },
    ],
  };

  // Chart Options
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            // Formatting tooltips to show currency value
            const formattedValue = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(tooltipItem.raw);
            return formattedValue;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Dynamic percentage change (example)
  const previousWeekSales = [850.21, 760.45, 890.32, 1020.45, 1100.56, 1070.78, 870.21];
  const percentageChange =
    ((data.datasets[0].data.reduce((a, b) => a + b, 0) -
      previousWeekSales.reduce((a, b) => a + b, 0)) /
      previousWeekSales.reduce((a, b) => a + b, 0)) *
    100;

  return (
    <Card
      sx={{
        maxWidth: { xs: '90%' }, // Ensure it takes full width on mobile
        height: 'auto',
        padding: 2,
        boxShadow: 'none', // Removed shadow from Card
      }}
    >
      <CardContent>
        {/* Header Section */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' }, // Adjust font size for smaller screens
            }}
          >
            Sales Report
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography
              variant="body2"
              color={percentageChange > 0 ? 'green' : 'red'}
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '0.875rem', sm: '1rem' }, // Font size adjustment
              }}
            >
              {percentageChange.toFixed(1)}%
            </Typography>
            <IconButton
              size="small"
              sx={{
                color: percentageChange > 0 ? 'green' : 'red',
                fontSize: { xs: '1rem', sm: '1.25rem' }, // Icon size adjustment
              }}
            >
              <ArrowUpwardIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Stack>

        {/* Chart */}
        <Box sx={{ height: 200, mt: 2 }}>
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Col2;
