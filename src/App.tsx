import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects"; // Componente para pantallas grandes
import ProjectsMobile from "./components/ProjectsMobile"; // Componente para pantallas medianas y pequeñas
import Skills from "./pages/Skills";
import Layout from "./styles/Layout";
import { useTheme, useMediaQuery } from "@mui/material"; // Para detectar tamaños de pantalla

function App() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Detecta pantallas medianas y pequeñas

  return (
    <Router>
      <Layout>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={isSmallScreen ? <ProjectsMobile /> : <Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
