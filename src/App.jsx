import { useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Header from "./components/header/header";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <About/> */}
    {/* <Header/> */}
    <Education/>
    </>
  );
}


export default App;

