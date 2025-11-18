import React from "react";
import { Box, Grid, TextField, Button, Typography, Paper } from "@mui/material";

export default function ForgotPassword() {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        bgcolor: "#0f9ceeff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: { xs: "100%", sm: "80%", md: "60%" },
          height: "80vh",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {/* LEFT SIDE */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "#21c9b8",
            padding: 4,
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Forgot Password
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Type your E-mail to recover password.
          </Typography>

          {/* You can remove these later; just for visual design */}
          <Box
            sx={{
              width: "100%",
              height: "200px",
              opacity: 0.3,
              mt: 5,
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/cubes.png')",
            }}
          />
        </Grid>

        {/* RIGHT SIDE */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <img
            src="https://via.placeholder.com/80"
            alt="logo"
            style={{ marginBottom: 20 }}
          />

          <Typography variant="h6" fontWeight={600} mb={2}>
            Reset Your Password
          </Typography>

          <TextField
            fullWidth
            label="Type your E-mail here"
            type="email"
            sx={{ mb: 3 }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#21c9b8",
              "&:hover": { backgroundColor: "#1ba99a" },
            }}
          >
            Reset Password
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}
