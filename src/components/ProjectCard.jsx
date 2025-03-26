import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#222",
        textAlign: "center",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0px 4px 8px rgba(0, 255, 0, 0.2)",
        transition: "transform 0.2s ease-in-out",
        "&:hover": { transform: "scale(1.02)" },
      }}
    >
      {/* Project Image */}
      <CardMedia component="img" height="160" image={image} alt={title} sx={{ objectFit: "cover" }} />

      {/* Project Details */}
      <CardContent>
        <Typography variant="h6" sx={{ color: "#39FF14", fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#CCCCCC", mb: 2 }}>
          {description}
        </Typography>

        {/* View Project Button */}
        {link && (
          <Button
            href={link}
            target="_blank"
            variant="outlined"
            sx={{
              color: "#39FF14",
              borderColor: "#39FF14",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#39FF14",
                color: "#222",
              },
            }}
          >
            View Project
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
