import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Box, Typography, Button, IconButton, Divider } from "@mui/material";

function CompanyList() {
  // Use generic data for visual comparison with the image
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
  ];

  return (
    // Main container styling to match the light grey background and overall width
    <Box sx={{ p: 0, pt: 3, maxWidth: 650, mx: "auto", bgcolor: "white", borderRadius: 1 }}>
      {/* Header with New Company button on the right */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", mb: 2, pr: 3 }}>
        <Button
          variant="contained"
          // Match the bright green color from the image
          sx={{
            bgcolor: "#3AC68D",
            "&:hover": { bgcolor: "#32b37e" },
            textTransform: "none",
            boxShadow: 'none' // Remove box shadow for a flatter look
          }}
        >
          New Company
        </Button>
      </Box>

      {/* Company List (MUI List or just Box structure works well here) */}
      <Box sx={{ borderTop: "1px solid #e0e0e0" }}>
        {companies.map((company, index) => (
          <Box
            key={index} // Use index as key since the company name is repetitive
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 1, // Padding top/bottom
              px: 3, // Padding left/right
              // Subtle border only at the bottom for separation, matching the image
              borderBottom: "1px solid #f0f0f0", 
              bgcolor: "white", // White background for the list item
            }}
          >
            <Typography variant="body1" sx={{ color: '#333' }}>
              {company}
            </Typography>
            <Box>
              {/* Edit Icon Button */}
              <IconButton 
                size="small" 
                // Color adjustment for the lighter grey icons in the image
                sx={{ color: '#bdbdbd', '&:hover': { color: '#888' } }} 
              >
                <FiEdit size={16} />
              </IconButton>
              {/* Delete Icon Button */}
              <IconButton 
                size="small"
                // Color adjustment for the lighter grey icons in the image
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