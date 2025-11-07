// src/components/Layout.jsx
import React, { useState } from "react";
import { Box, Drawer, AppBar, Toolbar, IconButton, Typography, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import defpic from "./assets/image 1.png"
import AppRoutes from "./AppRoutes";

const drawerWidth = 240;

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* ✅ HEADER */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          borderBottom: "1px solid #eee",
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, mr: 2 }}
          >
            
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" sx={{fontWeight: 'bold'}}>E-Mail</Typography>
          <Box sx={{ ml: "auto", display: "flex" }}>
            <Avatar/>
            <Box sx={{ ml: 1 }}>
              <Typography variant="body1" fontWeight={600}>
                Tarik Abaza
              </Typography>
              <Typography variant="caption" color="text.secondary"> 
                Admin
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ✅ SIDEBAR */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        
        {/* Mobile Drawer (temporary) */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}  
          sx={{
             display: { xs: "block", md: "none" }, 
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
            
          <Sidebar />
        </Drawer>

        {/* Desktop Drawer (persistent) */}
        <Drawer
          variant="permanent"  
          open 
          sx={{
            display: { xs: "none", md: "block" },  
            "& .MuiDrawer-paper": {  
              width: drawerWidth,
              borderRight: "1px solid #eee",
            },
          }}
        >
           <Sidebar />
        </Drawer>
      </Box>

      {/* ✅ MAIN CONTENT */}
      <Box
        component="main"  
        sx={{ flexGrow: 1, mt: 10}}
      >
        <AppRoutes />
      </Box>
    </Box>
  );
}
