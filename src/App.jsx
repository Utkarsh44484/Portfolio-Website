import { useState } from "react";

import "./App.css";
import Navbar from "./navbar.jsx";
import Intro from "./Intro.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import Contactme from "./Contactme.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <h1 class="text-yellow-400 text-5xl md:text-9xl">HEllo Tailwind</h1> */}{" "}
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Experience />
      <Contactme />
    </div>
  );
}

export default App;
