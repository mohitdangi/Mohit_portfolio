  import React from "react";
  import { Grid, Container, Typography, Box, Paper } from "@mui/material";
  import ProjectCard from "../components/ProjectCard";
  import { useTheme } from "@mui/material/styles";
  import { motion } from "framer-motion";
  
  // ... (keep your existing projects array)
  const projects = [
    {
      title: "Infinite Scroll Part 2",
      description: "An advanced infinite scrolling implementation.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0r3vSQBGDswUaaYRU0OWMHPxGH07yVwDdJQ&s", // Replace with actual image URL
      link: "https://day-31-infinite-scroll-part2.vercel.app/",
    },
    {
      title: "Stopwatch",
      description: "A simple stopwatch application.",
      image: "https://c.tadst.com/gfx/1200x630/fb-stopwatch2.png?1",
      link: "https://day-5-stopwatch.vercel.app/",
    },
    {
      title: "Password Generator",
      description: "A tool to generate secure passwords.",
      image: "https://miro.medium.com/v2/resize:fit:770/1*-4GqkngAwACkI5cB7Ffvrg.jpeg",
      link: "https://day-1-password-generator.vercel.app/",
    },
    {
      title: "Auto Type Head",
      description: "A type-ahead search feature using Axios.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxgQrn_Wf_VkFsfgWg3cyYKIYbL9gAYCEvg&s",
      link: "https://day-2-auto-type-head.vercel.app/",
    },
    {
      title: "Login and Register",
      description: "User authentication using local storage.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5jv0pcPqyFZLYfWcV9-2lUPdXVJK5TV4KQ&s",
      link: "https://day-6-login-and-register-using-local-storage.vercel.app/",
    },
    {
      title: "Multi-Step Form",
      description: "A multi-step form with validation.",
      image: "https://cdn.wedevs.com/uploads/2018/07/WordPress-multi-step-form.png",
      link: "https://day-18-multi-step-form.vercel.app/",
    },
    {
      title: "Generic Carousel",
      description: "A reusable carousel component.",
      image: "https://i0.wp.com/webdevpuneet.com/wp-content/uploads/2019/09/Screenshot_84.png?fit=820%2C345&ssl=1",
      link: "https://day-10-generic-carousel.vercel.app/",
    },
    {
      title: "Generic Modal",
      description: "A customizable modal component.",
      image: "https://www.creative-tim.com/blog/content/images/wordpress/2017/06/1392433498bootstrap-modal-basic-1.jpg",
      link: "https://day-7-generic-modal.vercel.app/",
    },
    {
      title: "Pagination Component",
      description: "A reusable pagination component.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-na-S0-TE6xJGa-x1hXNaZvFlVbGOqIOBqw&s",
      link: "https://day-3-pagination.vercel.app/",
    },
    {
      title: "Star Rating",
      description: "A star rating system.",
      image: "https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_640.png",
      link: "https://day-12-star-rating.vercel.app/",
    },
    {
      title: "CRUD in React",
      description: "A simple CRUD application.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQKhOosKVsptMn6eOwOeFEfK4BzRttoJgSg&s",
      link: "https://day-15-crud-in-react.vercel.app/",
    },
    {
      title: "Light/Dark Mode Toggle",
      description: "A theme switcher using React state.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBbzh2Ew1_lzd2M_LEhzrpZ816d4VTfbRIw&s",
      link: "https://day-9-light-dark-mode-toggle.vercel.app/",
    },
    {
      title: "Comment Section",
      description: "A simple comment section with replies.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbCCFmvu1T8qRd4a6QyxlXC7Vkhcpkrh6h9A&s",
      link: "https://day-13-comment-section.vercel.app/",
    },
    {
      title: "Generic Tab Component",
      description: "A tab component for easy navigation.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-OZZ_bHxQIZI8sJpc9km_dO1rp0YxaXj5Q&s",
      link: "https://day-11-generic-tab.vercel.app/",
    },
    {
      title: "Async Operations using Redux",
      description: "Handling async operations with Redux.",
      image: "https://strapi.dhiwise.com/uploads/Image_1_The_React_Redux_Flow_Chart_b6b9c0ef58.webp",
      link: "https://day-21-async-operation-using-redux.vercel.app/",
    },
    {
      title: "Tic-Tac-Toe",
      description: "A classic Tic-Tac-Toe game.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1PSsEqaD_wYjBMWsSqubOiF5yZaWPV12CoA&s",
      link: "https://day-14-tic-tac-toe.vercel.app/",
    },
    {
      title: "Multi-Select Search Bar",
      description: "A multi-select dropdown with search.",
      image: "https://d2d2wdgkcw7kfa.cloudfront.net/original/3X/1/4/14746752140cb221b4707028315ccc0b2bfcae44.png",
      link: "https://day-17-multi-select-search-bar.vercel.app/",
    },
    {
      title: "Infinite Scrolling",
      description: "An infinite scrolling component.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0r3vSQBGDswUaaYRU0OWMHPxGH07yVwDdJQ&s",
      link: "https://day-4-infinite-scrolling.vercel.app/",
    },
    {
      title: "Custom Hook",
      description: "A demonstration of custom React hooks.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxiUEyH2aZnMjuc7mIiD5Gx3utCXz4r9XcDQ&s",
      link: "https://day-20-custom-hook.vercel.app/",
    },
    {
      title: "Accordion",
      description: "A simple accordion component.",
      image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*HQkBUPwAR8lV_iHn0e92yw.png",
      link: "https://day-8-accordian.vercel.app/",
    },
    {
      title: "Calculator",
      description: "A basic calculator app.",
      image: "https://cdn.dribbble.com/userupload/31266507/file/original-84d0db4c855af36cb1348e5000dc2077.png?resize=400x0",
      link: "https://day-19-calculator.vercel.app/",
    },
    {
      title: "Bishop Move",
      description: "Chess-based bishop move logic.",
      image: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PeterDoggers/phpdzgpdQ.png",
      link: "https://day-25-bishop-move.vercel.app/",
    },
    {
      title: "Sortable List",
      description: "A drag-and-drop sortable list.",
      image: "https://thumbs.dreamstime.com/b/sort-icon-logo-vector-symbol-list-stock-illustration-isolated-white-background-258073923.jpg",
      link: "https://day-27-sortable-list.vercel.app/",
    },
    {
      title: "Generic Table",
      description: "A reusable table component.",
      image: "https://cdn.prod.website-files.com/64d3ea9763ecfeda51231f05/64d45815ec96f0852e112af1_5e1a31b6e402b64eec7e0580_16%2520-%2520Fixed%2520Column.gif",
      link: "https://day-29-generic-table.vercel.app/",
    },
    {
      title: "Draggable Notes",
      description: "A sticky notes app with drag-and-drop.",
      image: "https://www.jqueryscript.net/images/Draggable-Sticky-Note-Tellis.jpg",
      link: "https://day-30-dragable-notes.vercel.app/",
    },
    {
      title: "Drag and Drop",
      description: "A simple drag-and-drop functionality.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFb1ohdat8GPy2wqiwRb-QOTF8DovNSdE2w&s",
      link: "https://day-16-drag-and-drop.vercel.app/",
    },
    {
      title: "EMI Calculator",
      description: "A loan EMI calculator.",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/23eff7103530905.Y3JvcCwxMjIzLDk1Niw3Miww.png",
      link: "https://day-22-emi-calculator.vercel.app/",
    },
    {
      title: "Lazy Loading",
      description: "Optimized image lazy loading.",
      image: "https://ionic.io/blog/wp-content/uploads/2019/03/lazyloading-in-angular.png",
      link: "https://day-23-lazy-loading.vercel.app/",
    },
    {
      title: "Generic Dropdown",
      description: "A reusable dropdown component.",
      image: "https://miro.medium.com/v2/resize:fit:1048/1*HZUv1zSQaB4ZTaHoJ_tcxg.png",
      link: "https://day-26-generic-dropdown.vercel.app/",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  const cardItem = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15
      }
    }
  };
  
  const titleAnimation = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
  
  const Challenges = () => {
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
            {/* Animated Title */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={titleAnimation}
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
                ⚡ Exciting Coding Challenges 🚀
              </Typography>
            </motion.div>
  
            {/* Animated Challenges Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Grid container spacing={3} justifyContent="center">
                {projects.map((project, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <motion.div 
                      variants={cardItem}
                      whileHover={{ y: -5 }}
                    >
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
  
  export default Challenges;