import { Grid, Typography, Button } from "@mui/material";
import ProjectCard from "./ProjectCard";
import dooansh from "../assets/doansh png-Photoroom.png";
import spires from "../assets/spires.png";
import insurance from "../assets/Insurance.png";

const projects = [
  {
    title: "Doaansh - Commerce Platform",
    description: "A full-stack e-commerce app made for the client of Act t connect during internship.",
    image: dooansh,
    link: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Spires Recruiter",
    description: "A full-stack job portal application developed for Act t connect's own product.",
    image: spires,
    link: "https://github.com/yourusername/chatapp",
  },
  {
    title: "Insurance Domain",
    description: "A full-stack application where users can buy, compare policies, and chat in real-time for queries.",
    image: insurance,
    link: "https://github.com/yourusername/taskmanager",
  },
];

const MyWork = () => {
  return (
    <div style={{ backgroundColor: "#111111", padding: "50px 20px", textAlign: "center" }}>
      {/* Title with Neon Glow Effect */}
      <Typography
        variant="h4"
        gutterBottom
        style={{
          color: "#39FF14",
          textShadow: "0 0 10px #39FF14, 0 0 20px #39FF14",
          marginBottom: "30px",
        }}
      >
        🚀 My Work
      </Typography>

      {/* Projects Grid */}
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>

      {/* Button with Neon Hover Effect */}
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
        View All Works
      </Button>
    </div>
  );
};

export default MyWork;
