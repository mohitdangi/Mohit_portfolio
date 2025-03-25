import React from "react";
import { Grid, Container, Typography,Box,Paper } from "@mui/material";
import ProjectCard from "../components/ProjectCard"; // Import your ProjectCard component
import { useTheme } from "@mui/material/styles";
import dooansh  from "../assets/doansh png-Photoroom.png";
import spires from "../assets/spires.png";
import insurance from "../assets/Insurance.png";

const projects = [
    {
        title: "Doaansh -Commerce Platform",
        description: "A full-stack e-commerce app made for the client of Act t connect on intership",
        image: dooansh ,
        link: "https://github.com/yourusername/ecommerce",
      },
      {
        title: "Spires recruiter",
        description: "A full stack job portal application worked for Act t connect's own product ",
        image: spires,
        link: "https://github.com/yourusername/chatapp",
      },
      {
        title: "Insurance Domain",
        description: "A fullstack application have where user can buy ,compare policy and have real time chat room for query",
        image: insurance,
        link: "https://github.com/yourusername/taskmanager",
      },
    {
      "title": "Interior Design Application",
      "description": "A 3D-based interior design tool that helps users visualize and customize home interiors.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVAhYp9qn4Kg_cm1QedEAHjWUtw2yoDebenA&s",
      "link": "https://interior-design-app.vercel.app/"
    },
    {
      "title": "Code Sync",
      "description": "A real-time code collaboration tool for developers.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRrboxvGcf62uqx7eICG2XTqJ534xWUJthA&s",
      "link": "https://code-sync-project.vercel.app/"
    },
    {
      "title": "Chat Application",
      "description": "A real-time chat application with group and private messaging features.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc2tTWXkQC-UX6MNLxPE2hPzsVRD25maCw8w&s",
      "link": "https://real-time-chat-application-rm62.vercel.app/login"
    },
    {
      "title": "Flight Application",
      "description": "An airline booking system for searching and reserving flight tickets.",
      "image": "https://externlabs.com/blogs/wp-content/uploads/2022/02/New-Project-71-1200x900-1.jpg",
      "link": "https://flight-booking-system-six.vercel.app/"
    },
    {
      "title": "E-Commerce Application",
      "description": "An online shopping platform with product listings, cart, and checkout functionality.",
      "image": "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FWhat_is_E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg&w=4500&q=90",
      "link": "https://github.com/mohitdangi/E-commerce-react-springboot"
    },
    {
      "title": "Industrial Application",
      "description": "A management system for industrial operations, inventory, and workflow automation.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWqomW-hxs-Selms0wM2hknoExd-OYpQbMQ&s",
      "link": "https://lodhi-industries-final-set.vercel.app/"
    }
  ];
  


const AllWorks = () => {
    const theme = useTheme(); // Use theme

    return (
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "80px", // Prevent footer collision
        }}
      >
        <Container maxWidth="lg">
          <Paper
            elevation={3}
            sx={{
              background: theme.palette.background.default,
              padding: 4,
              borderRadius: 3,
              width: "100%",
            }}
          >
            {/* Title */}
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(45deg, #FF00FF, #39FF14, #00FFFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0px 0px 10px rgba(255,255,255,0.6)",
                marginBottom: "20px",
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              }}
            >
              ⚡ Cool Coding Challenges 🚀
            </Typography>
  
            {/* Projects Grid */}
            <Grid container spacing={3}>
              {projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ProjectCard {...project} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Container>
      </Box>
    );
  };
  

export default AllWorks;
