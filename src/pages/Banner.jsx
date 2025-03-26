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
        justifyContent: "center",
        padding: 4,
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
            boxShadow: `0 0 15px ${theme.palette.primary.main}`, // Neon Glow Effect
          }}
        >
          {/* Left Side - Text */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
  {/* Greeting */}
  <Typography
    variant="h6"
    sx={{
      backgroundColor: theme.palette.primary.main,
      display: "inline-block",
      padding: "8px 16px",
      borderRadius: 2,
      color: "#111",
      fontWeight: "bold",
      textShadow: `0 0 10px ${theme.palette.primary.main}`,
    }}
  >
    👋 Hi There! I'm Mohit
  </Typography>

  {/* Title */}
  <Typography
    variant="h3"
    fontWeight="bold"
    sx={{
      mt: 2,
      fontSize: { xs: "2rem", md: "3rem" },
      color: "#fff",
      textShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 20px ${theme.palette.primary.main}`,
    }}
  >
    Full-Stack Developer
  </Typography>

  {/* Short Introduction */}
  <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold", color: "#fff" }}>
    1+ Years of Experience in Frontend, Backend & AWS
  </Typography>

  {/* Experience & Tech Stack */}
  <Typography
    variant="body1"
    sx={{
      mt: 2,
      color: "#fff",
      maxWidth: "600px",
      textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
      lineHeight: 1.6,
    }}
  >
    I specialize in <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>Java</strong>, and <strong>Spring Boot</strong>, 
    with expertise in building scalable applications. Currently, I'm working on a <strong>Fintech application</strong>, 
    leveraging my skills in <strong>AWS services</strong> and cloud computing to deliver high-performance solutions.
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
