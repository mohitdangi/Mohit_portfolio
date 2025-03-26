import React from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import leetcodeState from "../assets/leetcodeState.png";

const ProblemSolving = () => {
  const theme = useTheme();
  const leetcodeProfile = "https://leetcode.com/your-profile/"; // Change this to your actual LeetCode URL

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: 6,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            background: theme.palette.background.paper,
            padding: 4,
            borderRadius: 3,
            textAlign: "center",
            boxShadow: `0 0 15px ${theme.palette.primary.main}`, // Neon Glow Effect
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: theme.palette.primary.main,
              textShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 20px ${theme.palette.primary.main}`,
            }}
          >
            🚀 Problem Solving
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              mt: 1,
              mb: 3,
              textShadow: `0 0 5px ${theme.palette.text.secondary}`,
            }}
          >
            I enjoy tackling challenging coding problems and sharpening my problem-solving skills.
            I actively solve problems on LeetCode to improve my data structures and algorithms knowledge.
          </Typography>

          {/* LeetCode Stats Image */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <img
              src={leetcodeState}
              alt="LeetCode Stats"
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "10px",
                boxShadow: `0 0 10px ${theme.palette.primary.main}`,
              }}
            />
          </Box>

          {/* LeetCode Profile Button */}
          <Button
        href="https://github.com/yourusername"
        target="_blank"
        variant="outlined"
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#39FF14",
          borderColor: "#39FF14",
          textTransform: "none",
          transition: "0.3s ease-in-out",
          boxShadow: "0 0 15px #39FF14",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 0 25px #39FF14";
          e.currentTarget.style.backgroundColor = "#39FF14";
          e.currentTarget.style.color = "#111111";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 0 15px #39FF14";
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#39FF14";
        }}
      >
        Visit my profile
      </Button>

        </Paper>
      </Container>
    </Box>
  );
};

export default ProblemSolving;
