import { Grid, Typography, Card, CardContent } from "@mui/material";
import { FaJava, FaAws } from "react-icons/fa"; // Java & AWS Icons
import { SiSpringboot, SiReact, SiJavascript, SiGraphql, SiPostgresql, SiMongodb } from "react-icons/si";

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

const Skills = () => {
  return (
    <div style={{ backgroundColor: "#111111", padding: "40px 0", textAlign: "center" }}>
      {/* Title with Neon Glow Effect */}
      <Typography
        variant="h4"
        gutterBottom
        style={{
          color: "#39FF14",
          textShadow: "0 0 10px #39FF14, 0 0 20px #39FF14",
        }}
      >
        🚀 Skills
      </Typography>

      {/* Skills Grid */}
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Card
              style={{
                backgroundColor: "#222222",
                textAlign: "center",
                padding: "10px",
                boxShadow: "0 0 15px #39FF14", // Neon Glow Effect
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 25px #39FF14")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 15px #39FF14")}
            >
              <CardContent>
                {skill.icon}
                <Typography
                  variant="h6"
                  style={{
                    color: "#FFFFFF",
                    marginTop: "10px",
                    textShadow: "0 0 5px #FFFFFF",
                  }}
                >
                  {skill.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Skills;
