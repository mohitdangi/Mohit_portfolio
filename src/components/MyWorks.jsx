import { Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
 import dooansh  from "../assets/doansh png-Photoroom.png";

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
    image: "/assets/chatapp.png",
    link: "https://github.com/yourusername/chatapp",
  },
  {
    title: "Insurance Domain",
    description: "A fullstack application have where user can buy ,compare policy and have real time chat room for query",
    image: "/assets/taskmanager.png",
    link: "https://github.com/yourusername/taskmanager",
  },
  
];

const MyWork = () => {
  return (
    <div style={{ backgroundColor: "#111111", padding: "40px 0", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom style={{ color: "#39FF14" }}>
        My Work
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MyWork;
