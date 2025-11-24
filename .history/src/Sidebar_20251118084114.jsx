// --- Sidebar.jsx (Modified Code) ---

import { Box, List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import React, { useState, useEffect } from "react";
import logo from "./assets/image 1.png";
import { NavLink, useLocation } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// 💡 NEW: Define the fixed width for the sidebar
const SIDEBAR_WIDTH = 280; 

const menuItems = [
    // ... (Your menuItems array remains the same)
    {
      label: "E-Mail",
      path: "/email",
      children: [
        { label: "Mailbox 1", path: "/mailbox1" },
        { label: "Mailbox 2", path: "/mailbox2" }
      ]
    },
    { label: "User List", path: "/users" },
    { label: "Companies", path: "/companies" },
    { label: "Mailboxes", path: "/mailboxes" },
    { label: "Blocked E-Mail", path: "/blocked" }
];

function Sidebar() {
    const location = useLocation();
    const [emailOpen, setEmailOpen] = useState(false);

    useEffect(() => {
        if (location.pathname.startsWith("/mailbox")) {
            setEmailOpen(true);
        }
    }, [location.pathname]);

    return (
        // 🛠️ FIX: Added position: 'fixed', width, height, and background color
        <Box 
            sx={{
                width: SIDEBAR_WIDTH,          // Set the definite width
                height: '100vh',               // Take up full viewport height
                position: 'fixed',             // Key change: Takes it out of the document flow
                top: 0,                        // Position at the top
                left: 0,                       // Position at the left
                bgcolor: 'white',              // Give it a white background
                zIndex: 100,                   // Ensure it sits above content
                borderRight: '1px solid #e0e0e0', // Optional border
                overflowY: 'auto'              // Allow scrolling for long lists
            }}
        >
            {/* Logo */}
            <img src={logo} style={{ width: 150, padding: 30, height: 120 }} />

            <List sx={{ px: 2 }}> {/* Added slight padding to the list for menu items */}
                {/* ... (Rest of your component logic remains the same) ... */}

                {menuItems.map((item) => {
                    if (item.children) {
                        // ...
                    }

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            {({ isActive }) => (
                                <ListItemButton
                                    sx={{
                                        mb: 1,
                                        borderRadius: "6px",
                                        backgroundColor: isActive ? "#D0F5E0" : "transparent",
                                        borderLeft: isActive
                                            ? "4px solid #00BD7E"
                                            : "4px solid transparent",
                                        color: isActive ? "#00BD7E" : "inherit"
                                    }}
                                >
                                    <ListItemText primary={item.label} sx={{ color: isActive ? "inherit" : "#868686ff" }} />
                                </ListItemButton>
                            )}
                        </NavLink>
                    );
                })}

                <ListItemButton sx={{
                    mt: 44,
                    height: 44,
                    borderRadius: "6px",
                    borderLeft: "4px solid #00BD7E",
                }}>Log Out</ListItemButton>
            </List>
        </Box>
    );
}

export default Sidebar;