import { useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Header from "./components/header/header";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <About/> */}
    {/* <Header/> */}
    {/* <Education/> */}
    {/* <Experience/> */}
    <Projects/>
    </>
  );
}


export default App;

