import "./App.css";
import Header from "./components/Header.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import SectionTabs from "./components/SectionTabs.jsx";
import Skills from "./components/Skills.jsx";
import Sec1Projects from "./components/Sec1Projects.jsx";
import Section2Form from "./components/Section2Form.jsx";
import Section3 from "./components/Section3.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Home />
        <Skills />
        <SectionTabs />
        <Routes>
          <Route path="/sec1projects" element={<Sec1Projects />} />
          <Route path="/section2form" element={<Section2Form />} />
          <Route path="/section3" element={<Section3 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
