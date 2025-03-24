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
          }}
        >
          {/* Title */}
          <Typography variant="h4" fontWeight="bold" sx={{ color: theme.palette.primary.main }}>
            🚀 Problem Solving
          </Typography>

          {/* Description */}
          <Typography variant="body1" sx={{ mt: 1, mb: 3 }}>
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
                boxShadow: "0 4px 10px rgba(255, 255, 255, 0.2)",
              }}
            />
          </Box>

          {/* LeetCode Profile Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "#111",
              fontWeight: "bold",
              "&:hover": { backgroundColor: theme.palette.secondary.main },
            }}
            href={leetcodeProfile}
            target="_blank"
          >
            Visit My LeetCode Profile
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default ProblemSolving;
