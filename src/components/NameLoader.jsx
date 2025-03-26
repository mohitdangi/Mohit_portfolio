import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const Loader = () => {
  const theme = useTheme();
  const chars = "01XΩΔΣΛΘΨΞ"; // Matrix-style characters
  const totalLines = 15; // Adjust for mobile (less lines = more readable)

  const [rain, setRain] = useState([]);

  useEffect(() => {
    const generateRain = () => {
      let drops = [];
      for (let i = 0; i < totalLines; i++) {
        let line = [];
        for (let j = 0; j < 10; j++) {
          line.push(chars[Math.floor(Math.random() * chars.length)]);
        }
        drops.push(line.join(""));
      }
      setRain(drops);
    };

    generateRain();
    const interval = setInterval(generateRain, 400); // Update every 400ms
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {rain.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: i * 0.1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            fontSize: "20px",
            color: theme.palette.primary.main,
            fontFamily: "monospace",
            textShadow: `0px 0px 10px ${theme.palette.primary.main}`,
          }}
        >
          {line}
        </motion.div>
      ))}
    </Box>
  );
};

export default Loader;
