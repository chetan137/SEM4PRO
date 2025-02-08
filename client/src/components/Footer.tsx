import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center", p: 3, bgcolor: "#1e1e1e", mt: 4 }}>
      <Typography variant="body2" color="textSecondary">
        © Our LMS . All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
