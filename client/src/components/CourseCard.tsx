import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  title: string;
  image: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  image,
  description,
}) => {
  const navigate = useNavigate();
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // Load Razorpay script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    script.onerror = () => console.error("Failed to load Razorpay script");
    document.body.appendChild(script);
  }, []);

  const handleEnrollNow = () => {
    if (!razorpayLoaded || !window.Razorpay) {
      alert("Payment system is currently unavailable. Please try again later.");
      return;
    }

    const options = {
      key: "rzp_test_rNwQ0o3INV5Xrj", // Replace with your Razorpay test key
      amount: "5000", // Amount in paise (e.g., 50000 paise = ₹500)
      currency: "INR",
      name: "Dream Machine Education",
      description: `Payment for ${title}`,
      image: "https://your-logo-url.com/logo.png",
      handler: function (response: any) {
        console.log("Payment Successful:", response);
        navigate("/video-player");
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "7798255055",
      },
      theme: {
        color: "black",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        m: 2,
        boxShadow: 5,
        bgcolor: "#1e1e1e",
        color: "white",
        position: "relative",
        overflow: "hidden",
        transformStyle: "preserve-3d",
        transition: "transform 0.5s, box-shadow 0.5s",
        "&:hover": {
          boxShadow: "0px 0px 15px #00bcd4",
          transform: "rotateY(10deg) rotateX(10deg) scale(1.05)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "200%",
          height: "100%",
          background: `linear-gradient(
            45deg,
            rgba(0, 188, 212, 0.8),
            rgba(0, 123, 167, 0.8),
            rgba(0, 188, 212, 0.8)
          )`,
          animation: "moveGradient 5s linear infinite",
          zIndex: 1,
          opacity: 0.5,
        },
      }}
    >
      <style>
        {`
          @keyframes moveGradient {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
        `}
      </style>

      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ position: "relative", zIndex: 2 }}
      />
      <CardContent sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: razorpayLoaded ? "#00bcd4" : "gray",
            mt: 2,
            "&:hover": {
              bgcolor: razorpayLoaded ? "#008ba3" : "gray",
              transform: razorpayLoaded ? "scale(1.05)" : "none",
            },
          }}
          onClick={handleEnrollNow}
          disabled={!razorpayLoaded}
        >
          {razorpayLoaded ? "Enroll Now" : "Loading Payment..."}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
