import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import neonTheme from "./theme";
import Layout from "./components/Layout";
import Banner from "./pages/Banner";
import ProblemSolving from "./components/ProblemSolving";
import Skills from "./components/Skills";
import MyWork from "./components/MyWorks";
import Challenges from "./pages/Challenges";
import AllWorks from "./pages/AllWorks";
import NameLoader from "./components/NameLoader"; // Import the loader
import "./Global.css"; // Import the global styles

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Show loader for 3 seconds
  }, []);

  return (
    <ThemeProvider theme={neonTheme}>
      <CssBaseline />
      {loading ? (
        <NameLoader /> // Show loader while loading
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <Banner />
                  <ProblemSolving />
                  <Skills />
                  <MyWork />
                </>
              }
            />
            <Route path="dailychallenges" element={<Challenges />} />
            <Route path="works" element={<AllWorks />} />
          </Route>
        </Routes>
      )}
    </ThemeProvider>
  );
}

export default App;
