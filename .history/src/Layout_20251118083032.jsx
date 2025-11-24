// src/components/Layout.jsx
import React, { useState } from "react";
import { Box, Drawer, AppBar, Toolbar, IconButton, Typography, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import Sidebar from "./Sidebar";
// REMOVE THIS IMPORT: import AppRoutes from "./AppRoutes"; 
import { useLocation } from "react-router-dom";

const drawerWidth = 240;

// 1. ACCEPT THE 'children' PROP
export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const pageTitles = {
    "/email": "E-Mail",
    "/mailbox1": "Mailbox 1",
    "/mailbox2": "Mailbox 2",
    "/users": "User List",
    "/companies": "Companies",
    "/mailboxes": "Mailboxes",
    "/blocked": "Blocked E-Mail"
  };

  const location = useLocation();
  const PageHeader = pageTitles[location.pathname] || "Dashboard"

  return (
    <Box sx={{ display: "flex" }}>
      {/* ... (HEADER and SIDEBAR components remain the same) ... */}

      {/* ✅ MAIN CONTENT */}
      <Box
        component="main"
        sx={{ 
          flexGrow: 1, 
          mt: 8, 
          px: 3, 
          py: 2, 
          minHeight: '100vh', 
          bgcolor: '#f9f9f9' 
        }}
      >
        {/* 2. RENDER THE 'children' PROP HERE */}
        {children} 
      </Box>
    </Box>
  );
}