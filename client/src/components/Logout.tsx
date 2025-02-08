import React from "react";
import { Button, message } from "antd";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      message.success("Logged out successfully.");
      navigate("/login");
    } catch (error) {
      message.error("Failed to log out.");
    }
  };

  return (
    <Button danger onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
