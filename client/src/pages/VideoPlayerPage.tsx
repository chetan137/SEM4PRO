import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import Navbar from "../components/Navbar";
import Footer  from "../components/Footer";

const courseLessons = [
  {
    title: "Introduction to the Course",
    videoUrl: "https://www.youtube.com/embed/-4sIzzY8gqg?si=8IQ5UOh-Yz0Ux60h", // Replace with your actual video URL
    description: "Overview of Microprocessor .",
  },
  {
    title: "How to run assembly program using TASM",
    videoUrl: "https://www.youtube.com/embed/vQvpSyW3dVs?si=0N-Cbw1q30FrtD1Y", // Replace with your actual video URL
    description: "Downlaod TASM from MOODlE APSIT.",
  },
  {
    title: "8086 Program to transfer Block of data ",
    videoUrl: "https://www.youtube.com/embed/ULRIvMPqFug?si=0YL5MPl9Mn-BbFD-",
    description: "Understanding the basic MP 8086.",
  },
  {
    title: "Decimal to IEEE 754 Floating Point Representation",
    videoUrl: "https://www.youtube.com/embed/zFIB8lrRcRE?si=21mwF3bIndf_GFZu",
    description: "IEEE 754 Floating presentation.",
  },
  {
    title: "Addressing modes of 8086",
    videoUrl: "https://www.youtube.com/embed/USzJo1zC_AM?si=YL6emi9leqtQ2nZa",
    description: "learn all about basic of addressing modes.",
  },
  {
    title: "Decimal to IEEE 754",
    videoUrl: "https://www.youtube.com/embed/zFIB8lrRcRE?si=WaNxRH3OveBXlgE8",
    description: "Conversion Technicques .",
  },
];

const VideoPlayerPage: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState(courseLessons[0]);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          width: "99vw",
          marginTop: "3rem",

          background:
            "linear-gradient(135deg,rgb(8, 3, 58),rgb(77, 99, 43),rgb(1, 1, 18))",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* Left Sidebar - Course Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              width: "100%",
              bgcolor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              p: 3,
              borderRight: "1px solid rgba(255, 255, 255, 0.2)",
              overflowY: "auto",
              height: "100vh",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              📚 Course Content
            </Typography>
            <List>
              {courseLessons.map((lesson, index) => (
                <ListItem
                  component="button" // Explicitly set the component
                  key={index}
                  onClick={() => setSelectedLesson(lesson)}
                  sx={{
                    mb: 1,
                    borderRadius: "5px",
                    transition: "0.3s",
                    backgroundColor:
                      selectedLesson?.title === lesson.title
                        ? "rgba(255, 255, 255, 0.3)"
                        : "transparent",
                    "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
                  }}
                >
                  <ListItemText primary={lesson.title} />
                </ListItem>
              ))}
            </List>
          </Box>
        </motion.div>

        {/* Right Section - Video Player */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ flex: 1 }}
        >
          <Box
            sx={{
              flex: 1,
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflowY: "auto",
            }}
          >
            <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
              🎥 {selectedLesson.title}
            </Typography>

            {/* Video Player Container */}
            <Box
              sx={{
                position: "relative",
                width: "80%",
                maxWidth: "900px",
                height: "450px",
                bgcolor: "rgba(0, 0, 0, 0.7)",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0px 0px 20px rgba(0, 188, 212, 0.5)",
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src={selectedLesson.videoUrl}
                title="Course Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              ></iframe>

              {/* Fullscreen Button */}
              <IconButton
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  color: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.4)" },
                }}
                onClick={() => {
                  const iframe = document.querySelector("iframe");
                  if (iframe && iframe.requestFullscreen) {
                    iframe.requestFullscreen();
                  }
                }}
              >
                <FullscreenIcon />
              </IconButton>
            </Box>

            {/* Video Description */}
            <Typography variant="h6" sx={{ mt: 4, fontWeight: "bold" }}>
              📌 {selectedLesson.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: "rgba(255, 255, 255, 0.8)",
                textAlign: "center",
              }}
            >
              {selectedLesson.description}
            </Typography>
          </Box>
        </motion.div>
      </Box>
      <Footer />
    </>
  );
};

export default VideoPlayerPage;
