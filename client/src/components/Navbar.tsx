import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Modal,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation

// Static data for course lessons
const courseLessons = [
  {
    title: "Introduction to the Course",
    videoUrl: "https://www.youtube.com/embed/-4sIzzY8gqg?si=8IQ5UOh-Yz0Ux60h", // Replace with your actual video URL
    description: "Overview of Microprocessor .",
  },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false); // State for modal
  const [courseData, setCourseData] = useState({
    title: "",
    videoUrl: "",
    description: "",
    topics: "",
    price: "",
    date: "",
    additionalInfo: "",
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = () => {
    // Add the new course to the courseLessons array
    const newCourse = {
      title: courseData.title,
      videoUrl: courseData.videoUrl,
      description: courseData.description,
      topics: courseData.topics.split(","), // Convert topics string to array
      price: courseData.price,
      date: courseData.date,
      additionalInfo: courseData.additionalInfo,
    };
    courseLessons.push(newCourse);

    // Reset form and close modal
    setCourseData({
      title: "",
      videoUrl: "",
      description: "",
      topics: "",
      price: "",
      date: "",
      additionalInfo: "",
    });
    setOpen(false);
  };

  return (
    <>
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
              to="/exam"
              sx={{
                color: "rgb:54,46,46",
                mx: 1,
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(90deg, #00e5ff, #ff00ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
              }}
            >
              Exam Section
            </Button>

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

            {/* Upload Course Button */}
            <Button
              onClick={() => setOpen(true)}
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
              Upload Course
            </Button>
            <Button
              component={Link}
              to="/about"
              sx={{
                color: "rgb:54,46,46",
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

      {/* Upload Course Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(270deg, #000000, #222222, #111111)",
            padding: "20px",
            borderRadius: "10px",
            width: "400px",
            color: "white",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Upload Course
          </Typography>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={courseData.title}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Video URL"
            name="videoUrl"
            value={courseData.videoUrl}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={courseData.description}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Topics (comma-separated)"
            name="topics"
            value={courseData.topics}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Price"
            name="price"
            value={courseData.price}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Date"
            name="date"
            value={courseData.date}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Additional Info"
            name="additionalInfo"
            value={courseData.additionalInfo}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              background: "linear-gradient(90deg, #00e5ff, #ff00ff)",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
