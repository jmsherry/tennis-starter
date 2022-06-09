import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function Layout({ children }) {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", overflow: "auto" }}>
          {children}
        </Box>
      </Container>
    </>
  );
}

export default Layout;