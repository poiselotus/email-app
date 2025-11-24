import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Box, Typography, Button, IconButton } from "@mui/material";

function CompanyList() {
  const companies = [
    "Company 1",
    "Company 1",
    "Company 1",
    "Company 1",
    "Company 1",
    "Company 1",
    "Company 1",
    "Company 1",
    "Company 1",
    "Company 1",
    "Company 1",
    "Company 1",
  ];

  return (
    // 1. Removed maxWidth, mx: "auto", and explicit bgcolor/border/shadow from the main Box.
    // This allows it to take the full width of its parent container (usually the screen/page).
    <Box sx={{ p: 0, pt: 3 }}> 

      {/* Header with New Company button on the right */}
      {/* Increased padding-right (pr) to maintain space from the edge */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", mb: 2, pr: 3 }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#3AC68D",
            "&:hover": { bgcolor: "#32b37e" },
            textTransform: "none",
            boxShadow: 'none'
          }}
        >
          New Company
        </Button>
      </Box>

      {/* Company List Container */}
      {/* 2. Added a top border to visually separate the list from the header content, matching the image structure. */}
      <Box sx={{ borderTop: "1px solid #e0e0e0" }}>
        {companies.map((company, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 1, 
              px: 3, // Padding on the left/right to keep content from hitting the edges
              borderBottom: "1px solid #f0f0f0", 
              bgcolor: "white", 
              // Optional: Add a hover effect typical for list items
              '&:hover': { bgcolor: '#f5f5f5' }
            }}
          >
            <Typography variant="body1" sx={{ color: '#333' }}>
              {company}
            </Typography>
            <Box>
              {/* Edit Icon Button */}
              <IconButton 
                size="small" 
                sx={{ color: '#bdbdbd', '&:hover': { color: '#888' } }} 
              >
                <FiEdit size={16} />
              </IconButton>
              {/* Delete Icon Button */}
              <IconButton 
                size="small"
                sx={{ color: '#bdbdbd', ml: 1, '&:hover': { color: '#888' } }}
              >
                <FiTrash2 size={16} />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CompanyList;