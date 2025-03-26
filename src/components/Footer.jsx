import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const theme = useTheme(); // Get theme values dynamically

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.default,
        textAlign: "center",
        padding: "30px 10px",
        width: "100%",
        boxShadow: `0px -2px 10px ${theme.palette.primary.main}`,
      }}
    >
      {/* Footer Title */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "3px",
          color: theme.palette.primary.main,
        }}
      >
        Connect with me 💻
      </Typography>

      {/* Social Icons */}
      <Box mt={2} mb={2} display="flex" justifyContent="center" gap={2}>
        {[
          { icon: <FaGithub />, link: "https://github.com/mohitdangi" },
          { icon: <FaLinkedin />, link: "https://in.linkedin.com/in/mohit-dangi-497248210" },
          { icon: <FaXTwitter />, link: "https://x.com/theDangiJi" },
          { icon: <SiLeetcode />, link: "https://leetcode.com/u/mohitdangi58368/" },
        ].map((item, index) => (
          <IconButton
            key={index}
            href={item.link}
            target="_blank"
            sx={{
              color: theme.palette.primary.main,
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.2)",
                color: "#ffffff", // Icon turns white on hover
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
          fontWeight: "bold",
        }}
      >
        © {new Date().getFullYear()} Mohit Dangi | All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
