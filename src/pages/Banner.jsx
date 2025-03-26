import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import dev from "../assets/dev-removebg-preview.png";

const BannerSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        position: "relative",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Paper
          elevation={0}
          sx={{
            background: "transparent",
            padding: 4,
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Left Side - Text */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ flex: 1, textAlign: "left" }}
          >
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

            <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold", color: "#fff" }}>
              1+ Years of Experience in Frontend, Backend & AWS
            </Typography>

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
       I specialize in <strong>JavaScript</strong>, <strong>React.js</strong>,
        <strong>Java</strong>, and <strong>Spring Boot</strong>, 
        with expertise in building scalable applications.
        Know how to write  modular code 
         with a test-driven approach, ensuring optimized and
          secure solutions 
            </Typography>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ flex: 1, textAlign: "center", marginTop: 20 }}
          >
            <img
              src={dev}
              alt="Developer"
              style={{ width: "90%", height: "auto" }}
            />
          </motion.div>
        </Paper>
      </Container>
    </Box>
  );
};

export default BannerSection;
