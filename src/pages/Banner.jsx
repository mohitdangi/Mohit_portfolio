import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DeveloperSVG from "../svg/DeveloperSVG";

const BannerSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            background: theme.palette.background.paper,
            padding: 4,
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Left Side - Text */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h6"
              sx={{
                backgroundColor: theme.palette.primary.main,
                display: "inline-block",
                padding: "8px 16px",
                borderRadius: 2,
                color: "#111",
                fontWeight: "bold",
              }}
            >
              👋 Hi There! I'm Onyedika
            </Typography>

            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                mt: 2,
                fontSize: { xs: "2rem", md: "3rem" },
                color: theme.palette.primary.main,
              }}
            >
              A Frontend Engineer
            </Typography>

            <Typography variant="h5" sx={{ mt: 1 }}>
              I Help Startups{" "}
              <Typography
                component="span"
                sx={{ color: theme.palette.secondary.main, fontWeight: "bold" }}
              >
                Launch
              </Typography>{" "}
              And{" "}
              <Typography
                component="span"
                sx={{ color: theme.palette.secondary.main, fontWeight: "bold" }}
              >
                Grow
              </Typography>{" "}
              Their Products
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: theme.palette.text.secondary,
                maxWidth: "600px",
              }}
            >
              I am a software engineer with more than four years of experience.
              Recognized as a practical and effective developer, experienced in
              leading cross-functional teams in a time-pressured setting to
              complete projects on schedule and within budget.
            </Typography>
          </Box>

          {/* Right Side - SVG Illustration */}
          <Box sx={{ flex: 1, textAlign: "center", mt: { xs: 3, md: 0 } }}>
            <DeveloperSVG width="90%" height="auto" />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default BannerSection;
