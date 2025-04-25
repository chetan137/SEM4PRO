import React from "react";
import { Box, Grid } from "@mui/material";
"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import AnimatedSection from "../components/AnimatedSection";
import localImage from "../assets/i.jpg";
import localImage1 from "../assets/i2.jpg";
import localImage2 from "../assets/i3.jpg";
import localImage3 from "../assets/i4.jpg";
import "../styles/tailwind.css"


 const courses = [
  {
    title: "Learn all about Microprocessor",
    image: localImage,
    description: "Learn the fundamentals of Microprocessor by Pawaskar sir",
  },
  {
    title: "Learn C Language Basics",
    image: localImage1,
    description: "Discover how AI is transforming the education industry.",
  },
  {
    title: "Creative Video Editing",
    image: localImage2,
    description: "Master the art of video editing with modern tools.",
  },
  {
    title: "Creative AI Agents",
    image: localImage3,
    description: "Master the art of AI Agents with modern tools.",
  },
];

const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar />

      <Box sx={{ mt: 10 }}>
        <AnimatedSection />
        <Grid container spacing={2} justifyContent="center">
          {courses.map((course, index) => (
            <Grid item key={index}>
              <CourseCard {...course} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />


    </>
  )
};

export default Dashboard;
