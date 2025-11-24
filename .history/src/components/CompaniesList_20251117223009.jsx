// src/pages/CompaniesPage.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { CompaniesList } from "../components/CompaniesList";

export default function CompaniesPage() {
  const companies = Array(12).fill({ name: "Company 1" });

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Companies
        </Typography>

        <Button variant="contained" color="success">
          New Company
        </Button>
      </Box>

      <CompaniesList companies={companies} />
    </Box>
  );
}
