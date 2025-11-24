// AppLayout.jsx
import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import CompanyList from './CompanyList'; // Ensure the path is correct

function AppLayout() {
  return (
    // Outer Box: Uses Flexbox to arrange children side-by-side
    <Box sx={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
      
      {/* 1. Sidebar Component (Fixed Width) */}
      <Box sx={{ width: '250px', bgcolor: '#f4f4f4', flexShrink: 0, p: 2 }}>
        <Typography variant="h6">Navigation</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography>Dashboard</Typography>
        <Typography>Settings</Typography>
        {/* ... More Sidebar Links ... */}
      </Box>

      {/* 2. Main Content Area (Takes remaining width) */}
      {/* flexGrow: 1 ensures it fills the available space next to the sidebar */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', bgcolor: 'white' }}>
        {/* This is where your CompanyList goes! */}
        <CompanyList /> 
      </Box>

    </Box>
  );
}

export default AppLayout;