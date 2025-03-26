import React from "react";
import { Grid, Container, Typography, Box, Paper } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import dooansh from "../assets/doansh png-Photoroom.png";
import spires from "../assets/spires.png";

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
  {
    title: "Interior Design Application",
    description: "A 3D-based interior design tool that helps users visualize and customize home interiors.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVAhYp9qn4Kg_cm1QedEAHjWUtw2yoDebenA&s",
    link: "https://manoj-bhai.vercel.app/",
  },
  {
    title: "Code Sync",
    description: "A real-time code collaboration tool for developers.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRrboxvGcf62uqx7eICG2XTqJ534xWUJthA&s",
    link: "https://code-sync-project.vercel.app/",
  },
  {
    title: "Chat Application",
    description: "A real-time chat application with group and private messaging features.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc2tTWXkQC-UX6MNLxPE2hPzsVRD25maCw8w&s",
    link: "https://real-time-chat-application-rm62.vercel.app/chat",
  },
  {
    title: "Flight Application",
    description: "An airline booking system for searching and reserving flight tickets.",
    image: "https://externlabs.com/blogs/wp-content/uploads/2022/02/New-Project-71-1200x900-1.jpg",
    link: "https://flight-booking-system-six.vercel.app/",
  },
  {
    title: "E-Commerce Application",
    description: "An online shopping platform with product listings, cart, and checkout functionality.",
    image: "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FWhat_is_E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg&w=4500&q=90",
    link: "https://github.com/mohitdangi/E-commerce-react-springboot",
  },
  {
    title: "Industrial Application",
    description: "A management system for industrial operations, inventory, and workflow automation.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWqomW-hxs-Selms0wM2hknoExd-OYpQbMQ&s",
    link: "https://lodhi-industries-final-set.vercel.app/",
  },
];
// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5 // Wait for heading animation to complete
    }
  }
};

const cardItem = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const headingAnimation = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const AllWorks = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        color: theme.palette.text.primary,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        paddingX: 2,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            background: "transparent",
            padding: { xs: 2, sm: 4 },
            borderRadius: 3,
            width: "100%",
          }}
        >
          {/* Animated Heading */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={headingAnimation}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: theme.palette.text.primary,
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              🚀 Projects
            </Typography>
          </motion.div>

          {/* Animated Projects Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
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
        </Paper>
      </Container>
    </Box>
  );
};

export default AllWorks;