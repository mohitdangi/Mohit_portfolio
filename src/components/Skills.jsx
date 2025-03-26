import { Grid, Typography, Card, CardContent } from "@mui/material";
import { FaJava, FaAws } from "react-icons/fa";
import { SiSpringboot, SiReact, SiJavascript, SiGraphql, SiPostgresql, SiMongodb } from "react-icons/si";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", icon: <FaJava size={40} color="#007396" /> },
  { name: "Spring Boot", icon: <SiSpringboot size={40} color="#6DB33F" /> },
  { name: "React.js", icon: <SiReact size={40} color="#61DAFB" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
  { name: "GraphQL", icon: <SiGraphql size={40} color="#E535AB" /> },
  { name: "AWS", icon: <FaAws size={40} color="#FF9900" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Skills = () => {
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: "transparent", padding: "40px 20px", textAlign: "center" }}>
      {/* Animated Heading */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.main }}>
          🚀 Skills
        </Typography>
      </motion.div>

      {/* Animated Skills Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Grid container spacing={3} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <motion.div variants={item}>
                <Card
                  sx={{
                    backgroundColor: "#222222",
                    textAlign: "center",
                    padding: "10px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: theme.shadows[5],
                    },
                  }}
                >
                  <CardContent>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <Typography variant="h6" sx={{ color: "#FFFFFF", marginTop: "10px" }}>
                      {skill.name}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </div>
  );
};

export default Skills;