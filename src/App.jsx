import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import {
  Navbar,
  About,
  Hero,
  Contact,
  Experience,
  Technologies,
  Works,
} from "./components/index";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <BrowserRouter>
      <div className={darkMode ? "dark" : ""}>
        <div className="relative z-0 bg-backgroundWhite dark:bg-background">
          <div className="  w-full pt-5 ">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Hero />
          </div>
          <About />
          <Experience />
          <Technologies />
          <Works />
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
