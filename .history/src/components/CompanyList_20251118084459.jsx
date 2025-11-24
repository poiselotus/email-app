// --- Your CompanyList.jsx (Corrected) ---

import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Box, Typography, Button, IconButton } from "@mui/material";

function CompanyList() {
  // 1. Updated company list to match the visual in the image for demonstration purposes
  // The image shows repeated "Company 1", so we'll use a larger list to match the number of rows.
  // We'll use the original names for better real-world example, but repeat them to match the row count (9 rows in the image).
  const companies = [
    "Microsoft", 
    "Google", 
    "Amazon", 
    "Apple", 
    "Tesla", 
    "Netflix",
    "SpaceX", 
    "Meta",
    "Adobe"
  ];

  // To match the image's "Company 1" exactly, you would use:
  // const companies = Array(9).fill("Company 1"); 

  return (
    // Main container for the list:
    // **ISSUE FIX:** Added padding (px: 3) to the main container to match the overall spacing/margin seen in the image.
    <Box sx={{ p: 0, pt: 0, width: '100%', px: 3 }}> 

      {/* Header with New Company button on the right */}
      {/* **ISSUE FIX:** Removed the extra margin (mb: 2) on the header box 
      as the list items start immediately after the header button in the image */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}> 
        <Button
          variant="contained"
          sx={{
            bgcolor: "#2DC4A8",
            "&:hover": { bgcolor: "#32b37e" },
            textTransform: "none",
            boxShadow: 'none'
          }}
        >
          New Company
        </Button>
      </Box>

      {/* Company List Container */}
      {/* **ISSUE FIX:** Removed the borderTop, as the image looks like it has 
      no border above the first row, only between the rows. 
      If a top border is desired, it should be on the first list item or on this container. */}
      <Box sx={{ mt: 2 }}> {/* Added a top margin to separate list from the button */}
        {companies.map((company, index) => (
          <Box
            key={company + index} // Use index if company names might repeat
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 2, // **ISSUE FIX:** Increased vertical padding (py) to match the spacing in the image
              // The rows stretch across the full width defined by the parent Box's padding
              borderBottom: "1px solid #f0f0f0", 
              bgcolor: "white", 
              minWidth: 0, 
              // **IMPROVEMENT:** Conditional styling for the first item if a top border is needed
              borderTop: index === 0 ? "1px solid #f0f0f0" : 'none', 
              '&:hover': { bgcolor: '#f5f5f5' }
            }}
          >
            {/* Company Name Typography */}
            <Typography 
              variant="body1" 
              sx={{ color: '#333', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flexGrow: 1 }}
            >
              {company}
            </Typography>
            
            {/* Icons Container */}
            <Box sx={{ flexShrink: 0, display: 'flex' }}>
              <IconButton size="small" sx={{ color: '#bdbdbd', '&:hover': { color: '#888' } }}>
                <FiEdit size={16} />
              </IconButton>
              <IconButton size="small" sx={{ color: '#bdbdbd', ml: 1, '&:hover': { color: '#888' } }}>
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