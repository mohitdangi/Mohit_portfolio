import { Grid, Typography, Button } from "@mui/material";
import ProjectCard from "./ProjectCard";
import dooansh from "../assets/doansh png-Photoroom.png";
import spires from "../assets/spires.png";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Doaansh - Commerce Platform",
    description: "A full-stack e-commerce app made for the client of Act t connect during internship.",
    image: dooansh,
    link: "https://doaansh.com/",
  },
  {
    title: "Spires Recruiter",
    description: "A full-stack job portal application developed for Act t connect's own product.",
    image: spires,
    link: "https://www.spiresrecruit.com/",
  },
  {
    title: "Insurance Domain",
    description: "A full-stack application where users can buy, compare policies, and chat in real-time for queries.",
    image: "https://static.investindia.gov.in/s3fs-public/2019-05/Insurance1.jpg",
    link: "https://insurance-domain.netlify.app/",
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const MyWork = () => {
  const theme = useTheme();

  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      style={{ backgroundColor: "transparent", padding: "50px 30px", textAlign: "center" }}
    >
      {/* Animated Title */}
      <motion.div variants={fadeInUp}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            color: theme.palette.primary.main, 
            marginBottom: "30px",
            fontWeight: "bold"
          }}
        >
          🚀 My Work
        </Typography>
      </motion.div>

      {/* Animated Projects Grid */}
      <motion.div variants={container}>
        <Grid container spacing={3} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={cardItem}>
                <ProjectCard {...project} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Animated Button */}
      <motion.div
        variants={fadeInUp}
        transition={{ delay: 0.6 }} // Delay to appear after cards
      >
       <Button
  component={Link}
  to="/works"  // This should match your route path
  variant="outlined"
  sx={{
    marginTop: "30px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.paper,
    },
  }}
>
  View All Works
</Button>
      </motion.div>
    </motion.div>
  );
};

export default MyWork;