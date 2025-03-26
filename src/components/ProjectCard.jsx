import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <Card
      style={{
        backgroundColor: "#222222",
        textAlign: "center",
        borderRadius: "12px",
        overflow: "hidden",
        transition: "0.3s ease-in-out",
        boxShadow: "0 0 10px rgba(0, 255, 0, 0.3)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 255, 0, 0.8)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 0 10px rgba(0, 255, 0, 0.3)";
      }}
    >
      {/* Project Image */}
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={title}
        style={{ objectFit: "cover" }}
      />

      {/* Project Details */}
      <CardContent>
        <Typography
          variant="h6"
          style={{
            color: "#39FF14",
            fontWeight: "bold",
            textShadow: "0 0 10px #39FF14",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "#CCCCCC",
            marginBottom: "15px",
          }}
        >
          {description}
        </Typography>

        {/* View Project Button */}
        {link && (
          <Button
            href={link}
            target="_blank"
            variant="outlined"
            style={{
              color: "#39FF14",
              borderColor: "#39FF14",
              textTransform: "none",
              fontWeight: "bold",
              transition: "0.3s ease-in-out",
              boxShadow: "0 0 10px #39FF14",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px #39FF14";
              e.currentTarget.style.backgroundColor = "#39FF14";
              e.currentTarget.style.color = "#111111";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 10px #39FF14";
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#39FF14";
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
