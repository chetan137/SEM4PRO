import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import About from "./pages/About";
import VideoPlayerPage from "./pages/VideoPlayerPage";
import {
  Fab,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
  Skeleton,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { GoogleGenerativeAI } from "@google/generative-ai";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // MUI WhatsApp icon
import ExamSection from "./components/ExamSection";

const handleWhatsAppClick = () => {
  window.open("https://wa.me/+918828337546", "_blank"); // Replace with your WhatsApp number
};
// Gemini API Key (Replace with your actual API key)
const GEMINI_API_KEY = "AIzaSyDmApOUUrMGMTn5LmJBfp1T9kqB2wQCgbQ";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Start a chat session with initial history
const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: "Hello" }],
    },
    {
      role: "model",
      parts: [{ text: "Great to meet you. What would you like to know?" }],
    },
  ],
});

const App: React.FC = () => {
  const [isBotOpen, setIsBotOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBotToggle = () => {
    setIsBotOpen(!isBotOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true); // Start loading
      let contents = [];

      // Add text input
      if (userInput) {
        contents.push({ text: userInput });
      }

      // Add image input
      if (imageFile) {
        const base64Image = await fileToBase64(imageFile);
        contents.push({
          inlineData: {
            mimeType: imageFile.type,
            data: base64Image,
          },
        });
      }

      // Send the combined content to the chat session
      const result = await chat.sendMessage(contents);
      const response = await result.response;
      setBotResponse(response.text());
      setUserInput("");
      setImageFile(null); // Clear the image after submission
    } catch (error) {
      console.error("Error solving doubt:", error);
      setBotResponse("Sorry, something went wrong. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/video-player"
            element={
              <ProtectedRoute>
                <VideoPlayerPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/exam"
            element={
              <ProtectedRoute>
                <ExamSection />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>

      {/* Floating Bot Button */}
      <Fab
        color="primary"
        aria-label="chat"
        onClick={handleBotToggle}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <ChatIcon />
      </Fab>

      {/* Bot Dialog */}
      {isBotOpen && (
        <Paper
          elevation={3}
          sx={{
            position: "fixed",
            bottom: 80,
            right: 16,
            width: 300,
            padding: 2,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Doubt Solver Bot
          </Typography>
          <Box
            sx={{
              maxHeight: 200,
              overflowY: "auto",
              marginBottom: 2,
            }}
          >
            {isLoading ? (
              // Skeleton loading state
              <>
                <Skeleton variant="text" width="100%" height={30} />
                <Skeleton variant="text" width="80%" height={30} />
                <Skeleton variant="text" width="60%" height={30} />
              </>
            ) : (
              // Display bot response
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap", // Preserve line breaks and formatting
                  color: "text.primary",
                }}
              >
                {botResponse}
              </Typography>
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TextField
              fullWidth
              placeholder="Ask your doubt..."
              value={userInput}
              onChange={handleInputChange}
              sx={{ marginBottom: 2 }}
              disabled={isLoading} // Disable input while loading
            />
            <Fab
              color="success"
              aria-label="whatsapp"
              onClick={handleWhatsAppClick}
              style={{
                position: "fixed",
                bottom: "13rem",
                right: "20px",
                zIndex: 1000, // Ensure it stays above other content
              }}
            >
              <WhatsAppIcon />
            </Fab>
            <IconButton
              color="primary"
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading} // Disable button while loading
            >
              <AttachFileIcon />
            </IconButton>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageUpload}
              accept="image/*"
              disabled={isLoading} // Disable file input while loading
            />
          </Box>
          {imageFile && (
            <Typography variant="body2" sx={{ mb: 2 }}>
              Image attached: {imageFile.name}
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? "Processing..." : "Send"}
          </Button>
        </Paper>
      )}
    </ThemeProvider>
  );
};

export default App;
