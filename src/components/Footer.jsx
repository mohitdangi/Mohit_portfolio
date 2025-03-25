import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const theme = useTheme(); // Get theme values dynamically

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.default, // Dark theme background
        textAlign: "center",
        padding: "20px 0",
        position: "relative",
        bottom: 0,
        width: "100%",
        boxShadow: `0px -2px 10px ${theme.palette.primary.main}`, // Neon Glow from theme
      }}
    >
      {/* Footer Title */}
      <Typography
        variant="h6"
        sx={{
          fontFamily: theme.typography.fontFamily,
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "3px",
          textShadow: `0px 0px 10px ${theme.palette.primary.main}, 0px 0px 20px ${theme.palette.secondary.main}`,
        }}
      >
        Connect with me 💻
      </Typography>

      {/* Social Icons */}
      <Box mt={1} mb={1} display="flex" justifyContent="center">
        {[
          { icon: <FaGithub />, link: "https://github.com/yourusername" },
          { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourusername" },
          { icon: <FaXTwitter />, link: "https://x.com/yourusername" },
          { icon: <SiLeetcode />, link: "https://leetcode.com/yourusername" },
        ].map((item, index) => (
          <IconButton
            key={index}
            href={item.link}
            target="_blank"
            sx={{
              color: theme.palette.primary.main,
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.2) rotate(5deg)",
                color: theme.palette.secondary.main,
              },
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Box>

      {/* Copyright Text */}
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.primary.main,
          textShadow: `0px 0px 5px ${theme.palette.primary.main}`,
          animation: "neonGlow 1.5s infinite alternate",
          "@keyframes neonGlow": {
            "0%": { textShadow: `0px 0px 5px ${theme.palette.primary.main}` },
            "100%": { textShadow: `0px 0px 15px ${theme.palette.primary.main}` },
          },
        }}
      >
        © {new Date().getFullYear()} Your Name | All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
