// --- Your CompanyList.jsx ---

import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Box, Typography, Button, IconButton } from "@mui/material";

function CompanyList() {
  const companies = ["Microsoft", "Google", "Amazon", "Apple", "Tesla", "Netflix"];

  return (
    // Main container is full width
    <Box sx={{ p: 0, pt: 0, width: '100%' }}> 

      {/* Header with New Company button on the right */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", mb: 2, width:'0%'}}> 
        {/* REMOVED pr: 3 here! The main layout Box provides padding */}
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
      <Box sx={{ borderTop: "1px solid #e0e0e0" }}>
        {companies.map((company) => (
          <Box
            key={company}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 1, 
              //  REMOVED px: 3 here! The main layout Box provides padding
              borderBottom: "1px solid #f0f0f0", 
              bgcolor: "white", 
              minWidth: 0, 
              '&:hover': { bgcolor: '#f5f5f5' }
            }}
          >
    
            <Typography 
                variant="body1" 
                sx={{ color: '#333', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flexGrow: 1 }}
            >
              {company}
            </Typography>
            
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