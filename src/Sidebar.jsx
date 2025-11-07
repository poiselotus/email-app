import { Box, List, ListItemButton, ListItemText, Collapse } from '@mui/material'
import React, { useState} from 'react'
import logo from "./assets/image 1.png"
import { NavLink } from 'react-router-dom';
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"

const menuItems = [
    { label: "E-Mail", path: "/email",
        children: [
            { label:  "Mailbox 1", path: "/mailbox1"},
            { label: "Mailbox 2", path: "/mailbox2" }
        ],
    },
    { label: "User List", path: "/users" },
    { label: "Companies", path: "/companies" },
    { label: "Mailboxes", path: "/mailboxes" },
    { label: "Blocked E-Mail", path: "/blocked" },
];
function Sidebar() {

    const [emailOpen, setOpenEmail] = useState(false)

    return (
        // <div>
            <Box sx={{ p: 2 }}>
                {/* Logo */}
                <img src={logo} style={{ width: 150, padding: 30, height: 120, marginTop: -20 }} />
                <List>
                    {menuItems.map((item) => {
                        if (item.children) {
            return (
              <Box key={item.label}>
                <ListItemButton onClick={() => setOpenEmail(!emailOpen)}>
                  <ListItemText primary={item.label} />
                  {emailOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                {/* Collapse children */}
                <Collapse in={emailOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {({ isActive }) => (
                          <ListItemButton
                            sx={{
                              pl: 4,
                              mb: 1,
                              borderRadius: "6px",
                              backgroundColor: isActive ? "#D0F5E0" : "transparent",
                              borderLeft: isActive
                                ? "4px solid #00BD7E"
                                : "4px solid transparent",
                            }}
                          >
                            <ListItemText primary={child.label} />
                          </ListItemButton>
                        )}
                      </NavLink>
                    ))}
                  </List>
                </Collapse>
              </Box>
            );
          }

                    return (
                            <NavLink
                            key={item.path} to={item.path}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >

                        
                            {({ isActive }) => (
                                <ListItemButton sx={{ mb: 1, borderRadius: "6px", backgroundColor: isActive ? "#D0F5E0" : "transparent", borderLeft: isActive ? "4px solid #00BD7E" : "4px solid transparent", }}>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            )}
                        </NavLink>
                    ); 
                    })}
                </List>
            </Box>
        // </div>
    )
}

export default Sidebar
