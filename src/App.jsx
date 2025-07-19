import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
