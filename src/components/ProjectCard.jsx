import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <Card style={{ backgroundColor: "#222222", textAlign: "center" }}>
      <CardMedia component="img"   height="140" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" style={{ color: "#FFFFFF" }}>
          {title}
        </Typography>
        <Typography variant="body2" style={{ color: "#CCCCCC", marginBottom: "10px" }}>
          {description}
        </Typography>
        {link && (
          <Button
            href={link}
            target="_blank"
            style={{ color: "#39FF14", textTransform: "none" }}
          >
            View Project
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
