import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00bcd4", // Cyan for primary buttons
    },
    secondary: {
      main: "#ff4081", // Pink for secondary actions
    },
    background: {
      default: "#121212", // Dark background
      paper: "#1e1e1e", // Slightly lighter card background
    },
    text: {
      primary: "#ffffff", // White text
      secondary: "#bdbdbd", // Grey text for better readability
    },
  },
});

export default darkTheme;
