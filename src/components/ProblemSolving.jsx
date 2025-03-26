import React from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import leetcodeState from "../assets/leetcodeState.png";

const ProblemSolving = () => {
  const theme = useTheme();
  const leetcodeProfile = "https://leetcode.com/u/mohitdangi58368/"; 

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "transparent",
        color: theme.palette.text.primary,
        py: 6,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md">
        {/* Motion wrapper that triggers when component comes into view */}
        <motion.div
          initial={{ rotate: 0 }}
          whileInView={{
            rotate: [0, -8, 6, -4, 2, -1, 0.5, 0],
          }}
          viewport={{ once: true }} // Only animate once
          transition={{
            duration: 3,
            ease: "easeOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 0.95, 1],
          }}
          style={{
            transformOrigin: "top center",
          }}
        >
          <Paper
            elevation={1}
            sx={{
              background: theme.palette.background.paper,
              padding: 4,
              borderRadius: 3,
              textAlign: "center",
            }}
          >
            {/* Title */}
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                color: theme.palette.primary.main,
              }}
            >
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
                }}
              />
            </Box>

            {/* LeetCode Profile Button */}
            <Button
              href={leetcodeProfile}
              target="_blank"
              variant="outlined"
              sx={{
                marginTop: "30px",
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "bold",
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                textTransform: "none",
                transition: "0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.palette.primary.main;
                e.currentTarget.style.color = theme.palette.background.paper;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = theme.palette.primary.main;
              }}
            >
              Visit my profile
            </Button>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProblemSolving;