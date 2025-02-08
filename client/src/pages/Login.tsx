import React, { useState } from "react";
import { Button, Card, Typography, Spin, message } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig.tsx";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import backgroundImage from "../assets/log.jpg";

const { Title, Text } = Typography;

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      message.success(`Welcome, ${result.user.displayName}!`);
      navigate("/dashboard"); // Redirect after login
    } catch (error) {
      console.error("Login Failed:", error);
      message.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Overlay for a Darker Effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Login Card */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
        }}
      >
        <Card
          style={{
            width: "100%",
            textAlign: "center",
            padding: "30px",
            background: "rgba(255, 255, 255, 0)",
            backdropFilter: "blur(12px)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Title level={2} style={{ color: "#fff", fontWeight: "bold" }}>
            Welcome Back
          </Title>
          <Text type="secondary" style={{ color: "#ddd" }}>
            Sign in with your Google account
          </Text>
          <br />
          <br />
          {loading ? (
            <Spin size="large" />
          ) : (
            <Button
              type="primary"
              icon={<GoogleOutlined />}
              onClick={handleGoogleLogin}
              block
              style={{
                background: "#4285F4",
                border: "none",
                height: "45px",
                fontSize: "16px",
                fontWeight: "bold",
                boxShadow: "0px 4px 10px rgba(66, 133, 244, 0.5)",
                transition: "0.3s",
              }}
            >
              Sign in with Google
            </Button>
          )}
        </Card>
      </Box>
    </Box>
  );
};

export default Login;
