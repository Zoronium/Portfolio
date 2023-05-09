import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  ComputersCanvas,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover backdrop-blur bg-no-repeat bg-opacity-5 bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div>
          <div className=" w-full bg-black text-white text-center mt5 left-0 ">
            <p className="p-5">Footer</p>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
