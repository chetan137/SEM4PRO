import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(270deg, #000000, #222222, #111111)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 8s ease infinite",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.6)",
      }}
    >
      <Toolbar>
        {/* Logo / Title */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            background: "linear-gradient(90deg, #00e5ff, #ff00ff)",
            WebkitBackgroundClip: "text",
          }}
        >
          <Button
            component={Link}
            to="/dashboard"
            sx={{
              color: "white",
              mx: 1,
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(90deg, #00e5ff, #ff00ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            Home
          </Button>
        </Typography>

        {/* Navigation Links */}
        <Box>
          <Button
            component={Link}
            to="/video-player"
            sx={{
              color: "white",
              mx: 1,
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(90deg, #00e5ff, #ff00ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            MY Courses
          </Button>

          <Button
            component={Link}
            to="/about"
            sx={{
              color: "white",
              mx: 1,
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(90deg, #00e5ff, #ff00ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            About
          </Button>

          <Button
            component={Link}
            to="/"
            variant="outlined"
            sx={{
              border: "1px solid white",
              color: "white",
              mx: 1,
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(90deg, #00e5ff, #ff00ff)",
                border: "none",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>

      {/* Keyframes for Moving Gradient Background */}
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </AppBar>
  );
};

export default Navbar;
