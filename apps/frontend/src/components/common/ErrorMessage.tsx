import React from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      minHeight="100vh"
    >
      <Alert severity="error" sx={{ width: "100%", maxWidth: 600, m: 2 }}>
        {message}
      </Alert>
    </Box>
  );
}
