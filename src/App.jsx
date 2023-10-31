import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  About,
  Hero,
  Contact,
  Experience,
  FeedBack,
  Technologies,
  Works,
} from "./components/index";
import { Feed } from "@mui/icons-material";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-quatenary">
        <div className="w-full pt-5 ">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Technologies />
        <Works />
        <FeedBack />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

//bg-hero-pattern bg-cover bg-no-repeat bg-center
