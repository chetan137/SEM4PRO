import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { CheckCircleOutlined } from "@ant-design/icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const courses = [
  {
    name: "Web Development",
    description: "Learn HTML, CSS, JavaScript, React, Next.js, and more.",
  },
  {
    name: "Data Science",
    description:
      "Master Python, Machine Learning, Deep Learning, and AI tools.",
  },
  {
    name: "Mobile App Development",
    description: "Build apps using Flutter, React Native, and Swift.",
  },
  {
    name: "Cloud Computing",
    description: "AWS, Azure, Google Cloud, and DevOps strategies.",
  },
  {
    name: "Cybersecurity",
    description: "Ethical Hacking, Pen Testing, and Security Fundamentals.",
  },
];

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          width: "99vw", // Ensure full viewport width
          background: "linear-gradient(270deg, #000000, #222222, #111111)",
          backgroundSize: "400% 400%",
          animation: "gradientBG 8s ease infinite",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: 8,
          color: "white",
        }}
      >
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #00e5ff, #ff00ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Dream Machine Education
          </Typography>
        </motion.div>

        {/* Mission & Vision Section */}
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
              Empowering Learners with Cutting-Edge Technology
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "gray" }}>
              At Dream Machine Education, we believe in making **quality tech
              education** accessible to all. Our platform provides hands-on
              learning in **software development, AI, data science,
              cybersecurity, and more**. Join thousands of students worldwide
              and build your career with us.
            </Typography>
          </motion.div>
        </Container>

        {/* Courses Section */}
        <Container maxWidth="lg" sx={{ mt: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #00e5ff, #ff00ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 4,
            }}
          >
            Courses We Offer
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {courses.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "10px",
                      padding: "15px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1,
                          color: "#00e5ff",
                        }}
                      >
                        <CheckCircleOutlined /> {course.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, color: "white" }}
                      >
                        {course.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Keyframes for Animated Gradient Background */}
        <style>
          {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
        </style>
      </Box>
      <Footer />
    </>
  );
};

export default About;
