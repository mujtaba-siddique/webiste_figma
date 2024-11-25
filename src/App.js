import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Assuming theme.js is in the same directory level as App.js
import Home from './Pages/Home';

function App() {
  return (
    // Apply the theme to the entire app
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
