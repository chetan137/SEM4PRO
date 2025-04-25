import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import backgroundImage from "../assets/h2.jpg"; // Import the image

const AnimatedSection: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Explore Our Interactive Learning Platform",
    "Enhance Your Skills with Us!",
    "Join a Community of Lifelong Learners",
    "Transform Your Future with Knowledge",
    "Start Your Learning Journey Today!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white", // Text color
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          my: 5,
          p: 3,
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          borderRadius: "15px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
          transform: "rotateX(10deg)",
          position: "relative",
          width: "100%",
          maxWidth: "1000px",
          height: "80px", // Fixed height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Sliding Text Animation */}
        <motion.div
          key={currentTextIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #00e5ff, #ff00ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "2rem",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            {texts[currentTextIndex]}
          </Typography>
        </motion.div>

        {/* Mirror Reflection */}
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            transform: "scaleY(-1)",
            opacity: 0.3,
            filter: "blur(5px)",
            height: "100%", // Matches the original text height
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #00e5ff, #ff00ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "2rem",
              whiteSpace: "nowrap",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            {texts[currentTextIndex]}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default AnimatedSection;
