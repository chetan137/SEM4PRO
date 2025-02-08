import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Theme from "./theme"
import { ThemeProvider } from "@mui/material/styles";
import About from "./pages/About";
import VideoPlayerPage from "./pages/VideoPlayerPage";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
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
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
