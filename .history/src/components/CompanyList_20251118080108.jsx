\import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Box, Typography, Button, IconButton, Divider } from "@mui/material";

function CompanyList() {
  const companies = ["Microsoft", "Google", "Amazon"];

  return (
    <Box sx={{ p: 3, maxWidth: 500, mx: "auto", bgcolor: "#f9f9f9", borderRadius: 2, boxShadow: 2 }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h5">Companies</Typography>
        <Button variant="contained" color="primary">
          New Company
        </Button>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Company List */}
      {companies.map((company) => (
        <Box
          key={company}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
            mb: 1,
            bgcolor: "white",
            borderRadius: 1,
            boxShadow: 1,
          }}
        >
          <Typography>{company}</Typography>
          <Box>
            <IconButton color="primary" size="small">
              <FiEdit />
            </IconButton>
            <IconButton color="error" size="small">
              <FiTrash2 />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default CompanyList;
