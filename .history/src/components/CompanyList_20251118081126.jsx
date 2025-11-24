import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Box, Typography, Button, IconButton } from "@mui/material";

function CompanyList() {
  // CORRECTED: Using meaningful company names now
  const companies = ["Microsoft", "Google", "Amazon", "Apple", "Tesla", "Netflix"];

  return (
    // Main container is full width
    <Box sx={{ p: 0, pt: 3 }}> 

      {/* Header with New Company button on the right */}
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
      <Box sx={{ borderTop: "1px solid #e0e0e0" }}>
        {companies.map((company) => (
          <Box
            key={company} // Using company name as the key (since they are distinct)
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 1, 
              px: 3, 
              borderBottom: "1px solid #f0f0f0", 
              bgcolor: "white", 
              // Optional hover effect
              '&:hover': { bgcolor: '#f5f5f5' }
            }}
          >
            {/* The company variable now holds the meaningful name */}
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